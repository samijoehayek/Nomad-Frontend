import { ChainId } from '@usedapp/core';

const ContractsConfig = {
  [ChainId.Rinkeby]: {
    NOMAD721: process.env.NEXT_PUBLIC_NOMAD721_ADDRESS_RINKEBY,
    NOMADSPLITTER: process.env.NEXT_PUBLIC_NOMADSPLITTER_ADDRESS_RINKEBY,
  },
  [ChainId.Mainnet]: {
    NOMADREGISTERY: process.env.NEXT_PUBLIC_NOMAD721_ADDRESS_MAINNET,
    NOMADEXCHANGE: process.env.NEXT_PUBLIC_NOMADSPLITTER_ADDRESS_MAINNET,
  }
}

export default ContractsConfig;
