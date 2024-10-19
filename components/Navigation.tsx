"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navElement = document.getElementById("nav");
    if (navElement) {
      setNavHeight(navElement.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className="content relative w-full bg-black text-white py-10 font-['DistilleryStrong'] text-2xl border-b-2 border-white z-40">
      <div className="w-full max-w-[1000px] mx-auto flex justify-end md:justify-center">
        {/* Left side - navigation links */}
        <div className="hidden md:flex w-1/2 mr-[100px] justify-end pr-12 space-x-6">
          <Link href="/menu" className="transition-colors duration-300 ease-in-out hover:text-green-500">
           Menu
          </Link>
          <Link href="/kontakt" className="transition-colors duration-300 ease-in-out hover:text-green-500">
            Kontakt
          </Link>
        </div>
        {/* Logo in the center */}
          <div
            className="logo-container"
          ></div>
        {/* Right side - navigation links */}
        <div className="hidden md:flex w-1/2 ml-[100px] pl-12 space-x-6">
          <Link href="/galeria" className="transition-colors duration-300 ease-in-out hover:text-green-500">
            Galeria
          </Link>
          <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-green-500">
            O nas
          </Link>
        </div>
        <div className="z-50 flex justify-self-end mx-6 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaXmark size={35} /> : <FaBars size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen) */}
      {isMenuOpen && (
        <div id="mobileMenu" 
        className="fixed inset-0 w-full h-full bg-black text-white flex flex-col justify-center items-center z-39"
        >
          <Link
            href="/"
            className="py-4 text-2xl hover:text-green-500"
            onClick={toggleMenu}
          >
            O NAS
          </Link>
          <Link
            href="/galeria"
            className="py-4 text-2xl hover:text-green-500"
            onClick={toggleMenu}
          >
            GALERIA
          </Link>
          <Link
            href="/kontakt"
            className="py-4 text-2xl hover:text-green-500"
            onClick={toggleMenu}
          >
            KONTAKT
          </Link>
          <Link
            href="/menu"
            className="py-4 text-2xl hover:text-green-500"
            onClick={toggleMenu}
          >
            MENU
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
