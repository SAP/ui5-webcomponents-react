import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-BEiL25xW.js";import"./index-wLoBup_M.js";import"./index-D6yo0R9M.js";import{C as s}from"./ControlsWithNote-U9zzB3kg.js";import{D as c}from"./DocsHeader-DppaOH9Z.js";import{F as a}from"./CommandsAndQueries-DGdP9OVU.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-COB9QmMt.js";import{C as h,D as e}from"./ActionSheet.stories-Bk5LxtVQ.js";import"./iframe-_Nt44aO9.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-LqdGbSZi.js";import"./utils-BWqf_uAM.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-C6xPwCPp.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-CA9P0PMV.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-DS5kSsC-.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-g3O-RcN7.js";import"./i18n-defaults-CifGXSvE.js";import"./information-BpAjLqqt.js";import"./information-DVLmtQkV.js";import"./sys-enter-2-CfLvVMjo.js";import"./sys-enter-2-DdEQw2xQ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-ObRRA7iZ.js";import"./main-BL2DbqAR.js";import"./index-ClHleSwL.js";import"./Tag-C_HjJuC-.js";import"./sys-help-2-BQVcEmH1.js";import"./index-BM4FQHBF.js";import"./Link-iWVapVlB.js";import"./index-Cr32hUX_.js";import"./Popover-BAiQOiUL.js";import"./PopupsCommon.css-2ZmbiFFx.js";import"./FocusableElements-C_2yNLne.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pNyAs-as.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-CVhhhjnl.js";import"./client-lwzJIAjg.js";import"./copy-BecmeJfP.js";import"./copy-B1GXw-vf.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-C-CEUaPt.js";import"./I18nStore-BQYkzCly.js";import"./useStylesheet-hr5H-IMi.js";import"./index-BMK-kPJD.js";import"./index-Dwb1LPrJ.js";import"./Label-Bwow4Hgz.js";import"./index-DWbw-aO0.js";import"./index-Cimm6LhF.js";import"./Text-CTqM3z3y.js";import"./addCustomCSSWithScoping-BtnQqIMN.js";import"./index-D04AiznP.js";import"./index-Cny83cUZ.js";import"./BusyIndicator-BhVM01kP.js";import"./index-BeQoBTx7.js";import"./index-DM-FMAOd.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DyoIl86o.js";import"./accept-Cmszjlf_.js";import"./delete-DL7MxRol.js";import"./i18n-defaults-UInS-fnV.js";import"./index-DuWCAtbK.js";import"./ResponsivePopover-vhq84JNR.js";import"./Dialog-DFK1QIb3.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
