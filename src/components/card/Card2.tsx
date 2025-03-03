"use client";
import React from "react";
import TitleCard from "./TitleCard";
import { StaticImageData } from "next/image";
interface Card2Props {
  className?: string;
  titlecard: string;
  children?: React.ReactNode;
  classNameChildrens?: string;
  image?: string | StaticImageData;
}

const Card2 = ({
  className,
  titlecard,
  children,
  classNameChildrens,
  image,
}: Card2Props) => {
  const imageUrl = typeof image === "string" ? image : image?.src;

  return (
    <>
      <div
        className={`flex flex-col justify-center items-start bg-white w-1/4 shadow-lg rounded-2xl h-auto p-6 gap-3 border-2 mt-1 ${className}`}
      >
        <img
          src={imageUrl}
          alt="Logo"
          className="w-[calc(80px)] h-auto max-w-[calc(120px)] min-w-[calc(80px)]"
        />
        <div className="flex justify-start items-start h-2/4 bg-transparent ">
          <TitleCard text={titlecard} className="font-bold "></TitleCard>
        </div>
        <div
          className={`flex justify-center items-center h-2/4 bg-white text-blue-900 font-outfit"  ${classNameChildrens}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Card2;
