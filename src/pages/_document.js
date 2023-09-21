import Document, { Html, Head, Main, NextScript } from "next/document";

// 전체 HTML 커스텀
class MyDocument extends Document {
  render() {
    return (
      <Html leng="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
