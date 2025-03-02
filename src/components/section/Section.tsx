import { StaticImageData } from "next/image";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgImage?: string | StaticImageData;
  className?: string;
  textFooter?: string;
}
const Section = ({
  bgImage,
  children,
  className,
  textFooter,
}: SectionProps) => {
  // Convert bgImage to string if it's StaticImageData
  const bgImageUrl = typeof bgImage === "string" ? bgImage : bgImage?.src;
  return (
    <div className="p-2.5 flex justify-center  h-dvh  w-full md:w-10/12 relative">
      <div
        className={`bg-no-repeat object-contain bg-center bg-cover w-full rounded-4xl ${className}`}
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
