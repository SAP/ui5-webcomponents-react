import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as i}from"./index-BxVt_j7t.js";import{ae as p,af as m}from"./index-DmFLHL1H.js";import"./index-Ds-D_dgM.js";import"./index-BQwShcWx.js";import{C as s}from"./ControlsWithNote-CgWSKmFI.js";import{D as c}from"./DocsHeader-BRSQeXwg.js";import{F as a}from"./CommandsAndQueries-CgULAo7G.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-Cg15KVE0.js";import{C as h,D as e}from"./ActionSheet.stories-BBs8i3Yc.js";import"./iframe-Ch0MIHMs.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CT6sGXpP.js";import"./utils-B6HmSsR9.js";import"./useIsomorphicLayoutEffect-CPnToY9g.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-W0cWTBMa.js";import"./Keys-D3vKxxqj.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./Icon-Bi16vwdR.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-vhX1-CiW.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DUPuUXel.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CS9fXslf.js";import"./information-BsqVeb3I.js";import"./sys-enter-2-CVBeUzlC.js";import"./sys-enter-2-CkrUrPs2.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BDGwSrv1.js";import"./main-BxOG2qYD.js";import"./index-CquvF64q.js";import"./Tag-BjPnfSgo.js";import"./sys-help-2-gwkXZKN7.js";import"./index-BdmnTn09.js";import"./Link-D_K-FEuO.js";import"./index-BnqhWvMZ.js";import"./Popover-DvifCVMh.js";import"./PopupsCommon.css-DbrNyYP7.js";import"./FocusableElements-BL5Nu5KZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BMwFvnQB.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./chunk-NUUEMKO5-OBxVOJSq.js";import"./client-DPlujwLe.js";import"./copy-CEy-JxjH.js";import"./copy-CJontbyU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-C0KOEO5C.js";import"./I18nStore-CxkIikp_.js";import"./useStylesheet-Dh9nQNvU.js";import"./index-vZm3PJfn.js";import"./index-DLhgh7pX.js";import"./Label-DxVZab8w.js";import"./index-BTnNaaMX.js";import"./index-tU3gglsM.js";import"./Text-DlA3cMIs.js";import"./addCustomCSSWithScoping-DS2p-yck.js";import"./index-DZ9AgWRI.js";import"./BusyIndicator-DZaR2rPi.js";import"./index-DuEzSjuU.js";import"./index-DFjoDZxe.js";import"./AvatarSize-BceVhWoP.js";import"./employee-JxeorwAe.js";import"./accept-wrewqbO5.js";import"./delete-5qhHC7Hk.js";import"./i18n-defaults-CYX8P-xo.js";import"./index-dEwBT39K.js";import"./ResponsivePopover-CUGN3zl8.js";import"./Dialog-CBulCKRO.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
`,t.jsx(a,{})]})}function qt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{qt as default};
