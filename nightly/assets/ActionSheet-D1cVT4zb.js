import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-CxZ_aI87.js";import"./index-DuvBkkWn.js";import"./index-Cq3kkiqQ.js";import{C as s}from"./ControlsWithNote-Bdo1Qy3q.js";import{D as c}from"./DocsHeader-5AoZBPkF.js";import{F as a}from"./CommandsAndQueries-B7LPM8l_.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Bnj9fnoW.js";import{C as h,D as e}from"./ActionSheet.stories-Y3OdCEOC.js";import"./iframe-DLcRby_H.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DIBLIPif.js";import"./utils-DKbukTmU.js";import"./useIsomorphicLayoutEffect-BuGJanM4.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Button-BYnClEc8.js";import"./Keys-Df3IBHp2.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-DVlQjg5y.js";import"./parameters-bundle.css-C_3tvNHF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cq5L8-91.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-Cyg2J0QB.js";import"./decline-CkvCC5iV.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-aOc0GfxQ.js";import"./information-B7lIx4H4.js";import"./sys-enter-2-Cn8hrStw.js";import"./sys-enter-2-DXus7nkZ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Dx0niuwW.js";import"./main-rGL2KZiJ.js";import"./index-KpIA7GSc.js";import"./Tag-MzUi0FzG.js";import"./sys-help-2-COroZqns.js";import"./index-DoDMd5jQ.js";import"./Link-Cr8wHvq2.js";import"./index-DM6wTQDx.js";import"./Popover-DWH7u18I.js";import"./PopupsCommon.css-CLlsUzpB.js";import"./FocusableElements-Da8ni1pm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bn2o07mV.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-BSXcFDMH.js";import"./client-lwzJIAjg.js";import"./copy-Bnrg9YBK.js";import"./copy-C92HBupN.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-ghT3qTnY.js";import"./I18nStore-DlsSjWbm.js";import"./useStylesheet-BO3w5Xt1.js";import"./index-DMuT1d_D.js";import"./index-Dbb581IU.js";import"./Label-DMEL6fX-.js";import"./index-Pj1kAMZ-.js";import"./index-Cs_Ztk0v.js";import"./Text-DZiuAp7s.js";import"./addCustomCSSWithScoping-Dkzu7Yq-.js";import"./index-B5N8tz-A.js";import"./index-D1TSxMr6.js";import"./BusyIndicator-CgjmT3Fu.js";import"./index-CKTWv80J.js";import"./index-DN8baC31.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DObyMRaP.js";import"./accept-BUcVz_-s.js";import"./delete-Dc4HWbmC.js";import"./i18n-defaults-dxEyDKPz.js";import"./index-B2fYbYs6.js";import"./ResponsivePopover-BCkoypY8.js";import"./Dialog-DUUAZhby.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
