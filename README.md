<a name="top"></a>
# UI5 Web Components for React
<p align="center">
  <a href="https://travis-ci.org/SAP/ui5-webcomponents-react" target="_blank">
    <img alt="Build Status" src="https://img.shields.io/travis/SAP/ui5-webcomponents-react/master.svg">
  </a>
  <a href="https://coveralls.io/github/SAP/ui5-webcomponents-react" target="_blank">
    <img alt="Code Coverage" src="https://img.shields.io/coveralls/github/SAP/ui5-webcomponents-react/master.svg">
  </a>
  <!-- <a href="https://sap-ea.slack.com/messages/CEN48B210" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/ui5-webcomponents-react/orange?icon=slack">
  </a> -->
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"> 
  </a>
  <a href="https://lernajs.io/" target="_blank">
  <img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
  </a>

</p>

<!-- *********************************************************************** -->
<a name="description"></a>
## Description

`ui5-webcomponents-react` is providing a Fiori-compliant React implementation by leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents). This project was formerly known as `fiori-for-react`.

### Explore our components
You can play around with our components by visiting our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

### Package Overview

#### [@ui5/webcomponents-react](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main) - Fiori 3 Components [![](https://img.shields.io/npm/v/@ui5/webcomponents-react.svg)](https://www.npmjs.com/package/@ui5/webcomponents-react)
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react](https://img.shields.io/bundlephobia/min/@ui5/webcomponents-react.svg?label=size) --> 
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react](https://img.shields.io/bundlephobia/minzip/@ui5/webcomponents-react.svg?label=gzip%20size) -->

#### [@ui5/webcomponents-react-charts](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/charts) - Fiori Charts  [![](https://img.shields.io/npm/v/@ui5/webcomponents-react-charts.svg)](https://www.npmjs.com/package/@ui5/webcomponents-react-charts)
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react-charts](https://img.shields.io/bundlephobia/min/@ui5/webcomponents-react-charts.svg?label=size)  -->
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react-charts](https://img.shields.io/bundlephobia/minzip/@ui5/webcomponents-react-charts.svg?label=gzip%20size) -->

#### [@ui5/webcomponents-react-base](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base) - Utils [![](https://img.shields.io/npm/v/@ui5/webcomponents-react-base.svg)](https://www.npmjs.com/package/@ui5/webcomponents-react-base)
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react-base](https://img.shields.io/bundlephobia/min/@ui5/webcomponents-react-base.svg?label=size) --> 
<!-- ![https://bundlephobia.com/result?p=@ui5/webcomponents-react-base](https://img.shields.io/bundlephobia/minzip/@ui5/webcomponents-react-base.svg?label=gzip%20size) -->


<!-- *********************************************************************** -->
<a name="requirements"></a>
## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.8.0 or higher**)

<!-- *********************************************************************** -->
<a name="download"></a>
## Download and Installation

To consume `ui5-webcomponents-react`, first you need to install the npm module:
```sh
npm install @ui5/webcomponents-react --save
```

<!-- *********************************************************************** -->
<a name="configuration"></a>
## Configuration

**Prerequisite: You have a React app.** In case you don't, we recommend to create one using [create-react-app](https://facebook.github.io/create-react-app/).<br/>
In order to use `ui5-webcomponents-react` you have to wrap your application's root component into the `ThemeProvider`.<br/>
You will find this component most likely in `src/App.js`: 
```jsx
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
...
render() {
  return (
    <div>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </div>
  );
}
```

Then, you are ready to use `ui5-webcomponents-react` and you can import the desired component(s) in your app:<br />
For example, to use ```Button``` you need to import it:

```jsx
import { Button } from '@ui5/webcomponents-react/lib/Button'; // loads ui5-button wrapped in a ui5-webcomponents-react component
```

Then, you can use the Button in your app:

```jsx
<Button onPress={() => alert('Hello World!')}>Hello world!</Button>
```

You could import all components also from `@ui5/webcomponents-react` directly, but this will have a negative impact on your bundle size.

### Configure Compact/Cozy setting
UI5 Web Components supports ```Compact``` and ```Cozy``` mode. It is set to ```Cozy``` by default. To enable ```Compact``` globally, provide the option ```compactSize: true``` in the configuration ```script``` tag:

```html
<script data-id="sap-ui-config" type="application/json">
{
  "compactSize": true
}
</script>
```

### Browser Support
`@ui5/webcomponents-react` is supporting all modern major browsers. There is no support for Internet Explorer 11 built in.<br />
If you want your application to run in IE11, you will have to polyfill some features by importing these polyfills as **first** imports in your `src/index.js`:
```js
import 'react-app-polyfill/ie11';
import '@ui5/webcomponents-base/src/features/browsersupport/IE11';
import '@ui5/webcomponents-react-base/polyfill/IE11';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
```
You can install `react-app-polyfill` and `@webcomponents/webcomponentsjs` with the following command:
```bash
npm install react-app-polyfill @webcomponents/webcomponentsjs --save
```

For Browser Support and the configuration of the UI5 Web Components, please take a look at the 
 [Browser Support](https://github.com/SAP/ui5-webcomponents#browser-support) and the
 [Configure](https://github.com/SAP/ui5-webcomponents#browser-support) sections of the 
 [UI5 Web Components Readme](https://github.com/SAP/ui5-webcomponents#ui5-web-components).
 
### Improving Bundle Size
If you are running a default `create-react-app`, you will have will huge bundle size after creating a production build. 
This is caused by the fact that the webpack bundler is including all UI5 Web Component translation files and CLDR data files in the application bundle. 
In order to decrease the bundle size of the application a custom Webpack configuration should be provided.
1. Eject the react build with ```npm run eject```
2. Open ```config/webpack.config.js``` file and add the following lines before the last loader:
```js
{
  test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
  loader: 'file-loader',
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
  type: 'javascript/auto'
},
// "file" loader makes sure those assets get served by WebpackDevServer.
// When you `import` an asset, you get its (virtual) filename.
// In production, they would get copied to the `build` folder.
// This loader doesn't use a "test" so it will catch all modules
// that fall through the other loaders.
```
Please also refer to the [UI5 Web Components React Sample](https://github.com/SAP/ui5-webcomponents-sample-react#configure-react-build).

<!-- *********************************************************************** -->
<a name="issues"></a>
## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/ui5-webcomponents-react/issues) .



<!-- *********************************************************************** -->
<a name="support"></a>
## Support

This project is provided "as-is": there is no guarantee that raised issues will be answered or addressed in future releases.

<!-- *********************************************************************** -->
<a name="contributing"></a>
## Contributing
Please check our [Contribution Guidelines](/CONTRIBUTING.md).

<!-- *********************************************************************** -->
## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](/LICENSE) file.
