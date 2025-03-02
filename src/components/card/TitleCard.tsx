import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin-ext"] });

interface TitleCardProps {
  className?: string;
  text: string;
  text2?: string;
}

const TitleCard = ({ className, text, text2 }: TitleCardProps) => {
  return (
    <>
      <div
        className={`flex justify-center items-center h-2/4 bg-transparent text-blue-950  text-3xl ${className} ${outfit.className}`}
      >
        {text}
        {text2 && <span className="bg-blue-950 text-white ">{text2}</span>}
      </div>
    </>
  );
};

export default TitleCard;
