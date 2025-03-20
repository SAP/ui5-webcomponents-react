import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DpYXPI8c.js";import{M as p,C as m}from"./index-BQVsWipE.js";import"./index-BPgdWBHk.js";import"./index-C-T8u1Nb.js";import{C as s}from"./ControlsWithNote-BsOQDvJ2.js";import{D as c}from"./DocsHeader-om_eON2j.js";import{F as a}from"./CommandsAndQueries-DDzADXOk.js";import"./index-ChI72X44.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{C as h,D as e}from"./ActionSheet.stories-DOME73pC.js";import"./iframe-CKDaW90P.js";import"./index-DnYn5RTv.js";import"./index-BS9IDQLN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-DITkwERB.js";import"./CustomElementsScope-CRlaEhjH.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhJpItN3.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-g4jJGwIi.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CtkDPpba.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DfFEda3n.js";import"./main-BZcY5MQX.js";import"./index-bxj-dcWC.js";import"./Tag-DJG7ubt1.js";import"./sys-help-2-WHz-04ii.js";import"./index-C5x9Zqi4.js";import"./Link-C_1Qeegk.js";import"./index-vVWMke_Z.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-BcmnvuMK.js";import"./copy-BjWKS8Rq.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-DfYxHRnX.js";import"./index-Dx_3Pfp7.js";import"./I18nStore-BBWtp4Wg.js";import"./useStylesheet-BYtqX5T7.js";import"./index-DqiEy2LY.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./preview-CfaXNrRA.js";import"./DocsRenderer-CFRXHY34-C2fymdDQ.js";import"./react-18-B55prW7j.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./accept-DP3JdRgF.js";import"./delete-DGsNL-6V.js";import"./i18n-defaults-d97UCXvF.js";import"./utils-C5-ShS2w.js";import"./index-C4dXEQC3.js";import"./ResponsivePopover-VLmN0bUg.js";import"./Dialog-CxuAGvin.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
