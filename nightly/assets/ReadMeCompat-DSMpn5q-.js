import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Ddg-oX0k.js";import{M as r,a as m}from"./index-XbPxxJjn.js";import"./index-CB2NJyj5.js";import"./index-CLjlEx1o.js";import"./TagDesign-Ga50IS6u.js";import"./index-Bi_W_Jd4.js";import"./index-C1S0AQHK.js";import{F as a}from"./CommandsAndQueries-HA0xRDqH.js";import"./Button-CVhFbCad.js";import"./jsx-runtime-ByLklLy6.js";import"./copy-BPa3OsAo.js";import{T as p}from"./TableOfContent-rwZqpKzI.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Dw2clFwJ.js";import"./iframe-BfoxTUyd.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-CGby3L9v.js";import"./CustomElementsScope-BJCkQSHf.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./decline-U8TXFXmv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-C2EHZYIs.js";import"./preview-DGR6cG7f.js";import"./DocsRenderer-CFRXHY34-O7eW8eE0.js";import"./react-18-B98GjGe7.js";import"./Popover-BgaZr5c3.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D-iSdYn6.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C0ur5KUJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-jv87nE5t.js";import"./index-CTl4EJPq.js";import"./Label-42unHoL8.js";import"./index-q_xBifsn.js";import"./index-V8njyB6i.js";import"./Link-7OPDvJp0.js";import"./index-V9E_9yBg.js";import"./index-D1NZoOym.js";import"./Text-BYHe0rMB.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-CRaJDqw6.js";import"./index-sxpf8z2p.js";import"./BusyIndicator-cXtbXcMV.js";import"./index-D-QlfT-1.js";import"./index-BBw2fVoz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP6pBYCZ.js";import"./index-EoHtnz0n.js";import"./I18nStore-BuTcnDwi.js";import"./Tooltips-CFLTQoOV.js";import"./EventProvider-ChtD9rRX.js";const s=`# @ui5/webcomponents-react-compat

The \`compat\` (compatibility) package provides components that were removed in the v2 release but are still available for backwards compatibility.

Some of these components lack accessibility or design support, while others have been replaced by UI5 web components. In general, we recommend using components from this package only as a temporary solution.

## Component Support

Components in this package will not receive any new features. Only critical bugs, that are outside the component's inherent limitations, will be addressed. This package will be maintained until the next major release (which is not currently on our roadmap).

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-compat
\`\`\`

## Importing Components

As the v1 \`ui5-table\` (\`Table\`) component is part of this package and some custom element names are equal to the new v2 \`ui5-table\`, importing components from the root (\`import { Table } from "@ui5/webcomponents-react-compat"\`) is discouraged.
The primary reason is that tree-shaking capabilities are limited in the default configurations of most bundlers in dev mode. As a result, custom elements for the v1 table will still be defined, even if only the \`Toolbar\` is imported. This can cause unexpected behavior if the v2 table is also used in the same app.

> ⚠️ **Warning:** It is not supported using the v1 \`Table\` and the v2 \`Table\` in the same application!

> ⚠️ **Warning:** Please only import components from this package via the file path!

E.g.:

- \`import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';\`
- \`import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';\`

In case you're still facing issues with the custom element definitions of the \`Table\` in development environments, you can add the web component import before any other component import in your application.

Following are the imports of duplicate custom element names:

- \`Table\` (\`ui5-table\`): \`import '@ui5/webcomponents-compat/dist/Table.js';\`
- \`TableCell\` (\`ui5-table-cell\`): \`import "@ui5/webcomponents-compat/dist/TableCell.js";\`
- \`TableRow\` (\`ui5-table-row\`): \`import "@ui5/webcomponents-compat/dist/TableRow.js";\`

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force 2 -->
`;function n(o){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Legacy Components / Docs"}),`
`,t.jsx(p,{}),`
`,t.jsx(m,{children:s.split("## Documentation")[0].trim()}),`
`,t.jsx(a,{})]})}function kt(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{kt as default};
