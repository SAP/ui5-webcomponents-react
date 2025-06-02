import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as p,C as m}from"./index-DwQdFvIa.js";import"./index-Wwh2XK_K.js";import"./index-eywhulWo.js";import{C as s}from"./ControlsWithNote-DnjekKzU.js";import{D as c}from"./DocsHeader-C_SJUpwK.js";import{F as a}from"./CommandsAndQueries-QJH5hqkd.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bi6E7_f2.js";import{C as h,D as e}from"./ActionSheet.stories-D-k1gO1M.js";import"./iframe-BodWuo9h.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-gx_Zcjo3.js";import"./CustomElementsScope-CjZbIYTD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BXzXg70H.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CZw5gRks.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-8xifowfb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BCxYP733.js";import"./decline-BwbUHmi7.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-Beb07qW6.js";import"./information-DPOcXyRn.js";import"./sys-enter-2-SJ-ADG9s.js";import"./sys-enter-2-3iNjTkh9.js";import"./alert-OoqNCaQj.js";import"./Tag-ZW7Pmuip.js";import"./sys-help-2-RmNMPhxT.js";import"./utils-CsbSAS93.js";import"./main-DnREbZ5I.js";import"./index-BCiGHEFX.js";import"./index-vsJB7vv1.js";import"./Link-koP0Kb07.js";import"./index-DMDy6m5O.js";import"./Popover-inHmHWag.js";import"./PopupsCommon.css-C6QW1NU3.js";import"./FocusableElements-B0ox-u2n.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DeuUg-iv.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CbwaFUHa.js";import"./copy-1xAMALOS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-DI6UEav6.js";import"./I18nStore-XmjZR7rr.js";import"./useStylesheet-DUe1LpVj.js";import"./index-Dmm22w00.js";import"./index-BqcJKXqe.js";import"./Label-C4zr6Ram.js";import"./index-ClLk4aGU.js";import"./index-QUg1MCMZ.js";import"./Text-DD-uv6LV.js";import"./preview-a9U1wPRT.js";import"./DocsRenderer-CFRXHY34-DrXPYIMw.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-PCpHaHtG.js";import"./index-B-FylexC.js";import"./BusyIndicator-E9s5m7fE.js";import"./index-BP9QLuQO.js";import"./index-BPx08ejK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-qIXMnRwj.js";import"./accept-tKQJV64V.js";import"./delete-h-db6HRa.js";import"./i18n-defaults-DCll23ma.js";import"./utils-D3kWNUYF.js";import"./index-CLBja_rE.js";import"./ResponsivePopover-BakS0Idw.js";import"./Dialog-DFBvxmpv.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
