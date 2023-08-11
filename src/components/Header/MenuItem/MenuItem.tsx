import React from 'react';
import NextLink from 'next/link';
import RainbowText from '@/components/RainbowText';
// import {
//   Flex,
//   FlexProps,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   useDisclosure,
//   Link,
//   Box,
//   Stack,
//   Divider,
//   useColorModeValue,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
// import {
//   // Badge,
//   // ChevronDown,
//   // ChevronUp,
//   CloseIcon,
//   CollectionIcon,
//   CompassIcon,
//   GiftIcon,
//   HamburgerIcon,
//   // RainbowText,
//   // StaticLogoLarge,
//   // StaticLogoLargeLight,
// } from "uikit";
// import { Menu } from "uikit/Menu/Menu";
// import { LanguageSwitcherButtons } from "../Buttons/LanguageSwitherButton/LanguageSwitcherButton";
// import { DesktopNextLink, MobileLink, MobileNextLink } from "./shared";

const MenuItems = () => {
  // const { t } = useTranslation();
  const { pathname } = useRouter();
  const isRewardActive = pathname.startsWith('/rewards');
  return (
    <div>
      {/* <DesktopNextLink href="/explore">{t("Explore")}</DesktopNextLink>
      <DesktopNextLink href="/collections">{t("Collections")}</DesktopNextLink> */}
      <div>
        <div className="flex items-center px-4 h-12 border-b-2 whitespace-nowrap text-text-02 hover:bg-ui-01">
          <NextLink href="/rewards" passHref>
            <div>Collections</div>
          </NextLink>
          <NextLink href="/rewards/trading" passHref>
            <div>Win</div>
          </NextLink>

          <NextLink href="/rewards" passHref>
            <RainbowText>Rewards</RainbowText>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;

// export const MobileDrawer = () => {
//   const { t } = useTranslation();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const rewardDisclosure = useDisclosure();
//   // const logoWithText = useColorModeValue(
//   //   <StaticLogoLargeLight width="130" height="40" />,
//   //   <StaticLogoLarge width="130" height="40" />
//   // );

//   return (
//     <>
//       <IconButton aria-label="Mobile menu" colorScheme="gray" isRound onClick={onOpen}>
//         <HamburgerIcon />
//       </IconButton>
//       <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <Flex alignItems="center" justifyContent="space-between" pr={4}>
//             <DrawerHeader flex="0" display="flex" alignItems="end" tabIndex={1} px={4}>
//               {/* <Box w="130px">{logoWithText}</Box> */}
//             </DrawerHeader>
//             <IconButton aria-label="close menu" variant="ghost" size="xs" color="text-01" onClick={onClose}>
//               <CloseIcon />
//             </IconButton>
//           </Flex>
//           <Box bg="ui-02">
//             <LanguageSwitcherButtons layoutFixed />
//           </Box>
//           <DrawerBody display="flex" flexDirection="column" bgColor="ui-01" px={0}>
//             <Stack spacing={0} divider={<Divider />}>
//               {/* <MobileNextLink href="/explore" leftIcon={CompassIcon}>
//                 {t("Explore")}
//               </MobileNextLink> */}
//               {/* <MobileNextLink href="/collections" leftIcon={CollectionIcon}>
//                 {t("Collections")}
//               </MobileNextLink>
//               <MobileLink
//                 as="div"
//                 leftIcon={GiftIcon}
//                 rightIcon={rewardDisclosure.isOpen ? <ChevronUp /> : <ChevronDown />}
//                 onClick={rewardDisclosure.onToggle}
//                 userSelect="none"
//               >
//                 {t("Rewards")}
//               </MobileLink> */}
//               {rewardDisclosure.isOpen && (
//                 <>
//                   {/* <MobileNextLink href="/rewards" pl="52px">
//                     {t("Staking")}
//                   </MobileNextLink>
//                   <MobileNextLink
//                     href="/rewards/trading"
//                     pl="52px"
//                     rightIcon={
//                       <Badge textTransform="uppercase" bg="support-error-inverse" color="white">
//                         {t("New")}
//                       </Badge>
//                     }
//                   >
//                     {t("Listing & Trading")}
//                   </MobileNextLink> */}
//                 </>
//               )}
//             </Stack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };
