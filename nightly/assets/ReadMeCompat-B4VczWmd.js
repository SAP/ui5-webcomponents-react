import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-B7tNCeqj.js";import{ae as r,ah as m}from"./index-BBcvTVZP.js";import"./index-C1n754Ql.js";import"./index-D6tTnx-w.js";import"./TagDesign-Dou_yO3g.js";import"./index-CjmQ2z5u.js";import"./index-bI5-aUrJ.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./chunk-NUUEMKO5-CCKsS7az.js";import"./Button-D2qpVKd_.js";import"./withWebComponent-BAC46Qgl.js";import"./copy-0ABXfWaL.js";import{F as p}from"./CommandsAndQueries-BbEw0hGA.js";import{T as a}from"./TableOfContent-BTksmC1d.js";import"./products-B8km3JGR.js";import"./WrappingType-CW8URInd.js";import"./Title-Dvor2iJZ.js";import"./iframe-DlRPybQ4.js";import"../sb-preview/runtime.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Icon-KwQmOmwG.js";import"./useIsomorphicLayoutEffect-BrM9ZQ9f.js";import"./Keys-icCwrzTr.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-Cvlv1555.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-DXlV02Fk.js";import"./information-xqs3OhY3.js";import"./sys-enter-2-CSX9nspg.js";import"./sys-enter-2-DbnliBdY.js";import"./i18n-defaults-Cyg2J0QB.js";import"./index-DGl0hLba.js";import"./client-CY4f97Aa.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-PdAMeIDX.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./utils-DHWaO16c.js";import"./Popover-D3Aa3r1P.js";import"./PopupsCommon.css-BjVEqPfo.js";import"./FocusableElements-CWhrFN4y.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-DZGQLi_B.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./index-Bz1xVcti.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-HR5-WzWz.js";import"./index-CBHUUcbt.js";import"./Label-CEj5rW2N.js";import"./index-H87Uqpad.js";import"./index-Dga5kidR.js";import"./Link-D-9JsuZq.js";import"./index-DyiqWDN1.js";import"./index-f_HIS5b8.js";import"./Text-CKbp8M25.js";import"./addCustomCSSWithScoping-CrhCyCCs.js";import"./index-BYWKQNiy.js";import"./index-BJBRTTXf.js";import"./BusyIndicator-CLoFvcyK.js";import"./index-CFz6ke_V.js";import"./index-yEmNeK-_.js";import"./AvatarSize-BceVhWoP.js";import"./employee-BdFbn1ih.js";import"./index-NtgBLeGk.js";import"./I18nStore-ZZUdxPPL.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(p,{})]})}function Mt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{Mt as default};
