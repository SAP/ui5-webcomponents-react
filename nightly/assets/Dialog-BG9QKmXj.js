import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as e}from"./index-x1YeHyU9.js";import"./index-BUTAtzSu.js";import"./index-DPmPYx4A.js";import{C as s}from"./ControlsWithNote-hbKsIfAn.js";import{D as a}from"./DocsHeader-BCQYgwSr.js";import{F as c}from"./CommandsAndQueries-fcunJkKJ.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bv63CP0f.js";import{C as l,D as i}from"./Dialog.stories-DgTSceuZ.js";import"./iframe-j8Yg6O2b.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-EZ3G6CaF.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-CDZIkOZh.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DNDJ5KQd.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-C0o60MFY.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DMxd5M-V.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DdJENLJZ.js";import"./information-crW1aXWm.js";import"./sys-enter-2-Btg_l7Gl.js";import"./sys-enter-2-BQoPN53b.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DluL2nJ0.js";import"./main-BL2DbqAR.js";import"./index-k33BeIu6.js";import"./Tag-Bt4eSfIf.js";import"./sys-help-2-DkPv2GRC.js";import"./index-DfEG_6DA.js";import"./Link-Cee8M4pE.js";import"./index-CfE5ChDC.js";import"./Popover-8R4fWEnb.js";import"./PopupsCommon.css-BJYIHzRz.js";import"./FocusableElements-B22KwyXz.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D42cNNcx.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CutcZLZM.js";import"./client-lwzJIAjg.js";import"./copy-DIb74NtX.js";import"./copy-DCGapvEg.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-ROSiskjY.js";import"./I18nStore-DI-J8Q63.js";import"./useStylesheet-hr5H-IMi.js";import"./index-CXLzbFR8.js";import"./index-DXHKslqi.js";import"./Label-BvuET2bs.js";import"./index-BwPIj-od.js";import"./index-CJHgPl-E.js";import"./Text-BqkjUVZl.js";import"./addCustomCSSWithScoping-CAH5PFOm.js";import"./index-CpccB1hQ.js";import"./index-W6Ra1GtV.js";import"./BusyIndicator-Bzvv1vPS.js";import"./index-DIc9VXE4.js";import"./index-BVweZtNr.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Ccx1Czlo.js";import"./index-BjvFWlKk.js";import"./Dialog-B_fsBpOR.js";import"./ValueState-Bg0UWejw.js";import"./index-DdfoHH6U.js";import"./ListItemStandard-eRc2_aSf.js";import"./ListItemTemplate-JeTG0QhP.js";import"./List-CN9ySr7V.js";import"./ItemNavigation-BACr7oi9.js";import"./DropIndicator-JalE8IUg.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-B3BffRjR.js";import"./slim-arrow-right-CHh2O4qB.js";import"./RadioButton-DX5fGt8C.js";import"./CheckBox-DKPjfLZ2.js";import"./accept-C4XW-ZGx.js";import"./index-D_2R8d6o.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
