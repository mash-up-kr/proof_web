const pad = (n, width) => {
  const strN = n.toString();
  return n.length >= width
    ? n
    : new Array(width - strN.length + 1).join("0") + n;
};

const getTransactionId = (() => {
  let trxcnt = 0;

  return () => {
    const trxTime = new Date().getTime();
    const trxId = `${trxTime}:${pad((trxcnt += 1), 5)}`;
    trxcnt %= 10000;
    return trxId;
  };
})();

const proof = (() => {
  const transactions = {};

  return {
    callNative: (functionName, options, callback) => {
      const trx_id = getTransactionId();
      transactions[trx_id] = {};
      transactions[trx_id].call = callback;
      transactions[trx_id].options = options;
      window.proof_native_api?.call(functionName, JSON.stringify(options), trx_id);
    },
    event: (_eventData) =>{
      const eventData = _eventData.replace(/\n/g, "");
      const eventDataObj = JSON.parse(eventData);
      const { transactionId: trx_id, eventType } = eventDataObj;

      switch (eventType) {
        case "CALLBACK_EVENT":
          if (trx_id) {
            transactions[trx_id].call(eventDataObj.result_cd, eventDataObj.result_msg, eventDataObj.extra);
            delete transactions[trx_id];
          }
          break;
        default:
          break;
      }
    },
  };
})();

if (typeof window !== 'undefined') {
  window.proof = proof;
}

export default proof;