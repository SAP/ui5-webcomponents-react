import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as e}from"./index-DOaDsc9_.js";import"./index-Dc_7BhGO.js";import"./index-B9o8W6Uf.js";import{C as s}from"./ControlsWithNote-CNLWHEK3.js";import{D as a}from"./DocsHeader-B8PTxS9R.js";import{F as c}from"./CommandsAndQueries-31WXPvMZ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DPrdYQMV.js";import{C as l,D as i}from"./Dialog.stories-C6WhIcqK.js";import"./iframe-hesHFMTZ.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-XJjz10u8.js";import"./utils-DyMdBfPm.js";import"./useIsomorphicLayoutEffect-Bu4xop1x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-2px5KXGd.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-D3cRfWaZ.js";import"./parameters-bundle.css-DSUsAvJy.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CGW8Xrj5.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DP6kMU1p.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Bmgd6dpL.js";import"./information-8BjDCJTf.js";import"./sys-enter-2-BcpVUItX.js";import"./sys-enter-2-KjprDONg.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BQY8_yBp.js";import"./main-BL2DbqAR.js";import"./index-Csr3mskW.js";import"./Tag-Bt0ipejr.js";import"./sys-help-2-CwdCzKO6.js";import"./index-AZQF7cRn.js";import"./Link-BJ2ET1br.js";import"./index-DIZ1yifi.js";import"./Popover-BMI_rbJM.js";import"./PopupsCommon.css-B7Lyl-LM.js";import"./FocusableElements-dXKcAzjx.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DyOJZiXp.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CS47uNJT.js";import"./client-lwzJIAjg.js";import"./copy-0qMnoswg.js";import"./copy-d7htsAK2.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-Cm7aLGLH.js";import"./I18nStore-CWEJ68aw.js";import"./useStylesheet-bO_9Zfr-.js";import"./index-10Quzq-K.js";import"./index-B2xVvqo6.js";import"./Label-VZeu70kx.js";import"./index-DLapjMlp.js";import"./index-CosszrBQ.js";import"./Text-yuhY-WXa.js";import"./addCustomCSSWithScoping-CBi_hReC.js";import"./index-C60mQ2wP.js";import"./index-BfJ8Dvmz.js";import"./BusyIndicator-3eE4S65a.js";import"./index-CjbB3fTU.js";import"./index-DCp58fk9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-heX9Z6a9.js";import"./index-CYMcWQhW.js";import"./Dialog-o_QX5f92.js";import"./ValueState-Bg0UWejw.js";import"./index-D1nx3kGR.js";import"./ListItemStandard-BZFzb6jO.js";import"./ListItemTemplate-CVYYIKhf.js";import"./List-0gV9tTRv.js";import"./ItemNavigation-IR-5vcYH.js";import"./DropIndicator-DHObG6tq.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-CMtlw6Fg.js";import"./slim-arrow-right-D-jYyTM_.js";import"./RadioButton-WuEItTOu.js";import"./CheckBox-D5G0T9RP.js";import"./accept-DPFzyT6s.js";import"./index-BoqxFJBz.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
`,o.jsx(a,{}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"opening-dialogs",children:"Opening Dialogs"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Dialog"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function it(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{it as default};
