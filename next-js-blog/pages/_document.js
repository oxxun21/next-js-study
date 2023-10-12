import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="noti"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;