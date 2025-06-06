import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as a,a as r}from"./index-BF-__mIu.js";import"./index-BRThQ-zg.js";import"./index-yagSgcok.js";import"./Tag-BGp0HQg1.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as p}from"./CommandsAndQueries-D_nGuljO.js";import"./Button-CddyUUJt.js";import"./jsx-runtime-CTdjW1dy.js";import"./copy-DVi57tol.js";import{T as m}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import"./iframe-Byv7c9SY.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-Cq4WdPfD.js";import"./CustomElementsScope-BI7irdrP.js";import"./Keys-BxH5KEHJ.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./i18n-defaults-Bwpyempw.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-CdqLSqXL.js";import"./index-BVR6w1bU.js";import"./preview-BFcJgUJV.js";import"./DocsRenderer-CFRXHY34-ugGhqZ0p.js";import"./react-18-SRpBHcoT.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-dLoSGjBn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-4DYJndCZ.js";import"./index-BHoJB3Bj.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-CnssFVF8.js";import"./Link-BvcafW2a.js";import"./index-DuSPh-fE.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-DoOpR8m2.js";import"./I18nStore-C5X80oUZ.js";import"./index-twTfcK9t.js";import"./Tooltips-CywStIph.js";import"./EventProvider-ChtD9rRX.js";const s=`# @ui5/webcomponents-react-compat

The \`compat\` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-compat
\`\`\`

> ⚠️ **Warning:** It is not supported using the v1 \`Table\` and the v2 \`Table\` in the same application!

> ⚠️ **Warning:** Please only import components from this package via the file path!

## Compatibility

The legacy v1 (compat) \`Table\` and the modern v2 \`Table\` component and some subcomponents both register the same custom element names for \`ui5-table\`, \`ui5-table-row\` and \`ui5-table-cell\`, which will lead to conflicts when they coexist in the same application.

### Recommendation

We strongly recommend migrating fully to the v2 \`Table\`, especially if the \`FilterBar\` or \`VariantManagement\` component is used!

### Importing Components

Importing components from the root (\`import { Toolbar } from "@ui5/webcomponents-react-compat"\`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers in dev mode. As a result, custom elements for the v1 table will still be defined, even if only the \`Toolbar\` is imported. This can cause unexpected behavior if the v2 table is also used in the same app.

E.g.:

- \`import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';\`
- \`import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';\`

In case you're still facing issues with the custom element definitions of the \`Table\` in development environments, you can add the web component import before any other component import in your application.

Following are the imports of duplicate custom element names:

- \`Table\` (\`ui5-table\`): \`import '@ui5/webcomponents-compat/dist/Table.js';\`
- \`TableCell\` (\`ui5-table-cell\`): \`import "@ui5/webcomponents-compat/dist/TableCell.js";\`
- \`TableRow\` (\`ui5-table-row\`): \`import "@ui5/webcomponents-compat/dist/TableRow.js";\`

### Experimental Patch Script

The \`patch-compat-table\` script (included in the \`@ui5/webcomponents-react-cli\` package) is developed to address specific compatibility issues that arise when using the legacy v1 Table component in conjunction with the \`FilterBar\` or \`VariantManagement\` components. These components internally rely on the v2 \`Table\`, and therefore conflicts will occur when using the v1 \`Table\`.
The script will change the custom element name by adding a \`-v1\` suffix (via [patch-package](https://github.com/ds300/patch-package)) to all duplicate v1 table components.

> ⚠️ **Experimental**: This script is in experimental state and not subject to semantic versioning.

> ⚠️ **Temporary Solution:** This script is intended as a temporary workaround. It is strongly recommended to plan for a migration to the v2 Table component to ensure long-term compatibility and support.

<details style="cursor:auto;">

<summary><h4 style="display: inline; margin: 0; font-size:18px; cursor:pointer;">Using the script</h4></summary>

<br />

**What it does**

<p>The script patches the <code>@ui5/webcomponents-compat</code> and <code>@ui5/webcomponents-react-compat</code> table component and subcomponents to render with a different custom element name (tag name) compared to the v2 implementation.
This is done internally using <code>patch-package</code> to adjust the implementation in the <b>node_modules</b>.</p>

<p>⚠️ <b>Note:</b> Since the tag names and the related attribute are changed, any CSS selectors targeting these tags must be updated accordingly!</p>

**How to use**

<p><b>Install</b> the <code>@ui5/webcomponents-react-cli</code> and <code>@ui5/webcomponents-compat</code> packages:</p>

\`\`\`
// install \`@ui5/webcomponents-compat\` explicitly
npm i @ui5/webcomponents-react-cli @ui5/webcomponents-compat
\`\`\`

<p><b>Run</b> the script:</p>

\`\`\`
// ui5-wcr is an executable added by the \`@ui5/webcomponents-react-cli\` package
ui5-wcr patch-compat-table
\`\`\`

<p>The <code>ui5-wcr</code> executable is provided by the <code>@ui5/webcomponents-react-cli</code> package. The <code>patch-compat-table</code> command applies the necessary patches.</p>

<p><b>Recommendation:</b></p>

<p>Add the script as <code>postinstall</code> script in the <code>package.json</code>, so it runs after every module update.</p>

\`\`\`
{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "postinstall": "ui5-wcr patch-compat-table"
  }
}
\`\`\`

</details>

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force 2 -->
`;function o(t){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Legacy Components / Docs"}),`
`,e.jsx(m,{}),`
`,e.jsx(r,{children:s.split("## Documentation")[0].trim()}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(p,{})]})}function Ee(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{Ee as default};
