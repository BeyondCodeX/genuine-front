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
  const heightClass = height ? height : "auto"; // Si height está presente, no usar h-dvh

  return (
    <div
      id={id}
      className={`p-0.5 pr-2 md:p-2.5 flex justify-center w-full md:w-10/12 relative h-${heightClass} max-h-fit m-2.5 mr-3 `}
    >
      <div
        className={`bg-no-repeat object-contain bg-center bg-cover w-full rounded-4xl overflow-hidden    ${className}`}
        style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {}}
      >
        {children}
      </div>
      {textFooter && (
        <div className="absolute bottom-0 w-full text-center text-white bg-transparent  bg-opacity-50 p-2 mb-4 font-semibold text-[32px]">
          {textFooter}
        </div>
      )}
    </div>
  );
};

export default Section;
