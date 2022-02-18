import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ButtonCta, FirstSection } from "../styles/components/header-page";
import Candle from "../assets/candle.svg";
import Capital from "../assets/capital.svg";
import Analise from "../assets/analis.svg";
import Bear from "../assets/bear.svg";
import Image from "next/image";
import { HeaderPage } from "../styles/components/header-page";

import { SectionSecondary } from "../styles/components/section-secondary";
import Modulos from "../secoes/modulos";
// import SectionConteudo from ".././secoes/conteudo";
import Topicos from "../secoes/topicos";
import Checkout from "../secoes/checkout";
import LogoSite from "../assets/logo-masters.svg";
import Hero from "../secoes/hero";
import ChatBot, { ChatBotProps } from "../chatBot";
import Footer from "../footer";
import { SectionConteudo } from "../styles/components/section-conteudo";
import Resultados from "../secoes/resultados";

const Home: NextPage = () => {
  let contatoChatBot: ChatBotProps = {
    nome: "Erikson Mateus",
    bio: "Trade especialista criador do Crypto Masters.",
    urlImagemPerfil: "",
    whatsapp: "5527999333180",
  };

  return (
    <div>
      <HeaderPage>
        <LogoSite className="icon-logo" />
      </HeaderPage>
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
      {/* <SectionConteudo>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>CURSO</h3>
              <h2>CRYPTO MASTERS</h2>
              <p>
                Crypto Masters é um curso online de ativos digitais onde você
                vai aprender do zero ao lucro como investir com segurança e
                confiança nos ativos mais promissores da década.
              </p>

              <div className="row">
                <div className="col-6">
                  <Candle />
                  <h3>Buy/Ssell</h3>
                  <p>Aprenda a hora de compar e vender.</p>
                </div>
                <div className="col-6">
                  <Analise />
                  <h3> Resultados </h3>
                  <p>Preveja e analise seus resultados.</p>
                </div>
                <div className="col-6">
                  <Capital />
                  <h3>Capital</h3>
                  <p>Opere você mesmo seu capital.</p>
                </div>
                <div className="col-6">
                  <Bear />
                  <h3>Short</h3>
                  <p>Opere vendido e lucre com a queda</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src="resultados.png"
                alt="resultados"
                className="img-resultado"
              />
            </div>
          </div>
        </div>
      </SectionConteudo>
       */}
      {/* <SectionConteudo /> */}
      <Topicos />
      <Checkout />
      <Modulos />
      <ChatBot {...contatoChatBot} />
      <Footer />
    </div>
  );
};

export default Home;
