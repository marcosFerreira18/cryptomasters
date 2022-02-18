import React from "react";
import { SectionSecondary } from "../../styles/components/section-secondary";
import { Api } from "../../pages/api/hello";
import Accordion from "../../styles/components/accordion";
import {
  CardSlider,
  HorizontalSlider,
  BodyCard,
} from "../../styles/components/horizontal-slider";
const Topicos: React.FC = () => {
  return (
    <SectionSecondary style={{background: "#000"}}>
      <div className="container">
        <div className="row">
          <h3>O QUÊ VOCÊ VAI APRENDER NO CURSO </h3>
          <h2>CRYPTO MASTERS</h2>
        </div>
        <HorizontalSlider>
          {Api.topicos.map((m, i) => {
            return (
              <CardSlider key={i}>
                <img
                  src="staking-cover.png"
                  alt="resultados"
                  className="img-cover-card"
                />
                <BodyCard>
                  <h2>{m.titulo}</h2>
                  <p>{m.descricao}</p>
                </BodyCard>
              </CardSlider>
            );
          })}
        </HorizontalSlider>
      </div>
    </SectionSecondary>
  );
};

export default Topicos;
