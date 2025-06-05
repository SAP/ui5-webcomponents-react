import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-B5Ip8tK9.js";import{M as m,C as s,a,D as l,A as c}from"./index-DukfgG46.js";import"./index-BWKPikEH.js";import"./index-DG4SW1Na.js";import{C as d}from"./ControlsWithNote-DWvUN5HF.js";import{D as x}from"./DocsHeader-C0GiLIwp.js";import{F as u}from"./CommandsAndQueries-Dnz_Hw6e.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BHqLOn3P.js";import{C as h,D as e}from"./ColorPalettePopover.stories-uQomlYKB.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CMdQYw2c.js";import"./iframe-DwIyAsRF.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-2URiGFD4.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-Bjd4zYvH.js";import"./Keys-CLyAIm0c.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-B0-3JSbm.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-B60tbUjG.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D-4MAilP.js";import"./decline-Dy3AHuu2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CT1WFsrs.js";import"./information-BNPlHszt.js";import"./sys-enter-2-Dn3JsYB_.js";import"./sys-enter-2-CVLhpz1T.js";import"./alert-DsnWREGh.js";import"./Tag-CFnuOVXp.js";import"./sys-help-2-D2pBj4rZ.js";import"./utils-C_2ddFCI.js";import"./main-DirjBNUD.js";import"./index-BkMq5NNM.js";import"./index-DQrDl5DZ.js";import"./Link-B2LlQwpl.js";import"./index-DVo4jJWd.js";import"./Popover-C0YXxup5.js";import"./PopupsCommon.css-Fn6w0Ixx.js";import"./FocusableElements-CQV0UnrP.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DtxVwfCt.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-Dfs1YfRy.js";import"./copy-CiPkc0hO.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-C9pVJkR7.js";import"./I18nStore-CIGTIwFZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D71WPoKU.js";import"./index-C4Jitp5p.js";import"./Label-XJ1zprNH.js";import"./index-Bd-rK44S.js";import"./index-D3evOh0J.js";import"./Text-CA10hASc.js";import"./preview-CXjsfKgV.js";import"./DocsRenderer-CFRXHY34-DiZSQ5cR.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-CKnDw5_z.js";import"./index-YPb1U1C6.js";import"./BusyIndicator-DWZUs86e.js";import"./index-D4tId3DQ.js";import"./index-69BlU8QT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRL-E5Mm.js";import"./ResponsivePopover-YyQcMm4b.js";import"./Dialog-BTP8el_I.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-CBuVONF8.js";import"./ItemNavigation-kLVynq3E.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
