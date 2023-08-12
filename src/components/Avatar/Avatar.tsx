// import React, { useState } from "react";
// import { Box, AspectRatioProps, BoxProps, AspectRatio, Skeleton } from "@chakra-ui/react";
// import { Image } from "components/Image";
// import { Blockie } from "./Blockie";

import React, { useState } from 'react';
import {
  Box,
  AspectRatioProps,
  BoxProps,
  AspectRatio,
  Skeleton,
} from '@chakra-ui/react';
import { Image } from '../Image';
import { Blockie } from './Blockie';

export interface AvatarProps extends AspectRatioProps {
  address: string;
  src?: string;
  size?: number;
  boxProps?: BoxProps;
  priority?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  address,
  size = 16,
  boxProps,
  priority = false,
  borderRadius = '50%',
  ...props
}) => {
  const { boxSize } = props;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <AspectRatio width={boxSize || `${size}px`} ratio={1} {...props}>
      {/* Firefox workaround to make the alt text that is rendered while an image is loading, transparent */}
      <Box
        borderRadius={borderRadius}
        {...boxProps}
        sx={{ color: 'transparent' }}
      >
        {src ? (
          <>
            <Skeleton isLoaded={isImageLoaded} />
            <Image
              src={src}
              alt={address}
              objectFit="cover"
              width={size}
              height={size}
              onLoadingComplete={() => setIsImageLoaded(true)}
              priority={priority}
            />
          </>
        ) : (
          <Blockie address={address} size={size} borderRadius={borderRadius} />
        )}
      </Box>
    </AspectRatio>
  );
};
