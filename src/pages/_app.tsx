import type { ReactElement, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const colors = {
  backgroundColor: {
    50: '#F8F4EE',
    100: '#DBAF5A',
  },
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  borderColor: {
    100: '#E7E0CF',
    400: '#F8CA0A',
    500: '#E7A634',
  },
  textColor: {
    500: '#E7A634',
  },
  
};

export const theme = extendTheme({ colors });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const AnyComponent = Component as any;

  return getLayout(
    <ChakraProvider theme={theme}>
      <AnyComponent {...pageProps} />{' '}
    </ChakraProvider>
  );
}
