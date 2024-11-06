import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as T}from"./index-CcnH5Kt0.js";import{ae as x,af as r,ag as h,ai as o,ah as a}from"./index-C5-MCLJ1.js";import"./index-D9yJfDXX.js";import"./index-pXuwHhBj.js";import{C}from"./ControlsWithNote-BCRBtNit.js";import{D as j}from"./DocsHeader-DxgMgTHj.js";import{F as w}from"./CommandsAndQueries-DfwJ3X-m.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-acGyIFev.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{T as t,a as i,b as s,c as p}from"./index-CRzAfTXw.js";import{C as u,D as m,G as g,W as H,T as d}from"./Table.stories-BxAAuz8Y.js";import{T as b}from"./index-kmGbwbA2.js";import"./iframe-Cxsgv4c_.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-v3aPz19k.js";import"./utils-BWMMwCMQ.js";import"./useIsomorphicLayoutEffect-yry-y2Q-.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-m373cvJP.js";import"./Icon-Bq3V4Dpj.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-BZEj3R5z.js";import"./alert-C_n2K4SQ.js";import"./class-map-CH6JYcvP.js";import"./Button-BOw4gYNT.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BxgbG8pQ.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DS5ZQ2Ue.js";import"./main-Dcm2jhNK.js";import"./index-le1LDJU4.js";import"./Tag-C2md_B1U.js";import"./sys-help-2-SBEgXGVK.js";import"./index-ziIcWBHz.js";import"./Popover-DNjdezPs.js";import"./PopupsCommon.css-WLQXQ1BG.js";import"./FocusableElements-CvTAVvdZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-40ebLclU.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D4Rgk784.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CUAyzcJr.js";import"./Link-CaNG8aKk.js";import"./chunk-NUUEMKO5-CDfHzcVy.js";import"./client-BzooOYO_.js";import"./copy-D2YPqkc4.js";import"./copy-C9H6Zlih.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-B8nEljlM.js";import"./I18nStore-C5VicRCB.js";import"./useStylesheet-BXpvj2j9.js";import"./index-DmoPyW9s.js";import"./index-D5soTVf3.js";import"./Label-DdUk4dNr.js";import"./index-DYGApiRr.js";import"./index-D4YMe6TQ.js";import"./addCustomCSSWithScoping-BWTAHsoK.js";import"./index-X9t538J9.js";import"./BusyIndicator-FUNbKGLu.js";import"./index-CkXQ_HSf.js";import"./index-BRIQar7A.js";import"./Avatar-cCdUUE_c.js";import"./employee-CICz8oty.js";import"./TabbableElements-BJJu_CDc.js";import"./CheckBox-DKa-BKsy.js";import"./ValueState-Bg0UWejw.js";import"./accept-BLyty2Fr.js";import"./RadioButton-VoJW4GtG.js";import"./index-Ckzar3DM.js";import"./SegmentedButton-BN5fs2AS.js";import"./ItemNavigation-Cpw3mMvK.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...T(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:u}),`
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
`,e.jsx(w,{})]})}function rn(l={}){const{wrapper:n}={...T(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{rn as default};
