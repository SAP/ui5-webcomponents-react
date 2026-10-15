import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{I as r,M as i,X as a,Y as o,it as s,tt as ee}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as te,c as ne,d as c,f as l,i as u,l as d,m as f,n as re,o as ie,p,r as m,s as ae,t as oe,u as h}from"./jsx-runtime-NHZLEOw0.js";import{n as g,t as _}from"./withWebComponent-DDACWNN1.js";import{t as se}from"./jsx-runtime-BdxMnOeJ.js";import{n as v,t as ce}from"./event-strict-C4u0wMzB.js";import{n as le,t as ue}from"./i18n-BNTZIxbt.js";import{n as de,t as y}from"./slot-strict-BSUUcNBc.js";import{a as fe,i as pe,n as me,o as he}from"./InvisibleMessage-DkusOjUN.js";import{n as ge,t as _e}from"./Title-CCF0jz-s.js";import{n as ve,t as b}from"./List-ZJUPXzCq.js";import{n as ye,t as be}from"./filter-Bffs3YYL.js";import{n as xe,t as Se}from"./group-2-eGiw3APl.js";import{n as Ce,t as we}from"./ListItemGroup-B_3ridR0.js";import{n as Te,t as x}from"./Button-C69-ub8X.js";import{n as Ee,t as S}from"./ListItemStandard-DFF8cHtK.js";import{n as De,t as Oe}from"./Button-BTwEzhZQ.js";import{n as ke,t as Ae}from"./Dialog-CoJbHKVO.js";import{n as C,t as je}from"./query-DgyfBxue.js";import{i as Me,n as Ne,r as w,t as Pe}from"./SegmentedButton-BtKyWhdQ.js";import{i as Fe,n as Ie,r as Le,t as T}from"./SegmentedButtonItem-Dl4TYbUL.js";import{Cr as Re,Dr as ze,Er as Be,Or as Ve,Sr as He,Tr as Ue,Vr as We,_r as Ge,br as Ke,gr as qe,hr as Je,kr as Ye,mr as Xe,vr as Ze,wr as Qe,xr as $e,yr as et}from"./i18n-defaults-Yid-Aku_.js";import{n as tt,t as nt}from"./parameters-bundle.css-sD0-XBn7.js";import{i as rt,n as it,r as at,t as ot}from"./ComboBoxItem-Citrl5Ou.js";import{t as st}from"./nav-back-C1c3JhyX.js";import{n as ct,t as lt}from"./StepInput-CyOnsWQE.js";import{n as ut,t as dt}from"./Switch-D2_lYoRI.js";import{n as ft,t as pt}from"./sort-B1vrE1Ep.js";import{n as mt}from"./action-settings-2AczVOTj.js";import{i as ht}from"./iframe-L9yRVTsY.js";var E,D;function gt(){return(gt=e((()=>{f(),d(),de(),c(),E=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D=class extends p{},E([h()],D.prototype,`text`,void 0),E([h()],D.prototype,`additionalText`,void 0),E([y()],D.prototype,`values`,void 0),D=E([l(`ui5-filter-item`)],D),D.define()})))()}var O;function k(){return(k=e((()=>{gt(),_(),O=g(`ui5-filter-item`,[`additionalText`,`text`],[],[`values`],[]),O.displayName=`FilterItem`;try{O.displayName=`FilterItem`,O.__docgenInfo={description:`The \`FilterItem\` component defines the filtering criteria for data in \`ViewSettingsDialog\`.
It represents a single filter category that contains multiple filter options that users can select.

### Usage

The \`FilterItem\` is used within the \`ViewSettingsDialog\` to provide filtering options.



__Note:__ This is a UI5 Web Component! [FilterItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/FilterItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`FilterItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,methods:[],props:{values:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemPropTypes`}],description:`Defines the filter options available for this filter category.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="values"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<FilterItemOption>\``,name:`values`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},additionalText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemAttributes`}],description:`Defines the additional text of the filter item.
This text is typically used to show the number of selected filter options within this category.`,name:`additionalText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemAttributes`}],description:`Defines the text of the filter item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItem/index.d.ts`,name:`FilterItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{abstract:``}}}catch{}})))()}var A,j;function _t(){return(_t=e((()=>{f(),d(),c(),A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends p{constructor(){super(...arguments),this.selected=!1}},A([h()],j.prototype,`text`,void 0),A([h({type:Boolean})],j.prototype,`selected`,void 0),j=A([l(`ui5-filter-item-option`)],j),j.define()})))()}var M;function N(){return(N=e((()=>{_t(),_(),M=g(`ui5-filter-item-option`,[`text`],[`selected`],[],[]),M.displayName=`FilterItemOption`;try{M.displayName=`FilterItemOption`,M.__docgenInfo={description:`The \`FilterItemOption\` component defines individual filter values within a \`FilterItem\`.
It represents a single selectable option that users can choose to filter data.

### Usage

The \`FilterItemOption\` is used as a child component within \`FilterItem\` in the context
of \`ViewSettingsDialog\`. Each option represents a specific value that can be used for filtering



__Note:__ This is a UI5 Web Component! [FilterItemOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/FilterItemOption) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`FilterItemOption`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/FilterItemOption/index.d.ts`,methods:[],props:{selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItemOption/index.d.ts`,name:`FilterItemOptionAttributes`}],description:`Defines if the filter option is selected.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItemOption/index.d.ts`,name:`FilterItemOptionAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItemOption/index.d.ts`,name:`FilterItemOptionAttributes`}],description:`Defines the text of the filter option.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/FilterItemOption/index.d.ts`,name:`FilterItemOptionAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{abstract:``}}}catch{}})))()}var P,F;function vt(){return(vt=e((()=>{f(),d(),c(),P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends p{constructor(){super(...arguments),this.selected=!1}},P([h()],F.prototype,`text`,void 0),P([h({type:Boolean})],F.prototype,`selected`,void 0),F=P([l(`ui5-group-item`)],F),F.define()})))()}var I;function L(){return(L=e((()=>{vt(),_(),I=g(`ui5-group-item`,[`text`],[`selected`],[],[]),I.displayName=`GroupItem`;try{I.displayName=`GroupItem`,I.__docgenInfo={description:`The \`GroupItem\` component defines the grouping criteria for data in \`ViewSettingsDialog\`.
It represents a single group option that users can select to organize data into logical groups.

### Usage

The \`GroupItem\` is used within the \`ViewSettingsDialog\` to provide grouping options.
Each group item represents a column or field by which data can be grouped.



__Note:__ This is a UI5 Web Component! [GroupItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/GroupItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`GroupItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/GroupItem/index.d.ts`,methods:[],props:{selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/GroupItem/index.d.ts`,name:`GroupItemAttributes`}],description:`Defines if the group item is selected.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/GroupItem/index.d.ts`,name:`GroupItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/GroupItem/index.d.ts`,name:`GroupItemAttributes`}],description:`Defines the text of the group item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/GroupItem/index.d.ts`,name:`GroupItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of __@ui5/webcomponents-fiori__.`,abstract:``}}}catch{}})))()}var R,z;function yt(){return(yt=e((()=>{f(),d(),c(),R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends p{constructor(){super(...arguments),this.selected=!1}},R([h()],z.prototype,`text`,void 0),R([h({type:Boolean})],z.prototype,`selected`,void 0),z=R([l(`ui5-sort-item`)],z),z.define()})))()}var B;function V(){return(V=e((()=>{yt(),_(),B=g(`ui5-sort-item`,[`text`],[`selected`],[],[]),B.displayName=`SortItem`;try{B.displayName=`SortItem`,B.__docgenInfo={description:`The \`SortItem\` component defines the sorting criteria for data in \`ViewSettingsDialog\`.
It represents a single sort option that users can select to organize data in ascending or descending order.

### Usage

The \`SortItem\` is used within the \`ViewSettingsDialog\` to provide sorting options.
Each sort item represents a column or field by which data can be sorted.



__Note:__ This is a UI5 Web Component! [SortItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SortItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`SortItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/SortItem/index.d.ts`,methods:[],props:{selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SortItem/index.d.ts`,name:`SortItemAttributes`}],description:`Defines if the sort item is selected.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SortItem/index.d.ts`,name:`SortItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/SortItem/index.d.ts`,name:`SortItemAttributes`}],description:`Defines the text of the sort item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/SortItem/index.d.ts`,name:`SortItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{abstract:``}}}catch{}})))()}var bt,H;function xt(){return(xt=e((()=>{(function(e){e.Sort=`Sort`,e.Filter=`Filter`,e.Group=`Group`})(bt||={}),H=bt})))()}function St(){return u(`div`,{slot:`header`,class:`ui5-vsd-header`,children:[u(`div`,{class:`ui5-vsd-header-container`,part:`header`,children:[u(`div`,{class:`ui5-vsd-header-start`,children:[this.showBackButton&&m(x,{design:`Transparent`,icon:`nav-back`,class:`ui5-vsd-back-button`,onClick:this._navigateToFilters}),m(_e,{wrappingType:`None`,level:`H1`,class:`ui5-vsd-title`,id:`${this._id}-label`,children:this._title})]}),m(`div`,{class:`ui5-vsd-header-end`,children:m(x,{design:`Transparent`,onClick:this._resetSettings,disabled:this._disableResetButton,children:this._resetButtonLabel})})]}),!this.showBackButton&&this.hasPagination&&m(`div`,{class:`ui5-vsd-sub-header-container`,children:m(`div`,{class:`ui5-vsd-sub-header`,children:m(Pe,{onSelectionChange:this._handleModeChange,children:Ct.call(this)})})})]})}function Ct(){let e=[];return this.shouldBuildSort&&e.push(m(w,{selected:this.isModeSort,icon:ft,"data-mode":`Sort`,tooltip:this._sortButtonTooltip})),this.shouldBuildFilter&&e.push(m(w,{selected:this.isModeFilter,icon:be,"data-mode":`Filter`,tooltip:this._filterButtonTooltip})),this.shouldBuildGroup&&e.push(m(w,{selected:this.isModeGroup,icon:Se,"data-mode":`Group`,tooltip:this._groupButtonTooltip})),this.shouldBuildCustomTabs&&this.customTabs.forEach(t=>{e.push(m(w,{selected:this.isCurrentCustomTabMode(t),"data-mode":this._customTabMode(t),tooltip:t.tooltip,icon:t.icon}))}),e}function wt(){return u(`div`,{class:{"ui5-vsd-content":!0,"ui5-vsd-content-expand":this.expandContent},children:[this.shouldBuildSort&&this.isModeSort&&Tt.call(this,!0),this.shouldBuildFilter&&this.isModeFilter&&Et.call(this),this.shouldBuildGroup&&this.isModeGroup&&Tt.call(this,!1),this.isModeCustom&&this._selectedCustomTab&&u(`div`,{class:`ui5-vsd-custom-tab-content`,children:[this._selectedCustomTab.titleText&&m(`div`,{class:`ui5-vsd-custom-tab-title`,children:this._selectedCustomTab.titleText}),m(`slot`,{class:`ui5-vsd-custom-tab-slot`,name:this._selectedCustomTab._individualSlot})]}),m(`div`,{class:`ui5-vsd-hidden-tabs`,children:this.customTabs.filter(e=>e!==this._selectedCustomTab).map(e=>m(`slot`,{name:e._individualSlot}))})]})}function Tt(e){let t=e?this._currentSettings.sortOrder:this._currentSettings.groupOrder,n=e?this._currentSettings.sortBy:this._currentSettings.groupBy;return u(`div`,{class:e?`ui5-vsd-sort`:`ui5-vsd-group`,children:[m(b,{selectionMode:`SingleStart`,onSelectionChange:e?this._onSortOrderChange:this._onGroupOrderChange,...e?{"sort-order":``}:{"group-order":``},accessibleNameRef:`${this._id}-label`,children:m(we,{headerText:e?this._sortOrderLabel:this._groupOrderLabel,children:t.map(e=>m(S,{selected:e.selected,children:e.text}))})}),m(b,{selectionMode:`SingleStart`,onSelectionChange:e?this._onSortByChange:this._onGroupByChange,...e?{"sort-by":``}:{"group-by":``},children:m(we,{headerText:e?this._sortByLabel:this._groupByLabel,children:n.map((e,t)=>m(S,{"data-ui5-external-action-item-index":t,selected:e.selected,children:e.text}))})})]})}function Et(){return m(oe,{children:this._filterStepTwo?m(b,{selectionMode:`Multiple`,onSelectionChange:this._handleFilterValueItemClick,"filter-options":``,accessibleNameRef:`${this._id}-label`,children:this._currentSettings.filters.filter(e=>e.selected).map(e=>m(oe,{children:e.filterOptions.map(e=>m(S,{selected:e.selected,children:e.text}))}))}):m(b,{onItemClick:this._changeCurrentFilter,"filter-list":``,accessibleNameRef:`${this._id}-label`,children:m(we,{headerText:this._filterByLabel,children:this.filterItems.map(e=>m(S,{class:`ui5-vsd-filterItemList`,additionalText:e.additionalText,accessibleName:this._selectedFiltersLabel(e),children:e.text}))})})})}function Dt(){return u(`div`,{slot:`footer`,class:`ui5-vsd-footer`,children:[m(x,{design:`Emphasized`,onClick:this._confirmSettings,children:this._okButtonLabel}),m(x,{design:`Transparent`,onClick:this._cancelSettings,children:this._cancelButtonLabel})]})}function Ot(){return u(Ae,{preventInitialFocus:!0,accessibleName:this._dialogTitle,onBeforeClose:this._restoreConfirmedOnEscape,stretch:this._isPhone,open:this.open,onBeforeOpen:this.beforeDialogOpen,onOpen:this.afterDialogOpen,onClose:this.afterDialogClose,children:[St.call(this),wt.call(this),Dt.call(this)]})}function kt(){return(kt=e((()=>{re(),ke(),Te(),ge(),Ne(),Me(),ve(),Ce(),Ee(),st(),pt(),ye(),xe()})))()}var At;function jt(){return(jt=e((()=>{a(),te(),nt(),o(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ie),o(`@ui5/webcomponents-fiori`,`sap_horizon`,async()=>tt,`host`),At=`[on-desktop] .ui5-vsd-content{height:var(--_ui5_vsd_content_height);min-width:350px}[on-desktop] .ui5-vsd-content.ui5-vsd-content-expand{height:var(--_ui5_vsd_expand_content_height);min-width:350px}.ui5-vsd-header{width:100%;padding-bottom:.25rem}.ui5-vsd-content{margin:0 .1px 0 -1rem}.ui5-vsd-title{font-size:var(--sapFontHeader5Size)}.ui5-vsd-header-container{display:flex;align-items:center;justify-content:space-between;height:var(--_ui5_vsd_header_container);line-height:var(--_ui5_vsd_header_container)}.ui5-vsd-header-end{display:flex}.ui5-vsd-sub-header{height:var(--_ui5_vsd_sub_header_container_height);line-height:var(--_ui5_vsd_sub_header_container_height)}.ui5-vsd-header-start{display:flex;align-items:center}.ui5-vsd-back-button{margin-inline-end:.5rem}.ui5-vsd-footer{width:100%;display:flex;justify-content:flex-end;align-items:center;margin:.1875rem 0}.ui5-vsd-footer [ui5-button]:first-child{margin-inline-end:.5rem;min-width:4rem}.ui5-vsd-sort{width:100%;height:100%}.ui5-vsd-custom-tab-content{width:100%;height:100%;box-sizing:border-box;padding:.5rem 1rem;overflow:auto;min-width:0}.ui5-vsd-custom-tab-title{color:var(--sapList_TableGroupHeaderTextColor);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);font-weight:700;line-height:2rem;min-height:2rem;margin:0}.ui5-vsd-custom-tab-slot::slotted([ui5-view-settings-custom-tab]){display:block;width:100%;max-width:100%;min-width:0;box-sizing:border-box;font-family:var(--sapFontFamily);color:var(--sapTextColor)}.ui5-vsd-hidden-tabs{display:none}[ui5-li-group]::part(header){overflow:hidden}[ui5-dialog]::part(content){padding-top:0;padding-bottom:0;padding-inline-end:0}:host [ui5-li]::part(native-li){padding-inline-start:var(--_ui5_vsd_content_li_padding)}:host [ui5-li].ui5-vsd-filterItemList::part(native-li){padding-inline-start:1rem}
`})))()}var U,W,Mt,G;function Nt(){return(Nt=e((()=>{d(),de(),c(),ce(),le(),je(),r(),ae(),f(),ee(),me(),he(),xt(),pt(),ye(),xe(),st(),We(),kt(),jt(),U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mt=`customTabs-`,G=W=class extends p{constructor(){super(...arguments),this.sortDescending=!1,this.groupDescending=!1,this.open=!1,this.resetEnabled=!1,this._currentSettings={sortOrder:[],sortBy:[],filters:[],groupOrder:[],groupBy:[]},this._initialSettings=this._currentSettings,this._confirmedSettings=this._currentSettings,this._currentMode=H.Sort,this._filterStepTwo=!1}onBeforeRendering(){this._currentSettings.filters&&this._currentSettings.filters.length&&this._setAdditionalTexts(),!this.shouldBuildSort&&(this.shouldBuildFilter?this._currentMode=H.Filter:this.shouldBuildGroup?this._currentMode=H.Group:this.shouldBuildCustomTabs&&(!this.isModeCustom||!this._selectedCustomTab)&&(this._currentMode=this._defaultMode))}onInvalidation(e){e.type===`slot`&&(this._confirmedSettings=this._settings)}_setAdditionalTexts(){this.filterItems.forEach((e,t)=>{let n=0;for(let r=0;r<e.values.length;r++)this._currentSettings.filters[t].filterOptions[r].selected&&n++;e.additionalText=n?`${n}`:``})}get _selectedFilter(){for(let e=0;e<this._currentSettings.filters.length;e++)if(this._currentSettings.filters[e].selected)return this._currentSettings.filters[e]}_selectedFiltersLabel(e){let t=e.text?`${e.text},`:``,n=e.additionalText?`${e.additionalText},`:``;return n?W.i18nBundle.getText(Ge,t,n):t}get shouldBuildSort(){return!!this.sortItems.length}get shouldBuildFilter(){return!!this.filterItems.length}get shouldBuildGroup(){return!!this.groupItems.length}get shouldBuildCustomTabs(){return!!this.customTabs.length}get hasPagination(){let e=[this.shouldBuildSort,this.shouldBuildFilter,this.shouldBuildGroup].filter(e=>e).length;return this.shouldBuildCustomTabs?e+this.customTabs.length>1:e>1}get _defaultMode(){return this.shouldBuildSort?H.Sort:this.shouldBuildFilter?H.Filter:this.shouldBuildGroup?H.Group:this.shouldBuildCustomTabs?this._customTabMode(this.customTabs[0]):H.Sort}get _selectedCustomTab(){if(this._isCustomMode(this._currentMode))return this.customTabs.find(e=>this._customTabMode(e)===this._currentMode)}get _filterByTitle(){let e=this._selectedFilter?this._selectedFilter.text:``;return`${W.i18nBundle.getText(qe)}: ${e}`}get _dialogTitle(){return W.i18nBundle.getText(Je)}get _okButtonLabel(){return W.i18nBundle.getText(Ye)}get _cancelButtonLabel(){return W.i18nBundle.getText(Xe)}get _resetButtonLabel(){return W.i18nBundle.getText(Qe)}get _ascendingLabel(){return W.i18nBundle.getText(He)}get _descendingLabel(){return W.i18nBundle.getText(Re)}get _sortOrderLabel(){return W.i18nBundle.getText(ze)}get _groupOrderLabel(){return W.i18nBundle.getText(Ke)}get _filterByLabel(){return W.i18nBundle.getText(qe)}get _sortByLabel(){return W.i18nBundle.getText(Be)}get _groupByLabel(){return W.i18nBundle.getText(et)}get _sortButtonTooltip(){return W.i18nBundle.getText(Ve)}get _filterButtonTooltip(){return W.i18nBundle.getText(Ze)}get _groupButtonTooltip(){return W.i18nBundle.getText($e)}get _resetButtonAction(){return W.i18nBundle.getText(Ue)}get _isPhone(){return i()}get _sortAscending(){return!this.sortDescending}get _title(){return this.showBackButton?this._filterByTitle:this._dialogTitle}get _disableResetButton(){return!this.resetEnabled&&this._dialog&&this._settingsAreInitial&&this._filteresAreInitial}get _settingsAreInitial(){let e=!0;return[`sortBy`,`sortOrder`,`groupBy`,`groupOrder`].forEach(t=>{this._currentSettings[t].forEach((n,r)=>{n.selected!==this._initialSettings[t][r].selected&&(e=!1)})}),e}get _filteresAreInitial(){let e=!0;return this._currentSettings.filters.forEach((t,n)=>{for(let r=0;r<t.filterOptions.length;r++)t.filterOptions[r].selected!==this._initialSettings.filters[n].filterOptions[r].selected&&(e=!1)}),e}get _settings(){return{sortOrder:JSON.parse(JSON.stringify(this.initSortOrderItems)),sortBy:JSON.parse(JSON.stringify(this.initSortByItems)),groupOrder:JSON.parse(JSON.stringify(this.initGroupOrderItems)),groupBy:JSON.parse(JSON.stringify(this.initGroupByItems)),filters:this.filterItems.map(e=>({text:e.text||``,selected:!1,filterOptions:e.values.map(e=>({text:e.text||``,selected:e.selected}))}))}}get initSortByItems(){return this.sortItems.map((e,t)=>({text:e.text,selected:e.selected,index:t}))}get initGroupByItems(){return this.groupItems.map((e,t)=>({text:e.text,selected:e.selected,index:t}))}get initSortOrderItems(){return[{text:this._ascendingLabel,selected:!this.sortDescending},{text:this._descendingLabel,selected:this.sortDescending}]}get initGroupOrderItems(){return[{text:this._ascendingLabel,selected:!this.groupDescending},{text:this._descendingLabel,selected:this.groupDescending}]}get expandContent(){return this._filterStepTwo||!this.hasPagination}get isModeSort(){return this._currentMode===H.Sort}get isModeFilter(){return this._currentMode===H.Filter}get isModeGroup(){return this._currentMode===H.Group}get isModeCustom(){return this._isCustomMode(this._currentMode)}get showBackButton(){return this.isModeFilter&&this._filterStepTwo}beforeDialogOpen(){this._currentSettings.sortOrder.length===0?(this._initialSettings=this._settings,this._currentSettings=this._settings,this._confirmedSettings=this._settings):this._restoreSettings(this._confirmedSettings),this.fireDecoratorEvent(`before-open`)}afterDialogOpen(){this._list?.focusFirstItem(),this._focusRecentlyUsedControl(),this.fireDecoratorEvent(`open`)}afterDialogClose(){this.fireDecoratorEvent(`close`)}_handleModeChange(e){let t=e.detail.selectedItems[0].getAttribute(`data-mode`);t&&this._isValidMode(t)&&(this._currentMode=t)}_handleFilterValueItemClick(e){let t=e.detail.targetItem.innerText;this._currentSettings.filters=this._currentSettings.filters.map(e=>(e.selected&&e.filterOptions.forEach(e=>{e.text===t&&(e.selected=!e.selected)}),e)),this._setSelectedProp(t),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_setSelectedProp(e){this.filterItems.forEach(t=>{t.values.forEach(t=>{t.text===e&&(t.selected=!t.selected)})})}async _navigateToFilters(){this._filterStepTwo=!1,await s(),this._filterList&&this._filterList.focusFirstItem()}async _changeCurrentFilter(e){if(this._filterStepTwo=!0,this._currentSettings.filters=this._currentSettings.filters.map(t=>(t.selected=t.text===e.detail.item.innerText,t)),await s(),this._filterOptions){let e=this._filterOptions.getSelectedItems();e.length?e[0].focus():this._filterOptions.focusFirstItem()}}_focusRecentlyUsedControl(){if(!this._recentlyFocused||!Object.keys(this._recentlyFocused).length)return;let e=this._recentlyFocused.getSelectedItems();e.length&&e[0].focus()}_confirmSettings(){this.open=!1,this._confirmedSettings=this._currentSettings,this.fireDecoratorEvent(`confirm`,this.eventsParams)}_cancelSettings(){this._restoreSettings(this._confirmedSettings),this.fireDecoratorEvent(`cancel`,this.eventsParams),this.open=!1}get eventsParams(){let e=this._currentSettings.sortOrder.filter(e=>e.selected)[0],t=this._currentSettings.sortBy.filter(e=>e.selected)[0],n=this._currentSettings.groupOrder.filter(e=>e.selected)[0],r=this._currentSettings.groupBy.filter(e=>e.selected)[0],i=e&&(e.text||``),a=!this._currentSettings.sortOrder[0].selected,o=t&&(t.text||``),s=t&&t.index,ee=this.sortItems[s],te=n&&(n.text||``),ne=!this._currentSettings.groupOrder[0].selected,c=r&&(r.text||``),l=r&&r.index,u=this.groupItems[l],d=this.filterItems.filter(e=>e.values.some(e=>e.selected));return{sortOrder:i,sortDescending:a,sortBy:o,sortByItem:ee,groupOrder:te,groupDescending:ne,groupBy:c,groupByItem:u,filters:this.selectedFilters,filterItems:d}}get selectedFilters(){let e=[];return this._currentSettings.filters.forEach(t=>{let n=[];t.filterOptions.forEach(e=>{e.selected&&n.push(e.text||``)}),n.length&&(e.push({}),e[e.length-1][t.text||``]=n)}),e}_restoreConfirmedOnEscape(e){e.detail.escPressed&&(this._cancelSettings(),this._currentMode=this._defaultMode,this._filterStepTwo=!1)}_resetSettings(){this._restoreSettings(this._initialSettings),this._recentlyFocused=this._sortOrder,this._focusRecentlyUsedControl(),pe(this._resetButtonAction,fe.Assertive),this.fireDecoratorEvent(`reset`)}_restoreSettings(e){this._currentSettings=JSON.parse(JSON.stringify(e)),this._currentMode=this._defaultMode,this._filterStepTwo=!1}isCurrentCustomTabMode(e){return this._currentMode===this._customTabMode(e)}_customTabMode(e){return e._individualSlot}_isCustomMode(e){return e.startsWith(Mt)}_isValidMode(e){return e===H.Sort||e===H.Filter||e===H.Group?!0:this._isCustomMode(e)?this.customTabs.some(t=>this._customTabMode(t)===e):!1}_onSortOrderChange(e){this._recentlyFocused=this._sortOrder,this._currentSettings.sortOrder=this.initSortOrderItems.map(t=>(t.selected=t.text===e.detail.targetItem.innerText,t)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onSortByChange(e){let t=Number(e.detail.targetItem.getAttribute(`data-ui5-external-action-item-index`));this._recentlyFocused=this._sortBy,this._currentSettings.sortBy=this.initSortByItems.map((e,n)=>(e.selected=n===t,e)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onGroupOrderChange(e){this._recentlyFocused=this._groupOrder,this._currentSettings.groupOrder=this.initGroupOrderItems.map(t=>(t.selected=t.text===e.detail.targetItem.innerText,t)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}_onGroupByChange(e){let t=Number(e.detail.targetItem.getAttribute(`data-ui5-external-action-item-index`));this._recentlyFocused=this._groupBy,this._currentSettings.groupBy=this.initGroupByItems.map((e,n)=>(e.selected=n===t,e)),this._currentSettings=JSON.parse(JSON.stringify(this._currentSettings))}setConfirmedSettings(e){if(e&&this._dialog&&!this._dialog.open){let t=JSON.parse(JSON.stringify(this._confirmedSettings));if(e.sortOrder)for(let n=0;n<t.sortOrder.length;n++)t.sortOrder[n].text===e.sortOrder?t.sortOrder[n].selected=!0:t.sortOrder[n].selected=!1;if(e.sortBy)for(let n=0;n<t.sortBy.length;n++)t.sortBy[n].text===e.sortBy?t.sortBy[n].selected=!0:t.sortBy[n].selected=!1;if(e.groupOrder)for(let n=0;n<t.groupOrder.length;n++)t.groupOrder[n].text===e.groupOrder?t.groupOrder[n].selected=!0:t.groupOrder[n].selected=!1;if(e.groupBy)for(let n=0;n<t.groupBy.length;n++)t.groupBy[n].text===e.groupBy?t.groupBy[n].selected=!0:t.groupBy[n].selected=!1;if(e.filters){let n={};for(let t=0;t<e.filters.length;t++)n[Object.keys(e.filters[t])[0]]=e.filters[t][Object.keys(e.filters[t])[0]];for(let e=0;e<t.filters.length;e++)for(let r=0;r<t.filters[e].filterOptions.length;r++)n[t.filters[e].text||``]&&n[t.filters[e].text||``].indexOf(t.filters[e].filterOptions[r].text||``)>-1?t.filters[e].filterOptions[r].selected=!0:t.filters[e].filterOptions[r].selected=!1}this._confirmedSettings=JSON.parse(JSON.stringify(t))}}},U([h({type:Boolean})],G.prototype,`sortDescending`,void 0),U([h({type:Boolean})],G.prototype,`groupDescending`,void 0),U([h({type:Boolean})],G.prototype,`open`,void 0),U([h({type:Boolean})],G.prototype,`resetEnabled`,void 0),U([h({type:Object})],G.prototype,`_recentlyFocused`,void 0),U([h({type:Object})],G.prototype,`_currentSettings`,void 0),U([h({type:Object})],G.prototype,`_initialSettings`,void 0),U([h({type:Object})],G.prototype,`_confirmedSettings`,void 0),U([h({noAttribute:!0})],G.prototype,`_currentMode`,void 0),U([h({type:Boolean,noAttribute:!0})],G.prototype,`_filterStepTwo`,void 0),U([y()],G.prototype,`sortItems`,void 0),U([y()],G.prototype,`filterItems`,void 0),U([y()],G.prototype,`groupItems`,void 0),U([y({type:HTMLElement,individualSlots:!0,invalidateOnChildChange:{properties:!0,slots:!1}})],G.prototype,`customTabs`,void 0),U([C(`[ui5-list]`)],G.prototype,`_list`,void 0),U([C(`[ui5-dialog]`)],G.prototype,`_dialog`,void 0),U([C(`[ui5-list][sort-order]`)],G.prototype,`_sortOrder`,void 0),U([C(`[ui5-list][sort-by]`)],G.prototype,`_sortBy`,void 0),U([C(`[ui5-list][group-order]`)],G.prototype,`_groupOrder`,void 0),U([C(`[ui5-list][group-by]`)],G.prototype,`_groupBy`,void 0),U([C(`[ui5-list][filter-list]`)],G.prototype,`_filterList`,void 0),U([C(`[ui5-list][filter-options]`)],G.prototype,`_filterOptions`,void 0),U([ue(`@ui5/webcomponents-fiori`)],G,`i18nBundle`,void 0),G=W=U([l({tag:`ui5-view-settings-dialog`,renderer:ne,styles:At,template:Ot}),v(`confirm`,{bubbles:!0}),v(`cancel`,{bubbles:!0}),v(`before-open`,{cancelable:!0}),v(`open`,{bubbles:!0}),v(`close`,{bubbles:!0}),v(`reset`,{bubbles:!0})],G),G.define()})))()}var K;function Pt(){return(Pt=e((()=>{Nt(),_(),K=g(`ui5-view-settings-dialog`,[],[`groupDescending`,`open`,`resetEnabled`,`sortDescending`],[`customTabs`,`filterItems`,`groupItems`,`sortItems`],[`before-open`,`cancel`,`close`,`confirm`,`open`,`reset`]),K.displayName=`ViewSettingsDialog`;try{K.displayName=`ViewSettingsDialog`,K.__docgenInfo={description:"The `ViewSettingsDialog` component helps the user to sort data within a list or a table.\nIt consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists,\nfor which you must be provide items(`SortItem` & `FilterItem` respectively)\nThese options can be used to create sorters for a table.\n\nThe `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and\nthe main screen is dimmed/blocked.\nThe `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.\n\n### Structure\nA `ViewSettingsDialog` consists of a header, content, and a footer for action buttons.\nThe `ViewSettingsDialog` is usually displayed at the center of the screen.\n\n### Responsive Behavior\n`ViewSettingsDialog` stretches on full screen on phones.\n\n\n\n__Note:__ This is a UI5 Web Component! [ViewSettingsDialog UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ViewSettingsDialog) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ViewSettingsDialog`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,methods:[],props:{customTabs:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Defines custom tabs for the dialog.

The custom tabs are rendered after the built-in tabs (\`Sort\`, \`Filter\`, \`Group\`).

**Note:** If you want to use this slot, you need to import the item: \`import "@ui5/webcomponents-fiori/dist/ViewSettingsDialogCustomTab.js";\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="customTabs"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<ViewSettingsDialogCustomTab>\``,name:`customTabs`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},filterItems:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Defines the \`filterItems\` list.

**Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/FilterItem.js";\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="filterItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<FilterItem>\``,name:`filterItems`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},groupItems:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Defines the list of items against which the user could group data.

**Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/GroupItem.js";\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="groupItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<GroupItem>\``,name:`groupItems`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},sortItems:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Defines the list of items against which the user could sort data.

**Note:** If you want to use this slot, you need to import used item: \`import "@ui5/webcomponents-fiori/dist/SortItem.js";\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sortItems"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<SortItem>\``,name:`sortItems`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired before the component is opened.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void`}},onCancel:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired when cancel button is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onCancel`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogCancelEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired after the dialog is closed.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void`}},onConfirm:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired when confirmation button is activated.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onConfirm`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogConfirmEventDetail>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired after the dialog is opened.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void`}},onReset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`}],description:`Fired when the Reset button is clicked.

**Note:** This event is particularly relevant when the dialog contains custom tabs.
By default, the Reset button resets all built-in settings (sort, filter, group) to their
initial values. However, the component has no knowledge of the content or state inside
custom tabs — it cannot detect what has changed or what the "default" values are.
Therefore, when this event is fired, it is the application developer's responsibility
to listen for it and manually reset the custom tab content to its initial state.

**Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onReset`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ViewSettingsDialogDomRef, never>) => void`}},groupDescending:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`}],description:`Defines the initial group order.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents-fiori**.`,name:`groupDescending`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`}],description:`Indicates if the dialog is open.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},resetEnabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`}],description:`Controls whether the Reset button is always enabled.

By default, the Reset button is enabled only when the built-in settings (Sort, Filter, Group)
differ from their initial state — the component can detect these changes automatically.
However, when the dialog contains custom tabs, the component has no way to detect
whether the custom tab content has been modified by the user.

Set this property to \`true\` when the user has made changes inside a custom tab, so that
the Reset button becomes enabled and the user can trigger a reset.
Set it back to \`false\` once the custom tab content is back to its initial state
(e.g. after the user confirms or after a reset is applied).

**Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.`,name:`resetEnabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},sortDescending:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`}],description:`Defines the initial sort order.`,name:`sortDescending`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialog/index.d.ts`,name:`ViewSettingsDialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}function Ft(){return m(`slot`,{})}function It(){return(It=e((()=>{re()})))()}var q,J;function Lt(){return(Lt=e((()=>{f(),c(),d(),de(),ae(),It(),mt(),q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},J=class extends p{constructor(){super(...arguments),this.titleText=``,this.tooltip=``,this.icon=`action-settings`}},q([h({type:String})],J.prototype,`titleText`,void 0),q([h({type:String})],J.prototype,`tooltip`,void 0),q([h({type:String})],J.prototype,`icon`,void 0),q([y({type:Node,default:!0})],J.prototype,`content`,void 0),J=q([l({tag:`ui5-view-settings-dialog-custom-tab`,renderer:ne,template:Ft})],J),J.define()})))()}var Y;function Rt(){return(Rt=e((()=>{Lt(),_(),Y=g(`ui5-view-settings-dialog-custom-tab`,[`icon`,`titleText`,`tooltip`],[],[],[]),Y.displayName=`ViewSettingsDialogCustomTab`;try{Y.displayName=`ViewSettingsDialogCustomTab`,Y.__docgenInfo={description:`The \`ViewSettingsDialogCustomTab\` component allows defining custom tabs for the \`ViewSettingsDialog\`.



__Note:__ This is a UI5 Web Component! [ViewSettingsDialogCustomTab UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ViewSettingsDialogCustomTab) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ViewSettingsDialogCustomTab`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabPropTypes`}],description:`Defines the custom tab content.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},icon:{defaultValue:{value:`"action-settings"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`}],description:`Defines the icon of the custom tab button in the segmented button.`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`},required:!1,tags:{default:`"action-settings"`},type:{name:`string`}},titleText:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`}],description:`Defines the title text of the custom tab.

**Note:** It is displayed in the dialog header when this tab is selected.`,name:`titleText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`},required:!1,tags:{},type:{name:`string`}},tooltip:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`}],description:`Defines the tooltip of the custom tab button.

**Note:** It is shown on the segmented button item.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ViewSettingsDialogCustomTab/index.d.ts`,name:`ViewSettingsDialogCustomTabAttributes`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of __@ui5/webcomponents-fiori__.`,abstract:``}}}catch{}})))()}var zt=t({Default:()=>Q,WithCustomTabs:()=>$,__namedExportsOrder:()=>Vt,default:()=>Bt}),X,Z,Bt,Q,$,Vt;function Ht(){return(Ht=e((()=>{ht(),X=n(),De(),rt(),it(),k(),N(),L(),Fe(),Ie(),V(),ct(),ut(),Rt(),Pt(),Z=se(),Bt={title:`Modals & Popovers / ViewSettingsDialog`,component:K,argTypes:{filterItems:{control:{disable:!0}},sortItems:{control:{disable:!0}},customTabs:{control:{disable:!0}}},args:{open:!1,filterItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(O,{text:`Position`,values:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(M,{text:`CEO`}),(0,Z.jsx)(M,{text:`CTO`}),(0,Z.jsx)(M,{text:`CIO`})]})}),(0,Z.jsx)(O,{text:`Department`,values:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(M,{text:`Legal`}),(0,Z.jsx)(M,{text:`Finance`}),(0,Z.jsx)(M,{text:`Development`})]})})]}),sortItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(B,{text:`Name`}),(0,Z.jsx)(B,{text:`Position`}),(0,Z.jsx)(B,{text:`Company`}),(0,Z.jsx)(B,{text:`Department`})]})},parameters:{chromatic:{delay:999}},tags:[`package:@ui5/webcomponents-fiori`]},Q={render:e=>{let[t,n]=(0,X.useState)(e.open);return(0,X.useEffect)(()=>{n(e.open)},[e.open]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Oe,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,Z.jsx)(K,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)}})]})}},$={render:e=>{let[t,n]=(0,X.useState)(e.open);return(0,X.useEffect)(()=>{n(e.open)},[e.open]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Oe,{onClick:()=>{n(!0)},children:`Show ViewSettingsDialog`}),(0,Z.jsx)(K,{...e,open:t,onClose:t=>{n(!1),e.onClose(t)},sortItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(B,{text:`Name`,selected:!0}),(0,Z.jsx)(B,{text:`Position`}),(0,Z.jsx)(B,{text:`Company`}),(0,Z.jsx)(B,{text:`Department`})]}),filterItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(O,{text:`Position`,values:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(M,{text:`CTO`}),(0,Z.jsx)(M,{text:`CPO`}),(0,Z.jsx)(M,{text:`VP`})]})}),(0,Z.jsx)(O,{text:`Department`,values:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(M,{text:`Sales`}),(0,Z.jsx)(M,{text:`Management`}),(0,Z.jsx)(M,{text:`PR`})]})}),(0,Z.jsx)(O,{text:`Location`,values:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(M,{text:`Walldorf`}),(0,Z.jsx)(M,{text:`New York`}),(0,Z.jsx)(M,{text:`London`})]})})]}),groupItems:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(I,{text:`Name`,selected:!0}),(0,Z.jsx)(I,{text:`Position`}),(0,Z.jsx)(I,{text:`Company`}),(0,Z.jsx)(I,{text:`Department`}),(0,Z.jsx)(I,{text:`(Not Grouped)`})]}),customTabs:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Y,{titleText:`Preferences`,tooltip:`Preferences`,icon:`action-settings`,children:(0,Z.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,Z.jsx)(`span`,{children:`Compact mode`}),(0,Z.jsx)(dt,{})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`0.75rem`},children:[(0,Z.jsx)(`span`,{children:`Live updates`}),(0,Z.jsx)(dt,{checked:!0})]}),(0,Z.jsxs)(Le,{children:[(0,Z.jsx)(T,{selected:!0,children:`Cozy`}),(0,Z.jsx)(T,{children:`Compact`})]})]})}),(0,Z.jsx)(Y,{icon:`palette`,titleText:`Display`,tooltip:`Display`,children:(0,Z.jsxs)(`div`,{style:{padding:`0.75rem`,display:`grid`,gap:`0.75rem`},children:[(0,Z.jsxs)(Le,{children:[(0,Z.jsx)(T,{selected:!0,children:`List`}),(0,Z.jsx)(T,{children:`Grid`})]}),(0,Z.jsxs)(at,{placeholder:`Theme`,children:[(0,Z.jsx)(ot,{text:`Default`}),(0,Z.jsx)(ot,{text:`High Contrast`}),(0,Z.jsx)(ot,{text:`Compact Light`})]}),(0,Z.jsx)(lt,{min:10,max:100,value:25})]})})]})})]})}},Vt=[`Default`,`WithCustomTabs`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog {...args} open={open} onClose={e => {
        setOpen(false);
        args.onClose(e);
      }} />
      </>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog {...args} open={open} onClose={e => {
        setOpen(false);
        args.onClose(e);
      }} sortItems={<>
              <SortItem text="Name" selected />
              <SortItem text="Position" />
              <SortItem text="Company" />
              <SortItem text="Department" />
            </>} filterItems={<>
              <FilterItem text="Position" values={<>
                    <FilterItemOption text="CTO" />
                    <FilterItemOption text="CPO" />
                    <FilterItemOption text="VP" />
                  </>} />
              <FilterItem text="Department" values={<>
                    <FilterItemOption text="Sales" />
                    <FilterItemOption text="Management" />
                    <FilterItemOption text="PR" />
                  </>} />
              <FilterItem text="Location" values={<>
                    <FilterItemOption text="Walldorf" />
                    <FilterItemOption text="New York" />
                    <FilterItemOption text="London" />
                  </>} />
            </>} groupItems={<>
              <GroupItem text="Name" selected />
              <GroupItem text="Position" />
              <GroupItem text="Company" />
              <GroupItem text="Department" />
              <GroupItem text="(Not Grouped)" />
            </>} customTabs={<>
              <ViewSettingsDialogCustomTab titleText="Preferences" tooltip="Preferences" icon="action-settings">
                <div style={{
            padding: '0.75rem',
            display: 'grid',
            gap: '0.75rem'
          }}>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}>
                    <span>Compact mode</span>
                    <Switch />
                  </div>
                  <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}>
                    <span>Live updates</span>
                    <Switch checked />
                  </div>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>Cozy</SegmentedButtonItem>
                    <SegmentedButtonItem>Compact</SegmentedButtonItem>
                  </SegmentedButton>
                </div>
              </ViewSettingsDialogCustomTab>
              <ViewSettingsDialogCustomTab icon="palette" titleText="Display" tooltip="Display">
                <div style={{
            padding: '0.75rem',
            display: 'grid',
            gap: '0.75rem'
          }}>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>List</SegmentedButtonItem>
                    <SegmentedButtonItem>Grid</SegmentedButtonItem>
                  </SegmentedButton>
                  <ComboBox placeholder="Theme">
                    <ComboBoxItem text="Default" />
                    <ComboBoxItem text="High Contrast" />
                    <ComboBoxItem text="Compact Light" />
                  </ComboBox>
                  <StepInput min={10} max={100} value={25} />
                </div>
              </ViewSettingsDialogCustomTab>
            </>} />
      </>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{Y as a,V as c,M as d,N as f,Ht as i,I as l,k as m,zt as n,Rt as o,O as p,$ as r,B as s,Q as t,L as u};