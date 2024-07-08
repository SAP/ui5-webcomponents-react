import{j as o}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import{useMDXComponents as m}from"./index-44b7z5bc.js";import{M as n,C as s,d as a,D as l,A as c}from"./index-DRz2hk48.js";import"./index-Bk8Ithva.js";import{C as d}from"./ControlsWithNote-0Js9UrFs.js";import{D as h}from"./DocsHeader-C3yXmZBk.js";import{F as x}from"./CommandsAndQueries-DfO_EoOU.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as j,D as e}from"./ColorPalettePopover.stories-CP3gk2n-.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{C as i}from"./index-DT4aXHYG.js";import"./iframe-0howv_Dp.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-Cjk_cKug.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./withWebComponent-ZLYt6Z72.js";import"./utils-Cjkb-4uz.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DTd686OT.js";import"./decline-CnfxIuyS.js";import"./Icons-bHVDH2o-.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Ds_NTOym.js";import"./alert-5g0GnjXW.js";import"./class-map-Dho2ozJ6.js";import"./if-defined-9iVrMyiP.js";import"./Icon-CzTkrOrA.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BzvkKBmq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BPJU920w.js";import"./TagDesign-Dou_yO3g.js";import"./utils-mmfDDMog.js";import"./main-CzLLrZqh.js";import"./index-upWdXizJ.js";import"./Tag-By3S0wie.js";import"./sys-help-2-cOG0Ftyw.js";import"./index-D3UTY3No.js";import"./Popover-5eNGP7Bf.js";import"./PopupsCommon.css-C9rG7FRw.js";import"./FocusableElements-Dst-wEMC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BX_Vwu-f.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-ZLasDAym.js";import"./BrowserScrollbar.css-DPWlQluy.js";import"./index-vgsGM25s.js";import"./Link-CoCG3JZh.js";import"./chunk-HLWAVYOI-Coc2dbv7.js";import"./client-BEgA9EFc.js";import"./copy-yNkJ0G6Z.js";import"./copy-_3t6R87k.js";import"./index-ldWqkrC3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CBVvS9lW.js";import"./index-BgM2iT7f.js";import"./I18nStore-DimJQVWm.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-CzYm6OCq.js";import"./TableOfContent-7Ygrv8G1.js";import"./index-BDFEWlxK.js";import"./Label-BCs7fK18.js";import"./index-B4H3qawp.js";import"./index-DfcSCthV.js";import"./addCustomCSSWithScoping-B_dl8XEe.js";import"./index-DW2xgIbK.js";import"./index-D8ggj6z5.js";import"./index-BUDWBPQn.js";import"./Avatar-DoGtfKYI.js";import"./employee-BgURwoFi.js";import"./ResponsivePopoverCommon.css-y0GVv1kE.js";import"./Title-Bz4joLDe.js";import"./ResponsivePopover-B-qfblCL.js";import"./Dialog-BTsH2gu5.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-CcEpcKAk.js";function p(r){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:j}),`
`,o.jsx(h,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o.jsx(t.code,{children:"ref"})," to the component and then call the corresponding ",o.jsx(t.strong,{children:o.jsx(t.code,{children:"showAt"})})," method. The method receives the target element - ",o.jsxs(t.em,{children:["on which the ",o.jsx(t.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:C}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:i}),`
`,o.jsx(c,{of:i}),`
`,o.jsx(x,{})]})}function rt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{rt as default};
