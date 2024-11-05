import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ai as l,ah as c}from"./index-Dg_TArKg.js";import"./index-D9yJfDXX.js";import"./index-DYh7uqV0.js";import{C as d}from"./ControlsWithNote-CFL78-G8.js";import{D as x}from"./DocsHeader-gJmK5s2S.js";import{F as u}from"./CommandsAndQueries-CxqeIHXW.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-acGyIFev.js";import{C as h,D as e}from"./ColorPalettePopover.stories-I8kmGlaD.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-o5nUc-y0.js";import"./iframe-BGDH2nnz.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-v3aPz19k.js";import"./utils-BWMMwCMQ.js";import"./useIsomorphicLayoutEffect-yry-y2Q-.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-m373cvJP.js";import"./Icon-Bq3V4Dpj.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-BZEj3R5z.js";import"./alert-C_n2K4SQ.js";import"./class-map-CH6JYcvP.js";import"./Button-BOw4gYNT.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BxgbG8pQ.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DgXKWIZ-.js";import"./main-Dcm2jhNK.js";import"./index-le1LDJU4.js";import"./Tag-C2md_B1U.js";import"./sys-help-2-SBEgXGVK.js";import"./index-ziIcWBHz.js";import"./Popover-DNjdezPs.js";import"./PopupsCommon.css-WLQXQ1BG.js";import"./FocusableElements-CvTAVvdZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-40ebLclU.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D4Rgk784.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CUAyzcJr.js";import"./Link-CaNG8aKk.js";import"./chunk-NUUEMKO5-C2-QihUA.js";import"./client-BzooOYO_.js";import"./copy-D2YPqkc4.js";import"./copy-C9H6Zlih.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-CVpoKabZ.js";import"./I18nStore-C5VicRCB.js";import"./useStylesheet-BXpvj2j9.js";import"./index-CnUO44UM.js";import"./index-D5soTVf3.js";import"./Label-DdUk4dNr.js";import"./index-het569gt.js";import"./index-jVoXpPWr.js";import"./addCustomCSSWithScoping-BWTAHsoK.js";import"./index-X9t538J9.js";import"./BusyIndicator-FUNbKGLu.js";import"./index-CkXQ_HSf.js";import"./index-BRIQar7A.js";import"./Avatar-cCdUUE_c.js";import"./employee-CICz8oty.js";import"./ResponsivePopoverCommon.css-D-A5aToF.js";import"./ResponsivePopover-DHTYZaBG.js";import"./Dialog-Bw4_TdOz.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Cpw3mMvK.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Qo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Qo as default};
