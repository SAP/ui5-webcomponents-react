import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as s}from"./index-ZHsH_5ZF.js";import"./index-D-wFFKPJ.js";import"./index-CW3wKhCl.js";import{C as e}from"./ControlsWithNote-BfAICQPF.js";import{D as a}from"./DocsHeader-Dptmb2oI.js";import{F as c}from"./CommandsAndQueries-C0t-lKcY.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-COB9QmMt.js";import{C as h,D as i}from"./Toast.stories-BSzGaApX.js";import"./iframe-ezAbQp6z.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-LqdGbSZi.js";import"./utils-BWqf_uAM.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-C6xPwCPp.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CA9P0PMV.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DS5kSsC-.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-g3O-RcN7.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BpAjLqqt.js";import"./information-DVLmtQkV.js";import"./sys-enter-2-CfLvVMjo.js";import"./sys-enter-2-DdEQw2xQ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CrkjJOCn.js";import"./main-BL2DbqAR.js";import"./index-Dvbs1BEo.js";import"./Tag-C_HjJuC-.js";import"./sys-help-2-BQVcEmH1.js";import"./index-BM4FQHBF.js";import"./Link-iWVapVlB.js";import"./index-Cr32hUX_.js";import"./Popover-BAiQOiUL.js";import"./PopupsCommon.css-2ZmbiFFx.js";import"./FocusableElements-C_2yNLne.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pNyAs-as.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-7flfUGXn.js";import"./client-lwzJIAjg.js";import"./copy-BecmeJfP.js";import"./copy-B1GXw-vf.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-bbXpdfcc.js";import"./I18nStore-BQYkzCly.js";import"./useStylesheet-hr5H-IMi.js";import"./index-BMK-kPJD.js";import"./index-Dwb1LPrJ.js";import"./Label-Bwow4Hgz.js";import"./index-DWbw-aO0.js";import"./index-Cimm6LhF.js";import"./Text-CTqM3z3y.js";import"./addCustomCSSWithScoping-BtnQqIMN.js";import"./index-D04AiznP.js";import"./index-Cny83cUZ.js";import"./BusyIndicator-BhVM01kP.js";import"./index-BeQoBTx7.js";import"./index-DM-FMAOd.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DyoIl86o.js";import"./index-BKyahDJZ.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(c,{})]})}function Ro(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Ro as default};
