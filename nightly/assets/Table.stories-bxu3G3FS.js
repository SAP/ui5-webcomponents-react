import{j as e}from"./jsx-runtime-CLpGMVip.js";import{d as ne}from"./Friends500-CRbR9XAn.js";import{a as G,T as oe}from"./index-BxgbxNAM.js";import"./index-DRh_sm2u.js";import{r as R}from"./index-D23YZj_x.js";import{t as ae,e as S,T as Z,a as u,b as g,c as r}from"./index-_TaS4KCg.js";import{p as J,d as se,s as b,m as Q,I as X,w as ee}from"./withWebComponent-DfVDXLfc.js";import{m as P,l as V,a as ie}from"./LitRenderer-Zl5KMCf2.js";import{l as te}from"./event-strict-DgQLNDEV.js";import{i as re}from"./i18n-DEVDpFvK.js";import{i as I,b as le,B as de,m as he,P as ce,u as ue,Z as pe,W as be,D as me,O as fe,Y as ge,F as we}from"./Keys-Df3IBHp2.js";import{c as Te}from"./useIsomorphicLayoutEffect-Clyi7m9u.js";import{d as _e}from"./parameters-bundle.css-BzaqQttB.js";import{bg as ye,bh as xe}from"./i18n-defaults-Cyg2J0QB.js";import{t as Ce}from"./getActiveElement-kltGt_DR.js";import{b as H}from"./TabbableElements-XzXYKyvZ.js";import{a as ve,S as Re}from"./index-CCKfeaLQ.js";var E;(function(o){o.Button="Button",o.Scroll="Scroll"})(E||(E={}));const j=E;function Se(o,t,n){return P`${this._hasGrowingButton?je.call(this,o,t,n):void 0}`}function je(o,t,n){return P`<div id="growing-button" tabindex="-1" ?active="${this._activeState}" @click="${this.loadMore}" @keydown="${this._onKeydown}" @keyup="${this._onKeyup}" @focusout="${this._onFocusout}" role="button" aria-labelledby="growing-text growing-subtext" aria-describedby="growing-description"><span id="growing-text">${V(this._growingButtonText)}</span>${this.growingSubText?Ne.call(this,o,t,n):void 0}<span id="growing-description" style="display: none;" aria-hidden="true">${V(this._growingButtonDescription)}</span></div>`}function Ne(o,t,n){return P`<span id="growing-subtext">${V(this.growingSubText)}</span>`}function Be(){return Se.call(this,this,this.constructor.tagsToScope,Te())}J("@ui5/webcomponents-theming","sap_horizon",async()=>se);J("@ui5/webcomponents","sap_horizon",async()=>_e);const De=`:host{flex-grow:1}#growing-button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#growing-button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#growing-button:hover{background:var(--sapButton_Hover_Background)}}#growing-button:active,#growing-button[active]{background:var(--sapList_Active_Background)}#growing-text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#growing-subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var m=function(o,t,n,s){var l=arguments.length,a=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,n,s);else for(var d=o.length-1;d>=0;d--)(i=o[d])&&(a=(l<3?i(a):l>3?i(t,n,a):i(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},N;let p=N=class extends X{constructor(){super(...arguments),this.type="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(t){this._table=t,this._shouldFocusRow=!1}onTableAfterRendering(){var t,n;if(this._shouldFocusRow){this._shouldFocusRow=!1;let s=(t=this._currentLastRow)==null?void 0:t.nextElementSibling;this.hasGrowingComponent()&&(s||(s=this.getFocusDomRef())),s||(s=(n=this._table)==null?void 0:n.rows[0]),s==null||s.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){var t;this._table=void 0,(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){var t;(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.type===j.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.type===`${j.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1]),this._shouldFocusRow=!0,this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.type===j.Scroll}_observeTableEnd(){var n;if(!this._table)return;const t=(n=this._table.shadowRoot)==null?void 0:n.querySelector("#table-end-row");t&&this._getIntersectionObserver().observe(t)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:document})),this._observer}_onIntersection(t){t.some(n=>n.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){I(t)&&(t.preventDefault(),this._activeState=!0),le(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){I(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _growingButtonText(){return this.growingText||N.i18nBundle.getText(ye)}get _growingButtonDescription(){return N.i18nBundle.getText(xe)}get _hasGrowingButton(){return this.hasGrowingComponent()}};m([b()],p.prototype,"type",void 0);m([b()],p.prototype,"growingText",void 0);m([b()],p.prototype,"growingSubText",void 0);m([b({type:Boolean})],p.prototype,"_activeState",void 0);m([b({type:Number,noAttribute:!0})],p.prototype,"_invalidate",void 0);m([re("@ui5/webcomponents")],p,"i18nBundle",void 0);p=N=m([Q({tag:"ui5-table-growing",renderer:ie,template:Be,styles:De}),te("load-more",{bubbles:!0})],p);p.define();const w=ee("ui5-table-growing",["growingSubText","growingText","type"],[],[],["load-more"]);w.displayName="TableGrowing";try{w.displayName="TableGrowing",w.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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
	<TableGrowing type="Button" growing-text="More" slot="features"></TableGrowing>
</Table>
\`\`\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},growingSubText:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `growingText` inside the growing button.\nHas no effect when type is set to Scroll.",name:"growingSubText",required:!1,type:{name:"string"}},growingText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when type is set to \`Scroll\`.

**Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
current language.`,name:"growingText",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="TableGrowing",w.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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
	<TableGrowing type="Button" growing-text="More" slot="features"></TableGrowing>
</Table>
\`\`\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:`Fired when the growing button is pressed or the user scrolls to the end of the table.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},growingSubText:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `growingText` inside the growing button.\nHas no effect when type is set to Scroll.",name:"growingSubText",required:!1,type:{name:"string"}},growingText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when type is set to \`Scroll\`.

**Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
current language.`,name:"growingText",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var B=function(o,t,n,s){var l=arguments.length,a=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,n,s);else for(var d=o.length-1;d>=0;d--)(i=o[d])&&(a=(l<3?i(a):l>3?i(t,n,a):i(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},c;(function(o){o[o.None=0]="None",o[o.Next=1]="Next",o[o.Previous=2]="Previous",o[o.Released=4]="Released",o[o.NextReleased=5]="NextReleased",o[o.PreviousReleased=6]="PreviousReleased"})(c||(c={}));let T=class extends X{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=c.None,this._onScrollBound=ae(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(t){if(this._table?this._updateRowsHeight():(this._table=t,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._updateRowsHeight(),this._onScroll()),this._tabBlockingState&c.Released){const n=this._table.rows.at(this._tabBlockingState&c.Next?-1:0),s=H(n).at(this._tabBlockingState&c.Next?0:-1);this._tabBlockingState=c.None,(s||n).focus()}}onExitDOM(){this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._table&&(this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll())}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){const t=this._table.headerRow[0],n=t.offsetHeight;let s=this._scrollContainer.scrollTop,l=this._scrollContainer.clientHeight;t.sticky?l=Math.max(0,l-n):s=Math.max(0,s-n),this._visibleRowCount=Math.ceil(l/this.rowHeight);let a=Math.floor(s/this.rowHeight)-this.extraRows;a=Math.max(0,a);let i=Math.max(0,a+this._visibleRowCount+2*this.extraRows);i=Math.min(i,this.rowCount),!(this._firstRowPosition===a&&this._lastRowPosition===i)&&(this._lastRowPosition=i,this._firstRowPosition=a,this.fireDecoratorEvent("range-change",{first:a,last:i}))}_updateRowsHeight(){const t=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${t}px`}_getTransform(){if(!this._table)return;const t=this._table.rows[0];if(t&&t.position>0)return`translateY(${t.position*this.rowHeight}px)`}_onRowInvalidate(t){t.name==="position"&&(t.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=c.Released)}_onKeyDown(t){if(!this._table)return;let n=0;const s=this._table.rows,l=s[0],a=s[s.length-1],i=l.position!==0,d=a.position!==this.rowCount-1,f=this._table._tableNavigation,h=Ce();if(de(t)&&d&&H(this._rowsContainer).pop()===h?(this._tabBlockingState=c.Next,a.attachInvalidate(this._onRowInvalidateBound),n=this.rowHeight):he(t)&&i&&H(this._rowsContainer).shift()===h?(this._tabBlockingState=c.Previous,l.attachInvalidate(this._onRowInvalidateBound),n=this.rowHeight*-1):d&&f._getNavigationItemsOfRow(a).includes(h)?ce(t)||ue(t)?n=this.rowHeight:pe(t)?n=this._visibleRowCount*this.rowHeight:be(t)&&h===a&&(n=this.rowCount*this.rowHeight):i&&f._getNavigationItemsOfRow(l).includes(h)&&(me(t)||fe(t)?n=this.rowHeight*-1:ge(t)?n=this._visibleRowCount*this.rowHeight*-1:we(t)&&h===l&&(n=this.rowCount*this.rowHeight*-1)),n){const D=this._table.scrollTop;this._scrollContainer.scrollTop+=n,this._scrollContainer.scrollTop!==D&&t.preventDefault()}}};B([b({type:Number})],T.prototype,"rowHeight",void 0);B([b({type:Number})],T.prototype,"rowCount",void 0);B([b({type:Number})],T.prototype,"extraRows",void 0);T=B([Q({tag:"ui5-table-virtualizer"}),te("range-change")],T);T.define();const _=ee("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);_.displayName="TableVirtualizer";try{_.displayName="TableVirtualizer",_.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.

**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableVirtualizer",props:{onRangeChange:{defaultValue:null,description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onRangeChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void"}},extraRows:{defaultValue:{value:"0"},description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:"extraRows",required:!1,type:{name:"number"}},rowCount:{defaultValue:{value:"100"},description:`Defines the total count of rows in the table.

**Note:** This property is mandatory for the virtualization to work properly.`,name:"rowCount",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"45"},description:`Defines the height of the rows in the table.

**Note:** This property is mandatory for the virtualization to work properly.`,name:"rowHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="TableVirtualizer",_.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.

**Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableVirtualizer",props:{onRangeChange:{defaultValue:null,description:`Fired when the virtualizer is changed by user interaction e.g. on scrolling.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onRangeChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void"}},extraRows:{defaultValue:{value:"0"},description:`Defines the count of extra rows to be rendered at the top and bottom of the table.

**Note:** This property is experimental and may be changed or deleted in the future.`,name:"extraRows",required:!1,type:{name:"number"}},rowCount:{defaultValue:{value:"100"},description:`Defines the total count of rows in the table.

**Note:** This property is mandatory for the virtualization to work properly.`,name:"rowCount",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"45"},description:`Defines the height of the rows in the table.

**Note:** This property is mandatory for the virtualization to work properly.`,name:"rowHeight",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const He={title:"Data Display / Table",component:S,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:e.jsxs(Z,{sticky:!0,children:[e.jsx(u,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(u,{minWidth:"100px",maxWidth:"200px",children:e.jsx("span",{children:"Weight"})}),e.jsx(u,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]})},tags:["package:@ui5/webcomponents"]},y={render:o=>e.jsxs(S,{...o,children:[e.jsxs(g,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(r,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(g,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(r,{children:e.jsx("span",{children:"1249EUR"})})]})]})},x={render:o=>{const t=a=>new Array(25).fill("").map((i,d)=>e.jsxs(g,{children:[e.jsx(r,{children:e.jsx("span",{children:d+a})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(r,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${d+a}-row`)),[n,s]=R.useState(t(1)),l=()=>{s(a=>[...a,...t(a.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(S,{...o,features:e.jsx(w,{onLoadMore:l,type:j.Scroll}),children:n})})}},C={render(o){const[t,n]=R.useState(G.Multiple);return e.jsxs(e.Fragment,{children:[e.jsx(ve,{onSelectionChange:s=>{n(s.detail.selectedItems[0].textContent)},children:Object.values(G).map(s=>e.jsx(Re,{selected:s===t,children:s},s))}),e.jsxs(S,{...o,features:e.jsx(oe,{mode:t}),children:[e.jsxs(g,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(r,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(g,{children:[e.jsx(r,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(r,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(r,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(r,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(r,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}},M=ne.map((o,t)=>({...o,position:t})),v={args:{className:"tableHeightContentDensity"},render(o){const[t,n]=R.useState(M.slice(0,9)),[s,l]=R.useState(!0),a=i=>{const{first:d,last:f}=i.detail,h=Math.max(d-2,0),D=Math.min(f+2,M.length);n(M.slice(h,D))};return R.useEffect(()=>{const i=document.body;if(!i)return;const d=new MutationObserver(f=>{f.forEach(h=>{h.type==="attributes"&&h.attributeName==="class"&&l(!i.classList.contains("ui5-content-density-compact"))})});return d.observe(i,{attributes:!0,attributeFilter:["class"]}),()=>{d.disconnect()}},[]),e.jsx(S,{...o,headerRow:e.jsxs(Z,{sticky:!0,children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Age"}),e.jsx(u,{children:"Friend Name"}),e.jsx(u,{children:"Friend Age"})]}),features:e.jsx(_,{rowCount:500,rowHeight:s?44:32,onRangeChange:a}),children:t.map(i=>e.jsxs(g,{position:i.position,children:[e.jsx(r,{children:e.jsx("span",{children:i.name})}),e.jsx(r,{children:e.jsx("span",{children:i.age})}),e.jsx(r,{children:e.jsx("span",{children:i.friend.name})}),e.jsx(r,{children:e.jsx("span",{children:i.friend.age})})]},i.position))})}};var z,F,k;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args}>
        <TableRow>
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
        <TableRow>
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
}`,...(k=(F=y.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var q,L,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
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
    return <div style={{
      height: '250px',
      overflow: 'auto'
    }}>
        <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />}>
          {rows}
        </Table>
      </div>;
  }
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var U,$,W;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render(args) {
    const [mode, setMode] = useState<TableSelectionMode>(TableSelectionMode.Multiple);
    return <>
        <SegmentedButton onSelectionChange={e => {
        setMode(e.detail.selectedItems[0].textContent);
      }}>
          {Object.values(TableSelectionMode).map(selectionMode => <SegmentedButtonItem key={selectionMode} selected={selectionMode === mode}>
              {selectionMode}
            </SegmentedButtonItem>)}
        </SegmentedButton>
        <Table {...args} features={<TableSelection mode={mode} />}>
          <TableRow>
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
          <TableRow>
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
}`,...(W=($=C.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var A,K,Y;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: 'tableHeightContentDensity'
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
    return <Table {...args} headerRow={<TableHeaderRow sticky>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Friend Name</TableHeaderCell>
            <TableHeaderCell>Friend Age</TableHeaderCell>
          </TableHeaderRow>} features={<TableVirtualizer rowCount={500} rowHeight={isCozy ? 44 : 32} onRangeChange={handleRangeChange} />}>
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
}`,...(Y=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const Me=["Default","GrowingTable","WithSelection","VirtualizedTableRows"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Default:y,GrowingTable:x,VirtualizedTableRows:v,WithSelection:C,__namedExportsOrder:Me,default:He},Symbol.toStringTag,{value:"Module"}));export{Qe as C,y as D,x as G,w as T,v as V,C as W,_ as a};
