import Card from "@/components/card/Card";
import Section from "@/components/section/Section";
import React from "react";
import logo from "@/images/LogoGE.svg";
import bgs1 from "@/images/happyfamily.png";
import TitleCard from "@/components/card/TitleCard";

const page = () => {
  return (
    <>
      <Section
        bgImage={bgs1}
        className="flex justify-start items-center "
        textFooter="studyatgenuine.com"
      >
        <Card
          className="top-2/4 left-2/4 w-3/4 m-0 ml-4 md:w-1/3"
          titlecard="Estas a punto de iniciar un viaje hacia el universo de la "
          titlecard2="educación digital"
          classNameChildrens="flex justify-center items-center"
        >
          <img src={logo.src} alt="Logo" />
        </Card>
      </Section>
      // This is the new section (1 title +2 cards2)
      <Section bgImage={bgs1} className="flex justify-start items-center">
        <TitleCard
          text="Nuestra misión en el mundo y lo que soñamos para tus hijos"
          className="font-bold"
        ></TitleCard>
        <Card
          className="top-2/4 left-2/4 w-3/4 m-0 ml-4 md:w-1/3"
          titlecard="Mision "
          titlecard2="educación digital"
          classNameChildrens="flex justify-center items-center"
        >
          <img src={logo.src} alt="Logo" />
        </Card>
        <Card
          className="top-2/4 left-2/4 w-3/4 m-0 ml-4 md:w-1/3"
          titlecard="Vision "
          titlecard2="educación digital"
          classNameChildrens="flex justify-center items-center"
        >
          <img src={logo.src} alt="Logo" />
        </Card>
      </Section>
      // This is the new section (2 subsections)
      <Section
        bgImage={bgs1}
        className="flex-row justify-start  items-center h-1/2"
        height="fit"
      >
        <TitleCard
          text="De Estados Unidos para el mundo"
          className="font-bold"
        ></TitleCard>
        <TitleCard
          text="Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el Florida
          Department of Education con el código 8822."
          className="text-xs"
          
        ></TitleCard>
      </Section>
      // "footer"
      <Section
        bgImage={bgs1}
        className="flex-row justify-start  items-center h-1/2"
        height="fit"
      >
        <TitleCard text="Somos del mundo" className="font-bold"></TitleCard>
      </Section>
    </>
  );
};

export default page;
