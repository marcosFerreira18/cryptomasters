import React from "react";
import Image from "next/image";

import { Api } from "../../pages/api/hello";
import { Title, Span } from "../resultados/styles";
import {
  CarcBooks,
  CardTopicos,
  Gratuito,
  HeadCardTopicos,
  SectionTopicos,
} from "./styles";
const Topicos: React.FC = () => {
  const lazyRoot = React.useRef(null);

  return (
    <SectionTopicos ref={lazyRoot}>
      <div className="container">
        <div className="row">
          <Span>O QUÊ VOCÊ VAI APRENDER NO</Span>
          <Title>CRYPTO MASTERS</Title>
        </div>
        <div className="row">
          {Api.topicos.map((m, i) => {
            return (
              <div className="col-md-6" key={i}>
                <CardTopicos>
                  <HeadCardTopicos>
                    <Image src={`/${m.img}`} width={118} height={56} />
                    <h2>{m.titulo}</h2>
                  </HeadCardTopicos>
                  <p>{m.descricao}</p>
                </CardTopicos>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="container">
        <div className="row">
          <h1>🎁 🎁 🎁 </h1>
          <Span>PRESENTES QUE VOCÊ VAI RECEBER AQUI</Span>
          <Title>3 BÔNUS EXCLUSIVOS</Title>
          <p>Tenha na sua mão verdadeiros manuais de geração de renda.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <CarcBooks>
              <Image
                src="/book.webp"
                width={272}
                height={356}
              />
              <h3>Dicionário de Criptomoedas</h3>
              <p>
                Principais termos do universo cripto que você não pode deixar de
                conhecer.
              </p>
              <h2>
                <s>R$ 97*</s>
              </h2>
              <h6>*se comprado separadamente</h6>
              <Gratuito>🎁 AQUI VC RECEBE DE GRAÇA 🎁</Gratuito>
            </CarcBooks>
          </div>
          <div className="col-md-4">
            <CarcBooks>
              {/* <img
                src="ebook2.webp"
                alt="resultados"
                className="img-cover-card"
              /> */}
              <Image
                src="/ebook2.webp"
                width={272}
                height={356}
                // className="img-cover-card"
              />
              <h3>Padrões de Candlesticks</h3>
              <p>
                Ebook completo com todos os padrões que você precisa saber para
                operar.
              </p>
              <h2>
                <s>R$ 97*</s>
              </h2>
              <h6>*se comprado separadamente</h6>
              <Gratuito>🎁 AQUI VC RECEBE DE GRAÇA 🎁</Gratuito>
            </CarcBooks>
          </div>
          <div className="col-md-4">
            <CarcBooks>
              <Image
                src="/ebook3.webp"
                width={272}
                height={356}
                // className="img-cover-card"
              />
              <h3>Padrões Gráficos</h3>
              <p>
                Ebook completo como os principais padrōes gráficos e como
                usá-los.
              </p>
              <h2>
                <s>R$ 97*</s>
              </h2>
              <h6>*se comprado separadamente</h6>
              <Gratuito>🎁 AQUI VC RECEBE DE GRAÇA 🎁</Gratuito>
            </CarcBooks>
          </div>
        </div>
        {/* <div className="row">
          <div className="box-presente">
            <p>
              Juntos estes manuais somam
              <b>
                <s> R$291,00</s>.
              </b>
              <br />
              Aqui você os receberá de presente.
            </p>
          </div>
        </div> */}
      </div>
    </SectionTopicos>
  );
};

export default Topicos;
