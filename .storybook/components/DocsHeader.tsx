import { Description, DocsContext, Subtitle, Title } from '@storybook/addon-docs';
import { Badge, FlexBox, FlexBoxAlignItems, Link } from '@ui5/webcomponents-react';
import React, { useContext } from 'react';
import { GitHubLogo } from '../../.storybook/components/GitHub-Mark';
import { Import } from '../../.storybook/components/Import';
import { TableOfContent } from '../../.storybook/components/TableOfContent';

const Links = () => {
  const docsContext = useContext(DocsContext);
  const isChart = docsContext.id.startsWith('charts-');

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

export const DocsHeader = ({ since }) => {
  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Title />
        {since && (
          <>
            &nbsp; &nbsp;
            <Badge colorScheme="7">Since {since}</Badge>
          </>
        )}
        <span style={{ flexGrow: 1 }} />
        <Links />
      </FlexBox>
      <Subtitle />
      <Import />
      <Description />
      <TableOfContent />
    </>
  );
};
