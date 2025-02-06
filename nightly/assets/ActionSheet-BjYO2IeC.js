import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-ChplMHeC.js";import{M as p,C as m}from"./index-BD2q3-29.js";import"./index-CiK-e51e.js";import"./index-88FwNwn3.js";import{C as s}from"./ControlsWithNote-DmAwTTFi.js";import{D as c}from"./DocsHeader-QctVHOcQ.js";import{F as a}from"./CommandsAndQueries-9gzZLIKr.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Gv3TXXff.js";import{C as h,D as e}from"./ActionSheet.stories-CfKQwsjO.js";import"./iframe-DNN03QOX.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-pt4_FAs2.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-mNpaFI4J.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-BdT1PzT1.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BmK38KuR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-COfFlC7H.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DaPpOrk_.js";import"./information-CnmWG5u0.js";import"./sys-enter-2-CocGGTHn.js";import"./sys-enter-2-DYJZCTEK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-B40jFogj.js";import"./main-BL2DbqAR.js";import"./index-Du41aDvI.js";import"./Tag-DIR4S8bz.js";import"./sys-help-2-D2rAenVO.js";import"./index-D4QIma-n.js";import"./Link-_LTgoXxu.js";import"./index-DWe8hux9.js";import"./Popover-BepUWsCJ.js";import"./PopupsCommon.css-CggLypH1.js";import"./FocusableElements-CQNfSknU.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-p8jh-9XL.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-ChRyFkkt.js";import"./client-lwzJIAjg.js";import"./copy-DP3LWvqB.js";import"./copy-D7jhBnDt.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DVD5IwgI.js";import"./I18nStore-m2kuMwIb.js";import"./useStylesheet-hr5H-IMi.js";import"./index-BMK-kPJD.js";import"./index-CKbhHRPG.js";import"./Label-CfmyqNzh.js";import"./index-BHafqV2p.js";import"./index-P5IVNCRm.js";import"./Text-DADVHpsK.js";import"./addCustomCSSWithScoping-Bj4bnd2y.js";import"./index-CpccB1hQ.js";import"./index-BgEfjVIQ.js";import"./BusyIndicator-CHfKtrJh.js";import"./index-BzfJwdfk.js";import"./index-BeJtHrc9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DG3AkCvt.js";import"./accept-DO2aqySe.js";import"./delete-C3qMdqrC.js";import"./i18n-defaults-3zSCpOMO.js";import"./index-CsGmsy0K.js";import"./ResponsivePopover-DoTBVH97.js";import"./Dialog-BUADSCKL.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
