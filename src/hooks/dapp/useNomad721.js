import { useContractCall, useContractFunction } from "@usedapp/core";

import * as contracts from "config/contracts/index.js";

const useOasisXAtomicizerMethod = (methodName) => {
    const { state, send, events } = useContractFunction(
      contracts.OasisXAtomicizerContract,
      methodName,
      {}
    );
    return { state, send, events };
};
  
export default useOasisXAtomicizerMethod;