import React, { memo, useState } from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";
import SearchInput from "../Input/SearchInput"
// import { useWeb3React } from "@web3-react/core";
// import { Flex, Box, FlexProps, Stack } from "@chakra-ui/react";
// import { navHeightResponsive } from "uikit/theme/global";
// import { ConnectWalletIconButton, ConnectWalletButton } from "components/Buttons/ConnectWalletButton";
// import { LanguageSwitcherButtons } from "components/Buttons/LanguageSwitherButton/LanguageSwitcherButton";
// import Logo from "./Logo";
// import UserMenu from "./UserMenu";
// import { MobileDrawer, LinkList } from "./NavLinks";
// import { DesktopSearchButton, MobileSearchButton } from "./SearchButton";
// import { useTranslation } from "next-i18next";
// import { ColorModeButton } from "components/Buttons/ColorModeButton";

// export type NavProps = FlexProps;

const showOnMobileProps = { base: "block", md: "none" };
const showOnDesktopProps = { base: "none", md: "block" };

const Header: React.FC = () => {
  // const { account } = useWeb3React();
  // const { t } = useTranslation();
  const [searchText, setSearchText] = useState('')

  return (
    <div 
    className="flex items-center fixed top-0 left-0 w-full max-w-full sticky z-10 px-4 justify-between"
    >
      <Image src="/goldenplace_logo.png" alt="Logo" width="200" height="33" />
      {/* <Logo mx={4} /> */}
      <div className="w-full">
        {/* <Box flexGrow={1} mx={4}>
          <DesktopSearchButton />
        </Box> */}
        <SearchInput searchText={searchText} setSearchText={setSearchText} placeholder="Search items, collections, and accounts" full={false} className='' />
      </div>

      <div className="flex items-center  w-full md:flex">
        {/* <Box flexGrow={1} mx={4}>
          <DesktopSearchButton />
        </Box> */}
        <MenuItem />
      </div>

      {/* <Stack direction="row" spacing={4}>
        <Stack direction="row" spacing={0}>
          <Box>
            <ColorModeButton />
          </Box>

          <Box display={showOnDesktopProps}>
            <LanguageSwitcherButtons variant="ghost" colorScheme="gray" />
          </Box>
        </Stack>
        <Box display={showOnMobileProps}>
          <MobileSearchButton />
        </Box>
        {account ? (
          <UserMenu account={account} />
        ) : (
          <>
            <Box display={{ base: "block", lg: "none" }}>
              <ConnectWalletIconButton />
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <ConnectWalletButton round>{t("Connect")}</ConnectWalletButton>
            </Box>
          </>
        )}
        <Box display={showOnMobileProps} ml={3}>
          <MobileDrawer />
        </Box>
      </Stack> */}
    </div>
  );
};

export default Header