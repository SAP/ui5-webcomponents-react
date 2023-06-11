import { AppShell } from '@/app/components/AppShell';
import { CssRegistry } from '@/app/CssRegistry';
import { ThemeProvider } from '@ui5/webcomponents-react';
import './globals.css';

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
          <CssRegistry>
            <ThemeProvider>
              <AppShell />
              <div className="appScrollContainer">{children}</div>
            </ThemeProvider>
          </CssRegistry>
        </div>
      </body>
    </html>
  );
}
