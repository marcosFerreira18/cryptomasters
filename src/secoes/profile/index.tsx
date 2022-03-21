import React from "react";
import {
  CircleIcon,
  ContainerProfile,
  DetailProfile,
  ImageContainerProfile,
  NameProfile,
  SectionProfile,
  Title,
  TitleContainerProfile,
} from "./styles";

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <SectionProfile>
      <ContainerProfile>
        <TitleContainerProfile>
          <Title>
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.85714 20.125C7.46875 20.125 7.14286 20.4529 7.14286 20.8438V23H8.57143V20.8438C8.57143 20.4529 8.25 20.125 7.85714 20.125ZM12.1429 20.125C11.7522 20.125 11.4286 20.4507 11.4286 20.8438C11.4286 21.2368 11.7522 21.5625 12.1429 21.5625C12.5335 21.5625 12.8571 21.2368 12.8571 20.8438C12.8571 20.4507 12.5357 20.125 12.1429 20.125ZM7.32143 7.72656L7.68772 8.83254C7.74196 8.99628 7.97232 8.99628 8.02656 8.83254L8.39286 7.72656L9.49196 7.35807C9.65473 7.30331 9.65473 7.07169 9.49196 7.01693L8.39286 6.64844L8.02679 5.54336C7.97255 5.37948 7.74219 5.37948 7.68795 5.54336L7.32143 6.64844L6.22321 7.0168C6.06045 7.07156 6.06045 7.30317 6.22321 7.35793L7.32143 7.72656ZM15.0045 14.1684C13.5714 15.2105 11.8348 15.8125 10 15.8125C8.16518 15.8125 6.42723 15.2092 4.99554 14.1688C2.07813 15.2824 0 18.117 0 21.4412C0 22.3037 0.692857 23 1.54732 23H5.71429V20.125C5.71429 19.3276 6.35045 18.6875 7.14286 18.6875H12.8571C13.6496 18.6875 14.2857 19.3276 14.2857 20.125V23H18.4527C19.308 23 20 22.3037 20 21.4412C20 18.117 17.9241 15.2824 15.0045 14.1684ZM2.85714 10.0625H3.45982C4.56696 12.6006 7.07143 14.375 10 14.375C12.9286 14.375 15.4375 12.6006 16.5402 10.0625H17.1429C17.5335 10.0625 17.8571 9.73682 17.8571 9.34375V5.03125C17.8571 4.64043 17.5357 4.3125 17.1429 4.3125H16.5402C15.4375 1.77441 12.9286 0 10 0C7.07143 0 4.56696 1.77441 3.45982 4.3125H2.85714C2.46652 4.3125 2.14286 4.64043 2.14286 5.03125V9.34375C2.14286 9.73906 2.46652 10.0625 2.85714 10.0625ZM4.64286 6.10938C4.64286 5.1166 5.60268 4.3125 6.78571 4.3125H13.2143C14.3973 4.3125 15.3571 5.1157 15.3571 6.10938V7.1875C15.3571 9.56836 13.4375 11.5 11.0714 11.5H8.92857C6.5625 11.5 4.64286 9.56836 4.64286 7.1875V6.10938Z"
                fill="white"
              />
            </svg>
            Quem sou
          </Title>
          <h6>
            Com passagens por Grandes Instituições Financeiras como Grupo Itaú
            Unibanco e Fininvest Investimentos. Possui MBA em Gestão Estratégica
            de Negócios e é especialista em Criptoativos operando diariamente no
            mercado nacional e internacional a mais de 6 anos
          </h6>
        </TitleContainerProfile>
        <ImageContainerProfile>
          <img src="erikson-trade.jpg" alt="erikson" />
          <NameProfile>
            <CircleIcon>🚀</CircleIcon>
            <h1>Erikson Mateus</h1>
          </NameProfile>
        </ImageContainerProfile>
        <DetailProfile>
          <h4>6 ANOS DE EXPERIÊNCIA</h4>
          <h1>Curso criado por quem opera no mercado cripto todos os dias.</h1>
          <p>”Hoje vivo, no mercado, o que sonhei e planejei no meu início.”</p>
          <ul>
            <li>
              <div className="li-icon "></div>
              <div className="li-text">Mentor trader</div>
            </li>
            <li>
              <div className="li-icon "></div>
              <div className="li-text">Espeicialista em cryptotrade</div>
            </li>
            <li>
              <div className="li-icon "></div>
              <div className="li-text">Criador do curso CryptoMasters</div>
            </li>
          </ul>
         
        </DetailProfile>
      </ContainerProfile>
    </SectionProfile>
  );
};

export default Profile;
