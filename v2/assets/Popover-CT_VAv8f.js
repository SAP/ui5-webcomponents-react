import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-B5Ip8tK9.js";import{M as n,C as e}from"./index-En5gTA81.js";import"./index-BgnWomVF.js";import"./index-BBZ5nfg_.js";import{C as s}from"./ControlsWithNote-D2OFh9Rt.js";import{D as c}from"./DocsHeader-CI3abdBh.js";import{F as a}from"./CommandsAndQueries-Cl0zdVfd.js";import"./index-U0ga5oGA.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-MRVfrrA9.js";import{C as d,D as p}from"./Popover.stories-DiVx3n5k.js";import"./iframe-CqteU8MF.js";import"./index-B8m469-U.js";import"./index-BVR6w1bU.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-BhvuzFo7.js";import"./CustomElementsScope-Bim9ocLE.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BlFaFbRM.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-C0UcZWk2.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-v50zrNfc.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-DYSKo6LW.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CnxOfLPM.js";import"./information-DbtMcSD6.js";import"./sys-enter-2-CTMCSnyQ.js";import"./sys-enter-2-Ciletl9c.js";import"./TagDesign-Ga50IS6u.js";import"./utils-PA3-5bEg.js";import"./main-BZcY5MQX.js";import"./index-DaoYA3yQ.js";import"./Tag-BTr-mxkm.js";import"./sys-help-2-COnLU0C4.js";import"./index-iA4rRkZi.js";import"./Link-BveVQiXd.js";import"./index-DgC-Wkyw.js";import"./Popover-CrUg6BDL.js";import"./PopupsCommon.css-CkrnA4gF.js";import"./FocusableElements-DCoyCYrA.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B16Uz3cm.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-D-zU-_A-.js";import"./copy-bdWnQ-6t.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-lIiVb8Ys.js";import"./index-Q_csS-Ey.js";import"./I18nStore-BFRjgGfw.js";import"./useStylesheet-BbE0XC0n.js";import"./index-D0Y5MYDY.js";import"./index-noTXb15B.js";import"./Label-Iv8Am_pm.js";import"./index-n4YNqY3D.js";import"./index-j5LXKHzi.js";import"./Text-fxG8xjHY.js";import"./preview-BkifMnCL.js";import"./DocsRenderer-CFRXHY34-DNSujVG0.js";import"./react-18-SRpBHcoT.js";import"./addCustomCSSWithScoping-Cgfw5Re6.js";import"./index-ThksJ1V-.js";import"./BusyIndicator-DQ6Oocfo.js";import"./index-CnihKeIw.js";import"./index-DDwnn4pC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ba84kQhl.js";import"./settings-DPXMHzWY.js";import"./index-CoIcuDxY.js";import"./List-D0S5TnB8.js";import"./ItemNavigation-DjLK4Lar.js";import"./handleDrop-B9DcvvxB.js";import"./DropIndicator-Cr_UsxJu.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./ListItemGroup-BH9fbE2k.js";import"./TabbableElements-XzXYKyvZ.js";import"./index-D8Dzfwcy.js";import"./ListItemStandard-B00t2Nl9.js";import"./ListItemTemplate-BWhOdM3M.js";import"./edit-DIXtZHAg.js";import"./ListItemAdditionalText.css-BcsepVCA.js";import"./slim-arrow-right-tjC5xpR0.js";import"./RadioButton-gTtQu89K.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-B4wLQqTV.js";import"./accept-vHOuwrw1.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(c,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(a,{})]})}function ir(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{ir as default};
