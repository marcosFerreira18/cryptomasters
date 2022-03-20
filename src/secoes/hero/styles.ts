import styled from "styled-components";

export const HeroSection = styled.section`
  padding: 150px 50px 0px 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #010101;
  position: relative;
  @media screen and (max-width: 430px) {
    padding: 50px 20px 0px 20px;
    align-items: flex-start;
  }

  .bgsec-first {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    top: 0;
    left: 0;
    opacity: 0.2;
    /* z-index: -1; */
  }
`;

export const Descricao = styled.p`
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #9598a9;
  font: 500 20px "Montserrat";
  text-align: center;
  max-width: 50%;
  @media screen and (max-width: 430px) {
    text-align: left;
    font: 500 16px "Montserrat";
    max-width: 100%;
  }
`;

export const Titulo = styled.h4`
  font-family: "Syncopate";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 67px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  z-index: 1;
  @media screen and (max-width: 430px) {
    /* font-size: 48px;
  line-height: 48px; */
    text-align: left;
  }
`;

export const SubTitulo = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 75px;
  color: #c0ff14;
  z-index: 1;
  @media screen and (max-width: 430px) {
    font-size: 47px;
    line-height: 55px;

    text-align: left;
  }
`;

export const BtnCta = styled.a`
  background: linear-gradient(270deg, #278bff 0%, #5488ed 100%);
  box-shadow: 0px 10px 10px rgba(5, 15, 23, 0.6);
  border-radius: 16px;
  /* height: 60px; */
  padding: 16px 25px;
  text-decoration: none;
  color: #fff;
  z-index: 10;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 100px rgba(37, 101, 150, 0.6);
    color: #fff;
  }
`;
