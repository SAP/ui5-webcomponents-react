<a name="top"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png" alt="UI5 Web Components for React Logo" />
</p>
<p align="center">
  <a href="https://github.com/SAP/ui5-webcomponents-react/actions?query=workflow:%22build%22" target="_blank">
    <img alt="Build Status" src="https://github.com/SAP/ui5-webcomponents-react/workflows/build/badge.svg">
  </a>
  <a href='https://coveralls.io/github/SAP/ui5-webcomponents-react'>
    <img src='https://coveralls.io/repos/github/SAP/ui5-webcomponents-react/badge.svg' alt='Coverage Status' />
  </a>
  <a href="https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/" target="_blank">
      <img alt="Slack Badge" src="https://badgen.net/badge/slack/Join OpenUI5 Slack workspace/blue?icon=slack">
    </a>
  <a href="https://openui5.slack.com/archives/CSQEJ2J04" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/webcomponents-react/orange?icon=slack">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://badgen.net/badge/code%20style/prettier?color=pink"> 
  </a>
  <a href="https://lerna.js.org" target="_blank">
  <img alt="lerna" src="https://badgen.net/badge/maintained%20with/lerna?color=purple">
  </a>
  <a href="https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react" target="_blank">
    <img alt="REUSE Status" src="https://api.reuse.software/badge/github.com/SAP/ui5-webcomponents-react"/>
  </a>
</p>

`ui5-webcomponents-react` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).

## Devtoberfest

> [!Note]  
> We're hosting a  for the SAP Devtoberfest.
> We are hosting a [session](https://groups.community.sap.com/t5/devtoberfest/build-your-own-react-application-with-ui5-web-components-for-react/ev-p/283244) on UI5 Web Components for React in SAP's Devtoberfest. If you are interested, feel free to attend, it's completely free!

![](https://youtu.be/zyOxgjoSnGw)

## Resources

You can find our documentation under the following links:

- [Stable Release Documentation](https://sap.github.io/ui5-webcomponents-react/)
- [Next Release Documentation](https://sap.github.io/ui5-webcomponents-react/main/)
- [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page)

## Package Overview

- [@ui5/webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/main) - Fiori 3 Components<br/>
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react)](https://bundlephobia.com/result?p=@ui5/webcomponents-react)

- [@ui5/webcomponents-react-charts](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/charts) - Fiori Charts<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-charts?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-charts)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-charts)

- [@ui5/webcomponents-react-base](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/base) - Utils<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-base?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-base)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-base)

<!-- *********************************************************************** -->

<a name="requirements"></a>

## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.14.0 or higher**)
- [Node.js](https://nodejs.org/) (**LTS version**)
- If you're using [TypeScript](https://www.typescriptlang.org/) we recommend version **4.7** or later.

<!-- *********************************************************************** -->

<a name="download"></a>

## Download and Installation

To consume `ui5-webcomponents-react`, you need to install the npm module and required peer dependencies:

```sh
npm install @ui5/webcomponents-react @ui5/webcomponents @ui5/webcomponents-fiori
```

<!-- *********************************************************************** -->

## Getting Started

### Tutorial

You are new to UI5 Web Components for React and don't know where to start?<br />
Then take a look at our [Tutorial Mission](https://developers.sap.com/mission.react-spa.html) at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.<br />
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.

### Create a new React app using our Templates

You can find a curated list of project templates on our [Project Templates page](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/project-templates--docs).

### Add `@ui5/webcomponents-react` to an existing app

First of all, you need to add the `@ui5/webcomponents-react` dependency to your project. Please also keep in mind installing the required peer dependencies:

```sh
npm install @ui5/webcomponents @ui5/webcomponents-react @ui5/webcomponents-fiori
```

In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the `ThemeProvider`.<br/>
You will find this component most likely in `src/index.js`:

```jsx
import { ThemeProvider } from '@ui5/webcomponents-react';
...
const root = createRoot(document.getElementById("root"));
root.render(
        <ThemeProvider>
          <App />
        </ThemeProvider>
);
```

Then you are ready to use `@ui5/webcomponents-react` and you can import the desired component(s) in your app:<br />
For example, to use the `Button` component you need to import it:

```jsx
import { Button } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
```

Then, you can use the Button in your app:

```jsx
<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
```

For Browser Support and the configuration of the UI5 Web Components, please take a look at the
[Browser Support](https://github.com/SAP/ui5-webcomponents#browser-support) and the
[Configure](https://github.com/SAP/ui5-webcomponents#browser-support) sections of the
[UI5 Web Components Readme](https://github.com/SAP/ui5-webcomponents#ui5-web-components).

### Browser Support

UI5 Web Components are supported by all major modern browsers, including their mobile versions.

<!-- *********************************************************************** -->

<a name="issues"></a>

## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/ui5-webcomponents-react/issues).

<!-- *********************************************************************** -->

<a name="support"></a>

## How to obtain support

We welcome all comments, suggestions, questions, and bug reports. Feel free to [open issues](https://github.com/SAP/ui5-webcomponents-react/issues/new/choose) or chat with us directly in the [`#webcomponents-react`](https://openui5.slack.com/archives/CSQEJ2J04) channel in the
[OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).
Please note that you have to join this Slack workspace via [this link](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) if you are not part of it already.

<!-- *********************************************************************** -->

<a name="contributing"></a>

## Contributing

Please check our [Contribution Guidelines](/CONTRIBUTING.md).
