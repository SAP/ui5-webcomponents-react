import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-CdT5jJZZ.js";import"./index-BWY3TFGt.js";import"./index-BkQKeFEP.js";import{C as s}from"./ControlsWithNote-CWVC84-H.js";import{D as c}from"./DocsHeader-C6qYJjvu.js";import{F as a}from"./CommandsAndQueries-BXf-dk22.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-BR0HRFMn.js";import{C as h,D as e}from"./ActionSheet.stories-Dp0w_qWF.js";import"./iframe-DhiZQmNe.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./jsx-runtime-DJfzgo3Z.js";import"./CustomElementsScope-Cnxnu_QK.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-ClmCy2Cm.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-9zGTEZoy.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BdH9fu8C.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-CK9cTtHa.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DJOHIqln.js";import"./information-ix6q05KE.js";import"./sys-enter-2-FqE9Jd9Z.js";import"./sys-enter-2-FVzsVtg3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Cq9cSzlI.js";import"./main-CiDzSAAF.js";import"./index-BVASCLFV.js";import"./Tag-5S7Tw76M.js";import"./sys-help-2-Bc0SeYbg.js";import"./index-DhvWoo7_.js";import"./Link-BMGGPz7B.js";import"./index-Bfdb1dFM.js";import"./Popover-ChT-u0ao.js";import"./PopupsCommon.css-_Z_CYCJm.js";import"./FocusableElements-BnnVWUNQ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C0NcOxBw.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DBIv7lnu.js";import"./client-lwzJIAjg.js";import"./copy-SwveN06M.js";import"./copy-BHzTzCpZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-D4qgphJw.js";import"./I18nStore-Ck_ZDoO_.js";import"./useStylesheet-D6kLlLz-.js";import"./index-CqnluFWg.js";import"./index-BmN7WUzF.js";import"./Label-Cv3ZI2wV.js";import"./index-DZJWwrpE.js";import"./index-DSrRVUVn.js";import"./Text-Bdc-nFmb.js";import"./addCustomCSSWithScoping-e6wN0F3P.js";import"./index-BTrRnRp2.js";import"./BusyIndicator-D3N-k1mY.js";import"./index-Bur18C1c.js";import"./index-S7gxAvta.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Bfg7DU9E.js";import"./accept-CfjZTJE8.js";import"./delete-7nycc0kZ.js";import"./i18n-defaults-Ju5_TAzg.js";import"./utils-C_qahdzF.js";import"./index-ySTggkyv.js";import"./ResponsivePopover-DdGNwQAk.js";import"./Dialog-CLQZBkJ1.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
