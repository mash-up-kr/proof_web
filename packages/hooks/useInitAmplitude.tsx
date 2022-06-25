import { init } from "@amplitude/analytics-browser";
import { useEffect } from "react";

function useInitAmplitude() {
  useEffect(() => {
    if (typeof window !== undefined) {
      init(process.env.AMPLITUDE_LANDING_KEY as string);
    }
  }, []);
}

export default useInitAmplitude;
