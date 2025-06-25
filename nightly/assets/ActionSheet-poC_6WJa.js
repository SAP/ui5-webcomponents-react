import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as p,C as m}from"./index-BjaWqMp1.js";import"./index-BRThQ-zg.js";import"./index-BBk6rVdl.js";import{C as s}from"./ControlsWithNote-C23LR9Rg.js";import{D as c}from"./DocsHeader-zHBab7WF.js";import{F as a}from"./CommandsAndQueries-CuXL37Qx.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import{C as h,D as e}from"./ActionSheet.stories-BUFHLCh8.js";import"./iframe-DnxV6uAR.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-CTdjW1dy.js";import"./CustomElementsScope-BI7irdrP.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CddyUUJt.js";import"./Keys-BxH5KEHJ.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-Cq4WdPfD.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CywStIph.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Bwpyempw.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./Tag-BGp0HQg1.js";import"./sys-help-2-CdqLSqXL.js";import"./utils-gQM8SGNu.js";import"./main-DirjBNUD.js";import"./index-twTfcK9t.js";import"./index-Xv6FModC.js";import"./Link-BvcafW2a.js";import"./index-DuSPh-fE.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-iFL-9i7I.js";import"./copy-DVi57tol.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-CF5_QR0w.js";import"./I18nStore-C5X80oUZ.js";import"./useStylesheet-4DYJndCZ.js";import"./index-gAuJDAYx.js";import"./index-BHoJB3Bj.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./preview-LsbV81HH.js";import"./DocsRenderer-CFRXHY34-Nx8Ae2ij.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./accept-COVgYUg4.js";import"./delete--riPWoVH.js";import"./i18n-defaults-JJaa3qr3.js";import"./utils-Dlhtd8PN.js";import"./index-DCnGz3Ti.js";import"./ResponsivePopover-CSpqicr4.js";import"./Dialog-MPSfdmEc.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
