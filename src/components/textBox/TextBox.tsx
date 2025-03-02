import React from "react";
interface TextBoxProps {
  className?: string;
  texto: string;
}
const TextBox = ({ className, texto }: TextBoxProps) => {
  return (
    <div
      className={`w-2xs " ${className}`}
    >
      {texto}
    </div>
  );
};

export default TextBox;
