import './clientAssetsImport.ts';
import '@ui5/webcomponents-react/styles.css';
import './globals.css';
import { ThemeProvider } from '@ui5/webcomponents-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: 'sap_horizon',
            }),
          }}
        />
      </head>
      <body>
        <div className="appShell">
          <ThemeProvider staticCssInjected>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
