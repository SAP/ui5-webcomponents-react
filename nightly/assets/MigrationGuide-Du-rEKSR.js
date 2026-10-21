import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-B0I9QUps.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s}from"./blocks-D4P5IKNV.js";import{g as c,i as l,t as u,u as d}from"./components-BAyU7DX7.js";function f(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Migration Guide`}),`
`,(0,m.jsx)(t.h1,{id:`migration-guide-v1-to-v2`,children:`Migration Guide (v1 to v2)`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/releases`,rel:`nofollow`,children:`the list of releases`}),`
or the `,(0,m.jsx)(t.a,{href:`?path=/docs/change-log--page`,children:`changelog`}),`.`]})}),`
`,(0,m.jsxs)(t.blockquote,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Older releases`}),(0,m.jsx)(t.br,{}),`
`,`This migration guide only covers breaking changes when updating from v1 to v2.
For migration guides for older releases, please refer to our `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/blob/main/docs/MigrationGuide.archive.md`,rel:`nofollow`,children:`Migration Guide Archive`}),`.`]}),`
`]}),`
`,(0,m.jsx)(c,{headingSelector:`h2, h3`,tocOverflowHeight:1250}),`
`,(0,m.jsx)(t.h2,{id:`ui5-web-components-migration-guide`,children:`UI5 Web Components Migration Guide`}),`
`,(0,m.jsxs)(t.p,{children:[`The breaking changes listed here only affect our codebase. Changes related solely to the underlying web component are `,(0,m.jsx)(t.strong,{children:`not`}),` tracked here.
For a complete list of breaking changes in UI5 Web Components, please refer to their `,(0,m.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/migration-guides/to-version-2/`,rel:`nofollow`,children:`Migration Guide`}),`.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.em,{children:[(0,m.jsx)(t.strong,{children:`Note:`}),` Our `,(0,m.jsx)(t.code,{children:`codemod`}),` covers changes from ui5-webcomponents as well.`]})}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.em,{children:[(0,m.jsx)(t.strong,{children:`Note:`}),` Setting the scoping suffix should be done before importing any components, as they use the suffix at the top-level of the module - meaning when a component is imported, the suffix has to be known.
For this to work, calling the method should be done in a separate module (e.g. scoping-config.js) and this module should be imported before any components are imported.`]})}),`
`,(0,m.jsx)(t.h2,{id:`codemod`,children:`Codemod`}),`
`,(0,m.jsx)(t.p,{children:`To make the migration to UI5 Web Components (for React) v2 easier,
we provide a codemod which tries to transform most of the breaking changes.`}),`
`,(0,m.jsx)(r,{hideCloseButton:!0,design:`Critical`,children:(0,m.jsxs)(m.Fragment,{children:[`The codemod is a best efforts attempt to help you migrate the breaking change. Please review the generated code thoroughly!`,(0,m.jsx)(t.br,{}),(0,m.jsx)(t.strong,{children:`Applying the codemod might break your code formatting, so please don't forget to run prettier and/or eslint after you've applied the codemod!`})]})}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-shell`,children:`npx @ui5/webcomponents-react-cli codemod --transform v2 \\
    --src ./path/to/src \\
    --typescript # only if you use TypeScript in your project, omit if you use JavaScript
`})}),`
`,(0,m.jsx)(t.h3,{id:`sap-devtoberfest-2024-session`,children:`SAP Devtoberfest 2024 session`}),`
`,(0,m.jsxs)(t.p,{children:[`In the `,(0,m.jsx)(t.a,{href:`https://www.youtube.com/watch?v=lvpN3eK39h8`,rel:`nofollow`,children:`SAP Devtoberfest 2024`}),` session, we showcased the most prominent new features in version 2 of UI5 Web Components and UI5 Web Components for React, and provided an example of how to migrate from version 1 to version 2 using our `,(0,m.jsx)(t.a,{href:`https://ui5.github.io/webcomponents-react/v2/?path=/docs/migration-guide--docs#codemod`,rel:`nofollow`,children:`Codemod`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`general-changes`,children:`General changes`}),`
`,(0,m.jsx)(t.h3,{id:`minimal-react-version`,children:`Minimal React Version`}),`
`,(0,m.jsxs)(t.p,{children:[`The minimum required `,(0,m.jsx)(t.code,{children:`react`}),` and `,(0,m.jsx)(t.code,{children:`react-dom`}),` version is now `,(0,m.jsx)(t.code,{children:`18.0.0`}),`.`]}),`
`,(0,m.jsx)(t.h3,{id:`ui5-web-components-enums-are-no-longer-exported`,children:`UI5 Web Components Enums are no longer exported`}),`
`,(0,m.jsx)(t.p,{children:`Previously, we created enums for all props that used multiple string values to set the corresponding design, mode, etc. Since enums for web components have been exported directly by UI5 Web Components for some time, we had been proxying the imports to avoid breaking changes.`}),`
`,(0,m.jsxs)(t.p,{children:[`With version 2, we took the opportunity to remove all proxied enums, so they must now be imported directly from `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents`}),` or the corresponding package.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Note:`}),` You can use our `,(0,m.jsx)(t.a,{href:`#codemod`,children:`Codemod`}),` to simplify the refactoring process.`]}),`
`,(0,m.jsx)(t.p,{children:`For example:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`// v1
import { ButtonDesign } from '@ui5/webcomponents-react';

// v2
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
`})}),`
`,(0,m.jsxs)(t.h3,{id:`removed-react-jss`,children:[`Removed `,(0,m.jsx)(t.code,{children:`react-jss`})]}),`
`,(0,m.jsxs)(t.p,{children:[`UI5 Web Components for React is no longer relying on `,(0,m.jsx)(t.code,{children:`react-jss`}),` internally, hence the dependency is now removed and the `,(0,m.jsx)(t.code,{children:`react-jss`}),` ThemeProvider is no longer rendered as part of our `,(0,m.jsx)(t.code,{children:`ThemeProvider`}),`.
If you are relying on `,(0,m.jsx)(t.code,{children:`react-jss`}),` in your application, please make sure to render your own `,(0,m.jsx)(t.code,{children:`react-jss`}),` ThemeProvider:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { ThemeProvider } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';

function MyRootComponent() {
  return (
    <ThemeProvider>
      <ReactJssThemeProvider theme={ThemingParameters}>{/* your app content goes here */}</ReactJssThemeProvider>
    </ThemeProvider>
  );
}
`})}),`
`,(0,m.jsxs)(t.h3,{id:`removed-jestsetup-file`,children:[`Removed `,(0,m.jsx)(t.code,{children:`jestSetup`}),` file`]}),`
`,(0,m.jsxs)(t.p,{children:[`We stopped recommending jest as a testing framework over a year ago, thus the `,(0,m.jsx)(t.code,{children:`jestSetup`}),` file is removed. We recommend using `,(0,m.jsx)(t.a,{href:`https://ui5.github.io/webcomponents-react/?path=/docs/testing-with-cypress-setup--docs`,rel:`nofollow`,children:`Cypress`}),` instead.`]}),`
`,(0,m.jsx)(t.h3,{id:`changes-exclusive-to-typescript`,children:`Changes Exclusive to TypeScript`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Removed `,(0,m.jsx)(t.code,{children:`dangerouslySetInnerHTML`}),` from general prop types since it was never intended to be used with our library.
If you've previously used this prop and the component didn't change with the update, then it might still work, but you'll probably need to suppress the TypeScript error.`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`scrollbar-styling`,children:`Scrollbar Styling`}),`
`,(0,m.jsxs)(t.p,{children:[`Starting with v2, the `,(0,m.jsx)(t.code,{children:`ThemeProvider`}),` will apply the Fiori styles to all scrollbars on the page.
If you have previously used our global style classes `,(0,m.jsx)(t.code,{children:`sapScrollBar`}),` or `,(0,m.jsx)(t.code,{children:`inheritingSapScrollBar`}),`, you can now remove them.`]}),`
`,(0,m.jsxs)(t.p,{children:[`To opt-out of this behavior, you can add the `,(0,m.jsx)(t.code,{children:`.ui5-content-native-scrollbars`}),` class to the element to prevent the scrollbar styling from being applied.`]}),`
`,(0,m.jsxs)(t.p,{children:[`More details can be found in our `,(0,m.jsx)(t.a,{href:`?path=/docs/knowledge-base-styling--docs#scrollbars`,children:`Styling Knowledge Base`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`spacing`}),` variables of our base package (`,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-base`}),`) have been removed.
Most variables can be replaced by applying the corresponding CSS classes from the `,(0,m.jsx)(t.code,{children:`@sap-ui/common-css`}),` package to your element, for all others you can find the respective CSS properties and values below.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Full Documentation of Common CSS classes:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`https://sap.github.io/fundamental-styles/?path=/docs/common-css-margins--docs`,rel:`nofollow`,children:`Margins`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.a,{href:`https://sap.github.io/fundamental-styles/?path=/docs/common-css-padding--docs`,rel:`nofollow`,children:`Paddings`})}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`common-css-substitute-classes`,children:`Common CSS substitute classes`}),`
`,(0,m.jsxs)(`details`,{children:[(0,m.jsx)(`summary`,{children:`Show`}),(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Removed Variable`}),(0,m.jsx)(t.th,{children:`Equivalent Common CSS Class`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`All Around Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Single Side Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginTop`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-top-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginTop`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-top-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginTop`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-top-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginTop`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-top-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-bottom-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-bottom-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-bottom-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-bottom-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginBegin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-begin-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginBegin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-begin-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginBegin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-begin-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginBegin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-begin-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-end-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-end-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-end-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-end-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Horizontal Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-x-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-x-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-x-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-x-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Vertical Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyMarginTopBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-y-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallMarginTopBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-y-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumMarginTopBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-y-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeMarginTopBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-y-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Responsive Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiResponsiveMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-responsive`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Negative Margins`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyNegativeMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-tiny-negative`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallNegativeMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-small-negative`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumNegativeMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-medium-negative`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargeNegativeMarginBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-margin-large-negative`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`All Around Padding`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiContentPadding`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Responsive Paddings`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiResponsiveContentPadding`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-responsive`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`Horizontal Paddings`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiTinyPaddingBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-x-tiny`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiSmallPaddingBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-x-small`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiMediumPaddingBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-x-medium`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiLargePaddingBeginEnd`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-x-large`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.strong,{children:`No Padding`})}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiNoContentPadding`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`.sap-padding-none`})})]})]})]})]}),`
`,(0,m.jsx)(t.h3,{id:`removed-variables-without-substitute`,children:`Removed variables without substitute`}),`
`,(0,m.jsxs)(`details`,{children:[(0,m.jsx)(`summary`,{children:`Show`}),(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Removed Variable`}),(0,m.jsx)(t.th,{children:`Property and Value`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiNoMargin`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`margin: 0 !important;`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiNoMarginTop`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`margin-top: 0 !important;`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiNoMarginBottom`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`margin-bottom: 0 !important;`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sapUiForceWidthAuto`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`width: auto !important;`})})]})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`removed-hooks`,children:`Removed hooks`}),`
`,(0,m.jsx)(t.h3,{id:`useresponsivecontentpadding`,children:(0,m.jsx)(t.code,{children:`useResponsiveContentPadding`})}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`useResponsiveContentPadding`}),` hook has been removed.
You can now apply responsive content paddings by applying the `,(0,m.jsx)(t.code,{children:`sap-content-paddings-container`}),` class from `,(0,m.jsx)(t.code,{children:`@sap-ui/common-css`}),` package to your element.
You can find a more detailed documentation `,(0,m.jsx)(t.a,{href:`?path=/docs/knowledge-base-common-css--docs#content-paddings`,children:`here`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`removed-components`,children:`Removed Components`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableGroupRow`}),` has been removed.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`NotificationAction`}),` has been removed. You can use the `,(0,m.jsx)(t.code,{children:`Menu`}),` component instead.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`SelectMenu`}),` and `,(0,m.jsx)(t.code,{children:`SelectMenuOption`}),` have been removed. The `,(0,m.jsx)(t.code,{children:`Select`}),` and `,(0,m.jsx)(t.code,{children:`Option`}),` now allow custom content.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`MicroBarChart`}),` has been removed (from `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-charts`}),`) as it is not covered by design specs anymore.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`renamed-components`,children:`Renamed Components`}),`
`,(0,m.jsx)(t.p,{children:`With the release of UI5 Web Components v2, some component names have been renamed. Because we use these web component names (class names) as React component names, the renamings are considered breaking changes in our repository.`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.strong,{children:[`The list below shows only the previous and updated component names. For details on changes concerning attributes, properties, methods, etc., please refer to the `,(0,m.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/migration-guides/to-version-2/`,rel:`nofollow`,children:`UI5 Web Components Migration Guide`}),`.`]})}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Note:`}),` The tag name in the parenthesis is the `,(0,m.jsx)(t.strong,{children:`old`}),` tag name.`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`StandardListItem`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`ListItemStandard`}),` (`,(0,m.jsx)(t.code,{children:`ui5-li`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`CustomListItem`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`ListItemCustom`}),` (`,(0,m.jsx)(t.code,{children:`ui5-li-custom`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`MultiComboBoxGroupItem`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`MultiComboBoxItemGroup`}),` (`,(0,m.jsx)(t.code,{children:`ui5-mcb-group-item`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableColumn`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`TableHeaderCell`}),` (`,(0,m.jsx)(t.code,{children:`ui5-mcb-group-item`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Badge`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`Tag`}),` (`,(0,m.jsx)(t.code,{children:`ui5-tag`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`ComboBoxGroupItem`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`ComboBoxItemGroup`}),` (`,(0,m.jsx)(t.code,{children:`ui5-cb-group-item`}),`).`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`GroupHeaderListItem`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`ListItemGroup`}),` (`,(0,m.jsx)(t.code,{children:`ui5-li-groupheader`}),`).`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`replaced-components`,children:`Replaced Components`}),`
`,(0,m.jsx)(t.h3,{id:`analyticalcard`,children:`AnalyticalCard`}),`
`,(0,m.jsxs)(t.p,{children:[`The deprecated `,(0,m.jsx)(t.code,{children:`AnalyticalCard`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`Card`}),` web component as a drop-in replacement:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// v1
import { AnalyticalCard, AnalyticalCardHeader } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <AnalyticalCard header={<AnalyticalCardHeader />}>
      <span>My Content</span>
    </AnalyticalCard>
  );
}

// v2
import { AnalyticalCardHeader, Card } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <Card header={<AnalyticalCardHeader />}>
      <span>My Content</span>
    </Card>
  );
}
`})}),`
`,(0,m.jsx)(t.h3,{id:`dynamicpage`,children:`DynamicPage`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`DynamicPage`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`ui5-dynamic-page`}),` web component. This comes with a few breaking changes:`]}),`
`,(0,m.jsx)(t.h4,{id:`replaced-props`,children:`Replaced Props`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`backgroundDesign`}),` is not available anymore. To set the background of the page you can use standard CSS and the respective CSS variables instead:`,`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`List:`}),` `,(0,m.jsx)(t.code,{children:`var(--sapGroup_ContentBackground)`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Solid:`}),` `,(0,m.jsx)(t.code,{children:`var(--sapBackgroundColor)`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Transparent:`}),` `,(0,m.jsx)(t.code,{children:`transparent`})]}),`
`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`alwaysShowContentHeader`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`headerPinned`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerCollapsed`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`headerSnapped`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerContentPinnable`}),` (default: `,(0,m.jsx)(t.code,{children:`true`}),`) has been replaced by `,(0,m.jsx)(t.code,{children:`hidePinButton`}),` (default: `,(0,m.jsx)(t.code,{children:`false`}),`)`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`footer`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`footerArea`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`}),`. To display the footer, you now have to set the `,(0,m.jsx)(t.code,{children:`showFooter`}),` prop to `,(0,m.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerContent`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`headerArea`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerTitle`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`titleArea`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`})]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Events:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onPinnedStateChange`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`onPinButtonToggle`}),`.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onToggleHeaderContent`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`onTitleToggle`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`// v1
function DynamicPageComponent(props) {
  const [pinned, setPinned] = useState(false);
  const [expanded, setExpanded] = useState(true);
  return (
    <DynamicPage
      {...props}
      onPinnedStateChange={(pinned) => setPinned(pinned)}
      onToggleHeaderContent={(visible) => {
        setExpanded(visible);
      }}
    />
  );
}

// v2
function DynamicPageComponent(props) {
  const [pinned, setPinned] = useState(false);
  const [expanded, setExpanded] = useState(true);
  return (
    <DynamicPage
      {...props}
      onPinButtonToggle={(event) => setPinned(event.target.headerPinned)}
      onTitleToggle={(event) => {
        setExpanded(!event.target.headerSnapped);
      }}
    />
  );
}
`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h4,{id:`removed-props`,children:`Removed Props`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`preserveHeaderStateOnScroll`}),`: You should be able to achieve the same behavior with the `,(0,m.jsx)(t.code,{children:`headerPinned`}),` prop.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`showHideHeaderButton`}),`: Hiding the expand/collapse button is not supported by design anymore.`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dynamicpageheader`,children:`DynamicPageHeader`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`DynamicPageHeader`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`ui5-dynamic-page-header`}),` web component.
Since the `,(0,m.jsx)(t.code,{children:`ObjectPage`}),` isn't compatible with the `,(0,m.jsx)(t.code,{children:`DynamicPageHeader`}),` web component, please use the `,(0,m.jsx)(t.code,{children:`ObjectPageHeader`}),` component in the `,(0,m.jsx)(t.code,{children:`ObjectPage`}),` instead.`]}),`
`,(0,m.jsx)(t.h3,{id:`dynamicpagetitle`,children:`DynamicPageTitle`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`DynamicPageTitle`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`ui5-dynamic-page-title`}),` web component. This comes with a few breaking changes listed below.
Since the `,(0,m.jsx)(t.code,{children:`ObjectPage`}),` isn't compatible with the `,(0,m.jsx)(t.code,{children:`DynamicPageTitle`}),` web component, please use the `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` component in the `,(0,m.jsx)(t.code,{children:`ObjectPage`}),` instead.`]}),`
`,(0,m.jsx)(t.h4,{id:`replaced-props-1`,children:`Replaced Props`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`actions`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`actionsBar`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`}),`. Instead of passing actions (e.g. `,(0,m.jsx)(t.code,{children:`Buttons`}),`) directly, it is now recommended to use the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component in order to preserve the intended design.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`navigationActions`}),` has been replaced by `,(0,m.jsx)(t.code,{children:`navigationBar`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`}),`. Instead of passing actions (e.g. `,(0,m.jsx)(t.code,{children:`Buttons`}),`) directly, it is now recommended to use the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component in order to preserve the intended design.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`subHeader`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`subheading`}),` and is now a slot.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`header`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`heading`}),` and is now a `,(0,m.jsx)(t.code,{children:`slot`}),`. The `,(0,m.jsx)(t.code,{children:`font-size`}),` isn't automatically adjusted anymore, so to keep the intended design you can leverage the new `,(0,m.jsx)(t.code,{children:`snappedHeading`}),` prop and apply the corresponding CSS Variables yourself. (see example below)`]}),`
`,(0,m.jsx)(t.p,{children:`Example:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<DynamicPageTitle
  heading={<Title style={{ fontSize: 'var(--sapObjectHeader_Title_FontSize)' }}>Header Title</Title>}
  snappedHeading={
    <Title style={{ fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)' }}>Snapped Header Title</Title>
  }
/>
`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h4,{id:`removed-props-1`,children:`Removed Props`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`showSubHeaderRight`}),` is not defined by the global design guidelines and is therefore not available with the new web component.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`actionsToolbarProps`}),` is not necessary anymore, as you now can pass a `,(0,m.jsx)(t.code,{children:`Toolbar`}),` yourself.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`navigationActionsToolbarProps`}),` is not necessary anymore, as you now can pass a `,(0,m.jsx)(t.code,{children:`Toolbar`}),` yourself.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`expandedContent`}),` is now part of the `,(0,m.jsx)(t.code,{children:`subheading`}),` prop, so if you've rendered a `,(0,m.jsx)(t.code,{children:`MessageStrip`}),` below the `,(0,m.jsx)(t.code,{children:`subHeader`}),` for example, you can now render the subheading and additional content both in the same slot.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`snappedContent`}),` is now part of the `,(0,m.jsx)(t.code,{children:`snappedSubheading`}),` prop, so if you've rendered a `,(0,m.jsx)(t.code,{children:`MessageStrip`}),` below the `,(0,m.jsx)(t.code,{children:`subHeader`}),` for example, you can now render the subheading and additional content both in the same slot.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Example for combined `,(0,m.jsx)(t.code,{children:`subHeader`}),` and `,(0,m.jsx)(t.code,{children:`expanded/snappedContent`}),` in `,(0,m.jsx)(t.code,{children:`subheading`}),`/`,(0,m.jsx)(t.code,{children:`snappedSubheading`}),`:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`<DynamicPageTitle
  subheading={
    <>
      <Label>Subheader</Label>
      <MessageStrip>Information (only visible if header content is expanded)</MessageStrip>
    </>
  }
  snappedSubheading={
    <>
      <Label>Snapped Subheader</Label>
      <MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>
    </>
  }
/>
`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`form`,children:`Form`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`Form`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`ui5-form`}),` Web Component.
You can use the new `,(0,m.jsx)(t.code,{children:`Form`}),` component as a feature complete replacement of the old Form component with the important differences to mention:`]}),`
`,(0,m.jsxs)(t.ol,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The `,(0,m.jsx)(t.code,{children:`ui5-form`}),` web component doesn't implement the events, attributes and properties of an HTML `,(0,m.jsx)(t.code,{children:`form`}),` element. So, if you want these features to be available, we recommend wrapping the `,(0,m.jsx)(t.code,{children:`Form`}),` component inside a HTML `,(0,m.jsx)(t.code,{children:`form`}),` element.`]}),`
`,(0,m.jsxs)(t.li,{children:[`You can't mix `,(0,m.jsx)(t.code,{children:`FormGroup`}),`s and `,(0,m.jsx)(t.code,{children:`FormItem`}),`s as children of the Form. Either only use `,(0,m.jsx)(t.code,{children:`FormItem`}),`s or only `,(0,m.jsx)(t.code,{children:`FormGroup`}),`s with `,(0,m.jsx)(t.code,{children:`FormItem`}),`s inside.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Additional HTML elements between `,(0,m.jsx)(t.code,{children:`Form / FormGroup / FormItem`}),` are not allowed. You can still use custom React components if they render a `,(0,m.jsx)(t.code,{children:`FormGroup`}),` or `,(0,m.jsx)(t.code,{children:`FormItem`}),` as most outer element (or a fragment).`]}),`
`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// v1
import { Form, FormGroup, FormItem } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <Form
      backgroundDesign="Solid"
      titleText="My Form"
      labelSpanS={1}
      labelSpanM={2}
      labelSpanL={3}
      labelSpanXL={4}
      columnsS={1}
      columnsM={2}
      columnsL={3}
      columnsXL={4}
      as={'form'}
      onSubmit={(e) => {
        /*handleSubmit*/
      }}
    >
      <FormGroup titleText="My Form Group" as="h5">
        <FormItem label={'MyLabel'}>{/* FormItem Content */}</FormItem>
      </FormGroup>
    </Form>
  );
}

// v2
import { Form, FormGroup, FormItem, Label } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    // To implement HTML form features, use the \`form\` element
    <form
      onSubmit={(e) => {
        /*handleSubmit*/
      }}
    >
      {/* \`backgroundDesign\` and \`as\` have been removed without replacement */}
      <Form
        // \`titleText\` has been renamed to \`headerText\`
        headerText="My Form"
        // the \`columnsX\` props have been merged into the \`layout\` string
        layout="S1 M2 L3 XL4"
        // the \`labelSpanX\` props have been merged into the \`labelSpan\` string
        labelSpan="S1 M2 L3 XL4"
      >
        {/* \`titleText\` has been renamed to \`headerText\`, \`as\` has been removed */}
        <FormGroup headerText="My Form Group">
          {/* the \`label\` prop has been renamed to a \`labelContent\` slot.
             It doesn't support strings anymore, it's recommended to use the \`Label\` component in this slot. */}
          <FormItem labelContent={<Label>MyLabel</Label>}>{/* FormItem Content */}</FormItem>
        </FormGroup>
      </Form>
    </form>
  );
}
`})}),`
`,(0,m.jsx)(t.h3,{id:`loader`,children:`Loader`}),`
`,(0,m.jsxs)(t.p,{children:[`There is no longer a concept of a Loader component defined by the UX guidelines. To indicate a loading state, it is now recommended using the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),` instead.
For backwards compatibility, the Loader is still available in the `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-compat`}),` package, but it may lack accessibility features and no longer receives feature updates.`]}),`
`,(0,m.jsxs)(t.h4,{id:`replacing-loader-with-busyindicator`,children:[`Replacing `,(0,m.jsx)(t.code,{children:`Loader`}),` with `,(0,m.jsx)(t.code,{children:`BusyIndicator`})]}),`
`,(0,m.jsxs)(t.p,{children:[`Unfortunately, there is no general rule of thumb for how to replace the `,(0,m.jsx)(t.code,{children:`Loader`}),` component with the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),` component. In most cases it should be sufficient wrapping your component inside the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),`, as shown below:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`// v1

<Card header={<CardHeader titleText="Card Header" />}>
  <Loader />
  <div style={{ height: '400px', padding: '1rem' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis tristique, molestie tellus id, rutrum
    urna. Quisque mattis risus imperdiet gravida accumsan. Proin elementum efficitur diam eu interdum.
  </div>
</Card>

// v2

<Card header={<CardHeader titleText="Card Header" />}>
  <BusyIndicator active delay={0}>
    <div style={{ height: '400px', padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis tristique, molestie tellus id,
      rutrum urna. Quisque mattis risus imperdiet gravida accumsan. Proin elementum efficitur diam eu interdum.
    </div>
  </BusyIndicator>
</Card>
`})}),`
`,(0,m.jsxs)(t.p,{children:[`However, for components that apply complex styles such as `,(0,m.jsx)(t.code,{children:`absolute/fixed`}),` positioning, this might not be the case, as the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),` brings its own set of styles.
In such instances, we recommend positioning the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),` above the element that should receive a loading indicator e.g. via `,(0,m.jsx)(t.code,{children:`position: absolute`}),`.
If you encounter any issues migrating to the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),`, please feel free to reach out via `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/discussions`,rel:`nofollow`,children:`GitHub Discussions`}),` or create an `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/issues/new/choose`,rel:`nofollow`,children:`Issue`}),` if the behavior seems like a bug.`]}),`
`,(0,m.jsxs)(t.h4,{id:`keep-the-loader`,children:[`Keep the `,(0,m.jsx)(t.code,{children:`Loader`})]}),`
`,(0,m.jsxs)(t.p,{children:[`If you'd like to keep the `,(0,m.jsx)(t.code,{children:`Loader`}),` component instead of the `,(0,m.jsx)(t.code,{children:`BusyIndicator`}),` component, you now need to include the `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-compat`}),` package in your dependencies and adjust all import paths accordingly:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
import { Loader } from '@ui5/webcomponents-react';

// v2
import { Loader } from '@ui5/webcomponents-react-compat';
`})}),`
`,(0,m.jsx)(t.h3,{id:`text`,children:`Text`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`Text`}),` component has been replaced with the `,(0,m.jsx)(t.code,{children:`ui5-text`}),` Web Component.`]}),`
`,(0,m.jsx)(t.p,{children:`The following props have been removed:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`wrapping`}),`
Can be achieved via the `,(0,m.jsx)(t.code,{children:`maxLines`}),` property. If `,(0,m.jsx)(t.code,{children:`maxLines`}),` is set to `,(0,m.jsx)(t.code,{children:`1`}),`, the text will not wrap, otherwise it will wrap.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`renderWhitespace`}),`
Can be achieved by adding `,(0,m.jsx)(t.code,{children:`white-space: pre-wrap;`}),` via inline styles or `,(0,m.jsx)(t.code,{children:`className`}),` to the `,(0,m.jsx)(t.code,{children:`Text`}),` component.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`hyphenated`}),` and `,(0,m.jsx)(t.code,{children:`emptyIndicator`}),`
These props are currently not supported by the new `,(0,m.jsx)(t.code,{children:`ui5-text`}),` component. You can follow this `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents/issues/9244`,rel:`nofollow`,children:`feature request`}),` for updates.`]}),`
`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// v1
import { Text } from '@ui5/webcomponents-react';

function MyComponent() {
  return <Text wrapping={false}>Lorem Impsum</Text>;
}

// v2
import { Text } from '@ui5/webcomponents-react';

function MyComponent() {
  return <Text maxLines={1}>Lorem Impsum</Text>;
}
`})}),`
`,(0,m.jsx)(t.h3,{id:`toolbar`,children:`Toolbar`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component has been replaced with the UI5 Web Components Toolbar component (which was previously exported in this project as `,(0,m.jsx)(t.code,{children:`ToolbarV2`}),`).
The old `,(0,m.jsx)(t.code,{children:`Toolbar`}),` implementation has been moved to the `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-compat`}),` package with all its subcomponents:`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.code,{children:`ToolbarSeparator`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.code,{children:`ToolbarSpacer`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.code,{children:`OverflowToolbarButton`})}),`
`,(0,m.jsx)(t.li,{children:(0,m.jsx)(t.code,{children:`OverflowToolbarToggleButton`})}),`
`,(0,m.jsxs)(t.li,{children:[`enum `,(0,m.jsx)(t.code,{children:`ToolbarDesign`})]}),`
`,(0,m.jsxs)(t.li,{children:[`enum `,(0,m.jsx)(t.code,{children:`ToolbarStyle`})]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Although the old `,(0,m.jsx)(t.code,{children:`Toolbar`}),` is still available in the `,(0,m.jsx)(t.code,{children:`@ui5/webcomponents-react-compat`}),` package, we strongly recommend to migrate to the new `,(0,m.jsx)(t.code,{children:`Toolbar`}),` instead.`]}),`
`,(0,m.jsxs)(t.p,{children:[`As the new `,(0,m.jsx)(t.code,{children:`Toolbar`}),` is a completely different component, we can't offer a proper migration guide, so it's best to check the `,(0,m.jsx)(t.a,{href:`?path=/docs/layouts-floorplans-toolbar--docs`,children:`Toolbar documentation`}),` and update your implementation accordingly with the new components.`]}),`
`,(0,m.jsx)(t.h2,{id:`components-with-api-changes`,children:`Components with API Changes`}),`
`,(0,m.jsx)(t.h3,{id:`actionsheet`,children:`ActionSheet`}),`
`,(0,m.jsxs)(t.p,{children:[`The prop `,(0,m.jsx)(t.code,{children:`portalContainer`}),` has been removed as it is no longer needed due to the `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`popover API`}),` which is now used in the UI5 Web Components.
For a better aligned API, the `,(0,m.jsx)(t.code,{children:`showCancelButton`}),` prop has been replaced with the `,(0,m.jsx)(t.code,{children:`hideCancelButton`}),` prop and the logic has been inverted. Also, the `,(0,m.jsx)(t.code,{children:`a11yConfig`}),` prop has been renamed to `,(0,m.jsx)(t.code,{children:`accessibilityAttributes`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// v1
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet showCancelButton={false} a11yConfig={{ actionSheetMobileContent: { role: 'menu' } }}>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}

// v2
import { ActionSheet, Button } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <ActionSheet hideCancelButton accessibilityAttributes={{ actionSheetMobileContent: { role: 'menu' } }}>
      <Button>Action 1</Button>
    </ActionSheet>
  );
}
`})}),`
`,(0,m.jsx)(t.h3,{id:`analyticaltable`,children:`AnalyticalTable`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`TypeScript Changes:`})}),`
`,(0,m.jsx)(t.p,{children:`The internal table instance types were updated, leading to stricter types, so depending on your implementation, you might encounter ts-errors.`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Renamed or Changed Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`alwaysShowSubComponent`}),` has been removed, please use `,(0,m.jsx)(t.code,{children:`subComponentsBehavior`}),` with `,(0,m.jsx)(t.code,{children:`AnalyticalTableSubComponentsBehavior.Visible`}),` instead.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The default value of `,(0,m.jsx)(t.code,{children:`sortable`}),` (`,(0,m.jsx)(t.code,{children:`true`}),`) has been removed. To allow sorting in your table please set `,(0,m.jsx)(t.code,{children:`sortable`}),` to `,(0,m.jsx)(t.code,{children:`true`}),` yourself.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Removed Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`portalContainer`}),` has been removed as it's no longer needed due to the `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),` used in the `,(0,m.jsx)(t.code,{children:`Popover`}),` ui5 web component.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Changed Events:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onRowSelect`}),`: Since calculating `,(0,m.jsx)(t.code,{children:`selectedFlatRows`}),` was very costly, it has been removed from the `,(0,m.jsx)(t.code,{children:`detail`}),` event object. If you still want to use it, you can calculate it yourself:`]}),`
`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`const handleOnRowSelect = (event) => {
  const { selectedRowIds, rowsById } = event.detail;
  const selectedFlatRows = Object.keys(selectedRowIds).reduce((acc, key) => {
    if (selectedRowIds[key]) {
      acc.push(rowsById[key]);
    }
    return acc;
  }, []);
  console.log(selectedFlatRows);
};
`})}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Renamed Enums:`})}),`
`,(0,m.jsx)(t.p,{children:`Names of the following enums have changed:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableScaleWidthMode`}),` is now `,(0,m.jsx)(t.code,{children:`AnalyticalTableScaleWidthMode`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableSelectionBehavior`}),` is now `,(0,m.jsx)(t.code,{children:`AnalyticalTableSelectionBehavior`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableSelectionMode`}),` is now `,(0,m.jsx)(t.code,{children:`AnalyticalTableSelectionMode`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`TableVisibleRowCountMode`}),` is now `,(0,m.jsx)(t.code,{children:`AnalyticalTableVisibleRowCountMode`})]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Changed Enums:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The properties and values for the `,(0,m.jsx)(t.code,{children:`AnalyticalTableSelectionMode`}),` enum has been changed.`,`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`SingleSelect`}),` is now `,(0,m.jsx)(t.code,{children:`Single`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`MultiSelect`}),` is now `,(0,m.jsx)(t.code,{children:`Multiple`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.strong,{children:[(0,m.jsx)(t.a,{href:`?path=/docs/data-display-analyticaltable--docs#column-properties`,children:`Column Properties`}),` Changes`]})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`canReorder`}),` has been removed, please use `,(0,m.jsx)(t.code,{children:`disableDragAndDrop`}),` instead.`]}),`
`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`// v1
const columns = [{ ...otherProperties, canReorder: false }];

<AnalyticalTable
  {...otherProps}
  columns={columns}
  alwaysShowSubComponent
  scaleWidthMode={TableScaleWidthMode.Grow}
  selectionBehavior={TableSelectionBehavior.Row}
  selectionMode={TableSelectionMode.MultiSelect}
  // selectionMode={TableSelectionMode.SingleSelect}
  visibleRowCountMode={TableVisibleRowCountMode.Interactive}
/>;

// v2
const columns = [{ ...otherProps, disableDragAndDrop: true }];

<AnalyticalTable
  {...otherProps}
  columns={columns}
  subComponentsBehavior={AnalyticalTableSubComponentsBehavior.Visible}
  scaleWidthMode={AnalyticalTableScaleWidthMode.Grow}
  selectionBehavior={AnalyticalTableSelectionBehavior.Row}
  selectionMode={AnalyticalTableSelectionMode.Multiple}
  // selectionMode={AnalyticalTableSelectionMode.Single}
  visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Interactive}
/>;
`})}),`
`,(0,m.jsx)(t.h3,{id:`expandable-text`,children:`Expandable Text`}),`
`,(0,m.jsxs)(t.p,{children:[`The prop `,(0,m.jsx)(t.code,{children:`portalContainer`}),` has been removed as it is no longer needed due to the `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`popover API`}),` which is now used in the UI5 Web Components.
As the underlying `,(0,m.jsx)(t.code,{children:`Text`}),` component has been replaced with the UI5 Web Component, some inherited props `,(0,m.jsx)(t.code,{children:`hyphenated`}),` and `,(0,m.jsx)(t.code,{children:`emptyIndicator`}),` from the `,(0,m.jsx)(t.code,{children:`Text`}),` component have been removed.
You can follow this `,(0,m.jsx)(t.a,{href:`https://github.com/UI5/webcomponents/issues/9244`,rel:`nofollow`,children:`feature request`}),` for updates.`]}),`
`,(0,m.jsx)(t.h3,{id:`filterbar`,children:`FilterBar`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`FilterBar`}),` component has been completely overhauled, eliminating reference copying of input/filter elements as well as internal selection and reordering, which resulted in API changes for events.
These changes were made to remove (React) anti-patterns and improve the component's performance and maintainability. Below, you'll find descriptions of what each point entails:`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Reference Copying:`}),` Previously, the `,(0,m.jsx)(t.code,{children:`FilterBar`}),` copied the `,(0,m.jsx)(t.code,{children:`children`}),`, `,(0,m.jsx)(t.code,{children:`values`}),`, and other properties of input components like `,(0,m.jsx)(t.code,{children:`Input`}),` or `,(0,m.jsx)(t.code,{children:`MultiComboBox`}),` to the filters dialog. Since this occurred outside the React lifecycle, it could be considered an anti-pattern.
Synchronizing these references was complex, requiring dedicated logic for most UI5 Web Component input components. Additionally, many implementations likely fully control the component, making reference copying redundant.
For these reasons, we decided to remove this functionality and developers should now manage input values directly, for example, using React state. This has the advantage, that you can use every input component and not only UI5 Web Components (although that's still recommended).`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Selection & Reordering:`}),` In V1, the selection and reordering features applied user changes internally to the `,(0,m.jsx)(t.code,{children:`FilterBar`}),`. This meant that if a user selected a filter in the filters dialog, the change was also reflected in the `,(0,m.jsx)(t.code,{children:`FilterBar`}),`.
This approach proved problematic when the component was fully controlled externally, leading to synchronization issues between internal and external changes. Additionally, with the introduction of the V2 `,(0,m.jsx)(t.code,{children:`Table`}),` component from UI5 Web Components, which has updated API and markup, some changes to the event API were necessary.
The advantage of the new approach is, that developers can now decide how and when changes are applied, such as only after closing the filters dialog or as live updates.`]}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h4,{id:`interactive-example`,children:`Interactive Example`}),`
`,(0,m.jsx)(l,{}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(t.h5,{id:`code`,children:`Code`}),`
`,(0,m.jsxs)(`details`,{children:[(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`const initialState = {
  age: 37,
  countries: {},
  currency: 'USD',
  date: '',
  search: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_STATE':
      return { ...state, ...action.payload };
    case 'DIALOG_RESTORE':
      return action.payload;
    default:
      return state;
  }
}

export function FilterBarExample() {
  const [filterState, dispatch] = useReducer(reducer, initialState);
  const { age, countries, currency, date, search } = filterState;
  const dialogStateRef = useRef({});
  const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<Record<string, boolean>>({
    '0': true,
    '1': true,
    '2': true
  });
  const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3']);

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };
  const handleAgeChange = (e) => {
    const { value } = e.target;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.age = value;
    } else {
      dispatch({ type: 'SET_AGE', payload: value });
    }
  };

  const handleCountriesChange = (e) => {
    const newCountries = e.detail.items.reduce((acc, cur) => {
      return { ...acc, [cur.getAttribute('text').toLowerCase()]: true };
    }, {});
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.countries = newCountries;
    } else {
      dispatch({ type: 'SET_COUNTRIES', payload: newCountries });
    }
  };

  const handleCurrencyChange = (e) => {
    const currency = e.detail.selectedOption.textContent;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.currency = currency;
    } else {
      dispatch({ type: 'SET_CURRENCY', payload: currency });
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.date = value;
    } else if (e.detail.valid) {
      dispatch({ type: 'SET_DATE', payload: value });
    }
  };

  const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = (e) => {
    setOrderedFilterKeys(e.detail.reorderedFilterKeys);
    setVisibleChildrenByKey(
      e.detail.selectedFilterKeys.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
      }, {})
    );
    dispatch({ type: 'SET_STATE', payload: dialogStateRef.current });
  };

  return (
    <ThemeProvider>
      <Text>
        The FilterBar applies filter changes inside the FilterBar immediately and inside the dialog only after 'OK' has
        been pressed.
      </Text>
      <FilterBar
        header={
          <Title level={TitleLevel.H2} size={TitleLevel.H4}>
            Apply changes after dialog save
          </Title>
        }
        enableReordering
        onFiltersDialogSave={handleFiltersDialogSave}
        search={<Input onInput={handleSearch} />}
      >
        {orderedFilterKeys.map((filterKey) => {
          const isHidden = !visibleChildrenByKey[filterKey];
          switch (filterKey) {
            case '0':
              return (
                <FilterGroupItem key={0} filterKey="0" label="Age" required>
                  <StepInput value={age} onChange={handleAgeChange} required />
                </FilterGroupItem>
              );
            case '1':
              return (
                <FilterGroupItem
                  key={1}
                  filterKey="1"
                  label="Countries"
                  active={Object.keys(countries).length > 0}
                  hiddenInFilterBar={isHidden}
                >
                  <MultiComboBox onSelectionChange={handleCountriesChange}>
                    <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
                    <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
                    <MultiComboBoxItem text="Finland" selected={countries.finland} />
                    <MultiComboBoxItem text="Germany" selected={countries.germany} />
                    <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
                    <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
                    <MultiComboBoxItem text="USA" selected={countries.usa} />
                  </MultiComboBox>
                </FilterGroupItem>
              );
            case '2':
              return (
                <FilterGroupItem
                  key={2}
                  filterKey="2"
                  label="Currency"
                  active={!!currency}
                  hiddenInFilterBar={isHidden}
                >
                  <Select onChange={handleCurrencyChange}>
                    <Option additionalText="€" selected={currency === 'EUR'}>
                      EUR
                    </Option>
                    <Option additionalText="$" selected={currency === 'USD'}>
                      USD
                    </Option>
                    <Option additionalText="£" selected={currency === 'GBP'}>
                      GBP
                    </Option>
                    <Option additionalText="₺" selected={currency === 'TRY'}>
                      TRY
                    </Option>
                    <Option additionalText="¥" selected={currency === 'JPY'}>
                      JPY
                    </Option>
                  </Select>
                </FilterGroupItem>
              );
            case '3':
              return (
                <FilterGroupItem key={3} filterKey="3" label="Date" active={!!date} hiddenInFilterBar={isHidden}>
                  <DatePicker value={date} onChange={handleDateChange} style={{ minWidth: 'auto' }} />
                </FilterGroupItem>
              );
            default:
              return null;
          }
        })}
      </FilterBar>
      <FlexBox direction={FlexBoxDirection.Column}>
        <FlexBox>
          <Label showColon>Search</Label>
          <Text>{search}</Text>
        </FlexBox>
        <FlexBox>
          <Label showColon>Age</Label>
          <Text>{age}</Text>
        </FlexBox>
        <FlexBox>
          <Label showColon>Countries</Label>
          <Text>{JSON.stringify(countries)}</Text>
        </FlexBox>
        <FlexBox>
          <Label showColon>Currency</Label>
          <Text>{currency}</Text>
        </FlexBox>
        <FlexBox>
          <Label showColon>Date</Label>
          <Text>{date}</Text>
        </FlexBox>
        <hr style={{ width: '100%' }} />
        <FlexBox>
          <Label showColon>Visible Filters</Label>
          <Text>{Object.keys(visibleChildrenByKey).join(', ')}</Text>
        </FlexBox>
        <FlexBox>
          <Label showColon>Filters Order</Label>
          <Text>{orderedFilterKeys.join(', ')}</Text>
        </FlexBox>
      </FlexBox>
    </ThemeProvider>
  );
}

`})}),(0,m.jsx)(`summary`,{children:`Show Code`})]}),`
`,(0,m.jsx)(t.h4,{id:`api-changes`,children:`API Changes`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`portalContainer`}),` has been removed as it's no longer needed due to the `,(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),` used in the `,(0,m.jsx)(t.code,{children:`Popover`}),` ui5 web component.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onToggleFilters`}),`: The `,(0,m.jsx)(t.code,{children:`detail`}),` property of the event now only includes `,(0,m.jsx)(t.code,{children:`visible`}),` and `,(0,m.jsx)(t.code,{children:`nativeDetail`}),` properties. `,(0,m.jsx)(t.code,{children:`filters`}),` and `,(0,m.jsx)(t.code,{children:`search`}),` have been removed.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
interface OnToggleFiltersEvent extends Omit<MouseEvent, 'detail'> {
  detail: { visible: boolean; filters: HTMLElement[]; search: HTMLElement; nativeDetail: number };
}
onToggleFilters?: (event: OnToggleFiltersEvent) => void;

// v2
interface OnToggleFiltersEvent extends Omit<MouseEvent, 'detail'> {
  detail: { visible: boolean; nativeDetail: number };
}
onToggleFilters?: (event: OnToggleFiltersEvent) => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogSave`}),`: The `,(0,m.jsx)(t.code,{children:`detail`}),` property of the event now only includes `,(0,m.jsx)(t.code,{children:`selectedFilterKeys`}),`, `,(0,m.jsx)(t.code,{children:`reorderedFilterKeys`}),` and `,(0,m.jsx)(t.code,{children:`nativeDetail`}),` properties. `,(0,m.jsx)(t.code,{children:`elements`}),`, `,(0,m.jsx)(t.code,{children:`toggledElements`}),`, `,(0,m.jsx)(t.code,{children:`filters`}),`, `,(0,m.jsx)(t.code,{children:`search`}),`, `,(0,m.jsx)(t.code,{children:`orderIds`}),` have been removed.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
interface OnFiltersDialogSaveEvent extends Omit<MouseEvent, 'detail'> {
  detail: {
    elements: Record<string, HTMLElement>;
    toggledElements?: Record<string, HTMLElement>;
    filters: HTMLElement[];
    search: HTMLElement;
    orderIds: string[];
    nativeDetail: number;
  };
}
onFiltersDialogSave?: (event: OnFiltersDialogSaveEvent) => void;

// v2
interface OnFiltersDialogSaveEvent extends Omit<MouseEvent, 'detail'> {
  detail: {
      selectedFilterKeys: string[];
      reorderedFilterKeys: string[];
      nativeDetail: number;
  };
}
onFiltersDialogSave?: (event: OnFiltersDialogSaveEvent) => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogCancel`}),`: The event is now a callback instead of a `,(0,m.jsx)(t.code,{children:`Ui5CustomEvent`}),`. It implements the `,(0,m.jsx)(t.code,{children:`escPressed`}),` parameter.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onFiltersDialogCancel?: (event: Ui5CustomEvent) => void;
// v2
onFiltersDialogCancel?: (escPressed: boolean) => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogClose`}),`: The event is now a callback instead of a `,(0,m.jsx)(t.code,{children:`Ui5CustomEvent`}),`. It implements the `,(0,m.jsx)(t.code,{children:`closeTrigger`}),` parameter.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onFiltersDialogClose?: (event: Ui5CustomEvent) => void;
// v2
interface FiltersDialogSelectionChangePayload {
  toggledFilterKeys: Set<string>;
  selected: boolean | undefined;
  selectedFilterKeys: Set<string>;
  previousSelectedFilterKeys: Set<string>;
}
onFiltersDialogClose?: (closeTrigger: 'cancelButtonPressed' | 'okButtonPressed' | 'escPressed') => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogSelectionChange`}),`: The event is now a callback instead of a `,(0,m.jsx)(t.code,{children:`Ui5CustomEvent`}),`. It implements a payload object as parameter.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onFiltersDialogSelectionChange?: (
  event: Ui5CustomEvent<
    TableSelectionDomRef,
    { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[] }
  >
) => void;
// v2
onFiltersDialogSelectionChange?: (payload: FiltersDialogSelectionChangePayload) => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogSearch`}),`: The event is now a standard `,(0,m.jsx)(t.code,{children:`Input`}),` `,(0,m.jsx)(t.code,{children:`onInput`}),` event. The `,(0,m.jsx)(t.code,{children:`detail`}),` properties `,(0,m.jsx)(t.code,{children:`value`}),` and `,(0,m.jsx)(t.code,{children:`element`}),` have been removed.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onFiltersDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
// v2
onFiltersDialogSearch?: InputPropTypes['onInput'];
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onClear`}),`: The event is now a standard `,(0,m.jsx)(t.code,{children:`ToolbarButton`}),` `,(0,m.jsx)(t.code,{children:`onClick`}),` event. The `,(0,m.jsx)(t.code,{children:`detail`}),` properties `,(0,m.jsx)(t.code,{children:`filters`}),` and `,(0,m.jsx)(t.code,{children:`search`}),` have been removed.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onClear?: (event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement }>) => void;
// v2
onClear?: ToolbarButtonPropTypes['onClick'];
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onGo`}),`: The event is now a standard `,(0,m.jsx)(t.code,{children:`ToolbarButton`}),` `,(0,m.jsx)(t.code,{children:`onClick`}),` event. The `,(0,m.jsx)(t.code,{children:`detail`}),` properties `,(0,m.jsx)(t.code,{children:`elements`}),`, `,(0,m.jsx)(t.code,{children:`filters`}),`, `,(0,m.jsx)(t.code,{children:`search`}),`, `,(0,m.jsx)(t.code,{children:`nativeDetail`}),` have been removed.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onGo?: (event: OnGoEvent) => void;
// v2
onGo?: ToolbarButtonPropTypes['onClick'];
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onRestore`}),`: The event is now a callback instead of a `,(0,m.jsx)(t.code,{children:`CustomEvent`}),`. It implements a payload object as parameter.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onRestore?: (
  event: CustomEvent<{
    source: string;
    filters: HTMLElement[] | TableRowDomRef[];
    search?: HTMLElement;
    nativeDetail?: number;
  }>
) => void;
// v2
interface RestorePayload {
    source: 'dialog' | 'filterBar';
    selectedFilterKeys: string[];
    previousSelectedFilterKeys: string[] | null;
    reorderedFilterKeys: string[] | null;
}
onRestore?: (payload: RestorePayload) => void;
`})}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`onFiltersDialogOpen`}),` (TypeScript): The target of the event is now a `,(0,m.jsx)(t.code,{children:`ToolbarButton`}),`.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`// v1
onFiltersDialogOpen?: ButtonPropTypes['onClick'];
// v2
onFiltersDialogOpen?: ToolbarButtonPropTypes['onClick'];
`})}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`filtergroupitem`,children:`FilterGroupItem`}),`
`,(0,m.jsxs)(t.p,{children:[`For a better aligned API, the `,(0,m.jsx)(t.code,{children:`visible`}),` and `,(0,m.jsx)(t.code,{children:`visibleInFilterBar`}),` (defaulted to `,(0,m.jsx)(t.code,{children:`true)`}),` props has been replaced with `,(0,m.jsx)(t.code,{children:`hidden`}),` and `,(0,m.jsx)(t.code,{children:`hiddenInFilterBar`}),` (no default value).
You only need to apply changes to your code if `,(0,m.jsx)(t.code,{children:`visible`}),` or `,(0,m.jsx)(t.code,{children:`visibleInFilterBar`}),` have been set to `,(0,m.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Additionally, each `,(0,m.jsx)(t.code,{children:`FilterGroupItem`}),` now needs a unique `,(0,m.jsx)(t.code,{children:`filterKey`}),` in scope of each `,(0,m.jsx)(t.code,{children:`FilterBar`}),`. Since the `,(0,m.jsx)(t.code,{children:`orderId`}),` would then be redundant, we've removed this prop.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`// v1
import { FilterBar, FilterGroupItem, Input } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <FilterBar enableReordering>
      <FilterGroupItem visible={false} orderId="0">
        <Input />
      </FilterGroupItem>
      <FilterGroupItem visibleInFilterBar={false} orderId="1">
        <Input />
      </FilterGroupItem>
      <FilterGroupItem orderId="2">
        <Input />
      </FilterGroupItem>
    </FilterBar>
  );
}

// v2
import { FilterBar, FilterGroupItem, Input } from '@ui5/webcomponents-react';

function MyComponent() {
  return (
    <FilterBar enableReordering>
      <FilterGroupItem hidden filterKey="0">
        <Input />
      </FilterGroupItem>
      <FilterGroupItem hiddenInFilterBar filterKey="1">
        <Input />
      </FilterGroupItem>
      <FilterGroupItem filterKey="2">
        <Input />
      </FilterGroupItem>
    </FilterBar>
  );
}
`})}),`
`,(0,m.jsx)(t.h3,{id:`messagebox`,children:`MessageBox`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onClose`}),` is now a plain callback function and no `,(0,m.jsx)(t.code,{children:`CustomEvent`}),` anymore. It receives two parameters, `,(0,m.jsx)(t.code,{children:`action`}),` and `,(0,m.jsx)(t.code,{children:`escPressed`}),`.`]}),`
`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`// v1
// onClose?: (event: CustomEvent<{ action: MessageBoxAction }>) => void;

<MessageBox
  onClose={(event) => {
    console.log(event.detail.action);
  }}
>
  {children}
</MessageBox>

// v2
// onClose?: (action: MessageBoxActionType | undefined, escPressed?: true) => void;

<MessageBox
  onClose={(action, escPressed) => {
    console.log(action, escPressed);
  }}
>
  {children}
</MessageBox>

`})}),`
`,(0,m.jsx)(t.h3,{id:`modals`,children:`Modals`}),`
`,(0,m.jsx)(t.p,{children:`All Modal helper hooks have been removed. They can be replaced with the regular methods:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowDialog`}),` --> `,(0,m.jsx)(t.code,{children:`showDialog`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowPopover`}),` --> `,(0,m.jsx)(t.code,{children:`showPopover`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowResponsivePopover`}),` --> `,(0,m.jsx)(t.code,{children:`showResponsivePopover`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowMenu`}),` --> `,(0,m.jsx)(t.code,{children:`showMenu`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowMessageBox`}),` --> `,(0,m.jsx)(t.code,{children:`showMessageBox`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`useShowToast`}),` --> `,(0,m.jsx)(t.code,{children:`showToast`})]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:`The regular methods are now general purpose, so they can be used both inside the React content (components) as well as outside of the React context (redux, redux-saga, etc.).`}),`
`,(0,m.jsxs)(t.p,{children:[`In order to provide a place for the `,(0,m.jsx)(t.code,{children:`Modals`}),` helper to mount the popovers, you have to render the new `,(0,m.jsx)(t.code,{children:`Modals`}),` component in your application tree.
In addition, the modals are now rendered as children of the `,(0,m.jsx)(t.code,{children:`<Modals>`}),` component instead of `,(0,m.jsx)(t.code,{children:`document.body`}),` by default.`]}),`
`,(0,m.jsx)(t.h3,{id:`objectpage`,children:`ObjectPage`}),`
`,(0,m.jsxs)(t.p,{children:[`The newly introduced `,(0,m.jsx)(t.code,{children:`DynamicPage`}),` web component comes with its own `,(0,m.jsx)(t.code,{children:`DynamicPageHeader`}),` and `,(0,m.jsx)(t.code,{children:`DynamicPageTitle`}),` components, which are unfortunately incompatible with our `,(0,m.jsx)(t.code,{children:`ObjectPage`}),` implementation.
Please use the `,(0,m.jsx)(t.code,{children:`ObjectPageHeader`}),` or `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` component instead.`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Removed Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`showHideHeaderButton`}),`: Hiding the expand/collapse button is not supported by design anymore.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`showTitleInHeaderContent`}),`: Showing the `,(0,m.jsx)(t.code,{children:`headerTitle`}),` as part of the `,(0,m.jsx)(t.code,{children:`headerContent`}),` is `,(0,m.jsx)(t.a,{href:`https://experience.sap.com/fiori-design-web/object-page/#dynamic-page-header-mandatory`,rel:`nofollow`,children:`not supported by design anymore`}),`.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Refactored Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerContent`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`headerArea`}),` and now only accepts the `,(0,m.jsx)(t.code,{children:`ObjectPageHeader`}),` component.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerTitle`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`titleArea`}),` and now only accepts the `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` component.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`headerContentPinnable`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`hidePinButton`}),` and the logic has been inverted. The pin button is now shown by default.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Renamed Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`a11yConfig`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`accessibilityAttributes`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`a11yConfig.dynamicPageAnchorBar`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`accessibilityAttributes.objectPageAnchorBar`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`alwaysShowContentHeader`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`headerPinned`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`footer`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`footerArea`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onToggleHeaderContent`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`onToggleHeaderArea`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onPinnedStateChange`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`onPinButtonToggle`})]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Also, the namings of internal `,(0,m.jsx)(t.code,{children:`data-component-name`}),` attributes have been adjusted accordingly. E.g. `,(0,m.jsx)(t.code,{children:`data-component-name="DynamicPageTitleSubHeader"`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`data-component-name="ObjectPageTitleSubHeader"`})]}),`
`,(0,m.jsx)(t.h3,{id:`objectpagetitle-fka-dynamicpagetitle`,children:`ObjectPageTitle (f.k.a. DynamicPageTitle)`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.em,{children:[`The `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` component is the renamed implementation of the old (React only) `,(0,m.jsx)(t.code,{children:`DynamicPageTitle`}),` component. Now, it should only be used in the `,(0,m.jsx)(t.code,{children:`ObjectPage`}),`.`]})}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Removed Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`actionsToolbarProps`}),`: Since it's now recommended passing the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component directly, this prop is redundant.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`navigationActionsToolbarProps`}),`: Since it's now recommended passing the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component directly, this prop is redundant.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`showSubHeaderRight`}),`: Displaying the subheader in the same line as the header is not supported by design anymore.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`Refactored Props:`})}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`actions`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`actionsBar`}),`. Instead of single actions, the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component should now be passed.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`navigationActions`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`navigationBar`}),`. Instead of single actions, the `,(0,m.jsx)(t.code,{children:`Toolbar`}),` component should now be passed. The `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` still offers support for the legacy `,(0,m.jsx)(t.code,{children:`Toolbar`}),`.`]}),`
`]}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsxs)(t.em,{children:[`The `,(0,m.jsx)(t.code,{children:`ObjectPageTitle`}),` still offers support for the legacy `,(0,m.jsx)(t.code,{children:`Toolbar`}),`. You can find out more about this `,(0,m.jsx)(t.a,{href:`?path=/docs/layouts-floorplans-objectpage--docs#legacy-toolbar-support`,children:`here`}),`.`]})}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-jsx`,children:`// v1
<DynamicPageTitle
  showSubHeaderRight
  actionsToolbarProps={{ style: { background: 'red' } }}
  navigationActionsToolbarProps={{ style: { background: 'red' } }}
  actions={
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  }
  navigationActions={
    <>
      <Button>Navigation-Action 1</Button>
      <Button>Navigation-Action 2</Button>
    </>
  }
/>

// v2
<ObjectPageTitle
  // \`showSubHeaderRight\` has been removed without replacement

  // You can now pass all toolbar props directly to the toolbar,
  // making \`actionsToolbarProps\` and \`navigationActionsToolbarProps\` redundant
  actionsBar={
    <Toolbar design="Transparent" style={{ background: 'red' }}>
      <ToolbarButton text="Action 1" />
      <ToolbarButton text="Action 2" />
    </Toolbar>
  }
  navigationBar={
    <Toolbar design="Transparent" style={{ background: 'red' }}>
      <ToolbarButton text="Navigation-Action 1" />
      <ToolbarButton text="Navigation-Action 2" />
    </Toolbar>
  }
/>
`})}),`
`,(0,m.jsx)(t.h3,{id:`objectpagesection`,children:`ObjectPageSection`}),`
`,(0,m.jsxs)(t.p,{children:[`The prop `,(0,m.jsx)(t.code,{children:`titleText`}),` is now required and the default value `,(0,m.jsx)(t.code,{children:`true`}),` has been removed for the `,(0,m.jsx)(t.code,{children:`titleTextUppercase`}),` prop to comply with the updated Fiori design guidelines.`]}),`
`,(0,m.jsx)(t.h3,{id:`objectpagesubsection`,children:`ObjectPageSubSection`}),`
`,(0,m.jsxs)(t.p,{children:[`The prop `,(0,m.jsx)(t.code,{children:`titleText`}),` is now required.`]}),`
`,(0,m.jsx)(t.h3,{id:`objectstatus`,children:`ObjectStatus`}),`
`,(0,m.jsxs)(t.p,{children:[`For better alignment with the UI5 Web Components the `,(0,m.jsx)(t.code,{children:`active`}),` prop has been renamed to `,(0,m.jsx)(t.code,{children:`interactive`}),`.`]}),`
`,(0,m.jsx)(t.h3,{id:`selectdialog`,children:`SelectDialog`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`mode`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`selectionMode`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onAfterClose`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`onClose`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`onAfterOpen`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`onOpen`})]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`themeprovider`,children:`ThemeProvider`}),`
`,(0,m.jsxs)(t.p,{children:[`The prop `,(0,m.jsx)(t.code,{children:`withoutModalsProvider`}),` has been removed.
In order to provide a place for the `,(0,m.jsx)(t.code,{children:`Modals`}),` helper to mount the popovers, you have to render the new `,(0,m.jsx)(t.code,{children:`Modals`}),` component in your application tree.`]}),`
`,(0,m.jsx)(t.h3,{id:`variantmanagement`,children:`VariantManagement`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`portalContainer`}),` prop has been removed as it is no longer needed.`]}),`
`,(0,m.jsx)(t.h2,{id:`enum-changes`,children:`Enum Changes`}),`
`,(0,m.jsx)(t.p,{children:`For better alignment with the UI5 Web Components, the following enums have been renamed:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`MessageBoxActions`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`MessageBoxAction`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`MessageBoxTypes`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`MessageBoxType`})]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`Themes`}),` has been renamed to `,(0,m.jsx)(t.code,{children:`Theme`})]}),`
`]}),`
`,(0,m.jsx)(d,{})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),a(),u(),o(),n()})))()}h();export{p as default};