import React from "react";
import LogoSite from "../../assets/logo-masters.svg";
import {
  BoxValue,
  ButtonCta,
  CheckoutContainer,
  CheckoutContainerItens,
  Container,
  SectionCheckout,
  Span,
  SubButton,
  SubPricing,
  SubtitlePricing,
  TitleCheckout,
} from "./styles";

const Checkout: React.FC = () => {
  return (
    <SectionCheckout id="checkout">
      <Container>
        <CheckoutContainerItens>
          <Span>SEU INVESTIMENTO</Span>
          <TitleCheckout>Inscricoes Abertas 🚀</TitleCheckout>
          <ul>
            <li>📌 Mais de 35 vídeo aulas práticas.</li>
            <li>
              📌 Setups simplificados que mais geram <b>GAIN</b>.
            </li>
            <li>📌 Análise Gráfica e Fundamentalista.</li>
            <li>📌 Estratégias de entrada e saída.</li>
            <li>📌 Gerenciamento de Risco.</li>
            <li>📌 Renda passiva com Staking.</li>
            <li>📌 Alavancagem na prática (short e long).</li>
            <li>🎁 3 super ebooks de Bônus.</li>
            <li>🎁 Material de apoio e direto comigo.</li>
            <li>🔑 Teste drive do curso por 7 dias com garantia total.</li>
          </ul>
        </CheckoutContainerItens>
        <CheckoutContainer>
          <LogoSite className="icon-logo" />
          <SubtitlePricing>
            Comece ainda hoje a lucrar todos os dias com cripto.
          </SubtitlePricing>
          <BoxValue>
            <p>
              12x
              <br />
              R$
            </p>
            <h1>69</h1>
            <p>,98</p>
          </BoxValue>
          <SubPricing>Pague em até 12x no cartão ou à vista no PIX.</SubPricing>
          <ButtonCta href="https://pay.kiwify.com.br/R91zInv">
            Garantir minha vaga por apenas R$ 2,33 ao dia
          </ButtonCta>
          <SubButton>COMPRA 100% SEGURA</SubButton>
        </CheckoutContainer>
      </Container>
    </SectionCheckout>
  );
};

export default Checkout;
