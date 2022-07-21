import * as React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle, theme } from "design-system";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <ReactQueryDevtools />
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
