import { useMemo } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import { Image, ImageProps } from '@chakra-ui/image';

export interface BlockieProps extends ImageProps {
  address: string;
  size?: number;
}

export const Blockie = ({ address, size = 128, ...props }: BlockieProps) => {
  const imgSrc = useMemo(() => {
    return makeBlockie(address);
  }, [address]);

  return (
    <Image
      src={imgSrc}
      alt="blockie"
      height={`${size}px`}
      width={`${size}px`}
      {...props}
    />
  );
};
