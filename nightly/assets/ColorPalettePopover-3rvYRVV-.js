import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as m,C as s,a,D as l,A as c}from"./index-gj8_CuD2.js";import"./index-BSyUicdy.js";import"./index-p0g9WRuw.js";import{C as d}from"./ControlsWithNote-B6R51w4_.js";import{D as x}from"./DocsHeader-DWonkNmL.js";import{F as u}from"./CommandsAndQueries-SpSNH3NH.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BOwCdWYi.js";import{C as h,D as e}from"./ColorPalettePopover.stories-M6-jc_cA.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DAcOxlfh.js";import"./iframe-u-x51KPK.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-D97XV8sh.js";import"./EventProvider-ChtD9rRX.js";import"./ManagedStyles-BCO68z9u.js";import"./CustomElementsScope-DUj-UV8m.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-ByA1SsYZ.js";import"./Keys-DjLYsotv.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BCDdExWr.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CYRaZPq9.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CmQf_FFT.js";import"./decline-B6jD48Ye.js";import"./i18n-defaults-DCrxyi3I.js";import"./information-DV2AGhUW.js";import"./information-B_fD0mel.js";import"./sys-enter-2-8yiHyFC4.js";import"./sys-enter-2-3FJ7denB.js";import"./withWebComponent-BfnST9Sw.js";import"./TagDesign-Ga50IS6u.js";import"./utils-qlvtd81G.js";import"./main-CiDzSAAF.js";import"./index-w8-6vkV6.js";import"./Tag-DZx-ABN6.js";import"./sys-help-2-2925v-Sa.js";import"./index-DygVgSN6.js";import"./Link-DksYOIa5.js";import"./index-BtffljRr.js";import"./Popover-RfvVyLvj.js";import"./PopupsCommon.css-CWTNNGZS.js";import"./FocusableElements-GjzXbghM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pRnz8BGg.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-Brj3_5R6.js";import"./react-18-CYWbi7Zg.js";import"./copy-BHbbPm9C.js";import"./copy-DTrJKJyj.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-DAWhuSyo.js";import"./I18nStore-SPUtoouk.js";import"./useStylesheet-D5Lehdk0.js";import"./index-XkaT5vRD.js";import"./index-BBE5vJrD.js";import"./Label-B_yE8MRJ.js";import"./index-Dno20kSL.js";import"./index-B5cMioGG.js";import"./Text-DVHHInte.js";import"./addCustomCSSWithScoping-CDsicyAT.js";import"./index-aJHEJiAx.js";import"./BusyIndicator-CjR-E_fs.js";import"./index-BsfhEIY9.js";import"./index-C0zzG69g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Boc3Tmse.js";import"./ResponsivePopover-B7ajB4G4.js";import"./Dialog-uPNAE_TY.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-C5uTYG6E.js";import"./ItemNavigation-DoWvI3ZU.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Zo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Zo as default};
