// import { BigNumber } from "ethers";
import { Collection } from "@/types/graphql";

export const getOwnerData = (
  countOwners: Collection["countOwners"],
  totalSupply: Collection["totalSupply"],
  isErc1155: boolean
) => {
  const ownerCountNum = countOwners ? BigInt(countOwners) : BigInt(0);
  const totalSupplyNum = totalSupply ? BigInt(totalSupply) : BigInt(0);

  if (isErc1155 || !countOwners || !totalSupply) {
    return {
      ownerCountNum,
      totalSupplyNum,
      uniqueOwners: 0,
    };
  }

  return {
    ownerCountNum,
    totalSupplyNum,
    uniqueOwners: (ownerCountNum / totalSupplyNum) * BigInt(100),
  };
};
