import Link from "next/link";
import React from "react";
import { BtnCta, Descricao, HeroSection, SubTitulo, Titulo } from "./styles";

const Hero: React.FC = () => {
  return (
      <HeroSection>
        <video autoPlay muted className="bgsec-first" loop id="myVideo">
          <source src="./video.mp4" type="video/mp4" />
        </video>
        <Titulo>
          LUCRE TODOs os DIAs <br />
          COM CRIPTO!
        </Titulo>
        <SubTitulo>COMECE HOJE</SubTitulo>
        <Descricao>
          Domine definitivamente o mercado que mais cresce no planeta sem ficar
          refém de bancos ou terceiros.
        </Descricao>
        <BtnCta href="#checkout">
        quero lucrar todos os dias com cripto
      </BtnCta>
      </HeroSection>
  );
};

export default Hero;
