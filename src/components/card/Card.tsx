import React, { Children } from "react";
import { Outfit } from "next/font/google";
import TitleCard from "./TitleCard";
interface CardProps {
  className?: string;
  titlecard: string;
  titlecard2?: string;
  children?: React.ReactNode;
  width?: string;
  classNameChildrens?: string;
}

const Card = ({
  className,
  titlecard,
  titlecard2,
  children,
  classNameChildrens,
}: CardProps) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center bg-white w-1/4 shadow-lg rounded-2xl h-96 overflow-hidden  ${className}`}
      >
        <div className="flex justify-center items-center h-2/4 bg-gradient-to-t from-violet-400 via-violet-300 to-violet-50 p-10">
          <TitleCard text={titlecard} text2={titlecard2}></TitleCard>
        </div>
        <div
          className={`flex justify-center items-center h-2/4 bg-white" ${classNameChildrens}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
