import { UserAgent } from "./constants";
import { parse } from "./helpers";

export function useUserAgent() {
  return {
    parseUserAgent: (phase: string): UserAgent => {
      return parse(phase);
    },
  };
}
