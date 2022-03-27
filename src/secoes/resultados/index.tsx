import React from "react";

// import { Container, BoxIcon } from './styles';
import Candle from "../../assets/candle.svg";
import Capital from "../../assets/capital.svg";
import Analise from "../../assets/analis.svg";
import Bear from "../../assets/bear.svg";
import { Span, Title, Description, SectionConteudo, BoxIcon } from "./styles";
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
                <BoxIcon>
                  <Candle />
                </BoxIcon>
                <Span>Buy/Sell</Span>
                <Description>
                  Aprenda a melhor hora de compar e vender.
                </Description>
              </div>
              <div className="col-6">
                <BoxIcon>
                  <Analise />
                </BoxIcon>
                <Span> Resultados </Span>
                <Description>
                  Aprenda nossos setups, e torne seus resultados mais
                  previsíveis
                </Description>
              </div>
              <div className="col-6">
                <BoxIcon>
                  <Capital />
                </BoxIcon>
                <Span>Capital</Span>
                <Description>Opere você mesmo seu capital.</Description>
              </div>
              <div className="col-6">
                <BoxIcon>
                  <Bear />
                </BoxIcon>
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
              src="resultados1.webp"
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
