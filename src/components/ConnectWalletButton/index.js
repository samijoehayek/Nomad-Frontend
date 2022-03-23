import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import WalletSidebar from "../WalletSidebar";
import {Button} from "react-bootstrap";
import {AiOutlineArrowRight} from "react-icons/ai";

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
      <Button
          variant="light"
          className="rounded-0 connectWalletBtn"
          prefixIcon="Wallet"
          padding="5px 5px"
      >Mint <AiOutlineArrowRight /> </Button>
  ) : (
    <div>
      <Button
        variant="light"
        className="rounded-0 connectWalletBtn"
        onClick={handleConnectWallet}
        prefixIcon="Wallet"
        padding="5px 5px"
      >connect wallet <AiOutlineArrowRight /> </Button>
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
