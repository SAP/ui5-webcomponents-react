import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as r,a as m}from"./index-Cf9TdiSk.js";import"./index-DBDmnX-z.js";import"./index-_PTNq6DX.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-D-3X29ML.js";import"./Button-DiEZky6d.js";import"./jsx-runtime--4q9epG_.js";import"./copy-CpGuQhie.js";import{F as p}from"./CommandsAndQueries-D27DZ2Ym.js";import{T as a}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import"./iframe-DP2L8rW1.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-CqWzJ5OD.js";import"./CustomElementsScope-CyyomP-e.js";import"./Keys-Can65e7H.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./decline-WqXclzji.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-CpRj5F0h.js";import"./sys-enter-2-sAwqztpn.js";import"./i18n-defaults-B3xVhWeJ.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-lBbqciF7.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-Wfe8JoJe.js";import"./Label-5DArBtCG.js";import"./index-iR9PNDcN.js";import"./index-qDH2MiBo.js";import"./Link-D6TMlpbu.js";import"./index-FpWZEnTM.js";import"./index-PYuf3Agp.js";import"./Text-pu3koT6Q.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BWkycj8K.js";import"./BusyIndicator-CYJz71Ps.js";import"./index-C-pEC8LU.js";import"./index-kg5gipTY.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-DSNhfjyG.js";import"./I18nStore-DM4coTEA.js";const s=`# @ui5/webcomponents-react-compat

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

**Please only import components from the file path!**

E.g.:

- \`import { Table } from '@ui5/webcomponents-react-compat/dist/components/Table/index.js';\`
- \`import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';\`

**It is not supported using the v1 \`Table\` and the v2 \`Table\` in the same application!**

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/) (Legacy Components).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force 2 -->
`;function i(o){return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"Legacy Components / Docs"}),`
`,t.jsx(a,{}),`
`,t.jsx(m,{children:s.split("## Documentation")[0].trim()}),`
`,t.jsx(p,{})]})}function kt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{kt as default};
