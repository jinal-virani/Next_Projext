import { SessionProvider } from 'next-auth/react';
import ContextProvider from '../store/context.prover';

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <>
    <ContextProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ContextProvider>
  </>
}

export default MyApp
