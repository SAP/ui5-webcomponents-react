import{c as f,p as v,d as R,s as c,ar as G,m as N,b7 as L,ah as D,c_ as M,b5 as I,w as A,c$ as F,j as e,J as B}from"./iframe-CG2rGjbc.js";import{useMDXComponents as S}from"./index-DS69H-n6.js";import{M as E,C as w,a as P,D as u,A as m}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import{M as k}from"./index-BVmbnKNa.js";import{C as q}from"./ControlsWithNote-BFQM5fX0.js";import{D as O}from"./DocsHeader-BGOyORj-.js";import{F as U}from"./CommandsAndQueries-DskZpT92.js";import{S as V}from"./SubcomponentsSection-BVy4lpQe.js";import{d as $,T as H,a as W,C as g,D as _,G as z,b as x,c as y,e as T}from"./Table.stories--NqJLiKN.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./index-vBa65tZZ.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./copy-Cd5gRkoK.js";import"./copy-Cj_PeOWN.js";import"./GitHub-Mark-C4GRBKUH.js";import"./TableOfContent-DgRpeg8V.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";function X(){return f("tr",{part:"group-row",class:"ui5-table-group-row-root","aria-label":this.ariaLabelText,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,onFocusIn:this._onfocusin,children:f("td",{colspan:this.colSpan,children:f("slot",{})})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>R);v("@ui5/webcomponents-compat","sap_horizon",async()=>$);const J=`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v2-13-1_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v2-13-1_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-13-1_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v2-13-1_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--ui5-v2-13-1_table_focus_outline_offset))}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`;var l=function(t,o,r,s){var p=arguments.length,a=p<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,r):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,o,r,s);else for(var h=t.length-1;h>=0;h--)(d=t[h])&&(a=(p<3?d(a):p>3?d(o,r,a):d(o,r))||a);return p>3&&a&&Object.defineProperty(o,r,a),a},b;let n=b=class extends I{constructor(){super(...arguments),this.mode="None",this.forcedBusy=!1,this.selected=!1,this.tabbableElements=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${b.i18nBundle.getText(H)} ${this.textContent}. ${this.forcedAriaPosition}`}visibleColCount(){var r;let o=((r=this._columnsInfo)==null?void 0:r.reduce((s,p)=>p.visible?++s:s,0))||0;return this.mode===W.MultiSelect&&o++,o}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(o){this.fireDecoratorEvent("_focused",o)}};l([c()],n.prototype,"mode",void 0);l([c({type:Array})],n.prototype,"_columnsInfo",void 0);l([c()],n.prototype,"forcedTabIndex",void 0);l([c({type:Boolean})],n.prototype,"forcedBusy",void 0);l([c()],n.prototype,"forcedAriaPosition",void 0);l([G("@ui5/webcomponents")],n,"i18nBundle",void 0);n=b=l([N({tag:"ui5-table-group-row",styles:J,renderer:D,template:X}),L("_focused",{bubbles:!0})],n);M(n);n.define();const C=F(),K=C?`-${C}`:"",i=A(`ui5-table-group-row${K}`,[],[],[],[]);i.displayName="TableGroupRow";try{i.displayName="TableGroupRow",i.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="TableGroupRow",i.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

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
`,e.jsx(u,{of:i}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(u,{of:T}),`
`,e.jsx(m,{of:T}),`
`,e.jsx(U,{})]})}function Re(t={}){const{wrapper:o}={...S(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(j,{...t})}):j(t)}export{Re as default};
