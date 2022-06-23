import * as React from "react";
import type { AppProps } from "next/app";
import { initAmplitude } from "hooks";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    initAmplitude("799f4fce304d7b04dc47c3480b34486a");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
