import '@ui5/webcomponents-react/styles.css';
import './globals.css';
import { AppShell } from '@/app/components/AppShell';
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
              theme: 'sap_horizon'
            })
          }}
        />
      </head>
      <body>
        <div className="appShell">
          <ThemeProvider staticCssInjected>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
