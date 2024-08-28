import TsLogo from '@sb/images/logo-ts.png';
import LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign.js';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import {
  Avatar,
  Card,
  CardHeader,
  Label,
  Link,
  MessageStrip,
  Popover,
  Text,
  ThemeProvider
} from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import { ReactNode, useRef, useState } from 'react';
import { addCustomCSSWithScoping } from '../../packages/main/src/internal/addCustomCSSWithScoping';
import classes from './ProjectTemplate.module.css';

interface ProjectTemplatePropTypes {
  title: string;
  subtitle?: string;
  logo: string;
  logoAttribution: string;
  isTypeScript?: boolean;
  href: string;
  children: ReactNode;
  deprecationNotice?: string;
  isTemplate?: boolean;
  stackBlitzHref?: string;
  showUnsupportedMessage?: boolean;
  showNote?: boolean;
}

addCustomCSSWithScoping(
  'ui5-card-header',
  ':host([data-project-template]) .ui5-card-header .ui5-card-header-avatar { pointer-events: auto; }'
);

export function ProjectTemplate(props: ProjectTemplatePropTypes) {
  const {
    title,
    subtitle,
    logo,
    logoAttribution,
    isTypeScript,
    children,
    href,
    deprecationNotice,
    isTemplate,
    stackBlitzHref,
    showUnsupportedMessage,
    showNote
  } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);
  const linkRef = useRef(null);

  return (
    <ThemeProvider>
      <div className={clsx(classes.cardContainer, isTemplate && classes.template)}>
        {showUnsupportedMessage && (
          <>
            <MessageStrip hideCloseButton design={MessageStripDesign.Critical} className={classes.unssupportedMessage}>
              Currently not supported by V2.{' '}
              <Link
                ref={linkRef}
                accessibleRole="Button"
                onClick={() => {
                  setPopoverOpen(true);
                }}
              >
                Show more.
              </Link>
            </MessageStrip>
            <Popover
              className={classes.popover}
              opener={linkRef.current}
              open={popoverOpen}
              onClose={() => {
                setPopoverOpen(false);
              }}
            >
              <Text>
                Currently, the <code>BarcodeScannerDialog</code> web component isn't compatible with SSR environments.
                For the Next.js Pages Router and Remix, this bug crashes the entire build process, even if the component
                isn't imported.
                <br />
                This is <b>not</b> the case for the Next.js App Router; there, the build only crashes if the component
                is used.
                <br />
                <br />
                You can find the corresponding GitHub issue{' '}
                <Link href="https://github.com/SAP/ui5-webcomponents/issues/9771" target="_blank">
                  here
                </Link>
                .
              </Text>
            </Popover>
          </>
        )}
        <Card
          className={clsx(showUnsupportedMessage && classes.overlay)}
          header={
            <CardHeader
              data-project-template=""
              titleText={title}
              subtitleText={subtitle}
              action={
                isTypeScript && (
                  <img
                    src={TsLogo}
                    height={24}
                    width={24}
                    alt={'TypeScript Logo'}
                    title={'TypeScript Logo. Original Source: https://www.typescriptlang.org/branding/'}
                  />
                )
              }
              avatar={
                <Avatar title={logoAttribution}>
                  <img src={logo} alt={`Logo of ${title}`} />
                </Avatar>
              }
            />
          }
        >
          <div className={classes.cardContent}>
            {deprecationNotice && (
              <MessageStrip
                hideCloseButton
                design={MessageStripDesign.Critical}
                children={deprecationNotice}
                className={classes.deprecationNotice}
              />
            )}
            <Link design={LinkDesign.Emphasized} href={href}>
              View Example
            </Link>
            {stackBlitzHref && (
              <>
                |
                <Link design={LinkDesign.Emphasized} href={stackBlitzHref}>
                  View in StackBlitz
                </Link>
              </>
            )}
            {showNote && (
              <>
                <br />
                <span>
                  <Label showColon>Note</Label>
                  <Text>
                    The <code>BarcodeScannerDialog</code> component is currently{' '}
                    <Link href="https://github.com/SAP/ui5-webcomponents/issues/9771" target="_blank">
                      not supported
                    </Link>
                    .
                  </Text>
                </span>
              </>
            )}
            {!isTemplate && (
              <>
                <br />
                <br />
                <Text>What&apos;s included:</Text>
                {children}
              </>
            )}
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}
