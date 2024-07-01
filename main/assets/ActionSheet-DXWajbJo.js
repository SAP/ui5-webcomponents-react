import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as i}from"./index-44b7z5bc.js";import{M as p,C as m}from"./index-BxMK-oZX.js";import{M as s}from"./index-CM3Q1mAA.js";import{C as c}from"./ControlsWithNote-C-pt6c_v.js";import{D as a}from"./DocsHeader-CRCrDhiF.js";import{F as h}from"./ProjectTemplate-ClPVO9yk.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as d,D as n}from"./ActionSheet.stories-DsRHIZcA.js";import"./iframe-CTiaqTf7.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-GBezswur.js";import"./Boot-CS6Wsrzl.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-CNP7-t5L.js";import"./withWebComponent-ystZv1Rq.js";import"./utils-DQyyc3O0.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BRH4h-L2.js";import"./decline-DXuOh8V-.js";import"./Icons-DkFvE6sF.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-7KDHAkBn.js";import"./alert-CC8GYBM5.js";import"./class-map-AxOwT-Dx.js";import"./Icon-DVdZH5Ds.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BDXX69rx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BHzefwI9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DSznK6sV.js";import"./main-gIccE3pA.js";import"./index-DVOkgPVp.js";import"./Tag-L9twqo1B.js";import"./sys-help-2-Bsa8Xj43.js";import"./index-CtDZXPwz.js";import"./Popover-D7imDdfT.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-D0jBQZ8g.js";import"./FocusableElements-D2BM6TGM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DDwTWVjk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BQrULRrw.js";import"./BrowserScrollbar.css-CyDwNnGM.js";import"./index-CZ0QVr_g.js";import"./Link-C0ufom_G.js";import"./chunk-HLWAVYOI-DKjSPBXu.js";import"./client-BEgA9EFc.js";import"./copy-BlXZdPH6.js";import"./copy-CpBkh8z4.js";import"./index-B6HtmUYb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./index-D455cKCd.js";import"./i18n-defaults-CnAElpi7.js";import"./I18nContext-qX06pm-v.js";import"./index-DucvDNQa.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-DKodyTgw.js";import"./index-BK_N281j.js";import"./Label-B7GS_Fjb.js";import"./index-CzlLCp0a.js";import"./addCustomCSSWithScoping-Cxt-Ii4P.js";import"./index-C4zynmY8.js";import"./index-Caupm9jG.js";import"./index-CN_XtWb6.js";import"./Avatar-BLWqVh2K.js";import"./employee-RhZDCU51.js";import"./accept-CvbfU8vl.js";import"./decline-BKJP2WGI.js";import"./delete-BUw4jorC.js";import"./index-BuZSwAvo.js";import"./ResponsivePopover-D2fiRNXH.js";import"./Dialog-CSIc5fqg.js";import"./ValueState-Bg0UWejw.js";import"./Title-BnHhmA7_.js";function r(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
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
`,e.jsx(h,{})]})}function et(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{et as default};
