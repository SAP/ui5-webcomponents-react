import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as m,C as s,a,D as l,A as c}from"./index-BxWrc7MZ.js";import"./index-DNTLYVLP.js";import"./index-BzuNhS44.js";import{C as d}from"./ControlsWithNote-CVDCQbcI.js";import{D as x}from"./DocsHeader-CWpwa_Hb.js";import{F as u}from"./CommandsAndQueries-Mdin3UBF.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DG2Y37pt.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BJ6Sc9hT.js";import"./iframe-DUJf1H9K.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-TYk6ziax.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CDUAIOHY.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CJfyoCyo.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DGo6fNOA.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./TagDesign-Ga50IS6u.js";import"./utils-BP6ziVZ_.js";import"./main-BZcY5MQX.js";import"./index-CaDFDEaV.js";import"./Tag-DIF-afEZ.js";import"./sys-help-2-3dHH1qFA.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./index-C4AHKFdV.js";import"./Popover-CYWkC5M7.js";import"./PopupsCommon.css-C4odaWdv.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CzED_nep.js";import"./copy-BIm13QSs.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-DfZ2IpZQ.js";import"./I18nStore-DdNtknPF.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BrwMjXl-.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./index-DmVWxwwF.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./preview-BEJnvG7R.js";import"./DocsRenderer-CFRXHY34-DFT4oPgo.js";import"./react-18-DGA_MWY9.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./ResponsivePopover-B1wBYLBj.js";import"./Dialog-BomKBOpU.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-Dyu-3t3O.js";import"./ItemNavigation-CAinmIbD.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
