import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as i}from"./index-44b7z5bc.js";import{M as p,C as m}from"./index-BIWg-xPM.js";import{M as s}from"./index-C4vlEuIY.js";import{C as c}from"./ControlsWithNote-CjwjjhmU.js";import{D as a}from"./DocsHeader-CIUpWxif.js";import{F as h}from"./CommandsAndQueries-D5IcbaPd.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as d,D as n}from"./ActionSheet.stories-C6p6Zm95.js";import"./iframe-C-8hHI1Z.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./withWebComponent-BxrD_3pN.js";import"./utils-DgTsnvPN.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-BWlX1wee.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-Dhbw5K85.js";import"./alert-7wwKJW96.js";import"./class-map-CVq5yHuN.js";import"./if-defined-Cl7uVo8B.js";import"./Icon-p6ifn8PN.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BL3VmI_G.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-vwvk3Exl.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DqAqHPJD.js";import"./main-gIccE3pA.js";import"./index-CKMFPKJ-.js";import"./Tag-Do_QTRGF.js";import"./sys-help-2-BIRNWtM-.js";import"./index-CYyqQZMw.js";import"./Popover-CPRmhj4r.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-BJNgSyQc.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BoopDC9U.js";import"./BrowserScrollbar.css-88cLNDUy.js";import"./index-ir0Z-m_k.js";import"./Link-CGGRp2Qi.js";import"./chunk-HLWAVYOI-OKqfRLJM.js";import"./client-BEgA9EFc.js";import"./copy-DRlh-Vu-.js";import"./copy-CgbAc49M.js";import"./index-Dj6pWtDJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlIIJPI8.js";import"./index-B5idhwOL.js";import"./I18nStore-DrHVTNpv.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-8hkqNhLq.js";import"./index-DekwogW7.js";import"./Label-BqwA1t1q.js";import"./index-DmK2mNFZ.js";import"./index-DTpKanHj.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./index-B5XU2sfw.js";import"./index-DtuGtFiJ.js";import"./index-BwGx-xV2.js";import"./Avatar-DusLgr8x.js";import"./employee-CMmC12VS.js";import"./accept-B07L1jHF.js";import"./decline-CQHa4qUa.js";import"./delete-rW-J_V3R.js";import"./i18n-defaults-BQ1aH0X1.js";import"./index-DAwpqmM_.js";import"./ResponsivePopover-BDTYOjgE.js";import"./Dialog-CKcEyU0g.js";import"./ValueState-Bg0UWejw.js";import"./Title-DrCQyHXg.js";function r(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(a,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{of:n}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(t.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e.jsx("br",{}),`
`,e.jsxs(t.p,{children:["You can open and close the ",e.jsx(t.code,{children:"ActionSheet"})," component in a declarative way using the ",e.jsx(t.code,{children:"open"})," and ",e.jsx(t.code,{children:"opener"})," prop."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
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
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Opening an ",e.jsx(t.code,{children:"ActionSheet"})," by reference and not by ",e.jsx(t.code,{children:"id"})]})}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",e.jsx(t.code,{children:"id"})," to the ",e.jsx(t.code,{children:"opener"}),` prop.
Since this is not supported when passing the reference in a declarative way to a React `,e.jsx(t.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(s,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
  using this approach!`}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.opener = e.target;
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <Button onClick={handleOpenerClick}>Opener</Button>
      <ActionSheet ref={popoverRef} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,e.jsx(h,{})]})}function $e(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{$e as default};
