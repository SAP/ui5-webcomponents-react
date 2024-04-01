function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as C}from"./index-_byTH_QA.js";import{F as R}from"./ProjectTemplate-BjkgKmdc.js";import{C as S}from"./ControlsWithNote-DiZHUH_3.js";import{D as N}from"./DocsHeader-CVm8ukXV.js";import"./index-Dl6G-zuu.js";import{M as G,d as _,e as D,f as u,g as d}from"./index-lk_CuzkI.js";import{S as L}from"./SubcomponentsSection-BVy4lpQe.js";import{e as w,a as g,b as y,c as x}from"./index-B6txFbzS.js";import{_ as M}from"./iframe-BRLyUF3k.js";import{U as P}from"./UI5Element-TZfj5eGG.js";import{a as E,l as b,s as I,p,c as A,f as $,w as F}from"./withWebComponent-WdPEUVG_.js";import{e as O}from"./event-CegLCnR0.js";import{b as V}from"./i18nBundle-C2WczoLt.js";import B from"./CheckBox-BhzBuo-2.js";import{a5 as k}from"./i18n-defaults-weVOdquz.js";import{r as j}from"./Boot-CiW9Yqx0.js";import{s as U}from"./parameters-bundle.css-B6zgRRib.js";import{C as q,D as T,G as H}from"./Table.stories-bZSLjiqN.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./index-SOr7nmad.js";import"./slot-Df15G--e.js";import"./decline-D6EEqVrc.js";import"./Icons-Bz_R9SHk.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./class-map-DdS6yb0u.js";import"./utils-B7AYZOSV.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./Icon-CItvJRAI.js";import"./Keys-BiUfzlGt.js";import"./Button-D5VmNntQ.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-FrzSYOso.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-BaWk7_wq.js";import"./clsx-B-dksMZM.js";import"./index-BMhGtxOP.js";import"./Label-Cuq9lQQu.js";import"./WrappingType-CW8URInd.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./index-DUUJLBBZ.js";import"./index-CBgB-oAp.js";import"./Link-ShECJtRl.js";import"./index-BSdd8T_u.js";import"./Popover-BZGRcTIp.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-o-m9Y-i7.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DDqpi34j.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CSZX4I-3.js";import"./BrowserScrollbar.css-ByCTonOa.js";import"./index-CYjHeYtF.js";import"./i18n-defaults-FgEXIKeH.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-DvBQI2Vb.js";import"./useStylesheet-Cs3TLZWO.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-CohoEJjR.js";import"./index-COgn3iCp.js";import"./index-Cp78fbS9.js";import"./Avatar-BCyNq7eW.js";import"./employee-BRu8U1FM.js";import"./index-2CwWbW7u.js";import"./utils-BMOAE8o8.js";import"./index-D7YtnLc4.js";import"./sys-help-2-DXsgVRAc.js";import"./copy-ChpJf3sv.js";import"./GitHub-Mark-EHn_tOX6.js";import"./TableOfContent-5fmVXLwW.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./ItemNavigation-BjKsRQtS.js";import"./TabbableElements-Ds_LZU0v.js";import"./debounce-jW346lN3.js";import"./BusyIndicator-BWKrUyFw.js";import"../sb-preview/runtime.js";import"./ValueState-Bn-H2OaL.js";import"./accept-D1NAdLE7.js";function z(t,o,r){return E`<tr class="ui5-table-group-row-root" part="group-row" aria-label=${b(this.ariaLabelText)} tabindex="${b(this.forcedTabIndex)}" @focusin="${this._onfocusin}"><td colspan=${b(this.colSpan)}><slot></slot></td></tr>`}j("@ui5/webcomponents-theming","sap_horizon",async()=>I);j("@ui5/webcomponents","sap_horizon",async()=>U);const W={packageName:"@ui5/webcomponents",fileName:"themes/TableGroupRow.css.ts",content:`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v1-23-1_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v1-23-1_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v1-23-1_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v1-23-1_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v1-23-1_table_focus_outline_offset)}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`};var l=function(t,o,r,s){var m=arguments.length,i=m<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,r):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,o,r,s);else for(var f=t.length-1;f>=0;f--)(c=t[f])&&(i=(m<3?c(i):m>3?c(o,r,i):c(o,r))||i);return m>3&&i&&Object.defineProperty(o,r,i),i},h;let n=h=class extends P{constructor(){super(...arguments),this.selected=!1,this.tabbableElements=[],this._columnsInfoString=""}get colSpan(){return this._colSpan}get ariaLabelText(){return`${h.i18nBundle.getText(k)} ${this.innerText}. ${this.forcedAriaPosition}`}visibleColCount(){let o=this._columnsInfo.reduce((r,s)=>s.visible?++r:r,0);return this.mode===w.MultiSelect&&o++,o}onBeforeRendering(){!this._columnsInfo||this._columnsInfo.length===0||(this._colSpan=this.visibleColCount())}_onfocusin(o){this.fireEvent("_focused",o)}static async onDefine(){h.i18nBundle=await V("@ui5/webcomponents")}};l([p({type:w,defaultValue:w.None})],n.prototype,"mode",void 0);l([p({type:Object,multiple:!0})],n.prototype,"_columnsInfo",void 0);l([p({defaultValue:"-1"})],n.prototype,"forcedTabIndex",void 0);l([p({type:Boolean})],n.prototype,"forcedBusy",void 0);l([p({defaultValue:"",noAttribute:!0})],n.prototype,"forcedAriaPosition",void 0);n=h=l([A({tag:"ui5-table-group-row",styles:W,renderer:$,template:z,dependencies:[B]}),O("_focused")],n);n.define();const X=n,J=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),a=F("ui5-table-group-row",[],[],[],[],()=>M(()=>Promise.resolve().then(()=>J),void 0,import.meta.url));a.displayName="TableGroupRow";try{a.displayName="TableGroupRow",a.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="TableGroupRow",a.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"TableGroupRow",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function v(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...C(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(G,{of:q}),`
`,e.jsx(N,{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(_,{of:T}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(S,{of:T}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Table"})," with ",e.jsx(o.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,e.jsx(_,{of:H}),`
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
`,e.jsx(D,{children:L}),`
`,e.jsx(o.h2,{id:"tablecolumn",children:"TableColumn"}),`
`,e.jsx(u,{of:g}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(o.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(u,{of:y}),`
`,e.jsx(d,{of:y}),`
`,e.jsx(o.h2,{id:"tablegrouprow",children:"TableGroupRow"}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(o.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(u,{of:x}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(R,{})]})}function Vo(t={}){const{wrapper:o}={...C(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(v,{...t})}):v(t)}export{Vo as default};
