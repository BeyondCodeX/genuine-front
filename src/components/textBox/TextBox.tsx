import React from "react";
interface TextBoxProps {
  className?: string;
  texto: string;
}
const TextBox = ({ className, texto }: TextBoxProps) => {
  return (
    <div
      className={`w-auto p-5  md:ml-15 md:mr15  " ${className}`}
    >
      {texto}
    </div>
  );
};

export default TextBox;
