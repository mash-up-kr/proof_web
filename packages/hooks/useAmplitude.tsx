import { init, logEvent, setUserId, Types } from "@amplitude/analytics-browser";

export const initAmplitude = (
  apiKey: string,
  userId?: string,
  config?: Types.Config
) => {
  if (apiKey) {
    init(apiKey, undefined, config);
  }
  if (userId) {
    setUserId(userId);
  }
};

export const useAmplitudeLogEvent = (
  eventName: string,
  eventProperties?: any
) => {
  return () => {
    logEvent(eventName, eventProperties);
  };
};
