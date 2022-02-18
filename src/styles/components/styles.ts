import styled from "styled-components";

export const AccordionTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 22px;
  color: #fefefe;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const AccordionDescription = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;

  color: #00ff33;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
