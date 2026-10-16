import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{X as t,Y as n}from"./CustomElementsScopeUtils-G6VaTXHT.js";import{a as r,c as i,d as a,f as o,l as s,m as ee,n as te,o as ne,p as re,r as c,s as ie,u as l}from"./jsx-runtime-NHZLEOw0.js";import{n as ae,t as u}from"./withWebComponent-DDACWNN1.js";import{t as oe}from"./jsx-runtime-BdxMnOeJ.js";import{n as se,t as ce}from"./event-strict-C4u0wMzB.js";import{n as le,t as d}from"./i18n-BNTZIxbt.js";import{n as f,t as p}from"./Text-BQQeY0Nc.js";import{n as ue,t as de}from"./MessageStrip-CfLGPDZy.js";import{b as fe,v as pe,y as m}from"./iframe-D9SBD4Ks.js";import{i as h,r as me}from"./react-BOKIvUzN.js";import{_ as he,d as ge,n as g,o as _,r as v,u as y}from"./blocks-DXeKFkas.js";import{b,f as x,t as S,u as C}from"./components-B-xCMNi4.js";import{n as w,t as T}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as E,c as D,d as O,f as k,g as A,h as j,i as M,l as N,m as P,n as F,o as I,p as L,r as R,s as _e,t as z,u as ve}from"./Table.stories-Bydexu_G.js";function ye(){return c(`tr`,{part:`group-row`,class:`ui5-table-group-row-root`,"aria-label":this.ariaLabelText,tabindex:this.forcedTabIndex?parseInt(this.forcedTabIndex):void 0,onFocusIn:this._onfocusin,children:c(`td`,{colspan:this.colSpan,children:c(`slot`,{})})})}function B(){return(B=e((()=>{te()})))()}var V;function H(){return(H=e((()=>{t(),r(),j(),n(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>ne),n(`@ui5/webcomponents-compat`,`sap_horizon`,async()=>A,`host`),V=`:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--ui5_table_focus_outline_offset))}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
`})))()}var U,W,G;function K(){return(K=e((()=>{ee(),a(),s(),ce(),le(),ie(),B(),D(),P(),H(),m(),U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=W=class extends re{constructor(){super(...arguments),this.mode=`None`,this.forcedBusy=!1,this.selected=!1,this.tabbableElements=[],this._columnsInfoString=``}get colSpan(){return this._colSpan}get ariaLabelText(){return`${W.i18nBundle.getText(L)} ${this.textContent}. ${this.forcedAriaPosition}`}visibleColCount(){let e=this._columnsInfo?.reduce((e,t)=>t.visible?++e:e,0)||0;return this.mode===_e.MultiSelect&&e++,e}onBeforeRendering(){this._columnsInfo&&this._columnsInfo.length!==0&&(this._colSpan=this.visibleColCount())}_onfocusin(e){this.fireDecoratorEvent(`_focused`,e)}},U([l()],G.prototype,`mode`,void 0),U([l({type:Array,noAttribute:!0})],G.prototype,`_columnsInfo`,void 0),U([l()],G.prototype,`forcedTabIndex`,void 0),U([l({type:Boolean})],G.prototype,`forcedBusy`,void 0),U([l()],G.prototype,`forcedAriaPosition`,void 0),U([d(`@ui5/webcomponents`)],G,`i18nBundle`,void 0),G=W=U([o({tag:`ui5-table-group-row`,styles:V,renderer:i,template:ye}),se(`_focused`,{bubbles:!0})],G),fe(G),G.define()})))()}var q,J,Y;function X(){return(X=e((()=>{K(),m(),u(),q=pe(),J=q?`-${q}`:``,Y=ae(`ui5-table-group-row${J}`,[],[],[],[]),Y.displayName=`TableGroupRow`;try{Y.displayName=`TableGroupRow`,Y.__docgenInfo={description:"The `TableGroupRow` component represents a group row in the `Table`.\n\n__Note:__ This is a UI5 Web Component! [TableGroupRow UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/compat/TableGroupRow) | [Repository](https://github.com/UI5/webcomponents)",displayName:`TableGroupRow`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/compat/dist/components/TableGroupRow/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/compat/dist/components/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`}],description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/compat/dist/components/TableGroupRow/index.d.ts`,name:`TableGroupRowPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-compat__.`,deprecated:"Deprecated as of version 2.12.0, use `@ui5/webcomponents/dist/Table.js` instead."}}}catch{}})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...h(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(ge,{of:R}),`
`,(0,Q.jsx)(x,{of:R}),`
`,(0,Q.jsx)(de,{children:(0,Q.jsxs)(p,{children:[`Using the Table from the `,(0,Q.jsx)(t.code,{children:`compat`}),` package and the `,(0,Q.jsx)(t.code,{children:`main`}),` package in the same application is not supported without scoping the compat package.`]}),design:`Critical`,hideCloseButton:!0}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,Q.jsx)(v,{of:z}),`
`,(0,Q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(b,{of:z}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,Q.jsx)(`br`,{}),`
`,(0,Q.jsx)(t.h2,{id:`growing-table`,children:`Growing Table`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`Table`}),` with `,(0,Q.jsx)(t.code,{children:`growing={TableGrowingMode.Scroll}`}),`.`]}),`
`,(0,Q.jsx)(v,{of:F}),`
`,(0,Q.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-jsx`,children:`const createRows = (indexOffset) => {
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
`,(0,Q.jsx)(y,{children:T}),`
`,(0,Q.jsx)(t.h2,{id:`tablecolumn`,children:`TableColumn`}),`
`,(0,Q.jsx)(_,{of:N}),`
`,(0,Q.jsx)(g,{of:N}),`
`,(0,Q.jsx)(t.h2,{id:`tablerow`,children:`TableRow`}),`
`,(0,Q.jsx)(_,{of:E}),`
`,(0,Q.jsx)(g,{of:E}),`
`,(0,Q.jsx)(t.h2,{id:`tablegrouprow`,children:`TableGroupRow`}),`
`,(0,Q.jsx)(_,{of:Y}),`
`,(0,Q.jsx)(g,{of:Y}),`
`,(0,Q.jsx)(t.h2,{id:`tablecell`,children:`TableCell`}),`
`,(0,Q.jsx)(_,{of:O}),`
`,(0,Q.jsx)(g,{of:O}),`
`,(0,Q.jsx)(C,{})]})}function be(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=oe(),me(),S(),w(),he(),ue(),f(),k(),ve(),X(),I(),M()})))()}$();export{be as default};