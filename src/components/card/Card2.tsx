import React, { Children } from "react";
import { Outfit } from "next/font/google";
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
        className={`flex flex-col justify-center bg-white w-1/4 shadow-lg rounded-2xl h-1/5 overflow-hidden  ${className}`}
      >
        <div
          className="justify-start content-start bg-no-repeat h-20 w-20"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {" "}
        </div>
        <div className="flex justify-start items-center h-2/4 bg-transparent p-10">
          <TitleCard text={titlecard} className="font-bold"></TitleCard>
        </div>
        <div
          className={`flex justify-center items-center h-2/4 bg-white text-blue-900 " ${classNameChildrens}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Card2;
