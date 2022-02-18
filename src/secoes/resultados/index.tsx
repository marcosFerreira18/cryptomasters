import React from "react";

// import { Container } from './styles';
import Candle from "../../assets/candle.svg";
import Capital from "../../assets/capital.svg";
import Analise from "../../assets/analis.svg";
import Bear from "../../assets/bear.svg";
import { Span, Title, Description, SectionConteudo } from "./styles";
const Resultados: React.FC = () => {
  return (
    <SectionConteudo>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Span>CURSO</Span>
            <Title>CRYPTO MASTERS</Title>
            <Description>
              Crypto Masters é um curso online de ativos digitais onde você vai
              aprender do zero ao lucro como investir com segurança e confiança
              nos ativos mais promissores da década.
            </Description>

            <div className="row">
              <div className="col-6">
                <Candle />
                <Span>Buy/Ssell</Span>
                <Description>Aprenda a hora de compar e vender.</Description>
              </div>
              <div className="col-6">
                <Analise />
                <Span> Resultados </Span>
                <Description>Preveja e analise seus resultados.</Description>
              </div>
              <div className="col-6">
                <Capital />
                <Span>Capital</Span>
                <Description>Opere você mesmo seu capital.</Description>
              </div>
              <div className="col-6">
                <Bear />
                <Span>Short</Span>
                <Description>Opere vendido e lucre com a queda</Description>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="resultados1.png"
              alt="resultados"
              className="img-resultado"
            />
          </div>
        </div>
      </div>
    </SectionConteudo>
  );
};

export default Resultados;
