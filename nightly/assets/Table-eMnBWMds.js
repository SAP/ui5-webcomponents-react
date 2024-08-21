import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as b}from"./index-CcnH5Kt0.js";import{ae as h,af as t,ag as j,ah as n,ai as i}from"./index-pii9qXca.js";import"./index-HLRYYcmq.js";import{C as f}from"./ControlsWithNote-BIoxRw0s.js";import{D as T}from"./DocsHeader-ET9l3YzX.js";import{F as w}from"./CommandsAndQueries-BOY9YJp_.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DAmTHV6H.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a,b as m,c as p}from"./index-CnFhLEjv.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-wXBIri_W.js";import{T as x}from"./index-WqDfD41p.js";import"./iframe-BGNhdigB.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-C2_AfQVD.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cxw-KB99.js";import"./decline-3k_K2cqJ.js";import"./Icon-nbkyxQyS.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-BAyVX-75.js";import"./alert-D2A6vIfJ.js";import"./class-map-DkiTMG92.js";import"./Button-CnsO6gkG.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-mDgxhJ6N.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BwXYWp--.js";import"./main-BPTHlokf.js";import"./index-dX-ZV-td.js";import"./Tag-Do40S3QV.js";import"./sys-help-2-uDSJGuKN.js";import"./index-BNMO-hWF.js";import"./Popover-TU8_F6L9.js";import"./PopupsCommon.css-DXc2NW_3.js";import"./getEffectiveScrollbarStyle-bHZmu9jA.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CBt6Bnha.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-vO3z8-sf.js";import"./BrowserScrollbar.css-XToAwk-G.js";import"./index-EFxKl2Vd.js";import"./Link-COnH4Nhl.js";import"./chunk-HLWAVYOI-TS-PYtkE.js";import"./client-BZNFO7bv.js";import"./copy-DeaTwX5B.js";import"./copy-BtzzsDJe.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-C1C4YxCs.js";import"./I18nStore-D2HJaIMp.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DeTJ_hrm.js";import"./Label-DfCllKqR.js";import"./index-8kgK4RvL.js";import"./index-B8Mr0oby.js";import"./addCustomCSSWithScoping-Dwz0mgGv.js";import"./index-pQSR4aha.js";import"./BusyIndicator-Bgnc8Kc_.js";import"./index-CcT8O75w.js";import"./index-DgYOmyYl.js";import"./Avatar-DHfKIRqg.js";import"./employee-BmxHk7Xq.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-BuQrjOFQ.js";import"./ValueState-Bg0UWejw.js";import"./accept-CcYafxu-.js";import"./RadioButton-BXypQwgl.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
`,o.jsx(w,{})]})}function ie(r={}){const{wrapper:e}={...b(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(c,{...r})}):c(r)}export{ie as default};
