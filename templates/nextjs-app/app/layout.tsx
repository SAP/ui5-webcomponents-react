import './globals.css';
import { CssRegistry } from '@/app/CssRegistry';

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
          <CssRegistry>{children}</CssRegistry>
        </div>
      </body>
    </html>
  );
}
