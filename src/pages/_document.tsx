import React from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

import { GA_TRACKING_ID } from "../utils/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;700&family=Raleway:wght@100;400;700&family=Syncopate:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* 
<!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cryptomasters.com.br" />
          <meta property="og:title" content="Não perca a próxima onda!" />
          <meta
            property="og:description"
            content="Escale seus investimentos com a força das criptomoedas."
          />
          <meta
            property="og:image"
            content="https://cryptomasters.com.br/logo-meta.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://cryptomasters.com.br/"
          />
          <meta property="twitter:title" content="Não perca a próxima onda!" />
          <meta
            property="twitter:description"
            content="Escale seus investimentos com a força dos criptoativos."
          />
          <meta
            property="twitter:image"
            content="https://cryptomasters.com.br/logo-meta.png"
          />

          <link rel="stylesheet" href="./sass/scss/to_group.css" />
          <meta
            name="facebook-domain-verification"
            content="6qg0yglf52xfiz41taudnph3l0futv"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
