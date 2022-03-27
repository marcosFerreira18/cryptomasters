import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ChatBot, { ChatBotProps } from "../chatBot";
import Footer from "../footer";
import Checkout from "../secoes/checkout";
import Hero from "../secoes/hero";
import Modulos from "../secoes/modulos";
import Profile from "../secoes/profile";
import Resultados from "../secoes/resultados";
// import SectionConteudo from ".././secoes/conteudo";
import Topicos from "../secoes/topicos";


const Home: NextPage = () => {
  let contatoChatBot: ChatBotProps = {
    nome: "Erikson Mateus",
    bio: "Trade especialista criador do Crypto Masters.",
    urlImagemPerfil: "",
    whatsapp: "5527999299076",
  };

  return (
    <div>
      {/* <HeaderPage>
        <LogoSite className="icon-logo" />
      </HeaderPage> */}
      <Head>
        <title>Crypto Masters: Curso de Criptoativos</title>
        <meta
          name="description"
          content="Lucre todo santo dia com criptoativos."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="facebook-domain-verification"
          content="agbypyzewa83w7o02ndi1fnck8aqu8"
        />
      </Head>
      <Hero />
      <Resultados />

      {/* <SectionConteudo /> */}
      <Topicos />
      <Profile />
      <Checkout />
      <Modulos />
      <ChatBot {...contatoChatBot} />
      <Footer />
    </div>
  );
};

export default Home;
