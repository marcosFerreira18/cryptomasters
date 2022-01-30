import React from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import LogoSite from "../assets/logo-masters.svg";
import { HeaderPage } from "../styles/components/header-page";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      
      <Component {...pageProps} />
      <GlobalStyle />
      <HeaderPage>
        <LogoSite className="icon-logo" />
      </HeaderPage>
    </ThemeProvider>
  );
};

export default MyApp;
