import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as m}from"./index-DyCphG7h.js";import{ae as n,af as e}from"./index-BvzZLsAc.js";import"./index-DxUTVy9M.js";import"./index-D5BiaZK5.js";import{C as s}from"./ControlsWithNote-BL5eTj-j.js";import{D as a}from"./DocsHeader-BW5n4Sf_.js";import{F as c}from"./CommandsAndQueries-crP-nFvZ.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{C as h,D as i}from"./Toast.stories-NtmP8no9.js";import"./iframe-Cghiw13z.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DdC1dEFT.js";import"./main-Dcm2jhNK.js";import"./index-Bhbep3gJ.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-CMMnNxa9.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DFFr6UWc.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-BtoQk-Nm.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-qw6Z9sFm.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-DUiH56KI.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-sZweP2EV.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-BrDjn1Vt.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./index-D_VsINxY.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
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
`,o.jsx(c,{})]})}function Ho(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Ho as default};
