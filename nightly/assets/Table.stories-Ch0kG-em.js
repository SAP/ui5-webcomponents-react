import{l as re,c as k,p as X,d as ce,b as de,s as p,ar as Z,m as F,b7 as ee,ai as ue,b5 as te,gE as he,ba as Y,b9 as pe,gF as me,gG as be,w as G,gH as fe,gI as ge,gJ as U,bU as we,bk as ve,bj as ye,be as Te,cI as _e,dH as xe,c2 as Se,bf as Ce,bV as Re,dF as je,c1 as Ne,ad as ne,gK as oe,j as e,r as f,eR as De}from"./iframe-BxIaMIJ2.js";import{d as ae}from"./Friends500-CRbR9XAn.js";import{L as ie}from"./index-BSQj9ICh.js";import{a as L,S as y}from"./index-QqJahJbf.js";import{T,c as se,d as m,a as w,b as c}from"./index-DZ5qgTrQ.js";import{a as Be,T as Q}from"./index-CG-L9ujU.js";import"./navigation-right-arrow-uTQcyQpq.js";import{a as Ie,T as Ve}from"./index-BXSIr0qn.js";var g;(function(a){a.Button="Button",a.Scroll="Scroll"})(g||(g={}));function qe(){return re("div",{id:"button",tabindex:-1,"data-ui5-growing-active":this._activeState,onClick:this.loadMore,onKeyDown:this._onKeydown,onKeyUp:this._onKeyup,onFocusOut:this._onFocusout,role:"button","aria-labelledby":"text subtext","aria-describedby":"description",children:[k("span",{id:"text",children:this._buttonText}),this.subtext&&k("span",{id:"subtext",children:this.subtext}),k("span",{id:"description",class:"ui5-hidden-text","aria-hidden":"true",children:this._buttonDescription})]})}X("@ui5/webcomponents-theming","sap_horizon",async()=>ce);X("@ui5/webcomponents","sap_horizon",async()=>de);const Me=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{flex-grow:1}#button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#button:hover{background:var(--sapButton_Hover_Background)}}#button:active,#button[data-ui5-growing-active=true]{background:var(--sapList_Active_Background)}#text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var _=function(a,t,o,s){var l=arguments.length,n=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,t,o,s);else for(var r=a.length-1;r>=0;r--)(i=a[r])&&(n=(l<3?i(n):l>3?i(t,o,n):i(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},P;let b=P=class extends te{constructor(){super(...arguments),this.mode="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){if(this._shouldFocusRow){this._shouldFocusRow=!1;let t=this._currentLastRow?.nextElementSibling;this.hasGrowingComponent()&&(t||=this.getFocusDomRef()),t||=this._table?.rows[0],t?.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){this._table=void 0,this._observer?.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){this._observer?.disconnect(),this._observer=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.mode===g.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.mode===`${g.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1],this._shouldFocusRow=!0),this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.mode===g.Scroll}_observeTableEnd(){this._table&&this._getIntersectionObserver().observe(this._table._endRow)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:he(this._table??document.body),rootMargin:"5px"})),this._observer}_onIntersection(t){t.some(o=>o.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){Y(t)&&(t.preventDefault(),this._activeState=!0),pe(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){Y(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _buttonText(){return this.text||P.i18nBundle.getText(me)}get _buttonDescription(){return P.i18nBundle.getText(be)}get _hasButton(){return this.hasGrowingComponent()}};_([p()],b.prototype,"mode",void 0);_([p()],b.prototype,"text",void 0);_([p()],b.prototype,"subtext",void 0);_([p({type:Boolean,noAttribute:!0})],b.prototype,"_activeState",void 0);_([p({type:Number,noAttribute:!0})],b.prototype,"_invalidate",void 0);_([Z("@ui5/webcomponents")],b,"i18nBundle",void 0);b=P=_([F({tag:"ui5-table-growing",renderer:ue,template:qe,styles:Me}),ee("load-more",{bubbles:!1})],b);b.define();const x=G("ui5-table-growing",["mode","subtext","text"],[],[],["load-more"]);x.displayName="TableGrowing";try{x.displayName="TableGrowing",x.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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
a growing button will be rendered instead to ensure growing functionality.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Scroll"'}]}},subtext:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:"subtext",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
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
a growing button will be rendered instead to ensure growing functionality.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"Scroll"'}]}},subtext:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `text` inside the growing button.\nHas no effect when mode is set to Scroll.",name:"subtext",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when mode is set to \`Scroll\`.

**Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
current language.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var $=function(a,t,o,s){var l=arguments.length,n=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,t,o,s);else for(var r=a.length-1;r>=0;r--)(i=a[r])&&(n=(l<3?i(n):l>3?i(t,o,n):i(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},W;let M=W=class extends Be{constructor(){super(...arguments),this.interactive=!1}isFixedAction(){return!0}getRenderInfo(){return{text:this._i18nNavigation,icon:"navigation-right-arrow",interactive:this.interactive}}get _i18nNavigation(){return W.i18nBundle.getText(fe)}};$([p({type:Boolean})],M.prototype,"interactive",void 0);$([Z("@ui5/webcomponents")],M,"i18nBundle",void 0);M=W=$([F({tag:"ui5-table-row-action-navigation"})],M);M.define();const S=G("ui5-table-row-action-navigation",[],["interactive","invisible"],[],["click"]);S.displayName="TableRowActionNavigation";try{S.displayName="TableRowActionNavigation",S.__docgenInfo={description:`The \`TableRowActionNavigation\` component defines a navigation action for table rows.



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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var le=function(a,t,o,s){var l=arguments.length,n=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,t,o,s);else for(var r=a.length-1;r>=0;r--)(i=a[r])&&(n=(l<3?i(n):l>3?i(t,o,n):i(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n};let H=class extends Ie{isSelected(t){const o=this.getRowKey(t);return o?this.selected===o:!1}setSelected(t,o,s=!1){const l=this.getRowKey(t);l&&(this.selected=o?l:void 0,s&&this.fireDecoratorEvent("change"))}getSelectedRow(){return this._table?.rows.find(t=>this.isSelected(t))}};le([p()],H.prototype,"selected",void 0);H=le([F({tag:"ui5-table-selection-single"})],H);H.define();const C=G("ui5-table-selection-single",["behavior","selected"],[],[],["change"]);C.displayName="TableSelectionSingle";try{C.displayName="TableSelectionSingle",C.__docgenInfo={description:'The `TableSelectionSingle` component is used inside the `Table` to add single selection capabilities to the `Table`.\nSince selection is key-based, each `TableRow` must define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelectionSingle` component is a feature designed exclusively for use within the `Table` component.\nIt must be placed inside the `features` slot of `Table`.\nThis component is not intended for standalone use.\n\n```html\n<Table>\n	<TableSelectionSingle slot="features" selected="Row1"></TableSelectionSingle>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelectionSingle",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionSingleDomRef, never>) => void"}},behavior:{defaultValue:{value:'"RowSelector"'},description:`Defines the selection behavior.

**Note:** Available since [v2.11](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11) of **@ui5/webcomponents**.`,name:"behavior",required:!1,type:{name:"enum",value:[{value:'"RowSelector"'},{value:'"RowOnly"'},{value:'"RowSelector"'},{value:'"RowOnly"'}]}},selected:{defaultValue:{value:"undefined"},description:"Defines the `row-key` value of the selected row.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="TableSelectionSingle",C.__docgenInfo={description:'The `TableSelectionSingle` component is used inside the `Table` to add single selection capabilities to the `Table`.\nSince selection is key-based, each `TableRow` must define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelectionSingle` component is a feature designed exclusively for use within the `Table` component.\nIt must be placed inside the `features` slot of `Table`.\nThis component is not intended for standalone use.\n\n```html\n<Table>\n	<TableSelectionSingle slot="features" selected="Row1"></TableSelectionSingle>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelectionSingle",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionSingleDomRef, never>) => void"}},behavior:{defaultValue:{value:'"RowSelector"'},description:`Defines the selection behavior.

**Note:** Available since [v2.11](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.11) of **@ui5/webcomponents**.`,name:"behavior",required:!1,type:{name:"enum",value:[{value:'"RowSelector"'},{value:'"RowOnly"'},{value:'"RowSelector"'},{value:'"RowOnly"'}]}},selected:{defaultValue:{value:"undefined"},description:"Defines the `row-key` value of the selected row.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var O=function(a,t,o,s){var l=arguments.length,n=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,t,o,s);else for(var r=a.length-1;r>=0;r--)(i=a[r])&&(n=(l<3?i(n):l>3?i(t,o,n):i(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n},h;(function(a){a[a.None=0]="None",a[a.Next=1]="Next",a[a.Previous=2]="Previous",a[a.Released=4]="Released",a[a.NextReleased=5]="NextReleased",a[a.PreviousReleased=6]="PreviousReleased"})(h||(h={}));let R=class extends te{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=h.None,this._onScrollBound=ge(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&h.Released){const o=this._table.rows.at(this._tabBlockingState&h.Next?-1:0),s=U(o).at(this._tabBlockingState&h.Next?0:-1);this._tabBlockingState=h.None,(s||o).focus()}}onExitDOM(){this._table&&(this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0)}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],o=t.offsetHeight;let s=this._scrollContainer.scrollTop,l=this._scrollContainer.clientHeight;t.sticky?l=Math.max(0,l-o):s=Math.max(0,s-o),this._visibleRowCount=Math.ceil(l/this.rowHeight);let n=Math.floor(s/this.rowHeight)-this.extraRows;n=Math.max(0,n);let i=Math.max(0,n+this._visibleRowCount+2*this.extraRows);i=Math.min(i,this.rowCount),!(this._firstRowPosition===n&&this._lastRowPosition===i)&&(this._lastRowPosition=i,this._firstRowPosition=n,this.fireDecoratorEvent("range-change",{first:n,last:i}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position!==void 0&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=h.Released)}_onKeyDown(t){if(!this._table)return;let o=0;const s=this._table.rows,l=s[0],n=s[s.length-1],i=l.position!==0,r=n.position!==this.rowCount-1,u=this._table._tableNavigation,d=we();if(ve(t)&&r&&U(this._rowsContainer).pop()===d?(this._tabBlockingState=h.Next,n.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight):ye(t)&&i&&U(this._rowsContainer).shift()===d?(this._tabBlockingState=h.Previous,l.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight*-1):r&&u._getNavigationItemsOfRow(n).includes(d)?Te(t)||_e(t)?o=this.rowHeight:xe(t)?o=this._visibleRowCount*this.rowHeight:Se(t)&&d===n&&(o=this.rowCount*this.rowHeight):i&&u._getNavigationItemsOfRow(l).includes(d)&&(Ce(t)||Re(t)?o=this.rowHeight*-1:je(t)?o=this._visibleRowCount*this.rowHeight*-1:Ne(t)&&d===l&&(o=this.rowCount*this.rowHeight*-1)),o){const v=this._table.scrollTop;this._scrollContainer.scrollTop+=o,this._scrollContainer.scrollTop!==v&&t.preventDefault()}}};O([p({type:Number})],R.prototype,"rowHeight",void 0);O([p({type:Number})],R.prototype,"rowCount",void 0);O([p({type:Number})],R.prototype,"extraRows",void 0);R=O([F({tag:"ui5-table-virtualizer"}),ee("range-change")],R);R.define();const j=G("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);j.displayName="TableVirtualizer";try{j.displayName="TableVirtualizer",j.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Ae="save",Pe="M32 363V86q0-23 15.5-38.5T86 32h340q22 0 38 15.5T480 86v340q0 23-16 38.5T426 480H149q-5 0-13-5L37 375q-5-5-5-12zm32-6l91 91h5V320q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v128h74q9 0 15.5-6.5T448 426V86q0-9-6.5-15.5T426 64h-42v128q0 14-9.5 23t-22.5 9H160q-14 0-23-9t-9-23V64H86q-9 0-15.5 6.5T64 86v271zm96-293v128h192V64H160zm160 384V320H192v128h128zm-96-56v-48q0-8 7-8h17q8 0 8 8v48q0 8-8 8h-17q-7 0-7-8z",Ee=!1,He=oe,Fe="SAP-icons-v4",Ge="@ui5/webcomponents-icons";ne(Ae,{pathData:Pe,ltr:Ee,accData:He,collection:Fe,packageName:Ge});const Oe="save",ze="M505 151q7 9 7 19v252q0 38-26 64t-64 26H90q-38 0-64-26T0 422V90q0-38 26-64T90 0h252q10 0 19 7zm-44 29L332 51H179v90h147q11 0 18.5 7.5T352 167t-7.5 18-18.5 7H153q-11 0-18-7t-7-18V51H90q-17 0-28 11T51 90v332q0 17 11 28t28 11h38V314q0-11 7-18.5t18-7.5h206q11 0 18 7.5t7 18.5v147h38q17 0 28-11t11-28V180zM333 339H179v122h154V339z",ke=!1,Ue=oe,Le="SAP-icons-v5",We="@ui5/webcomponents-icons";ne(Oe,{pathData:ze,ltr:ke,accData:Ue,collection:Le,packageName:We});const $e="save",Ke=e.jsxs(se,{sticky:!0,children:[e.jsx(m,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(m,{minWidth:"100px",children:e.jsx("span",{children:"Weight"})}),e.jsx(m,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]}),K=e.jsxs(se,{sticky:!0,children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Age"}),e.jsx(m,{children:"Friend Name"}),e.jsx(m,{children:"Friend Age"})]}),Je={title:"Data Display / Table",component:T,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:Ke},tags:["package:@ui5/webcomponents"]},N={render:a=>e.jsxs(T,{...a,children:[e.jsxs(w,{rowKey:"0",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(c,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(w,{rowKey:"1",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(c,{children:e.jsx("span",{children:"1249EUR"})})]})]})},D={render:a=>{const[t,o]=f.useState(g.Button),s=r=>new Array(25).fill("").map((u,d)=>e.jsxs(w,{children:[e.jsx(c,{children:e.jsx("span",{children:d+r})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(c,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${d+r}-row`)),[l,n]=f.useState(s(1)),i=()=>{n(r=>[...r,...s(r.length+1)])};return e.jsxs(e.Fragment,{children:[e.jsxs(ie,{showColon:!0,style:{marginInlineEnd:"0.5rem"},children:["Growing ",e.jsx("code",{children:"mode"})]}),e.jsxs(L,{style:{marginBlockEnd:"0.5rem"},onSelectionChange:r=>{o(r.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:t===g.Scroll,children:"Scroll"}),e.jsx(y,{selected:t===g.Button,children:"Button"})]}),e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(T,{...a,features:e.jsx(x,{onLoadMore:i,mode:t}),children:l})})]})}},B={render(a){const[t,o]=f.useState("Single"),[s,l]=f.useState("RowSelector");return e.jsxs(e.Fragment,{children:[e.jsxs(L,{onSelectionChange:n=>{o(n.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:t==="None",children:"None"}),e.jsx(y,{selected:t==="Single",children:"Single"}),e.jsx(y,{selected:t==="Multi",children:"Multi"})]}),e.jsx(ie,{"aria-hidden":!0,style:{marginInline:"0.25rem"},children:"|"}),e.jsxs(L,{onSelectionChange:n=>{l(n.detail.selectedItems[0].textContent)},children:[e.jsx(y,{selected:s==="RowSelector",children:"RowSelector"}),e.jsx(y,{selected:s==="RowOnly",children:"RowOnly"})]}),e.jsxs(T,{...a,features:e.jsxs(e.Fragment,{children:[t==="Single"&&e.jsx(C,{behavior:s}),t==="Multi"&&e.jsx(Ve,{behavior:s})]}),children:[e.jsxs(w,{rowKey:"0",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(c,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(w,{rowKey:"1",children:[e.jsx(c,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(c,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(c,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(c,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(c,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},E=ae.map((a,t)=>({...a,position:t})),I={args:{className:"tableHeightContentDensity",headerRow:K},render(a){const[t,o]=f.useState(E.slice(0,9)),[s,l]=f.useState(!0),n=i=>{const{first:r,last:u}=i.detail,d=Math.max(r-2,0),v=Math.min(u+2,E.length);o(E.slice(d,v))};return f.useEffect(()=>{const i=document.body;if(!i)return;const r=new MutationObserver(u=>{u.forEach(d=>{d.type==="attributes"&&d.attributeName==="class"&&l(!i.classList.contains("ui5-content-density-compact"))})});return r.observe(i,{attributes:!0,attributeFilter:["class"]}),()=>{r.disconnect()}},[]),e.jsx(T,{...a,features:e.jsx(j,{rowCount:500,rowHeight:s?44:32,onRangeChange:n}),children:t.map(i=>e.jsxs(w,{position:i.position,children:[e.jsx(c,{children:e.jsx("span",{children:i.name})}),e.jsx(c,{children:e.jsx("span",{children:i.age})}),e.jsx(c,{children:e.jsx("span",{children:i.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:i.friend.age})})]},i.position))})}},V={args:{headerRow:K,rowActionCount:3},render(a){return e.jsx(T,{...a,children:ae.slice(0,10).map((t,o)=>e.jsxs(w,{actions:e.jsxs(e.Fragment,{children:[e.jsx(Q,{icon:De,text:"Edit"}),e.jsx(Q,{icon:$e,text:"Save"}),e.jsx(S,{interactive:!!(o%2)})]}),children:[e.jsx(c,{children:e.jsx("span",{children:t.name})}),e.jsx(c,{children:e.jsx("span",{children:t.age})}),e.jsx(c,{children:e.jsx("span",{children:t.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:t.friend.age})})]},`${t.name}-${t.age}`))})}},q={args:{headerRow:K},render(a){const[t,o]=f.useState(E.slice(0,10)),s=n=>{const{source:i,destination:r}=n.detail;o(u=>{const d=u.findIndex(z=>`${z.position}`===i.element.dataset.id),v=u.findIndex(z=>`${z.position}`===r.element.dataset.id);if(d===-1||v===-1)return u;const A=[...u],[J]=A.splice(d,1);return r.placement==="Before"?A.splice(v,0,J):r.placement==="After"&&A.splice(v+1,0,J),A})},l=n=>{const{source:i,destination:r}=n.detail;i.element.hasAttribute("ui5-table-row")&&r.element.hasAttribute("ui5-table-row")&&r.placement!=="On"&&n.preventDefault()};return e.jsx(T,{...a,onMove:s,onMoveOver:l,children:t.map(n=>e.jsxs(w,{movable:!0,"data-id":n.position,children:[e.jsx(c,{children:e.jsx("span",{children:n.name})}),e.jsx(c,{children:e.jsx("span",{children:n.age})}),e.jsx(c,{children:e.jsx("span",{children:n.friend.name})}),e.jsx(c,{children:e.jsx("span",{children:n.friend.age})})]},n.position))})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};const Ye=["Default","GrowingTable","WithSelection","VirtualizedTableRows","withRowActions","dragAndDropRows"],ct=Object.freeze(Object.defineProperty({__proto__:null,Default:N,GrowingTable:D,VirtualizedTableRows:I,WithSelection:B,__namedExportsOrder:Ye,default:Je,dragAndDropRows:q,withRowActions:V},Symbol.toStringTag,{value:"Module"}));export{ct as C,N as D,D as G,S as T,I as V,B as W,x as a,C as b,j as c,q as d,V as w};
