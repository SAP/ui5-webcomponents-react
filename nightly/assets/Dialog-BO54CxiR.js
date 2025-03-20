import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DpYXPI8c.js";import{M as n,C as e}from"./index-e7Zhxu_0.js";import"./index-BPgdWBHk.js";import"./index-CvJl4bqF.js";import{C as s}from"./ControlsWithNote-BzrcQHs3.js";import{D as a}from"./DocsHeader-B1wtyvLQ.js";import{F as c}from"./CommandsAndQueries-BgX1uaMu.js";import"./index-ChI72X44.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{C as l,D as i}from"./Dialog.stories-D5LenAxm.js";import"./iframe-Deq_SyRJ.js";import"./index-DnYn5RTv.js";import"./index-BS9IDQLN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-DITkwERB.js";import"./CustomElementsScope-CRlaEhjH.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhJpItN3.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-g4jJGwIi.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CtkDPpba.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./TagDesign-Ga50IS6u.js";import"./utils-BNGS0N83.js";import"./main-BZcY5MQX.js";import"./index-bxj-dcWC.js";import"./Tag-DJG7ubt1.js";import"./sys-help-2-WHz-04ii.js";import"./index-C5x9Zqi4.js";import"./Link-C_1Qeegk.js";import"./index-vVWMke_Z.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-BcmnvuMK.js";import"./copy-BjWKS8Rq.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-DfYxHRnX.js";import"./index-BGJQ1I_q.js";import"./I18nStore-BBWtp4Wg.js";import"./useStylesheet-BYtqX5T7.js";import"./index-DqiEy2LY.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./preview-DYdIQM0b.js";import"./DocsRenderer-CFRXHY34-dc20FLG1.js";import"./react-18-B55prW7j.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./index--oYoU1rB.js";import"./Dialog-CxuAGvin.js";import"./ValueState-Bg0UWejw.js";import"./index-D8qQxVVT.js";import"./ListItemStandard-DJ76zjeJ.js";import"./ListItemTemplate-CJUKWeYS.js";import"./edit-CSRQM9Zi.js";import"./List-hzHRypsE.js";import"./ItemNavigation-DKmCjzmX.js";import"./handleDrop-DpfFniv0.js";import"./DropIndicator-Cu7AtIKy.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-ghsuw5ZR.js";import"./TabbableElements-XzXYKyvZ.js";import"./ListItemAdditionalText.css-_rrKfffM.js";import"./slim-arrow-right-CeL61nQX.js";import"./RadioButton-mPAIpEot.js";import"./CheckBox-BFFJa24b.js";import"./accept-DP3JdRgF.js";import"./index-DYqvoVQr.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(c,{})]})}function mt(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{mt as default};
