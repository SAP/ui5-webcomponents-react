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
import { addCustomCSSWithScoping } from '@ui5/webcomponents-react-base/dist/utils/addCustomCSSWithScoping.js';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
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
  /**
   * Either use text or text components.
   */
  note?: ReactNode;
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
    note
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
                Show More.
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
                Currently, the <code>BarcodeScannerDialog</code> web component isn&apos;t compatible with SSR
                environments. For the Next.js Pages Router and Remix, this bug crashes the entire build process, even if
                the component isn&apos;t imported.
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
              <MessageStrip hideCloseButton design={MessageStripDesign.Critical} className={classes.deprecationNotice}>
                {deprecationNotice}
              </MessageStrip>
            )}
            <Link design={LinkDesign.Emphasized} href={href}>
              View{isTemplate ? ' Template' : ' Example'}
            </Link>
            {stackBlitzHref && (
              <>
                <span className={classes.verticalLine}>|</span>
                <Link design={LinkDesign.Emphasized} href={stackBlitzHref}>
                  View in StackBlitz
                </Link>
              </>
            )}
            {!!note && (
              <>
                <br />
                <span>
                  <Label showColon>Note</Label>
                  {note}
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
