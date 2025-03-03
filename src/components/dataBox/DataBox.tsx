import React from "react";
interface DataBoxProps {
  className?: string;
  text: string;
  number: string;
}
const DataBox = ({ className, number, text }: DataBoxProps) => {
  return (
    <div
      className={`bg-transparent rounded-lg border-2 w-[calc(250px)] flex flex-row gap-3 justify-center " ${className}`}
    >
      <div className="flex flex-row w-full justify-center items-center gap-3 h-2px ">
        <div className="text-3xl font-bold p-2 text-nowrap">{number}</div>
        <div className=" font-bold text-2xl p-2">{text}</div>
      </div>
    </div>
  );
};

export default DataBox;
