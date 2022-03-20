import React from "react";
import { SectionSecondary } from "../../styles/components/section-secondary";
import { Api } from "../../pages/api/hello";
import Accordion from "../../styles/components/accordion";
import {
  CardSlider,
  HorizontalSlider,
  BodyCard,
} from "../../styles/components/horizontal-slider";
import { CardTopicos, HeadCardTopicos, SectionTopicos } from "./styles";
const Topicos: React.FC = () => {
  return (
    <SectionTopicos>
      <div className="container">
        <div className="row">
          {/* <h3>O QUÊ VOCÊ VAI APRENDER NO CURSO </h3> */}
          <h2>O QUÊ VOCÊ VAI APRENDER NO CURSO:</h2>
        </div>
        {/* <HorizontalSlider> */}
        <div className="row">
          {Api.topicos.map((m, i) => {
            return (
              <div className="col-md-6">
                <CardTopicos key={i}>
                  {/* <img
                  src="staking-cover.png"
                  alt="resultados"
                  className="img-cover-card"
                /> */}
                  <HeadCardTopicos>
                    <img
                      src={m.img}
                      alt="resultados"
                      className="img-cover-card"
                    />
                    <h2>{m.titulo}</h2>
                  </HeadCardTopicos>
                  {/* <BodyCard> */}
                  <p>{m.descricao}</p>
                  {/* </BodyCard> */}
                </CardTopicos>
              </div>
            );
          })}
        </div>
        {/* </HorizontalSlider> */}
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1>🎁 🎁 🎁 </h1>
          <h2>O que você vai receber de presente:</h2>
          <p>Tenha na sua mão verdaddeiros manuais de geração de renda.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="e1.jpg" alt="resultados" className="img-cover-card" />
          </div>
          <div className="col-md-4">
            <img src="e2.jpg" alt="resultados" className="img-cover-card" />
          </div>
          <div className="col-md-4">
            <img src="e3.jpg" alt="resultados" className="img-cover-card" />
          </div>
        </div>
        <div className="row">
          <div className="box-presente">
          <p>
            Juntos estes manuais somam 
            <b>
              <s> R$298,00</s>.
            </b>
            <br />
            Aqui você os receberá de presente.
          </p>
          </div>
        </div>
      </div>
    </SectionTopicos>
  );
};

export default Topicos;
