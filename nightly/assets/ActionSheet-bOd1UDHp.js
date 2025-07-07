import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{M as p,C as m}from"./index-ChnLwV8J.js";import"./index-DhAwSGME.js";import"./index-CoW7zDxG.js";import{C as s}from"./ControlsWithNote-DbxJAaBo.js";import{D as c}from"./DocsHeader-BSaR920q.js";import{F as a}from"./CommandsAndQueries-Dr4x6rjG.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Bkeyeot9.js";import{C as h,D as e}from"./ActionSheet.stories-DCLlfbe3.js";import"./iframe-DO6ohzDt.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-7DBFq8Nb.js";import"./CustomElementsScope-CL9zjcNa.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-CmBjANX3.js";import"./Keys-CLf_QmYW.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BZ5EcdIf.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DsLvoCTe.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-D1yurQHO.js";import"./decline-CtrqdeOl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-B6RSzyEp.js";import"./information-D1jL324h.js";import"./sys-enter-2-DS9n4Dub.js";import"./sys-enter-2-A7Y23Pfh.js";import"./alert-DnTkm5F5.js";import"./Tag-afvhVdQ_.js";import"./sys-help-2-BWOTEP1y.js";import"./utils-BPMWvBjZ.js";import"./main-Dn6sLQP9.js";import"./index-e5WK7n4l.js";import"./index-stf6IIT3.js";import"./Link-5JEABESN.js";import"./index-B7LmkvXE.js";import"./Popover-D2Ha4YTk.js";import"./PopupsCommon.css-CIF0SfCa.js";import"./FocusableElements-Dc0aSsUl.js";import"./isElementHidden-gS67o0pl.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Ccnh5zsM.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./copy-EaiX1lyC.js";import"./copy-ByMwA9ho.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-BG9P-NK7.js";import"./index-B7Jv4B9M.js";import"./I18nStore-DeTYyh4o.js";import"./useStylesheet-DBqLMi8E.js";import"./index-BOHyD95m.js";import"./index-CR79vD-q.js";import"./Label-CMG0rVlp.js";import"./index-BtDHGh6c.js";import"./index-CXHwHWL0.js";import"./Text-CteZtvAO.js";import"./preview-BTEmIzJj.js";import"./DocsRenderer-CFRXHY34-t3055mbn.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-BTrjrnXc.js";import"./index-qwwFDXH5.js";import"./BusyIndicator-eqRCVs2M.js";import"./index-D0D5cipM.js";import"./index-Cf_GJ9tv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzbMOLEH.js";import"./accept-BRic3XtZ.js";import"./delete-DzwJl-En.js";import"./i18n-defaults-BN3FgtV3.js";import"./utils-HgH0UWmR.js";import"./index-D_CpyKt2.js";import"./ResponsivePopover-DqKz3OLZ.js";import"./Dialog-D-LeMYyq.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
