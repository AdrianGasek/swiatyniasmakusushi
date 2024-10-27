"use client";
import React, { useEffect, useState, useMemo } from "react";
import { FaLeaf, FaPepperHot, FaFire, FaTruck } from "react-icons/fa6";

interface MenuItem {
  title: string;
  price: string;
  items?: string[];
  qty?: string;
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
        <h2 className="text-[35px] font-bold mb-6">KATEGORIE</h2>
        <div className="flex flex-rown items-center justify-center p-1 border-2 border-green-400 text-[35px] rounded-lg mb-5">
          <FaTruck className="text-green-400" />
          <p className="font-bold text-green-400 ml-2">Dostawa za darmo!</p>
        </div>
        <ul className="flex flex-wrap justify-start">
          <li
            className={`text-[35px] mr-4 mb-2 cursor-pointer ${
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
              className={`text-[35px] mr-4 mb-2 cursor-pointer ${
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
          <div
            key={index}
            className="mb-8 w-full sm:max-w-[400px] sm:w-full sm:flex flex-col"
          >
            <h3 className="text-[35px] font-semibold mb-4">{category.title}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col justify-between mb-2 text-[35px]"
                >
                  <div className="flex justify-between w-full">
                    <span>
                      <span>{item.title}</span>
                      {item.qty && (
                        <span className="ml-2 font-bold">{item.qty}</span>
                      )}
                    </span>
                    <span className="font-bold">{item.price}zł</span>
                  </div>
                  {item.items && item.items.length > 0 && (
                    <ul className="ml-4 mt-1">
                      {item.items.map((el, index) => (
                        <li key={index} className="text-[30px]">
                          {el}
                        </li>
                      ))}
                    </ul>
                  )}
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
        <div className="flex flex-rown items-center justify-center p-2 text-xl mt-8">
          <FaTruck className="text-green-400" />
          <p className="font-bold text-green-400 ml-2">Dostawa za darmo!</p>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
