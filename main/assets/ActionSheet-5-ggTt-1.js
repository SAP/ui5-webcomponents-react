import{j as e}from"./useIsomorphicLayoutEffect-BpDYIkAV.js";import{useMDXComponents as i}from"./index-44b7z5bc.js";import{M as p,C as m}from"./index-DRz2hk48.js";import{M as s}from"./index-Bk8Ithva.js";import{C as c}from"./ControlsWithNote-0Js9UrFs.js";import{D as a}from"./DocsHeader-C3yXmZBk.js";import{F as h}from"./CommandsAndQueries-DfO_EoOU.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as d,D as n}from"./ActionSheet.stories-BFo3Hvp2.js";import"./iframe-0howv_Dp.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-Cjk_cKug.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./withWebComponent-ZLYt6Z72.js";import"./utils-Cjkb-4uz.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DTd686OT.js";import"./decline-CnfxIuyS.js";import"./Icons-bHVDH2o-.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Ds_NTOym.js";import"./alert-5g0GnjXW.js";import"./class-map-Dho2ozJ6.js";import"./if-defined-9iVrMyiP.js";import"./Icon-CzTkrOrA.js";import"./Device-RcFucVeJ.js";import"./Keys-pFVWso__.js";import"./parameters-bundle.css-BFbT_feV.js";import"./Button-BzvkKBmq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BPJU920w.js";import"./TagDesign-Dou_yO3g.js";import"./utils-mmfDDMog.js";import"./main-CzLLrZqh.js";import"./index-upWdXizJ.js";import"./Tag-By3S0wie.js";import"./sys-help-2-cOG0Ftyw.js";import"./index-D3UTY3No.js";import"./Popover-5eNGP7Bf.js";import"./PopupsCommon.css-C9rG7FRw.js";import"./FocusableElements-Dst-wEMC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BX_Vwu-f.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-ZLasDAym.js";import"./BrowserScrollbar.css-DPWlQluy.js";import"./index-vgsGM25s.js";import"./Link-CoCG3JZh.js";import"./chunk-HLWAVYOI-Coc2dbv7.js";import"./client-BEgA9EFc.js";import"./copy-yNkJ0G6Z.js";import"./copy-_3t6R87k.js";import"./index-ldWqkrC3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CBVvS9lW.js";import"./index-BgM2iT7f.js";import"./I18nStore-DimJQVWm.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-CzYm6OCq.js";import"./TableOfContent-7Ygrv8G1.js";import"./index-BDFEWlxK.js";import"./Label-BCs7fK18.js";import"./index-B4H3qawp.js";import"./index-DfcSCthV.js";import"./addCustomCSSWithScoping-B_dl8XEe.js";import"./index-DW2xgIbK.js";import"./index-D8ggj6z5.js";import"./index-BUDWBPQn.js";import"./Avatar-DoGtfKYI.js";import"./employee-BgURwoFi.js";import"./accept-CA8_dPVT.js";import"./decline-XFxHogpP.js";import"./delete-sZSFCXIY.js";import"./i18n-defaults-DDljwJVu.js";import"./index-CKmHjItr.js";import"./ResponsivePopover-B-qfblCL.js";import"./Dialog-BTsH2gu5.js";import"./ValueState-Bg0UWejw.js";import"./Title-Bz4joLDe.js";function r(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
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
`,e.jsx(h,{})]})}function Ze(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ze as default};
