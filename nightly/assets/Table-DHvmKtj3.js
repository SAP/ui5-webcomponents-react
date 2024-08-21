import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as b}from"./index-CcnH5Kt0.js";import{ae as h,af as t,ag as j,ah as n,ai as i}from"./index-DnJahra3.js";import"./index-D1tAZfwD.js";import{C as f}from"./ControlsWithNote-BTALbjub.js";import{D as T}from"./DocsHeader-67quuaR7.js";import{F as w}from"./CommandsAndQueries-DLlJazL4.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CPfyDR0N.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a,b as m,c as p}from"./index-DewKPW22.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-CbQc52ET.js";import{T as x}from"./index-GvKumPob.js";import"./iframe-De-aRSOT.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BleJzMHW.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-KW-CiiAm.js";import"./decline-DaNSpODU.js";import"./Icon-cdsHodQj.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Bqpi1ZNd.js";import"./alert-Dp7xx3y-.js";import"./class-map-YSvXIJay.js";import"./Button-CzQBqyV3.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BcJ5FyXk.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Cc8noGdy.js";import"./main-BPTHlokf.js";import"./index-tTEL8J8N.js";import"./Tag-slJw32D6.js";import"./sys-help-2-CqKkuKIb.js";import"./index-BSR3rKnL.js";import"./Popover-Ct8sSLXj.js";import"./PopupsCommon.css-CsQvfR_e.js";import"./getEffectiveScrollbarStyle-rfURrg3V.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BHDEwerY.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-d6w1xEQV.js";import"./BrowserScrollbar.css-BhKYIigu.js";import"./index-Bulu4vm2.js";import"./Link-CBIZg36-.js";import"./chunk-HLWAVYOI-KXOmV4ED.js";import"./client-BZNFO7bv.js";import"./copy-DUwpd8zK.js";import"./copy-DTSjPlEM.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-BOF0KrAg.js";import"./I18nStore-CNuzcpPo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-jRYWOI_u.js";import"./Label-T0qa9MPE.js";import"./index-yd-Bj4Bt.js";import"./index-D8Fw-FFv.js";import"./addCustomCSSWithScoping-_XdCpGk6.js";import"./index-C6qmGTC-.js";import"./BusyIndicator-BjQNe4BH.js";import"./index-DgNNNqup.js";import"./index-dPI0dF3w.js";import"./Avatar-DNQIjfCz.js";import"./employee-DbTd0Cfn.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-DSuGDY5o.js";import"./ValueState-Bg0UWejw.js";import"./accept-BjlRm88B.js";import"./RadioButton-Bx3_PcLn.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
