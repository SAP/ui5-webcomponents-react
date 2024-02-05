import { Description, DocsContext, Subtitle, Title } from '@storybook/addon-docs';
import { FlexBox, FlexBoxAlignItems, Label, Link, Text, ThemeProvider } from '@ui5/webcomponents-react';
import React, { useContext } from 'react';
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

export const InfoTable = ({ since }) => {
  return (
    <table className="infoTable">
      <tbody>
        <tr>
          <th>
            <Label>Usage</Label>
          </th>
          <td>
            <Import />
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
      </tbody>
    </table>
  );
};

export const DocsHeader = ({ since }) => {
  return (
    <ThemeProvider>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Title />
        <span style={{ flexGrow: 1 }} />
        <Links />
      </FlexBox>
      <Subtitle />
      <InfoTable since={since} />
      <TableOfContent />
      <Description />
    </ThemeProvider>
  );
};
