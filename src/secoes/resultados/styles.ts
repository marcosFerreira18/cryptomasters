import styled from "styled-components";

export const SectionConteudo = styled.section`
  background: linear-gradient(283.88deg, #000000 31.45%, #070225 93.53%);
  max-height: 100vh;
  padding: 100px 50px 0px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  img {
    max-width: 90%;
  }
  @media screen and (max-width: 768px) {
    padding: 120px 15px 0px 15px;
    background: #070225;
    max-height: 100%;
    overflow-y: inherit;
  }
`;

export const Span = styled.h3`
  font-family: Syncopate;
  font-style: normal;
  font-weight: bold;
  font-size: 20.6982px;
  line-height: 22px;
  color: #3cc8c8;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1em;
  }
`;

export const Title = styled.h2`
  font-family: Syncopate;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #ff5c5c;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.1em;
  }
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
  color: #fff;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1em;
  }
`;
