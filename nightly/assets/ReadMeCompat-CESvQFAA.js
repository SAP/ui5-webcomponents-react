import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as r,a as m}from"./index-BgJwtxQm.js";import"./index-CiDABy2F.js";import"./index-D-CdaZ4Z.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-CwKuqg3M.js";import"./Button-Bn6Q5CAy.js";import"./withWebComponent-DfVDXLfc.js";import"./copy-BzOp45rx.js";import{F as p}from"./CommandsAndQueries-BnFy7L8k.js";import{T as a}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-D0oe8JHs.js";import"./iframe-DK_Ta1Ig.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Icon-DVzRT9Bg.js";import"./useIsomorphicLayoutEffect-Clyi7m9u.js";import"./Keys-Df3IBHp2.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-BOQDYlzc.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CuCY0lV7.js";import"./information-Cak16zSA.js";import"./sys-enter-2-XqI4eejo.js";import"./sys-enter-2-Dcza6can.js";import"./i18n-defaults-Cyg2J0QB.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-ifklPEaK.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-C9_9ShpY.js";import"./Popover-D2H5tr2x.js";import"./PopupsCommon.css-BjjP0aIP.js";import"./FocusableElements-DmMpNXMH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DlOwLzX7.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-D2I0n9vd.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DNyxTWaC.js";import"./index-CBmB4cdX.js";import"./Label-C5k308Ss.js";import"./index-_W3-l2LS.js";import"./index-CJz7rSSw.js";import"./Link-C6yBf8L4.js";import"./index-B_ec27wH.js";import"./index-PgvbZRQ5.js";import"./Text-BgOY5gTt.js";import"./addCustomCSSWithScoping-DJgtY14Y.js";import"./index-BQ73vKGB.js";import"./index-BxQhZsiO.js";import"./BusyIndicator-DpBDtyrv.js";import"./index-BJgFHYpQ.js";import"./index-BLtNRMhz.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Dre3WUSG.js";import"./index-CGA_9Ufk.js";import"./I18nStore-DzsPQ4Pu.js";const s=`# @ui5/webcomponents-react-compat

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
