import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as e}from"./index-Z9suDlzg.js";import"./index-vS7eettY.js";import"./index-qnRJQVoQ.js";import{C as s}from"./ControlsWithNote-BLYzoChM.js";import{D as a}from"./DocsHeader-BTweCqmJ.js";import{F as c}from"./CommandsAndQueries-D9c_V-bH.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BQdI3h8O.js";import{C as l,D as i}from"./Dialog.stories-CYHiCHQu.js";import"./iframe-CyjXMGiF.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DMqncVPl.js";import"./utils-C2XfIY3Y.js";import"./useIsomorphicLayoutEffect-C1EF3yoB.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BzyjfDHJ.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-C9C2dQAU.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DFGxyfr2.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CB2Xqvf8.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BUHLFqRk.js";import"./information-BiCqrnzz.js";import"./sys-enter-2-CHAD7uKM.js";import"./sys-enter-2-DbI-3aq9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CTiFIUnS.js";import"./main-BL2DbqAR.js";import"./index-ZH-RZJzv.js";import"./Tag-BRYgkqac.js";import"./sys-help-2-Cg3brO7T.js";import"./index-B7nGJ2tS.js";import"./Link-DuU4BxE_.js";import"./index-B20XONiy.js";import"./Popover-KVxD3zt0.js";import"./PopupsCommon.css-DbH0sKjP.js";import"./FocusableElements-BTi29GnT.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeJaGaPJ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-lxq_R9wx.js";import"./client-lwzJIAjg.js";import"./copy-D0YprZuO.js";import"./copy-BavmS0zW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DPJokzl1.js";import"./I18nStore-BFxg9tvA.js";import"./useStylesheet-4xWfxLte.js";import"./index-DvtALA7k.js";import"./index-C8zDtCGl.js";import"./Label-dsgxfrkZ.js";import"./index-DW0x8ghk.js";import"./index-CFV8P0hB.js";import"./Text-BzZxAxrt.js";import"./addCustomCSSWithScoping-BOEXtufo.js";import"./index-CwpH1SbG.js";import"./index-Ahxuog19.js";import"./BusyIndicator-B-9XtNdv.js";import"./index--3sYbX0a.js";import"./index-iU1rSOy8.js";import"./AvatarSize-BceVhWoP.js";import"./employee-CpIGAUgT.js";import"./index-MMoIQuLH.js";import"./Dialog-BUTBf08H.js";import"./ValueState-Bg0UWejw.js";import"./index-CYDPwOKI.js";import"./ListItemStandard-B8XftfHR.js";import"./ListItemTemplate-CLgn2WAy.js";import"./List-C-nZjj4f.js";import"./ItemNavigation-DVbu9sly.js";import"./DropIndicator-C6uz4fH0.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-2msMBPW6.js";import"./slim-arrow-right-CgnG9lac.js";import"./RadioButton-EZlJnHWM.js";import"./CheckBox-DYErWeq8.js";import"./accept-DYQK76Td.js";import"./index-CrGTsvK6.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
