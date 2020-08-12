import { Badge, FlexBox, FlexBoxAlignItems, Link, Text, Title, TitleLevel } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { useContext } from 'react';
import { GitHubLogo } from './GitHub-Mark';
import { DocsContext } from '@storybook/addon-docs/blocks';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import { version as chartsVersion } from '../../packages/charts/package.json';
import { version } from '../../packages/main/package.json';

addCustomCSS('ui5-badge', ':host([data-lowercase]) .ui5-badge-text { text-transform: none; }');

export const Header = (props) => {
  const docsContext = useContext(DocsContext);

  const isChart = docsContext.id.startsWith('charts-');

  return (
    <FlexBox
      style={{
        borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '0.5rem 1rem',
        zIndex: 1
      }}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Title level={TitleLevel.H4}>UI5 Web Components for React</Title>
      <span style={{ flexGrow: 1 }} />
      <a target="_blank" href="https://github.com/SAP/ui5-webcomponents-react" title="Open GitHub Repository">
        <GitHubLogo />
      </a>
      &nbsp;
      <Badge colorScheme="7" data-lowercase>
        @ui5/webcomponents-react{isChart ? '-charts' : ''} - v{isChart ? chartsVersion : version}
      </Badge>
    </FlexBox>
  );
};
