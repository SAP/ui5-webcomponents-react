<a name="top"></a>
# fiori-for-react
<p align="center">
  <a href="https://www.npmjs.com/package/fiori-for-react">
    <img alt="npm version" src="https://img.shields.io/npm/v/fiori-for-react/fiori3.svg"
  </a>
  <a href="https://ci.appveyor.com/projects" target="_blank">
    <img alt="Build Status" src="https://img.shields.io/appveyor/ci/SAP/fiori-for-react/master.svg">
  </a>
  <a href="https://coveralls.io/" target="_blank">
    <img alt="Code Coverage" src="https://img.shields.io/coveralls/github/SAP/fiori-for-react/master.svg">
  </a>
  <a href="https://sap-ea.slack.com/messages/CEN48B210" target="_blank">
    <img alt="Slack Badge" src="https://badgen.net/badge/slack/fiori-for-react/orange?icon=slack">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"> 
  </a>
  <a href="https://lernajs.io/" target="_blank">
  <img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
  </a>

</p>

<!-- *********************************************************************** -->
<a name="contents"></a>
## Table of Contents
1. [Description](#description)
2. [Requirements](#requirements)
3. [Download & Installation](#download)
4. [Configuration](#configuration)
5. [Known Issues](#issues)
6. [Support](#support)
7. [Contributing](#contributing)
8. [License](#license)

<!--  1. [Limitations](#limitations) -->



<!-- *********************************************************************** -->
<a name="description"></a>
## Description

Fiori4React is providing a Fiori-compliant React implementation. The Fiori 3 package is leveraging the [UI5 Web Components](https://github.com/SAP/ui5-webcomponents).

### Package Overview

#### [@fiori-for-react/fiori3](https://github.com/SAP/fiori-for-react/tree/master/packages/fiori3) - Standard Fiori3 React components 
<!-- fiori3 -->
![](https://badgen.net/badge/size/151.1%20kB/green) ![](https://badgen.net/badge/gzip%20size/38.8%20kB/green)
<!-- fiori3! -->

#### [@fiori-for-react/styles](https://github.com/SAP/fiori-for-react/tree/master/packages/styles) - Decoupled styles repository
<!-- styles -->
![](https://badgen.net/badge/size/73.3%20kB/green) ![](https://badgen.net/badge/gzip%20size/14.4%20kB/green)
<!-- styles! -->

#### [@fiori-for-react/utils](https://github.com/SAP/fiori-for-react/tree/master/packages/utils) - Utils for Fiori4React
<!-- utils -->
![](https://badgen.net/badge/size/5.1%20kB/green) ![](https://badgen.net/badge/gzip%20size/1.9%20kB/green)
<!-- utils! -->

#### [@fiori-for-react/charts](https://github.com/SAP/fiori-for-react/tree/master/packages/charts) - Standard React Fiori charts 
<!-- charts -->
![](https://badgen.net/badge/size/39.9%20kB/green) ![](https://badgen.net/badge/gzip%20size/10.1%20kB/green)
<!-- charts! -->
   
### Explore our components
You can play around with our components by visiting our [Storybook](https://github.com/pages/SAP/fiori-for-react/).



<!-- *********************************************************************** -->
<a name="requirements"></a>
## Requirements

- [Node.js](https://nodejs.org/) (**version 8.5 or higher** ⚠️)
- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**16.4.2 or higher**)


<!-- *********************************************************************** -->
<a name="download"></a>
## Download and Installation

To consume Fiori4React, first you need to install the npm module:
```sh
npm install @fiori-for-react/fiori3 --save
```

<!-- *********************************************************************** -->
<a name="configuration"></a>
## Configuration

Wrap the App Root into our Theme Provider:
```js
import { ContentDensity, ThemeProvider, Themes } from '@fiori-for-react/fiori3';
...
render() {
  return (
    <div>
      <ThemeProvider theme={Themes.sap_fiori_3} contentDensity={ContentDensity.Compact} withToastContainer>
        <MyApp />
      </ThemeProvider>
    </div>
  );
}
```

Import the desired component(s) in your app:
For example, to use ```Button``` you need to import it:

```jsx
import { Button } from '@fiori-for-react/fiori3'; // loads ui5-button
```

Then, you can use the Button in your app:

```jsx
<Button onPress={() => alert('Hello World!')}>Hello world!</Button>
```


<!-- *********************************************************************** -->
<!-- <a name="limitations"></a> -->
<!-- ## Limitations -->



<!-- *********************************************************************** -->
<a name="issues"></a>
## Known Issues

Please look at our [GitHub Issues](https://github.com/SAP/fiori-for-react/issues) .



<!-- *********************************************************************** -->
<a name="support"></a>
## Support

This project is provided "as-is": there is no guarantee that raised issues will be answered or addressed in future releases.

<!-- *********************************************************************** -->
<a name="contributing"></a>
## Contributing
Please check our [Contribution Guidelines](/CONTRIBUTING.md).
#### Contributors


<!-- *********************************************************************** -->
## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](/LICENSE) file.
