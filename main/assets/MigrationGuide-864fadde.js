import{j as e}from"./jsx-runtime-d079401a.js";import"./DomRefTable.module-9354891f.js";import{M as s}from"./chunk-HLWAVYOI-6129ee23.js";import"./index-f1f2c4b1.js";import{T as l}from"./TableOfContent-33f47fed.js";import{F as d}from"./Footer-da72b5e3.js";import{u as t}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-20ae81fd.js";import"./iframe-d9777174.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-938186ae.js";import"./Integer-f7f172c9.js";import"./index-5cf58464.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-7123ddcd.js";import"./index-709cad78.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./index-12e0da73.js";import"./index-9e2b458d.js";import"./Label-025b0296.js";import"./index-05152d12.js";import"./index-61fcb073.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";function fe(o={}){const{wrapper:r}=Object.assign({},t(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",em:"em",a:"a",h2:"h2",h3:"h3",strong:"strong",code:"code",ul:"ul",li:"li",pre:"pre",ol:"ol"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Migration Guide"}),`
`,e.jsx(n.h1,{id:"migration-guide",children:"Migration Guide"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"the list of releases"}),`
or the `,e.jsx(n.a,{href:"?path=/docs/change-log--page",children:"changelog"}),"."]})}),`
`,e.jsx("br",{}),`
`,e.jsx(l,{headingSelector:"h2"}),`
`,e.jsx(n.h2,{id:"from-028x-to-101",children:"From 0.28.x to 1.0.1"}),`
`,e.jsx(n.h3,{id:"removal-of-deprecated-props",children:"Removal of deprecated props"}),`
`,e.jsx(n.p,{children:"The following props were deprecated in previous versions and have now been removed."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ActionSheet"})}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"alwaysShowHeader"})," has been removed as is not specified by the Fiori Design Guidelines. ",e.jsx("br",{}),`
In addition, the `,e.jsx(n.code,{children:"a11yConfig.actionSheetMobileContent.ariaLabel"})," has been removed as well. You can use the ",e.jsx(n.code,{children:"accessibleName"})," prop as replacement."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"AnalyticalTable"})}),`
`,e.jsxs(n.p,{children:["The props ",e.jsx(n.code,{children:"onRowSelected"})," and ",e.jsx(n.code,{children:"onColumnsReordered"})," have been removed in favor for a more streamlined naming pattern. ",e.jsx("br",{}),`
Please use the new prop names `,e.jsx(n.code,{children:"onRowSelect"})," and ",e.jsx(n.code,{children:"onColumnsReorder"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"DynamicPageTitle"})}),`
`,e.jsxs(n.p,{children:["The props ",e.jsx(n.code,{children:"actionsOverflowButton"})," and ",e.jsx(n.code,{children:"navigationActionsOverflowButton"})," have been removed. ",e.jsx("br",{}),`
If needed, you can pass a custom overflow button for the respective toolbar by using the `,e.jsx(n.code,{children:"actionsToolbarProps={{ overflowButton: <Button />}}"})," and ",e.jsx(n.code,{children:"navigationActionsToolbarProps={{ overflowButton: <Button />}}"})," props."]}),`
`,e.jsxs(n.p,{children:["In addition, the ",e.jsx(n.code,{children:"onToolbarOverflowChange"})," event has been removed as well. Previously, this event contained a property ",e.jsx(n.code,{children:"origin"})," with the value of ",e.jsx(n.code,{children:"actions"})," or ",e.jsx(n.code,{children:"navigationActions"})," in order to distinguish between the toolbars. ",e.jsx("br",{}),`
Please use `,e.jsx(n.code,{children:"onOverflowChange"})," of the respective toolbar props object instead (",e.jsx(n.code,{children:"actionsToolbarProps={{ onOverflowChange: yourHandler }}"})," and ",e.jsx(n.code,{children:"navigationActionsToolbarProps={{ onOverflowChange: yourHandlerForNavigationActions }}"}),")."]}),`
`,e.jsx(n.h3,{id:"filterbar-implement-new-design-specification",children:"FilterBar: implement new design specification"}),`
`,e.jsxs(n.p,{children:["The Design for the ",e.jsx(n.code,{children:"FilterBar"}),` component had some major updates, so we've updated the component accordingly.
One of these changes is, that the optional search field (passed via the `,e.jsx(n.code,{children:"search"})," prop), is no longer available in the ",e.jsx(n.code,{children:"Filters"})," dialog."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"The following props are removed without replacement as they are no longer specified by the design:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"showClearButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"showGo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"onFiltersDialogClear"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"showSearchOnFiltersDialog"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"loading"})," ",e.jsx("br",{}),`
In order to place a loading indicator on the `,e.jsx(n.code,{children:"FilterBar"}),", please wrap it into the ",e.jsx(n.code,{children:"BusyIndicator"})," component."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"The following props have been renamed without further modifications:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," --> ",e.jsx(n.code,{children:"header"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showRestoreButton"})," --> ",e.jsx(n.code,{children:"showResetButton"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"The following props have been renamed and changed their logic for a more streamlined API:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filterBarExpanded"})," --> ",e.jsx(n.code,{children:"filterBarCollapsed"})," ",e.jsx("br",{}),`
Previously, `,e.jsx(n.code,{children:"filterBarExpanded"})," was defaulted to ",e.jsx(n.code,{children:"true"}),". This prop has been replaced by ",e.jsx(n.code,{children:"filterBarCollapsed"})," (inactive by default)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showFilterConfiguration"})," --> ",e.jsx(n.code,{children:"hideFilterConfiguration"})," ",e.jsx("br",{}),`
Previously, `,e.jsx(n.code,{children:"showFilterConfiguration"})," was defaulted to ",e.jsx(n.code,{children:"true"}),". This prop has been replaced by ",e.jsx(n.code,{children:"hideFilterConfiguration"})," (inactive by default)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useToolbar"})," --> ",e.jsx(n.code,{children:"hideToolbar"})," ",e.jsx("br",{}),`
If you wanted to hide the toolbar of the `,e.jsx(n.code,{children:"FilterBar"}),", you could set the prop ",e.jsx(n.code,{children:"useToolbar"})," to ",e.jsx(n.code,{children:"false"})," in earlier versions. This prop has been replaced by ",e.jsx(n.code,{children:"hideToolbar={true}"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"The following event handlers have changed their payload:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onFiltersDialogSelectionChange"})," ",e.jsx("br",{}),`
The event type changed to `,e.jsx(n.code,{children:"UI5CustomEvent"})," and the properties ",e.jsx(n.code,{children:"elements"})," and ",e.jsx(n.code,{children:"toggledElements"})," have been removed. ",e.jsx("br",{}),`
You can now use `,e.jsx(n.code,{children:"element"})," to access the most recently interacted row and ",e.jsx(n.code,{children:"checked"}),` to get the current selection state.
If you need to access all selected rows, you can use the `,e.jsx(n.code,{children:"selectedRows"})," property."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onRestore"})," and ",e.jsx(n.code,{children:"onClear"})," ",e.jsx("br",{}),`
The `,e.jsx(n.code,{children:"dialogSearch"})," property has been removed from the event payload as the search field in the dialog is no longer available."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onGo"})," ",e.jsx("br",{}),`
The `,e.jsx(n.code,{children:"toggledElements"})," property has been removed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onFiltersDialogOpen"})," ",e.jsx("br",{}),`
The property `,e.jsx(n.code,{children:"dialog"})," has been removed. If you need to access the filter dialog HTML element, you might use the new prop ",e.jsx(n.code,{children:"onAfterFiltersDialogOpen"}),`
on the `,e.jsx(n.code,{children:"FilterBar"})," which is fired after the filter dialog has been opened."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Migration Example (removed props and event handlers are not listed for brevity):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// component with 0.28.x
<FilterBar
    variant={<Title>Header</Title>}
    showRestoreButton
    filterBarExpanded={false}
    showFilterConfiguration={false}
    useToolbar={false}
/>

// becomes with 1.0.0
<FilterBar
    header={<Title>Header</Title>}
    showResetButton
    filterBarCollapsed
    hideFilterConfiguration
    hideToolbar
/>
`})}),`
`,e.jsx(n.h3,{id:"variantmanagement-removed-option-to-show-the-cancel-button",children:'VariantManagement: removed option to show the "Cancel" button'}),`
`,e.jsxs(n.p,{children:['The "Cancel" button is not part of the design guidelines anymore, so the prop ',e.jsx(n.code,{children:"showCancelButton"})," has been removed without replacement."]}),`
`,e.jsx(n.h2,{id:"from-027x-to-0280",children:"From 0.27.x to 0.28.0"}),`
`,e.jsx(n.h3,{id:"analyticaltable-scaling-the-table",children:"AnalyticalTable: Scaling the table"}),`
`,e.jsxs(n.p,{children:["Scaling the table via the CSS ",e.jsx(n.code,{children:"scale()"})," function is now only supported if the abscissa (",e.jsx(n.code,{children:"sx"}),") is passed to the ",e.jsx(n.code,{children:"scaleXFactor"})," prop. ",e.jsx(n.code,{children:"scaleXFactor"})," only accepts values of type ",e.jsx(n.code,{children:"number"}),"."]}),`
`,e.jsx(n.p,{children:"Before 0.28.0:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ transform: 'scale(0.5)' }}>
  <AnalyticalTable data={data} columns={columns} />
</div>
`})}),`
`,e.jsx(n.p,{children:"Now:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div style={{ transform: 'scale(0.5)' }}>
  <AnalyticalTable data={data} columns={columns} scaleXFactor={0.5} />
</div>
`})}),`
`,e.jsxs(n.h3,{id:"messageitem-new-default-value-for-type",children:["MessageItem: new default value for ",e.jsx(n.code,{children:"type"})]}),`
`,e.jsxs(n.p,{children:["The default value ",e.jsx(n.code,{children:"type"})," value of the ",e.jsx(n.code,{children:"MessageItem"})," component has been changed from ",e.jsx(n.code,{children:"ValueState.None"})," to ",e.jsx(n.code,{children:"ValueState.Error"}),"."]}),`
`,e.jsxs(n.h3,{id:"objectpage-portalcontainer-prop-removed",children:["ObjectPage: ",e.jsx(n.code,{children:"portalContainer"})," prop removed"]}),`
`,e.jsxs(n.p,{children:["The prop ",e.jsx(n.code,{children:"portalContainer"})," has been removed from the ",e.jsx(n.code,{children:"ObjectPage"})," as it is not used anymore."]}),`
`,e.jsx(n.h2,{id:"from-025x-to-0260",children:"From 0.25.x to 0.26.0"}),`
`,e.jsx(n.h3,{id:"removed-deprecated-entrypoints",children:"Removed deprecated entrypoints"}),`
`,e.jsx(n.p,{children:`In version 0.26.0, we have removed several legacy exports which have been deprecated a couple of months ago.
This affects all exports using the following pattern:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { COMPONENT_NAME } from '@ui5/webcomponents-react/dist/COMPONENT_NAME';
import { UTIL_NAME } from '@ui5/webcomponents-react-base/dist/UTIL_NAME';
import { CHART_NAME } from '@ui5/webcomponents-react-charts/dist/CHART_NAME';
`})}),`
`,e.jsxs(n.p,{children:["You can now shorten all your imports by removing the ",e.jsx(n.code,{children:"/dist/NAME"})," part to match the following pattern:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { COMPONENT_NAME } from '@ui5/webcomponents-react';
import { UTIL_NAME } from '@ui5/webcomponents-react-base';
import { CHART_NAME } from '@ui5/webcomponents-react-charts';
`})}),`
`,e.jsxs(n.p,{children:["In case the file you are trying to import is not available, please raise an ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/issues/new?labels=bug&template=bug_report.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"issue"}),"."]}),`
`,e.jsx(n.h3,{id:"removed-polyfills",children:"Removed polyfills"}),`
`,e.jsxs(n.p,{children:["In 0.26.0, we have removed the polyfill imports ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base/polyfill/Safari"})," (all features supported now) and ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base/polyfill/IE11"}),` (end of life).
As a consequence, the internal dependencies of `,e.jsx(n.code,{children:"@ui5/webcomponents-react-base"}),` are cleaned up as well,
so you'll most likely need to install `,e.jsx(n.code,{children:"resize-observer-polyfill"})," on your own for running tests with Jest (see next section)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install resize-observer-polyfill --save-dev
# or if you are using yarn
yarn add resize-observer-polyfill --dev
`})}),`
`,e.jsx(n.h3,{id:"improved-jest-setup",children:"Improved Jest Setup"}),`
`,e.jsx(n.p,{children:`In order to run Tests with Jest, there has always been the need of adding additional polyfills to the Jest environment.
With 0.26.0, things are changing a little:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["You have to install ",e.jsx(n.code,{children:"resize-observer-polyfill"})," on your own because it's not longer a dependency of ",e.jsx(n.code,{children:"@ui5/webcomponents-react-base"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm install resize-observer-polyfill --save-dev
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[`We now offer an improved way of adding the additional APIs to the Jest environment by exposing a file which is setting up the
jest environment for you. You can import it via `,e.jsx(n.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you are using ",e.jsx(n.code,{children:"create-react-app"}),", your simplified ",e.jsx(n.code,{children:"src/setupTests.js"})," file looks like:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;
`})}),`
`,e.jsxs(n.h3,{id:"new-api-for-analyticalcardheader",children:["New API for ",e.jsx(n.code,{children:"AnalyticalCardHeader"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"AnalyticalCardHeader"}),` component has been refactored to match the latest design specifications.
As a consequence, the API has changed:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function OldApi() {
  return (
    <AnalyticalCardHeader
      titleText="Title"
      subtitleText="Subtitle"
      arrowIndicator={DeviationIndicator.Up} // renamed to \`trend\`
      showIndicator={true} // removed, please use \`trend={DeviationIndicator.None}\` in future
      indicatorState={ValueState.Error} // removed without replacement
      value="100"
      unit="k" // renamed to \`scale\`
      valueState={ValueState.Success} // renamed to \`state\`, allowed enum values coming from \`ValueColor\`
      target="100" // replaced with \`children\`. Use the \`NumericSideIndicator\` component.
      deviation="50" // replaced with \`children\`. Use the \`NumericSideIndicator\` component.
      description="Additional Description"
      counter="Hello Counter" // renamed to \`status\`
      counterState={ValueState.Error} // removed without replacement
      currency="CURRENCY" // renamed to \`unitOfMeasurement\`
      onClick={(e) => {}}
    />
  );
}

// will become

function NewAPI() {
  return (
    <AnalyticalCardHeader
      titleText="Title"
      subtitleText="Subtitle"
      trend={DeviationIndicator.Up}
      value="100"
      scale="k"
      state={ValueColor.Good}
      description="Additional Description"
      status="Hello Counter"
      unitOfMeasurement="CURRENCY"
      onClick={(e) => {}}
    >
      <NumericSideIndicator titleText="Target" number="100" />
      <NumericSideIndicator titleText="Deviation" number="50" />
    </AnalyticalCardHeader>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"from-023x-to-0240",children:"From 0.23.x to 0.24.0"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The deprecated ",e.jsx(n.code,{children:"tooltip"})," prop has been removed, please use the native ",e.jsx(n.code,{children:"title"})," attribute instead. (This does not remove the ",e.jsx(n.code,{children:"tooltip"})," prop of the ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"ToggleButton"})," or ",e.jsx(n.code,{children:"SegmentedButtonItem"}),".)"]}),`
`,e.jsxs(n.li,{children:["The deprecated ",e.jsx(n.code,{children:"useConsolidatedRef"})," hook has been removed, please use ",e.jsx(n.code,{children:"useSyncRef"})," instead."]}),`
`,e.jsxs(n.li,{children:["The deprecated ",e.jsx(n.code,{children:"StyleClassHelper"})," class has been removed, please use ",e.jsx(n.code,{children:"clsx"})," instead or implement your own ",e.jsx(n.code,{children:"className"})," constructor."]}),`
`]}),`
`,e.jsx(n.h2,{id:"from-021x-to-0220",children:"From 0.21.x to 0.22.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"useI18nBundle:"})," The ",e.jsx(n.code,{children:"useI18nBundle"})," hook must now be used in the context of the ",e.jsx(n.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsxs(n.p,{children:["You will not need to change anything in your app's code base, since all components should already be wrapped by the ",e.jsx(n.code,{children:"ThemeProvider"}),`, but now you have to make sure that even your test components are wrapped inside of it.
Otherwise, translatable components will likely not render.`]}),`
`,e.jsx(n.h2,{id:"older-releases",children:"Older releases"}),`
`,e.jsxs(n.p,{children:["If you are looking for migration guides for older releases, please take a look into our ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.archive.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Migration Guide Archive"}),"."]}),`
`,e.jsx(d,{})]})}}export{fe as default};
//# sourceMappingURL=MigrationGuide-864fadde.js.map
