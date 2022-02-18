import styled from "styled-components";

export const HorizontalSlider = styled.div`
  /* background-color: #333; */
  display: flex;
  overflow: auto;
  /* white-space: nowrap; */
  min-height: 45vh;
  margin: 30px 0;
  z-index: -1;
  /* background-color: #000; */
  scrollbar-width: none;
  padding: 10px;

  @media screen and (max-width: 430px) {
    height: 50vh;
    padding-bottom: 10px;
    padding-left: 0;
  }
`;

export const CardSlider = styled.div`
  background-color: #333;
  display: flex;
  align-items: flex-end;
  width: 350px;
  /* border: 1px solid #fff; */
  margin-right: 30px;
  border-radius: 10px;
  position: relative;
  /* z-index: -1; */

  .img-cover-card {
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    height: 40%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const BodyCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(26, 25, 28, 0.51) 0%,
    #18171a 78.12%
  );
  backdrop-filter: blur(17.2662px);
  border-radius: 10px;
  height: 80%;
  padding: 20px;
  h2 {
    font-size: 20px;
  }
  p {
    line-height: 20px;
  }
  width: 400px;
  @media screen and (max-width: 430px) {
    width: 75vw;
    padding: 15px;
    h2 {
      font-size: 14px;
    }
    p {
      line-height: 18px;

      font-size: 16px;
    }
  }
`;
