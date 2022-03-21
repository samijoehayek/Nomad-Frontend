import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { TorusConnector } from "@web3-react/torus-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

import DappConfig from "./dapp.js";

const POLLING_INTERVAL = DappConfig.pollingInterval;
const RPC_URLS = DappConfig.readOnlyUrls[DappConfig.readOnlyChainId];

const walletconnect = new WalletConnectConnector({
  rpc: { [DappConfig.readOnlyChainId]: RPC_URLS },
  bridge: "https://bridge.walletconnect.org",
  infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
  supportedChainIds: [DappConfig.readOnlyChainId],
  chainId: DappConfig.readOnlyChainId,
});

const fortmatic = new FortmaticConnector({
  apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY,
  chainId: DappConfig.readOnlyChainId,
});

const torus = new TorusConnector({ chainId: DappConfig.readOnlyChainId });

const coinbase = new WalletLinkConnector({
  url: RPC_URLS,
  appName: "OasisX Marketplace",
  appLogoUrl: "/logo192.png",
  supportedChainIds: [DappConfig.readOnlyChainId],
  darkMode: true,
});

export default {
  walletconnect,
  coinbase,
  fortmatic,
  torus,
};
