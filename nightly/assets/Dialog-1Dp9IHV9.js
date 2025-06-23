import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as e}from"./index-DsGhaILZ.js";import"./index-Bat7xdbk.js";import"./index-DonUAOjV.js";import{C as s}from"./ControlsWithNote-DJbkUAgk.js";import{D as a}from"./DocsHeader-DFGmdh8g.js";import{F as c}from"./CommandsAndQueries-DlNCnTRy.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import{C as l,D as i}from"./Dialog.stories-DIfjk99w.js";import"./iframe-DtN9GsvW.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-CTdjW1dy.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CddyUUJt.js";import"./Keys-BxH5KEHJ.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cq4WdPfD.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CywStIph.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Bwpyempw.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./Tag-BGp0HQg1.js";import"./sys-help-2-CdqLSqXL.js";import"./utils-BaTqjOoP.js";import"./main-DirjBNUD.js";import"./index-DFeVppZp.js";import"./index-CnssFVF8.js";import"./Link-BvcafW2a.js";import"./index-GYOhI-mh.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-iFL-9i7I.js";import"./copy-DVi57tol.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-oozLJHIK.js";import"./I18nStore-C5X80oUZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-D71WPoKU.js";import"./index-BHoJB3Bj.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./preview-BvIf5V8T.js";import"./DocsRenderer-CFRXHY34-DsgIxYij.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-wtAiXXoy.js";import"./Dialog-MPSfdmEc.js";import"./ValueState-Bg0UWejw.js";import"./index-CXzdgDqL.js";import"./List-B_8iuIil.js";import"./ItemNavigation-DNb9B6_M.js";import"./TableUtils-DqLEf2oU.js";import"./DropIndicator-CFcDZwdF.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-BpIMRvvP.js";import"./TabbableElements-XzXYKyvZ.js";import"./index-BV-IC_t2.js";import"./ListItemStandard-eiM_nAhy.js";import"./ListItemTemplate-CXAphkt3.js";import"./edit-C3yWC7Dh.js";import"./ListItemAdditionalText.css-Bs0NBuuA.js";import"./slim-arrow-right-ypoHwspP.js";import"./RadioButton-DU941qqD.js";import"./CheckBox-B3wYHGWl.js";import"./accept-COVgYUg4.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(c,{})]})}function mt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{mt as default};
