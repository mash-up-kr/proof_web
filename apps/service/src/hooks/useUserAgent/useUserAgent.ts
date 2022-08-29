import { useEffect, useState } from "react";
import { UserAgent } from "./constants";
import { parse } from "./helpers";

export function useUserAgent() {
  const [result, setResult] = useState<UserAgent>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const uaString = navigator.userAgent;
      const result = parse(uaString);
      setResult(result);
    }
  }, []);
  return {
    userAgent: result,
  };
}
