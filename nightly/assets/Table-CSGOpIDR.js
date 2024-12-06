import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as T}from"./index-DyCphG7h.js";import{ae as x,af as r,ag as h,ai as o,ah as a}from"./index-DJJuuTjh.js";import"./index-CGMQ867X.js";import"./index-4AWnfe5G.js";import{C}from"./ControlsWithNote-Dg9OPtkt.js";import{D as j}from"./DocsHeader-CynLgDDH.js";import{F as w}from"./CommandsAndQueries-scaoTnNC.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{T as t,a as i,b as s,c as p}from"./index-DYU1XPrR.js";import{C as u,D as m,G as g,W as H,T as d}from"./Table.stories-BQqsmhRq.js";import{T as b}from"./index-CIcoGeaz.js";import"./iframe-BUDYU4Yz.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-D2290JWW.js";import"./utils-rQ0RHFcC.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./Button-B25Pr19o.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Dv4NFHG1.js";import"./main-BwlHOnYP.js";import"./index-BxMxvzK4.js";import"./Tag-Db0_Pjzi.js";import"./sys-help-2-CxYMJcq0.js";import"./index-x-kKtoec.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./chunk-NUUEMKO5-D2uxkT9c.js";import"./client-CqEfiX9M.js";import"./copy-B6jpU8Sl.js";import"./copy-ClT0iCqi.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-BJDgZ3Bh.js";import"./I18nStore-D-72hezK.js";import"./useStylesheet-DzoyRzuT.js";import"./index-gSd2kvlA.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-DczEHKsk.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-ByfP8321.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-DyUotHW-.js";import"./ValueState-Bg0UWejw.js";import"./accept-dLMNjkw8.js";import"./RadioButton-C2mR3o4F.js";import"./index--NBym92h.js";import"./SegmentedButton-GUgpkWw6.js";import"./ItemNavigation-BFACp1PV.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...T(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:u}),`
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
`,e.jsx(w,{})]})}function rn(l={}){const{wrapper:n}={...T(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{rn as default};
