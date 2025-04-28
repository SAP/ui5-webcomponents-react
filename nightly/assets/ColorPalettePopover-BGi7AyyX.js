import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as m,C as s,a,D as l,A as c}from"./index-CzuZcxDC.js";import"./index-Ultsg-G0.js";import"./index-DN0lUkMj.js";import{C as d}from"./ControlsWithNote-Bo97y3WU.js";import{D as x}from"./DocsHeader-BVpmSQ5F.js";import{F as u}from"./CommandsAndQueries-BqQHK1e9.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import{C as h,D as e}from"./ColorPalettePopover.stories-i0Vu_tx-.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-mjXfatot.js";import"./iframe-BrpvQqxZ.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BCizSm9J.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-C3KIEZ_B.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-D8gJIGEW.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBnVRLcV.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B8cpOtV2.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./TagDesign-Ga50IS6u.js";import"./utils-Bf2cntMl.js";import"./main-DXdDxF5b.js";import"./index-3KvboCIt.js";import"./Tag-JkllhvLP.js";import"./sys-help-2-bRrqGaJr.js";import"./index-Cin_GHPy.js";import"./Link-DU2LYizk.js";import"./index-DogrUJhP.js";import"./Popover-ZaMaqrll.js";import"./PopupsCommon.css-DkWsY6As.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-D5y8ERWb.js";import"./copy-BJ2RS-I5.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-Bk7V7Qy-.js";import"./I18nStore-BqSUVB5y.js";import"./useStylesheet-N7C2bzZq.js";import"./index-KM_ngbs2.js";import"./index-BT6O4HVG.js";import"./Label-efMMm_Yw.js";import"./index-DoqJBpXZ.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./preview-BtbMwmj3.js";import"./DocsRenderer-CFRXHY34-DH_XQXlw.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./ResponsivePopover-BAaf0na0.js";import"./Dialog-CrFT51rq.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-GWs4D-OS.js";import"./ItemNavigation-CI8VBZuZ.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Vo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Vo as default};
