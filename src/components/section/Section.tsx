import { StaticImageData } from "next/image";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgImage?: string | StaticImageData;
  className?: string;
  textFooter?: string;
  height?: string;
  id?: string;
}
const Section = ({
  bgImage,
  children,
  className,
  textFooter,
  height,
  id,
}: SectionProps) => {
  // Convert bgImage to string if it's StaticImageData
  const bgImageUrl = typeof bgImage === "string" ? bgImage : bgImage?.src;
  const heightClass = height ? height : "dvh"; // Si height está presente, no usar h-dvh

  return (
    <div
      id={id}
      className={`p-2.5 flex justify-center w-full md:w-10/12 relative h-${heightClass} `}
    >
      <div
        className={`bg-no-repeat object-contain bg-center bg-cover w-full rounded-4xl overflow-hidden  ${className}`}
        style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {}}
      >
        {children}
      </div>
      {textFooter && (
        <div className="absolute bottom-0 w-full text-center text-white bg-transparent  bg-opacity-50 p-2 mb-4 font-bold text-2xl">
          {textFooter}
        </div>
      )}
    </div>
  );
};

export default Section;
