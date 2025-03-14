import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-zdXs1Etw.js";import{M as p,C as m}from"./index-BJb_M2id.js";import"./index-Ckh4UXjO.js";import"./index-BqNknw2w.js";import{C as s}from"./ControlsWithNote-MbER7-te.js";import{D as c}from"./DocsHeader-BgQisOm3.js";import{F as a}from"./CommandsAndQueries-BLDuAUYk.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import{C as h,D as e}from"./ActionSheet.stories-CSfEQl_A.js";import"./iframe-CdxCY8oT.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-TYk6ziax.js";import"./CustomElementsScope-BUTWMsdD.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CDUAIOHY.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-CJfyoCyo.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DGo6fNOA.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./TagDesign-Ga50IS6u.js";import"./utils-Dhx97Ekp.js";import"./main-BZcY5MQX.js";import"./index-C0P7u1b2.js";import"./Tag-DIF-afEZ.js";import"./sys-help-2-3dHH1qFA.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./index-C4AHKFdV.js";import"./Popover-CYWkC5M7.js";import"./PopupsCommon.css-C4odaWdv.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-CzED_nep.js";import"./copy-BIm13QSs.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index--wwGKOdw.js";import"./I18nStore-DdNtknPF.js";import"./useStylesheet-D-3zc5-n.js";import"./index-JVGOCdcg.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./index-DmVWxwwF.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./preview-BjXjALsJ.js";import"./DocsRenderer-CFRXHY34-COYWOKJi.js";import"./react-18-DGA_MWY9.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./accept-C4wh916l.js";import"./delete-dm4tBIbb.js";import"./i18n-defaults-CCwYnt0d.js";import"./utils-DiTSQB9E.js";import"./index-Bc6TAxJl.js";import"./ResponsivePopover-B1wBYLBj.js";import"./Dialog-BomKBOpU.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
