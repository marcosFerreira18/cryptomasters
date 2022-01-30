import styled from "styled-components";

export const HeadLine = styled.h1`
  font: 300 4em Syncopate;
  line-height: 1em;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  max-width: 70%;
  @media screen and (max-width: 430px) {
    font: 300 1.4em Syncopate;
    line-height: 1.8em;
    text-align: center;
    max-width: 100%;
  }
`;

export const SubHeadLine = styled.h1`
  font-family: Syncopate;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ff5c5c;
  text-align: center;
  @media screen and (max-width: 430px) {
    font-size: 1.4em;
    text-align: center;
  }
`;

export const Topico = styled.h1`
  font-family: Syncopate;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 1em;
  color: #ffffff;
  @media screen and (max-width: 430px) {
    font-size: 1em;
  }
`;

export const Description = styled.h1`
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #9598a9;
  font: 500 20px Montserrat;
  text-align: center;
  max-width: 70%;
  @media screen and (max-width: 430px) {
    letter-spacing: 0.04em;
    font: 500 1em Montserrat;
  }
`;

export const SectionConteudo = styled.section`
  min-height: 100vh;
  padding: 150px 50px 0px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 90%;
  }
  @media screen and (max-width: 430px) {
    padding: 120px 15px 0px 15px;
  }
`;
