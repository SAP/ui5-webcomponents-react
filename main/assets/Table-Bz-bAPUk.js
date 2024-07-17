import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as b}from"./index-yodfxRVR.js";import{M as h,C as t,d as j,D as n,A as i}from"./index-Y5VxAS3S.js";import"./index-aQwIiR5Z.js";import{C as f}from"./ControlsWithNote-BxnkoGVP.js";import{D as T}from"./DocsHeader-CwDRM3id.js";import{F as w}from"./CommandsAndQueries-CEf_D4ya.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a as m,b as p,c as a}from"./index-DDcdCDqO.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-BFb1ztEF.js";import{T as x}from"./index-_xgc2xKZ.js";import"./iframe-BOu3yP2Y.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-DykTwaBJ.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./Button-gEiq340s.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CoD1CATN.js";import"./main-CzLLrZqh.js";import"./index-T4XEsvqY.js";import"./Tag-BkeKwJ-5.js";import"./sys-help-2-CnqpxX4c.js";import"./index-C9xpAguF.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-BxS2vjrN.js";import"./Link-DvVq2Sbg.js";import"./chunk-HLWAVYOI-CrpvqDZd.js";import"./client-CM2XqZNc.js";import"./copy-CR8fi4tI.js";import"./copy-CIslHIHM.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-CwTVs87I.js";import"./index-Dgat7Olu.js";import"./Label-Cn8Z-EZA.js";import"./index-DyYZ-o4p.js";import"./index-D7y2Aji5.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-CMllSHCy.js";import"./index-YqnEZtoW.js";import"./index-D7thIdPF.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./TabbableElements-BJJu_CDc.js";import"./BusyIndicator-Cc-m-tN-.js";import"./CheckBox-0-u6R5RF.js";import"./ValueState-Bg0UWejw.js";import"./accept-068edCLR.js";import"./RadioButton-fVFozh54.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
