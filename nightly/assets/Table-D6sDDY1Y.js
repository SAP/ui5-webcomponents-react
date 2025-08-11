import{c as J,_ as Q,a1 as Z,p as O,d as ee,b as ne,b7 as L,m as v,ah as te,b5 as F,ar as oe,fj as ie,w as G,s as W,bU as le,bV as se,bW as ae,bX as re,bY as ce,j as n}from"./iframe-C5HYk_w9.js";import{useMDXComponents as z}from"./index-NAtY6U9A.js";import{M as de,C as b,a as he,D as c,A as d}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import{C as pe}from"./ControlsWithNote-D85sRsQV.js";import{D as ue}from"./DocsHeader-j2xomDQy.js";import{F as me}from"./CommandsAndQueries-D55ZIYIG.js";import{S as be}from"./SubcomponentsSection-BVy4lpQe.js";import{c as M,d as N,a as I,b as D}from"./index-B9-6S4Jy.js";import{C as H,D as B,G as fe,W as we,V as ge,w as Te,d as Se,T as k,a as P,b as E,c as V}from"./Table.stories-CG_xpKZi.js";import{T as U}from"./index-BR_moZnj.js";import"./ai-C9N4soY-.js";import{T as q}from"./index-PrufyNAO.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./index-BrZnxm7s.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./copy-fXr871V-.js";import"./copy-C5SWnutv.js";import"./GitHub-Mark-Dm-NBxFc.js";import"./TableOfContent-DsGDxpKI.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./query-DOGTENGM.js";import"./sort-descending-CBjoWotJ.js";import"./IconDesign-DXd8PPVF.js";import"./overflow-BkCL8wbZ.js";import"./Friends500-CRbR9XAn.js";import"./index-1EEehj_F.js";import"./SegmentedButton-DQlrC5-R.js";import"./navigation-right-arrow-czcZqh9Y.js";function _e(){return J(Z,{icon:this._icon,tooltip:this._tooltip,onClick:this._onClick,design:Q.Transparent})}O("@ui5/webcomponents-theming","sap_horizon",async()=>ee);O("@ui5/webcomponents","sap_horizon",async()=>ne);const xe=`:host{flex-shrink:0}:host([_popin]){margin-inline:.0625rem 0}[ui5-button]{min-width:1.625rem;width:1.625rem;height:1.625rem}[ui5-button]::part(icon){width:1rem;height:1rem}:host([_popin]) [ui5-button]::part(icon){width:.75rem;height:.75rem}
`;var ye=function(s,e,t,o){var i=arguments.length,l=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,t,o);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(l=(i<3?a(l):i>3?a(e,t,l):a(e,t))||l);return i>3&&l&&Object.defineProperty(e,t,l),l};let x=class extends F{onBeforeRendering(){this.toggleAttribute("_popin",!this.parentElement)}_onClick(e){var o;((o=this.parentElement)!=null&&o.hasAttribute("ui5-table-header-cell")?this:this.getRootNode().host._headerCell.action[0]).fireDecoratorEvent("click",{targetRef:e.target}),e.stopPropagation()}get _tooltip(){return this.getRenderInfo().tooltip}get _icon(){return this.getRenderInfo().icon}};x=ye([L("click",{bubbles:!1}),v({renderer:te,styles:xe,template:_e})],x);const Ce=x;var $=function(s,e,t,o){var i=arguments.length,l=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,t,o);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(l=(i<3?a(l):i>3?a(e,t,l):a(e,t))||l);return i>3&&l&&Object.defineProperty(e,t,l),l},y;let g=y=class extends Ce{onAfterRendering(){var e;super.onAfterRendering(),this.toggleAttribute("_popin",!((e=this.parentElement)!=null&&e.hasAttribute("ui5-table-header-cell")))}getRenderInfo(){return{icon:"ai",tooltip:y.i18nBundle.getText(ie)}}};$([oe("@ui5/webcomponents")],g,"i18nBundle",void 0);g=y=$([v({tag:"ui5-table-header-cell-action-ai"})],g);g.define();const p=G("ui5-table-header-cell-action-ai",[],[],[],["click"]);p.displayName="TableHeaderCellActionAI";try{p.displayName="TableHeaderCellActionAI",p.__docgenInfo={description:`The \`TableHeaderCellActionAI\` component defines a dedicated AI action for the table column.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableHeaderCellActionAI",props:{onClick:{defaultValue:null,description:`Fired when a header cell action is clicked.

**Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableHeaderCellActionAIDomRef, TableHeaderCellActionClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="TableHeaderCellActionAI",p.__docgenInfo={description:`The \`TableHeaderCellActionAI\` component defines a dedicated AI action for the table column.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"TableHeaderCellActionAI",props:{onClick:{defaultValue:null,description:`Fired when a header cell action is clicked.

**Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableHeaderCellActionAIDomRef, TableHeaderCellActionClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}var C;(function(s){s.None="None",s.Single="Single",s.Multiple="Multiple"})(C||(C={}));const h=C;var R=function(s,e,t,o){var i=arguments.length,l=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,t,o);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(l=(i<3?a(l):i>3?a(e,t,l):a(e,t))||l);return i>3&&l&&Object.defineProperty(e,t,l),l};let w=class extends F{constructor(){super(),this.mode="Multiple",this.selected="",this.identifier="TableSelection",this._rowsLength=0,this.onClickCaptureBound=this._onClickCapture.bind(this)}onTableActivate(e){this._table=e,this._invalidateTableAndRows()}onExitDOM(){this.mode=h.None,this._invalidateTableAndRows(),this._table=void 0}onBeforeRendering(){this._invalidateTableAndRows()}onTableBeforeRendering(){var e;this.isMultiSelectable()&&this._table&&this._table.headerRow[0]&&this._rowsLength!==this._table.rows.length&&(this._rowsLength=this._table.rows.length,this._table.headerRow[0]._invalidate++),(e=this._table)==null||e.removeEventListener("click",this.onClickCaptureBound)}onTableAfterRendering(){var e;(e=this._table)==null||e.addEventListener("click",this.onClickCaptureBound,{capture:!0})}isSelectable(){return this.mode!==h.None}isMultiSelectable(){return this.mode===h.Multiple}isRowSelectorRequired(){return this.mode!==h.None}getAriaDescriptionForTable(){}getAriaDescriptionForColumnHeader(){}getRowKey(e){return e.rowKey||""}isSelected(e){if(!this._table||!this.isSelectable())return!1;if(e.isHeaderRow())return this.areAllRowsSelected();const t=this.getRowKey(e);return this.selectedAsArray.includes(t)}hasSelectedRow(){if(!this._table||!this.isSelectable())return!1;const e=this.selectedAsArray;return this._table.rows.some(t=>{const o=this.getRowKey(t);return e.includes(o)})}areAllRowsSelected(){if(!this._table||!this._table.rows.length||this.mode!==h.Multiple)return!1;const e=this.selectedAsArray;return this._table.rows.every(t=>{const o=this.getRowKey(t);return e.includes(o)})}setSelected(e,t,o=!1){var i;(i=this._rangeSelection)!=null&&i.isMouse&&this._rangeSelection.shiftPressed||(e.isHeaderRow()?this._selectHeaderRow(t):this._selectRow(e,t),o&&this.fireDecoratorEvent("change"))}get selectedAsArray(){return this.selected.split(" ").filter(String)}set selectedAsArray(e){this.selected=e.filter(String).join(" ")}get selectedAsSet(){return new Set(this.selectedAsArray)}set selectedAsSet(e){this.selectedAsArray=[...e]}_selectRow(e,t){const o=this.getRowKey(e);if(this.mode===h.Multiple){const i=this.selectedAsSet;i[t?"add":"delete"](o),this.selectedAsSet=i}else this.selected=t?o:""}_selectHeaderRow(e){const t=this.selectedAsSet;this._table.rows.forEach(o=>{const i=this.getRowKey(o);t[e?"add":"delete"](i)}),this.selectedAsSet=t}_invalidateTableAndRows(){this._table&&(this.isSelectable()?this.isMultiSelectable()||(this.selected=this.selectedAsArray.shift()||""):this.selected="",this._table._invalidate++,this._table.headerRow[0]._invalidate++,this._table.rows.forEach(e=>e._invalidate++))}_onkeydown(e){var o;if(!this.isMultiSelectable()||!this._table||!e.shiftKey)return;const t=le();if(!(t!=null&&t.hasAttribute("ui5-table-row")||(o=this._rangeSelection)!=null&&o.isMouse||t!=null&&t.hasAttribute("ui5-growing-row"))){this._stopRangeSelection();return}if(this._rangeSelection){if(e.key==="ArrowUp"||e.key==="ArrowDown"){const i=se(e)?-1:1;this._handleRangeSelection(t,i)}}else{const i=t;this._startRangeSelection(i,this.isSelected(i))}this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey)}_onkeyup(e,t){this._table&&((!t.hasAttribute("ui5-table-row")||!this._rangeSelection||!e.shiftKey)&&this._stopRangeSelection(),this._rangeSelection&&(this._rangeSelection.shiftPressed=e.shiftKey))}_onClickCapture(e){var o,i,l;if(!this._table||this.mode!==h.Multiple)return;if(ae(e)){this._stopRangeSelection();return}if(!re(e)){this._stopRangeSelection();return}const t=ce(e.composedPath());if(e.shiftKey&&((o=this._rangeSelection)!=null&&o.isMouse)){const a=this._rangeSelection.rows[0],r=this._table.rows.indexOf(a),f=this._table.rows.indexOf(t),T=this.isSelected(a);if((l=(i=t.shadowRoot)==null?void 0:i.querySelector("#selection-component"))==null||l.toggleAttribute("checked",T),e.stopPropagation(),r===-1||f===-1||t.rowKey===a.rowKey||t.rowKey===this._rangeSelection.rows[this._rangeSelection.rows.length-1].rowKey)return;const S=f-r;this._handleRangeSelection(t,S)}else t&&this._startRangeSelection(t,!this.isSelected(t),!0)}_startRangeSelection(e,t,o=!1){this._rangeSelection={selected:t,isUp:null,rows:[e],isMouse:o,shiftPressed:!1}}_handleRangeSelection(e,t){var a,r;if(!this._rangeSelection)return;const o=t>0;(a=this._rangeSelection).isUp??(a.isUp=o);const i=o!==this._rangeSelection.isUp&&!this._rangeSelection.isMouse;let l=i&&this.isSelected(e);if(i)this._reverseRangeSelection();else{const f=this._table.rows.indexOf(e),[T,S]=[f,f-t].sort((_,m)=>_-m);l=((r=this._table)==null?void 0:r.rows.slice(T,S+1).reduce((_,m)=>{var j,A;const X=!((j=this._rangeSelection)!=null&&j.rows.includes(m)),Y=this.isSelected(m)!==this._rangeSelection.selected;return X&&((A=this._rangeSelection)==null||A.rows.push(m)),this._selectRow(m,this._rangeSelection.selected),_||Y},l))||!1}l&&this.fireDecoratorEvent("change")}_stopRangeSelection(){this._rangeSelection=null}_reverseRangeSelection(){var t,o;const e=(t=this._rangeSelection)==null?void 0:t.rows.pop();e&&this._selectRow(e,!1),((o=this._rangeSelection)==null?void 0:o.rows.length)===1&&(this._rangeSelection.isUp=null)}};R([W()],w.prototype,"mode",void 0);R([W()],w.prototype,"selected",void 0);w=R([v({tag:"ui5-table-selection"}),L("change",{bubbles:!0})],w);w.define();const u=G("ui5-table-selection",["mode","selected"],[],[],["change"]);u.displayName="TableSelection";try{u.displayName="TableSelection",u.__docgenInfo={description:'The `TableSelection` component is used inside the `Table` to add key-based selection capabilities to the `Table`.\n\nThe component offers three selection modes:\n* Single - select a single row.\n* Multiple - select multiple rows.\n* None - no selection active.\n\nAs the selection is key-based, `TableRow` components need to define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelection` component is only used inside the `Table` component as a feature.\nIt has to be slotted inside the `Table` in the `features` slot.\nThe component is not intended to be used as a standalone component.\n\n```html\n<Table>\n	<TableSelection mode="Multiple" slot="features"></TableSelection>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelection",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionDomRef, never>) => void"}},mode:{defaultValue:{value:'"Multiple"'},description:"Defines the selection mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'}]}},selected:{defaultValue:null,description:"Defines the selected rows separated by a space.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="TableSelection",u.__docgenInfo={description:'The `TableSelection` component is used inside the `Table` to add key-based selection capabilities to the `Table`.\n\nThe component offers three selection modes:\n* Single - select a single row.\n* Multiple - select multiple rows.\n* None - no selection active.\n\nAs the selection is key-based, `TableRow` components need to define a unique `row-key` property.\n\n### Usage\n\nThe `TableSelection` component is only used inside the `Table` component as a feature.\nIt has to be slotted inside the `Table` in the `features` slot.\nThe component is not intended to be used as a standalone component.\n\n```html\n<Table>\n	<TableSelection mode="Multiple" slot="features"></TableSelection>\n</Table>\n```\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"TableSelection",props:{onChange:{defaultValue:null,description:`Fired when the selection is changed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableSelectionDomRef, never>) => void"}},mode:{defaultValue:{value:'"Multiple"'},description:"Defines the selection mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"Multiple"'}]}},selected:{defaultValue:null,description:"Defines the selected rows separated by a space.",name:"selected",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function K(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...z(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(de,{of:H}),`
`,n.jsx(ue,{of:H}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(b,{of:B}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(pe,{of:B}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"growing-table",children:"Growing Table"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with growing feature (",n.jsx(e.code,{children:"<TableGrowing onLoadMore={onLoadMore} mode={TableGrowingMode.Scroll} />"}),"):"]}),`
`,n.jsx(b,{of:fe}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const createRows = (indexOffset) => {
  return new Array(25).fill('').map((_, index) => (
    <TableRow key={\`\${index + indexOffset}-row\`}>
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
    </TableRow>
  ));
};

const GrowingTable = (props) => {
  const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <>
      <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
        Growing <code>mode</code>
      </Label>
      <SegmentedButton
        style={{ marginBlockEnd: '0.5rem' }}
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
        }}
      >
        <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
        <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
      </SegmentedButton>
      <div style={{ height: '250px', overflow: 'auto' }}>
        <Table {...props} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
          {rows}
        </Table>
      </div>
    </>
  );
};
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-row-selection",children:"Table with row selection"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with selection features (",n.jsx(e.code,{children:"<TableSelectionSingle />"})," & ",n.jsx(e.code,{children:"<TableSelectionMulti />"}),")"]}),`
`,n.jsx(b,{of:we}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function TableWithRowSelection(props) {
  const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
  return (
    <>
      <SegmentedButton
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
        }}
      >
        <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
        <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
      </SegmentedButton>
      <Table
        {...props}
        features={
          <>
            {'Single' === mode && <TableSelectionSingle />}
            {'Multi' === mode && <TableSelectionMulti />}
          </>
        }
      >
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
    </>
  );
}
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-virtualized-rows",children:"Table with virtualized rows"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Table"})," with virtualization feature (",n.jsx(e.code,{children:"<TableVirtualizer {...props) />"}),"):"]}),`
`,n.jsx(b,{of:ge}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// enrich data with \`position\` (if not already available)
const dataLargeWithPosition = dataLarge.map((item, index) => ({
  ...item,
  position: index
}));

function VirtualizedTable(props) {
  const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));

  const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = (e) => {
    const { first, last } = e.detail;

    // render two rows before and after the visible area of the table body container
    const overscanCountStart = Math.max(first - 2, 0);
    const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
    setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
  };
  return (
    <Table
      {...props}
      // headerRow + 8 visible rows:
      // 9 * 44px = 396px (content-density: Cozy)
      // 9 * 32px = 288px (content-density: Compact)
      style={{ height: '396px' }}
      headerRow={
        <TableHeaderRow sticky>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Friend Name</TableHeaderCell>
          <TableHeaderCell>Friend Age</TableHeaderCell>
        </TableHeaderRow>
      }
      features={<TableVirtualizer rowCount={500} rowHeight={44} onRangeChange={handleRangeChange} />}
    >
      {data.map((row) => (
        <TableRow key={row.position} position={row.position}>
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
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,n.jsx(e.h2,{id:"table-with-row-actions",children:"Table with row actions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"TableRowAction"})," & ",n.jsx(e.code,{children:"TableRowActionNavigation"}),` component lets you incorporate interactive elements into table rows, enabling users to take actions directly related to each row.
The `,n.jsx(e.code,{children:"rowActionCount"})," prop of the ",n.jsx(e.code,{children:"Table"})," component determines the width of the row action column. A maximum value of 3 is recommended, as exceeding this limit may take up too much space on smaller screens. If the number of row actions exceeds the ",n.jsx(e.code,{children:"rowActionCount"}),", an overflow button will appear, providing access to the additional actions."]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"invisible"})," prop of row actions allows you to hide specific row actions while preserving their space. This can be useful for consistent alignment of row actions across several rows."]}),`
`,n.jsx(b,{of:Te}),`
`,n.jsx(e.h2,{id:"drag-and-rop-table-rows",children:"Drag and rop table rows"}),`
`,n.jsxs(e.p,{children:["Enable drag-and-drop by using the ",n.jsx(e.code,{children:"onMoveOver"})," and ",n.jsx(e.code,{children:"onMove"})," event in combination with the ",n.jsx(e.code,{children:"movable"})," prop on the ",n.jsx(e.code,{children:"TableRow"}),"."]}),`
`,n.jsx(b,{of:Se}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show static code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function DragAndDropTableRows(props) {
  const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));

  const handleMove: TablePropTypes["onMove"] = (e) => {
    const { source, destination } = e.detail;

    setRows((prevRows) => {
      const sourceIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === source.element.dataset.id,
      );
      const destinationIndex = prevRows.findIndex(
        (row) => \`\${row.position}\` === destination.element.dataset.id,
      );

      if (sourceIndex === -1 || destinationIndex === -1) {
        return prevRows;
      }

      const updatedRows = [...prevRows];
      const [movedRow] = updatedRows.splice(sourceIndex, 1);

      if (destination.placement === "Before") {
        updatedRows.splice(destinationIndex, 0, movedRow);
      } else if (destination.placement === "After") {
        updatedRows.splice(destinationIndex + 1, 0, movedRow);
      }

      return updatedRows;
    });
  };

  const handleMoveOver: TablePropTypes["onMoveOver"] = (e) => {
    const { source, destination } = e.detail;

    if (
      source.element.hasAttribute("ui5-table-row") &&
      destination.element.hasAttribute("ui5-table-row") &&
      destination.placement !== "On"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Table {...props} onMove={handleMove} onMoveOver={handleMoveOver}>
      {rows.map((row) => (
        <TableRow key={row.position} movable data-id={row.position}>
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
        </TableRow>
      ))}
    </Table>
  );
}
`})})]}),`
`,n.jsx(he,{children:be}),`
`,n.jsx(e.h2,{id:"tableheaderrow",children:"TableHeaderRow"}),`
`,n.jsx(c,{of:M}),`
`,n.jsx(d,{of:M}),`
`,n.jsx(e.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,n.jsx(c,{of:N}),`
`,n.jsx(d,{of:N}),`
`,n.jsx(e.h2,{id:"tableheadercellactionai",children:"TableHeaderCellActionAI"}),`
`,n.jsx(c,{of:p}),`
`,n.jsx(d,{of:p}),`
`,n.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,n.jsx(c,{of:I}),`
`,n.jsx(d,{of:I}),`
`,n.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,n.jsx(c,{of:D}),`
`,n.jsx(d,{of:D}),`
`,n.jsx(e.h2,{id:"tablerowaction",children:"TableRowAction"}),`
`,n.jsx(c,{of:U}),`
`,n.jsx(d,{of:U}),`
`,n.jsx(e.h2,{id:"tablerowactionnavigation",children:"TableRowActionNavigation"}),`
`,n.jsx(c,{of:k}),`
`,n.jsx(d,{of:k}),`
`,n.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,n.jsx(c,{of:P}),`
`,n.jsx(d,{of:P}),`
`,n.jsx(e.h2,{id:"tableselectionmulti",children:"TableSelectionMulti"}),`
`,n.jsx(c,{of:q}),`
`,n.jsx(d,{of:q}),`
`,n.jsx(e.h2,{id:"tableselectionsingle",children:"TableSelectionSingle"}),`
`,n.jsx(c,{of:E}),`
`,n.jsx(d,{of:E}),`
`,n.jsx(e.h2,{id:"tablevirtualizer-experimental",children:"TableVirtualizer (experimental)"}),`
`,n.jsx(c,{of:V}),`
`,n.jsx(d,{of:V}),`
`,n.jsx(e.h2,{id:"tableselection-deprecated",children:"TableSelection (deprecated)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Deprecated!"})}),`
`,n.jsx(c,{of:u}),`
`,n.jsx(d,{of:u}),`
`,n.jsx(me,{})]})}function fn(s={}){const{wrapper:e}={...z(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(K,{...s})}):K(s)}export{fn as default};
