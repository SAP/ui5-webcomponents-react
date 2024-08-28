import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-DmLT14xl.js";import"./index-BY3GWTH_.js";import"./index-E4vxyXwy.js";import{C as d}from"./ControlsWithNote-D7yH-oJP.js";import{D as x}from"./DocsHeader-Cj-24Um6.js";import{F as u}from"./CommandsAndQueries-Be9fbZCB.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-B1kZn19T.js";import{C as h,D as e}from"./ColorPalettePopover.stories-D2eGcvND.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CU09SeLw.js";import"./iframe-D1XqO1sz.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-BI8vCDsY.js";import"./utils-D0srJWpX.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BIWfHXaq.js";import"./decline-iyYkY03H.js";import"./Icon-DlPyRvVh.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Co3fKK0V.js";import"./alert-CZQwJ3K-.js";import"./class-map-CxhdjMwf.js";import"./Button-CKJP0O-P.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D-rFLjnS.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DiWcknC8.js";import"./main-BPTHlokf.js";import"./index-BIFp705q.js";import"./Tag-BTK7fx1B.js";import"./sys-help-2-kZJAP_Ld.js";import"./index-bSr5Ece3.js";import"./Popover-DPDg_71u.js";import"./PopupsCommon.css-SPVvUYf3.js";import"./getEffectiveScrollbarStyle-D0XpELd9.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B--7Aoo7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BbnETz47.js";import"./BrowserScrollbar.css-D66iWUQm.js";import"./index-B0KcZA3m.js";import"./Link-Dcjrw7gC.js";import"./chunk-HLWAVYOI-BLT38w0U.js";import"./client-BZNFO7bv.js";import"./copy-xOArzHwF.js";import"./copy-BN9qFed-.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-CmU84iFA.js";import"./I18nStore-V3KeBWWJ.js";import"./useStylesheet-DKtOrKyD.js";import"./index-DXbGRngL.js";import"./index-CcQmYgD0.js";import"./Label-DiR341eU.js";import"./index-LwfcJDto.js";import"./index-B4SaSvdi.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./index-BQWKa7gA.js";import"./BusyIndicator-BnoGb-co.js";import"./index-4u-IcZfU.js";import"./index-CscaDHiu.js";import"./Avatar-C_o4ynlU.js";import"./employee-83ogZf--.js";import"./ResponsivePopoverCommon.css-BJt3jLXg.js";import"./ResponsivePopover-DPyxoipx.js";import"./Dialog-CquOHL68.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Dq-tkqkz.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
`,o.jsx(x,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," and ",o.jsx(t.code,{children:"opener"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:f}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
