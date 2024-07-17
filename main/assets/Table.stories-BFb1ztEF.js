import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{r as E}from"./index-BQ1WsyJB.js";import{e as x,T as N,a as p,b as w,c as s}from"./index-DDcdCDqO.js";import{_ as $}from"./iframe-BOu3yP2Y.js";import{h as v,f as M,s as k,a as f,m as L,k as V,I as F,w as I}from"./withWebComponent-DykTwaBJ.js";import{s as O}from"./event-Dq0fpeHi.js";import{f as P}from"./i18nBundle-CEPDwMcb.js";import{a as S,b as q}from"./Keys-F_3Gvx0K.js";import{l as T}from"./if-defined-Pg2MF6OO.js";import{s as U}from"./parameters-bundle.css-BFbT_feV.js";import{av as A,aw as H}from"./i18n-defaults-Ddp6Qu_n.js";var _;(function(o){o.Button="Button",o.Scroll="Scroll"})(_||(_={}));const y=_;function W(o,t,n){return v`${this._hasGrowingButton?K.call(this,o,t,n):void 0}`}function K(o,t,n){return v`<div id="growing-button" tabindex="-1" ?active="${this._activeState}" @click="${this.loadMore}" @keydown="${this._onKeydown}" @keyup="${this._onKeyup}" @focusout="${this._onFocusout}" role="button" aria-labelledby="growing-text growing-subtext" aria-describedby="growing-description"><span id="growing-text">${T(this._growingButtonText)}</span>${this.growingSubText?z.call(this,o,t,n):void 0}<span id="growing-description" style="display: none;" aria-hidden="true">${T(this._growingButtonDescription)}</span></div>`}function z(o,t,n){return v`<span id="growing-subtext">${T(this.growingSubText)}</span>`}M("@ui5/webcomponents-theming","sap_horizon",async()=>k);M("@ui5/webcomponents","sap_horizon",async()=>U);const J={packageName:"@ui5/webcomponents",fileName:"themes/TableGrowing.css.ts",content:`:host{flex-grow:1}#growing-button:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}#growing-button{margin:0;padding:0;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer}@media (hover: hover){#growing-button:hover{background:var(--sapButton_Hover_Background)}}#growing-button:active,#growing-button[active]{background:var(--sapList_Active_Background)}#growing-text{padding:1rem 0;font-size:var(--sapFontSize);color:var(--sapButton_TextColor);font-weight:700}#growing-subtext{padding-bottom:1rem;color:var(--sapButton_TextColor)}
`};var u=function(o,t,n,i){var l=arguments.length,a=l<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,n,i);else for(var d=o.length-1;d>=0;d--)(h=o[d])&&(a=(l<3?h(a):l>3?h(t,n,a):h(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},b;let r=b=class extends F{constructor(){super(...arguments),this.type="Button",this.disabled=!1,this._activeState=!1,this.identifier="TableGrowing"}static async onDefine(){b.i18nBundle=await P("@ui5/webcomponents")}onTableActivate(t){this._table=t,this._shouldFocusRow=!1,this._hasScrollToLoad()&&this._observeTableEnd()}onTableRendered(){var t,n;if(this._shouldFocusRow){this._shouldFocusRow=!1;let i=(t=this._currentLastRow)==null?void 0:t.nextElementSibling;this.hasGrowingComponent()&&(i||(i=this.getFocusDomRef())),i||(i=(n=this._table)==null?void 0:n.rows[0]),i==null||i.focus()}this.disabled||this._hasScrollToLoad()&&this._observeTableEnd()}onExitDOM(){var t;this._table=void 0,(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0}onBeforeRendering(){var t;(t=this._observer)==null||t.disconnect(),this._observer=void 0,this._currentLastRow=void 0,this._invalidateTable()}hasGrowingComponent(){return this._hasScrollToLoad()?!(this._table&&this._table._scrollContainer.scrollHeight>this._table._scrollContainer.clientHeight):this.type===y.Button&&!this.disabled}loadMore(){this._table&&this.hasGrowingComponent()&&(this._currentLastRow=this._table.rows[this._table.rows.length-1]),this._shouldFocusRow=!0,this.fireEvent("load-more")}_hasScrollToLoad(){return this.type===y.Scroll}_observeTableEnd(){var n;if(!this._table)return;const t=(n=this._table.shadowRoot)==null?void 0:n.querySelector("#table-end-row");t&&this._getIntersectionObserver().observe(t)}_getIntersectionObserver(){return this._observer||(this._observer=new IntersectionObserver(this._onIntersection.bind(this),{root:document,rootMargin:"10px",threshold:1})),this._observer}_onIntersection(t){t.some(n=>n.isIntersecting)&&this.loadMore()}_invalidateTable(){this._table&&this._table._invalidate++}_onKeydown(t){S(t)&&(t.preventDefault(),this._activeState=!0),q(t)&&(this.loadMore(),this._activeState=!0)}_onKeyup(t){S(t)&&this.loadMore(),this._activeState=!1}_onFocusout(){this._activeState=!1}get _growingButtonText(){return this.growingText||b.i18nBundle.getText(A)}get _growingButtonDescription(){return b.i18nBundle.getText(H)}get _hasGrowingButton(){return this.hasGrowingComponent()}};u([f()],r.prototype,"type",void 0);u([f()],r.prototype,"growingText",void 0);u([f()],r.prototype,"growingSubText",void 0);u([f({type:Boolean})],r.prototype,"disabled",void 0);u([f({type:Boolean})],r.prototype,"_activeState",void 0);r=b=u([L({tag:"ui5-table-growing",renderer:V,template:W,styles:J}),O("load-more")],r);r.define();const Q=r,X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),c=I("ui5-table-growing",["growingSubText","growingText","type"],[],[],["load-more"],()=>$(()=>Promise.resolve().then(()=>X),void 0,import.meta.url));c.displayName="TableGrowing";try{c.displayName="TableGrowing",c.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:"Fired when the growing button is pressed or the user scrolls to the end of the table.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},growingSubText:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `growingText` inside the growing button.\nHas no effect when type is set to Scroll.",name:"growingSubText",required:!1,type:{name:"string"}},growingText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when type is set to \`Scroll\`.

**Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
current language.`,name:"growingText",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="TableGrowing",c.__docgenInfo={description:`The \`TableGrowing\` component is used inside the \`Table\` to add a growing/data loading functionalities
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



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableGrowing",props:{onLoadMore:{defaultValue:null,description:"Fired when the growing button is pressed or the user scrolls to the end of the table.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableGrowingDomRef, never>) => void"}},growingSubText:{defaultValue:{value:"undefined"},description:"Defines the text that will be displayed below the `growingText` inside the growing button.\nHas no effect when type is set to Scroll.",name:"growingSubText",required:!1,type:{name:"string"}},growingText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.
Has no effect when type is set to \`Scroll\`.

**Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
current language.`,name:"growingText",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:`Defines the mode of the <code>ui5-table</code> growing.

Available options are:

Button - Shows a More button at the bottom of the table, pressing it will load more rows.

Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Scroll"'},{value:'"Button"'},{value:'"Scroll"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Data Display / Table",component:x,argTypes:{headerRow:{control:{disable:!0}},features:{control:{disable:!0}},children:{control:{disable:!0}}},args:{headerRow:e.jsxs(N,{sticky:!0,children:[e.jsx(p,{width:"12rem",children:e.jsx("span",{children:"Product"})}),e.jsx(p,{minWidth:"800px",children:e.jsx("span",{children:"Supplier"})}),e.jsx(p,{minWidth:"600px",children:e.jsx("span",{children:"Dimensions"})}),e.jsx(p,{minWidth:"600px",children:e.jsx("span",{children:"Weight"})}),e.jsx(p,{children:e.jsx("span",{children:"Price"})})]})},tags:["package:@ui5/webcomponents"]},g={render:o=>e.jsxs(x,{...o,children:[e.jsxs(w,{children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(s,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(w,{children:[e.jsx(s,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(s,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(s,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(s,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(s,{children:e.jsx("span",{children:"1249EUR"})})]})]})},m={render:o=>{const t=a=>new Array(25).fill("").map((h,d)=>e.jsxs(w,{children:[e.jsx(s,{children:e.jsx("span",{children:d+a})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder"})}),e.jsx(s,{children:e.jsx("span",{children:"Placeholder 2"})})]},`${d+a}-row`)),[n,i]=E.useState(t(1)),l=()=>{i(a=>[...a,...t(a.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsxs(x,{...o,children:[n,e.jsx(c,{slot:"features",onLoadMore:l,type:y.Button})]})})}};var C,j,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var R,G,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        <Table {...args}>
          {rows}
          <TableGrowing slot="features" onLoadMore={onLoadMore} type={TableGrowingMode.Button} />
        </Table>
      </div>;
  }
}`,...(D=(G=m.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const Z=["Default","GrowingTable"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:g,GrowingTable:m,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{he as C,g as D,m as G,c as T};
