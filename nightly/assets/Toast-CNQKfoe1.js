import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as s}from"./index-CTpEm8C4.js";import"./index-CdHGgSNR.js";import"./index-DpG-041u.js";import{C as e}from"./ControlsWithNote-D6xRR7-1.js";import{D as a}from"./DocsHeader-DbPA5hk-.js";import{F as c}from"./CommandsAndQueries-B9mVomeO.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-D0oe8JHs.js";import{C as h,D as i}from"./Toast.stories-DP4iXwle.js";import"./iframe-JQuCPaIx.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DfVDXLfc.js";import"./utils-C9_9ShpY.js";import"./useIsomorphicLayoutEffect-Clyi7m9u.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-Bn6Q5CAy.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVzRT9Bg.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-ifklPEaK.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-BOQDYlzc.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CuCY0lV7.js";import"./information-Cak16zSA.js";import"./sys-enter-2-XqI4eejo.js";import"./sys-enter-2-Dcza6can.js";import"./TagDesign-Dou_yO3g.js";import"./utils-0VSFkVRS.js";import"./main-rGL2KZiJ.js";import"./index-BJBneuZj.js";import"./Tag-PldDXJ8h.js";import"./sys-help-2-vfGQ4D_d.js";import"./index-Dh-Pr-fK.js";import"./Link-C6yBf8L4.js";import"./index-DgTgpO-4.js";import"./Popover-D2H5tr2x.js";import"./PopupsCommon.css-BjjP0aIP.js";import"./FocusableElements-DmMpNXMH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DlOwLzX7.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-L5ow0dGA.js";import"./client-lwzJIAjg.js";import"./copy-BscPHKJH.js";import"./copy-BzOp45rx.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-B2fZlG60.js";import"./I18nStore-DzsPQ4Pu.js";import"./useStylesheet-DNyxTWaC.js";import"./index-DlWYL6lf.js";import"./index-DVZh2p7o.js";import"./Label-C5k308Ss.js";import"./index-DaCk7tY-.js";import"./index-DgufeG-1.js";import"./Text-BgOY5gTt.js";import"./addCustomCSSWithScoping-DJgtY14Y.js";import"./index-BQ73vKGB.js";import"./index-pRRfesa_.js";import"./BusyIndicator-DpBDtyrv.js";import"./index-C1yRVqRl.js";import"./index-DZyogJjo.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Dre3WUSG.js";import"./index-Co5WPAlz.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
