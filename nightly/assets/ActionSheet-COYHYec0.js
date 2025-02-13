import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-Bi4z55BD.js";import"./index-DFIoO4Kt.js";import"./index-CSu8CtW4.js";import{C as s}from"./ControlsWithNote-CTBGSYUv.js";import{D as c}from"./DocsHeader-uRpbguYk.js";import{F as a}from"./CommandsAndQueries-B5bUUDc8.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{C as h,D as e}from"./ActionSheet.stories-CqGkHUpA.js";import"./iframe-CAl86_oT.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime--4q9epG_.js";import"./CustomElementsScope-CyyomP-e.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-D6Kf4Q73.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CqWzJ5OD.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-8rHqpL4B.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-Y-ArvaTy.js";import"./sys-enter-2-BF5QpgF0.js";import"./TagDesign-Dou_yO3g.js";import"./utils-XEG_z2ei.js";import"./main-CiDzSAAF.js";import"./index-DFlSQLOt.js";import"./Tag-DOeo7pGI.js";import"./sys-help-2-B0EpPzfO.js";import"./index-DZn7chrk.js";import"./Link-OnoDOP2-.js";import"./index-B1ltsArG.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CvEkZt0m.js";import"./client-lwzJIAjg.js";import"./copy-CofIAqn3.js";import"./copy-CpGuQhie.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-CDlK1BMa.js";import"./I18nStore-DM4coTEA.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-CzWTYLl1.js";import"./index-BDvw8IBD.js";import"./Label-CcaREzyi.js";import"./index-Dr3HRM_P.js";import"./index-BXuaslDZ.js";import"./Text-DZM5-wj4.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BsIR1pZr.js";import"./BusyIndicator-BoVirFTQ.js";import"./index-CBqWbLU8.js";import"./index-Bf7tkjWv.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./accept-DU7LYMy0.js";import"./delete-BINvPm8p.js";import"./i18n-defaults-DM4q4ZP6.js";import"./utils-CvPq6EGY.js";import"./index-B3H7axzc.js";import"./ResponsivePopover-BWtsigWU.js";import"./Dialog-DsKAEv6q.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
