import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as s}from"./index-x1YeHyU9.js";import"./index-BUTAtzSu.js";import"./index-DPmPYx4A.js";import{C as e}from"./ControlsWithNote-hbKsIfAn.js";import{D as a}from"./DocsHeader-BCQYgwSr.js";import{F as c}from"./CommandsAndQueries-fcunJkKJ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bv63CP0f.js";import{C as h,D as i}from"./Toast.stories-B6LMHKQU.js";import"./iframe-j8Yg6O2b.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-EZ3G6CaF.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-CDZIkOZh.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DNDJ5KQd.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-C0o60MFY.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DMxd5M-V.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DdJENLJZ.js";import"./information-crW1aXWm.js";import"./sys-enter-2-Btg_l7Gl.js";import"./sys-enter-2-BQoPN53b.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DluL2nJ0.js";import"./main-BL2DbqAR.js";import"./index-k33BeIu6.js";import"./Tag-Bt4eSfIf.js";import"./sys-help-2-DkPv2GRC.js";import"./index-DfEG_6DA.js";import"./Link-Cee8M4pE.js";import"./index-CfE5ChDC.js";import"./Popover-8R4fWEnb.js";import"./PopupsCommon.css-BJYIHzRz.js";import"./FocusableElements-B22KwyXz.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D42cNNcx.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CutcZLZM.js";import"./client-lwzJIAjg.js";import"./copy-DIb74NtX.js";import"./copy-DCGapvEg.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-ROSiskjY.js";import"./I18nStore-DI-J8Q63.js";import"./useStylesheet-hr5H-IMi.js";import"./index-CXLzbFR8.js";import"./index-DXHKslqi.js";import"./Label-BvuET2bs.js";import"./index-BwPIj-od.js";import"./index-CJHgPl-E.js";import"./Text-BqkjUVZl.js";import"./addCustomCSSWithScoping-CAH5PFOm.js";import"./index-CpccB1hQ.js";import"./index-W6Ra1GtV.js";import"./BusyIndicator-Bzvv1vPS.js";import"./index-DIc9VXE4.js";import"./index-BVweZtNr.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Ccx1Czlo.js";import"./index-Bbdcq5M3.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
