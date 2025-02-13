import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as s}from"./index-Bi4z55BD.js";import"./index-DFIoO4Kt.js";import"./index-CSu8CtW4.js";import{C as e}from"./ControlsWithNote-CTBGSYUv.js";import{D as a}from"./DocsHeader-uRpbguYk.js";import{F as c}from"./CommandsAndQueries-B5bUUDc8.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{C as h,D as i}from"./Toast.stories-CYimWkDL.js";import"./iframe-CAl86_oT.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime--4q9epG_.js";import"./CustomElementsScope-CyyomP-e.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-D6Kf4Q73.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CqWzJ5OD.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-8rHqpL4B.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-Y-ArvaTy.js";import"./sys-enter-2-BF5QpgF0.js";import"./TagDesign-Dou_yO3g.js";import"./utils-XEG_z2ei.js";import"./main-CiDzSAAF.js";import"./index-DFlSQLOt.js";import"./Tag-DOeo7pGI.js";import"./sys-help-2-B0EpPzfO.js";import"./index-DZn7chrk.js";import"./Link-OnoDOP2-.js";import"./index-B1ltsArG.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CvEkZt0m.js";import"./client-lwzJIAjg.js";import"./copy-CofIAqn3.js";import"./copy-CpGuQhie.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-CDlK1BMa.js";import"./I18nStore-DM4coTEA.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-CzWTYLl1.js";import"./index-BDvw8IBD.js";import"./Label-CcaREzyi.js";import"./index-Dr3HRM_P.js";import"./index-BXuaslDZ.js";import"./Text-DZM5-wj4.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BsIR1pZr.js";import"./BusyIndicator-BoVirFTQ.js";import"./index-CBqWbLU8.js";import"./index-Bf7tkjWv.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-BAoIoaGb.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
`,o.jsx(c,{})]})}function Po(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Po as default};
