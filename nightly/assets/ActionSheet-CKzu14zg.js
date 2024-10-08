import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-Bnrwa5-0.js";import"./index-CYMmuDNo.js";import"./index-BFWus7dV.js";import{C as s}from"./ControlsWithNote-BVxdWhDs.js";import{D as c}from"./DocsHeader-BCQ8ZVzA.js";import{F as a}from"./CommandsAndQueries-D0a4p_gh.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-Bw4-azjR.js";import{C as h,D as e}from"./ActionSheet.stories-5lgdoZvD.js";import"./iframe-Ab05dSaX.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-wFYtA7If.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C0oweRvl.js";import"./Icon-BcSHg7oQ.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BGBEnzgc.js";import"./alert-2Fjq9UKP.js";import"./class-map-B9XgGk97.js";import"./Button-KM4-V0NS.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cyb-S5u3.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C0qqoGYl.js";import"./main-r7D-Vqmb.js";import"./index-BzJgpzCi.js";import"./Tag-Bu1O2kVJ.js";import"./sys-help-2-W_np5NtH.js";import"./index-ax0weve5.js";import"./Popover-C5qlK_nP.js";import"./PopupsCommon.css-C_WF48EP.js";import"./FocusableElements-BIj5ki0J.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CTXj7VRO.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BvbZz5j6.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CDY2pqSn.js";import"./Link-0XT9hN4f.js";import"./chunk-NUUEMKO5-BHeIknDV.js";import"./client-BzooOYO_.js";import"./copy-7GRBkhIV.js";import"./copy-lw60TSjb.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-N3aXTj11.js";import"./I18nStore-CIizPkd0.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BV7383_0.js";import"./Label-C5_omeHE.js";import"./index-DDTf4_9s.js";import"./index-B3JK_dxj.js";import"./addCustomCSSWithScoping-Dz0L6MFE.js";import"./index-BdtzyfaT.js";import"./BusyIndicator-Blb6RTs2.js";import"./index-DMEGOjSg.js";import"./index-CDIA3NMf.js";import"./Avatar-qMkK7jki.js";import"./employee-DAjWhiTf.js";import"./accept-DWqszFD7.js";import"./decline-DyAAnbVx.js";import"./delete-DBP4IQWY.js";import"./i18n-defaults-DTeYK5vT.js";import"./index-CxcX4JSe.js";import"./ResponsivePopover-Bg0lkHG9.js";import"./Dialog-CRbvIDTn.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
