import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import{ae as x,af as d,ag as h,ah as r,ai as m}from"./index-CMTanEbs.js";import"./index-BY3GWTH_.js";import"./index-CtVrCvEM.js";import{C as j}from"./ControlsWithNote-DO6QAytf.js";import{D as f}from"./DocsHeader-Bc1UrM6o.js";import{F as S}from"./CommandsAndQueries-x5CljleU.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-B1kZn19T.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{C as g,D as n,S as p,F as s,a}from"./ViewSettingsDialog.stories-NMJEL-X5.js";import{e}from"./utils-WrYKmBBb.js";import"./iframe-Bksmz00_.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-BI8vCDsY.js";import"./utils-D0srJWpX.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BIWfHXaq.js";import"./decline-iyYkY03H.js";import"./Icon-DlPyRvVh.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Co3fKK0V.js";import"./alert-CZQwJ3K-.js";import"./class-map-CxhdjMwf.js";import"./Button-CKJP0O-P.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D-rFLjnS.js";import"./TagDesign-Dou_yO3g.js";import"./index-BIFp705q.js";import"./Tag-BTK7fx1B.js";import"./sys-help-2-kZJAP_Ld.js";import"./index-bSr5Ece3.js";import"./Popover-DPDg_71u.js";import"./PopupsCommon.css-SPVvUYf3.js";import"./getEffectiveScrollbarStyle-D0XpELd9.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B--7Aoo7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BbnETz47.js";import"./BrowserScrollbar.css-D66iWUQm.js";import"./index-B0KcZA3m.js";import"./Link-Dcjrw7gC.js";import"./chunk-HLWAVYOI-CrV4L7UW.js";import"./client-BZNFO7bv.js";import"./copy-xOArzHwF.js";import"./copy-BN9qFed-.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-CjG8euSN.js";import"./I18nStore-V3KeBWWJ.js";import"./useStylesheet-DKtOrKyD.js";import"./index-DXbGRngL.js";import"./index-CcQmYgD0.js";import"./Label-DiR341eU.js";import"./index-LwfcJDto.js";import"./index-B4SaSvdi.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./index-BQWKa7gA.js";import"./BusyIndicator-BnoGb-co.js";import"./index-4u-IcZfU.js";import"./index-CscaDHiu.js";import"./Avatar-C_o4ynlU.js";import"./employee-83ogZf--.js";import"./Dialog-CquOHL68.js";import"./ValueState-Bg0UWejw.js";import"./List-D3H2m_yy.js";import"./ItemNavigation-Dq-tkqkz.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CW-Op2xu.js";import"./CheckBox-DD1kSSLj.js";import"./accept-DCgxdukd.js";import"./slim-arrow-right-B8WdzONY.js";import"./SegmentedButton-CQ7kmPjJ.js";import"./filter-DfWcHFuC.js";import"./nav-back-DxTwrE7V.js";import"./i18n-defaults-BCdZ8lmg.js";import"./parameters-bundle.css-D9P5Os1N.js";import"./main-BPTHlokf.js";function c(i){const o={code:"code",h2:"h2",p:"p",pre:"pre",...l(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:g}),`
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
