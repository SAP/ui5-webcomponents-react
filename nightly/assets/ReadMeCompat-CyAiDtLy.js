import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as r,a as m}from"./index-B_-I3M-t.js";import"./index-aiOo9W_a.js";import"./index-D_6NHSCO.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as a}from"./CommandsAndQueries-DX407f5G.js";import"./Button-DcNvBpEn.js";import"./jsx-runtime-CkEx_Gfk.js";import"./copy-DmqZtkbO.js";import{T as p}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-xNG2nZLh.js";import"./iframe-Bbgg2MHh.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-BexaehQh.js";import"./CustomElementsScope-CjZbIYTD.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./decline-zF6-_htN.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-a8ApNaQO.js";import"./information-DmA-zxas.js";import"./sys-enter-2-DU2G_wE6.js";import"./sys-enter-2-CbaoLfaf.js";import"./alert-CeIMTDH_.js";import"./i18n-defaults-B158X0Y5.js";import"./index-BVR6w1bU.js";import"./preview-ZMpPjZe6.js";import"./DocsRenderer-CFRXHY34-RFlV8d9E.js";import"./react-18-SRpBHcoT.js";import"./Popover-eNK7pDla.js";import"./PopupsCommon.css-DXmEAn4P.js";import"./FocusableElements-DDPXQQfz.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DS2o_9u5.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BFqlvNkW.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DUe1LpVj.js";import"./index-Bjofktik.js";import"./Label-BrFTKjrK.js";import"./index-dNG4P2z4.js";import"./index-D9S9JAEE.js";import"./Link-CBPPqDB9.js";import"./index-D_lPDdUa.js";import"./index-BxLcq94m.js";import"./Text-CNWDrMdn.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-B73Gg2hE.js";import"./index-CD5x5g4B.js";import"./BusyIndicator-vKEUjaWy.js";import"./index-8fyqcNlw.js";import"./index-DOaWR8S5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BtfkId0O.js";import"./index-C8N0WO0r.js";import"./I18nStore-tbyxgrjv.js";import"./Tooltips-DOGhZSxR.js";import"./EventProvider-ChtD9rRX.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(a,{})]})}function It(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n()}export{It as default};
