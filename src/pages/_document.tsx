import Document, {
  DocumentContext, DocumentInitialProps, Head, Html, Main,
  NextScript
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
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
            href="../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"
            rel="stylesheet"
          />
          <link
            href="../assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf"
            rel="stylesheet"
          />

          <link
            href="../assets/fonts/Syncopate/Syncopate-Regular.ttf"
            rel="stylesheet"
          />
          <link
            href="../assets/fonts/Syncopate/Syncopate-Bold.ttf"
            rel="stylesheet"
          />

          <link
            href="../assets/fonts/Roboto/Roboto-Bold.ttf"
            rel="stylesheet"
          />
          <link
            href="../assets/fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf"
            rel="stylesheet"
          />
          <link
            href="../assets/fonts/Raleway/Raleway-VariableFont_wght.ttf"
            rel="stylesheet"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cryptomasters.com.br" />
          <meta
            property="og:title"
            content="Aprenda a lucrar com criptoativos!"
          />
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
          <meta
            property="twitter:title"
            content="Aprenda a lucrar com criptoativos!"
          />
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-54L8CT6');
          `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-54L8CT6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
