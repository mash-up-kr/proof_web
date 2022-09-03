import { init } from "@amplitude/analytics-browser";
import { useEffect } from "react";

function useInitAmplitude() {
  useEffect(() => {
    if (typeof window !== undefined) {
      init("799f4fce304d7b04dc47c3480b34486a");
    }
  }, []);
}

export default useInitAmplitude;
