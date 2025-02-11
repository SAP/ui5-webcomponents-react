import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-Z9suDlzg.js";import"./index-vS7eettY.js";import"./index-qnRJQVoQ.js";import{C as s}from"./ControlsWithNote-BLYzoChM.js";import{D as c}from"./DocsHeader-BTweCqmJ.js";import{F as a}from"./CommandsAndQueries-D9c_V-bH.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BQdI3h8O.js";import{C as h,D as e}from"./ActionSheet.stories-BV1C8FB8.js";import"./iframe-CyjXMGiF.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DMqncVPl.js";import"./utils-C2XfIY3Y.js";import"./useIsomorphicLayoutEffect-C1EF3yoB.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BzyjfDHJ.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-C9C2dQAU.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DFGxyfr2.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CB2Xqvf8.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BUHLFqRk.js";import"./information-BiCqrnzz.js";import"./sys-enter-2-CHAD7uKM.js";import"./sys-enter-2-DbI-3aq9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CTiFIUnS.js";import"./main-BL2DbqAR.js";import"./index-ZH-RZJzv.js";import"./Tag-BRYgkqac.js";import"./sys-help-2-Cg3brO7T.js";import"./index-B7nGJ2tS.js";import"./Link-DuU4BxE_.js";import"./index-B20XONiy.js";import"./Popover-KVxD3zt0.js";import"./PopupsCommon.css-DbH0sKjP.js";import"./FocusableElements-BTi29GnT.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeJaGaPJ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-lxq_R9wx.js";import"./client-lwzJIAjg.js";import"./copy-D0YprZuO.js";import"./copy-BavmS0zW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DPJokzl1.js";import"./I18nStore-BFxg9tvA.js";import"./useStylesheet-4xWfxLte.js";import"./index-DvtALA7k.js";import"./index-C8zDtCGl.js";import"./Label-dsgxfrkZ.js";import"./index-DW0x8ghk.js";import"./index-CFV8P0hB.js";import"./Text-BzZxAxrt.js";import"./addCustomCSSWithScoping-BOEXtufo.js";import"./index-CwpH1SbG.js";import"./index-Ahxuog19.js";import"./BusyIndicator-B-9XtNdv.js";import"./index--3sYbX0a.js";import"./index-iU1rSOy8.js";import"./AvatarSize-BceVhWoP.js";import"./employee-CpIGAUgT.js";import"./accept-DYQK76Td.js";import"./delete-BmUud1_m.js";import"./i18n-defaults-ChHTGB6j.js";import"./index-SF-23ZU-.js";import"./ResponsivePopover-Ct_gfHhj.js";import"./Dialog-BUTBf08H.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
`,t.jsx(c,{subComponents:["Button"]}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(m,{of:e}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:e}),`
`,t.jsx(o.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,t.jsx("br",{}),`
`,t.jsxs(o.p,{children:["You can open and close the ",t.jsx(o.code,{children:"ActionSheet"})," component in a declarative way using the ",t.jsx(o.code,{children:"open"})," and ",t.jsx(o.code,{children:"opener"})," prop."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,t.jsx(o.p,{children:t.jsxs(o.strong,{children:["Opening an ",t.jsx(o.code,{children:"ActionSheet"})," by reference"]})}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",t.jsx(o.code,{children:"id"})," to the ",t.jsx(o.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,t.jsx(a,{})]})}function zt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{zt as default};
