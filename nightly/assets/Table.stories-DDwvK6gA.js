import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as C,T as F}from"./index-C8xB-sWp.js";import"./index-BGbUezX6.js";import{r as V}from"./index-CjmQ2z5u.js";import{e as _,T as L,b as p,c as f,d as t}from"./index-DL8Cc8Cy.js";import{r as U,d as P,p as w,q as O,U as W,w as q}from"./withWebComponent-DbOtF11K.js";import{a as S,l as y,c as $}from"./LitRenderer--5KS0G3R.js";import{e as H}from"./event-strict-C2lE4gn2.js";import{i as A}from"./i18n-BLQCbquq.js";import{p as j,o as K}from"./Keys-DundVx7l.js";import{d as z}from"./useIsomorphicLayoutEffect-U1V4gMqc.js";import{d as J}from"./parameters-bundle.css-BzaqQttB.js";import{aL as Q,aM as X}from"./i18n-defaults-Do22Zz-4.js";import{a as Y,S as Z}from"./index-DYMcerDU.js";var v;(function(s){s.Button="Button",s.Scroll="Scroll"})(v||(v={}));const T=v;function ee(s,n,o){return S`${this._hasGrowingButton?ne.call(this,s,n,o):void 0}`}function ne(s,n,o){return S`<div id="growing-button" tabindex="-1" ?active="${this._activeState}" @click="${this.loadMore}" @keydown="${this._onKeydown}" @keyup="${this._onKeyup}" @focusout="${this._onFocusout}" role="button" aria-labelledby="growing-text growing-subtext" aria-describedby="growing-description"><span id="growing-text">${y(this._growingButtonText)}</span>${this.growingSubText?te.call(this,s,n,o):void 0}<span id="growing-description" style="display: none;" aria-hidden="true">${y(this._growingButtonDescription)}</span></div>`}function te(s,n,o){return S`<span id="growing-subtext">${y(this.growingSubText)}</span>`}function oe(){return ee.call(this,this,this.constructor.tagsToScope,z())}U("@ui5/webcomponents-theming","sap_horizon",async()=>P);U("@ui5/webcomponents","sap_horizon",async()=>J);const se=`:host{flex-grow:1}#growing-button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#growing-button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#growing-button:hover{background:var(--sapButton_Hover_Background)}}#growing-button:active,#growing-button[active]{background:var(--sapList_Active_Background)}#growing-text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#growing-subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`;var r=function(s,n,o,a){var d=arguments.length,l=d<3?n:a===null?a=Object.getOwnPropertyDescriptor(n,o):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,n,o,a);else for(var c=s.length-1;c>=0;c--)(u=s[c])&&(l=(d<3?u(l):d>3?u(n,o,l):u(n,o))||l);return d>3&&l&&Object.defineProperty(n,o,l),l},x;let i=x=class extends W{constructor(){super(...arguments),this.type="Button",this._activeState=!1,this._invalidate=0,this.identifier="TableGrowing",this._renderContent=!0}onTableActivate(n){this._table=n,this._shouldFocusRow=!1}onTableAfterRendering(){var n,o;if(this._shouldFocusRow){this._shouldFocusRow=!1;let a=(n=this._currentLastRow)==null?void 0:n.nextElementSibling;this.hasGrowingComponent()&&(a||(a=this.getFocusDomRef())),a||(a=(o=this._table)==null?void 0:o.rows[0]),a==null||a.focus()}if(this._renderContent!==this.hasGrowingComponent()){this._invalidate++;return}this._hasScrollToLoad()&&!this.hasGrowingComponent()&&!this._observer&&this._observeTableEnd()}onExitDOM(){var n;this._table=void 0,(n=this._observer)==null||n.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){var n;(n=this._observer)==null||n.disconnect(),this._observer=void 0,this._currentLastRow=void 0,this._renderContent=this.hasGrowingComponent(),this._invalidateTable()}hasGrowingComponent(){return this.type===T.Scroll?!!this._table&&this._table._scrollContainer.clientHeight>=this._table._tableElement.scrollHeight:this.type===`${T.Button}`}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1]),this._shouldFocusRow=!0,this.fireDecoratorEvent("load-more")}_hasScrollToLoad(){return this.type===T.Scroll}_observeTableEnd(){var o;if(!this._table)return;const n=(o=this._table.shadowRoot)==null?void 0:o.querySelector("#table-end-row");n&&this._getIntersectionObserver().observe(n)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:document})),this._observer}_onIntersection(n){n.some(o=>o.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(n){j(n)&&(n.preventDefault(),this._activeState=!0),K(n)&&(this.loadMore(),this._activeState=!0)}_onKeyup(n){j(n)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _growingButtonText(){return this.growingText||x.i18nBundle.getText(Q)}get _growingButtonDescription(){return x.i18nBundle.getText(X)}get _hasGrowingButton(){return this.hasGrowingComponent()}};r([w()],i.prototype,"type",void 0);r([w()],i.prototype,"growingText",void 0);r([w()],i.prototype,"growingSubText",void 0);r([w({type:Boolean})],i.prototype,"_activeState",void 0);r([w({type:Number,noAttribute:!0})],i.prototype,"_invalidate",void 0);r([A("@ui5/webcomponents")],i,"i18nBundle",void 0);i=x=r([O({tag:"ui5-table-growing",renderer:$,template:oe,styles:se}),H("load-more",{bubbles:!0})],i);i.define();const h=q("ui5-table-growing",["growingSubText","growingText","type"],[],[],["load-more"]);h.displayName="TableGrowing";try{h.displayName="TableGrowing",h.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TableGrowing",h.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Data Display / Table",component:_,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:e.jsxs(L,{sticky:!0,children:[e.jsx(p,{width:"200px",minWidth:"200px",children:e.jsx("span",{children:"Product"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(p,{minWidth:"100px",maxWidth:"200px",children:e.jsx("span",{children:"Weight"})}),e.jsx(p,{minWidth:"200px",children:e.jsx("span",{children:"Price"})})]})},tags:["package:@ui5/webcomponents"]},b={render:s=>e.jsxs(_,{...s,children:[e.jsxs(f,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(t,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(t,{children:e.jsx("span",{children:"1249EUR"})})]})]})},m={render:s=>{const n=l=>new Array(25).fill("").map((u,c)=>e.jsxs(f,{children:[e.jsx(t,{children:e.jsx("span",{children:c+l})}),e.jsx(t,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(t,{children:e.jsx("span",{children:"Placeholder 2"})}),e.jsx(t,{children:e.jsx("span",{children:"Placeholder 3"})}),e.jsx(t,{children:e.jsx("span",{children:"Placeholder 4"})})]},`${c+l}-row`)),[o,a]=V.useState(n(1)),d=()=>{a(l=>[...l,...n(l.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(_,{...s,features:e.jsx(h,{onLoadMore:d,type:T.Scroll}),children:o})})}},g={render(s){const[n,o]=V.useState(C.Multiple);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{onSelectionChange:a=>{o(a.detail.selectedItems[0].textContent)},children:Object.values(C).map(a=>e.jsx(Z,{selected:a===n,children:a},a))}),e.jsxs(_,{...s,features:e.jsx(F,{mode:n}),children:[e.jsxs(f,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(t,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(f,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(t,{children:e.jsx("span",{children:"1249EUR"})})]})]})]})}};var B,R,G;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(R=b.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var M,E,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var N,k,I;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(k=g.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const le=["Default","GrowingTable","WithSelection"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:b,GrowingTable:m,WithSelection:g,__namedExportsOrder:le,default:ae},Symbol.toStringTag,{value:"Module"}));export{ye as C,b as D,m as G,h as T,g as W};
