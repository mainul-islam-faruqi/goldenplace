import {
  forwardRef,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import { fontWeights } from '../theme/typography';
import { base } from '../theme/colors';

export interface TextProps extends ChakraTextProps {
  bold?: boolean;
}

export const Text = forwardRef<TextProps, 'div'>(
  (
    {
      bold,
      fontWeight = fontWeights.normal,
      textStyle = 'body',
      color = 'text-01',
      ...props
    },
    ref
  ) => (
    <ChakraText
      color={color}
      textStyle={textStyle}
      fontWeight={bold ? fontWeights.bold : fontWeight}
      ref={ref}
      {...props}
    />
  )
);

export const TooltipText: React.FC<TextProps> = ({ children, ...props }) => (
  <Text variant="tooltip" textStyle="detail" color="text-inverse" {...props}>
    {children}
  </Text>
);

export const ModalHeading: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text bold textStyle={{ base: 'heading-05', md: 'heading-04' }} {...props}>
      {children}
    </Text>
  );
};

export const TextInput: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text bold textStyle={{ base: 'heading-05', md: 'heading-04' }} {...props}>
      {children}
    </Text>
  );
};

export interface RainbowTextProps extends TextProps {
  animate?: boolean;
  bg?: string;
}

export const RainbowText: React.FC<RainbowTextProps> = ({
  children,
  animate,
  bg = base.conicGradient,
  ...props
}) => {
  const baseSx = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const sx = animate
    ? {
        backgroundSize: '200% 100%',
        animation: 'hue 6s infinite alternate',
        '@keyframes hue': {
          '0%': {
            WebkitFilter: 'hue-rotate(0deg)',
          },
          '100%': {
            WebkitFilter: 'hue-rotate(-1turn)',
          },
        },
        ...baseSx,
      }
    : baseSx;

  return (
    <Text bg={bg} sx={sx} {...props} fontWeight="500">
      {children}
    </Text>
  );
};

Text.defaultProps = {
  as: 'div',
};
