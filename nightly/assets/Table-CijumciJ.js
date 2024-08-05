import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as b}from"./index-D3szj05g.js";import{M as h,C as t,d as j,D as n,A as i}from"./index-BCwUKuDf.js";import"./index-CWAtM_vf.js";import{C as f}from"./ControlsWithNote-DJNjkM7t.js";import{D as T}from"./DocsHeader-BGG9vOsV.js";import{F as w}from"./CommandsAndQueries-CmoLGtPS.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{T as l,a as m,b as a,c as p}from"./index-CxrjGNAa.js";import{C as g,D as s,G as u,T as d}from"./Table.stories-BBmwzJSp.js";import{T as x}from"./index-CAsY-RwM.js";import"./iframe-Cm3NVW3s.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bw_l6Ewh.js";import"./utils-BHgxP_Sc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./Button-Bn9nox5u.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BuF9xM0k.js";import"./TagDesign-Dou_yO3g.js";import"./utils-WrzGLit1.js";import"./main-CzLLrZqh.js";import"./index-BFAGjbgR.js";import"./Tag-oXDdtvF6.js";import"./sys-help-2-BRv5pQ3O.js";import"./index-DRvHgYcf.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-a0Vr9me8.js";import"./Link-DaxkRKad.js";import"./chunk-HLWAVYOI-CrHIuwOW.js";import"./client-B23sEKGq.js";import"./copy-DLiPdfEP.js";import"./copy-D_DpjAH5.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-DUbI1L9X.js";import"./I18nStore-CqpKwI0j.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-Cor443dA.js";import"./index-B7uHNCaa.js";import"./Label-C8Y7h3Z-.js";import"./index-JdjGJ55w.js";import"./index-C-L8D2KX.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-Bo7HWUNO.js";import"./index-zWF3KD_t.js";import"./index-Br2nNxay.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./TabbableElements-BJJu_CDc.js";import"./BusyIndicator-Cb_VVcAx.js";import"./CheckBox-CXVjyirz.js";import"./ValueState-Bg0UWejw.js";import"./accept-vjFjO2tl.js";import"./RadioButton-B8Nc4uiK.js";function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:g}),`
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
`,o.jsx(n,{of:a}),`
`,o.jsx(i,{of:a}),`
`,o.jsx(e.h2,{id:"tablecell",children:"TableCell"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.h2,{id:"tablegrowing",children:"TableGrowing"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(e.h2,{id:"tableselection",children:"TableSelection"}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(i,{of:x}),`
`,o.jsx(w,{})]})}function re(r={}){const{wrapper:e}={...b(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(c,{...r})}):c(r)}export{re as default};
