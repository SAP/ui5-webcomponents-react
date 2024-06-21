import '@ui5/webcomponents-react/styles.css';
import '../styles/globals.css';
import '@ui5/webcomponents-react/dist/Assets.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: 'sap_horizon'
            })
          }}
        />
      </Head>
      <ThemeProvider staticCssInjected>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
