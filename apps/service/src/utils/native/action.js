import proof from "./core";

export const getProofAccessToken = (options, callback) => {
  proof.callNative("getProofAccessToken", options, callback);
};

export const closeWebView = (options, callback) => {
  proof.callNative("closeWebView", options, callback);
};
