import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-B7tNCeqj.js";import{ae as m,af as s,ah as a,aj as l,ai as c}from"./index-gbm_PpJj.js";import"./index-B0ifNMuI.js";import"./index-D1Su9tdA.js";import{C as d}from"./ControlsWithNote-bCDmWE4f.js";import{D as x}from"./DocsHeader-BCU2gKYC.js";import{F as u}from"./CommandsAndQueries-BZOd3hXB.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{C as h,D as e}from"./ColorPalettePopover.stories-BhLvy3ss.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-B400f3A6.js";import"./iframe-Kf-3TudD.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-BBEhHqXq.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DnECHVzX.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C1ab8_Nt.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-DK7pmoW6.js";import"./Tag-CGyrVfu4.js";import"./sys-help-2-b8hsY3Mo.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-I4tI7zf8.js";import"./client-CY4f97Aa.js";import"./copy-DZD0G8JY.js";import"./copy-ByaNPW9V.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-Dl7f5Tur.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-Dhh43P9e.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-Bq0c7Dpk.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./ResponsivePopover-CUgpOGSJ.js";import"./Dialog-CGcW-uWB.js";import"./ValueState-CyC8gWMA.js";import"./ResponsivePopoverCommon.css-B2_65n15.js";import"./ItemNavigation-CGEo7S9B.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(a,{children:j}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function $o(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{$o as default};
