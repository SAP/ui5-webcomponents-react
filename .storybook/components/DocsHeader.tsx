import { Description, DocsContext, Subtitle, Title } from '@storybook/addon-docs';
import React, { useContext } from 'react';
import { version as chartsVersion } from '../../packages/charts/package.json';
import { version } from '../../packages/main/package.json';
import { Import } from '../../.storybook/components/Import';
import { TableOfContent } from '../../.storybook/components/TableOfContent';
import { GitHubLogo } from '../../.storybook/components/GitHub-Mark';
import { FlexBox, FlexBoxAlignItems } from '@ui5/webcomponents-react';
import { Footer } from '../../.storybook/components/Footer';

const Links = () => {
  const docsContext = useContext(DocsContext);
  const isChart = docsContext.id.startsWith('charts-');

  const filePath = docsContext.parameters.fileName.replace(/^\.\//, '');
  const folderPath = filePath.substr(0, filePath.lastIndexOf('/'));

  const githubUrl = `https://github.com/SAP/ui5-webcomponents-react/tree/main/${folderPath}`;

  return (
    <>
      <br />
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <a title={'View On GitHub'} href={githubUrl}>
          <GitHubLogo />
        </a>
        &nbsp; &nbsp;
        <a>
          <img
            alt="npm badge"
            src={`https://badgen.net/badge/@ui5%2Fwebcomponents-react${isChart ? '-charts' : ''}/v${
              isChart ? chartsVersion : version
            }/blue?icon=npm`}
          />
        </a>
      </FlexBox>
      <br />
    </>
  );
};

export const DocsHeader = () => {
  return (
    <>
      <Title />
      <Subtitle />
      <Import />
      <Description />
      <Links />
      <TableOfContent />
    </>
  );
};
