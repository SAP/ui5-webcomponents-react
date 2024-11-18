import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as T}from"./index-DyCphG7h.js";import{ae as x,af as r,ag as h,ai as o,ah as a}from"./index-BrAFqeZR.js";import"./index-CCF_Nqfq.js";import"./index-CjA6MgKv.js";import{C}from"./ControlsWithNote-CRbjS3Cq.js";import{D as j}from"./DocsHeader-BEIc4QGi.js";import{F as w}from"./CommandsAndQueries-DzD_V9E9.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{T as t,a as i,b as s,c as p}from"./index-CgQH9b1U.js";import{C as u,D as m,G as g,W as H,T as d}from"./Table.stories-DEqZy8gq.js";import{T as b}from"./index-CFpROUjq.js";import"./iframe-Bjn9L1T8.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BicCUtSb.js";import"./main-Dcm2jhNK.js";import"./index-5MeDKPL8.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-DU6jDF7S.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-ARMOpZ_f.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-BmIXdVIa.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-KbA9y-Oj.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-c-ui4WSs.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-BwHAVSFf.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-CAmAWMmr.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-C-QwVRXb.js";import"./ValueState-Bg0UWejw.js";import"./accept-PVFuYmDa.js";import"./RadioButton-B90yF_Xf.js";import"./index-mgz5ORT3.js";import"./SegmentedButton-B3KHcSjK.js";import"./ItemNavigation-Dk_Ce4oG.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...T(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:u}),`
`,e.jsx(j,{experimental:!0}),`
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
`,e.jsx(w,{})]})}function an(l={}){const{wrapper:n}={...T(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{an as default};
