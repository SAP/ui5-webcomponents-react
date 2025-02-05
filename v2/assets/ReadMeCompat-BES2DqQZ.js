import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as r,a as m}from"./index-hZHAzFAL.js";import"./index-CiK-e51e.js";import"./index-A_0wpmQ7.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-DXAtCZEe.js";import"./Button-mNpaFI4J.js";import"./withWebComponent-pt4_FAs2.js";import"./copy-D7jhBnDt.js";import{F as p}from"./CommandsAndQueries-F7oY3bs4.js";import{T as a}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-Gv3TXXff.js";import"./iframe-DzOWA1K8.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-BdT1PzT1.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./Keys-Can65e7H.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./decline-COfFlC7H.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DaPpOrk_.js";import"./information-CnmWG5u0.js";import"./sys-enter-2-CocGGTHn.js";import"./sys-enter-2-DYJZCTEK.js";import"./i18n-defaults-CjsTKlnu.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BmK38KuR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-Cc7kMCdT.js";import"./Popover-BepUWsCJ.js";import"./PopupsCommon.css-CggLypH1.js";import"./FocusableElements-CQNfSknU.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-p8jh-9XL.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-D23_yuAt.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-hr5H-IMi.js";import"./index-CKbhHRPG.js";import"./Label-CfmyqNzh.js";import"./index-DBeTfgPc.js";import"./index-D4QIma-n.js";import"./Link-_LTgoXxu.js";import"./index-Dmi4gEmW.js";import"./index-P5IVNCRm.js";import"./Text-DADVHpsK.js";import"./addCustomCSSWithScoping-Bj4bnd2y.js";import"./index-CpccB1hQ.js";import"./index-BgEfjVIQ.js";import"./BusyIndicator-CHfKtrJh.js";import"./index-BzfJwdfk.js";import"./index-BeJtHrc9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DG3AkCvt.js";import"./index-DoezBL6h.js";import"./I18nStore-m2kuMwIb.js";const s=`# @ui5/webcomponents-react-compat

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
