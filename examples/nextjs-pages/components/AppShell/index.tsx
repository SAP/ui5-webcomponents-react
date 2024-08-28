import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import { Button, ShellBar } from '@ui5/webcomponents-react/ssr';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import classes from './AppShell.module.css';

export function AppShell(props: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <div className={classes.appShell}>
        <ShellBar
          primaryTitle={'UI5 Web Components for React Examples'}
          secondaryTitle={'NextJS - Pages Router'}
          startButton={
            router.asPath !== '/' && (
              <Button
                icon={navBackIcon}
                onClick={() => {
                  router.back();
                }}
              />
            )
          }
        />
        <div className={classes.scrollContainer}>{props.children}</div>
      </div>
    </>
  );
}
