import React, { useState } from "react";
import {
  ContainerChatBot, ImageProfileChatBot
} from "./styles";

export type ChatBotProps = {
  nome: string;
  bio: string;
  urlImagemPerfil: string;
  whatsapp: string;
};

const ChatBot: React.FC<ChatBotProps> = (contato: ChatBotProps) => {
  const [msgInput, setMsgInput] = useState(
    "Quero entender mais sobre o curso CryptoMasters."
  );

  function abrirWhatsapp() {
    let url = `https://api.whatsapp.com/send?phone=${contato.whatsapp}&text=${msgInput}`;
    window.open(url, "_blank");
  }
  return (
    <ContainerChatBot>
      <ImageProfileChatBot onClick={() => abrirWhatsapp()} src="whats.png" />
    </ContainerChatBot>
  );
};

export default ChatBot;
