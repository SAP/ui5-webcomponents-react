import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as m}from"./index-ChplMHeC.js";import{M as n,C as e}from"./index-hZHAzFAL.js";import"./index-CiK-e51e.js";import"./index-A_0wpmQ7.js";import{C as s}from"./ControlsWithNote-CaHtgMf8.js";import{D as c}from"./DocsHeader-CQ3MNcYY.js";import{F as a}from"./CommandsAndQueries-F7oY3bs4.js";import"./index-D23YZj_x.js";import"./WrappingType-CW8URInd.js";import"./Title-Gv3TXXff.js";import{C as d,D as p}from"./Popover.stories-BWl0FIH5.js";import"./iframe-DzOWA1K8.js";import"./index-DJ2M8xrO.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-pt4_FAs2.js";import"./utils-Cc7kMCdT.js";import"./useIsomorphicLayoutEffect-ycvDkpIR.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Button-mNpaFI4J.js";import"./Keys-Can65e7H.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./Icon-BdT1PzT1.js";import"./parameters-bundle.css-BQD_Xb6z.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BmK38KuR.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-CjsTKlnu.js";import"./decline-COfFlC7H.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DaPpOrk_.js";import"./information-CnmWG5u0.js";import"./sys-enter-2-CocGGTHn.js";import"./sys-enter-2-DYJZCTEK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CKdwd20C.js";import"./main-BL2DbqAR.js";import"./index-CBUNCpOB.js";import"./Tag-DIR4S8bz.js";import"./sys-help-2-D2rAenVO.js";import"./index-D4QIma-n.js";import"./Link-_LTgoXxu.js";import"./index-Dmi4gEmW.js";import"./Popover-BepUWsCJ.js";import"./PopupsCommon.css-CggLypH1.js";import"./FocusableElements-CQNfSknU.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-p8jh-9XL.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./DocsRenderer-CFRXHY34-DXAtCZEe.js";import"./client-lwzJIAjg.js";import"./copy-DP3LWvqB.js";import"./copy-D7jhBnDt.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-QtRkCFei.js";import"./index-DoezBL6h.js";import"./I18nStore-m2kuMwIb.js";import"./useStylesheet-hr5H-IMi.js";import"./index-D23_yuAt.js";import"./index-CKbhHRPG.js";import"./Label-CfmyqNzh.js";import"./index-DBeTfgPc.js";import"./index-P5IVNCRm.js";import"./Text-DADVHpsK.js";import"./addCustomCSSWithScoping-Bj4bnd2y.js";import"./index-CpccB1hQ.js";import"./index-BgEfjVIQ.js";import"./BusyIndicator-CHfKtrJh.js";import"./index-BzfJwdfk.js";import"./index-BeJtHrc9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DG3AkCvt.js";import"./settings-C3Ze2cqv.js";import"./index-CVr7Q-In.js";import"./List-D9CITf08.js";import"./ItemNavigation-DAWGiZs_.js";import"./DropIndicator-DYb6BiHt.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-XzXYKyvZ.js";import"./index-DQ_ixK5W.js";import"./ListItemStandard-CWU3xbxB.js";import"./ListItemTemplate-C5X5UxOK.js";import"./ListItemAdditionalText.css-9W0fcPAy.js";import"./slim-arrow-right-DWV1jtaZ.js";import"./RadioButton-BkNGpzKw.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BQ0ONhXv.js";import"./accept-DO2aqySe.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
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
`,o.jsx(a,{})]})}function tr(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{tr as default};
