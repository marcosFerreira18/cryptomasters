import React from "react";
// import { ButtonCta } from "../../styles/components/header-page";
import {
  CheckoutContainer,
  BoxValue,
  SectionCheckout,
  ButtonCta,
  CheckoutContainerItens,
  TitleCheckout,
  Span,
  SubtitlePricing,
  SubButton,
  SubPricing,
} from "./styles";
import LogoSite from "../../assets/logo-masters.svg";

const Checkout: React.FC = () => {
  return (
    <SectionCheckout>
      <CheckoutContainerItens>
        <Span>SEU INVESTIMENTO</Span>
        <TitleCheckout>Inscricoes Abertas 🚀</TitleCheckout>
        <ul>
          <li>📌 Mais de 35 aulas práticas com o passo a passo.</li>
          <li>📌 Setups simplificados e com linguagem clara e acessível. </li>
          <li>
            📌 Análise Gráfica, Fundamentalista, Setups e estratégias de entrada
            e saída.
          </li>
          <li>📌 Gerenciamento de Risco.</li>
          <li>📌 Renda passiva com Staking.</li>
          <li>📌 Alavancagem da prática (short e long).</li>
          <li>🔑 Teste drive do curso por 7 dias com garantia total.</li>
          <li>🎁 3 super ebooks de Bônus.</li>
          <li>🎁 Material de apoio e o melhor suporte do mercado.</li>
        </ul>
      </CheckoutContainerItens>
      <CheckoutContainer>
        <LogoSite className="icon-logo" />
        <SubtitlePricing>
          Comece ainda hoje a lucrar todos os dias com cripto.
        </SubtitlePricing>
        <BoxValue>
          <p>12x<br/>R$</p>
          <h1>69</h1>
          <p>,98</p>
        </BoxValue>
        <SubPricing>Pague em até 12x no cartão ou à vista no PIX.</SubPricing>
        <ButtonCta href="https://pay.kiwify.com.br/R91zInv">
          Garantir minha vaga por R$ 2,33 ao dia
        </ButtonCta>
        <SubButton>COMPRA 100% SEGURA</SubButton>
      </CheckoutContainer>
    </SectionCheckout>
  );
};

export default Checkout;
