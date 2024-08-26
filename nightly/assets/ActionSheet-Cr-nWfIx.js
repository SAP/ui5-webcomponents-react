import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-B3QzLHf_.js";import"./index-DRfkeUYX.js";import{C as s}from"./ControlsWithNote-BYJvhy0X.js";import{D as c}from"./DocsHeader-8echqDW0.js";import{F as a}from"./CommandsAndQueries-Dmj4MMOR.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-VVPV2V2E.js";import{C as h,D as e}from"./ActionSheet.stories-CV6R7SHB.js";import"./iframe-DlkLrGOd.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-6t4MTiZ-.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BwSTHZvs.js";import"./decline-Chobtb_o.js";import"./Icon-CX51DRZ7.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import"./class-map-D9jLILSY.js";import"./Button-ein9a_YJ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-sl2p4TZC.js";import"./TagDesign-Dou_yO3g.js";import"./utils-XiK6YCAG.js";import"./main-BPTHlokf.js";import"./index-Cm_tUheZ.js";import"./Tag-c1CyRsEh.js";import"./sys-help-2-7U7Pl5Aq.js";import"./index-vpkDktJu.js";import"./Popover-GyfEL2jk.js";import"./PopupsCommon.css-BGI8Fb7B.js";import"./getEffectiveScrollbarStyle-77nvIAYC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BL_t98Y7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CAZGB3vF.js";import"./BrowserScrollbar.css-BVuR1u6R.js";import"./index-B0scv0mR.js";import"./Link-CUceCK4r.js";import"./chunk-HLWAVYOI-BkFLgnuG.js";import"./client-BZNFO7bv.js";import"./copy-DHLQo4vt.js";import"./copy-CiUq4Sby.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BJ8B3rVx.js";import"./I18nStore-BIJrl7SC.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-DW76Co1x.js";import"./Label-tm0HKFXd.js";import"./index-Byuai5Dz.js";import"./index-F_io_HrK.js";import"./addCustomCSSWithScoping-Cr3Tnfsf.js";import"./index-DJqlzZjw.js";import"./BusyIndicator-DZWv4Y44.js";import"./index-C73Y2rlh.js";import"./index-v2bCH09b.js";import"./Avatar-Dqp3bR5c.js";import"./employee-B_Kids1O.js";import"./accept-C_bZLOp6.js";import"./decline-BqcagzAP.js";import"./delete-B9QvFMe0.js";import"./i18n-defaults-BX478RQX.js";import"./index-Dkvxc4I4.js";import"./ResponsivePopover-Csck98zi.js";import"./Dialog-CivsYkRJ.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
`,t.jsx(a,{})]})}function qt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{qt as default};
