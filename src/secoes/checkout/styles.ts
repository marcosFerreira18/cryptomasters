import styled from "styled-components";
export const SectionCheckout = styled.section`
  min-height: 100vh;
  padding: 100px 50px 0px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding: 100px 15px 0px 15px;
    display: block;
  }
  width: 100%;
`;
export const Container = styled.div`
  max-width: 1440px;
  /* border: 1px solid white; */
  /* display: flex; */
  flex-direction: column;
`;
export const CheckoutContainerItens = styled.div`
  /* margin: 15px; */
  padding: 20px;
  width: 50%;
  height: 85vh;

  ul {
    padding: 0;
    margin: 0;

    li {
      text-decoration: none;
      list-style: none;
      margin-top: 5px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      color: #f2f5ff;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    ul {
      li {
        margin-top: 0px;
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
`;

export const Span = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18.6283px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #ff5c5c;
`;

export const TitleCheckout = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 62px;
  line-height: 61px;
  max-width: 80%;
  color: #ffffff;
  @media screen and (max-width: 418px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const SubtitlePricing = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const CheckoutContainer = styled.div`
  /* margin: 15px; */
  padding: 20px;
  border: 2px solid rgba(83, 139, 240, 0.05);
  width: 35%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: #ff5c5c11; */
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* height: auto; */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0%;
    z-index: -1;
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 5%;
    left: 5%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    z-index: -1;
    background: linear-gradient(
      86.58deg,
      rgba(83, 227, 237, 0.2) 2.82%,
      rgba(42, 254, 231, 0.2) 91.51%
    );
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    -webkit-animation: card-circle 12s ease-in-out infinite alternate;
    animation: card-circle 12s ease-in-out infinite alternate;
  }

  @keyframes card-circle {
    0%,
    5% {
      top: 5%;
      left: 5%;
    }
    40% {
      top: -5%;
    }
    70% {
      top: 95%;
      left: 20%;
    }
    95%,
    100% {
      top: 80%;
      left: 80%;
    }
  }
`;
export const SubButton = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18.6283px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const SubPricing = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #e2b8b8;
`;
export const BoxValue = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 10em;
    line-height: 91px;
    margin: 0;
  }
`;

export const ButtonCta = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  background: linear-gradient(270deg, #278bff 0%, #5488ed 100%);
  box-shadow: 0px 0px 100px rgba(37, 101, 150, 0.4);
  border-radius: 14.7289px;
  padding: 16px 28px;
  cursor: pointer;
  font-weight: 600;

  font-family: Montserrat;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 4px 1000px #f71a5cb4;
    color: #fff;
    text-decoration: none;
  }
`;
