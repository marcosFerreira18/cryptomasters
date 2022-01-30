import styled from "styled-components";
export const SectionCheckout = styled.section`
  min-height: 100vh;
  padding: 50px 50px 0px 50px;
  @media screen and (max-width: 418px) {
    padding: 100px 15px 0px 15px;
  }
`;
export const CheckoutContainer = styled.div`
  padding: 20px;
  border: 2px solid rgba(83, 139, 240, 0.05);
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* background-color: #ff5c5c11; */
  position: relative;

  ul{
      padding: 0;
      margin: 0;
      li{
          text-decoration: none;
          list-style: none;
      }
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
    background: linear-gradient(217.85deg, #4aa6f7 -1.54%, #1141bd 101.14%);
    background: linear-gradient(
      270deg,
      #ff5c5c 15%,
      rgba(255, 133, 133, 0) 100%
    );

    -webkit-animation: card-circle 12s ease-in-out infinite alternate;
    animation: card-circle 12s ease-in-out infinite alternate;
  }
  @-webkit-keyframes card-circle {
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

export const BoxValue = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 24px;
    margin: 0;
  }
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 74.5133px;
    line-height: 91px;
    margin: 0;
  }
`;


export const ButtonCta = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  background: linear-gradient(270deg, #ff5c5c 0%, rgba(255, 133, 133, 0) 100%);
  border-radius: 5.17454px;
  padding: 16px 28px;
  border: 1px solid #ff5c5c;
  cursor: pointer;
  font-family: Montserrat;
  text-align: center;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 4px 1000px #f71a5cb4;
    color: #fff;
    text-decoration: none;
  }
`;