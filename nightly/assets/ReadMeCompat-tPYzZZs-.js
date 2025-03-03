import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as r,a as m}from"./index-DCcMNn1W.js";import"./index-18Ltli4F.js";import"./index-D4jarlPL.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./DocsRenderer-CFRXHY34-06-yitYQ.js";import"./Button-BJcyuOZ-.js";import"./jsx-runtime-28PG-PhA.js";import"./copy-C343vs9R.js";import{F as p}from"./CommandsAndQueries-Ci34skZW.js";import{T as a}from"./TableOfContent-Bzt3eeAv.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import"./iframe-zBN9Bir6.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-BA-Z5X-C.js";import"./CustomElementsScope-D32jWln6.js";import"./Keys-BF9NgJbR.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./i18n-defaults-DIUd5-_G.js";import"./index-B-pEBbkX.js";import"./react-18-CYWbi7Zg.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Bx3SO0r_.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B5S_P2i6.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-DTbqhkR9.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BvrMpJPf.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./index-bFKXvhrZ.js";import"./I18nStore-CY8kcvKW.js";const s=`# @ui5/webcomponents-react-compat

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
