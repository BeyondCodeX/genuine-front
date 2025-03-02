"use client";
import React, { useState } from "react";
import menuIcon from "@/images/IsoGE.svg"; // Asegúrate de importar la imagen

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of the nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={handleClick} className="absolute top-0 right-0 p-4">
        <img src={menuIcon.src} alt="Menu" className="w-auto md:w-full" /> {/* Imagen del botón */}
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 mt-12 bg-white shadow-lg rounded-lg p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#home" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-800 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-800 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;