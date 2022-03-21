import { useContractFunction } from "@usedapp/core";

import * as contracts from "config/contracts/index.js";

const useNomad721Method = (methodName) => {
    const { state, send, events } = useContractFunction(
      contracts.Nomad721Contract,
      methodName,
      {}
    );
    return { state, send, events };
};
  
export default useNomad721Method;