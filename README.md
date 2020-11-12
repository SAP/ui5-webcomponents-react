<a name="top"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/master/assets/Logo.png" alt="UI5 Web Components for React Logo" />
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
This project was formerly known as `fiori-for-react`.

## Resources

You can find our documentation under the following links:

- [Stable Release Documentation](https://sap.github.io/ui5-webcomponents-react/)
- [Next Release Documentation](https://sap.github.io/ui5-webcomponents-react/master/)
- [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page)

## Package Overview

- [@ui5/webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main) - Fiori 3 Components<br/>
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react)
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react/next?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react)](https://bundlephobia.com/result?p=@ui5/webcomponents-react)

- [@ui5/webcomponents-react-charts](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/charts) - Fiori Charts<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-charts?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-charts/next?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-charts)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-charts)

- [@ui5/webcomponents-react-base](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base) - Utils<br />
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-base?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)
  [![](https://badgen.net/npm/v/@ui5/webcomponents-react-base/next?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)
  [![npm bundle size (scoped)](https://badgen.net/bundlephobia/minzip/@ui5/webcomponents-react-base)](https://bundlephobia.com/result?p=@ui5/webcomponents-react-base)

- [@ui5/cra-template-webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/cra-template) - Template for `create-react-app` <br/>
  [![](https://badgen.net/npm/v/@ui5/cra-template-webcomponents-react?icon=npm)](https://www.npmjs.com/package/@ui5/cra-template-webcomponents-react)

- [@ui5/cra-template-webcomponents-react-seed](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/cra-template-seed) - Seed for `create-react-app` <br/>
  [![](https://badgen.net/npm/v/@ui5/cra-template-webcomponents-react-seed?icon=npm)](https://www.npmjs.com/package/@ui5/cra-template-webcomponents-react-seed)

<!-- *********************************************************************** -->

<a name="requirements"></a>

## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.8.0 or higher**)
- [Node.js](https://nodejs.org/) (**version 12 or higher** ⚠️)

<!-- *********************************************************************** -->

<a name="download"></a>

## Download and Installation

To consume `ui5-webcomponents-react`, first you need to install the npm module:

```sh
npm install @ui5/webcomponents-react --save
```

<!-- *********************************************************************** -->

## Getting Started

### Tutorial

You are new to UI5 Web Components for React and don't know where to start?<br />
Then take a look at our [Tutorial Mission](https://developers.sap.com/mission.react-spa.html) at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.<br />
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.

### Creating a new React app

You can create a new react app by using [create-react-app](https://facebook.github.io/create-react-app/) with our template.
This template is installing all required dependencies for you and is setting up the `App.js` file for you:

```sh
npx create-react-app my-app --template @ui5/webcomponents-react
# or if you want to use yarn
yarn create react-app my-app --template @ui5/webcomponents-react
```

### Creating a new React app based on our Seed

You can create a new react app by using [create-react-app](https://facebook.github.io/create-react-app/) based on our seed.
This template delivers several out of the box components, scripts and configurations.
For more info, check the [seed documentation](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/cra-template-seed).

```sh
npx create-react-app my-app --template @ui5/webcomponents-react-seed
npm run mock

# or if you want to use yarn
yarn create react-app my-app --template @ui5/webcomponents-react-seed
yarn mock
```

### Add `@ui5/webcomponents-react` to an existing app

First of all, you need to add the `@ui5/webcomponents-react` dependency to your project. Please also keep in mind installing the required peer dependencies:

```sh
npm install @ui5/webcomponents @ui5/webcomponents-react --save
# if you want to use the ShellBar or the ProductSwitcher component, you also need to install this package as well
npm install @ui5/webcomponents-fiori
```

In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the `ThemeProvider`.<br/>
You will find this component most likely in `src/App.js`:

```jsx
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
...
render() {
  return (
    <div>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </div>
  );
}
```

Then you are ready to use `@ui5/webcomponents-react` and you can import the desired component(s) in your app:<br />
For example, to use the `Button` component you need to import it:

```jsx
import { Button } from '@ui5/webcomponents-react/lib/Button'; // loads ui5-button wrapped in a ui5-webcomponents-react component
```

Then, you can use the Button in your app:

```jsx
<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
```

You can also import all components from `@ui5/webcomponents-react` directly.

For Browser Support and the configuration of the UI5 Web Components, please take a look at the
[Browser Support](https://github.com/SAP/ui5-webcomponents#browser-support) and the
[Configure](https://github.com/SAP/ui5-webcomponents#browser-support) sections of the
[UI5 Web Components Readme](https://github.com/SAP/ui5-webcomponents#ui5-web-components).

### Browser Support

#### Internet Explorer 11

`@ui5/webcomponents-react` is supporting all modern major browsers. There is no support for Internet Explorer 11 built in.<br />
If you want your application to run in IE11, you will have to polyfill some features by importing these polyfills as **first** imports in your `src/index.js`:

```js
import 'react-app-polyfill/ie11';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11WithWebComponentsPolyfill';
import '@ui5/webcomponents-react-base/polyfill/IE11';
```

You can install `react-app-polyfill` with the following command:

```bash
npm install react-app-polyfill --save
```

In case you are using [`browserslist`](https://github.com/browserslist/browserslist) (which is part of `create-react-app`), please also make sure you have added `IE 11` to your browserslist configuration (can be found in `package.json` if you are using CRA).

<!-- *********************************************************************** -->

<a name="issues"></a>

## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/ui5-webcomponents-react/issues) .

<!-- *********************************************************************** -->

<a name="support"></a>

## Support

We welcome all comments, suggestions, questions, and bug reports. Feel free to open issues or chat with us directly in the [`#webcomponents-react`](https://openui5.slack.com/archives/CSQEJ2J04) channel in the
[OpenUI5 Community Slack](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/).
Please note that you have to join this Slack workspace via [this link](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/) if you are not part of it already.

<!-- *********************************************************************** -->

<a name="contributing"></a>

## Contributing

Please check our [Contribution Guidelines](/CONTRIBUTING.md).
