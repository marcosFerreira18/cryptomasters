import styled from "styled-components";

export const SectionProfile = styled.section`
  background: #0b0b0b;
  min-height: 100vh;
  padding-top: 100px;
`;

export const ContainerProfile = styled.div`
  max-width: 1440;
  width: 100%;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* border: 1px solid white; */
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
  border-bottom: 10px solid #ff5c5c;
  padding: 10px 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleContainerProfile = styled.div`
  width: 28%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 30px;
  flex-direction: column;
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  h6 {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    opacity: 0.8;
  }
`;

export const ImageContainerProfile = styled.div`
  width: 28%;
  position: relative;
  img {
    max-width: 100%;
    border-radius: 10px;
    /* opacity: .7; */
    /* filter: hue-rotate(90deg); */
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const NameProfile = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.6px 3.6px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  padding: 5px;
  position: absolute;
  bottom: 15%;
  left: -15%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #0b0b0b;
    margin: 0 10px;
  }

  @media screen and (max-width: 768px) {
    bottom: 10%;
    left: 10%;
  }
`;

export const CircleIcon = styled.div`
  background: rgba(255, 216, 120, 0.57);
  font-size: 25px;
  border-radius: 50px;
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailProfile = styled.div`
  width: 28%;

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #ffffff;
  }
  h4 {
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: bolder;
    color: #ff5c5c;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    margin: 3rem 0;
  }
  li {
    /* margin-bottom: 4rem; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    max-width: 300px;
  }
  .li-text {
    font-weight: 300;
    font-size: 1.6rem;
    letter-spacing: -0.005em;
    color: #ffffff;
    font-size: 18px;
    opacity: 0.8;
  }
  .li-icon {
    width: 5px;
    height: 5px;
    background: #ff5c5c;
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-right: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
