import Document, { Head, Html, Main, NextScript } from "next/document";
import { flushToReact } from "next-styled-system";
import flushStyledJsx from "styled-jsx/server";

class MyDocument extends Document {
  render(): JSX.Element {
    const styles = [...flushToReact()];
    const styles2 = [...flushStyledJsx()];
    return (
      <Html lang="en">
        <Head>
          {styles}
          {styles2}
        </Head>
        <Head>
          <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta charSet="UTF-8" />
          {/*{process.env.NODE_ENV === "production" ? (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-JS229JV27E" />
              <script async src="/google-analytics.js" />
            </>
          ) : null}*/}
        </Head>
        <body>
          <script src="/colorTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
