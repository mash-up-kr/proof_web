import * as React from "react";

function useUserAgent() {
  const [webView, setWebView] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const uaString = navigator.userAgent;
      // Proof 앱에서 준 값을 포함하고 있으면 setWebView(true)
    }
  }, []);
  return { webView };
}

export { useUserAgent };
