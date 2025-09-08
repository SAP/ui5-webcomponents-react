import{c as f,p as v,d as R,s as p,ar as G,m as N,b7 as L,ai as D,d2 as M,b5 as I,w as A,d3 as F,j as e,J as B}from"./iframe-CGUWa3l5.js";import{useMDXComponents as S}from"./index-Cg9cAKJC.js";import{M as E,C as w,a as P,D as u,A as m}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import{M as k}from"./index-CL_zuYv3.js";import{C as q}from"./ControlsWithNote-CLRZIdA4.js";import{D as O}from"./DocsHeader-bLXXKsa0.js";import{F as U}from"./CommandsAndQueries-D9MoTrLH.js";import{S as V}from"./SubcomponentsSection-BVy4lpQe.js";import{d as $,T as H,a as W,C as g,D as _,G as z,b as x,c as y,e as T}from"./Table.stories-DWpEBJlI.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-DVv4DYKP.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./copy-CqMmNhIc.js";import"./copy-WtCMvp6x.js";import"./GitHub-Mark-r0BUaYbl.js";import"./TableOfContent-BXgVIGFG.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";function X(){return f("tr",{part:"group-row",class:"ui5-table-group-row-root","aria-label":this.ariaLabelText,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,onFocusIn:this._onfocusin,children:f("td",{colspan:this.colSpan,children:f("slot",{})})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>R);v("@ui5/webcomponents-compat","sap_horizon",async()=>$);const J=`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v2-14-0_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v2-14-0_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-14-0_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v2-14-0_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--ui5-v2-14-0_table_focus_outline_offset))}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`;var i=function(t,o,r,l){var c=arguments.length,a=c<3?o:l===null?l=Object.getOwnPropertyDescriptor(o,r):l,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,o,r,l);else for(var h=t.length-1;h>=0;h--)(d=t[h])&&(a=(c<3?d(a):c>3?d(o,r,a):d(o,r))||a);return c>3&&a&&Object.defineProperty(o,r,a),a},b;let n=b=class extends I{constructor(){super(...arguments),this.mode="None",this.forcedBusy=!1,this.selected=!1,this.tabbableElements=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${b.i18nBundle.getText(H)} ${this.textContent}. ${this.forcedAriaPosition}`}visibleColCount(){let o=this._columnsInfo?.reduce((r,l)=>l.visible?++r:r,0)||0;return this.mode===W.MultiSelect&&o++,o}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(o){this.fireDecoratorEvent("_focused",o)}};i([p()],n.prototype,"mode",void 0);i([p({type:Array})],n.prototype,"_columnsInfo",void 0);i([p()],n.prototype,"forcedTabIndex",void 0);i([p({type:Boolean})],n.prototype,"forcedBusy",void 0);i([p()],n.prototype,"forcedAriaPosition",void 0);i([G("@ui5/webcomponents")],n,"i18nBundle",void 0);n=b=i([N({tag:"ui5-table-group-row",styles:J,renderer:D,template:X}),L("_focused",{bubbles:!0})],n);M(n);n.define();const C=F(),K=C?`-${C}`:"",s=A(`ui5-table-group-row${K}`,[],[],[],[]);s.displayName="TableGroupRow";try{s.displayName="TableGroupRow",s.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="TableGroupRow",s.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function j(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...S(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(E,{of:g}),`
`,e.jsx(O,{of:g}),`
`,e.jsx(k,{children:e.jsxs(B,{children:["Using the Table from the ",e.jsx(o.code,{children:"compat"})," package and the ",e.jsx(o.code,{children:"main"})," package in the same application is not supported without scoping the compat package."]}),design:"Critical",hideCloseButton:!0}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(w,{of:_}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(q,{of:_}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Table"})," with ",e.jsx(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e.jsx(w,{of:z}),`
`,e.jsx(o.h3,{id:"code",children:"Code"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset} - row\`}>
      <TableCell>
        <Label>{index + indexOffset}</Label>
      </TableCell>
      <TableCell>
        <Label>Placeholder</Label>
      </TableCell>
    </TableRow>
  ));
};

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        onLoadMore={onLoadMore}
        growing={TableGrowingMode.Scroll}
        columns={
          <>
            <TableColumn>
              <Label>Column 1</Label>
            </TableColumn>
            <TableColumn>
              <Label>Column 2</Label>
            </TableColumn>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,e.jsx(P,{children:V}),`
`,e.jsx(o.h2,{id:"tablecolumn",children:"TableColumn"}),`
`,e.jsx(u,{of:x}),`
`,e.jsx(m,{of:x}),`
`,e.jsx(o.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(u,{of:y}),`
`,e.jsx(m,{of:y}),`
`,e.jsx(o.h2,{id:"tablegrouprow",children:"TableGroupRow"}),`
`,e.jsx(u,{of:s}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(u,{of:T}),`
`,e.jsx(m,{of:T}),`
`,e.jsx(U,{})]})}function Re(t={}){const{wrapper:o}={...S(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(j,{...t})}):j(t)}export{Re as default};
