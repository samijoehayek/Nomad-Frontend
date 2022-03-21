import React, { useContext, useEffect, useState } from "react";
import { useEthers, useEtherBalance, useNetwork } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import {
  Button,
  Icon,
  Select,
  Switch,
  Typography,
} from "@oasisx/ui-components";
import { signMessage } from "../../utils/helpers";
import styles from "./ConnectButtonWallet.module.scss";
import { hooks, useMutation } from "../../query";
import { MUTATION_KEYS } from "../../query/config/keys";
import WalletSidebar from "../WalletSidebar";

import { getWithExpiry } from "../../utils/localStorage/getWithExpire";
import { setWithExpiry } from "../../utils/localStorage/setWithExpire";
import Dropdown from "../Dropdown";
import { OpenAPIContext } from "react-openapi-client";

const Buffer = require("buffer").Buffer;
const buf2hex = (x) => "0x" + x.toString("hex");

const signingMessage = async (key, account, provider, setErr) => {
  if (!key) {
    const sig = await signMessage({
      account,
      provider,
      setErr,
      message: `Welcome to OasisX Marketplace! This request will not trigger a blockchain transaction or cost any gas fees. Wallet address: ${account} ts-${Date.now()}`,
    });
    setWithExpiry(`sig-${account}`, sig, 43200000);
    return getWithExpiry(`sig-${account}`);
  }
};

const ConnectButtonWallet = () => {
  const {
    library,
    deactivate,
    account,
    activateBrowserWallet,
    activate,
    error,
  } = useEthers();
  const { network } = useNetwork();
  const { api } = useContext(OpenAPIContext);
  const etherBalance = useEtherBalance(account);
  const [displayedError, setDisplayedError] = useState("");
  const [isWalletList, setIsWalletList] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const { data, isLoading } = hooks.useCurrentUser();
  const { mutateAsync: mutate } = useMutation(MUTATION_KEYS.POST_LOGIN);
  const handleConnectWallet = () => {
    account ? deactivate() : setIsWalletList(true);
  };

  useEffect(() => {
    if (account && library) {
      // dirty demo hack, chainId should be come exchangable
      if (network.chainId !== 4) {
        alert("Can only connect to Rinkeby testnet!");
        deactivate();
      } else {
        let key = getWithExpiry(`sig-${account}`);

        if (key) {
          mutate({
            payload: {
              address: key.address.toLowerCase(),
              msg: buf2hex(Buffer(key.message, "utf8")),
              signed: key.signature,
            },
          }).then(() => {
            api.axiosConfigDefaults.headers = {
              "x-web3-auth-address": key.address,
              "x-web3-auth-msg": key.message,
              "x-web3-auth-signed": key.signature,
            };
          });
        } else {
          signingMessage(key, account, library, (c) =>
            setDisplayedError(c)
          ).then((e) => {
            api.axiosConfigDefaults.headers = {
              "x-web3-auth-address": e.address,
              "x-web3-auth-msg": e.message,
              "x-web3-auth-signed": e.signature,
            };
          });
        }
      }
    }
  }, [account, library]);

  // add error toast
  useEffect(async () => {
    if (error) {
      setDisplayedError(error);
    }
  }, [error]);

  // add error toast
  useEffect(async () => {
    if (displayedError) {
      alert(displayedError);
      console.log(displayedError);
      setTimeout(() => setDisplayedError(null), 0);
    }
  }, [displayedError]);

  console.log(data);
  return account ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Dropdown
        backgroundColor={"white"}
        open={menuOpen}
        onChange={(e) => {
          setMenuOpen(e);
        }}
        width={"200px"}
        selectTextColor={"darkGrey"}
        className={"dvsvsv"}
        render={
          <div style={{ zIndex: "100" }}>
            <Button
              variant="Outlined"
              padding=" 5px 10px"
              textVariant={"body"}
              width={"fit-content"}
              text={`${
                etherBalance
                  ? parseFloat(formatEther(etherBalance)).toFixed(3)
                  : 0
              } ETH`}
              className={styles.connectedBtn}
              prefixIcon="Wallet"
            />
          </div>
        }
        top={35}
      >
        <Select>
          <Typography variant={"title"}>{!isLoading && data?.name}</Typography>
          <Typography variant={"subtitle"}>
            {!isLoading && data?.walletAddress.slice(0, 15)}...
            {data?.walletAddress.slice(-5)}
          </Typography>
          <br />

          <Typography variant={"body"}>Balance</Typography>

          <br />
          <Typography variant={"title"}>
            {`${
              etherBalance
                ? parseFloat(formatEther(etherBalance)).toFixed(3)
                : 0
            } ETH`}
          </Typography>
        </Select>
        <Select
          prefixIcon={"Create"}
          onClick={() => console.log("clicked1")}
          text={"Create"}
        />
        <Select
          prefixIcon={"FavoritesGrey"}
          onClick={() => console.log("clicked1")}
          text={"Favorites"}
        />
        <Select
          prefixIcon={"CollectiblesGrey"}
          onClick={() => console.log("clicked1")}
          text={"My Collections"}
        />
        <Select
          prefixIcon={"SettingsGrey"}
          onClick={() => deactivate()}
          text={"Settings"}
        />
        <Select
          prefixIcon={"LogoutGrey"}
          onClick={() => deactivate()}
          text={"Logout"}
        />
        <Select
          prefixIcon={"NightGrey"}
          onClick={() => setDarkMode(!darkMode)}
          text={"Night Mode"}
        >
          <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
        </Select>
      </Dropdown>
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
