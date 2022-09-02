import proof from "./core";

export const getProofAccessToken = (options = {}) => {
  return new Promise((resolve, reject) => {
    proof.callNative(
      "getProofAccessToken",
      options,
      (statusCode, msg, response) => {
        const responseObj = JSON.parse(JSON.stringify(response));
        resolve(responseObj.accessToken ?? "");
      }
    );
  });
};

export const closeWebView = (options, callback) => {
  proof.callNative("closeWebView", options, callback);
};

export const nativeShare = (options, callback) => {
  proof.callNative("onClickSharedButton", options, callback);
}