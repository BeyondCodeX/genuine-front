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
import bgsf from "@/images/IMG_68741.png";
import mapa from "@/images/Mapa_2023 2.png";
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
import { cardTexts } from "@/utils/cardText";

const page = () => {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Section
        id="inicio"
        bgImage={bgs1}
        className="flex justify-start items-center "
        textFooter="studyatgenuine.com"
        
      >
        <Card
          className="top-2/4 left-2/4  m-0  mb-45 ml-4 md:w-1/3 md:mt-65  "
          titlecard="Estás a punto de iniciar un viaje hacia el universo de la "
          titlecard2="educación digital"
          classNameChildrens="justify-center items-center p-10 "
        >
          <img src={logo.src} alt="Logo" className="w-7/12" />
        </Card>
      </Section>
      // This is the new section (1 title +2 cards2)
      <Section
        id="sec2"
        height="auto"
        className="flex flex-col  items-center  bg-gradient-to-t from-slate-50 via-slate-50 to-blue-50 min-h-full h-auto px-0 py-20"
      >
        <img
          src={fs2.src}
          alt="jetpack"
          className=" self-center flex-4 h-auto"
        />
        <TitleCard
          text="Nuestra misión en el mundo y lo que soñamos para tus hijos"
          className="font-bold mt-4 flex-1 text-3xl ml-5 mr-5 text-center md:text-5xl md:ml-70 md:mr-70"
        ></TitleCard>
        <div className="flex justify-center items-start flex-6 flex-wrap mt-5">
          <Card2
            className="top-2/4 left-2/4 w-4/5  m-0 ml-4 md:w-2/5"
            titlecard={cardTexts.card1.title}
            classNameChildrens="flex justify-center items-center text-xl pb-10"
            image={lc1}
          >
            {cardTexts.card1.text}
          </Card2>
          <Card2
            className="top-2/4 left-2/4 w-4/5 m-0  mb-2 ml-4 md:w-2/5"
            titlecard={cardTexts.card2.title}
            classNameChildrens="flex justify-center items-center text-xl "
            image={lc2}
          >
            {cardTexts.card2.text}
          </Card2>
        </div>
      </Section>
      // This is the new section (2 subsections)
      <Section
        id="sec3"
        className="flex flex-row flex-wrap md:flex-nowrap justify-start  items-center h-1/2 bg-white"
        height="fit"
      >
        <div className="flex flex-col justify-center items-start flex:1  ">
          <TitleCard
            text="De Estados Unidos para el mundo"
            className="font-bold flex-2 p-20 pb-10 text-3xl"
          ></TitleCard>
          <TitleCard
            text="Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el Florida
          Department of Education con el código 8822."
            className="text-2xl flex-2 p-20 pt-0 pb-0"
          ></TitleCard>
          <div className="flex flex-row justify-center items-center flex-2 p-10 pl-20 gap-10 flex-wrap md:flex-nowrap">
            <TitleCard
              text="Conoce el nuestro aquí"
              className="text-2xl text-center md:text-nowrap"
            ></TitleCard>
            <button className="bg-blue-950 text-white  rounded-lg text-2xl p-5">
              Registro legal{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex:1 h-full w-full">
          <img src={fs3.src} alt="imggrupal" className="h-full" />
        </div>
      </Section>
      // This is the new section 2 subsection
      <Section
      id="secmap"
        className="flex-row justify-start  items-center h-1/2 bg-white md:flex-wrap"
        
      >
        <div className="flex flex-row w-full flex-wrap md:flex-nowrap">
          <div className="flex flex-col justify-start items-center flex-1">
            <TitleCard text="Somos del mundo" className="font-bold text-6xl m-15 mb-10"></TitleCard>
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
          <div className="flex flex-col justify-center items-center flex-3 mt-15 ">
            <div className="flex flex-row justify-around w-full flex-wrap md:flex-nowrap gap-10 md:gap-0">
              <DataBox
                className="text-amber-600 "
                number={"+ 400"}
                text="Estudiantes"
              ></DataBox>
              <DataBox
                className="text-fuchsia-300"
                number={"28"}
                text="Staff"
              ></DataBox>
              <DataBox
                className="text-fuchsia-950 "
                number={"44"}
                text="Profesores"
              ></DataBox>
            </div>
            <img src={mapa.src} alt="imggrupal" className="w-full p-20 pt-0 pb-0" />
          </div>
        </div>
      </Section>
      // "footer"
      <Section
        id="sec4"
        bgImage={bgsf}
        className="flex justify-start items-center flex-col"
        textFooter="studyatgenuine.com"
      >
        <div className="flex justify-end items-end bg-white  w-auto h-auto m-15 p-6 pl-12 pr-12 tp:10 self-end rounded-full">
          <div>
            <img src={logo.src} alt="logo" className="h-18" />
          </div>
        </div>
        <Card
          className="max-w-5/6 m-0  pt-0  text-5xl mb-35"
          titlecard="¡Únete a Genuine Digital School hoy!"
          classNameChildrens="flex-col justify-center items-center pt-0 h-full text-5xl h-full"
        >
          <TitleCard
            className="text-2xl p-4 "
            text="Explora el increíble universo de la educación virtual junto a tu hijo"
          ></TitleCard>
          <TitleCard
            className="text-xl p-4"
            text="Síguenos en Redes Sociales y conoce nuestra gran comunidad digital"
          ></TitleCard>
          <div className="flex flex-row justify-center items-center justify-self-center gap-10 p-6 ">
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
