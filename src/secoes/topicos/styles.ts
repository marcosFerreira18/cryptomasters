import styled from "styled-components";

export const SectionTopicos = styled.section`
  background: #fff;
  min-height: 100vh;
  padding: 100px;
  .box-presente {
    width: 100%;
    background-color: #1c1c1c22;
    padding: 10px;
    p {
      font-size: 26px;
      text-align: center;
    }
  }
  p {
    color: #222;
  }
  .col-md-4 {
    padding: 10px;
  }
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #1a191c;
    letter-spacing: 0px;
  }
  h2 {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    h2 {
      font-size: 23px;
      line-height: 26px;
    }
  }
`;

export const CardTopicos = styled.div`
  border: 1.5px solid rgba(70, 70, 70, 0.23);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  height: 200px;
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #4a4a4a;
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    p {
      width: 100%;
      text-align: center;
      font-size: 16px;
    }
  }
`;

export const HeadCardTopicos = styled.div`
  display: flex;
  width: 100%;
 margin-bottom: 10px;
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    max-width: 45%;
    margin-left: 15px;
    color: #1a191c;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    h2 {
      margin: 0;
      max-width: 100%;
      margin-left: 0px;
      margin: 20px 0;
      text-align: center;
    }
  }
`;

export const CarcBooks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c2caccaa;
  box-sizing: border-box;
  border-radius: 1px;
  padding: 10px;
  * {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
    max-height: 350px;
  }
  h3 {
    text-align: center;
    color: #0b0b0b;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    text-align: center;
    color: #0b0b0baa;
    font-family: Montserrat;
    font-size: 14px;
    margin-top: 10px;
    max-width: 80%;
    line-height: 14px;
  }
  h2 {
    text-align: center;
    color: #f71a5c;
    font-family: Montserrat;
    font-size: 32px;
    max-width: 80%;
  }
  h6 {
    text-align: center;
    color: #22222288;
    font-family: Montserrat;
    font-size: 12px;
    max-width: 80%;
    line-height: 14px;
  }
`;

export const Gratuito = styled.div`
  background-color: #102A6D;
  font-family: Montserrat;
  font-weight: bolder;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 10px;
  /* border-radius: 50px; */
`;
