import React from "react";

interface MenuItemProps {
  text: string;
  href: string;
}

const MenuItem = ({ text, href }: MenuItemProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return <button onClick={() => scrollToSection(href)} className="w-full">{text}</button>;
};

export default MenuItem;
