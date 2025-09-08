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

- [@ui5/webcomponents-ai-react](https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/ai) - React wrapper for the `@ui5/webcomponents-ai` Package

  [![](https://badgen.net/npm/v/@ui5/webcomponents-ai-react?icon=npm)](https://www.npmjs.com/package/@ui5/webcomponents-ai-react)

<!-- *********************************************************************** -->

<a name="requirements"></a>

## Requirements

- [React](https://www.npmjs.com/package/react) and [React-DOM](https://www.npmjs.com/package/react-dom) (**18.0.0 or higher**)
- [Node.js](https://nodejs.org/) (**LTS version**)
- If you're using [TypeScript](https://www.typescriptlang.org/) we recommend version **4.7** or later.

<!-- *********************************************************************** -->

<a name="download"></a>

## Download and Installation

You can install `@ui5/webcomponents-react` along with the required peer-dependencies based on the components you plan to use. **In most cases, the recommended installation is the most maintainable option.**

### Recommended Installation

Install `@ui5/webcomponents-react` along with the `@ui5/webcomponents` and `@ui5/webcomponents-fiori` peer-dependencies as dependencies in your project:

```sh
npm install @ui5/webcomponents-react @ui5/webcomponents @ui5/webcomponents-fiori
```

**Note:** If you import anything from another `@ui5/webcomponents-xyz` package, we recommend installing it as a dependency as well, even if it’s already included through another package.

### Minimal Installation

Since version `v2.14.0` of `@ui5/webcomponents-react`, `@ui5/webcomponents-fiori` is an optional peer-dependency. You will still need to install it if:

- You want to use any [component](https://sap.github.io/ui5-webcomponents/components/fiori/) from the `@ui5/webcomponents-fiori` package.
- You want to use the [VariantManagement](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/inputs-variantmanagement--docs) component.
- You import anything from the `@ui5/webcomponents-fiori` package.

```sh
npm install @ui5/webcomponents-react @ui5/webcomponents
```

**Note:** Most popular bundlers enable tree-shaking for production builds, so there’s no difference in the final bundle size between the recommended and minimal installations.

> ⚠️ **Warning**
>
> If your bundler does **not** support tree-shaking, you must use **subpath imports**.
>
> Otherwise, since `@ui5/webcomponents-react` re-exports all components, **every component** (including those that depend on the `@ui5/webcomponents-fiori` package) will be included in your bundle, which will lead to errors due to the missing module.
>
> **✅ Do:**
>
> ```tsx
> import { Button } from '@ui5/webcomponents-react/Button';
> ```
>
> **❌ Don’t:**
>
> ```tsx
> import { Button } from '@ui5/webcomponents-react';
> ```

#### Importing Assets

The default assets import (`import '@ui5/webcomponents-react/dist/Assets.js';`) includes assets from the fiori package. Due to a limitation of Next.js (top-level await is not supported), we can't dynamically import the assets based on the installed packages.
If you are using the minimal installation, please import the assets manually as follows:

```ts
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-react/dist/json-imports/i18n.js';

//fetch
import '@ui5/webcomponents/dist/Assets-fetch.js';
import '@ui5/webcomponents-react/dist/json-imports/i18n-fetch.js';

//node
import '@ui5/webcomponents/dist/Assets-node.js';
import '@ui5/webcomponents-react/dist/json-imports/i18n-node.js';
```

## End of Support for Version 1.x

The support for version 1.x of `ui5-webcomponents-react` has ended on **July 1, 2025**. We recommend migrating to version 2.x as soon as possible. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).

<!-- *********************************************************************** -->

## Getting Started

### Tutorial

You are new to UI5 Web Components for React and don't know where to start?<br />
Then take a look at our [Tutorial Mission](https://developers.sap.com/mission.react-spa.html) at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.<br />
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.

### SAP Devtoberfest 2024 session

In the [SAP Devtoberfest 2024](https://www.youtube.com/watch?v=lvpN3eK39h8) session, we showcased the most prominent new features in version 2 of UI5 Web Components and UI5 Web Components for React, and provided an example of how to migrate from version 1 to version 2 using our [Codemod](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs#codemod).

### SAP Devtoberfest 2023 session

[Here](https://www.youtube.com/watch?v=zyOxgjoSnGw) you can find the video of our session for the SAP Devtoberfest 2023 (aired Sep 29, 2023). There we briefly explain why UI5 Web Components for React exist at all, where the project fits into the SAP UI stack and what advantages our wrapper has over implementations that use pure ui5-webcomponents.
For the main part, we show how you could create a simple Movie Database UI, first by using our `Vite` template and then with our `Next.js` template.

### Examples & Templates

You can find a curated list of project templates and examples on our [Project Templates & Examples page](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/project-templates-examples--docs).

### Add `@ui5/webcomponents-react` to an existing app

1. Install all [required dependencies](#download-and-installation)

2. Import the `ThemeProvider` component and wrap your root component with it:

   ```tsx
   import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
   ...
   createRoot(document.getElementById('root') as HTMLElement).render(
     <ThemeProvider>
       <App />
     </ThemeProvider>,
   );
   ```

3. Use `@ui5/webcomponents-react` components in your app by importing them.
   For example, to use the `Button` component you need to import it:

   ```jsx
   import { Button } from '@ui5/webcomponents-react/Button'; // loads ui5-button wrapped in a ui5-webcomponents-react component
   ```

4. Add the imported component to your JSX:

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
