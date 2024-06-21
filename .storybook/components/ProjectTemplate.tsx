import TsLogo from '@sb/images/logo-ts.png';
import LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign.js';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import { Avatar, Card, CardHeader, Link, MessageStrip, Text, ThemeProvider } from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
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
    stackBlitzHref
  } = props;

  return (
    <ThemeProvider>
      <Card
        className={clsx(classes.card, isTemplate && classes.template)}
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
    </ThemeProvider>
  );
}
