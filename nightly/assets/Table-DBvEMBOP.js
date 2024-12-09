import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as H}from"./index-DyCphG7h.js";import{ae as D,af as f,ag as M,ai as p,ah as h}from"./index-DrkpxvVP.js";import"./index-Dv5mXzg4.js";import"./index-Crv3-0w0.js";import{C as P}from"./ControlsWithNote-qLTpucR6.js";import{D as V}from"./DocsHeader-DzZ735Go.js";import{F as z}from"./CommandsAndQueries-KkmO_i5p.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import{S as W}from"./SubcomponentsSection-BVy4lpQe.js";import{t as I,T as x,b as C,c as _,d as y}from"./index-9emNdlsu.js";import{C as E,D as R,G as B,W as q,T as v}from"./Table.stories-BdLR30DV.js";import{T as j}from"./index-D5E6zMeN.js";import{B as O,m as F,P as G,u as k,Z as U,W as L,D as A,O as $,Y as K,F as X}from"./Keys-CAuuEE_3.js";import{q as g,v as Y,S as Z,w as J}from"./withWebComponent-D2290JWW.js";import{l as Q}from"./event-strict-DgQLNDEV.js";import{t as ee}from"./getActiveElement-kltGt_DR.js";import{b as w}from"./TabbableElements-BJJu_CDc.js";import"./iframe-DzAmuJOX.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./utils-rQ0RHFcC.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./Button-B25Pr19o.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-RAequTWU.js";import"./main-BwlHOnYP.js";import"./index-D0V_jfbX.js";import"./Tag-Db0_Pjzi.js";import"./sys-help-2-CxYMJcq0.js";import"./index-x-kKtoec.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./chunk-NUUEMKO5-BBncOsdw.js";import"./client-CqEfiX9M.js";import"./copy-B6jpU8Sl.js";import"./copy-ClT0iCqi.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-cwGs0p5-.js";import"./I18nStore-D-72hezK.js";import"./useStylesheet-DzoyRzuT.js";import"./index-gSd2kvlA.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-DczEHKsk.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-ByfP8321.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./CheckBox-DyUotHW-.js";import"./ValueState-Bg0UWejw.js";import"./accept-dLMNjkw8.js";import"./RadioButton-C2mR3o4F.js";import"./index--NBym92h.js";import"./SegmentedButton-GUgpkWw6.js";import"./ItemNavigation-BFACp1PV.js";var b=function(n,e,o,l){var r=arguments.length,i=r<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,o):l,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,o,l);else for(var m=n.length-1;m>=0;m--)(a=n[m])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i},s;(function(n){n[n.None=0]="None",n[n.Next=1]="Next",n[n.Previous=2]="Previous",n[n.Released=4]="Released",n[n.NextReleased=5]="NextReleased",n[n.PreviousReleased=6]="PreviousReleased"})(s||(s={}));let u=class extends Z{constructor(){super(),this.rowHeight=45,this.rowCount=100,this.extraRows=0,this.identifier="TableVirtualizer",this._lastRowPosition=0,this._firstRowPosition=0,this._visibleRowCount=0,this._tabBlockingState=s.None,this._onScrollBound=I(this._onScroll.bind(this)),this._onRowInvalidateBound=this._onRowInvalidate.bind(this)}onTableActivate(e){this._table=e,this._scrollContainer.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._onScroll()}onAfterRendering(){this._table&&this._table._invalidate++}onTableAfterRendering(){if(this._table&&(this._updateRowsHeight(),this._tabBlockingState&s.Released)){const e=this._table.rows.at(this._tabBlockingState&s.Next?-1:0),o=w(e).at(this._tabBlockingState&s.Next?0:-1);this._tabBlockingState=s.None,(o||e).focus()}}onExitDOM(){this._scrollContainer.removeEventListener("scroll",this._onScrollBound),this._table=void 0}reset(){this._lastRowPosition=-1,this._firstRowPosition=-1,this._scrollContainer.scrollTop>0?this._scrollContainer.scrollTop=0:this._onScroll()}get _scrollContainer(){return this._table._tableElement}get _rowsContainer(){return this._table.shadowRoot.getElementById("rows")}_onScroll(){if(!this._table)return;const e=this._table.headerRow[0],o=e.offsetHeight;let l=this._scrollContainer.scrollTop,r=this._scrollContainer.clientHeight;e.sticky?r=Math.max(0,r-o):l=Math.max(0,l-o),this._visibleRowCount=Math.ceil(r/this.rowHeight);let i=Math.floor(l/this.rowHeight)-this.extraRows;i=Math.max(0,i);let a=Math.max(0,i+this._visibleRowCount+2*this.extraRows);a=Math.min(a,this.rowCount),!(this._firstRowPosition===i&&this._lastRowPosition===a)&&(this._lastRowPosition=a,this._firstRowPosition=i,this.fireDecoratorEvent("range-change",{first:i,last:a}))}_updateRowsHeight(){const e=this.rowCount*this.rowHeight;this._rowsContainer.style.height=`${e}px`}_getTransform(){if(!this._table)return;const e=this._table.rows[0];if(e&&e.position>0)return`translateY(${e.position*this.rowHeight}px)`}_onRowInvalidate(e){e.name==="position"&&(e.target.detachInvalidate(this._onRowInvalidateBound),this._tabBlockingState|=s.Released)}_onKeyDown(e){if(!this._table)return;let o=0;const l=this._table.rows,r=l[0],i=l[l.length-1],a=r.position!==0,m=i.position!==this.rowCount-1,T=this._table._tableNavigation,c=ee();if(O(e)&&m&&w(this._rowsContainer).pop()===c?(this._tabBlockingState=s.Next,i.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight):F(e)&&a&&w(this._rowsContainer).shift()===c?(this._tabBlockingState=s.Previous,r.attachInvalidate(this._onRowInvalidateBound),o=this.rowHeight*-1):m&&T._getNavigationItemsOfRow(i).includes(c)?G(e)||k(e)?o=this.rowHeight:U(e)?o=this._visibleRowCount*this.rowHeight:L(e)&&c===i&&(o=this.rowCount*this.rowHeight):a&&T._getNavigationItemsOfRow(r).includes(c)&&(A(e)||$(e)?o=this.rowHeight*-1:K(e)?o=this._visibleRowCount*this.rowHeight*-1:X(e)&&c===r&&(o=this.rowCount*this.rowHeight*-1)),o){const N=this._table.scrollTop;this._scrollContainer.scrollTop+=o,this._scrollContainer.scrollTop!==N&&e.preventDefault()}}};b([g({type:Number})],u.prototype,"rowHeight",void 0);b([g({type:Number})],u.prototype,"rowCount",void 0);b([g({type:Number})],u.prototype,"extraRows",void 0);u=b([Y({tag:"ui5-table-virtualizer"}),Q("range-change")],u);u.define();const d=J("ui5-table-virtualizer",["extraRows","rowCount","rowHeight"],[],[],["range-change"]);d.displayName="TableVirtualizer";try{d.displayName="TableVirtualizer",d.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="TableVirtualizer",d.__docgenInfo={description:`The \`TableVirtualizer\` component is used inside the \`Table\` to virtualize the table rows, if the \`overflowMode\` property of the table is set to 'Scroll'.
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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function S(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...H(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(D,{of:E}),`
`,t.jsx(V,{experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:R}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(P,{of:R}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"growing-table",children:"Growing Table"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"Table"})," with growing feature (",t.jsx(e.code,{children:"<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />"}),"):"]}),`
`,t.jsx(f,{of:B}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
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

const GrowingTable = () => {
  const [rows, setRows] = useState(createRows(1));
  const onLoadMore = () => {
    setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
  };
  return (
    <div style={{ height: '250px', overflow: 'auto' }}>
      <Table
        {...otherProps}
        headerRow={
          <TableHeaderRow sticky>
            <TableHeaderCell width={'200px'} minWidth={'200px'}>
              <span>Product</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'200px'}>
              <span>Supplier</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'200px'}>
              <span>Dimensions</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'100px'} maxWidth="200px">
              <span>Weight</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth="200px">
              <span>Price</span>
            </TableHeaderCell>
          </TableHeaderRow>
        }
        features={<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />}
      >
        {rows}
      </Table>
    </div>
  );
};
`})})]}),`
`,t.jsx(e.h2,{id:"table-with-row-selection",children:"Table with row selection"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"Table"})," with selection feature (",t.jsx(e.code,{children:'<TableSelection mode="Multiple" />'}),"):"]}),`
`,t.jsx(f,{of:q}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`function TableWithRowSelection() {
  const [mode, setMode] = useState(TableSelectionMode.Multiple);
  return (
    <>
      <SegmentedButton
        onSelectionChange={(e) => {
          setMode(e.detail.selectedItems[0].textContent);
        }}
      >
        {Object.values(TableSelectionMode).map((selectionMode) => (
          <SegmentedButtonItem key={selectionMode} selected={selectionMode === mode}>
            {selectionMode}
          </SegmentedButtonItem>
        ))}
      </SegmentedButton>
      <Table
        {...otherProps}
        headerRow={
          <TableHeaderRow sticky>
            <TableHeaderCell width={'200px'} minWidth={'200px'}>
              <span>Product</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'200px'}>
              <span>Supplier</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'200px'}>
              <span>Dimensions</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth={'100px'} maxWidth="200px">
              <span>Weight</span>
            </TableHeaderCell>
            <TableHeaderCell minWidth="200px">
              <span>Price</span>
            </TableHeaderCell>
          </TableHeaderRow>
        }
        features={<TableSelection mode={mode} />}
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
`,t.jsx(M,{children:W}),`
`,t.jsx(e.h2,{id:"tableheaderrow",children:"TableHeaderRow"}),`
`,t.jsx(p,{of:x}),`
`,t.jsx(h,{of:x}),`
`,t.jsx(e.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,t.jsx(p,{of:C}),`
`,t.jsx(h,{of:C}),`
`,t.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,t.jsx(p,{of:_}),`
`,t.jsx(h,{of:_}),`
`,t.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,t.jsx(p,{of:y}),`
`,t.jsx(h,{of:y}),`
`,t.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,t.jsx(p,{of:v}),`
`,t.jsx(h,{of:v}),`
`,t.jsx(e.h2,{id:"tableselection",children:"TableSelection"}),`
`,t.jsx(p,{of:j}),`
`,t.jsx(h,{of:j}),`
`,t.jsx(e.h2,{id:"tablevirtualizer",children:"TableVirtualizer"}),`
`,t.jsx(p,{of:d}),`
`,t.jsx(h,{of:d}),`
`,t.jsx(z,{})]})}function Et(n={}){const{wrapper:e}={...H(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(S,{...n})}):S(n)}export{Et as default};
