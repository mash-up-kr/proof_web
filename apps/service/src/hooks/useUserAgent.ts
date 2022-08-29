import { useEffect, useState } from "react";
import { UserAgent } from "../utils/parseUserAgent/constants";
import { parseUserAgent } from "../utils/parseUserAgent";

function useUserAgent() {
  const [result, setResult] = useState<UserAgent>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const uaString = navigator.userAgent;
      const result = parseUserAgent(uaString);
      setResult(result);
    }
  }, []);
  return {
    userAgent: result,
  };
}

export default useUserAgent;
