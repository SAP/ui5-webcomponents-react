import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Duvwo7dg.js";import{M as a,a as p}from"./index-BNMZzHP3.js";import"./Tag-Ck-rQ93o.js";import"./index-BsPoJnqF.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import"./index-CD3cnlhM.js";import{F as s}from"./CommandsAndQueries-3sg19bBN.js";import"./Button-BAohpRXl.js";import"./jsx-runtime-xa789Fx-.js";import"./copy-Ce-W84Ka.js";import{T as m}from"./TableOfContent-ClPXL3dS.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import"./iframe-OzZ0TM52.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./event-strict-DgQLNDEV.js";import"./slot-_4yKMUwC.js";import"./i18n-CjR4HGlq.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-QU1zRg7_.js";import"./Icon-BC8KE6RK.js";import"./CustomElementsScope-CraI7z9b.js";import"./Keys-CLf_QmYW.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./sys-enter-2-CUYL3AE0.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-l0VFevGn.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BX0qWsV0.js";import"./decline-BJJ7TY3L.js";import"./information-jHKcowyE.js";import"./sys-enter-2-vblLkH1D.js";import"./alert-CtWydQwI.js";import"./preview-CL3r38XY.js";import"./DocsRenderer-CFRXHY34-DxyuINM_.js";import"./client-2ALsBH8W.js";import"./Popover-DrPdnlD_.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-Dn66NiVb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-DspB395S.js";import"./Label-DvI9nTT8.js";import"./index-BTImLLsO.js";import"./index-BqqAHTof.js";import"./Link-DYEiCybJ.js";import"./index-DOeHcXKd.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-CFKQn4uG.js";import"./I18nStore-Bx61vi8M.js";import"./index-CY4hIywU.js";import"./Tooltips-CwjopbrF.js";import"./EventProvider-ChtD9rRX.js";const r=`# @ui5/webcomponents-react-compat

The \`compat\` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-compat
\`\`\`

> ⚠️ **Warning:** It is not supported using the v1 \`Table\` and the v2 \`Table\` in the same application without "compat" package scoping!

> ⚠️ **Warning:** Please only import components from this package via the file path!

## Compatibility

The legacy v1 (compat) \`Table\` and the modern v2 \`Table\` component and some subcomponents both register the same custom element names for \`ui5-table\`, \`ui5-table-row\` and \`ui5-table-cell\`, which will lead to conflicts when they coexist in the same application. To solve this, please see the section about scoping below.

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

### Using the Compat (v1) Table Together with the v2 Table in One Application

As of **v2.12.0** of \`@ui5/webcomponents-compat\`, a dedicated **scoping mechanism** is available for custom elements from the compat package.

> **Note:** This feature is different from the general [scoping mechanism](https://sap.github.io/ui5-webcomponents/docs/advanced/scoping/) and applies **only** to custom elements from the compatibility package (Table and its subcomponents).

Setting up scoping for the compat package is done in the same way as general scoping, but with specific methods coming from \`@ui5/webcomponents-compat\`.

\`\`\`js
//scoping.js
import { setCompatCustomElementsScopingSuffix } from '@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js';
setCompatCustomElementsScopingSuffix('compat');

// app main file, e.g index.js, main.tsx, etc.
import './scoping.js';
// now, all other component imports - the scoping config import must be the first import of the app
import { Table } from '@ui5/webcomponents-react-compat';
\`\`\`

### Experimental Patch Script (deprecated)

> ⚠️ **Deprecated**: This script is deprecated in favor of scoping the "compat" package components!

The \`patch-compat-table\` script (included in the \`@ui5/webcomponents-react-cli\` package) is developed to address specific compatibility issues that arise when using the legacy v1 Table component in conjunction with the \`FilterBar\` or \`VariantManagement\` components. These components internally rely on the v2 \`Table\`, and therefore conflicts will occur when using the v1 \`Table\`.
The script will change the custom element name by adding a \`-v1\` suffix (via [patch-package](https://github.com/ds300/patch-package)) to all duplicate v1 table components.

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
`,e.jsx(p,{children:r.split("## Documentation")[0].trim()}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o()}export{Ee as default};
