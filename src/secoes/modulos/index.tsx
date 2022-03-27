import React from "react";
import { Api } from "../../pages/api/hello";
import Accordion from "../../styles/components/accordion";
import { SectionSecondary } from "../../styles/components/section-secondary";
const Modulos: React.FC = () => {
  return (
    <SectionSecondary>
      <div className="container">
        <div className="row">
          <h3>PRINCIPAIS PERGUNTAS SOBRE NOSSO CURSO</h3>
          <h2>FAQ: tire suas dúvidas</h2>
        </div>

        {/* <div className="row"> */}
        {Api.faq.map((m, i) => {
          return (
            // <div className="col-xs-12" key={i}>
            <Accordion title={m.titulo} content={m.descricao} key={i} />
          );
        })}
      </div>
      {/* </div> */}
    </SectionSecondary>
  );
};

export default Modulos;
