import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as m,C as s,a,D as l,A as c}from"./index-BfYXpdUP.js";import"./index-CCpUMy6k.js";import"./index-g2nVdmjV.js";import{C as d}from"./ControlsWithNote-Da0_FOa5.js";import{D as x}from"./DocsHeader-Dl8RcUPF.js";import{F as u}from"./CommandsAndQueries-44QtruFn.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import{C as h,D as e}from"./ColorPalettePopover.stories-CGHGQ7Jp.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Df5mJguz.js";import"./iframe-BIu3RQRi.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-28PG-PhA.js";import"./CustomElementsScope-D32jWln6.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BJcyuOZ-.js";import"./Keys-BF9NgJbR.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BA-Z5X-C.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DIUd5-_G.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CdOaKA-E.js";import"./main-CiDzSAAF.js";import"./index-Bt1-BK1s.js";import"./Tag-B3qkhm6Z.js";import"./sys-help-2-BfevxhM3.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BEp0rhGg.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CgcsYu77.js";import"./client-Wx5G3KSE.js";import"./copy-CiJ_0mNd.js";import"./copy-C343vs9R.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-U2zNqH-T.js";import"./I18nStore-CY8kcvKW.js";import"./useStylesheet-B5S_P2i6.js";import"./index-Bx3SO0r_.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-DTbqhkR9.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./ResponsivePopover-7JLjDdSe.js";import"./Dialog-xFDT8izC.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-DaBas84j.js";import"./ItemNavigation-CO3t4zxH.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
