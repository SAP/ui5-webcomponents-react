import{j as o}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{useMDXComponents as m}from"./index-yodfxRVR.js";import{M as n,C as s,d as a,D as l,A as c}from"./index-Bpor0K_0.js";import"./index-DblKAc4L.js";import{C as d}from"./ControlsWithNote-Df202kjl.js";import{D as h}from"./DocsHeader-CgOzGYFo.js";import{F as x}from"./CommandsAndQueries-Cg-DW8DH.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as j,D as e}from"./ColorPalettePopover.stories-D0CrEscU.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{C as i}from"./index-CF4AZ_jA.js";import"./iframe-B3pUS0mh.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./withWebComponent-BS5KmJ8y.js";import"./utils-BKwn1mod.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BnWtnlV0.js";import"./decline-U1USmITW.js";import"./Icons-CXhWYR-U.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Tp9XErmR.js";import"./alert-CzwHodYh.js";import"./class-map-C2xEFFE_.js";import"./if-defined-fOOg8zCW.js";import"./Icon-B_ypp_jl.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BNnZDQ19.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CTWfTbaq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-tdQCe1vH.js";import"./main-CzLLrZqh.js";import"./index-bbA8GIsK.js";import"./Tag-CEZ3zqRQ.js";import"./sys-help-2-BHmG1jpg.js";import"./index-DMCRle88.js";import"./Popover-qZ8usbia.js";import"./PopupsCommon.css-Dy04e_xP.js";import"./FocusableElements-Bv7oiNdI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DrydYuxf.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BYlmazPT.js";import"./BrowserScrollbar.css-BHkuoGam.js";import"./index-CbYK_5zE.js";import"./Link-qJoZgSbT.js";import"./chunk-HLWAVYOI-XxeoQ6e6.js";import"./client-CM2XqZNc.js";import"./copy-BAvEiGLT.js";import"./copy-SEOB1pIL.js";import"./index-D_71pQdE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CLr2-W5J.js";import"./index-DxXMIf9X.js";import"./I18nStore-CUUv0VZ2.js";import"./ModalsContext-BoMRhsMb.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-D3Wkw5er.js";import"./TableOfContent-fryvc0bK.js";import"./index-B-l3c3FZ.js";import"./Label-q6_PzA5e.js";import"./index-v9WNqaFi.js";import"./index-BCesEbyn.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./index-xw--V4nB.js";import"./index-Y1pWCxGk.js";import"./index-DJcy_K62.js";import"./Avatar-3swUBYi8.js";import"./employee-BYHCCK7_.js";import"./ResponsivePopoverCommon.css-CFhxTWp0.js";import"./Title-B_zpGxqG.js";import"./ResponsivePopover-CLhNpBnN.js";import"./Dialog-D9IwuRsq.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-B3IUttqO.js";function p(r){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:j}),`
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
