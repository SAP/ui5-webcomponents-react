import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as T}from"./index-CcnH5Kt0.js";import{ae as x,af as r,ag as h,ai as o,ah as a}from"./index-CM_PJCgo.js";import"./index-BBbw6PDx.js";import"./index-B5TrSa_s.js";import{C}from"./ControlsWithNote-AQduKH9C.js";import{D as j}from"./DocsHeader-B9T8Bfni.js";import{F as w}from"./CommandsAndQueries-CY9aDcpz.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{T as t,a as i,b as s,c as p}from"./index-ChK28c-t.js";import{C as u,D as m,G as g,W as H,T as d}from"./Table.stories-CjwTVzCp.js";import{T as b}from"./index-Cugp4bH6.js";import"./iframe-DNrSGgQ5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-m_Fq5lNf.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./Button-CN-iJYg4.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DpR-C64f.js";import"./main-r7D-Vqmb.js";import"./index-CU0BOneF.js";import"./Tag-DfB_qukv.js";import"./sys-help-2-TCPa0dFt.js";import"./index-DRQZYbIB.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Ci7P8uUK.js";import"./Link-BieF31O5.js";import"./chunk-NUUEMKO5-DPIcnx4u.js";import"./client-BzooOYO_.js";import"./copy-Bps3bwPx.js";import"./copy-9aGvoyGQ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-DvgcAHKa.js";import"./I18nStore-C2pCP-g5.js";import"./useStylesheet-DPBS0l4j.js";import"./index-O71mrAzx.js";import"./index-CHC2M3KR.js";import"./Label-9bI6U8uT.js";import"./index-DaJvuRnK.js";import"./index-Nq8WqOTU.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BHJpfsCV.js";import"./BusyIndicator-DyFdFCo7.js";import"./index-PL__NMMH.js";import"./index-CnaX4kM6.js";import"./Avatar-ClyMV4d2.js";import"./employee-q-Be_VIK.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-BnlECbaq.js";import"./ValueState-Bg0UWejw.js";import"./accept-xt9cvT2l.js";import"./RadioButton-DWjfFT92.js";import"./index-BPSOXVNI.js";import"./SegmentedButton-CUOk9z2p.js";import"./ItemNavigation-Ch4M95JE.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...T(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:u}),`
`,e.jsx(j,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(C,{of:m}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"growing-table",children:"Growing Table"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"})," with growing feature (",e.jsx(n.code,{children:"<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />"}),"):"]}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const createRows = (indexOffset) => {
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
`,e.jsx(n.h2,{id:"table-with-row-selection",children:"Table with row selection"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"})," with selection feature (",e.jsx(n.code,{children:'<TableSelection mode="Multiple" />'}),"):"]}),`
`,e.jsx(r,{of:H}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function TableWithRowSelection() {
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
`,e.jsx(h,{children:f}),`
`,e.jsx(n.h2,{id:"tableheaderrow",children:"TableHeaderRow"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.h2,{id:"tablerow",children:"TableRow"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(n.h2,{id:"tablecell",children:"TableCell"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h2,{id:"tableselection",children:"TableSelection"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(w,{})]})}function tn(l={}){const{wrapper:n}={...T(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{tn as default};
