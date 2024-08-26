import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents-react/styles.css';
import '../styles/globals.css';
import { ThemeProvider } from '@ui5/webcomponents-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell } from '../components/AppShell';

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
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ThemeProvider>
    </>
  );
}
