import { StaticImageData } from "next/image";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgImage?: string | StaticImageData;
  className?: string;
  textFooter?: string;
  height?: string;
}
const Section = ({
  bgImage,
  children,
  className,
  textFooter,
  height,
}: SectionProps) => {
  // Convert bgImage to string if it's StaticImageData
  const bgImageUrl = typeof bgImage === "string" ? bgImage : bgImage?.src;
  const heightClass = height ? height : "dvh"; // Si height está presente, no usar h-dvh

  return (
    <div
      className={`p-2.5 flex justify-center w-full md:w-10/12 relative h-${heightClass} `}
    >
      <div
        className={`bg-no-repeat object-contain bg-center bg-cover w-full rounded-4xl ${className}`}
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        {children}
      </div>
      {textFooter && (
        <div className="absolute bottom-0 w-full text-center text-white bg-transparent  bg-opacity-50 p-2 mb-4">
          {textFooter}
        </div>
      )}
    </div>
  );
};

export default Section;
