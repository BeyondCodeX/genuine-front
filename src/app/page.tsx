import Card from "@/components/card/Card";
import Section from "@/components/section/Section";
import React from "react";
//imagenes
import logo from "@/images/LogoGE.svg";
import bgs1 from "@/images/happyfamily.png";
import lc1 from "@/images/Frame171.svg";
import lc2 from "@/images/Frame172.svg";
import fs2 from "@/images/Jet-pack 1.png";
import fs3 from "@/images/Fotoparabilinguismo1.png";
//logos rrss
import fb from "@/images/FB.svg";
import ig from "@/images/IG.svg";
import tkt from "@/images/TKTK.svg";
import yt from "@/images/YT.svg";
import lkin from "@/images/IN.svg";
//
import TitleCard from "@/components/card/TitleCard";
import Card2 from "@/components/card/Card2";
import TextBox from "@/components/textBox/TextBox";
import DataBox from "@/components/dataBox/DataBox";
import BurgerMenu from "@/components/burgerMenu/BurgerMenu";

const page = () => {
  return (
    <>
      <BurgerMenu></BurgerMenu>
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
      <Section className="flex-col justify-start items-center  bg-gradient-to-b from-sky-200 to-slate-50">
        <img src={fs2.src} alt="jetpack" className="h-2/5 self-center" />
        <TitleCard
          text="Nuestra misión en el mundo y lo que soñamos para tus hijos"
          className="font-bold"
        ></TitleCard>
        <div className="flex justify-center items-center">
          <Card2
            className="top-2/4 left-2/4 w-3/4 m-0 ml-4 md:w-1/3"
            titlecard="Nuestra misión "
            classNameChildrens="flex justify-center items-center text-xs"
            image={lc1}
          >
            Educar, empoderar y conectar a nuestros estudiantes mediante
            experiencias de aprendizaje remoto que trasciendan las fronteras
            geográficas e idiomáticas.
          </Card2>
          <Card2
            className="top-2/4 left-2/4 w-3/4 m-0 ml-4 md:w-1/3"
            titlecard="Nuestra visión "
            classNameChildrens="flex justify-center items-center text-xs"
            image={lc2}
          >
            Visualizamos un mundo donde miles de jóvenes y niños usen sus
            habilidades para transformar sus comunidades y regiones por medio
            del emprendimiento, la tecnología y la innovación.
          </Card2>
        </div>
      </Section>
      // This is the new section (2 subsections)
      <Section
        className="flex-col justify-start  items-center h-1/2 bg-white"
        height="fit"
      >
        <div className="flex flex-col justify-center items-center">
          <TitleCard
            text="De Estados Unidos para el mundo"
            className="font-bold"
          ></TitleCard>
          <TitleCard
            text="Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el Florida
          Department of Education con el código 8822."
            className="text-xs"
          ></TitleCard>
          <TitleCard
            text="Conoce el nuestro aquí"
            className="text-xs"
          ></TitleCard>
        </div>
        <div>
          <img src={fs3.src} alt="imggrupal" className="h-1/2" />
        </div>
      </Section>
      // This is the new section 2 subsection
      <Section
        className="flex-row justify-start  items-center h-1/2 bg-white"
        height="fit"
      >
        <div>
          <TitleCard text="Somos del mundo" className="font-bold"></TitleCard>
          <TextBox
            className="bg-amber-600 text-white"
            texto="Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia."
          ></TextBox>
          <TextBox
            className="bg-fuchsia-400 text-blue-950"
            texto="Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.s"
          ></TextBox>
          <TextBox
            className="bg-fuchsia-950 text-white"
            texto="Colombia, Sudáfrica, Filipinas, Chile, México, Singapur."
          ></TextBox>
        </div>
        <div>
          <div className="flex-col justify-center items-center">
            <DataBox
              className="text-amber-600 "
              texto="+ 400 Estudiantes"
            ></DataBox>
            <DataBox className="text-fuchsia-300" texto="28 Staff"></DataBox>
            <DataBox
              className="text-fuchsia-950"
              texto="44 Profesores"
            ></DataBox>
          </div>
        </div>
      </Section>
      // "footer"
      <Section
        bgImage={bgs1}
        className="flex justify-start items-center "
        textFooter="studyatgenuine.com"
      >
        <div className="flex justify-end items-end">
          <div>
            <img src={logo.src} alt="logo" className="h-7" />
          </div>
        </div>
        <Card
          className="top-2/4 left-2/4 w-1/2 m-0 ml-4 md:w-1/3"
          titlecard="¡Únete a Genuine Digital School hoy!"
          classNameChildrens="flex-col justify-center items-center"
        >
          <TitleCard
            className="text-xs"
            text="Explora el increíble universo de la educación virtual junto a tu hijo"
          ></TitleCard>
          <TitleCard
            className="text-xs"
            text="Síguenos en Redes Sociales y conoce nuestra gran comunidad digital"
          ></TitleCard>
          <div className="flex-col justify-center items-center justify-self-center">
            <img src={fb.src} alt="logo" className="h-7" />
            <img src={ig.src} alt="logo" className="h-7" />
            <img src={tkt.src} alt="logo" className="h-7" />
            <img src={yt.src} alt="logo" className="h-7" />
            <img src={lkin.src} alt="logo" className="h-7" />
          </div>
        </Card>
      </Section>
    </>
  );
};

export default page;
