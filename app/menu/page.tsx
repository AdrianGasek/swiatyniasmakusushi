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
        <h2 className="text-3xl font-bold mb-6">KATEGORIE</h2>
        <ul className="flex flex-wrap justify-start">
          <li
            className={`text-3xl mr-4 mb-2 cursor-pointer ${
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
              className={`text-3xl mr-4 mb-2 cursor-pointer ${
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
      <div className="sm:w-1/2 text-white flex flex-col w-full items-center h-full max-h-[360px] overflow-y-auto sm:max-h-[600px]">
        {filteredMenu.map((category, index) => (
          <div key={index} className="mb-8 w-full sm:max-w-[400px] sm:w-full sm:flex flex-col">
            <h3 className="text-[30px] font-semibold mb-4">{category.title}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx} className="flex justify-between mb-2 text-[30px]">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Categories for larger screens */}
      <div className="hidden sm:flex sm:w-1/2 text-white justify-center items-center flex-col">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">KATEGORIE</h2>
        <ul className="grid grid-flow-row gap-1 grid-cols-3">
          <li
            className={`text-[30px] text-center cursor-pointer ${
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
              className={`text-[30px] text-center cursor-pointer ${
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
