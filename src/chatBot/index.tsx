import React, { useState } from "react";
import {
  BioCotactChatBot,
  BodyChatBot,
  ContainerChatBot,
  DisclamerTextChatBot,
  FooteerChatBot,
  HeaderChatBot,
  ImageProfileChatBot,
  InputChatBot,
  MessageItemChatBot,
  MessageListChatBot,
  MessageTextChatBot,
  NameCotactChatBot,
  SendButtonChatBot,
} from "./styles";

export type ChatBotProps = {
  nome: string;
  bio: string;
  urlImagemPerfil: string;
  whatsapp: string;
};

const ChatBot: React.FC<ChatBotProps> = (contato: ChatBotProps) => {
  const [msgInput, setMsgInput] = useState(
    "Quero entender mais sobre o curso."
  );

  const [showChat, setShowChat] = useState(false);

  function abrirWhatsapp() {
    let url = `https://api.whatsapp.com/send?phone=${contato.whatsapp}&text=${msgInput}`;
    window.open(url, "_blank");
  }
  return (
    <ContainerChatBot>
      {showChat ? (
        <BodyChatBot>
          <HeaderChatBot>
            ←
            <div>
              <NameCotactChatBot>{contato.nome}</NameCotactChatBot>
              <BioCotactChatBot>{contato.bio}</BioCotactChatBot>
            </div>
          </HeaderChatBot>
          <MessageListChatBot>
            <MessageItemChatBot>
              <MessageTextChatBot>Olá, tudo bem?</MessageTextChatBot>
            </MessageItemChatBot>
            <MessageItemChatBot>
              <MessageTextChatBot>
                Fale comigo agora e tire suas dúvidas.
              </MessageTextChatBot>
            </MessageItemChatBot>
          </MessageListChatBot>
          <FooteerChatBot>
            <DisclamerTextChatBot>
              Atendimento pelo whatsapp.
            </DisclamerTextChatBot>
            <InputChatBot
              value={msgInput}
              onChange={(a) => setMsgInput(a.currentTarget.value)}
              placeholder="Digite sua dúvida."
            />
            <SendButtonChatBot onClick={() => abrirWhatsapp()}>
              Enviar
            </SendButtonChatBot>
          </FooteerChatBot>
        </BodyChatBot>
      ) : null}

      <ImageProfileChatBot onClick={()=> setShowChat(!showChat)} src="whats.png" />
    </ContainerChatBot>
  );
};

export default ChatBot;
