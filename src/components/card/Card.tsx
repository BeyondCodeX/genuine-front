import React from "react";
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
        id="card"
        className={`flex flex-col justify-center bg-white shadow-lg rounded-2xl min-h-96 overflow-hidden   ${className}`}
      >
        <div className=" flex justify-center flex-1  items-center bg-gradient-to-t from-violet-400 via-violet-300 to-violet-50  p-10 overflow-hidden ">
          <TitleCard
            text={titlecard}
            text2={titlecard2}
            className="font-bold text-5xl leading-tight "
          ></TitleCard>
        </div>
        <div
          className={`flex flex-1 justify-center items-center  bg-white" ${classNameChildrens}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
