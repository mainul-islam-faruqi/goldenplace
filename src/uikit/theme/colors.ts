/**
 * Chakra : Figma
 * 900 = 100
 * 800 = 90
 * 700 = 80
 * 600 = 70
 * 500 = 60
 * 400 = 50
 * 300 = 40
 * 200 = 30
 * 100 = 20
 * 50 = 10
 */
export const palette = {
  gray: {
    900: '#121619',
    850: '#1A1E22',
    800: '#21262A',
    750: '#2C3136',
    700: '#343A3F',
    600: '#4D5358',
    500: '#697077',
    400: '#878D96',
    300: '#A2A9B0',
    200: '#C7CCD1',
    150: '#CED4D9',
    100: '#DDE1E6',
    75: '#E3E8ED',
    50: '#F4F5FA',
  },
  green: {
    900: '#071D09',
    800: '#022D0E',
    700: '#044318',
    600: '#0C5C2C',
    500: '#018134',
    400: '#06A144',
    300: '#0BC355',
    200: '#2DE370',
    100: '#89F6B1',
    50: '#DEFBE6',
  },
  blue: {
    900: '#001141',
    800: '#001D6C',
    700: '#002D9C',
    600: '#0043CE',
    500: '#0F62FE',
    400: '#4589FF',
    300: '#78A9FF',
    200: '#A6C8FF',
    100: '#D0E2FF',
    50: '#EDF5FF',
  },
  purple: {
    900: '#1C0F30',
    800: '#31135E',
    700: '#491D8B',
    600: '#6929C4',
    500: '#8A3FFC',
    400: '#A56EFF',
    300: '#BE95FF',
    200: '#D4BBFF',
    100: '#E8DAFF',
    50: '#F6F2FF',
  },
  pink: {
    900: '#2A0A18',
    800: '#510224',
    700: '#740937',
    600: '#9F1853',
    500: '#D02670',
    400: '#EE5396',
    300: '#FF7EB6',
    200: '#FFAFD2',
    100: '#FFD6E8',
    50: '#FFF0F7',
  },
  red: {
    900: '#2D0709',
    800: '#520408',
    700: '#750E13',
    600: '#A2191F',
    500: '#DA1E28',
    400: '#FA4D56',
    300: '#FF8389',
    200: '#FFB3B8',
    100: '#FFD7D9',
    50: '#FFF1F1',
  },
  yellow: {
    900: '#221611',
    800: '#372118',
    700: '#452F18',
    600: '#5B421A',
    500: '#70541B',
    400: '#B28600',
    300: '#D2A106',
    200: '#F4D257',
    100: '#FCF2BE',
    50: '#FEF9E8',
  },
  black: {
    900: '#000000',
    800: '#000000',
    700: '#000000',
    600: '#000000',
    500: '#000000',
    400: '#000000',
    300: '#000000',
    200: '#000000',
    100: '#000000',
    50: '#000000',
  },
  white: {
    900: '#FFFFFF',
    800: '#FFFFFF',
    700: '#FFFFFF',
    600: '#FFFFFF',
    500: '#FFFFFF',
    400: '#FFFFFF',
    300: '#FFFFFF',
    200: '#FFFFFF',
    100: '#FFFFFF',
    50: '#FFFFFF',
  },
};

// https://www.figma.com/file/iZfQj9UOec97V5utcBBC9R/%F0%9F%8E%A8-Day-Night-Palette?node-id=0%3A1
export const semanticTokens = {
  colors: {
    // UI
    'ui-bg': {
      _dark: 'gray.900',
      _light: 'white',
    },
    'ui-01': {
      _dark: 'gray.800',
      _light: 'gray.50',
    },
    'ui-02': {
      _dark: 'gray.700',
      _light: 'gray.100',
    },
    'ui-inverse': {
      _dark: 'gray.50',
      _light: 'gray.900',
    },
    'border-01': {
      _dark: 'gray.700',
      _light: 'gray.100',
    },
    'border-02': {
      _dark: 'gray.600',
      _light: 'gray.200',
    },

    // Interactive
    'interactive-01': {
      _dark: 'green.200',
      _light: 'green.300',
    },
    'interactive-02': {
      _dark: 'gray.700',
      _light: 'gray.100',
    },
    'interactive-03': {
      _dark: 'gray.50',
      _light: 'gray.900',
    },
    'field-01': {
      _dark: 'gray.800',
      _light: 'gray.50',
    },
    'field-02': {
      _dark: 'gray.700',
      _light: 'gray.100',
    },

    // Text
    'text-01': {
      _dark: 'gray.50',
      _light: 'gray.900',
    },
    'text-02': {
      _dark: 'gray.200',
      _light: 'gray.700',
    },
    'text-03': {
      _dark: 'gray.400',
      _light: 'gray.500',
    },
    'text-placeholder': {
      _dark: 'gray.400',
      _light: 'gray.400',
    },
    'text-disabled': {
      _dark: 'gray.600',
      _light: 'gray.200',
    },
    'text-primarybutton': {
      _dark: 'black',
      _light: '#ffffff',
    },
    'text-inverse': {
      _dark: 'gray.900',
      _light: 'gray.50',
    },
    'text-inverse-02': {
      _dark: 'gray.700',
      _light: 'gray.200',
    },
    'text-inverse-03': {
      _dark: 'gray.500',
      _light: 'gray.400',
    },
    'text-error': {
      _dark: 'red.400',
      _light: 'red.500',
    },
    'text-warning': {
      _dark: 'yellow.200',
      _light: 'yellow.400',
    },
    'link-01': {
      _dark: 'green.200',
      _light: 'green.400',
    },
    'link-02': {
      _dark: 'white',
      _light: 'black',
    },
    'link-inverse': {
      _dark: 'green.400',
      _light: 'green.200',
    },

    // States
    focus: {
      _dark: 'white',
      _light: 'purple.400',
    },
    'focus-inverse': {
      _dark: 'purple.400',
      _light: 'white',
    },
    'hover-ui': {
      _dark: 'gray.850',
      _light: 'gray.75',
    },
    'onclick-ui': {
      _dark: 'gray.750',
      _light: 'gray.150',
    },
    'hover-ui-inverse': {
      _dark: 'gray.75',
      _light: 'gray.850',
    },
    'hover-interactive-01': {
      _dark: 'green.300',
      _light: 'green.400',
    },
    'onclick-interactive-01': {
      _dark: 'green.400',
      _light: 'green.500',
    },
    'hover-interactive-02': {
      _dark: 'gray.750',
      _light: 'gray.150',
    },
    'onclick-interactive-02': {
      _dark: 'gray.850',
      _light: 'gray.75',
    },
    'hover-error': {
      _dark: 'red.500',
      _light: 'red.500',
    },
    'onclick-error': {
      _dark: 'red.700',
      _light: 'red.700',
    },
    'hover-link-01': {
      _dark: 'green.400',
      _light: 'green.500',
    },

    // Support
    'support-error': {
      _dark: 'red.400',
      _light: 'red.500',
    },
    'support-error-inverse': {
      _dark: 'red.500',
      _light: 'red.400',
    },
    'support-error-bg': {
      _dark: 'gray.700',
      _light: 'red.50',
    },
    'support-error-bg-inverse': {
      _dark: 'red.50',
      _light: 'gray.700',
    },
    'support-success': {
      _dark: 'green.300',
      _light: 'green.400',
    },
    'support-success-inverse': {
      _dark: 'green.400',
      _light: 'green.300',
    },
    'support-success-bg': {
      _dark: 'gray.700',
      _light: 'green.50',
    },
    'support-success-bg-inverse': {
      _dark: 'green.50',
      _light: 'gray.700',
    },
    'support-warning': {
      _dark: 'yellow.200',
      _light: 'yellow.300',
    },
    'support-warning-inverse': {
      _dark: 'yellow.300',
      _light: 'yellow.200',
    },
    'support-warning-bg': {
      _dark: 'gray.700',
      _light: 'yellow.50',
    },
    'support-warning-bg-inverse': {
      _dark: 'yellow.50',
      _light: 'gray.700',
    },
    'support-info': {
      _dark: 'blue.400',
      _light: 'blue.600',
    },
    'support-info-inverse': {
      _dark: 'blue.600',
      _light: 'blue.400',
    },
    'support-info-bg': {
      _dark: 'gray.700',
      _light: 'blue.50',
    },
    'support-info-bg-inverse': {
      _dark: 'blue.50',
      _light: 'gray.700',
    },
  },
};

/**
 * Semantic color values
 */
export const base = {
  conicGradient:
    'conic-gradient(from 90deg at 50% 51.52%, #4589FF 0deg, #FF7EB6 141.23deg, #F1C21B 231.23deg, #49CD7A 287.48deg, #4589FF 360deg)',
  linearGradient:
    'linear-gradient(90deg, #EE5396 0%, #F1C21B 32.04%, #49CD7A 66%, #4589FF 100%)',
};

export const colors: Record<string, Record<string, string>> = {
  ...palette,
  base,
};
