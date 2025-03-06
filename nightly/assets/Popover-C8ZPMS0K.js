import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as n,C as e}from"./index-CgvWsTXU.js";import"./index-qFA0yexj.js";import"./index-BQHwr47Q.js";import{C as s}from"./ControlsWithNote-BE24L09Q.js";import{D as c}from"./DocsHeader-CI5D8sf-.js";import{F as a}from"./CommandsAndQueries-BTr36WD7.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import{C as d,D as p}from"./Popover.stories-BVzd9QWO.js";import"./iframe-B5yOq3Fp.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-cXES_1K3.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-9YaJ65nU.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-DONP1ba8.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLn7sIp1.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CVZh_iI_.js";import"./main-BZcY5MQX.js";import"./index-Tr5HGXnJ.js";import"./Tag-BSvd86KJ.js";import"./sys-help-2-DLGlU--H.js";import"./index-D9E0VNBI.js";import"./Link-CCf5_SyF.js";import"./index-DxBSIPIx.js";import"./Popover-DfnLNPje.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-8sYM5gB7.js";import"./react-18-CYWbi7Zg.js";import"./copy-Dwp0eLnk.js";import"./copy-QX2RrN3g.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-CnFkv-0N.js";import"./I18nStore-B-rJ6v8Q.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BrwMjXl-.js";import"./index-BRt6fJqY.js";import"./Label-C64tPyb_.js";import"./index-DPupxTow.js";import"./index-CP0Y_Y_X.js";import"./Text-4pUyEHNI.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DWg6TCN4.js";import"./BusyIndicator-Mc6uS3Ug.js";import"./index-DaB0Mse-.js";import"./index-BPRvxvn4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./settings-Bak3RqEm.js";import"./index-BoyT6Wne.js";import"./List-CkWyokyd.js";import"./ItemNavigation-C60Qromi.js";import"./handleDrop-D3f4_oPI.js";import"./DropIndicator-BHUk7YE9.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-BjeZRMb8.js";import"./TabbableElements-XzXYKyvZ.js";import"./index-DM6z4tNm.js";import"./ListItemStandard-Cak5BtOt.js";import"./ListItemTemplate-DS4SpJMX.js";import"./edit-DJjklG_w.js";import"./ListItemAdditionalText.css-BDotrGVh.js";import"./slim-arrow-right-SPlfUwQV.js";import"./RadioButton-0JptCjha.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-h1ngStLZ.js";import"./accept-BGT7641s.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(c,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(a,{})]})}function pr(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{pr as default};
