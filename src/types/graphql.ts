import { BigNumberish } from 'ethers';
import { MakerOrderWithSignatureAndHash } from './orders';
import { TokenStandard } from './config';

type PaymentToken = {
  payment_token_id: string;
  name: string;
  symbol: string;
  address: string | null;
  decimals: number;
};

type MarketplacePage = {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  collection_url: string;
  verified: boolean;
};

type FloorPrice = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
};

type TopBid = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
};

export type TopCollection = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  category: string | null;
  is_nsfw: boolean;
  external_url: string;
  twitter_username: string;
  discord_url: string;
  instagram_username: string | null;
  medium_username: string | null;
  telegram_url: string | null;
  marketplace_pages: MarketplacePage[];
  metaplex_mint: string | null;
  metaplex_first_verified_creator: string | null;
  floor_prices: FloorPrice[];
  top_bids: TopBid[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
};
export interface CollectionOwner {
  address: string;
  isVerified?: boolean;
  name?: string;
  avatar?: Omit<UserAvatar, 'collection' | 'name' | 'description'>;
}

export interface CollectionVolume {
  volumeAll: BigNumberish | null;
  volume24h: BigNumberish | null;
  change24h: number | null;
  volume7d: BigNumberish | null;
  change7d: number | null;
  volume1m: BigNumberish | null;
  change1m: number | null;
}

export interface CollectionFloor {
  floorPriceGlobal: BigNumberish | null;
  floorPriceOS: BigNumberish | null;
  floorPrice: BigNumberish | null;
  floorChange24h: number | null;
  floorChange7d: number | null;
  floorChange30d: number | null;
}

// Used for most minimal Collection displays i.e. within collection tables
export interface CollectionBase {
  collection: TopCollection
  name: string;
  address: string;
  type: TokenStandard;
  totalSupply: number;
  logo?: ImageData;
  isVerified?: boolean;
  isExplicit?: boolean;
  points: BigNumberish | null;
  volume: BigNumberish;
  countOwners?: number;
  countWatchlists: number;
  floor: CollectionFloor;
  hasRarity: boolean | null;
  watchlists?: BigNumberish;
  isInMainWatchlist: boolean;
  image_url?: string;
  slug?: string;
}

/**
 * Used for populating filters by collection
 */
export interface CollectionFilterItem {
  name: string;
  address: string;
  totalSupply: CollectionBase['totalSupply'];
  volume: Pick<CollectionVolume, 'volume24h'>;
  owned: BigNumberish;
  logo?: ImageData;
  isVerified: boolean;
  points: CollectionBase['points'];
  isHidden: boolean | null;
  floor: {
    floorPrice: BigNumberish | null;
  };
}

export interface Collection extends CollectionBase {
  owner: CollectionOwner;
  feeSetter: CollectionOwner | null;
  description?: string;
  banner?: ImageData;
  websiteLink?: string;
  facebookLink?: string;
  twitterUsername?: string;
  telegramLink?: string;
  instagramLink?: string;
  mediumLink?: string;
  discordLink?: string;
  collaborators: { collaborator: string }[];
}

export interface CollectionRecommendation {
  name: CollectionBase['name'];
  address: CollectionBase['address'];
  logo?: CollectionBase['logo'];
  banner?: Collection['banner'];
  isVerified: CollectionBase['isVerified'];
  points: CollectionBase['points'];
  floor: {
    floorChange24h: CollectionFloor['floorChange7d'];
    floorPrice: CollectionFloor['floorPrice'];
  };
  volume: {
    volume7d: CollectionVolume['volume7d'];
    change7d: CollectionVolume['change7d'];
  };
}

export interface WatchlistCollectionSearchResult {
  name: CollectionBase['name'];
  address: CollectionBase['address'];
  logo?: CollectionBase['logo'];
  isVerified: CollectionBase['isVerified'];
  points: CollectionBase['points'];
}

export interface CollectionStats {
  floor: CollectionFloor;
  volume: CollectionVolume;
}

export type SentimentAggregate = 'DAILY' | 'HOURLY';

export interface SentimentFilter {
  endTime: number;
  startTime: number;
}

export interface CollectionSentimentData {
  date: Date;
  negative: number;
  positive: number;
  neutral: number;
  sentiment: number;
  volume: number;
}

// @TODO this needs to be renamed to be more clear as it is not a user object but an NFT
export interface UserAvatar {
  id: string;
  tokenId: string;
  name: string;
  description: string;
  image: ImageData;
  collection: {
    address: string;
  };
}

// This type is used in conjunction with displaying a user link
export interface UserProfileDisplay {
  address: string;
  isVerified: boolean;
  image?: ImageData;
  name: string | null;
  ensDomain?: string | null;
}

export interface User {
  address: string;
  isVerified?: boolean;
  name: string | null;
  avatar?: UserAvatar; // Optional to allow compatibility with UserProfileDisplay
  biography?: string;
  websiteLink?: string;
  instagramLink?: string;
  twitterUsername?: string;
  countCollections?: BigNumberish;
}

export interface BaseOwner {
  address: string;
  name?: string;
}

export interface ExtendedOwner extends BaseOwner {
  avatar?: { image: ImageData };
}

export interface ExtendedTokenOwner {
  owner: ExtendedOwner;
  balance: BigNumberish;
}

export interface BaseTokenOwner {
  owner: BaseOwner;
  balance: BigNumberish;
}

// Simplified NFT for displaying/selecting an nft
export interface NFTAvatar {
  id: NFT['id'];
  tokenId: NFT['tokenId'];
  collection: NFT['collection']['address'];
  image: NFT['image'];
  name: NFT['name'];
}

// Collection props requested by NFT entity
export interface NFTCollection {
  address: string;
  name: string;
  type: TokenStandard;
  totalSupply: CollectionBase['totalSupply'];
  points: CollectionBase['points'];
  countOwners: CollectionBase['countOwners'];
  logo?: ImageData;
  isVerified?: boolean;
  owner?: CollectionOwner;
  description?: string;
  floor: CollectionFloor;
  volume: CollectionVolume;
  websiteLink?: string;
  twitterUsername?: string;
  instagramLink?: string;
  discordLink?: string;
  osSlug: string | null;
}

export interface NFT {
  id: string;
  tokenId: string;
  image: ImageData;
  name: string;
  animation?: AnimationData;
  description?: string;
  attributes?: Attribute[];
  isRefreshed: boolean;
  countOwners: BigNumberish;
  totalSupply: BigNumberish;
  collection: NFTCollection;
  ask?: MakerOrderWithSignatureAndHash; // There is an ask only if the NFT is listed for direct sale
  bids: MakerOrderWithSignatureAndHash[]; // The bid array will be empty of there is no offer
  lastOrder?: { price: BigNumberish; currency: string };
  rarity: RarityData[] | [];
}

// Collection props requested by NFTCard entity
export type NFTCardCollection = {
  address: string;
  name: string;
  type: TokenStandard;
  isVerified?: boolean;
  logo?: ImageData;
  points: CollectionBase['points'];
  isHidden: boolean | null;
  floor: CollectionFloor;
  totalSupply: CollectionBase['totalSupply'];
  volume: CollectionVolume;
  hasRarity: boolean | null;
  osSlug: string | null;
};

// Used for NFT Grid Card components
export interface NFTCard
  extends Omit<
    NFT,
    'attributes' | 'collection' | 'animation' | 'countOwners' | 'totalSupply'
  > {
  owners: BaseTokenOwner[];
  collection: NFTCardCollection;
  isHidden: boolean | null;
}

/**
 * CollectionTokenTransaction
 */

export enum EventType {
  MINT = 'MINT',
  TRANSFER = 'TRANSFER',
  LIST = 'LIST',
  SALE = 'SALE',
  OFFER = 'OFFER',
  CANCEL_LIST = 'CANCEL_LIST',
  CANCEL_OFFER = 'CANCEL_OFFER',
}

export interface EventOrder extends MakerOrderWithSignatureAndHash {
  status: OrderStatus;
}

export interface Event {
  id: string;
  from: UserProfileDisplay;
  to: UserProfileDisplay | null;
  type: EventType;
  createdAt: string;
  hash: string | null;
  order: EventOrder | null;
  token?: {
    tokenId: NFT['tokenId'];
    image: ImageData;
    name: string;
    rarity: RarityData[];
  };
  collection: {
    address: string;
    name: string;
    description: string;
    totalSupply: CollectionBase['totalSupply'];
    type: TokenStandard;
    isVerified: boolean;
    logo?: ImageData;
    floor?: {
      floorPrice: BigNumberish;
    };
    points: BigNumberish | null;
  };
}

export interface Trait {
  traitType: string;
  values: Attribute[];
}

export type AttributeDisplayType = 'date' | 'number' | 'string';

export interface Attribute {
  id: string;
  traitType: string;
  value: string;
  count: BigNumberish;
  displayType?: AttributeDisplayType;
  floorOrder?: {
    price: BigNumberish;
  };
}

export interface Pagination {
  first?: number;
  cursor?: string;
}

export interface RarityFilter {
  min?: string | null;
  max?: string | null;
}

export interface TokenFilter {
  collection?: string;
  owner?: string;
  order?: OrderFilter;
  withAskOnly?: boolean;
  withoutAskOnly?: boolean;
  withStandardBidOnly?: boolean;
  withCollectionBidOnly?: boolean;
  isHidden?: boolean;
  attributes?: AttributeFilter[];
  flag?: TokenFlag[];
  rarity?: RarityFilter;
}

export interface TokenOwnerFilter {
  addresses?: string[];
}

export interface PriceFilter {
  min?: string | null;
  max?: string | null;
}

export interface AttributeFilter {
  traitType: string;
  values: string[];
}

export interface OrderFilter {
  isOrderAsk?: boolean;
  collection?: string;
  tokenId?: string;
  signer?: string;
  strategy?: string[];
  price?: PriceFilter;
  currency?: string;
  startTime?: string | number;
  endTime?: string | number;
  status?: OrderStatus[];
  nonce?: BigNumberish;
}

export enum OrderStatus {
  CANCELLED = 'CANCELLED',
  EXECUTED = 'EXECUTED',
  EXPIRED = 'EXPIRED',
  VALID = 'VALID',
  INVALID_OWNER = 'INVALID_OWNER', // stale ask
  ERC_APPROVAL = 'ERC_APPROVAL', // stale ask
  ERC20_APPROVAL = 'ERC20_APPROVAL', // stale bid
  ERC20_BALANCE = 'ERC20_BALANCE', // stale bid
}

export interface EventFilter {
  collection?: string;
  tokenId?: string;
  from?: string;
  type?: EventType[];
  watchlists?: number[];
}

export enum TokenFlag {
  NO_IMAGE = 'NO_IMAGE',
  NONE = 'NONE',
  ERROR = 'ERROR',
  TRIAGE = 'TRIAGE',
}

export enum OrderSort {
  EXPIRING_SOON = 'EXPIRING_SOON',
  NEWEST = 'NEWEST',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
}

// Not intended to show the user
export enum CollectionInternalSort {
  LISTING_REWARD = 'LISTING_REWARD',
}

// Similar to "RelativeCollectionsSort", this only contains sorts used on the FE

export enum CollectionsSort {
  VOL_24H_DESC = 'VOL_24H_DESC',
  VOL_7D_DESC = 'VOL_7D_DESC',
  VOL_1M_DESC = 'VOL_1M_DESC',
  VOL_ALL_DESC = 'VOL_ALL_DESC',
  VOL_CHANGE_24H_DESC = 'VOL_CHANGE_24H_DESC',
  VOL_CHANGE_24H_ASC = 'VOL_CHANGE_24H_ASC',
  VOL_CHANGE_7D_DESC = 'VOL_CHANGE_7D_DESC',
  VOL_CHANGE_7D_ASC = 'VOL_CHANGE_7D_ASC',
  VOL_CHANGE_1M_DESC = 'VOL_CHANGE_1M_DESC',
  VOL_CHANGE_1M_ASC = 'VOL_CHANGE_1M_ASC',
  HIGHEST_24H = 'HIGHEST_24H',
}

/**
 * @TODO Check to see if we can combine this with CollectionSort
 * @TODO Update values once BE is ready
 */
export enum CollectionRankingsSort {
  VOLUME_24H_DESC = 'HIGHEST_24H',
  VOLUME_24H_ASC = 'HIGHEST_24H',
  VOLUME_7D_DESC = 'HIGHEST_7D',
  VOLUME_7D_ASC = 'HIGHEST_7D',
  VOLUME_1M_DESC = 'HIGHEST_1M',
  VOLUME_1M_ASC = 'HIGHEST_1M',
  VOLUME_DESC = 'HIGHEST_TOTAL',
  VOLUME_ASC = 'HIGHEST_TOTAL',
}

export enum CollectionTimeframe {
  DAY = '24h',
  WEEK = '7d',
  MONTH = '30d',
  MAX = 'max',
}

// Note - this is not all possible relative collection sorts, just those currently used by the app
export enum RelativeCollectionsSort {
  ALPHABETICAL_ASC = 'ALPHABETICAL_ASC',
  VOL_24H_DESC = 'VOL_24H_DESC',
  OWNED_ASC = 'OWNED_ASC',
  OWNED_DESC = 'OWNED_DESC',
}

export enum TokensSort {
  LAST_RECEIVED = 'LAST_RECEIVED',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
  RARITY_ASC = 'RARITY_ASC',
  RARITY_DESC = 'RARITY_DESC',
}

export interface Royalty {
  id: string;
  currency: string;
  amount: BigNumberish;
  to: string;
  hash: string;
  createdAt: string;
  token: {
    id: string;
    tokenId: string;
    image: ImageData;
    name: string;
  };
}

export interface ImageData {
  src: string;
  contentType?: string;
}

export interface AnimationData {
  src: string;
  contentType?: string;
  original?: string;
}

export interface CurrentListingReward {
  count: BigNumberish;
  totalPoints: BigNumberish;
}

export interface SearchFilterInput {
  term: string;
}

/** Show/Hide Token */
export enum ManageUserAction {
  HIDE = 'HIDE',
  UNHIDE = 'UNHIDE',
}

export type SuccessPayload = {
  success: true;
};

export enum RarityProvider {
  RARITY_SNIPER = 'RARITY_SNIPER',
}

export interface RarityData {
  provider: RarityProvider;
  rank: BigNumberish;
  url: string;
}

export interface PreviousTradingReward {
  volume: BigNumberish;
  start: string;
  end: string;
}

export enum NotificationType {
  SALE = 'SALE',
  OFFER_ACCEPTED = 'OFFER_ACCEPTED',
  OFFER = 'OFFER',
  COLLECTION_OFFER = 'COLLECTION_OFFER',
}

export interface Notification {
  id: string | null;
  type: NotificationType;
  /**
   * DateTime string i.e. "2023-01-26T09:46:58.052Z"
   */
  seenAt: string | null;
  createdAt: string;
  token?: {
    // token is undefined for collection offer notifications
    tokenId: string;
    image: ImageData;
    name: string;
  };
  collection: {
    address: string;
    name: string;
    type: TokenStandard;
    isVerified: boolean;
    logo?: ImageData;
    points: BigNumberish | null;
  };
  order: EventOrder;
}

export interface NotificationSettings {
  isEnabled: boolean | null;
  isPushEnabled: boolean;
  minOfferPercentageToNotify: number;
  allowedListingSold: boolean;
  allowedOfferAccepted: boolean;
  allowedOfferReceived: boolean;
  allowedCollectionOfferReceived: boolean;
  allowedMinOfferPercentageToNotify: boolean;
}

export type ValidNotificationSetting = keyof NotificationSettings;

export interface Watchlist {
  id: number;
  isMain: boolean;
  owner: {
    address: User['address'];
    name?: User['name'];
  };
  name?: string;
  watchersCount?: number;
  isWatching?: boolean;
  collectionCount: number;
}

// import { MakerOrderWithSignatureAndHash } from "./orders";
// import { TokenStandard } from "./config";
// import { BigNumberish } from "ethers";

// export interface CollectionOwner {
//   address: string;
//   isVerified?: boolean;
//   name?: string;
//   avatar?: Omit<UserAvatar, "collection" | "name" | "description">;
// }

// export interface CollectionVolume {
//   volumeAll: BigNumberish | null;
//   volume24h: BigNumberish | null;
//   change24h: number | null;
// }

// export interface CollectionFloor {
//   floorPriceOS: BigNumberish | null;
//   floorPrice: BigNumberish | null;
//   floorChange24h: number | null;
//   floorChange7d: number | null;
//   floorChange30d: number | null;
// }

// // Used for most minimal Collection displays i.e. within collection tables
// export interface CollectionBase {
//   name: string;
//   address: string;
//   type: TokenStandard;
//   logo?: ImageData;
//   isVerified?: boolean;
//   isExplicit?: boolean;
//   points: number | null;
//   volume: CollectionVolume;
//   countOwners?: number;
//   totalSupply?: number;
//   // @DEPRECATED floorOrder is deprecated, use floor.floorPrice instead. Remove floorOrder when fully migrated
//   floorOrder?: {
//     price: BigNumberish;
//   };
//   floor: CollectionFloor;
// }

// /**
//  * Used for populating filters by collection
//  */
// export interface CollectionFilterItem {
//   name: string;
//   address: string;
//   totalSupply: number;
//   volume: Pick<CollectionVolume, "volume24h">;
//   owned: BigNumberish;
//   logo?: ImageData;
//   isVerified: boolean;
//   points: number | null;
//   floorOrder?: {
//     price: BigNumberish;
//   };
// }

// export interface Collection extends CollectionBase {
//   owner: CollectionOwner;
//   description?: string;
//   banner?: ImageData;
//   totalSupply?: number;
//   websiteLink?: string;
//   facebookLink?: string;
//   twitterLink?: string;
//   telegramLink?: string;
//   instagramLink?: string;
//   mediumLink?: string;
//   discordLink?: string;
//   countOwners?: number;
// }

// // @TODO this needs to be renamed to be more clear as it is not a user object but an NFT
// export interface UserAvatar {
//   id: string;
//   tokenId: string;
//   name: string;
//   description: string;
//   image: ImageData;
//   collection: {
//     address: string;
//   };
// }

// // This type is used in conjunction with displaying a user link
// export interface UserProfileDisplay {
//   address: string;
//   isVerified: boolean;
//   image?: ImageData;
//   name?: string;
//   ensDomain?: string | null;
// }

// export interface User {
//   address: string;
//   isVerified?: boolean;
//   name?: string;
//   avatar?: UserAvatar;
//   biography?: string;
//   websiteLink?: string;
//   instagramLink?: string;
//   twitterLink?: string;
//   countCollections?: number;
//   listingReward24h?: {
//     totalPoints: number;
//     points: number;
//     updatedAt: string;
//   } | null;
// }

export interface TokenOwner {
  address: string;
  balance: BigNumberish;
}

// // Not intended to be used except for extending
// interface NftBase {
//   id: string;
//   tokenId: string;
//   image: ImageData;
//   name: string;
//   animation?: AnimationData;
//   description?: string;
//   attributes?: Attribute[];
// }

// // Simplified NFT for displaying/selecting an nft
// export interface NFTAvatar {
//   id: NFT["id"];
//   tokenId: NFT["tokenId"];
//   collection: NFT["collection"]["address"];
//   image: NFT["image"];
//   name: NFT["name"];
// }

// // Collection props requested by NFT entity
// export interface NFTCollection {
//   address: string;
//   name: string;
//   type: TokenStandard;
//   totalSupply: number;
//   logo?: ImageData;
//   isVerified?: boolean;
//   points: number | null;
//   owner?: CollectionOwner;
//   description?: string;
//   floorOrder?: {
//     price: BigNumberish;
//   };
//   floor: CollectionFloor;
// }

// export interface NFT extends NftBase {
//   countOwners: number;
//   collection: NFTCollection;
//   ask?: MakerOrderWithSignatureAndHash; // There is an ask only if the NFT is listed for direct sale
//   bids: MakerOrderWithSignatureAndHash[]; // The bid array will be empty of there is no offer
//   lastOrder?: { price: BigNumberish; currency: string };
// }

// // Collection props requested by NFTCard entity
// export type NFTCardCollection = {
//   address: string;
//   name: string;
//   type: TokenStandard;
//   isVerified?: boolean;
//   points: number | null;
//   floorOrder?: { price: BigNumberish };
//   floor: CollectionFloor;
//   totalSupply: number;
//   volume: CollectionVolume;
// };

// // Used for NFT Grid Card components
// export interface NFTCard extends Omit<NFT, "attributes" | "collection" | "animation" | "countOwners"> {
//   owners: TokenOwner[];
//   collection: NFTCardCollection;
// }

// /**
//  * CollectionTokenTransaction
//  */

// export enum EventType {
//   MINT = "MINT",
//   TRANSFER = "TRANSFER",
//   LIST = "LIST",
//   SALE = "SALE",
//   OFFER = "OFFER",
//   CANCEL_LIST = "CANCEL_LIST",
//   CANCEL_OFFER = "CANCEL_OFFER",
// }

// export interface EventOrder {
//   price: BigNumberish;
//   currency: string;
//   isOrderAsk: boolean;
//   strategy: string;
//   endTime?: string;
//   status?: OrderStatus;
//   params?: any[];
// }

// export interface Event {
//   id: string;
//   from: UserProfileDisplay;
//   to?: UserProfileDisplay;
//   type: EventType;
//   createdAt: string;
//   hash?: string;
//   order?: EventOrder;
//   token?: {
//     tokenId: number;
//     image: ImageData;
//     name: string;
//   };
//   collection: {
//     address: string;
//     name: string;
//     description: string;
//     totalSupply: number;
//     logo?: ImageData;
//     floorOrder?: {
//       price: BigNumberish;
//     };
//   };
// }

// export interface Attribute {
//   traitType: string;
//   value: string;
//   displayType?: string | null;
//   count?: number;
//   floorOrder?: {
//     price: BigNumberish;
//   };
// }

// export interface Pagination {
//   first?: number;
//   cursor?: string;
// }

// export interface TokenFilter {
//   collection?: string;
//   owner?: string;
//   order?: OrderFilter;
//   withAskOnly?: boolean;
//   withoutAskOnly?: boolean;
//   withStandardBidOnly?: boolean;
//   withCollectionBidOnly?: boolean;
//   attributes?: AttributeFilter[];
//   flag?: TokenFlag[];
// }

// export interface TokenOwnerFilter {
//   addresses?: string[];
// }

// export interface PriceFilter {
//   min?: BigNumberish | null;
//   max?: BigNumberish | null;
// }

// export interface AttributeFilter {
//   traitType: string;
//   values: string[];
// }

// export interface OrderFilter {
//   isOrderAsk?: boolean;
//   collection?: string;
//   tokenId?: string;
//   signer?: string;
//   strategy?: string;
//   price?: PriceFilter;
//   currency?: string;
//   startTime?: BigNumberish;
//   endTime?: BigNumberish;
//   status?: OrderStatus[];
// }

// export enum OrderStatus {
//   CANCELLED = "CANCELLED",
//   EXECUTED = "EXECUTED",
//   EXPIRED = "EXPIRED",
//   VALID = "VALID",
//   INVALID_OWNER = "INVALID_OWNER", // stale ask
//   ERC_APPROVAL = "ERC_APPROVAL", // stale ask
//   ERC20_APPROVAL = "ERC20_APPROVAL", // stale bid
//   ERC20_BALANCE = "ERC20_BALANCE", // stale bid
// }

// export interface EventFilter {
//   collection?: string;
//   tokenId?: string;
//   from?: string;
//   type?: EventType[];
// }

// export enum TokenFlag {
//   NO_IMAGE = "NO_IMAGE",
//   NONE = "NONE",
//   ERROR = "ERROR",
//   TRIAGE = "TRIAGE",
// }

// export enum OrderSort {
//   EXPIRING_SOON = "EXPIRING_SOON",
//   NEWEST = "NEWEST",
//   PRICE_ASC = "PRICE_ASC",
//   PRICE_DESC = "PRICE_DESC",
// }

// // Not intended to show the user
// export enum CollectionInternalSort {
//   LISTING_REWARD = "LISTING_REWARD",
// }

// export enum CollectionsSort {
//   CHANGE_24H_ASC = "CHANGE_24H_ASC",
//   CHANGE_24H_DESC = "CHANGE_24H_DESC",
//   HIGHEST_24H = "HIGHEST_24H",
//   HIGHEST_TOTAL = "HIGHEST_TOTAL",
// }

// // Note - this is not all possible relative collection sorts, just those currently used by the app
// export enum RelativeCollectionsSort {
//   ALPHABETICAL_ASC = "ALPHABETICAL_ASC",
//   HIGHEST_24H = "HIGHEST_24H",
//   OWNED_ASC = "OWNED_ASC",
//   OWNED_DESC = "OWNED_DESC",
// }

// export enum TokensSort {
//   LAST_RECEIVED = "LAST_RECEIVED",
//   PRICE_ASC = "PRICE_ASC",
//   PRICE_DESC = "PRICE_DESC",
// }

// export interface Royalty {
//   id: string;
//   currency: string;
//   amount: BigNumberish;
//   to: string;
//   hash: string;
//   createdAt: string;
//   token: {
//     id: string;
//     tokenId: string;
//     image: ImageData;
//     name: string;
//   };
// }

// export interface ImageData {
//   src: string;
//   contentType?: string;
// }

// export interface AnimationData {
//   src: string;
//   contentType?: string;
//   original?: string;
// }

// export interface CurrentListingReward {
//   count: number;
//   totalPoints: number;
// }
