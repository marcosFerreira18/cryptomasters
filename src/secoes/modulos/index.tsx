import React from "react";
import { SectionSecondary } from "../../styles/components/section-secondary";
import { Api } from "../../pages/api/hello";
import Accordion from "../../styles/components/accordion";
const Modulos: React.FC = () => {
  return (
    <SectionSecondary>
      <div className="container">
        <div className="row">
          <h3>PRINCIPAIS PERGUNTAS SOBRE NOSSO CURSO</h3>
          <h2>FAQ: tire suas dúvidas</h2>
        </div>

        <div className="row">
          {Api.faq.map((m, i) => {
            return (
              <div className="col-xs-12">
                <Accordion title={m.titulo} content={m.descricao} />
              </div>
            );
          })}
        </div>
      </div>
    </SectionSecondary>
  );
};

export default Modulos;
