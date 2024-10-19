"use client";
import React, { useEffect, useState, useMemo } from "react";
import { FaLeaf, FaPepperHot, FaFire } from "react-icons/fa6";

interface MenuItem {
  title: string;
  price: string;
}

interface MenuCategory {
  category: string;
  title: string;
  items: MenuItem[];
}

interface Category {
  category: string;
  id: string;
}

const MenuComponent = () => {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    // Fetch menu.json and categories.json
    const fetchMenu = async () => {
      try {
        const menuResponse = await fetch("/data/menu.json");
        const categoriesResponse = await fetch("/data/categories.json");

        const menuData = await menuResponse.json();
        const categoriesData = await categoriesResponse.json();

        setMenu(menuData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const filteredMenu = useMemo(() => {
    if (selectedCategory === "all") {
      return menu;
    }
    return menu.filter((category) => category.category === selectedCategory);
  }, [selectedCategory, menu]);

  if (loading) {
    return <div className="text-white">Ładowanie...</div>;
  }

  return (
    <div className="w-full px-10 sm:flex justify-center items-start py-20 bg-black">
      {/* Categories for mobile screens (at the top) */}
      <div className="block sm:hidden text-white mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">KATEGORIE</h2>
        <ul className="flex flex-wrap justify-start">
          <li
            className={`mr-4 mb-2 cursor-pointer ${
              selectedCategory === "all"
                ? "text-green-400 underline underline-offset-8"
                : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            Wszystkie
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`mr-4 mb-2 cursor-pointer ${
                selectedCategory === category.category
                  ? "text-green-400 underline underline-offset-8"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu items */}
      <div className="flex flex-col w-full sm:w-1/2 text-white">
        {filteredMenu.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx} className="flex justify-between mb-2">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Categories for larger screens */}
      <div className="hidden sm:block sm:w-1/2 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">KATEGORIE</h2>
        <ul className="grid grid-flow-row gap-2 grid-cols-[repeat(auto-fit,minmax(0,auto))]">
          <li
            className={`cursor-pointer ${
              selectedCategory === "all"
                ? "text-green-400 underline underline-offset-8"
                : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            Wszystkie
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer ${
                selectedCategory === category.category
                  ? "text-green-400 underline underline-offset-8"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuComponent;
