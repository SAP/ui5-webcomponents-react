import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as r,a as m}from"./index-BoyDyvBl.js";import"./index-BUTAtzSu.js";import"./index-CbA51_Vb.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-fHEJg6Ld.js";import"./Button-CDZIkOZh.js";import"./withWebComponent-EZ3G6CaF.js";import"./copy-DCGapvEg.js";import{F as p}from"./CommandsAndQueries-CdXqqFH3.js";import{T as a}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-Bv63CP0f.js";import"./iframe-c7ew4gC-.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-DNDJ5KQd.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./Keys-Can65e7H.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./decline-DMxd5M-V.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DdJENLJZ.js";import"./information-crW1aXWm.js";import"./sys-enter-2-Btg_l7Gl.js";import"./sys-enter-2-BQoPN53b.js";import"./i18n-defaults-CjsTKlnu.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-C0o60MFY.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-Cc7kMCdT.js";import"./Popover-8R4fWEnb.js";import"./PopupsCommon.css-BJYIHzRz.js";import"./FocusableElements-B22KwyXz.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D42cNNcx.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C24-mXTM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-hr5H-IMi.js";import"./index-DXHKslqi.js";import"./Label-BvuET2bs.js";import"./index-BwPIj-od.js";import"./index-DfEG_6DA.js";import"./Link-Cee8M4pE.js";import"./index-CfE5ChDC.js";import"./index-CJHgPl-E.js";import"./Text-BqkjUVZl.js";import"./addCustomCSSWithScoping-CAH5PFOm.js";import"./index-CpccB1hQ.js";import"./index-W6Ra1GtV.js";import"./BusyIndicator-Bzvv1vPS.js";import"./index-DIc9VXE4.js";import"./index-BVweZtNr.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Ccx1Czlo.js";import"./index-D7anP3lQ.js";import"./I18nStore-DI-J8Q63.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(p,{})]})}function It(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{It as default};
