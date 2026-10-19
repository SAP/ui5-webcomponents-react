import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{B as r,X as i,Y as a}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{s as o,u as s}from"./Icon-xsFI9tdw.js";import{a as c,d as l,f as u,i as ee,l as te,m as ne,n as re,o as ie,p as ae,r as d,t as oe,u as f}from"./jsx-runtime-NHZLEOw0.js";import{$ as se,N as ce,O as le,Y as ue,_ as de,g as fe,nt as pe,q as me,ut as he,v as ge,y as _e}from"./Keys-DqJfIghV.js";import{n as p,t as m}from"./withWebComponent-CQvqGaAL.js";import{t as ve}from"./jsx-runtime-BdxMnOeJ.js";import{n as ye,t as be}from"./event-strict-C4u0wMzB.js";import{n as xe,t as Se}from"./i18n-BNTZIxbt.js";import{Do as h,Qi as Ce,na as we}from"./i18n-defaults-B1nZF45f.js";import{n as Te,t as Ee}from"./parameters-bundle.css-BLqi-7UI.js";import{n as De,t as Oe}from"./getActiveElement-CN57HK2a.js";import{A as ke,C as Ae}from"./i18n-defaults-mbnv3Rxx.js";import{n as g,r as je}from"./TabbableElements-ggtWKgGx.js";import{n as Me,t as Ne}from"./edit-BFBUpPac.js";import{t as Pe}from"./navigation-right-arrow-XbUzTGMK.js";import{n as Fe,t as Ie}from"./Label-Dy23W0XD.js";import{n as Le,t as Re}from"./query-DgyfBxue.js";import{C as ze,S as _,T as Be,_ as Ve,a as v,d as He,f as Ue,i as We,l as y,m as Ge,n as Ke,o as qe,p as Je,r as b,t as Ye,u as Xe,w as Ze,x as Qe}from"./TableHeaderRow-DMcjMLlJ.js";import{i as $e,n as et,r as x,t as S}from"./SegmentedButtonItem-B_3RiEow.js";import{n as tt,t as nt}from"./TableSelectionMulti-CQ37epl0.js";import{i as rt,n as it,r as C,t as at}from"./TableGrowing-Dzs_aYQQ.js";import{i as ot,n as st,r as ct,t as lt}from"./TableRowAction-L_5kNmpu.js";import{n as ut,t as dt}from"./TableSelectionSingle-Ctf7yRgR.js";import{n as ft,t as pt}from"./Friends500-DFsllH8N.js";function mt(){return ee(oe,{children:[d(Ze,{id:`group-cell`,"aria-colindex":1,"aria-colspan":this._ariaColSpan,"data-excluded-from-navigation":!0,children:d(`slot`,{})}),this._renderDummyCell&&d(Ze,{id:`dummy-cell`,role:`none`,"aria-hidden":!0,"data-excluded-from-navigation":`nofocus`})]})}function ht(){return(ht=e((()=>{re(),Be()})))()}var gt;function w(){return(w=e((()=>{i(),c(),Ee(),a(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ie),a(`@ui5/webcomponents`,`sap_horizon`,async()=>Te,`host`),gt=`:host{color:var(--sapList_TableGroupHeaderTextColor);background:var(--sapList_TableGroupHeaderBackground);font-weight:700;min-height:2rem}#group-cell{grid-column:1 / -1;padding-inline:var(--_ui5_first_table_cell_horizontal_padding)}:host([_render-dummy-cell]) #group-cell{grid-column:1 / -2}:host(:first-of-type)>[ui5-table-cell][aria-colspan]{border-bottom:var(--sapList_BorderWidth) solid var(--sapList_BorderColor);border-top:none}
`})))()}var T,E,_t,vt,D;function O(){return(O=e((()=>{l(),Re(),Ue(),Ge(),ht(),w(),h(),T=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_t=[],vt=[],D=E=class extends He{constructor(){super(),Object.defineProperty(this,"cells",{get:()=>_t}),Object.defineProperty(this,"actions",{get:()=>vt})}isGroupRow(){return!0}onEnterDOM(){super.onEnterDOM(),this.toggleAttribute(`ui5-table-row`,!0),this.setAttribute(`aria-roledescription`,E.i18nBundle.getText(Ce))}get _tableSelection(){}get _hasSelector(){return!1}get _isSelectable(){return!1}get _isInteractive(){return!1}get _isNavigable(){return!1}get _hasPopin(){return!1}get _ariaColSpan(){let e=this._table?.headerRow[0]?._visibleCells.length??1;return this._renderDummyCell?e-1:e}},T([Le(`#group-cell`)],D.prototype,`_groupCell`,void 0),D=E=T([u({tag:`ui5-table-group-row`,styles:[Je.styles,gt],template:mt})],D),D.define()})))()}var k;function A(){return(A=e((()=>{O(),m(),k=p(`ui5-table-group-row`,[`position`,`rowKey`],[`interactive`,`movable`,`navigated`],[`actions`],[]),k.displayName=`TableGroupRow`;try{k.displayName=`TableGroupRow`,k.__docgenInfo={description:"The `TableGroupRow` component represents a group header row in the `Table`.\nIt is used to visually group rows and spans across all visible table columns.\n\n### Usage\n\nThe `TableGroupRow` is placed as a direct child of `Table`, alongside `TableRow` elements.\nRows following a group row are considered part of that group until the next group row.\n\n```html\n<Table>\n  <TableHeaderRow>...</TableHeaderRow>\n  <TableGroupRow>Country: Germany</TableGroupRow>\n  <TableRow>...</TableRow>\n  <TableRow>...</TableRow>\n  <TableGroupRow>Country: France</TableGroupRow>\n  <TableRow>...</TableRow>\n</Table>\n```\n\n### Unsupported Features\n\nThe following features of `TableRow` are currently not supported by `TableGroupRow` and have no effect:\n\n- **Cells** (`cells` slot): Group rows render a single spanning cell with a text. Any slotted `TableCell` elements are ignored.\n- **Actions** (`actions` slot): Row actions such as `TableRowAction` or `TableRowActionNavigation` are not rendered.\n- **Navigation** (`navigated` property): The navigated indicator is not rendered on group rows.\n- **Interactive** (`interactive` property): Group rows do not support click/activation behavior.\n- **Selection** (`rowKey` property`): Group rows cannot be selected. They are excluded from select all and range selection operations.\n- **Virtualizer** (`position` property`): Group rows are not supported by the `TableVirtualizer`.\n\n\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:`TableGroupRow`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`}],description:`Defines the actions of the component.

**Note:** Use \`TableRowAction\` or \`TableRowActionNavigation\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="actions"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<TableRowActionBase>\``,name:`actions`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`}],description:`Defines the cells of the component.

**Note:** Use \`TableCell\` for the intended design.

__Supported Node Type/s:__ \`Array<TableCell>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the interactive state of the row.`,name:`interactive`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines whether the row is movable.

**Note:** Available since [v2.6.0](https://github.com/UI5/webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the navigated state of the row.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},position:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Defines the 0-based position of the row related to the total number of rows within the table when the \`TableVirtualizer\` feature is used.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`position`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},rowKey:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`}],description:`Unique identifier of the row.

**Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.`,name:`rowKey`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableGroupRow/index.d.ts`,name:`TableGroupRowAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var j,M,N;function yt(){return(yt=e((()=>{l(),te(),xe(),ot(),Pe(),h(),j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},N=M=class extends ct{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}onEnterDOM(){super.onEnterDOM(),this.interactive||console.warn("[ui5-table-row-action-navigation] The non-interactive (icon) rendering mode is deprecated and will be removed in the next major version. Set the `interactive` property to render the navigation action as an accessible button and handle the action via the `click` event. If the navigation should be triggered when a row is pressed, set the row's `interactive` property and use the `row-click` event of `ui5-table`. Button rendering will become the only supported behavior, and the `interactive` property will then be removed.")}getRenderInfo(){return{text:this._i18nNavigation,icon:`navigation-right-arrow`,interactive:this.interactive}}get _i18nNavigation(){return M.i18nBundle.getText(we)}},j([f({type:Boolean})],N.prototype,`interactive`,void 0),j([Se(`@ui5/webcomponents`)],N,`i18nBundle`,void 0),N=M=j([u({tag:`ui5-table-row-action-navigation`})],N),N.define()})))()}var P;function F(){return(F=e((()=>{yt(),m(),P=p(`ui5-table-row-action-navigation`,[],[`interactive`,`invisible`],[],[`click`]),P.displayName=`TableRowActionNavigation`;try{P.displayName=`TableRowActionNavigation`,P.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note:__ This is a UI5 Web Component! [TableRowActionNavigation UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableRowActionNavigation) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TableRowActionNavigation`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationPropTypes`}],description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void`}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`}],description:`Defines the interactive state of the navigation action.`,name:`interactive`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`},required:!1,tags:{default:`false`,deprecated:"As of version 2.20.0, the navigation icon is deprecated.\nFor better accessibility, the interactive mode which renders a button, must be used instead. To handle the action, attach a listener to the `click` event.\nIf the navigation should be triggered when a row is pressed, set the row's `interactive` property and use the `row-click` event of the `ui5-table`.\nThis property will be removed in the next major version."},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},invisible:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`}],description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:`invisible`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableRowActionNavigation/index.d.ts`,name:`TableRowActionNavigationAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var I,L,R;function bt(){return(bt=e((()=>{me(),ne(),l(),te(),be(),Oe(),je(),Ve(),I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},(function(e){e[e.None=0]=`None`,e[e.Next=1]=`Next`,e[e.Previous=2]=`Previous`,e[e.Released=4]=`Released`,e[e.NextReleased=5]=`NextReleased`,e[e.PreviousReleased=6]=`PreviousReleased`})(L||={}),R=class extends ae{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier=`TableVirtualizer`,this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=L.None,this._onScrollBound=Qe(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(e){if(this._table?this._updateRowsHeight():(this._table=e,this._scrollContainer.addEventListener(`scroll`,this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&L.Released){let e=this._table.rows.at(this._tabBlockingState&L.Next?-1:0),t=g(e).at(this._tabBlockingState&L.Next?0:-1);this._tabBlockingState=L.None,(t||e).focus()}}onExitDOM(){this._table&&=(this._scrollContainer.removeEventListener(`scroll`,this._onScrollBound),void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById(`rows`)}_onScroll(){let e=this._table.headerRow[0],t=e.offsetHeight,n=this._scrollContainer.scrollTop,r=this._scrollContainer.clientHeight;e.sticky?r=Math.max(0,r-t):n=Math.max(0,n-t),this._visibleRowCount=Math.ceil(r/this.rowHeight);let i=Math.floor(n/this.rowHeight)-this.extraRows;i=Math.max(0,i);let a=Math.max(0,i+this._visibleRowCount+2*this.extraRows);a=Math.min(a,this.rowCount),(this._firstRowPosition!==i||this._lastRowPosition!==a)&&(this._lastRowPosition=a,this._firstRowPosition=i,this.fireDecoratorEvent(`range-change`,{first:i,last:a}))}_updateRowsHeight(){let e=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${e}px`}_getTransform(){if(!this._table)return;let e=this._table.rows[0];if(e&&e.position!==void 0&&e.position>0)return`translateY(${e.position*this.rowHeight}px)`}_onRowInvalidate(e){e.name===`position`&&(e.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=L.Released)}_onKeyDown(e){if(!this._table)return;let t=0,n=this._table.rows,r=n[0],i=n[n.length-1],a=r.position!==0,o=i.position!==this.rowCount-1,s=this._table._tableNavigation,c=De();if(he(e)&&o&&g(this._rowsContainer).pop()===c?(this._tabBlockingState=L.Next,i.attachInvalidate(this._onRowInvalidateBound),t=this.rowHeight):le(e)&&a&&g(this._rowsContainer).shift()===c?(this._tabBlockingState=L.Previous,r.attachInvalidate(this._onRowInvalidateBound),t=this.rowHeight*-1):o&&s._getNavigationItemsOfRow(i).includes(c)?ce(e)||de(e)?t=this.rowHeight:pe(e)?t=this._visibleRowCount*this.rowHeight:se(e)&&c===i&&(t=this.rowCount*this.rowHeight):a&&s._getNavigationItemsOfRow(r).includes(c)&&(_e(e)||ge(e)?t=this.rowHeight*-1:ue(e)?t=this._visibleRowCount*this.rowHeight*-1:fe(e)&&c===r&&(t=this.rowCount*this.rowHeight*-1)),t){let n=this._table.scrollTop;this._scrollContainer.scrollTop+=t,this._scrollContainer.scrollTop!==n&&e.preventDefault()}}},I([f({type:Number})],R.prototype,`rowHeight`,void 0),I([f({type:Number})],R.prototype,`rowCount`,void 0),I([f({type:Number})],R.prototype,`extraRows`,void 0),R=I([u({tag:`ui5-table-virtualizer`}),ye(`range-change`)],R),R.define()})))()}var z;function B(){return(B=e((()=>{bt(),m(),z=p(`ui5-table-virtualizer`,[`extraRows`,`rowCount`,`rowHeight`],[],[],[`range-change`]),z.displayName=`TableVirtualizer`;try{z.displayName=`TableVirtualizer`,z.__docgenInfo={description:"The `TableVirtualizer` component is used inside the `Table` to virtualize the table rows, if the `overflowMode` property of the table is set to 'Scroll'.\nIt is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.\nThis allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.\n\n**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.\n**Note:** The `TableGroupRow` component is not supported by the virtualizer. Only `TableRow` elements can be virtualized.\n\n\n\n__Note:__ This is a UI5 Web Component! [TableVirtualizer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TableVirtualizer) | [Repository](https://github.com/UI5/webcomponents)",displayName:`TableVirtualizer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,methods:[],props:{onRangeChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerPropTypes`}],description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onRangeChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void`}},extraRows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:`extraRows`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},rowCount:{defaultValue:{value:`100`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the total count of rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:`rowCount`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`100`},type:{name:`number`}},rowHeight:{defaultValue:{value:`45`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`}],description:`Defines the height of the rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:`rowHeight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TableVirtualizer/index.d.ts`,name:`TableVirtualizerAttributes`},required:!1,tags:{default:`45`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of __@ui5/webcomponents__.`,experimental:`This component is not intended to be used in a productive enviroment. The API is under development and may be changed in the future.`}}}catch{}})))()}var xt,St,Ct,wt;function Tt(){return(Tt=e((()=>{o(),ke(),xt=`save`,St=`M1 11.344V2.688c0-.48.161-.88.484-1.204A1.633 1.633 0 0 1 2.688 1h10.624c.459 0 .855.161 1.188.484.333.323.5.724.5 1.204v10.624c0 .48-.167.88-.5 1.204-.333.322-.73.484-1.188.484H4.656c-.104 0-.24-.052-.406-.156l-3.094-3.125A.512.512 0 0 1 1 11.344Zm1-.188L4.844 14H5v-4c0-.292.094-.531.281-.719A.973.973 0 0 1 6 9h4c.27 0 .505.094.703.281A.947.947 0 0 1 11 10v4h2.313a.661.661 0 0 0 .484-.203.661.661 0 0 0 .203-.485V2.688a.661.661 0 0 0-.203-.485.661.661 0 0 0-.485-.203H12v4a.947.947 0 0 1-.297.719A.988.988 0 0 1 11 7H5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 4 6V2H2.687a.661.661 0 0 0-.484.203.661.661 0 0 0-.203.485v8.468ZM5 2v4h6V2H5Zm5 12v-4H6v4h4Zm-3-1.75v-1.5c0-.167.073-.25.219-.25h.531c.167 0 .25.083.25.25v1.5c0 .167-.083.25-.25.25h-.531c-.146 0-.219-.083-.219-.25Z`,Ct=Ae,wt=`0 0 16 16`,s(xt,{pathData:St,ltr:!1,viewBox:wt,accData:Ct,collection:`SAP-icons-v4`,packageName:`@ui5/webcomponents-icons`})})))()}var Et,Dt,Ot,kt;function At(){return(At=e((()=>{o(),ke(),Et=`save`,Dt=`M10.61 1c.175 0 .298.105.402.202l3.75 3.5A.75.75 0 0 1 15 5.25v8A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1h7.86ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H4.5V9.75A.75.75 0 0 1 5.25 9h5.5a.75.75 0 0 1 .75.75v3.75h1.75a.25.25 0 0 0 .25-.25V5.575L10.205 2.5H6v2h3.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V2.5H2.75ZM6 13.5h4v-3H6v3Z`,Ot=Ae,kt=`0 0 16 16`,s(Et,{pathData:Dt,ltr:!1,viewBox:kt,accData:Ot,collection:`SAP-icons-v5`,packageName:`@ui5/webcomponents-icons`})})))()}var jt;function Mt(){return(Mt=e((()=>{r(),Tt(),At(),jt=`save`})))()}var Nt=t({Default:()=>K,GrowingTable:()=>q,VirtualizedTableRows:()=>X,WithSelection:()=>J,__namedExportsOrder:()=>Pt,default:()=>G,dragAndDropRows:()=>Q,withGroupRows:()=>$,withRowActions:()=>Z}),V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pt;function Ft(){return(Ft=e((()=>{ft(),rt(),Me(),Mt(),V=n(),Fe(),$e(),et(),ze(),A(),it(),We(),Ke(),Xe(),st(),F(),tt(),ut(),B(),qe(),H=ve(),U=(0,H.jsxs)(Ye,{sticky:!0,children:[(0,H.jsx)(b,{width:`200px`,minWidth:`200px`,children:(0,H.jsx)(`span`,{children:`Product`})}),(0,H.jsx)(b,{minWidth:`200px`,children:(0,H.jsx)(`span`,{children:`Supplier`})}),(0,H.jsx)(b,{minWidth:`200px`,children:(0,H.jsx)(`span`,{children:`Dimensions`})}),(0,H.jsx)(b,{minWidth:`100px`,children:(0,H.jsx)(`span`,{children:`Weight`})}),(0,H.jsx)(b,{minWidth:`200px`,children:(0,H.jsx)(`span`,{children:`Price`})})]}),W=(0,H.jsxs)(Ye,{sticky:!0,children:[(0,H.jsx)(b,{children:`Name`}),(0,H.jsx)(b,{children:`Age`}),(0,H.jsx)(b,{children:`Friend Name`}),(0,H.jsx)(b,{children:`Friend Age`})]}),G={title:`Data Display / Table`,component:v,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:U},tags:[`package:@ui5/webcomponents`]},K={render:e=>(0,H.jsxs)(v,{...e,children:[(0,H.jsxs)(y,{rowKey:`0`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.2KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`956EUR`})})]}),(0,H.jsxs)(y,{rowKey:`1`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.5KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`1249EUR`})})]})]})},q={render:e=>{let[t,n]=(0,V.useState)(C.Button),r=e=>Array(25).fill(``).map((t,n)=>(0,H.jsxs)(y,{children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:n+e})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Placeholder`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Placeholder 2`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Placeholder 3`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Placeholder 4`})})]},`${n+e}-row`)),[i,a]=(0,V.useState)(r(1)),o=()=>{a(e=>[...e,...r(e.length+1)])};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(Ie,{showColon:!0,style:{marginInlineEnd:`0.5rem`},children:[`Growing `,(0,H.jsx)(`code`,{children:`mode`})]}),(0,H.jsxs)(x,{style:{marginBlockEnd:`0.5rem`},onSelectionChange:e=>{n(e.detail.selectedItems[0].textContent)},children:[(0,H.jsx)(S,{selected:t===C.Scroll,children:`Scroll`}),(0,H.jsx)(S,{selected:t===C.Button,children:`Button`})]}),(0,H.jsx)(`div`,{style:{height:`250px`,overflow:`auto`},children:(0,H.jsx)(v,{...e,features:(0,H.jsx)(at,{onLoadMore:o,mode:t}),children:i})})]})}},J={render(e){let[t,n]=(0,V.useState)(`Single`),[r,i]=(0,V.useState)(`RowSelector`);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(x,{onSelectionChange:e=>{n(e.detail.selectedItems[0].textContent)},children:[(0,H.jsx)(S,{selected:t===`None`,children:`None`}),(0,H.jsx)(S,{selected:t===`Single`,children:`Single`}),(0,H.jsx)(S,{selected:t===`Multi`,children:`Multi`})]}),(0,H.jsx)(Ie,{"aria-hidden":!0,style:{marginInline:`0.25rem`},children:`|`}),(0,H.jsxs)(x,{onSelectionChange:e=>{i(e.detail.selectedItems[0].textContent)},children:[(0,H.jsx)(S,{selected:r===`RowSelector`,children:`RowSelector`}),(0,H.jsx)(S,{selected:r===`RowOnly`,children:`RowOnly`})]}),(0,H.jsxs)(v,{...e,features:(0,H.jsxs)(H.Fragment,{children:[t===`Single`&&(0,H.jsx)(dt,{behavior:r}),t===`Multi`&&(0,H.jsx)(nt,{behavior:r})]}),children:[(0,H.jsxs)(y,{rowKey:`0`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.2KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`956EUR`})})]}),(0,H.jsxs)(y,{rowKey:`1`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.5KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`1249EUR`})})]})]})]})}},Y=pt.map((e,t)=>({...e,position:t})),X={args:{className:`tableHeightContentDensity`,headerRow:W},render(e){let[t,n]=(0,V.useState)(Y.slice(0,9)),[r,i]=(0,V.useState)(!0),a=e=>{let{first:t,last:r}=e.detail,i=Math.max(t-2,0),a=Math.min(r+2,Y.length);n(Y.slice(i,a))};return(0,V.useEffect)(()=>{let e=document.body;if(!e)return;let t=new MutationObserver(t=>{t.forEach(t=>{t.type===`attributes`&&t.attributeName===`class`&&i(!e.classList.contains(`ui5-content-density-compact`))})});return t.observe(e,{attributes:!0,attributeFilter:[`class`]}),()=>{t.disconnect()}},[]),(0,H.jsx)(v,{...e,features:(0,H.jsx)(z,{rowCount:500,rowHeight:r?44:32,onRangeChange:a}),children:t.map(e=>(0,H.jsxs)(y,{position:e.position,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.age})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.age})})]},e.position))})}},Z={args:{headerRow:W,rowActionCount:3},render(e){return(0,H.jsx)(v,{...e,children:pt.slice(0,10).map((e,t)=>(0,H.jsxs)(y,{actions:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(lt,{icon:Ne,text:`Edit`}),(0,H.jsx)(lt,{icon:jt,text:`Save`}),(0,H.jsx)(P,{interactive:!!(t%2)})]}),children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.age})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.age})})]},`${e.name}-${e.age}`))})}},Q={args:{headerRow:W},render(e){let[t,n]=(0,V.useState)(Y.slice(0,10)),r=e=>{let{source:t,destination:r}=e.detail;n(e=>{let n=e.findIndex(e=>`${e.position}`===t.element.dataset.id),i=e.findIndex(e=>`${e.position}`===r.element.dataset.id);if(n===-1||i===-1)return e;let a=[...e],[o]=a.splice(n,1);return r.placement===`Before`?a.splice(i,0,o):r.placement===`After`&&a.splice(i+1,0,o),a})},i=e=>{let{source:t,destination:n}=e.detail;t.element.hasAttribute(`ui5-table-row`)&&n.element.hasAttribute(`ui5-table-row`)&&n.placement!==`On`&&e.preventDefault()};return(0,H.jsx)(v,{...e,onMove:r,onMoveOver:i,children:t.map(e=>(0,H.jsxs)(y,{movable:!0,"data-id":e.position,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.age})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.name})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:e.friend.age})})]},e.position))})}},$={render:e=>(0,H.jsxs)(v,{...e,headerRow:U,children:[(0,H.jsx)(k,{children:`Supplier: Very Best Screens`}),(0,H.jsxs)(y,{rowKey:`0`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`30 x 18 x 3cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.2KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`956EUR`})})]}),(0,H.jsxs)(y,{rowKey:`1`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Notebook Basic 17HT-1001`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Very Best Screens`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`29 x 17 x 3.1cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`4.5KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`1249EUR`})})]}),(0,H.jsx)(k,{children:`Supplier: Smartcards`}),(0,H.jsxs)(y,{rowKey:`2`,children:[(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`ITelO Vault`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`Smartcards`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`32 x 21 x 4cm`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`5.1KG`})}),(0,H.jsx)(_,{children:(0,H.jsx)(`span`,{children:`299EUR`})})]})]})},Pt=[`Default`,`GrowingTable`,`WithSelection`,`VirtualizedTableRows`,`withRowActions`,`dragAndDropRows`,`withGroupRows`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args}>
        <TableRow rowKey={'0'}>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow rowKey={'1'}>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 2</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 3</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 4</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <>
        <Label showColon style={{
        marginInlineEnd: '0.5rem'
      }}>
          Growing <code>mode</code>
        </Label>
        <SegmentedButton style={{
        marginBlockEnd: '0.5rem'
      }} onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
      }}>
          <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
          <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
        </SegmentedButton>
        <div style={{
        height: '250px',
        overflow: 'auto'
      }}>
          <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
            {rows}
          </Table>
        </div>
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
    const [behavior, setBehavior] = useState<TableSelectionSinglePropTypes['behavior']>('RowSelector');
    return <>
        <SegmentedButton onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
      }}>
          <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
        </SegmentedButton>
        <Label aria-hidden style={{
        marginInline: '0.25rem'
      }}>
          |
        </Label>
        <SegmentedButton onSelectionChange={e => {
        setBehavior(e.detail.selectedItems[0].textContent as TableSelectionSinglePropTypes['behavior']);
      }}>
          <SegmentedButtonItem selected={'RowSelector' === behavior}>RowSelector</SegmentedButtonItem>
          <SegmentedButtonItem selected={'RowOnly' === behavior}>RowOnly</SegmentedButtonItem>
        </SegmentedButton>
        <Table {...args} features={<>
              {'Single' === mode && <TableSelectionSingle behavior={behavior} />}
              {'Multi' === mode && <TableSelectionMulti behavior={behavior} />}
            </>}>
          <TableRow rowKey={'0'}>
            <TableCell>
              <span>Notebook Basic</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>30 x 18 x 3cm</span>
            </TableCell>
            <TableCell>
              <span>4.2KG</span>
            </TableCell>
            <TableCell>
              <span>956EUR</span>
            </TableCell>
          </TableRow>
          <TableRow rowKey={'1'}>
            <TableCell>
              <span>Notebook Basic 17HT-1001</span>
            </TableCell>
            <TableCell>
              <span>Very Best Screens</span>
            </TableCell>
            <TableCell>
              <span>29 x 17 x 3.1cm</span>
            </TableCell>
            <TableCell>
              <span>4.5KG</span>
            </TableCell>
            <TableCell>
              <span>1249EUR</span>
            </TableCell>
          </TableRow>
        </Table>
      </>;
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'tableHeightContentDensity',
    headerRow: columns
  },
  render(args) {
    const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));
    const [isCozy, setIsCozy] = useState(true);
    const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = e => {
      const {
        first,
        last
      } = e.detail;

      // overscanCount = 2
      const overscanCountStart = Math.max(first - 2, 0);
      const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
      setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
    };

    // adjust row height according to content-density mode (only for demo purposes)
    useEffect(() => {
      const body = document.body;
      if (!body) return;
      const observer = new MutationObserver(mutationsList => {
        mutationsList.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setIsCozy(!body.classList.contains('ui5-content-density-compact'));
          }
        });
      });
      observer.observe(body, {
        attributes: true,
        attributeFilter: ['class']
      });
      return () => {
        observer.disconnect();
      };
    }, []);
    return <Table {...args} features={<TableVirtualizer rowCount={500} rowHeight={isCozy ? 44 : 32} onRangeChange={handleRangeChange} />}>
        {data.map(row => <TableRow key={row.position} position={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    headerRow: columns,
    rowActionCount: 3
  },
  render(args) {
    return <Table {...args}>
        {dataLarge.slice(0, 10).map((row, index) => <TableRow key={\`\${row.name}-\${row.age}\`} actions={<>
                <TableRowAction icon={editIcon} text="Edit" />
                <TableRowAction icon={saveIcon} text="Save" />
                <TableRowActionNavigation interactive={!!(index % 2)} />
              </>}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    headerRow: columns
  },
  render(args) {
    const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));
    const handleMove: TablePropTypes['onMove'] = e => {
      const {
        source,
        destination
      } = e.detail;
      // enabling this causes the Storybook to freeze due to the number of logs
      // args.onMove(e);

      setRows(prevRows => {
        const sourceIndex = prevRows.findIndex(row => \`\${row.position}\` === source.element.dataset.id);
        const destinationIndex = prevRows.findIndex(row => \`\${row.position}\` === destination.element.dataset.id);
        if (sourceIndex === -1 || destinationIndex === -1) {
          return prevRows;
        }
        const updatedRows = [...prevRows];
        const [movedRow] = updatedRows.splice(sourceIndex, 1);
        if (destination.placement === 'Before') {
          updatedRows.splice(destinationIndex, 0, movedRow);
        } else if (destination.placement === 'After') {
          updatedRows.splice(destinationIndex + 1, 0, movedRow);
        }
        return updatedRows;
      });
    };
    const handleMoveOver: TablePropTypes['onMoveOver'] = e => {
      const {
        source,
        destination
      } = e.detail;
      // args.onMoveOver(e);

      if (source.element.hasAttribute('ui5-table-row') && destination.element.hasAttribute('ui5-table-row') && destination.placement !== 'On') {
        e.preventDefault();
      }
    };
    return <Table {...args} onMove={handleMove} onMoveOver={handleMoveOver}>
        {rows.map(row => <TableRow key={row.position} movable data-id={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>)}
      </Table>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} headerRow={popInColumns}>
        <TableGroupRow>Supplier: Very Best Screens</TableGroupRow>
        <TableRow rowKey={'0'}>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow rowKey={'1'}>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
        <TableGroupRow>Supplier: Smartcards</TableGroupRow>
        <TableRow rowKey={'2'}>
          <TableCell>
            <span>ITelO Vault</span>
          </TableCell>
          <TableCell>
            <span>Smartcards</span>
          </TableCell>
          <TableCell>
            <span>32 x 21 x 4cm</span>
          </TableCell>
          <TableCell>
            <span>5.1KG</span>
          </TableCell>
          <TableCell>
            <span>299EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{J as a,$ as c,B as d,P as f,A as h,X as i,Z as l,k as m,q as n,Q as o,F as p,Nt as r,Ft as s,K as t,z as u};