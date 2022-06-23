import amplitude from "amplitude-js";

export const initAmplitude = (
  apiKey: string,
  userId?: string,
  config?: amplitude.Config
) => {
  if (apiKey) {
    amplitude.getInstance().init(apiKey, undefined, config);
  }
  if (userId) {
    amplitude.getInstance().setUserId(userId);
  }
};

export const useAmplitudeLogEvent = (
  eventName: string,
  eventProperties?: any
) => {
  return () => {
    amplitude.getInstance().logEvent(eventName, eventProperties);
  };
};
