import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-DpYXPI8c.js";import{M as m,C as s,a,D as l,A as c}from"./index-Cmu0l5n_.js";import"./index-BPgdWBHk.js";import"./index-BB9kdpoI.js";import{C as d}from"./ControlsWithNote-DDyWudUT.js";import{D as x}from"./DocsHeader-BM9mp5yV.js";import{F as u}from"./CommandsAndQueries-B2_RCm-H.js";import"./index-ChI72X44.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{C as h,D as e}from"./ColorPalettePopover.stories-n6TiOH_z.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DFoUOQ4T.js";import"./iframe-DDRQd00M.js";import"./index-DnYn5RTv.js";import"./index-BS9IDQLN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-DITkwERB.js";import"./CustomElementsScope-CRlaEhjH.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhJpItN3.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-g4jJGwIi.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CtkDPpba.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./TagDesign-Ga50IS6u.js";import"./utils-z393a45M.js";import"./main-BZcY5MQX.js";import"./index-bxj-dcWC.js";import"./Tag-DJG7ubt1.js";import"./sys-help-2-WHz-04ii.js";import"./index-C5x9Zqi4.js";import"./Link-C_1Qeegk.js";import"./index-vVWMke_Z.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-BcmnvuMK.js";import"./copy-BjWKS8Rq.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-DfYxHRnX.js";import"./index-DMvGy9mq.js";import"./I18nStore-BBWtp4Wg.js";import"./useStylesheet-BYtqX5T7.js";import"./index-BZHnAAif.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./preview-DiMy2ffE.js";import"./DocsRenderer-CFRXHY34-BFpbO1rU.js";import"./react-18-B55prW7j.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./ResponsivePopover-VLmN0bUg.js";import"./Dialog-CxuAGvin.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-BI2J7kmG.js";import"./ItemNavigation-DKmCjzmX.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
