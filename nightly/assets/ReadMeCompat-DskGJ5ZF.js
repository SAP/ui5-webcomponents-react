import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as n}from"./index-DyCphG7h.js";import{ae as r,ag as m}from"./index-DtTWfQpI.js";import"./index-C_27WKVN.js";import"./index-Y4PbDp7j.js";import"./TagDesign-Dou_yO3g.js";import"./index-DysCNOs_.js";import"./index-C4cLd1FO.js";import"./chunk-NUUEMKO5-5ta9wBB-.js";import"./Button-CzXV-qq-.js";import"./withWebComponent-DpVKsRHi.js";import"./copy-BtTL6xAX.js";import{F as p}from"./CommandsAndQueries-CFnEhJTy.js";import{T as a}from"./TableOfContent-DRym89KV.js";import"./WrappingType-CW8URInd.js";import"./Title-DnczWaCy.js";import"./iframe-DZypf7Sx.js";import"../sb-preview/runtime.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-Ch4ABsnB.js";import"./Icon-CrKv37md.js";import"./useIsomorphicLayoutEffect-F-N6bu_1.js";import"./Keys-DoZifIQ_.js";import"./utils-BMpfTDbr.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-D_LjlJHK.js";import"./alert-CiqdS0Ti.js";import"./class-map-CAgcI9af.js";import"./i18n-defaults-CMHHS2wK.js";import"./client-CqEfiX9M.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-HqN2rB8b.js";import"./Popover-CxadHYVC.js";import"./PopupsCommon.css-Bu1W85h-.js";import"./FocusableElements-DpmShrVF.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D2m47C26.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bigav4TG.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-VxGFz2Tr.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BAIsnduv.js";import"./index-kNlKigw5.js";import"./Label-D_ADNoJV.js";import"./index-DP-u0XOf.js";import"./index-cawFe0IV.js";import"./Link-CcG_uYXc.js";import"./index-x5zB9JtW.js";import"./index-A5FQ6SQw.js";import"./addCustomCSSWithScoping-DYmOnLgW.js";import"./index-qKU3PnwJ.js";import"./BusyIndicator-B17L6t2M.js";import"./index-C6sMyakJ.js";import"./index-VFItxUFn.js";import"./Avatar-CLqwzIQ4.js";import"./employee-CUDhI-YO.js";import"./index-CBZzB0AZ.js";import"./I18nStore-CXxqSOxg.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(p,{})]})}function Ct(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{Ct as default};
