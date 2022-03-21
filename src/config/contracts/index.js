import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";

import config from "../index.js";

import * as abis from "../../abis";

const OasisXRegistryAddr = config.ContractsConfig[4].OASISXREGISTERY;
const OasisXRegistryInterface = new utils.Interface(abis.OasisXRegistry.abi);
const OasisXRegistryContract = new Contract(
  OasisXRegistryAddr,
  OasisXRegistryInterface
);

const OasisXExchangeAddr = config.ContractsConfig[4].OASISXEXCHANGE;
const OasisXExchangeInterface = new utils.Interface(abis.OasisXExchange.abi);
const OasisXExchangeContract = new Contract(
  OasisXExchangeAddr,
  OasisXExchangeInterface
);

const OasisXAtomicizerAddr = config.ContractsConfig[4].OASISXATOMICIZER;
const OasisXAtomicizerInterface = new utils.Interface(
  abis.OasisXAtomicizer.abi
);
const OasisXAtomicizerContract = new Contract(
  OasisXAtomicizerAddr,
  OasisXAtomicizerInterface
);

const OasisXStaticAddr = config.ContractsConfig[4].OASISXSTATIC;
const OasisXStaticInterface = new utils.Interface(abis.OasisXStatic.abi);
const OasisXStaticContract = new Contract(
  OasisXStaticAddr,
  OasisXStaticInterface
);

const WEthAddr = config.ContractsConfig[4].WETH;
const WEthInterface = new utils.Interface(abis.WEth.abi);
const WEthContract = new Contract(WEthAddr, WEthInterface);

const erc721Interface = new utils.Interface(abis.ERC721.abi);

const erc20Interface = new utils.Interface(abis.ERC20.abi);

const erc1155Interface = new utils.Interface(abis.ERC1155.abi);

export {
  OasisXRegistryContract,
  OasisXRegistryAddr,
  OasisXRegistryInterface,
  OasisXExchangeInterface,
  OasisXExchangeAddr,
  OasisXExchangeContract,
  OasisXAtomicizerContract,
  OasisXAtomicizerAddr,
  OasisXAtomicizerInterface,
  OasisXStaticContract,
  OasisXStaticAddr,
  OasisXStaticInterface,
  WEthAddr,
  WEthInterface,
  WEthContract,
  erc721Interface,
  erc20Interface,
  erc1155Interface,
};
