import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as e}from"./index-Cf9TdiSk.js";import"./index-DBDmnX-z.js";import"./index-_PTNq6DX.js";import{C as s}from"./ControlsWithNote-WceZMqCl.js";import{D as a}from"./DocsHeader-DUz5nbfp.js";import{F as c}from"./CommandsAndQueries-D27DZ2Ym.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{C as l,D as i}from"./Dialog.stories-BadY8oLv.js";import"./iframe-DP2L8rW1.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime--4q9epG_.js";import"./CustomElementsScope-CyyomP-e.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-DiEZky6d.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CqWzJ5OD.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B3xVhWeJ.js";import"./decline-WqXclzji.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-CpRj5F0h.js";import"./sys-enter-2-sAwqztpn.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DyHtJFx0.js";import"./main-CiDzSAAF.js";import"./index-DPPrIwN-.js";import"./Tag-B0hWUzaX.js";import"./sys-help-2-B0EpPzfO.js";import"./index-qDH2MiBo.js";import"./Link-D6TMlpbu.js";import"./index-FpWZEnTM.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-D-3X29ML.js";import"./client-lwzJIAjg.js";import"./copy-CofIAqn3.js";import"./copy-CpGuQhie.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DSNhfjyG.js";import"./I18nStore-DM4coTEA.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-lBbqciF7.js";import"./index-Wfe8JoJe.js";import"./Label-5DArBtCG.js";import"./index-iR9PNDcN.js";import"./index-PYuf3Agp.js";import"./Text-pu3koT6Q.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BWkycj8K.js";import"./BusyIndicator-CYJz71Ps.js";import"./index-C-pEC8LU.js";import"./index-kg5gipTY.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-B0Qfqq7w.js";import"./Dialog-D5Yh429K.js";import"./ValueState-Bg0UWejw.js";import"./index-CourREO1.js";import"./ListItemStandard-DjkupCMq.js";import"./ListItemTemplate-BG8P1BBq.js";import"./edit-BixUhon2.js";import"./List-BXQECwfj.js";import"./ItemNavigation-wp7n4Dv7.js";import"./DropIndicator-CGNu26vL.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-C8O-zOFi.js";import"./slim-arrow-right-BXm-n8AR.js";import"./RadioButton-DjPZblNV.js";import"./CheckBox-uijZI6vZ.js";import"./accept-DU7LYMy0.js";import"./index-Ca1VcVIy.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
