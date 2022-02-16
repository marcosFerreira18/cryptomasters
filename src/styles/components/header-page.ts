import styled from "styled-components";

export const HeaderPage = styled.nav`
  width: 100vw;
  height: 100px;
  background: rgba(28, 27, 31, 0.7);
  backdrop-filter: blur(12px);
  padding: 30px;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  .icon-logo {
    max-height: 100%;
  }
  @media screen and (max-width: 430px) {
    height: 80px;
    padding: 20px 30px;
  }
`;

export const ButtonCta = styled.button`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  background: linear-gradient(270deg, #ff5c5c 0%, rgba(255, 133, 133, 0) 100%);
  border-radius: 5.17454px;
  padding: 16px 28px;
  border: 1px solid #ff5c5c;
  cursor: pointer;
  font-family: Montserrat;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 4px 1000px #f71a5cb4;
    color: #fff;
    text-decoration: none;
  }
`;

export const FirstSection = styled.section`
  padding: 150px 50px 0px 50px;
  min-height: 100vh;

  .col-first{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid #FFF; */
    height: 60vh;
  }

  .img-profile{
    width: 100%;
    margin-bottom: 20px;
  }
  .bgsec-first {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    top: 0;
    left: 0;
    opacity: 0.15;
    z-index: -1;
  }

  h1 {
    font: 300 4em Syncopate;
    line-height: 1em;
    text-transform: uppercase;
  }
  p {
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #9598a9;
    font: 500 20px Montserrat;
  }
  .icon-logo {
      width: 80%;
      height: 80%;
    }
  @media screen and (max-width: 430px) {
    padding: 120px 15px 0px 15px;
    h1 {
      font: 300 3em Syncopate;
      line-height: 1.3em;
      text-transform: uppercase;
      text-align: center;
    }
    p {
      letter-spacing: 0.04em;
      color: #9598a9;
      font: 500 1em Montserrat;
      text-align: center;
    }
  }
`;
