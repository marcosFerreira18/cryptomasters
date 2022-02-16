import styled from "styled-components";

export const ContainerChatBot = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  flex-direction: column;
`;

export const HeaderChatBot = styled.div`
  background: linear-gradient(94.05deg, #df531a 12.25%, #f7931a 97.2%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px 9px 0px 0px;
  width: 320px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const NameCotactChatBot = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: #ffffff;
  margin: 0 10px;
`;
export const BioCotactChatBot = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  margin: 0 10px;
`;

export const BodyChatBot = styled.div`
  background: linear-gradient(111deg, #ffffff 15.93%, #ffffff 70.23%);
  border-radius: 10px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &:after {
    width: 40px;
    height: 30px;
    position: absolute;
    border-color: #fff #fff #fff0 #fff0;
    border-style: solid;
    border-width: 27px 47px;
    right: 0;
    bottom: -10px;
    z-index: -1;
    content: "";
  }
`;

export const MessageItemChatBot = styled.div`
  background: #383f4f;
  border-radius: 0px 100px 100px 60px;
  padding: 10px 10px 10px 20px;
  max-width: 70%;
  margin-bottom: 5px;
`;

export const MessageListChatBot = styled.div`
  display: flex;
  padding: 15px;
  /* border: 1px solid #0f0; */
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`;
export const MessageHourChatBot = styled.span``;

export const MessageTextChatBot = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  color: #fafafa;
`;

export const FooteerChatBot = styled.div`
  /* display: flex; */
  padding: 10px;
`;
export const DisclamerTextChatBot = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin: 0;
  color: #92af1a;
`;
export const InputChatBot = styled.input`
  padding: 10px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 12px;
  width: 77%;
  margin-right: 5px;
  height: 40px;
  &::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    color: #beaaaa;
  }
`;

export const SendButtonChatBot = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  padding: 10px 15px;
  height: 40px;
  border: none;
  background: linear-gradient(
    126.93deg,
    #216cda 0%,
    #1466dd 44.32%,
    #216cda 94.44%
  );
  box-shadow: 0px 1px 3px #baaeae;
  border-radius: 10px;
`;

export const ImageProfileChatBot = styled.img`
  margin-top: 15px;
  background: #f2f;
  width: 67px;
  height: 67px;
  border: 3px solid #ffffff;
  border-radius: 100%;

  box-shadow: 0px 10px 40px rgba(79, 13, 140, 1);
`;
