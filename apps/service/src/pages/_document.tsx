import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <title>Proof</title>
        <Head>
          <meta
            property="og:title"
            content="매력적인 술꾼! 당신의 술 취향을 증명할 수 있도록 초대장이 도착했어요."
            key="proof result"
          />
          <meta
            property="og:image"
            content="https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/proof_logo.png"
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

export default MyDocument;
