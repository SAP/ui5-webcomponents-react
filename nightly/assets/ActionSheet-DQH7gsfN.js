import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as p,C as m}from"./index-B_-I3M-t.js";import"./index-aiOo9W_a.js";import"./index-D_6NHSCO.js";import{C as s}from"./ControlsWithNote-C28HaDjU.js";import{D as c}from"./DocsHeader-DxxT2-q1.js";import{F as a}from"./CommandsAndQueries-DX407f5G.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-xNG2nZLh.js";import{C as h,D as e}from"./ActionSheet.stories-CeqscJdE.js";import"./iframe-Bbgg2MHh.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-CkEx_Gfk.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-DcNvBpEn.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BexaehQh.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DOGhZSxR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-B158X0Y5.js";import"./decline-zF6-_htN.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-a8ApNaQO.js";import"./information-DmA-zxas.js";import"./sys-enter-2-DU2G_wE6.js";import"./sys-enter-2-CbaoLfaf.js";import"./alert-CeIMTDH_.js";import"./TagDesign-Ga50IS6u.js";import"./utils-WyWM7JU4.js";import"./main-DnREbZ5I.js";import"./index-DVwdyzd9.js";import"./Tag-DUc97KOd.js";import"./sys-help-2-i21-KsxS.js";import"./index-D9S9JAEE.js";import"./Link-CBPPqDB9.js";import"./index-D_lPDdUa.js";import"./Popover-eNK7pDla.js";import"./PopupsCommon.css-DXmEAn4P.js";import"./FocusableElements-DDPXQQfz.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DS2o_9u5.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-C8Wa9dhW.js";import"./copy-DmqZtkbO.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-C8N0WO0r.js";import"./I18nStore-tbyxgrjv.js";import"./useStylesheet-DUe1LpVj.js";import"./index-BFqlvNkW.js";import"./index-Bjofktik.js";import"./Label-BrFTKjrK.js";import"./index-dNG4P2z4.js";import"./index-BxLcq94m.js";import"./Text-CNWDrMdn.js";import"./preview-ZMpPjZe6.js";import"./DocsRenderer-CFRXHY34-RFlV8d9E.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B73Gg2hE.js";import"./index-CD5x5g4B.js";import"./BusyIndicator-vKEUjaWy.js";import"./index-8fyqcNlw.js";import"./index-DOaWR8S5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BtfkId0O.js";import"./accept-W9f43P7H.js";import"./delete-DMvbfijC.js";import"./i18n-defaults-BfrFKt2A.js";import"./utils-D3kWNUYF.js";import"./index-BiHE_w2X.js";import"./ResponsivePopover-DdHf6Gx6.js";import"./Dialog-DYMZoMI2.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
`,t.jsx(a,{})]})}function Gt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Gt as default};
