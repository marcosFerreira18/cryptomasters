import styled from "styled-components";

export const SectionSecondary = styled.section`
  min-height: 100vh;
  padding: 150px 50px 0px 50px;
  svg {
    height: 72px;
  }

 
  .img-resultado {
    max-height: 80vh;
    max-width: 90%;
    z-index: -1;
  }
  h3 {
    font-family: Syncopate;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 22px;
    color: #3cc8c8;
  }

  h2 {
    font-family: Syncopate;
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #ff5c5c;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 1em;
    color: #f8d3d3;
  }

  @media screen and (max-width: 418px) {
    padding: 100px 15px 0px 15px;
    .img-resultado {
      width: 100%;
    }
    h3 {
      font-size: 1em;
    }
    h2 {
      font-size: 1.4em;
      line-height: 1em;
    }
    p {
      font-size: 0.8em;
      line-height: 1.3em;
    }
  }
`;
