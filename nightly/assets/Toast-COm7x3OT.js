import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as s}from"./index-1XTt1e2O.js";import"./index-DuvBkkWn.js";import"./index-DjWkirpQ.js";import{C as e}from"./ControlsWithNote-CER5xFuo.js";import{D as a}from"./DocsHeader-voP1Z_2r.js";import{F as c}from"./CommandsAndQueries-DifzhugA.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bnj9fnoW.js";import{C as h,D as i}from"./Toast.stories-BNy29vNN.js";import"./iframe-C9byC3r-.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DIBLIPif.js";import"./utils-DKbukTmU.js";import"./useIsomorphicLayoutEffect-BuGJanM4.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-BYnClEc8.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVlQjg5y.js";import"./parameters-bundle.css-C_3tvNHF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cq5L8-91.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-CkvCC5iV.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-aOc0GfxQ.js";import"./information-B7lIx4H4.js";import"./sys-enter-2-Cn8hrStw.js";import"./sys-enter-2-DXus7nkZ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BRwmHttO.js";import"./main-rGL2KZiJ.js";import"./index-KpIA7GSc.js";import"./Tag-MzUi0FzG.js";import"./sys-help-2-COroZqns.js";import"./index-DoDMd5jQ.js";import"./Link-Cr8wHvq2.js";import"./index-DM6wTQDx.js";import"./Popover-DWH7u18I.js";import"./PopupsCommon.css-CLlsUzpB.js";import"./FocusableElements-Da8ni1pm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bn2o07mV.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-2NZ7weCR.js";import"./client-lwzJIAjg.js";import"./copy-Bnrg9YBK.js";import"./copy-C92HBupN.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Bqoy1NQT.js";import"./I18nStore-DlsSjWbm.js";import"./useStylesheet-BO3w5Xt1.js";import"./index-BWBARO-a.js";import"./index-Dbb581IU.js";import"./Label-DMEL6fX-.js";import"./index-Pj1kAMZ-.js";import"./index-Cs_Ztk0v.js";import"./Text-DZiuAp7s.js";import"./addCustomCSSWithScoping-Dkzu7Yq-.js";import"./index-B5N8tz-A.js";import"./index-D1TSxMr6.js";import"./BusyIndicator-CgjmT3Fu.js";import"./index-CKTWv80J.js";import"./index-DN8baC31.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DObyMRaP.js";import"./index-B2xubGXJ.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
