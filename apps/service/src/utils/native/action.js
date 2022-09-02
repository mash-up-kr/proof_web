import proof from "./core";

export const getProofAccessToken = (options = {}) => {
  return new Promise((resolve, reject) => {
    proof.callNative(
      "getProofAccessToken",
      options,
      (statusCode, msg, response) => {
        alert("statusCode");
        alert(JSON.stringify(statusCode));
        const responseObj = JSON.parse(JSON.stringify(response));
        console.log(JSON.stringify(responseObj));
        resolve(responseObj.accessToken ?? "");
      }
    );
  })
}


export const closeWebView = (options, callback) => {
  proof.callNative("closeWebView", options, callback);
};
