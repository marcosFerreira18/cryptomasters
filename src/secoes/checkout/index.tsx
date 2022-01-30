import React from "react";
// import { ButtonCta } from "../../styles/components/header-page";
import {
  CheckoutContainer,
  BoxValue,
  SectionCheckout,
  ButtonCta,
} from "./styles";
import LogoSite from "../../assets/logo-masters.svg";

const Checkout: React.FC = () => {
  return (
    <SectionCheckout>
      <CheckoutContainer>
        <LogoSite className="icon-logo" />

        <ul>
          <li>📌 Mais de 35 aulas práticas com o passo a passo.</li>
          <li>📌 Setups simplificados e com linguagem clara e acessível. </li>
          <li>📌 Análise Gráfica, Fundamentalista, Setups e estratégias de entrada e saída.</li>
          <li>📌 Gerenciamento de Risco.</li>
          <li>📌 Renda passiva com Staking.</li>
          <li>📌 Alavancagem da prática (short e long).</li>
          <li>🔑 Teste drive do curso por 7 dias com garantia total.</li>
          <li>🎁 3 super ebooks de Bônus.</li>
          <li>🎁 Material de apoio e o melhor suporte do mercado.</li>
        </ul>
        <BoxValue>
          <p>12x</p>
          <h1>99</h1>
          <p>,80</p>
        </BoxValue>
        <ButtonCta href="https://pay.kiwify.com.br/R91zInv">
          Garantir minha vaga
        </ButtonCta>
        <p>Pague com em 12x no cartão ou à vista no PIX.</p>
      </CheckoutContainer>
    </SectionCheckout>
  );
};

export default Checkout;
