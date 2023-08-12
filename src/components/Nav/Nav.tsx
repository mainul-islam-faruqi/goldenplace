import React, { memo, useState } from 'react';
import MenuItem from './MenuItem';
import Image from 'next/image';
import SearchInput from '../Input/SearchInput';
// import { useWeb3React } from "@web3-react/core";
import { Flex, Box, FlexProps, Stack, Menu, MenuProps } from "@chakra-ui/react";

// import { navHeightResponsive } from "uikit/theme/global";
import { ConnectWalletIconButton, ConnectWalletButton } from "@/components/Buttons/ConnectWalletButton";
// import { LanguageSwitcherButtons } from "components/Buttons/LanguageSwitherButton/LanguageSwitcherButton";
// import Logo from "./Logo";
import UserMenu from "./UserMenu";
// import { MobileDrawer, LinkList } from "./NavLinks";
// import { DesktopSearchButton, MobileSearchButton } from "./SearchButton";
// import { useTranslation } from "next-i18next";
import { ColorModeButton } from "@/components/Buttons/ColorModeButton";

// export type NavProps = FlexProps;

const showOnMobileProps = { base: 'block', md: 'none' };
const showOnDesktopProps = { base: 'none', md: 'block' };

const Nav: React.FC = () => {
  // const { account } = useWeb3React();
  const account = ""
  // const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');

  return (
    <nav className="flex items-center fixed top-0 left-0 w-full h-20 max-w-full sticky z-10 px-8 justify-between">
      <Image src="/goldenplace_logo.png" alt="Logo" width="200" height="33" />
      {/* <Logo mx={4} /> */}

      <div className="flex items-center justify-center  w-full md:flex">
        {/* <Box flexGrow={1} mx={4}>
          <DesktopSearchButton />
        </Box> */}
        <div className="w-full max-w-[512px] mx-4">
          <SearchInput
            searchText={searchText}
            setSearchText={setSearchText}
            placeholder="Search items, collections, and accounts"
            full={false}
            className=""
          />
        </div>
        <MenuItem />
      </div>

      <div className="w-32 px-4 mr-4 flex justify-end">
      <ColorModeButton />
      </div>

      <Stack direction="row" spacing={4}>
        <Stack direction="row" spacing={0}>
          <Box>
            
          </Box>

          {/* <Box display={showOnDesktopProps}>
            <LanguageSwitcherButtons variant="ghost" colorScheme="gray" />
          </Box> */}
        </Stack>
        {/* <Box display={showOnMobileProps}>
          <MobileSearchButton />
        </Box> */}
        {account ? (
          <UserMenu account={account} />
        ) : (
          <>
            <Box display={{ base: "block", lg: "none" }} px={4}>
              <ConnectWalletIconButton />
            </Box>
            {/* <Box display={{ base: "none", lg: "block" }}>
                <ConnectWalletButton round>{"Connect"}</ConnectWalletButton>
            </Box> */}
          </>
        )}
        <Box display={showOnMobileProps} ml={3} px={4}>
          {/* <MobileDrawer /> */}
         ...
        </Box>
      </Stack>
    </nav>
  );
};

export default Nav;
