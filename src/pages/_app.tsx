import React, { useEffect } from "react";
import { useRouter } from "next/router";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import LogoSite from "../assets/logo-masters.svg";
import { HeaderPage } from "../styles/components/header-page";
import "bootstrap/dist/css/bootstrap.css"; // Add this line

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("670772597414258"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

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
