import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

import styles from "./ConnectButtonWallet.module.scss";
import WalletSidebar from "../WalletSidebar";

const ConnectButtonWallet = () => {
  const {
    library,
    deactivate,
    account,
    activateBrowserWallet,
    activate,
    error,
  } = useEthers();
  const [displayedError, setDisplayedError] = useState("");
  const [isWalletList, setIsWalletList] = React.useState(false);

  const handleConnectWallet = () => {
    account ? deactivate() : setIsWalletList(true);
  };

  return account ? (
    <div style={{ display: "flex", flexDirection: "column" }}>


    </div>
  ) : (
    <div>
      <Button
        variant="Outlined"
        className={styles.connectBtn}
        onClick={handleConnectWallet}
        prefixIcon="Wallet"
        padding="5px 5px"
      />
      <WalletSidebar
        isOpen={isWalletList}
        onClose={() => setIsWalletList(false)}
        activate={activate}
        activateBrowserWallet={activateBrowserWallet}
      />
    </div>
  );
};

export default ConnectButtonWallet;
