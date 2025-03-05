import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as n}from"./index-zdXs1Etw.js";import{M as m,C as s,a,D as l,A as c}from"./index-BQXnJib2.js";import"./index-B69piazk.js";import"./index-CfNPdWf6.js";import{C as d}from"./ControlsWithNote-DmhYK4Nz.js";import{D as x}from"./DocsHeader-BYzvuxNn.js";import{F as u}from"./CommandsAndQueries-CeZVX1Ky.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import{C as h,D as e}from"./ColorPalettePopover.stories-D88F-4pi.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-B1uhPl8j.js";import"./iframe-DlfnX3A6.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-cXES_1K3.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-3tgFGa2X.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-DONP1ba8.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLn7sIp1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Be8E4wti.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./TagDesign-Ga50IS6u.js";import"./utils-5X6erFHc.js";import"./main-BZcY5MQX.js";import"./index-Bdh0XCK9.js";import"./Tag-BA4hRKDR.js";import"./sys-help-2-DLGlU--H.js";import"./index-D5qjnIt6.js";import"./Link-AmtENQjF.js";import"./index-BQUJqHPJ.js";import"./Popover-DfnLNPje.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DYpkBB0X.js";import"./react-18-CYWbi7Zg.js";import"./copy-Dwp0eLnk.js";import"./copy-QX2RrN3g.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-C3Fksn6V.js";import"./I18nStore-B-rJ6v8Q.js";import"./useStylesheet-D-3zc5-n.js";import"./index-X6I2T3Bw.js";import"./index-hs11xxug.js";import"./Label-DhCZjtoW.js";import"./index-SoaJF4h4.js";import"./index-BFtPjnC4.js";import"./Text-POUUQR3Y.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DgT28tpm.js";import"./BusyIndicator--wc1LB_4.js";import"./index-CTdW44K5.js";import"./index-D5_I8k68.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./ResponsivePopover-DkVgEbSU.js";import"./Dialog-CCqHYV-3.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-Dy2SMJmW.js";import"./ItemNavigation-C60Qromi.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Qo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Qo as default};
