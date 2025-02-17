import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-zdXs1Etw.js";import{M as n,C as e}from"./index-BfYXpdUP.js";import"./index-CCpUMy6k.js";import"./index-g2nVdmjV.js";import{C as s}from"./ControlsWithNote-Da0_FOa5.js";import{D as a}from"./DocsHeader-Dl8RcUPF.js";import{F as c}from"./CommandsAndQueries-44QtruFn.js";import"./index-C--kS4iy.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BDxE6jlm.js";import{C as l,D as i}from"./Dialog.stories-DX9gKDwk.js";import"./iframe-BIu3RQRi.js";import"./index-DJcrgQOn.js";import"./index-B-pEBbkX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-28PG-PhA.js";import"./CustomElementsScope-D32jWln6.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-BJcyuOZ-.js";import"./Keys-BF9NgJbR.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-BA-Z5X-C.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DBaa6sR8.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-DIUd5-_G.js";import"./decline-B-7r8h1x.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-DKw70c9J.js";import"./information-CDoXjDdi.js";import"./sys-enter-2-DBhtllGR.js";import"./sys-enter-2-BRVWDnOR.js";import"./TagDesign-Ga50IS6u.js";import"./utils-CdOaKA-E.js";import"./main-CiDzSAAF.js";import"./index-Bt1-BK1s.js";import"./Tag-B3qkhm6Z.js";import"./sys-help-2-BfevxhM3.js";import"./index-CBa4g496.js";import"./Link-wJsXaU9N.js";import"./index-BEp0rhGg.js";import"./Popover-vrquhgcM.js";import"./PopupsCommon.css-CFYCSkNV.js";import"./FocusableElements-Clvab7V1.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C5DtzTqb.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CgcsYu77.js";import"./client-Wx5G3KSE.js";import"./copy-CiJ_0mNd.js";import"./copy-C343vs9R.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-Bzt3eeAv.js";import"./index-U2zNqH-T.js";import"./I18nStore-CY8kcvKW.js";import"./useStylesheet-B5S_P2i6.js";import"./index-Bx3SO0r_.js";import"./index-7k5z3473.js";import"./Label-D_KOrpSt.js";import"./index-DTbqhkR9.js";import"./index-u200OysQ.js";import"./Text-BCbUq7g2.js";import"./addCustomCSSWithScoping-Cml1L90m.js";import"./index-BFa74pi2.js";import"./BusyIndicator-BZvDM_dq.js";import"./index-DeJkSj18.js";import"./index-BaltLl-X.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmJW4hiT.js";import"./index-nqtITH3l.js";import"./Dialog-xFDT8izC.js";import"./ValueState-Bg0UWejw.js";import"./index-DlgXmFTv.js";import"./ListItemStandard-C-qhbpwT.js";import"./ListItemTemplate-BIjQw8tq.js";import"./edit-0TLmLc2x.js";import"./List-CWNH_0Jr.js";import"./ItemNavigation-CO3t4zxH.js";import"./DropIndicator-BcMQTOP8.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-DzYrn4dN.js";import"./slim-arrow-right-BQ9pFoYB.js";import"./RadioButton-CGq_6auL.js";import"./CheckBox-D_T83nsd.js";import"./accept-BMfVE8YF.js";import"./index-C7Snl1O-.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
