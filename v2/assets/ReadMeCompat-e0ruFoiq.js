import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as r,a as m}from"./index-DO1QNWcz.js";import"./index-WB2XAxZ3.js";import"./index-CxjBAjwm.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as a}from"./CommandsAndQueries-BAK_-YLg.js";import"./Button-COW9sgS-.js";import"./jsx-runtime-BvNWHM6A.js";import"./copy-gHwufZZP.js";import{T as p}from"./TableOfContent-lIiVb8Ys.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-C1L07-tE.js";import"./iframe-BqbQ8Kxe.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-Cx68SyXj.js";import"./CustomElementsScope-lRvT7iCm.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./decline-B3prtgTL.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-C2QpdGW_.js";import"./information-DpRbDwJs.js";import"./sys-enter-2-BNMrwyXi.js";import"./sys-enter-2-38y2ESjX.js";import"./alert-oRgA-QL-.js";import"./i18n-defaults-B8cpOtV2.js";import"./index-BVR6w1bU.js";import"./preview-mpf3CGKY.js";import"./DocsRenderer-CFRXHY34-Bdr4gyk7.js";import"./react-18-SRpBHcoT.js";import"./Popover-B5iz04rB.js";import"./PopupsCommon.css-Cwh_2soo.js";import"./FocusableElements-B2W9U87f.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ClsBPvBy.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CRT1e2Cp.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-N7C2bzZq.js";import"./index-COG6YSxr.js";import"./Label-CzWydTHE.js";import"./index-CefQb58Z.js";import"./index-BgcTZP3t.js";import"./Link-Aflf_nDA.js";import"./index-Db6vgSoj.js";import"./index-BxL7GqHK.js";import"./Text-DKB2PakJ.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-CzgbjJA9.js";import"./index-DlkEG479.js";import"./BusyIndicator-DTKZVX1f.js";import"./index-JrV9twbC.js";import"./index-DGjbv2L7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bi9EDez9.js";import"./index-g7HguGO_.js";import"./I18nStore-C3xHSFao.js";import"./Tooltips-BSX3YpE0.js";import"./EventProvider-ChtD9rRX.js";const s=`# @ui5/webcomponents-react-compat

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
