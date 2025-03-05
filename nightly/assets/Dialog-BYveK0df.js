import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as n,C as e}from"./index-Ba-h2xiP.js";import"./index-CAkjh_Z1.js";import"./index-eIDWXF5G.js";import{C as s}from"./ControlsWithNote-CeJXZTf6.js";import{D as a}from"./DocsHeader-C-VAITI5.js";import{F as c}from"./CommandsAndQueries-By1pjIe3.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import{C as l,D as i}from"./Dialog.stories-BRjniQOs.js";import"./iframe-B7J8gJR9.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-cXES_1K3.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-9YaJ65nU.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-DONP1ba8.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLn7sIp1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CIGmQeEO.js";import"./main-BZcY5MQX.js";import"./index-DyjV3Mtp.js";import"./Tag-BSvd86KJ.js";import"./sys-help-2-DLGlU--H.js";import"./index-D9E0VNBI.js";import"./Link-CCf5_SyF.js";import"./index-BQUJqHPJ.js";import"./Popover-DfnLNPje.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-C2vv0uDS.js";import"./react-18-CYWbi7Zg.js";import"./copy-Dwp0eLnk.js";import"./copy-QX2RrN3g.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-Ly-lgDmV.js";import"./I18nStore-B-rJ6v8Q.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BQ7dbfEm.js";import"./index-BRt6fJqY.js";import"./Label-C64tPyb_.js";import"./index-BfETvGUt.js";import"./index-CP0Y_Y_X.js";import"./Text-4pUyEHNI.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DWg6TCN4.js";import"./BusyIndicator-Mc6uS3Ug.js";import"./index-DaB0Mse-.js";import"./index-BPRvxvn4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./index-Dd752_4a.js";import"./Dialog-DWZ8aWGQ.js";import"./ValueState-Bg0UWejw.js";import"./index-BoSHtXeZ.js";import"./ListItemStandard-Cak5BtOt.js";import"./ListItemTemplate-DS4SpJMX.js";import"./edit-DJjklG_w.js";import"./List-CkWyokyd.js";import"./ItemNavigation-C60Qromi.js";import"./handleDrop-D3f4_oPI.js";import"./DropIndicator-BHUk7YE9.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-BjeZRMb8.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-BDotrGVh.js";import"./slim-arrow-right-SPlfUwQV.js";import"./RadioButton-0JptCjha.js";import"./CheckBox-h1ngStLZ.js";import"./accept-BGT7641s.js";import"./index-BoyT6Wne.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(c,{})]})}function pt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{pt as default};
