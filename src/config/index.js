import DappConfig from "./dapp";
import ContractsConfig from "./contracts";
import Connectors from "./connectors";

const stage = process.env.NEXT_PUBLIC_ENV;

const config = {
  DappConfig: { ...DappConfig },
  ContractsConfig: { ...ContractsConfig },
  Connectors: { ...Connectors },
  Infura:
    (stage !== "production" ? "rinkeby." : "mainnet.") +
    "infura.io/v3/" +
    process.env.NEXT_PUBLIC_INFURA_KEY
};

export default config;

