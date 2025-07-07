import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as e}from"./index-BlxXrl7Y.js";import"./index-BARq89zH.js";import"./index-R-JzRtwA.js";import{C as s}from"./ControlsWithNote-DUBIoqLW.js";import{D as a}from"./DocsHeader-oBlPuHj3.js";import{F as c}from"./CommandsAndQueries-DXNhHqxU.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bkeyeot9.js";import{C as l,D as i}from"./Dialog.stories-Dilrfem1.js";import"./iframe-C94VYfSB.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-7DBFq8Nb.js";import"./CustomElementsScope-CL9zjcNa.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CmBjANX3.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BZ5EcdIf.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DsLvoCTe.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D1yurQHO.js";import"./decline-CtrqdeOl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-B6RSzyEp.js";import"./information-D1jL324h.js";import"./sys-enter-2-DS9n4Dub.js";import"./sys-enter-2-A7Y23Pfh.js";import"./alert-DnTkm5F5.js";import"./Tag-afvhVdQ_.js";import"./sys-help-2-BWOTEP1y.js";import"./utils-Deqqhi4Y.js";import"./main-Dn6sLQP9.js";import"./index-Buk-oTHM.js";import"./index-BN2x7G99.js";import"./Link-5JEABESN.js";import"./index-CsHriDy7.js";import"./Popover-D2Ha4YTk.js";import"./PopupsCommon.css-CIF0SfCa.js";import"./FocusableElements-Dc0aSsUl.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Ccnh5zsM.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-EaiX1lyC.js";import"./copy-ByMwA9ho.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CmksOPNG.js";import"./I18nStore-DeTYyh4o.js";import"./useStylesheet-DBqLMi8E.js";import"./index-C-zAQpBb.js";import"./index-8sYBluu0.js";import"./Label-CMG0rVlp.js";import"./index-BtDHGh6c.js";import"./index-CXHwHWL0.js";import"./Text-CteZtvAO.js";import"./preview-DXF9ym6j.js";import"./DocsRenderer-CFRXHY34-DVwStvZN.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BTrjrnXc.js";import"./index-qwwFDXH5.js";import"./BusyIndicator-eqRCVs2M.js";import"./index-D0D5cipM.js";import"./index-jzDBtRn1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzbMOLEH.js";import"./index-CEYTn6cu.js";import"./Dialog-D-LeMYyq.js";import"./ValueState-Bg0UWejw.js";import"./index-DCwGA4PP.js";import"./List-CU9j6okB.js";import"./ItemNavigation-zF11pVKR.js";import"./TableUtils-DvE1eKA0.js";import"./DropIndicator-D5z89LGS.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-DAadSzIh.js";import"./TabbableElements-CqFMEI5U.js";import"./index-CiHp37qV.js";import"./ListItemStandard-uPspI8l1.js";import"./ListItemTemplate-CiRqmA1O.js";import"./edit-NLR1PYG3.js";import"./ListItemAdditionalText.css-R1yZuvQz.js";import"./slim-arrow-right-kzb6I7tj.js";import"./RadioButton-BvkpMK5q.js";import"./CheckBox-XoOc1if0.js";import"./accept-BRic3XtZ.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
