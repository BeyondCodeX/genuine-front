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
        className={`flex flex-col justify-center bg-white shadow-lg rounded-2xl min-h-96 overflow-hidden w- ${className}`}
      >
        <div className="flex justify-center items-center min-h-50 bg-gradient-to-t from-violet-400 via-violet-300 to-violet-50 p-10 pt-20  overflow-hidden">
          <TitleCard
            text={titlecard}
            text2={titlecard2}
            className="font-bold"
          ></TitleCard>
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
