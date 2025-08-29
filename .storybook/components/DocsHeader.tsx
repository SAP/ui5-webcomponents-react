import { Badge } from '@sb/components/Badge';
import type { Controls } from '@storybook/addon-docs/blocks';
import { Description, Subtitle, Title, useOf } from '@storybook/addon-docs/blocks';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import copyIcon from '@ui5/webcomponents-icons/dist/copy.js';
import {
  Button,
  FlexBox,
  FlexBoxAlignItems,
  Label,
  Link,
  MessageStrip,
  Text,
  ThemeProvider,
} from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';
import { useGetSubComponentsOfModule } from '../utils';
import classes from './DocsHeader.module.css';
import { GitHubLogo } from './GitHub-Mark';
import { Import } from './Import';
import { TableOfContent } from './TableOfContent';

const Links = ({ isChart }: { isChart?: boolean }) => {
  const githubUrl = `https://github.com/SAP/ui5-webcomponents-react`;

  const packageName = `@ui5/webcomponents-react${isChart ? '-charts' : ''}`;
  return (
    <>
      <Link href={`https://www.npmjs.com/package/${packageName}`}>
        <img alt="npm badge" src={`https://badgen.net/npm/v/${packageName}?icon=npm&label=&color=blue`} />
      </Link>
      &nbsp; &nbsp;
      <Link title={'View On GitHub'} href={githubUrl}>
        <GitHubLogo />
      </Link>
    </>
  );
};

interface InfoTableProps {
  since?: string;
  subComponents?: string[];
  mergeSubComponents?: boolean;
  isChart?: boolean;
  experimental?: boolean;
  of: ComponentProps<typeof Controls>['of'];
  deprecationText?: string;
}

export const InfoTable = ({
  of,
  since,
  subComponents,
  mergeSubComponents,
  deprecationText,
  isChart,
}: InfoTableProps) => {
  const context = useOf<'meta'>(of);
  const { csfFile, preparedMeta } = context;
  const { tags } = preparedMeta;
  const moduleName = csfFile.meta.component.displayName;
  const isDeprecated = tags.includes('deprecated');
  const isCustom = tags.includes('custom') || isChart;

  const wcSubComponents = useGetSubComponentsOfModule(moduleName.replace('V2', ''), tags);
  const subComps = mergeSubComponents
    ? [...(subComponents ?? []), ...(wcSubComponents ?? [])]
    : (subComponents ?? wcSubComponents);

  const supportsClipboardApi = typeof ClipboardItem !== 'undefined';

  const handleCopy = async (e) => {
    const importStatementCell = e.currentTarget.parentElement.querySelector('[data-import]');
    if (supportsClipboardApi && importStatementCell) {
      const html = new Blob([importStatementCell.outerHTML], { type: 'text/html' });
      const text = new Blob([importStatementCell.outerText], { type: 'text/plain' });
      const data = new ClipboardItem({ 'text/html': html, 'text/plain': text });
      await navigator.clipboard.write([data]);
    }
  };

  return (
    <table className={classes.infoTable}>
      <tbody>
        <tr className={classes.hoverTr}>
          <th>
            <Label>Usage</Label>
          </th>
          <td data-import-cell={supportsClipboardApi}>
            <Import moduleName={moduleName} componentId={preparedMeta.componentId} />
            {supportsClipboardApi && (
              <Button
                design={ButtonDesign.Transparent}
                className={clsx('ui5-content-density-compact', classes.copyBtn)}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleCopy}
                icon={copyIcon}
                tooltip="copy"
              />
            )}
          </td>
        </tr>
        {since && (
          <tr>
            <th>
              <Label>Available since</Label>
            </th>
            <td>
              <Text>{since}</Text>
            </td>
          </tr>
        )}
        {isDeprecated && (
          <tr>
            <th>
              <Label>Deprecated</Label>
            </th>
            <td>
              <Text>{deprecationText}</Text>
            </td>
          </tr>
        )}
        {isCustom && (
          <tr>
            <th>
              <Label>Custom Component</Label>
            </th>
            <td>
              <Text>
                {isChart
                  ? 'Charts are custom-built without defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.'
                  : 'This component either only partially follows design specifications or lacks them entirely. Please refer to the component description for details.'}
              </Text>
            </td>
          </tr>
        )}
        {!!subComps.length && (
          <tr className={classes.hoverTr}>
            <th>
              <Label>Subcomponents</Label>
            </th>
            <td data-import-cell={supportsClipboardApi}>
              {subComps.map((subComp) => (
                <>
                  <Import key={subComp} moduleName={subComp} componentId={preparedMeta.componentId} />
                  <br />
                </>
              ))}
              {supportsClipboardApi && (
                <Button
                  design={ButtonDesign.Transparent}
                  className={clsx('ui5-content-density-compact', classes.copyBtn)}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={handleCopy}
                  icon={copyIcon}
                  tooltip="copy"
                />
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export const DocsHeader = ({
  of,
  since,
  subComponents,
  mergeSubComponents,
  isChart,
  experimental,
  deprecationText,
}: InfoTableProps) => {
  const context = useOf<'meta'>(of);
  const { preparedMeta } = context;
  const { tags } = preparedMeta;
  const isDeprecated = tags.includes('deprecated');
  const isCustom = tags.includes('custom') || isChart;
  return (
    <ThemeProvider>
      <FlexBox alignItems={FlexBoxAlignItems.Center} className={classes.titleRow}>
        <Title />
        {!isDeprecated && experimental && <Badge type="experimental" />}
        {!isDeprecated && isCustom && <Badge type="custom" />}
        {isDeprecated && <Badge type="deprecated" />}
        <span style={{ flexGrow: 1 }} />
        <Links isChart={isChart} />
      </FlexBox>
      <Subtitle />
      <InfoTable
        of={of}
        since={since}
        subComponents={subComponents}
        mergeSubComponents={mergeSubComponents}
        deprecationText={deprecationText}
        isChart={isChart}
      />
      <TableOfContent />
      <Description />
      {isChart && (
        <>
          <MessageStrip hideCloseButton design={MessageStripDesign.Critical}>
            Charts only offer limited accessibility support with only basic built-in features, so it’s essential to
            ensure your implementation meets the accessibility standards of your application.
          </MessageStrip>
          <br />
          <br />
        </>
      )}
    </ThemeProvider>
  );
};
