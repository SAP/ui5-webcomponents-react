import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as m,C as s,a,D as l,A as c}from"./index-rDVMezgi.js";import"./index-BgnWomVF.js";import"./index-CGgI0x5y.js";import{C as d}from"./ControlsWithNote-DfGnvcg1.js";import{D as x}from"./DocsHeader-qtCU1wid.js";import{F as u}from"./CommandsAndQueries-DeQPxj5P.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-MRVfrrA9.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DFr_1F4A.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D402DJmW.js";import"./iframe-XsjRLVJq.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BhvuzFo7.js";import"./CustomElementsScope-Bim9ocLE.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BlFaFbRM.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-C0UcZWk2.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-v50zrNfc.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-DYSKo6LW.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CnxOfLPM.js";import"./information-DbtMcSD6.js";import"./sys-enter-2-CTMCSnyQ.js";import"./sys-enter-2-Ciletl9c.js";import"./TagDesign-Ga50IS6u.js";import"./utils-C5nK0nM-.js";import"./main-BZcY5MQX.js";import"./index-DaoYA3yQ.js";import"./Tag-BTr-mxkm.js";import"./sys-help-2-COnLU0C4.js";import"./index-iA4rRkZi.js";import"./Link-BveVQiXd.js";import"./index-DgC-Wkyw.js";import"./Popover-CrUg6BDL.js";import"./PopupsCommon.css-CkrnA4gF.js";import"./FocusableElements-DCoyCYrA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B16Uz3cm.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-D-zU-_A-.js";import"./copy-bdWnQ-6t.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-lIiVb8Ys.js";import"./index-DGowPMLa.js";import"./I18nStore-BFRjgGfw.js";import"./useStylesheet-BbE0XC0n.js";import"./index-DyjZETtS.js";import"./index-noTXb15B.js";import"./Label-Iv8Am_pm.js";import"./index-n4YNqY3D.js";import"./index-j5LXKHzi.js";import"./Text-fxG8xjHY.js";import"./preview-Br0ZLt60.js";import"./DocsRenderer-CFRXHY34-CGPuxRSR.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-Cgfw5Re6.js";import"./index-ThksJ1V-.js";import"./BusyIndicator-DQ6Oocfo.js";import"./index-CnihKeIw.js";import"./index-DDwnn4pC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ba84kQhl.js";import"./ResponsivePopover-9R-SZhSc.js";import"./Dialog-Bnmn5Ec8.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-DIPw_9ev.js";import"./ItemNavigation-DjLK4Lar.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
