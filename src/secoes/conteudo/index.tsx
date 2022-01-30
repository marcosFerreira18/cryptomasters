import React from "react";
import {
  HeadLine,
  Description,
  SectionConteudo,
  SubHeadLine,
  Topico,
} from "../../styles/components/section-conteudo";
import { SectionSecondary } from "../../styles/components/section-secondary";
const Conteudo: React.FC = () => {
  return (
    <SectionConteudo>
      {/* <HeadLine>Opere você mesmo seu capital!</HeadLine>

      <Description>
        Crypto Masters é um curso online de ativos digitais onde você vai
        aprender do zero ao lucro como investir com segurança e confiança nos
        ativos mais promissores da década.
      </Description> */}

      <SubHeadLine>O que você vai receber no</SubHeadLine>
      <HeadLine>CRYPTO MASTERS</HeadLine>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <img src="/maciphone.png" alt="" />
          </div>
          <div className="col-md-6">
            <Topico>35 aulas em 11 módulos</Topico>
            <Topico>Material de apoio</Topico>
            <Topico>
              Em 30 dias você estará apto para operar com segurança seu capital
            </Topico>
          </div>
        </div>
      </div>
    </SectionConteudo>
  );
};

export default Conteudo;
