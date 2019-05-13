import { FlexBox, FlexBoxDirection, Link, Page, Text, Title } from '@fiori-for-react/fiori3';
import { storiesOf } from '@storybook/react';
import 'highlight.js/styles/solarized-dark.css';
import Highlight from 'react-highlight.js';
import React from 'react';
import dedent from 'dedent';
import { Badges } from './Badges';

storiesOf(' Welcome | Fiori-for-React', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('What is Fiori-for-React', () => {
    return (
      <Page
        title="What is Fiori-for-React?"
        style={{ height: '300px' }}
        showBackButton={false}
        className="pageWithPadding"
      >
        <FlexBox direction={FlexBoxDirection.Column}>
          <Badges />

          <Title>Description</Title>
          <br />
          <Text>Fiori-for-React is a Fiori3 compliant React library built on top of the UI5 Web Components.</Text>

          <Text>
            With the help of Fiori-for-React, you can use UI5 Web Components as if they were native React components.
          </Text>
          <br />
          <Text>
            In addition to that, Fiori-for-React is providing complex components and layouts on top of the UI5 Web
            Components.
          </Text>
        </FlexBox>
      </Page>
    );
  })
  .add(
    'Getting Started',
    () => {
      return (
        <Page
          title="Fiori-for-React - Getting Started"
          style={{ height: '800px' }}
          showBackButton={false}
          className="pageWithPadding"
        >
          <FlexBox direction={FlexBoxDirection.Column}>
            <Badges />

            <Title>Requirements</Title>
            <br />
            <Text>In order to use fiori-for-react, you need to have Node.js and npm installed on your computer.</Text>
            <ul>
              <li>
                <Link href="https://nodejs.org/" target="_blank">
                  Node.js
                </Link>{' '}
                <Text>
                  <strong>version 8.5 or higher</strong>
                </Text>
              </li>
              <li>
                <Link href="https://www.npmjs.com/package/react" target="_blank">
                  React
                </Link>{' '}
                <Text>and</Text>{' '}
                <Link href="https://www.npmjs.com/package/react-dom" target="_blank">
                  React DOM
                </Link>
              </li>
            </ul>

            <Title>Installation and Configuration</Title>
            <br />
            <Text>To consume fiori-for-react, first you need to install the fiori-for-react npm module:</Text>
            <Highlight lanuage="bash">npm install @fiori-for-react/fiori3 --save</Highlight>

            <Text>Setup your React App</Text>
            <Text>
              You can create a new React-App by using e.g.{' '}
              <Link href="https://facebook.github.io/create-react-app/" target="_blank">
                create-react-app
              </Link>{' '}
              or add fiori-for-react to your existing app by wrapping the root component of the app into our
              ThemeProvider:
            </Text>
            <Highlight source="javascript">
              {dedent`...
              import { ContentDensity, ThemeProvider, Themes } from '@fiori-for-react/fiori3';
              ...
              render() {
                return (
                  <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact} withToastContainer>
                    <MyApp />
                  </ThemeProvider>
                );
              }`}
            </Highlight>

            <Text>Now you can use the fiori-for-react components in your app:</Text>
            <Text>If you want to use a Button component, import it from fiori-for-react:</Text>
            <Highlight language="javascript">
              {`import { Button } from '@fiori-for-react/fiori3'; // loads ui5-button wrapped in a fiori-for-react Component`}
            </Highlight>
            <Text>and use it in your component:</Text>
            <Highlight language="javascript">
              {`<Button onPress={() => alert('Hello World!')}>Hello world!</Button>`}
            </Highlight>

            <Title>Known Issues</Title>
            <br />
            <Link href="https://github.com/SAP/fiori-for-react/issues" target="_blank">
              GitHub Issue Board
            </Link>
          </FlexBox>
        </Page>
      );
    },
    {}
  );
