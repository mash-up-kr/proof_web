import { init } from "@amplitude/analytics-browser";
import { useEffect } from "react";

function useInitAmplitude() {
  useEffect(() => {
    if (typeof window !== undefined) {
      init(process.env.NEXT_PUBLIC_AMPLITUDE_SERVICE_KEY as string);
    }
  }, []);
}

export default useInitAmplitude;
