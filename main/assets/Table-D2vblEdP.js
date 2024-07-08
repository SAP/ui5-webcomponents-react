import{j as o}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as b}from"./index-yodfxRVR.js";import{M as h,C as t,d as j,D as i,A as n}from"./index-BnKJrDrT.js";import"./index-Dr767vWE.js";import{C as f}from"./ControlsWithNote-CmDlbeKT.js";import{D as T}from"./DocsHeader-CqqzRRy3.js";import{F as w}from"./CommandsAndQueries-DI5XyRZa.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as m,a as l,b as p,c as a}from"./index-DgtP5QtP.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-De0-ArBv.js";import{T as x}from"./index-D297sppf.js";import"./iframe-DSY2u4nw.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-cOAgcv71.js";import"./main-CzLLrZqh.js";import"./index-8cofChYn.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-CLvSIE45.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-1PiQ4fof.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-D59b4eZt.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-DrLbuP9z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-F0yicvL_.js";import"./index-Zhn8S82z.js";import"./Label-q6_PzA5e.js";import"./index-Cwb37R1p.js";import"./index-DhSsqwHT.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-DeDIcOBk.js";import"./index-DooJVriu.js";import"./index-CJe2gumX.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./TabbableElements-BJJu_CDc.js";import"./BusyIndicator-Cvlx0ISj.js";import"./CheckBox-5dqs80VY.js";import"./ValueState-Bg0UWejw.js";import"./accept-Bh1zuBLx.js";import"./RadioButton-pij5LUus.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(e.h2,{id:"tableheadercell",children:"TableHeaderCell"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{of:l}),`
`,o.jsx(e.h2,{id:"tablerow",children:"TableRow"}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(n,{of:a}),`
`,o.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(e.h2,{id:"tableselection",children:"TableSelection"}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(w,{})]})}function ae(r={}){const{wrapper:e}={...b(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(c,{...r})}):c(r)}export{ae as default};
