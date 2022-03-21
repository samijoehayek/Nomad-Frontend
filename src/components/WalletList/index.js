import React from "react";
import { isMobile } from "react-device-detect";
import detectEthereumProvider from "@metamask/detect-provider";
import WalletListing from "./WalletListing";
import Coinbase from "../../assets/images/wallets/coinbase.png";
import Metamask from "../../assets/images/wallets/metamask-icon.svg";
import Walletconnect from "../../assets/images/wallets/walletconnect.svg";
import Torus from "../../assets/images/wallets/torus.svg";
import Fortmatic from "../../assets/images/wallets/fortmatic.svg";
import config from "../../config";
import styles from "./WalletList.module.scss";

const WalletList = ({activate, activateBrowserWallet}) => {

  const [openMetamaskAllow, setOpenMetamaskAllow] = React.useState(false);
  
  React.useEffect(() => detectEthereumProvider().then((provider) => setOpenMetamaskAllow(provider ? true : false)), []);

  const injectedHandle = () => {
    if(openMetamaskAllow){
      activateBrowserWallet()
    } else {
      if (isMobile) {
        window.open("https://metamask.app.link/dapp/oasisx.world", "_blank");
      } else {
        alert("You should install MetaMask browser extension");
      }
    }
  }
  return (
    <div className={styles["walletListWrapper"]}>
      <WalletListing heading="Metamask" iconSrc={Metamask} onWalletCall={injectedHandle} />
      <WalletListing heading="Coinbase" iconSrc={Coinbase} onWalletCall={() => activate(config.Connectors.coinbase)} />
      <WalletListing heading="WalletConnect" iconSrc={Walletconnect} onWalletCall={() => activate(config.Connectors.walletconnect)} />
      <WalletListing heading="Torus" iconSrc={Torus} onWalletCall={() => activate(config.Connectors.torus)}/>
      <WalletListing heading="Fortmatic" iconSrc={Fortmatic} onWalletCall={() => activate(config.Connectors.fortmatic) }  noBottomBorder={true}/>
    </div>
  );
};

export default WalletList;
