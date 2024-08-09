import{j as t}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as l}from"./index-D3szj05g.js";import{M as x,C as d,d as h,D as r,A as m}from"./index--P03AD5X.js";import"./index-CxAkQ-Er.js";import{C as j}from"./ControlsWithNote-DCQjh2AU.js";import{D as f}from"./DocsHeader-CZhBYOsw.js";import{F as S}from"./CommandsAndQueries-DVkWNvqe.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as D,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-DWan8hrc.js";import{e}from"./utils-uZOR3WbA.js";import"./iframe-B1DxKb9w.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent--2-UXDGX.js";import"./utils-DLW1sA5D.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-d4QydjzH.js";import"./decline-D1QcXBrl.js";import"./Icon-uF1AIezb.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BflNsp1k.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DOrNCQ6l.js";import"./alert-RJboOX4N.js";import"./class-map-Oct9Grst.js";import"./Button-BSGOQMBD.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CY90T2oA.js";import"./TagDesign-Dou_yO3g.js";import"./index-DF5Vbbt3.js";import"./Tag-BGV0RLgG.js";import"./sys-help-2-Ceay95o3.js";import"./index-viyGTy6F.js";import"./Popover-CQErUPF9.js";import"./PopupsCommon.css-C72k6bm-.js";import"./getEffectiveScrollbarStyle-Br73qKwi.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-rKzABZ14.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-BuvIaMNd.js";import"./style-map-_S7pHwug.js";import"./BrowserScrollbar.css-BWLGETwt.js";import"./index-D5CWNA2_.js";import"./Link-Mzj3wSV5.js";import"./chunk-HLWAVYOI-jEDWWNb4.js";import"./client-B23sEKGq.js";import"./copy-C5fIvxWD.js";import"./copy-9e4iEp3h.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BHWkBf9r.js";import"./I18nStore-DDVmdcy1.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-BZUc_VeO.js";import"./index-BnAkacAy.js";import"./Label-BByfo__S.js";import"./index-DN82RYtU.js";import"./index-CsKhyL2z.js";import"./addCustomCSSWithScoping-BAXItpVh.js";import"./index-CEdIKZfe.js";import"./BusyIndicator-B3EKab9f.js";import"./index-KPOzo7bK.js";import"./index-D9MjL_nD.js";import"./Avatar-CILPVfd6.js";import"./employee-WB48gXgq.js";import"./Dialog-C6Kr1IQZ.js";import"./ValueState-Bg0UWejw.js";import"./List-DfSjWr-c.js";import"./ItemNavigation-Dx6wFulK.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-DsiM34Kk.js";import"./CheckBox-qWOJFJ7_.js";import"./accept-B87gopI6.js";import"./slim-arrow-right-C0FsT4zj.js";import"./SegmentedButton-CKmywTG6.js";import"./filter-DpnUazaO.js";import"./nav-back-DxrpFuzt.js";import"./i18n-defaults-BRKg6Xh3.js";import"./parameters-bundle.css-DUfIp--Q.js";import"./main-BPTHlokf.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:D}),`
`,t.jsx(f,{since:"0.20.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(d,{of:n}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(j,{of:n}),`
`,t.jsx(o.h2,{id:"opening-viewsettingsdialog",children:"Opening ViewSettingsDialog"}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ViewSettingsDialog"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ViewSettingsDialogComponent = () => {
  const [showVSD, setShowVSD] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setShowVSD(true);
        }}
      >
        Open ViewSettingsDialog
      </Button>
      <ViewSettingsDialog
        open={showVSD}
        onClose={() => {
          setShowVSD(false);
        }}
        sortItems={
          <>
            <SortItem text="Name" />
            <SortItem text="Position" />
            <SortItem text="Company" />
            <SortItem text="Department" />
          </>
        }
      />
    </>
  );
};
`})}),`
`,t.jsx(h,{children:u}),`
`,t.jsx(o.h2,{id:"sortitem",children:"SortItem"}),`
`,t.jsx(r,{of:p}),`
`,t.jsx(m,{exclude:e,of:p}),`
`,t.jsx(o.h2,{id:"filteritem",children:"FilterItem"}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(m,{exclude:e,of:s}),`
`,t.jsx(o.h2,{id:"filteritemoption",children:"FilterItemOption"}),`
`,t.jsx(r,{of:a}),`
`,t.jsx(m,{exclude:e,of:a}),`
`,t.jsx(S,{})]})}function so(i={}){const{wrapper:o}={...l(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(c,{...i})}):c(i)}export{so as default};
