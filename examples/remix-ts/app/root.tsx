import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { createHead } from 'remix-island';

export const Head = createHead(() => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
    </>
  );
});

export default function App() {
  // this will be rendered inside a node
  return (
    <>
      <Head />
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
