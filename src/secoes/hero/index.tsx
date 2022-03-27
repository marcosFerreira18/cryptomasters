import Link from "next/link";
import React from "react";
import { BtnCta, Descricao, HeroSection, SubTitulo, Titulo } from "./styles";
import LogoSite from "../../assets/logo-masters.svg";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <img className="bgsec-first" src="./bg_meta.webp" />
      <LogoSite className="icon-logo" />
      <Titulo>
        LUCRE TODOS OS DIAS<br/>
        COM CRIPTO!
      </Titulo>
      <SubTitulo>COMECE HOJE</SubTitulo>
      <Descricao>
        Domine definitivamente o mercado que mais cresce no planeta sem ficar
        refém de bancos ou terceiros.
      </Descricao>
      <Link href="#checkout" scroll={false}>
        <BtnCta>quero lucrar todos os dias com cripto</BtnCta>
      </Link>
    </HeroSection>
  );
};

export default Hero;
