import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-BgngL2Fx.js";import"./index-Bxqqfnvk.js";import"./index-BqpbEQpv.js";import{C as s}from"./ControlsWithNote-BsiVkhFP.js";import{D as c}from"./DocsHeader-CdUWXQa0.js";import{F as a}from"./CommandsAndQueries-CoJjlOqe.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-DPrdYQMV.js";import{C as h,D as e}from"./ActionSheet.stories-BAOW355B.js";import"./iframe-Bz427A0g.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-XJjz10u8.js";import"./utils-DyMdBfPm.js";import"./useIsomorphicLayoutEffect-Bu4xop1x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-2px5KXGd.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-D3cRfWaZ.js";import"./parameters-bundle.css-DSUsAvJy.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CGW8Xrj5.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-DP6kMU1p.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Bmgd6dpL.js";import"./information-8BjDCJTf.js";import"./sys-enter-2-BcpVUItX.js";import"./sys-enter-2-KjprDONg.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BwV8XyOh.js";import"./main-BL2DbqAR.js";import"./index-C6X542R2.js";import"./Tag-Bt0ipejr.js";import"./sys-help-2-CwdCzKO6.js";import"./index-AZQF7cRn.js";import"./Link-BJ2ET1br.js";import"./index-DIZ1yifi.js";import"./Popover-BMI_rbJM.js";import"./PopupsCommon.css-B7Lyl-LM.js";import"./FocusableElements-dXKcAzjx.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DyOJZiXp.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-Dj_zrGoR.js";import"./client-lwzJIAjg.js";import"./copy-0qMnoswg.js";import"./copy-d7htsAK2.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-CgRbqk_5.js";import"./I18nStore-CWEJ68aw.js";import"./useStylesheet-bO_9Zfr-.js";import"./index-DhLCN0Xl.js";import"./index-B2xVvqo6.js";import"./Label-VZeu70kx.js";import"./index-Dvk6KQni.js";import"./index-CosszrBQ.js";import"./Text-yuhY-WXa.js";import"./addCustomCSSWithScoping-CBi_hReC.js";import"./index-C60mQ2wP.js";import"./index-BfJ8Dvmz.js";import"./BusyIndicator-3eE4S65a.js";import"./index-CjbB3fTU.js";import"./index-DCp58fk9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-heX9Z6a9.js";import"./accept-DPFzyT6s.js";import"./delete-C8j0shih.js";import"./i18n-defaults-BJYukMa1.js";import"./index-CKIF4_g5.js";import"./ResponsivePopover-CJE1U7Uw.js";import"./Dialog-o_QX5f92.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
