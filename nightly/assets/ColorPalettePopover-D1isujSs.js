import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-B7tNCeqj.js";import{ae as m,af as s,ah as a,aj as l,ai as c}from"./index-oCq4DVA_.js";import"./index-CY-aFc8B.js";import"./index-7xNF_gm9.js";import{C as d}from"./ControlsWithNote-B8QYrWkE.js";import{D as x}from"./DocsHeader-LOHVzfgU.js";import{F as u}from"./CommandsAndQueries-BHuf3U1K.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{C as h,D as e}from"./ColorPalettePopover.stories-BrGJXeoc.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DsKd-CmO.js";import"./iframe-C-WG3Fxu.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-Df0TC0Md.js";import"./Keys-DundVx7l.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DiKvMA1d.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DrrSJfqv.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CbqKdr-p.js";import"./information-DA6q7hAT.js";import"./sys-enter-2-DZyqnfP0.js";import"./sys-enter-2-BQuGujks.js";import"./TagDesign-Dou_yO3g.js";import"./utils--fxPZxKN.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-B_alDUrx.js";import"./Tag-4_eO7NFx.js";import"./sys-help-2-CiQ-GoLU.js";import"./index-BibcJJNq.js";import"./Link-D-wjqtz_.js";import"./index-uo5_YZoe.js";import"./Popover-BEou1Y9a.js";import"./PopupsCommon.css-IJUzQyRd.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-Dahq-XaZ.js";import"./client-CY4f97Aa.js";import"./copy-CtVlzodN.js";import"./copy-08oD3P1Y.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-DmqQyrGp.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-BTIftX-2.js";import"./index-DnJL0qev.js";import"./Label-qWriTtuJ.js";import"./index-C7c7stHm.js";import"./index-C-cAGxuE.js";import"./Text-C2JOarjX.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-C-b0WtXR.js";import"./BusyIndicator-D8_NMEhC.js";import"./index-DFo5s-d0.js";import"./index-tKYk34_N.js";import"./AvatarSize-BceVhWoP.js";import"./employee-bNtHwQyf.js";import"./ResponsivePopover-DhwVJmwv.js";import"./Dialog-B5eXWXJL.js";import"./ValueState-CyC8gWMA.js";import"./ResponsivePopoverCommon.css-B2_65n15.js";import"./ItemNavigation-oZzng-oK.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function $o(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{$o as default};
