import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents-react/styles.css';
import '../styles/globals.css';
import { ThemeProvider } from '@ui5/webcomponents-react/ssr';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { AppShell } from '../components/AppShell';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style = document.getElementById('server-side-styles');
    if (style) {
      style.parentNode?.removeChild(style);
    }
  }, []);

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
