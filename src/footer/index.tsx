import React from "react";
import { ButtonCta, SubButton, SubPricing } from "../secoes/checkout/styles";
import {
  FooterContainer,
  DisclamerText,
  CheckoutDiv,
  DisclamerContainer,
} from "./styles";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <DisclamerContainer>
        <DisclamerText>
          <b>Aviso Legal:</b> “Nenhuma informação contida neste produto deve ser
          interpretada como uma afirmação da obtenção de resultados. Qualquer
          referência ao desempenho passado ou potencial de uma estratégia
          abordada no conteúdo não é, e não deve ser interpretada como uma
          recomendação ou como garantia de qualquer resultado específico.”
        </DisclamerText>
        <CheckoutDiv>
          {/* <SubPricing>Pague em até 12x no cartão ou à vista no PIX.</SubPricing> */}
          <ButtonCta href="https://pay.kiwify.com.br/R91zInv">
            Comprar agora
          </ButtonCta>
          <br />
          <SubButton>COMPRA 100% SEGURA</SubButton>
        </CheckoutDiv>
      </DisclamerContainer>
      <br/>
      <br/>
      <DisclamerText>
        Copyright © 2022 Inc. Todos os direitos reservados. AdGroup CNPJ:
        35.331.359/0001-26
      </DisclamerText>
      <DisclamerText>Politica de Privacidade | Termos de Uso </DisclamerText>
    </FooterContainer>
  );
};

export default Footer;
