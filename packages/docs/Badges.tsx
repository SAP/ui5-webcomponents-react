import { FlexBox } from '@fiori-for-react/fiori3';
import React from 'react';

export const Badges = () => (
  <FlexBox>
    <a href="https://www.npmjs.com/package/fiori-for-react" target="_blank" style={{ marginRight: '0.5rem' }}>
      <img alt="npm version" src="https://img.shields.io/npm/v/fiori-for-react/fiori3.svg" />
    </a>
    <a href="https://ci.appveyor.com/projects" target="_blank" style={{ marginRight: '0.5rem' }}>
      <img alt="Build Status" src="https://img.shields.io/appveyor/ci/SAP/fiori-for-react/master.svg" />
    </a>
    <a href="https://coveralls.io/github/SAP/fiori-for-react" target="_blank" style={{ marginRight: '0.5rem' }}>
      <img alt="Code Coverage" src="https://img.shields.io/coveralls/github/SAP/fiori-for-react/master.svg" />
    </a>
    <a href="https://sap-ea.slack.com/messages/CEN48B210" target="_blank">
      <img alt="Slack Badge" src="https://badgen.net/badge/slack/fiori-for-react/orange?icon=slack" />
    </a>
  </FlexBox>
);
