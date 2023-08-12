import { format } from "date-fns";
import { ethers, BigNumberish } from "ethers";
// import { MakerOrderWithSignatureAndHash } from "types/orders";
// import { OrderFragment } from "./graphql/fragments";

/**
 * Format a value from decimals to a user friendly value (ethers)
 * @param value
 * @param decimals
 * @returns string
 */
export const fromDecimals = (value: BigNumberish, decimals = 18): string => ethers.formatUnits(value, decimals);

/**
 * Reverse fromDecimals
 * @param value
 * @param decimals
 * @returns BigNumber
 */
export const toDecimals = (value: string, decimals = 18): BigInt => ethers.parseUnits(value, decimals);

interface FormatToSignificantOptions {
  decimals?: number;
  commify?: boolean;
}

/**
 * Simulates "toSignificant" with ethers BigNumber
 * i.e. 4 decimals would format 824137364704647103 (0.824137364704647103) to 0.8241
 * @param bigNumberish
 * @param displayDecimals
 * @param options
 * @param options.decimals number of decimals
 * @param options.commify whether or not to commify the output
 * @returns string
 */
export const formatToSignificant = (
  bigNumberish: ethers.BigNumberish,
  displayDecimals = 18,
  options?: FormatToSignificantOptions
) => {
  const base = BigInt(10);
  const { decimals, commify } = { decimals: 18, commify: true, ...options };
  const bigNumber = BigInt(bigNumberish);
  const powResult = base ** (BigInt(decimals) - BigInt(displayDecimals));
  const remainder = bigNumber % powResult;

  const value = fromDecimals(bigNumber - remainder, decimals);
  const strippedValue = value.slice(-2) === ".0" ? value.substring(0, value.length - 2) : value;

  // return commify ? ethers.commify(strippedValue) : strippedValue;
  return strippedValue;
};

/**
 * Format an address for display
 * @param address
 * @param startLength length before "..."
 * @param endLength length after "..."
 * @returns string
 */
export const formatAddress = (address: string, startLength = 2, endLength = 4): string =>
  `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`;

/**
 * Format Number to localeString
 * @param value
 * @param minimumFractionDigits
 * @param maximumFractionDigits
 * @returns string
 */
export const formatNumberToLocale = (value: number, minimumFractionDigits = 2, maximumFractionDigits = 2): string =>
  value.toLocaleString(undefined, { minimumFractionDigits, maximumFractionDigits });

/**
 * Format USD
 * @param value
 * @returns string
 */
export const formatUsd = (value: number, minimumFractionDigits = 2, maximumFractionDigits = 2) =>
  `$${formatNumberToLocale(value, minimumFractionDigits, maximumFractionDigits)}`;

/**
 * Format timestamp to date string
 * @param timestampInMs
 * @param formatToken
 * @returns string
 */
export const formatTimestampAsDateString = (timestampInMs: number, formatToken = "HH:mm, LLL. d, yyyy") =>
  format(new Date(timestampInMs), formatToken);

/**
 * Format fees from base 10000 to a %
 * @param fees
 * @returns string
 */
// export const formatFees = (fees: BigNumber): string => `${formatToSignificant(fees, 2, { decimals: 2 })}%`;

/**
 * Map a graph Order response to the MakerOrderWithSignatureAndHash type
 * @param gqlOrder OrderFragment
 * @returns MakerOrderWithSignatureAndHash with tokenId & collection correctly defined
 */
// export const formatGqlOrder = (gqlOrder: OrderFragment): MakerOrderWithSignatureAndHash => {
//   const { token, ...orderWithoutToken } = gqlOrder;
//   const collection = gqlOrder.collection.address;
//   const tokenId = token?.tokenId || "0"; // collection orders do not return token objects
//   return { ...orderWithoutToken, tokenId, collection };
// };

/**
 * Format price in wei after subtracting base 10000 fee %
 * @param protocolFees
 * @param creatorFees
 * @param priceInWei
 * @returns BigNumber
 */
// export const formatPriceAfterFees = (
//   protocolFees: BigInt,
//   creatorFees: BigInt,
//   priceInWei: BigInt
// ): BigInt => {
//   const totalFees = creatorFees.add(protocolFees);
//   const feeAmount = priceInWei.div(100).mul(totalFees).div(100);
//   const priceAfterFees = priceInWei.sub(feeAmount);
//   return priceAfterFees;
// };

export const formatCompactNumber = (number: number, locale = "en", maximumSignificantDigits = 2): string => {
  const parsedLocale = locale === "zh_hans" ? "zh-CN" : locale; // Format locale to BCP 47 language tag

  return new Intl.NumberFormat(parsedLocale, {
    notation: "compact",
    compactDisplay: "short",
    maximumSignificantDigits,
  }).format(number);
};

/**
 * Format an address to username (gross)
 */
export const formatAddressUsername = (address: string, len = 6) => address.substring(2, len + 2);

/**
 * Return BigNumberish integer as a 'compact' string
 */
// export const formatAsCompactNumber = (number: BigNumberish, locale?: string) => {
//   try {
//     const numberAsBn = BigInt(number);

//     if (numberAsBn.gte(0)) {
//       if (numberAsBn.lt(1000)) {
//         return numberAsBn.toString();
//       }
//       if (numberAsBn.lt(100000000)) {
//         // 100m. Arbitrary number within safe limit
//         return formatCompactNumber(numberAsBn.toNumber(), locale);
//       }
//       // Fallback if number is greater than 100m
//       return ">100m";
//     }
//     // Fallback if number is not gt 0
//     return "-";
//   } catch {
//     return "-";
//   }
// };
