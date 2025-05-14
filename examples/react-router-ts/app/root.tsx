import wcrStyles from '@ui5/webcomponents-react/styles.css?url';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import { AppShell } from './components/AppShell';
import appStyles from './globals.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: appStyles },
  { rel: 'stylesheet', href: wcrStyles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head suppressHydrationWarning={true}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
