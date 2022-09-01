import * as React from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle, theme } from "design-system";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
    if (typeof window !== "undefined") {
      const handleResizeWindow = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };
      window.addEventListener("resize", handleResizeWindow);

      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            {pageLoaded ? <Component {...pageProps} /> : null}
          </RecoilRoot>
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
