import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  padding: 50px;
  padding-bottom: 15px;
  margin-top: 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    88.52deg,
    rgba(27, 10, 131, 0.6) -7.35%,
    rgba(255, 33, 33, 0.6) 113.52%
  );
  backdrop-filter: blur(20px);
  position: relative;
  border-radius: 50px 50px 0px 0px;
  background-position: center;
  background-size: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    padding: 15px;
  }
`;

export const DisclamerContainer = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CheckoutDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const DisclamerText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2%;
  color: #f9e5e5;
  max-width: 55%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0%;
  }
`;
