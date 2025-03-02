import Card from "@/components/card/Card";
import Section from "@/components/section/Section";
import React from "react";
import logo from "@/images/LogoGE.svg";
import bgs1 from "@/images/happyfamily.png";
const page = () => {
  return (
    <>
      <Section bgImage={bgs1} className="flex justify-start items-center">
        <Card
          className=" top-2/4 left-2/4  w-3/4 m-0 ml-4  md:w-1/3 "
          titlecard="Estas a punto de iniciar un viaje hacia el universo de la "
          titlecard2="educación digital"
          children={<img src={logo.src} alt="Logo" />}
          classNameChildrens="flex justify-center items-center "
        ></Card>
      </Section>
    </>
  );
};

export default page;
