import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-BxVt_j7t.js";import{ae as r,ag as m}from"./index-DB0Zg7mC.js";import"./index-C009Ii_l.js";import"./index-g-Yd3iiR.js";import"./TagDesign-Dou_yO3g.js";import"./index-B7gF9TUu.js";import"./index-CE_NGgsP.js";import"./chunk-NUUEMKO5-4LuBKyen.js";import"./Button-C6xYvRbu.js";import"./withWebComponent-CEvNJu7C.js";import"./copy-C7Fphd8b.js";import{F as p}from"./CommandsAndQueries-B7LA7KbL.js";import{T as a}from"./TableOfContent-DCqtbPc-.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import"./iframe-rc5fvl41.js";import"../sb-preview/runtime.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./Keys-CAuuEE_3.js";import"./utils-BPMdnTU-.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./i18n-defaults-DteWAmDn.js";import"./client-DPlujwLe.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-vaKWw58t.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-CUd5UQ0Z.js";import"./Label-S_BgfXUY.js";import"./index-Yz8_Wo9H.js";import"./index-NbVlvM4j.js";import"./Link-2s4hefKa.js";import"./index-ClFOKzxg.js";import"./index-D8L7QTA6.js";import"./Text-CTrlD69_.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-BBLdTHsH.js";import"./BusyIndicator-CTFEFSn6.js";import"./index-7rUfxUBv.js";import"./index-D6lFKeEV.js";import"./Avatar-DMTAeY6x.js";import"./employee-B31iqtd8.js";import"./index-BAXw8wJa.js";import"./I18nStore-DnWKAes0.js";const s=`# @ui5/webcomponents-react-compat

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
`,t.jsx(p,{})]})}function jt(o={}){const{wrapper:e}={...n(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i()}export{jt as default};
