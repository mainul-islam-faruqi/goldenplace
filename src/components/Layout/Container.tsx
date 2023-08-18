import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const baseSpacing = 4;

export const Container = (props: BoxProps) => (
  <Box
    maxWidth="1440px"
    px={{ base: baseSpacing, md: 8 }}
    mx="auto"
    {...props}
  />
);

/**
 * A wrapper to allow the contents to go edge to edge
 * Takes the padding on mobile and converts it to a negative number 4 = -4, 6 = -6
 */
export const EdgeToEdgeContainer = (props: BoxProps) => (
  <Box mx={{ base: baseSpacing * -1, md: 0 }} {...props} />
);
