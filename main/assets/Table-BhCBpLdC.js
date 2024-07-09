import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as b}from"./index-yodfxRVR.js";import{M as h,C as t,d as j,D as n,A as i}from"./index-BY1QQgZb.js";import"./index-C_Z63DAS.js";import{C as f}from"./ControlsWithNote-D3KOMUNW.js";import{D as T}from"./DocsHeader-CEs0RetQ.js";import{F as w}from"./CommandsAndQueries-CXPNLxw-.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a as m,b as p,c as a}from"./index-z_5hZo2n.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-C5WutcjR.js";import{T as x}from"./index-CvaF6wwL.js";import"./iframe-CCdjJbb7.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./class-map-Cmqcr3Jy.js";import"./Button-B86xSW8p.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D_1KzAB5.js";import"./TagDesign-Dou_yO3g.js";import"./utils-VoVA-FUI.js";import"./main-CzLLrZqh.js";import"./index-lbBrIS5J.js";import"./Tag-Bcq38jV6.js";import"./sys-help-2-CpwrGADB.js";import"./index-EVApV1uw.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OgbCZidP.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-B7BjxTf3.js";import"./Link-D7pTqG-L.js";import"./chunk-HLWAVYOI-CVQ0litT.js";import"./client-CM2XqZNc.js";import"./copy-Bk4HvEED.js";import"./copy-D7XnXV4f.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-CleVCBXA.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-HszWWyLU.js";import"./index-CONv12fc.js";import"./Label-B8i_ob21.js";import"./index-DhzYehnQ.js";import"./index-BNJbAmHv.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-IayiN-mP.js";import"./index-DyvckQxz.js";import"./index-CfzFFulX.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./TabbableElements-BJJu_CDc.js";import"./BusyIndicator-BplFOaZ-.js";import"./CheckBox-DfOHjXcb.js";import"./ValueState-Bg0UWejw.js";import"./accept-V4-1HGXV.js";import"./RadioButton-CfMumUvo.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
`,o.jsx(T,{}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(t,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(f,{of:s}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"growing-table",children:"Growing Table"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Table"})," with ",o.jsx(e.code,{children:"growing={TableGrowingMode.Scroll}"}),"."]}),`
`,o.jsx(t,{of:u}),`
`,o.jsx(e.h3,{id:"code",children:"Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
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
        headerRow={
          <TableHeaderRow>
            <TableHeaderCell>
              <Label>Column 1</Label>
            </TableHeaderCell>
            <TableHeaderCell>
              <Label>Column 2</Label>
            </TableHeaderCell>
          </>
        }
      >
        {rows}
      </Table>
    </div>
  );
};
`})}),`
`,o.jsx(j,{children:C}),`
`,o.jsx(e.h2,{id:"tableheaderrow",children:"TableHeaderRow"}),`
`,o.jsx(n,{of:l}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(e.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,o.jsx(n,{of:a}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(e.h2,{id:"tableselection",children:"TableSelection"}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(w,{})]})}function ne(r={}){const{wrapper:e}={...b(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(c,{...r})}):c(r)}export{ne as default};
