import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as fe}from"./Friends500-CRbR9XAn.js";import{e as Re}from"./edit-BOpKjwiH.js";import{h as je,j as k,p as ge,d as Ne,s as p,m as F,y as De,B as we,w as O}from"./jsx-runtime-2NO35c9p.js";import{f as ve}from"./Icon-Dy5MqRQN.js";import{v as ye}from"./i18n-defaults-CmVK7_Fz.js";import{r as f}from"./index-U0ga5oGA.js";import{L as Te}from"./index-49bJeJce.js";import{a as L,S as y}from"./index-D2Tisrj8.js";import{T,c as _e,d as m,a as w,b as c}from"./index-gxrz3lA1.js";import{l as xe}from"./event-strict-DgQLNDEV.js";import{i as Se}from"./i18n-CjR4HGlq.js";import{d as Be}from"./parameters-bundle.css-D0uTR4GL.js";import{i as Z,b as Ie,B as Ve,m as qe,P as Me,u as Pe,Z as Ae,W as Ee,D as He,O as Fe,Y as Oe,F as Ge}from"./Keys-CLf_QmYW.js";import{cb as ze,cc as ke,cd as Ue}from"./i18n-defaults-Wx6G1HAa.js";import{d as Le,t as We}from"./TableUtils-BdnmFIk7.js";import{a as $e,T as J}from"./index-Bn3Vy9nC.js";import"./navigation-right-arrow-tFe_ameE.js";import{a as Ke,T as Ye}from"./index-Cn1bVH_V.js";import{t as Ze}from"./getActiveElement-kltGt_DR.js";import{b as U}from"./TabbableElements-CqFMEI5U.js";var g;(function(i){i.Button="Button",i.Scroll="Scroll"})(g||(g={}));function Je(){return je("div",{id:"button",tabindex:-1,"data-ui5-growing-active":this._activeState,onClick:this.loadMore,onKeyDown:this._onKeydown,onKeyUp:this._onKeyup,onFocusOut:this._onFocusout,role:"button","aria-labelledby":"text subtext","aria-describedby":"description",children:[k("span",{id:"text",children:this._buttonText}),this.subtext&&k("span",{id:"subtext",children:this.subtext}),k("span",{id:"description",class:"ui5-hidden-text","aria-hidden":"true",children:this._buttonDescription})]})}ge("@ui5/webcomponents-theming","sap_horizon",async()=>Ne);ge("@ui5/webcomponents","sap_horizon",async()=>Be);const Qe=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{flex-grow:1}#button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#button:hover{background:var(--sapButton_Hover_Background)}}#button:active,#button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var _=function(i,t,o,a){var l=arguments.length,n=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,o,a);else for(var r=i.length-1;r>=0;r--)(s=i[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},A;let b=A=class extends we{constructor(){super(...arguments),this.mode="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){var t,o;if(this._shouldFocusRow){this._shouldFocusRow=!1;let a=(t=this._currentLastRow)==null?void 0:t.nextElementSibling;this.hasGrowingComponent()&&(a||(a=this.getFocusDomRef())),a||(a=(o=this._table)==null?void 0:o.rows[0]),a==null||a.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){var t;this._table=void 0,(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){var t;(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.mode===g.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.mode===`${g.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1],this._shouldFocusRow=!0),this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.mode===g.Scroll}_observeTableEnd(){this._table&&this._getIntersectionObserver().observe(this._table._endRow)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:Le(this._table??document.body),rootMargin:"5px"})),this._observer}_onIntersection(t){t.some(o=>o.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){Z(t)&&(t.preventDefault(),this._activeState=!0),Ie(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){Z(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _buttonText(){return this.text||A.i18nBundle.getText(ze)}get _buttonDescription(){return A.i18nBundle.getText(ke)}get _hasButton(){return this.hasGrowingComponent()}};_([p()],b.prototype,"mode",void 0);_([p()],b.prototype,"text",void 0);_([p()],b.prototype,"subtext",void 0);_([p({type:Boolean,noAttribute:!0})],b.prototype,"_activeState",void 0);_([p({type:Number,noAttribute:!0})],b.prototype,"_invalidate",void 0);_([Se("@ui5/webcomponents")],b,"i18nBundle",void 0);b=A=_([F({tag:"ui5-table-growing",renderer:De,template:Je,styles:Qe}),xe("load-more",{bubbles:!1})],b);b.define();const x=O("ui5-table-growing",["mode","subtext","text"],[],[],["load-more"]);x.displayName="TableGrowing";try{x.displayName="TableGrowing",x.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
to the table.

The component offers two options:
* Button - a More button is displayed, clicking it will load more data.
* Scroll - additional data is loaded automatically when the user scrolls to the end of the table.

### Usage

The \`TableGrowing\` component is only used inside the \`Table\` component as a feature.
It has to be slotted inside the \`Table\` in the \`features\` slot.
The component is not intended to be used as a standalone component.

\`\`\`html
<Table>
	<TableGrowing mode="Button" text="More" slot="features"></TableGrowing>
</Table>
\`\`\`

**Notes**:
* When the \`TableGrowing\` component is used with the \`Scroll\` mode and the table is currently not scrollable,
the component will render a growing button instead to ensure growing capabilities until the table becomes scrollable.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},mode:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
a growing button will be rendered instead to ensure growing functionality.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},subtext:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:"subtext",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when mode is set to \`Scroll\`.

**Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
current language.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="TableGrowing",x.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
to the table.

The component offers two options:
* Button - a More button is displayed, clicking it will load more data.
* Scroll - additional data is loaded automatically when the user scrolls to the end of the table.

### Usage

The \`TableGrowing\` component is only used inside the \`Table\` component as a feature.
It has to be slotted inside the \`Table\` in the \`features\` slot.
The component is not intended to be used as a standalone component.

\`\`\`html
<Table>
	<TableGrowing mode="Button" text="More" slot="features"></TableGrowing>
</Table>
\`\`\`

**Notes**:
* When the \`TableGrowing\` component is used with the \`Scroll\` mode and the table is currently not scrollable,
the component will render a growing button instead to ensure growing capabilities until the table becomes scrollable.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},mode:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
a growing button will be rendered instead to ensure growing functionality.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},subtext:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:"subtext",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when mode is set to \`Scroll\`.

**Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
current language.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var $=function(i,t,o,a){var l=arguments.length,n=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,o,a);else for(var r=i.length-1;r>=0;r--)(s=i[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},W;let M=W=class extends $e{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}getRenderInfo(){return{text:this._i18nNavigation,icon:"navigation-right-arrow",interactive:this.interactive}}get _i18nNavigation(){return W.i18nBundle.getText(Ue)}};$([p({type:Boolean})],M.prototype,"interactive",void 0);$([Se("@ui5/webcomponents")],M,"i18nBundle",void 0);M=W=$([F({tag:"ui5-table-row-action-navigation"})],M);M.define();const S=O("ui5-table-row-action-navigation",[],["interactive","invisible"],[],["click"]);S.displayName="TableRowActionNavigation";try{S.displayName="TableRowActionNavigation",S.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableRowActionNavigation",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines the interactive state of the navigation action.",name:"interactive",required:!1,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="TableRowActionNavigation",S.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableRowActionNavigation",props:{onClick:{defaultValue:null,description:`Fired when a row action is clicked.

**Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableRowActionNavigationDomRef, never>) => void"}},interactive:{defaultValue:{value:"false"},description:"Defines the interactive state of the navigation action.",name:"interactive",required:!1,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:`Defines the visibility of the row action.

**Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.`,name:"invisible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var Ce=function(i,t,o,a){var l=arguments.length,n=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,o,a);else for(var r=i.length-1;r>=0;r--)(s=i[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n};let H=class extends Ke{isSelected(t){const o=this.getRowKey(t);return o?this.selected===o:!1}setSelected(t,o,a=!1){const l=this.getRowKey(t);l&&(this.selected=o?l:void 0,a&&this.fireDecoratorEvent("change"))}getSelectedRow(){var t;return(t=this._table)==null?void 0:t.rows.find(o=>this.isSelected(o))}};Ce([p()],H.prototype,"selected",void 0);H=Ce([F({tag:"ui5-table-selection-single"})],H);H.define();const C=O("ui5-table-selection-single",["behavior","selected"],[],[],["change"]);C.displayName="TableSelectionSingle";try{C.displayName="TableSelectionSingle",C.__docgenInfo={description:'The `TableSelectionSingle` component is used inside the `Table` to add single selection capabilities to the `Table`.\nSince selection is key-based, each `TableRow` must define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelectionSingle` component is a feature designed exclusively for use within the `Table` component.\nIt must be placed inside the `features` slot of `Table`.\nThis component is not intended for standalone use.\n\n```html\n<Table>\n	<TableSelectionSingle slot="features" selected="Row1"></TableSelectionSingle>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelectionSingle",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionSingleDomRef, never>) => void"}},behavior:{defaultValue:{value:'"RowSelector"'},description:`Defines the selection behavior.

**Note:** Available since [v2.11](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11) of **@ui5/webcomponents**.`,name:"behavior",required:!1,type:{name:"enum",value:[{value:'"RowOnly"'},{value:'"RowSelector"'},{value:'"RowSelector"'},{value:'"RowOnly"'}]}},selected:{defaultValue:{value:"undefined"},description:"Defines the `row-key` value of the selected row.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="TableSelectionSingle",C.__docgenInfo={description:'The `TableSelectionSingle` component is used inside the `Table` to add single selection capabilities to the `Table`.\nSince selection is key-based, each `TableRow` must define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelectionSingle` component is a feature designed exclusively for use within the `Table` component.\nIt must be placed inside the `features` slot of `Table`.\nThis component is not intended for standalone use.\n\n```html\n<Table>\n	<TableSelectionSingle slot="features" selected="Row1"></TableSelectionSingle>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelectionSingle",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionSingleDomRef, never>) => void"}},behavior:{defaultValue:{value:'"RowSelector"'},description:`Defines the selection behavior.

**Note:** Available since [v2.11](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11) of **@ui5/webcomponents**.`,name:"behavior",required:!1,type:{name:"enum",value:[{value:'"RowOnly"'},{value:'"RowSelector"'},{value:'"RowSelector"'},{value:'"RowOnly"'}]}},selected:{defaultValue:{value:"undefined"},description:"Defines the `row-key` value of the selected row.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var G=function(i,t,o,a){var l=arguments.length,n=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,o,a);else for(var r=i.length-1;r>=0;r--)(s=i[r])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},h;(function(i){i[i.None=0]="None",i[i.Next=1]="Next",i[i.Previous=2]="Previous",i[i.Released=4]="Released",i[i.NextReleased=5]="NextReleased",i[i.PreviousReleased=6]="PreviousReleased"})(h||(h={}));let R=class extends we{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=h.None,this._onScrollBound=We(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&h.Released){const o=this._table.rows.at(this._tabBlockingState&h.Next?-1:0),a=U(o).at(this._tabBlockingState&h.Next?0:-1);this._tabBlockingState=h.None,(a||o).focus()}}onExitDOM(){this._table&&(this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],o=t.offsetHeight;let a=this._scrollContainer.scrollTop,l=this._scrollContainer.clientHeight;t.sticky?l=Math.max(0,l-o):a=Math.max(0,a-o),this._visibleRowCount=Math.ceil(l/this.rowHeight);let n=Math.floor(a/this.rowHeight)-this.extraRows;n=Math.max(0,n);let s=Math.max(0,n+this._visibleRowCount+2*this.extraRows);s=Math.min(s,this.rowCount),!(this._firstRowPosition===n&&this._lastRowPosition===s)&&(this._lastRowPosition=s,this._firstRowPosition=n,this.fireDecoratorEvent("range-change",{first:n,last:s}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position!==void 0&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=h.Released)}_onKeyDown(t){if(!this._table)return;let o=0;const a=this._table.rows,l=a[0],n=a[a.length-1],s=l.position!==0,r=n.position!==this.rowCount-1,u=this._table._tableNavigation,d=Ze();if(Ve(t)&&r&&U(this._rowsContainer).pop()===d?(this._tabBlockingState=h.Next,n.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight):qe(t)&&s&&U(this._rowsContainer).shift()===d?(this._tabBlockingState=h.Previous,l.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight*-1):r&&u._getNavigationItemsOfRow(n).includes(d)?Me(t)||Pe(t)?o=this.rowHeight:Ae(t)?o=this._visibleRowCount*this.rowHeight:Ee(t)&&d===n&&(o=this.rowCount*this.rowHeight):s&&u._getNavigationItemsOfRow(l).includes(d)&&(He(t)||Fe(t)?o=this.rowHeight*-1:Oe(t)?o=this._visibleRowCount*this.rowHeight*-1:Ge(t)&&d===l&&(o=this.rowCount*this.rowHeight*-1)),o){const v=this._table.scrollTop;this._scrollContainer.scrollTop+=o,this._scrollContainer.scrollTop!==v&&t.preventDefault()}}};G([p({type:Number})],R.prototype,"rowHeight",void 0);G([p({type:Number})],R.prototype,"rowCount",void 0);G([p({type:Number})],R.prototype,"extraRows",void 0);R=G([F({tag:"ui5-table-virtualizer"}),xe("range-change")],R);R.define();const j=O("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);j.displayName="TableVirtualizer";try{j.displayName="TableVirtualizer",j.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.

**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableVirtualizer",props:{onRangeChange:{defaultValue:null,description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onRangeChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void"}},extraRows:{defaultValue:{value:"0"},description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:"extraRows",required:!1,type:{name:"number"}},rowCount:{defaultValue:{value:"100"},description:`Defines the total count of rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowCount",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"45"},description:`Defines the height of the rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="TableVirtualizer",j.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.

**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableVirtualizer",props:{onRangeChange:{defaultValue:null,description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onRangeChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void"}},extraRows:{defaultValue:{value:"0"},description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:"extraRows",required:!1,type:{name:"number"}},rowCount:{defaultValue:{value:"100"},description:`Defines the total count of rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowCount",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"45"},description:`Defines the height of the rows in the table.

**Note:** For virtualization to work properly, this property is mandatory.`,name:"rowHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Xe="save",et="M32 363V86q0-23 15.5-38.5T86 32h340q22 0 38 15.5T480 86v340q0 23-16 38.5T426 480H149q-5 0-13-5L37 375q-5-5-5-12zm32-6l91 91h5V320q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v128h74q9 0 15.5-6.5T448 426V86q0-9-6.5-15.5T426 64h-42v128q0 14-9.5 23t-22.5 9H160q-14 0-23-9t-9-23V64H86q-9 0-15.5 6.5T64 86v271zm96-293v128h192V64H160zm160 384V320H192v128h128zm-96-56v-48q0-8 7-8h17q8 0 8 8v48q0 8-8 8h-17q-7 0-7-8z",tt=!1,nt=ye,ot="SAP-icons-v4",it="@ui5/webcomponents-icons";ve(Xe,{pathData:et,ltr:tt,accData:nt,collection:ot,packageName:it});const at="save",st="M505 151q7 9 7 19v252q0 38-26 64t-64 26H90q-38 0-64-26T0 422V90q0-38 26-64T90 0h252q10 0 19 7zm-44 29L332 51H179v90h147q11 0 18.5 7.5T352 167t-7.5 18-18.5 7H153q-11 0-18-7t-7-18V51H90q-17 0-28 11T51 90v332q0 17 11 28t28 11h38V314q0-11 7-18.5t18-7.5h206q11 0 18 7.5t7 18.5v147h38q17 0 28-11t11-28V180zM333 339H179v122h154V339z",lt=!1,rt=ye,ct="SAP-icons-v5",dt="@ui5/webcomponents-icons";ve(at,{pathData:st,ltr:lt,accData:rt,collection:ct,packageName:dt});const ut="save",ht=e.jsxs(_e,{sticky:!0,children:[e.jsx(m,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(m,{minWidth:"100px",children:e.jsx("span",{children:"Weight"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]}),K=e.jsxs(_e,{sticky:!0,children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Age"}),e.jsx(m,{children:"Friend Name"}),e.jsx(m,{children:"Friend Age"})]}),pt={title:"Data Display / Table",component:T,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:ht},tags:["package:@ui5/webcomponents"]},N={render:i=>e.jsxs(T,{...i,children:[e.jsxs(w,{rowKey:"0",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(c,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(w,{rowKey:"1",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(c,{children:e.jsx("span",{children:"1249EUR"})})]})]})},D={render:i=>{const[t,o]=f.useState(g.Button),a=r=>new Array(25).fill("").map((u,d)=>e.jsxs(w,{children:[e.jsx(c,{children:e.jsx("span",{children:d+r})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${d+r}-row`)),[l,n]=f.useState(a(1)),s=()=>{n(r=>[...r,...a(r.length+1)])};return e.jsxs(e.Fragment,{children:[e.jsxs(Te,{showColon:!0,style:{marginInlineEnd:"0.5rem"},children:["Growing ",e.jsx("code",{children:"mode"})]}),e.jsxs(L,{style:{marginBlockEnd:"0.5rem"},onSelectionChange:r=>{o(r.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:t===g.Scroll,children:"Scroll"}),e.jsx(y,{selected:t===g.Button,children:"Button"})]}),e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(T,{...i,features:e.jsx(x,{onLoadMore:s,mode:t}),children:l})})]})}},B={render(i){const[t,o]=f.useState("Single"),[a,l]=f.useState("RowSelector");return e.jsxs(e.Fragment,{children:[e.jsxs(L,{onSelectionChange:n=>{o(n.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:t==="None",children:"None"}),e.jsx(y,{selected:t==="Single",children:"Single"}),e.jsx(y,{selected:t==="Multi",children:"Multi"})]}),e.jsx(Te,{"aria-hidden":!0,style:{marginInline:"0.25rem"},children:"|"}),e.jsxs(L,{onSelectionChange:n=>{l(n.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:a==="RowSelector",children:"RowSelector"}),e.jsx(y,{selected:a==="RowOnly",children:"RowOnly"})]}),e.jsxs(T,{...i,features:e.jsxs(e.Fragment,{children:[t==="Single"&&e.jsx(C,{behavior:a}),t==="Multi"&&e.jsx(Ye,{behavior:a})]}),children:[e.jsxs(w,{rowKey:"0",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(c,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(w,{rowKey:"1",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(c,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},E=fe.map((i,t)=>({...i,position:t})),I={args:{className:"tableHeightContentDensity",headerRow:K},render(i){const[t,o]=f.useState(E.slice(0,9)),[a,l]=f.useState(!0),n=s=>{const{first:r,last:u}=s.detail,d=Math.max(r-2,0),v=Math.min(u+2,E.length);o(E.slice(d,v))};return f.useEffect(()=>{const s=document.body;if(!s)return;const r=new MutationObserver(u=>{u.forEach(d=>{d.type==="attributes"&&d.attributeName==="class"&&l(!s.classList.contains("ui5-content-density-compact"))})});return r.observe(s,{attributes:!0,attributeFilter:["class"]}),()=>{r.disconnect()}},[]),e.jsx(T,{...i,features:e.jsx(j,{rowCount:500,rowHeight:a?44:32,onRangeChange:n}),children:t.map(s=>e.jsxs(w,{position:s.position,children:[e.jsx(c,{children:e.jsx("span",{children:s.name})}),e.jsx(c,{children:e.jsx("span",{children:s.age})}),e.jsx(c,{children:e.jsx("span",{children:s.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:s.friend.age})})]},s.position))})}},V={args:{headerRow:K,rowActionCount:3},render(i){return e.jsx(T,{...i,children:fe.slice(0,10).map((t,o)=>e.jsxs(w,{actions:e.jsxs(e.Fragment,{children:[e.jsx(J,{icon:Re,text:"Edit"}),e.jsx(J,{icon:ut,text:"Save"}),e.jsx(S,{interactive:!!(o%2)})]}),children:[e.jsx(c,{children:e.jsx("span",{children:t.name})}),e.jsx(c,{children:e.jsx("span",{children:t.age})}),e.jsx(c,{children:e.jsx("span",{children:t.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:t.friend.age})})]},`${t.name}-${t.age}`))})}},q={args:{headerRow:K},render(i){const[t,o]=f.useState(E.slice(0,10)),a=n=>{const{source:s,destination:r}=n.detail;o(u=>{const d=u.findIndex(z=>`${z.position}`===s.element.dataset.id),v=u.findIndex(z=>`${z.position}`===r.element.dataset.id);if(d===-1||v===-1)return u;const P=[...u],[Y]=P.splice(d,1);return r.placement==="Before"?P.splice(v,0,Y):r.placement==="After"&&P.splice(v+1,0,Y),P})},l=n=>{const{source:s,destination:r}=n.detail;s.element.hasAttribute("ui5-table-row")&&r.element.hasAttribute("ui5-table-row")&&r.placement!=="On"&&n.preventDefault()};return e.jsx(T,{...i,onMove:a,onMoveOver:l,children:t.map(n=>e.jsxs(w,{movable:!0,"data-id":n.position,children:[e.jsx(c,{children:e.jsx("span",{children:n.name})}),e.jsx(c,{children:e.jsx("span",{children:n.age})}),e.jsx(c,{children:e.jsx("span",{children:n.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:n.friend.age})})]},n.position))})}};var Q,X,ee;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=N.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ne,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ae,se;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,re,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,he;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var pe,me,be;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=q.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const mt=["Default","GrowingTable","WithSelection","VirtualizedTableRows","withRowActions","dragAndDropRows"],Ot=Object.freeze(Object.defineProperty({__proto__:null,Default:N,GrowingTable:D,VirtualizedTableRows:I,WithSelection:B,__namedExportsOrder:mt,default:pt,dragAndDropRows:q,withRowActions:V},Symbol.toStringTag,{value:"Module"}));export{Ot as C,N as D,D as G,S as T,I as V,B as W,x as a,C as b,j as c,q as d,V as w};
