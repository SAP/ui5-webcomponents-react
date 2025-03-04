import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as r,a as m}from"./index-o1C7E52r.js";import"./index-BSyUicdy.js";import"./index-CzSYMmQB.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./DocsRenderer-CFRXHY34-DU6ywN0k.js";import"./Button-ByA1SsYZ.js";import"./jsx-runtime-D97XV8sh.js";import"./copy-DTrJKJyj.js";import{F as p}from"./CommandsAndQueries-CSzQ_44E.js";import{T as a}from"./TableOfContent-Bzt3eeAv.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BOwCdWYi.js";import"./iframe-DsB57b17.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-BCDdExWr.js";import"./ManagedStyles-BCO68z9u.js";import"./CustomElementsScope-DUj-UV8m.js";import"./Keys-DjLYsotv.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./decline-B6jD48Ye.js";import"./i18n-defaults-DCrxyi3I.js";import"./information-DV2AGhUW.js";import"./information-B_fD0mel.js";import"./sys-enter-2-8yiHyFC4.js";import"./sys-enter-2-3FJ7denB.js";import"./i18n-defaults-CmQf_FFT.js";import"./withWebComponent-BfnST9Sw.js";import"./index-B-pEBbkX.js";import"./react-18-CYWbi7Zg.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CYRaZPq9.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-RfvVyLvj.js";import"./PopupsCommon.css-CWTNNGZS.js";import"./FocusableElements-GjzXbghM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pRnz8BGg.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-tta-8L6d.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D5Lehdk0.js";import"./index-BBE5vJrD.js";import"./Label-B_yE8MRJ.js";import"./index-Dno20kSL.js";import"./index-DygVgSN6.js";import"./Link-DksYOIa5.js";import"./index-BtffljRr.js";import"./index-B5cMioGG.js";import"./Text-DVHHInte.js";import"./addCustomCSSWithScoping-CDsicyAT.js";import"./index-aJHEJiAx.js";import"./BusyIndicator-CjR-E_fs.js";import"./index-BsfhEIY9.js";import"./index-C0zzG69g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Boc3Tmse.js";import"./index-CImbSc_0.js";import"./I18nStore-SPUtoouk.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(p,{})]})}function St(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{St as default};
