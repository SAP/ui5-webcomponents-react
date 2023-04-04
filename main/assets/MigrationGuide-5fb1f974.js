import{j as n,a as o,F as d}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-7a0f3368.js";import{M as a}from"./chunk-PCJTTTQV-703aebb7.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f1f749bf.js";import"./Import-eb989cda.js";import{T as c}from"./TableOfContent-0ec14130.js";import{F as s}from"./Footer-7a087b1c.js";import{u as l}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-805e79c6.js";import"./iframe-1d6fd4e8.js";import"../sb-preview/runtime.mjs";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-1309330e.js";import"./Label-e3d88218.js";import"./WrappingType-b81e595a.js";import"./index-047f95db.js";import"./Link-706be030.js";import"./index-c75ea0ec.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";function be(r={}){const{wrapper:i}=Object.assign({},l(),r.components);return i?n(i,Object.assign({},r,{children:n(t,{})})):t();function t(){const e=Object.assign({h1:"h1",p:"p",em:"em",a:"a",h2:"h2",h3:"h3",strong:"strong",code:"code",ul:"ul",li:"li",pre:"pre",ol:"ol"},l(),r.components);return o(d,{children:[n(a,{title:"Migration Guide"}),`
`,n(e.h1,{id:"migration-guide",children:"Migration Guide"}),`
`,n("br",{}),`
`,n(e.p,{children:o(e.em,{children:[`The most important breaking changes of the corresponding releases are outlined here.
For a full list of all changes, please refer to `,n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"the list of releases"}),`
or the `,n(e.a,{href:"?path=/docs/change-log--page",children:"changelog"}),"."]})}),`
`,n("br",{}),`
`,n(c,{headingSelector:"h2"}),`
`,n(e.h2,{id:"from-028x-to-101",children:"From 0.28.x to 1.0.1"}),`
`,n(e.h3,{id:"removal-of-deprecated-props",children:"Removal of deprecated props"}),`
`,n(e.p,{children:"The following props were deprecated in previous versions and have now been removed."}),`
`,n(e.p,{children:n(e.strong,{children:"ActionSheet"})}),`
`,o(e.p,{children:["The prop ",n(e.code,{children:"alwaysShowHeader"})," has been removed as is not specified by the Fiori Design Guidelines. ",n("br",{}),`
In addition, the `,n(e.code,{children:"a11yConfig.actionSheetMobileContent.ariaLabel"})," has been removed as well. You can use the ",n(e.code,{children:"accessibleName"})," prop as replacement."]}),`
`,n(e.p,{children:n(e.strong,{children:"AnalyticalTable"})}),`
`,o(e.p,{children:["The props ",n(e.code,{children:"onRowSelected"})," and ",n(e.code,{children:"onColumnsReordered"})," have been removed in favor for a more streamlined naming pattern. ",n("br",{}),`
Please use the new prop names `,n(e.code,{children:"onRowSelect"})," and ",n(e.code,{children:"onColumnsReorder"}),"."]}),`
`,n(e.p,{children:n(e.strong,{children:"DynamicPageTitle"})}),`
`,o(e.p,{children:["The props ",n(e.code,{children:"actionsOverflowButton"})," and ",n(e.code,{children:"navigationActionsOverflowButton"})," have been removed. ",n("br",{}),`
If needed, you can pass a custom overflow button for the respective toolbar by using the `,n(e.code,{children:"actionsToolbarProps={{ overflowButton: <Button />}}"})," and ",n(e.code,{children:"navigationActionsToolbarProps={{ overflowButton: <Button />}}"})," props."]}),`
`,o(e.p,{children:["In addition, the ",n(e.code,{children:"onToolbarOverflowChange"})," event has been removed as well. Previously, this event contained a property ",n(e.code,{children:"origin"})," with the value of ",n(e.code,{children:"actions"})," or ",n(e.code,{children:"navigationActions"})," in order to distinguish between the toolbars. ",n("br",{}),`
Please use `,n(e.code,{children:"onOverflowChange"})," of the respective toolbar props object instead (",n(e.code,{children:"actionsToolbarProps={{ onOverflowChange: yourHandler }}"})," and ",n(e.code,{children:"navigationActionsToolbarProps={{ onOverflowChange: yourHandlerForNavigationActions }}"}),")."]}),`
`,n(e.h3,{id:"filterbar-implement-new-design-specification",children:"FilterBar: implement new design specification"}),`
`,o(e.p,{children:["The Design for the ",n(e.code,{children:"FilterBar"}),` component had some major updates, so we've updated the component accordingly.
One of these changes is, that the optional search field (passed via the `,n(e.code,{children:"search"})," prop), is no longer available in the ",n(e.code,{children:"Filters"})," dialog."]}),`
`,n(e.p,{children:n(e.strong,{children:"The following props are removed without replacement as they are no longer specified by the design:"})}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"showClearButton"})}),`
`,n(e.li,{children:n(e.code,{children:"showGo"})}),`
`,n(e.li,{children:n(e.code,{children:"onFiltersDialogClear"})}),`
`,n(e.li,{children:n(e.code,{children:"showSearchOnFiltersDialog"})}),`
`,o(e.li,{children:[n(e.code,{children:"loading"})," ",n("br",{}),`
In order to place a loading indicator on the `,n(e.code,{children:"FilterBar"}),", please wrap it into the ",n(e.code,{children:"BusyIndicator"})," component."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"The following props have been renamed without further modifications:"})}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.code,{children:"variant"})," --> ",n(e.code,{children:"header"})]}),`
`,o(e.li,{children:[n(e.code,{children:"showRestoreButton"})," --> ",n(e.code,{children:"showResetButton"})]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"The following props have been renamed and changed their logic for a more streamlined API:"})}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.code,{children:"filterBarExpanded"})," --> ",n(e.code,{children:"filterBarCollapsed"})," ",n("br",{}),`
Previously, `,n(e.code,{children:"filterBarExpanded"})," was defaulted to ",n(e.code,{children:"true"}),". This prop has been replaced by ",n(e.code,{children:"filterBarCollapsed"})," (inactive by default)."]}),`
`,o(e.li,{children:[n(e.code,{children:"showFilterConfiguration"})," --> ",n(e.code,{children:"hideFilterConfiguration"})," ",n("br",{}),`
Previously, `,n(e.code,{children:"showFilterConfiguration"})," was defaulted to ",n(e.code,{children:"true"}),". This prop has been replaced by ",n(e.code,{children:"hideFilterConfiguration"})," (inactive by default)."]}),`
`,o(e.li,{children:[n(e.code,{children:"useToolbar"})," --> ",n(e.code,{children:"hideToolbar"})," ",n("br",{}),`
If you wanted to hide the toolbar of the `,n(e.code,{children:"FilterBar"}),", you could set the prop ",n(e.code,{children:"useToolbar"})," to ",n(e.code,{children:"false"})," in earlier versions. This prop has been replaced by ",n(e.code,{children:"hideToolbar={true}"}),"."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"The following event handlers have changed their payload:"})}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.code,{children:"onFiltersDialogSelectionChange"})," ",n("br",{}),`
The event type changed to `,n(e.code,{children:"UI5CustomEvent"})," and the properties ",n(e.code,{children:"elements"})," and ",n(e.code,{children:"toggledElements"})," have been removed. ",n("br",{}),`
You can now use `,n(e.code,{children:"element"})," to access the most recently interacted row and ",n(e.code,{children:"checked"}),` to get the current selection state.
If you need to access all selected rows, you can use the `,n(e.code,{children:"selectedRows"})," property."]}),`
`,o(e.li,{children:[n(e.code,{children:"onRestore"})," and ",n(e.code,{children:"onClear"})," ",n("br",{}),`
The `,n(e.code,{children:"dialogSearch"})," property has been removed from the event payload as the search field in the dialog is no longer available."]}),`
`,o(e.li,{children:[n(e.code,{children:"onGo"})," ",n("br",{}),`
The `,n(e.code,{children:"toggledElements"})," property has been removed"]}),`
`,o(e.li,{children:[n(e.code,{children:"onFiltersDialogOpen"})," ",n("br",{}),`
The property `,n(e.code,{children:"dialog"})," has been removed. If you need to access the filter dialog HTML element, you might use the new prop ",n(e.code,{children:"onAfterFiltersDialogOpen"}),`
on the `,n(e.code,{children:"FilterBar"})," which is fired after the filter dialog has been opened."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Migration Example (removed props and event handlers are not listed for brevity):"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`// component with 0.28.x
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
`,n(e.h3,{id:"variantmanagement-removed-option-to-show-the-cancel-button",children:'VariantManagement: removed option to show the "Cancel" button'}),`
`,o(e.p,{children:['The "Cancel" button is not part of the design guidelines anymore, so the prop ',n(e.code,{children:"showCancelButton"})," has been removed without replacement."]}),`
`,n(e.h2,{id:"from-027x-to-0280",children:"From 0.27.x to 0.28.0"}),`
`,n(e.h3,{id:"analyticaltable-scaling-the-table",children:"AnalyticalTable: Scaling the table"}),`
`,o(e.p,{children:["Scaling the table via the CSS ",n(e.code,{children:"scale()"})," function is now only supported if the abscissa (",n(e.code,{children:"sx"}),") is passed to the ",n(e.code,{children:"scaleXFactor"})," prop. ",n(e.code,{children:"scaleXFactor"})," only accepts values of type ",n(e.code,{children:"number"}),"."]}),`
`,n(e.p,{children:"Before 0.28.0:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<div style={{ transform: 'scale(0.5)' }}>
  <AnalyticalTable data={data} columns={columns} />
</div>
`})}),`
`,n(e.p,{children:"Now:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<div style={{ transform: 'scale(0.5)' }}>
  <AnalyticalTable data={data} columns={columns} scaleXFactor={0.5} />
</div>
`})}),`
`,o(e.h3,{id:"messageitem-new-default-value-for-type",children:["MessageItem: new default value for ",n(e.code,{children:"type"})]}),`
`,o(e.p,{children:["The default value ",n(e.code,{children:"type"})," value of the ",n(e.code,{children:"MessageItem"})," component has been changed from ",n(e.code,{children:"ValueState.None"})," to ",n(e.code,{children:"ValueState.Error"}),"."]}),`
`,o(e.h3,{id:"objectpage-portalcontainer-prop-removed",children:["ObjectPage: ",n(e.code,{children:"portalContainer"})," prop removed"]}),`
`,o(e.p,{children:["The prop ",n(e.code,{children:"portalContainer"})," has been removed from the ",n(e.code,{children:"ObjectPage"})," as it is not used anymore."]}),`
`,n(e.h2,{id:"from-025x-to-0260",children:"From 0.25.x to 0.26.0"}),`
`,n(e.h3,{id:"removed-deprecated-entrypoints",children:"Removed deprecated entrypoints"}),`
`,n(e.p,{children:`In version 0.26.0, we have removed several legacy exports which have been deprecated a couple of months ago.
This affects all exports using the following pattern:`}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { COMPONENT_NAME } from '@ui5/webcomponents-react/dist/COMPONENT_NAME';
import { UTIL_NAME } from '@ui5/webcomponents-react-base/dist/UTIL_NAME';
import { CHART_NAME } from '@ui5/webcomponents-react-charts/dist/CHART_NAME';
`})}),`
`,o(e.p,{children:["You can now shorten all your imports by removing the ",n(e.code,{children:"/dist/NAME"})," part to match the following pattern:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { COMPONENT_NAME } from '@ui5/webcomponents-react';
import { UTIL_NAME } from '@ui5/webcomponents-react-base';
import { CHART_NAME } from '@ui5/webcomponents-react-charts';
`})}),`
`,o(e.p,{children:["In case the file you are trying to import is not available, please raise an ",n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/issues/new?labels=bug&template=bug_report.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"issue"}),"."]}),`
`,n(e.h3,{id:"removed-polyfills",children:"Removed polyfills"}),`
`,o(e.p,{children:["In 0.26.0, we have removed the polyfill imports ",n(e.code,{children:"@ui5/webcomponents-react-base/polyfill/Safari"})," (all features supported now) and ",n(e.code,{children:"@ui5/webcomponents-react-base/polyfill/IE11"}),` (end of life).
As a consequence, the internal dependencies of `,n(e.code,{children:"@ui5/webcomponents-react-base"}),` are cleaned up as well,
so you'll most likely need to install `,n(e.code,{children:"resize-observer-polyfill"})," on your own for running tests with Jest (see next section)."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-shell",children:`npm install resize-observer-polyfill --save-dev
# or if you are using yarn
yarn add resize-observer-polyfill --dev
`})}),`
`,n(e.h3,{id:"improved-jest-setup",children:"Improved Jest Setup"}),`
`,n(e.p,{children:`In order to run Tests with Jest, there has always been the need of adding additional polyfills to the Jest environment.
With 0.26.0, things are changing a little:`}),`
`,o(e.ol,{children:[`
`,o(e.li,{children:["You have to install ",n(e.code,{children:"resize-observer-polyfill"})," on your own because it's not longer a dependency of ",n(e.code,{children:"@ui5/webcomponents-react-base"}),"."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`npm install resize-observer-polyfill --save-dev
`})}),`
`,o(e.ol,{start:"2",children:[`
`,o(e.li,{children:[`We now offer an improved way of adding the additional APIs to the Jest environment by exposing a file which is setting up the
jest environment for you. You can import it via `,n(e.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"}),"."]}),`
`]}),`
`,o(e.p,{children:["If you are using ",n(e.code,{children:"create-react-app"}),", your simplified ",n(e.code,{children:"src/setupTests.js"})," file looks like:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;
`})}),`
`,o(e.h3,{id:"new-api-for-analyticalcardheader",children:["New API for ",n(e.code,{children:"AnalyticalCardHeader"})]}),`
`,o(e.p,{children:["The ",n(e.code,{children:"AnalyticalCardHeader"}),` component has been refactored to match the latest design specifications.
As a consequence, the API has changed:`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function OldApi() {
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
`,n(e.h2,{id:"from-023x-to-0240",children:"From 0.23.x to 0.24.0"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["The deprecated ",n(e.code,{children:"tooltip"})," prop has been removed, please use the native ",n(e.code,{children:"title"})," attribute instead. (This does not remove the ",n(e.code,{children:"tooltip"})," prop of the ",n(e.code,{children:"Button"}),", ",n(e.code,{children:"ToggleButton"})," or ",n(e.code,{children:"SegmentedButtonItem"}),".)"]}),`
`,o(e.li,{children:["The deprecated ",n(e.code,{children:"useConsolidatedRef"})," hook has been removed, please use ",n(e.code,{children:"useSyncRef"})," instead."]}),`
`,o(e.li,{children:["The deprecated ",n(e.code,{children:"StyleClassHelper"})," class has been removed, please use ",n(e.code,{children:"clsx"})," instead or implement your own ",n(e.code,{children:"className"})," constructor."]}),`
`]}),`
`,n(e.h2,{id:"from-021x-to-0220",children:"From 0.21.x to 0.22.0"}),`
`,o(e.p,{children:[n(e.strong,{children:"useI18nBundle:"})," The ",n(e.code,{children:"useI18nBundle"})," hook must now be used in the context of the ",n(e.code,{children:"ThemeProvider"}),"."]}),`
`,o(e.p,{children:["You will not need to change anything in your app's code base, since all components should already be wrapped by the ",n(e.code,{children:"ThemeProvider"}),`, but now you have to make sure that even your test components are wrapped inside of it.
Otherwise, translatable components will likely not render.`]}),`
`,n(e.h2,{id:"older-releases",children:"Older releases"}),`
`,o(e.p,{children:["If you are looking for migration guides for older releases, please take a look into our ",n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.archive.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Migration Guide Archive"}),"."]}),`
`,n(s,{})]})}}export{be as default};
//# sourceMappingURL=MigrationGuide-5fb1f974.js.map
