import { Description, DocsContext, Subtitle, Title } from '@storybook/addon-docs';
import copyIcon from '@ui5/webcomponents-icons/dist/copy';
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxAlignItems,
  Label,
  Link,
  Text,
  ThemeProvider
} from '@ui5/webcomponents-react';
import { clsx } from 'clsx';
import React, { useContext } from 'react';
import { useGetSubComponentsOfModule } from '../utils';
import classes from './DocsHeader.module.css';
import { GitHubLogo } from './GitHub-Mark';
import { Import } from './Import';
import { TableOfContent } from './TableOfContent';

const Links = () => {
  const docsContext = useContext(DocsContext);
  const isChart = docsContext.componentStories().at(0).id.startsWith('charts-');

  // const filePath = docsContext.parameters.fileName.replace(/^\.\//, '');
  // const folderPath = filePath.substr(0, filePath.lastIndexOf('/'));

  // const githubUrl = `https://github.com/SAP/ui5-webcomponents-react/tree/main/${folderPath}`;
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
}

export const InfoTable = ({ since, subComponents, mergeSubComponents }: InfoTableProps) => {
  const context = useContext(DocsContext);
  const groups = context.componentStories().at(0).kind.split('/');
  const moduleName = groups[groups.length - 1].replace('(experimental)', '').trim();

  const wcSubComponents = useGetSubComponentsOfModule(moduleName.replace('V2', ''));
  const subComps = mergeSubComponents
    ? [...(subComponents ?? []), ...(wcSubComponents ?? [])]
    : subComponents ?? wcSubComponents;

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
            <Import />
            {supportsClipboardApi && (
              <Button
                design={ButtonDesign.Transparent}
                className={clsx('ui5-content-density-compact', classes.copyBtn)}
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
        {!!subComps.length && (
          <tr className={classes.hoverTr}>
            <th>
              <Label>Subcomponents</Label>
            </th>
            <td data-import-cell={supportsClipboardApi}>
              <Import moduleNames={subComps} />
              {supportsClipboardApi && (
                <Button
                  design={ButtonDesign.Transparent}
                  className={clsx('ui5-content-density-compact', classes.copyBtn)}
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

export const DocsHeader = ({ since, subComponents, mergeSubComponents }: InfoTableProps) => {
  return (
    <ThemeProvider>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Title />
        <span style={{ flexGrow: 1 }} />
        <Links />
      </FlexBox>
      <Subtitle />
      <InfoTable since={since} subComponents={subComponents} mergeSubComponents />
      <TableOfContent />
      <Description />
    </ThemeProvider>
  );
};
