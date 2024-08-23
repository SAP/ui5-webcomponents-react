import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as n,af as e}from"./index-BDpQswrF.js";import"./index-D-kNwQGo.js";import{C as s}from"./ControlsWithNote-B36LYH5w.js";import{D as a}from"./DocsHeader-CJRr3iqV.js";import{F as c}from"./CommandsAndQueries-Dn1LQBEa.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CE707q_n.js";import{C as d,D as p}from"./Popover.stories-CpBy5VaU.js";import"./iframe-BnnVgAaS.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-_WQ2NUTk.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cey6jF2F.js";import"./decline-BO1MJY4p.js";import"./Icon-F4CTdRe4.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-T18VK69N.js";import"./alert-Cstw3ukw.js";import"./class-map-BevVk84l.js";import"./Button-B2giC9cI.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-QZuI92fE.js";import"./TagDesign-Dou_yO3g.js";import"./utils-8MPsOdAE.js";import"./main-BPTHlokf.js";import"./index-BOsgv6ri.js";import"./Tag-CyMlqXkf.js";import"./sys-help-2-Dka1TfNv.js";import"./index-C1FkI9G8.js";import"./Popover-BSoFyw8J.js";import"./PopupsCommon.css-CgymFC1Z.js";import"./getEffectiveScrollbarStyle-D0HAoBVS.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CdXdU0-i.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BtPMqoOr.js";import"./BrowserScrollbar.css-DMtZWp5G.js";import"./index-DmY6wLrA.js";import"./Link-D7mI2b7i.js";import"./chunk-HLWAVYOI-CTUj0Wck.js";import"./client-BZNFO7bv.js";import"./copy-ITQxovDS.js";import"./copy-Dq9dQZCS.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-yNJmpRbB.js";import"./I18nStore-DtMIGu-N.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-CGtrISih.js";import"./index-B4c19w12.js";import"./Label-COQgloJF.js";import"./index-vVMuEgPM.js";import"./index-BbD_pEYf.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./index-B_blAssf.js";import"./BusyIndicator-C2GpyWwn.js";import"./index-BiiSfO0M.js";import"./index-BCI4iaiP.js";import"./Avatar-DDjIX45r.js";import"./employee-BW41J3Tc.js";import"./settings-BQd41bqr.js";import"./index-B4OExH1F.js";import"./List-CSFnPxXa.js";import"./ItemNavigation-CQqeVVOg.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B0Zfttmb.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DJ3qeSEk.js";import"./accept-Cz9082jw.js";import"./slim-arrow-right-D8Qeq0Vj.js";import"./index-3sRTRSAZ.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
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
`,o.jsx(c,{})]})}function Uo(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Uo as default};
