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
    img {
      width: 100%;
      margin: 20px 0;
    }
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #1a191c;
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
  img {
    border-radius: 5px;
    width: 118px;
    height: 56px;
    margin-bottom: 15px;
  }
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    max-width: 45%;
    margin-left: 15px;
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
