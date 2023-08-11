// import React from "react";
// import { useDisclosure, IconButton, IconButtonProps } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
// import { Button, ButtonProps, WarningFilledIcon, WalletIcon } from "uikit";
// import { useIsSupportedNetwork } from "hooks/useIsSupportedNetwork";
// import { ConnectWalletModal } from "../Modals/ConnectWalletModal/ConnectWalletModal";



import React from "react";
import { useDisclosure, IconButton, IconButtonProps } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
// import { Button, ButtonProps, WarningFilledIcon, WalletIcon } from "uikit";
import { Button, ButtonProps, WarningFilledIcon, WalletIcon } from "@/uikit";
// import { useIsSupportedNetwork } from "hooks/useIsSupportedNetwork";
// import { ConnectWalletModal } from "../Modals/ConnectWalletModal/ConnectWalletModal";



export type ConnectWalletButtonProps = Omit<ButtonProps, "onClick" | "disabled">;

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  colorScheme,
  leftIcon,
  title,
  children,
  ...props
}) => {
  // const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const isUnsupportedNetwork = useIsSupportedNetwork();

  const getButtonText = () => {
    if (children) {
      return children;
    }

    // return isUnsupportedNetwork ? t("Network") : t("Connect Wallet");
    return "Connect Wallet"
  };

  return (
    <>
      <Button
        colorScheme={colorScheme}
        onClick={onOpen}
        // leftIcon={isUnsupportedNetwork ? <WarningFilledIcon /> : leftIcon}
        leftIcon={<WarningFilledIcon /> }
        data-id="connect-wallet-button"
        // title={isUnsupportedNetwork ? t("Unsupported Network") : title}
        {...props}
      >
        {getButtonText()}
      </Button>
      {/* <ConnectWalletModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export type ConnectWalletIconButtonProps = Omit<IconButtonProps, "onClick" | "disabled" | "aria-label">;

export const ConnectWalletIconButton = ({ colorScheme, ...props }: ConnectWalletIconButtonProps) => {
  // const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const isUnsupportedNetwork = useIsSupportedNetwork();

  return (
    <>
      <IconButton
        aria-label="connect wallet"
        // colorScheme={isUnsupportedNetwork ? "yellow" : colorScheme}
        onClick={onOpen}
        isRound
        // title={isUnsupportedNetwork ? t("Unsupported Network") : t("Connect Wallet")}
        data-id="connect-wallet-icon-button"
        {...props}
      >
        {/* {isUnsupportedNetwork ? <WarningFilledIcon /> : <WalletIcon />} */}
         <WalletIcon width={24} height={24} /> 
      </IconButton>
      {/* <ConnectWalletModal isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};
