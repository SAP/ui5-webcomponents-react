import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as n}from"./index-ChplMHeC.js";import{M as m,C as s,a,D as l,A as c}from"./index-ZHsH_5ZF.js";import"./index-D-wFFKPJ.js";import"./index-CW3wKhCl.js";import{C as d}from"./ControlsWithNote-BfAICQPF.js";import{D as x}from"./DocsHeader-Dptmb2oI.js";import{F as u}from"./CommandsAndQueries-C0t-lKcY.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-COB9QmMt.js";import{C as h,D as e}from"./ColorPalettePopover.stories-MbUoeTNN.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CT-tiSIM.js";import"./iframe-ezAbQp6z.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-LqdGbSZi.js";import"./utils-BWqf_uAM.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-C6xPwCPp.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CA9P0PMV.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DS5kSsC-.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-g3O-RcN7.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BpAjLqqt.js";import"./information-DVLmtQkV.js";import"./sys-enter-2-CfLvVMjo.js";import"./sys-enter-2-DdEQw2xQ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CrkjJOCn.js";import"./main-BL2DbqAR.js";import"./index-Dvbs1BEo.js";import"./Tag-C_HjJuC-.js";import"./sys-help-2-BQVcEmH1.js";import"./index-BM4FQHBF.js";import"./Link-iWVapVlB.js";import"./index-Cr32hUX_.js";import"./Popover-BAiQOiUL.js";import"./PopupsCommon.css-2ZmbiFFx.js";import"./FocusableElements-C_2yNLne.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pNyAs-as.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-7flfUGXn.js";import"./client-lwzJIAjg.js";import"./copy-BecmeJfP.js";import"./copy-B1GXw-vf.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-bbXpdfcc.js";import"./I18nStore-BQYkzCly.js";import"./useStylesheet-hr5H-IMi.js";import"./index-BMK-kPJD.js";import"./index-Dwb1LPrJ.js";import"./Label-Bwow4Hgz.js";import"./index-DWbw-aO0.js";import"./index-Cimm6LhF.js";import"./Text-CTqM3z3y.js";import"./addCustomCSSWithScoping-BtnQqIMN.js";import"./index-D04AiznP.js";import"./index-Cny83cUZ.js";import"./BusyIndicator-BhVM01kP.js";import"./index-BeQoBTx7.js";import"./index-DM-FMAOd.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DyoIl86o.js";import"./ResponsivePopover-vhq84JNR.js";import"./Dialog-DFK1QIb3.js";import"./ValueState-Bg0UWejw.js";import"./ResponsivePopoverCommon.css-DRkcOJTn.js";import"./ItemNavigation-ChQSAlqN.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
