import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as m,C as s,a,D as l,A as c}from"./index-BvqoMzkp.js";import"./index-WB2XAxZ3.js";import"./index-BbscQeIv.js";import{C as d}from"./ControlsWithNote-CYbdH1Zp.js";import{D as x}from"./DocsHeader-f8YIaeqb.js";import{F as u}from"./CommandsAndQueries-B5GSrUPG.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-C1L07-tE.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DUN8euTp.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DPIpLV7v.js";import"./iframe-CQI_YO8A.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BvNWHM6A.js";import"./CustomElementsScope-lRvT7iCm.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-COW9sgS-.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cx68SyXj.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BSX3YpE0.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B8cpOtV2.js";import"./decline-B3prtgTL.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-C2QpdGW_.js";import"./information-DpRbDwJs.js";import"./sys-enter-2-BNMrwyXi.js";import"./sys-enter-2-38y2ESjX.js";import"./alert-oRgA-QL-.js";import"./TagDesign-Ga50IS6u.js";import"./utils-7pz-UjyQ.js";import"./main-DXdDxF5b.js";import"./index-C8MrfO_3.js";import"./Tag-FveMH3pg.js";import"./sys-help-2-DtkETXXa.js";import"./index-BgcTZP3t.js";import"./Link-Aflf_nDA.js";import"./index-CkquY_70.js";import"./Popover-B5iz04rB.js";import"./PopupsCommon.css-Cwh_2soo.js";import"./FocusableElements-B2W9U87f.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ClsBPvBy.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CihNYBWc.js";import"./copy-gHwufZZP.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-lIiVb8Ys.js";import"./index-BwqFCqzu.js";import"./I18nStore-C3xHSFao.js";import"./useStylesheet-N7C2bzZq.js";import"./index-CRT1e2Cp.js";import"./index-COG6YSxr.js";import"./Label-CzWydTHE.js";import"./index-CefQb58Z.js";import"./index-BxL7GqHK.js";import"./Text-DKB2PakJ.js";import"./preview-DilTqjQn.js";import"./DocsRenderer-CFRXHY34-PokkMZB9.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CzgbjJA9.js";import"./index-DlkEG479.js";import"./BusyIndicator-DTKZVX1f.js";import"./index-JrV9twbC.js";import"./index-DGjbv2L7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bi9EDez9.js";import"./ResponsivePopover-CdzhsIi8.js";import"./Dialog-D-Z-sDmC.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-DwlgFZnF.js";import"./ItemNavigation-hLCo6z-b.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
