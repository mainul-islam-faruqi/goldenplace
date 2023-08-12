export type FontSizesType =
  | '1xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
export type FontWeightsType = 'normal' | 'bold';
export type LineHeightsType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export const fontSizes: Record<FontSizesType, string> = {
  '1xs': '0.6875rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
  '5xl': '3rem',
  '6xl': '4rem',
};

export const fontWeights: Record<FontWeightsType, number> = {
  normal: 400,
  bold: 600,
};

export const lineHeights: Record<LineHeightsType, string> = {
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '3.5rem',
  '4xl': '4.5rem',
};

export const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fontSizes, fontWeights, lineHeights, fonts };
