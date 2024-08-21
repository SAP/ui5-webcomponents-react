<a name="top"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png" alt="UI5 Web Components for React Logo" />
</p>
<p align="center">
  <a href='https://coveralls.io/github/SAP/ui5-webcomponents-react'>
    <img src='https://coveralls.io/repos/github/SAP/ui5-webcomponents-react/badge.svg' alt='Coverage Status' />
  </a>
  <a href="https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/" target="_blank">
      <img alt="Slack Badge" src="https://badgen.net/badge/slack/Join OpenUI5 Slack workspace/blue?icon=slack">
    </a>
  <a href="https://openui5.slack.com/archives/CSQEJ2J04" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/webcomponents-react/orange?icon=slack">
  </a>
  <a href="https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react" target="_blank">
    <img alt="REUSE Status" src="https://api.reuse.software/badge/github.com/SAP/ui5-webcomponents-react"/>
  </a>
</p>

`ui5-webcomponents-react` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).

## Resources

You can find our documentation under the following links:

- [Stable Release Documentation](https://sap.github.io/ui5-webcomponents-react/)
- [Nightly Release Documentation](https://sap.github.io/ui5-webcomponents-react/nightly/)
- [V1 Release Documentation](https://sap.github.io/ui5-webcomponents-react/v1/)

## Packages Overview

- [@ui5/webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/main) - Main Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react)

- [@ui5/webcomponents-react-charts](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/charts) - Charts Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-charts?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)

- [@ui5/webcomponents-react-base](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/base) - Base Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-base?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)

- [@ui5/webcomponents-react-compat](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/compat) - Legacy Components Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-compat?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-compat)

- [@ui5/webcomponents-react-cli](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cli) - Wrapper Generation & Code-Mod Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-cli?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-cli)

- [@ui5/webcomponents-cypress-commands](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cypress-commands) - Custom Cypress Commands & Queries Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-cypress-commands?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-cypress-commands)

<!-- *********************************************************************** -->

<a name="requirements"></a>

## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**18.0.0 or higher**)
- [Node.js](https://nodejs.org/) (**LTS version**)
- If you're using [TypeScript](https://www.typescriptlang.org/) we recommend version **4.7** or later.

<!-- *********************************************************************** -->

<a name="download"></a>

## Download and Installation

To consume `ui5-webcomponents-react`, you need to install the npm modules and required peer dependencies:

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

### SAP Devtoberfest 2023 session

[Here](https://www.youtube.com/watch?v=zyOxgjoSnGw) you can find the video of our session for the SAP Devtoberfest 2023 (aired Sep 29, 2023). There we briefly explain why UI5 Web Components for React exist at all, where the project fits into the SAP UI stack and what advantages our wrapper has over implementations that use pure ui5-webcomponents.
For the main part, we show how you could create a simple Movie Database UI, first by using our `Vite` template and then with our `Next.js` template.

### Examples & Templates

You can find a curated list of project templates and examples on our [Project Templates & Examples page](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/project-templates-examples--docs).

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

### Browser Support

UI5 Web Components for React supports the same [browsers and respective versions](https://github.com/SAP/ui5-webcomponents#browser-support) as UI5 Web Components.

<!-- *********************************************************************** -->

<a name="issues"></a>

## Known Issues

Please take a look at our [GitHub Issues](https://github.com/SAP/ui5-webcomponents-react/issues).

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
