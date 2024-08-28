import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as n,af as e}from"./index-CqYDsjHI.js";import"./index-BY3GWTH_.js";import"./index-DihmgXah.js";import{C as s}from"./ControlsWithNote-CRqV3VOv.js";import{D as a}from"./DocsHeader-B2WLpkC1.js";import{F as c}from"./CommandsAndQueries-X13g8ulN.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-B1kZn19T.js";import{C as d,D as p}from"./Popover.stories-BdzKO6Et.js";import"./iframe-BCHUfodF.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-BI8vCDsY.js";import"./utils-D0srJWpX.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BIWfHXaq.js";import"./decline-iyYkY03H.js";import"./Icon-DlPyRvVh.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Co3fKK0V.js";import"./alert-CZQwJ3K-.js";import"./class-map-CxhdjMwf.js";import"./Button-CKJP0O-P.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D-rFLjnS.js";import"./TagDesign-Dou_yO3g.js";import"./utils-MywUnkMv.js";import"./main-BPTHlokf.js";import"./index-BIFp705q.js";import"./Tag-BTK7fx1B.js";import"./sys-help-2-kZJAP_Ld.js";import"./index-bSr5Ece3.js";import"./Popover-DPDg_71u.js";import"./PopupsCommon.css-SPVvUYf3.js";import"./getEffectiveScrollbarStyle-D0XpELd9.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B--7Aoo7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BbnETz47.js";import"./BrowserScrollbar.css-D66iWUQm.js";import"./index-B0KcZA3m.js";import"./Link-Dcjrw7gC.js";import"./chunk-HLWAVYOI-BXpQ934H.js";import"./client-BZNFO7bv.js";import"./copy-xOArzHwF.js";import"./copy-BN9qFed-.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-BAFWVqOr.js";import"./I18nStore-V3KeBWWJ.js";import"./useStylesheet-DKtOrKyD.js";import"./index-DXbGRngL.js";import"./index-CcQmYgD0.js";import"./Label-DiR341eU.js";import"./index-C9UgSQG9.js";import"./index-B4SaSvdi.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./index-BQWKa7gA.js";import"./BusyIndicator-BnoGb-co.js";import"./index-4u-IcZfU.js";import"./index-CscaDHiu.js";import"./Avatar-C_o4ynlU.js";import"./employee-83ogZf--.js";import"./settings-XBaWPTL6.js";import"./index-Cru-hoUb.js";import"./List-D3H2m_yy.js";import"./ItemNavigation-Dq-tkqkz.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CW-Op2xu.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DD1kSSLj.js";import"./accept-DCgxdukd.js";import"./slim-arrow-right-B8WdzONY.js";import"./index-CpfNU4IM.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function Vo(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Vo as default};
