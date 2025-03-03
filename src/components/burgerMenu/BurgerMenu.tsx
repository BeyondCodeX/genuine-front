"use client";
import React, { useState } from "react";
import menuIcon from "@/images/IsoGE.svg"; // Asegúrate de importar la imagen
import closeImage from "@/images/Vector.png";
import MenuItem from "./MenuItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of the nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="burger">
      <button onClick={handleClick} className="fixed top-0 right-0 p-4 z-50">
        <img src={menuIcon.src} alt="Menu"  className=" w-auto md:w-full  " />
      </button>
      {isOpen && (
        
        <div id="white box" className="fixed top-0 right-0 mt-0 bg-white shadow-lg rounded-lg p-4 z-40 w-2xs pt-20 ">
          <button onClick={handleClick} className="fixed top-1 right-60 p-4 z-50">
        <img src={closeImage.src} alt="Menu"  className=" w-auto md:w-full  " />
      </button>
          <nav className="flex flex-col items-center">
            <MenuItem text="Inicio" href="inicio" />
            <MenuItem text="¿Quiénes somos?" href="sec2" />
            <MenuItem text="Somos Estadounidenses" href="sec3" />
            <MenuItem text="Únete a Genuine" href="sec4" />
          </nav>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
