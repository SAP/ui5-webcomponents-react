import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as m,C as s,a,D as l,A as c}from"./index-B-5Yj3Zs.js";import"./index-DLPFLlG_.js";import"./index-hrp50IaA.js";import{C as d}from"./ControlsWithNote-CADrsMFw.js";import{D as x}from"./DocsHeader-CmH0iYHc.js";import{F as u}from"./CommandsAndQueries-BeO2nfZ6.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DC3LwAUi.js";import{C as h,D as e}from"./ColorPalettePopover.stories-CC2yDfam.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CHxS3YD-.js";import"./iframe-TAURSOwn.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-CkJkBj4X.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BxO28PWq.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-BnglGdU1.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BESgvrT7.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CGhQ9j18.js";import"./i18n-defaults-CifGXSvE.js";import"./information-KDvoX9uY.js";import"./information-C8_9afp4.js";import"./sys-enter-2-CsrJiGdz.js";import"./sys-enter-2-Ci_i_5eG.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BpdWIk01.js";import"./main-BL2DbqAR.js";import"./index-DSQIUmMV.js";import"./Tag-DzIJgOv0.js";import"./sys-help-2-B4q7nDXu.js";import"./index-CP6VInro.js";import"./Link-Bcg9H63G.js";import"./index-CL5etcr3.js";import"./Popover-C6ZUNzDq.js";import"./PopupsCommon.css-rRFtJ1Vd.js";import"./FocusableElements-C53XHRKH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-tQZDysQP.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CnJfJsUV.js";import"./client-lwzJIAjg.js";import"./copy-5h2KIO4T.js";import"./copy-VunZ5yu1.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Bb8E3hqz.js";import"./I18nStore-B-mmBzjK.js";import"./useStylesheet-hr5H-IMi.js";import"./index-Zv7eDdGR.js";import"./index-DkYwStNe.js";import"./Label-CcC1A6T7.js";import"./index-D7PKo4Nn.js";import"./index-BMvJLi4H.js";import"./Text-D4h1PrIo.js";import"./addCustomCSSWithScoping-DGzs2l-b.js";import"./index-CpccB1hQ.js";import"./index-CG_Gq9FR.js";import"./BusyIndicator-2oz_Gfhw.js";import"./index-Bap_Ptt8.js";import"./index-CA4K88X9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-C3v0q24u.js";import"./ResponsivePopover-DH4hdRET.js";import"./Dialog-CjGZgoGI.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-pmf1x_Fb.js";import"./ItemNavigation-T0V7Tj1H.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
