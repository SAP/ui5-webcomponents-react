import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as b}from"./index-CcnH5Kt0.js";import{ae as h,af as t,ag as j,ai as n,ah as i}from"./index-Cenuqqrr.js";import"./index-CoHyeD13.js";import"./index-DMLrnUi8.js";import{C as f}from"./ControlsWithNote-h3H01Fxs.js";import{D as T}from"./DocsHeader-C4bS3SGM.js";import{F as w}from"./CommandsAndQueries-nDu7XMLL.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-P9BL2JTj.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a,b as m,c as p}from"./index-xXtoRQZ8.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-BxhqS2M1.js";import{T as x}from"./index-DubrHkRk.js";import"./iframe-BPfEen1d.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CatvTRGM.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-CfTJOSOX.js";import"./Icon-DpVcsMQ1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DOBme6g4.js";import"./alert-Cst6Jx1-.js";import"./class-map-BxE82PvF.js";import"./Button-DaJIiUzx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CHzLKGx6.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-IzbItKb-.js";import"./main-r7D-Vqmb.js";import"./index-BqxRpBZn.js";import"./Tag-Ba6Qizx6.js";import"./sys-help-2-B637x_Rq.js";import"./index-CJgdXAoE.js";import"./Popover-DC8nUXyl.js";import"./PopupsCommon.css-P4EDdSo7.js";import"./FocusableElements-B84gg-qr.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CHwfBtCV.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D18U2KXK.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-KUKKq0uQ.js";import"./Link-tpPG7lbT.js";import"./chunk-NUUEMKO5-CpJ4TpxZ.js";import"./client-BzooOYO_.js";import"./copy-B31_7TOX.js";import"./copy-pDjV9mbZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-BfO0kMVR.js";import"./I18nStore-CUp48qoB.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BhAgbKd_.js";import"./Label-B0tmzzu4.js";import"./index-r42d8n5r.js";import"./index-Df2RbfHi.js";import"./addCustomCSSWithScoping-CKBWDV-T.js";import"./index-Dj0P-9ga.js";import"./BusyIndicator-DOcNJFJt.js";import"./index-xDb7bEld.js";import"./index-DtEO3OH4.js";import"./Avatar-C4XDdmGY.js";import"./employee-DdBiHLUk.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-DMm2l2EU.js";import"./ValueState-Bg0UWejw.js";import"./accept-FUlt0iqq.js";import"./RadioButton-BQ7ELbTZ.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
`,o.jsx(n,{of:a}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(e.h2,{id:"tableselection",children:"TableSelection"}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(w,{})]})}function ne(r={}){const{wrapper:e}={...b(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(c,{...r})}):c(r)}export{ne as default};
