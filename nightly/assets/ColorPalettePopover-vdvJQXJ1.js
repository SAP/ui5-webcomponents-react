import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as m,C as s,a,D as l,A as c}from"./index-C8j1a1wf.js";import"./index-CV9953r4.js";import"./index-BEtTPGE0.js";import{C as d}from"./ControlsWithNote-Dlihrsue.js";import{D as x}from"./DocsHeader-D1z4P3Uo.js";import{F as u}from"./CommandsAndQueries-Dc5LslcP.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-xNG2nZLh.js";import{C as h,D as e}from"./ColorPalettePopover.stories-BQ3IKBbA.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-zn3-BOuJ.js";import"./iframe-BUIjnSfL.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-CkEx_Gfk.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DcNvBpEn.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BexaehQh.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DOGhZSxR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B158X0Y5.js";import"./decline-zF6-_htN.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-a8ApNaQO.js";import"./information-DmA-zxas.js";import"./sys-enter-2-DU2G_wE6.js";import"./sys-enter-2-CbaoLfaf.js";import"./alert-CeIMTDH_.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DLp8nVmU.js";import"./main-DnREbZ5I.js";import"./index-B_D8PZjO.js";import"./Tag-DUc97KOd.js";import"./sys-help-2-i21-KsxS.js";import"./index-D9S9JAEE.js";import"./Link-CBPPqDB9.js";import"./index-D_lPDdUa.js";import"./Popover-eNK7pDla.js";import"./PopupsCommon.css-DXmEAn4P.js";import"./FocusableElements-DDPXQQfz.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DS2o_9u5.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-C8Wa9dhW.js";import"./copy-DmqZtkbO.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CX5fbFNZ.js";import"./I18nStore-tbyxgrjv.js";import"./useStylesheet-DUe1LpVj.js";import"./index-Cj6ai3XZ.js";import"./index-Bjofktik.js";import"./Label-BrFTKjrK.js";import"./index-dNG4P2z4.js";import"./index-BxLcq94m.js";import"./Text-CNWDrMdn.js";import"./preview-DLSX0WQj.js";import"./DocsRenderer-CFRXHY34-CQQuXYXR.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B73Gg2hE.js";import"./index-CD5x5g4B.js";import"./BusyIndicator-vKEUjaWy.js";import"./index-8fyqcNlw.js";import"./index-DOaWR8S5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BtfkId0O.js";import"./ResponsivePopover-DdHf6Gx6.js";import"./Dialog-DYMZoMI2.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-BHUgyS0n.js";import"./ItemNavigation-B1w6o4UP.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
