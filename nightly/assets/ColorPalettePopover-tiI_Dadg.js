import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-B7tNCeqj.js";import{ae as n,af as s,ah as a,aj as l,ai as c}from"./index-BMcWAAzV.js";import"./index-C1n754Ql.js";import"./index-iX07oNKf.js";import{C as d}from"./ControlsWithNote-BvyKS1GM.js";import{D as x}from"./DocsHeader-Bb944Cjn.js";import{F as u}from"./CommandsAndQueries-Bc7fxP2Q.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-Dvor2iJZ.js";import{C as h,D as e}from"./ColorPalettePopover.stories-CzvDzpP-.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Bwu97r4Y.js";import"./iframe-Ct_SlnJB.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-BAC46Qgl.js";import"./utils-DHWaO16c.js";import"./useIsomorphicLayoutEffect-BrM9ZQ9f.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-D2qpVKd_.js";import"./Keys-icCwrzTr.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-KwQmOmwG.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-PdAMeIDX.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-Cvlv1555.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-DXlV02Fk.js";import"./information-xqs3OhY3.js";import"./sys-enter-2-CSX9nspg.js";import"./sys-enter-2-DbnliBdY.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BLhTzhS2.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-B80W41n0.js";import"./Tag-Bslz7m5D.js";import"./sys-help-2-2JKOolh2.js";import"./index-Dga5kidR.js";import"./Link-D-9JsuZq.js";import"./index-DyiqWDN1.js";import"./Popover-D3Aa3r1P.js";import"./PopupsCommon.css-BjVEqPfo.js";import"./FocusableElements-CWhrFN4y.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-DZGQLi_B.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-DqXQITXT.js";import"./client-CY4f97Aa.js";import"./copy-D5I8fHsc.js";import"./copy-0ABXfWaL.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-ClljthAu.js";import"./I18nStore-ZZUdxPPL.js";import"./useStylesheet-HR5-WzWz.js";import"./index-Bz1xVcti.js";import"./index-CBHUUcbt.js";import"./Label-CEj5rW2N.js";import"./index-H87Uqpad.js";import"./index-f_HIS5b8.js";import"./Text-CKbp8M25.js";import"./addCustomCSSWithScoping-CrhCyCCs.js";import"./index-BYWKQNiy.js";import"./index-BJBRTTXf.js";import"./BusyIndicator-CLoFvcyK.js";import"./index-CFz6ke_V.js";import"./index-yEmNeK-_.js";import"./AvatarSize-BceVhWoP.js";import"./employee-BdFbn1ih.js";import"./ResponsivePopover-CZ2EGlLM.js";import"./Dialog-MpwYZvwO.js";import"./ValueState-CyC8gWMA.js";import"./ResponsivePopoverCommon.css-DOAK2j6K.js";import"./ItemNavigation-h15b09Mr.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
`,o.jsx(u,{})]})}function ot(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{ot as default};
