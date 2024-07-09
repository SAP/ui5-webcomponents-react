import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as i}from"./index-yodfxRVR.js";import{M as p,C as s}from"./index-CiRfCSmz.js";import{M as m}from"./index-BX2zMpH8.js";import{C as c}from"./ControlsWithNote-003s5uAU.js";import{D as a}from"./DocsHeader-BPKFXf2T.js";import{F as h}from"./CommandsAndQueries-D3kLgyra.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as d,D as n}from"./ActionSheet.stories-iaicY2Jo.js";import"./iframe-CbtUS4V5.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./class-map-Cmqcr3Jy.js";import"./Button-B86xSW8p.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D_1KzAB5.js";import"./TagDesign-Dou_yO3g.js";import"./utils-F-yq4TPA.js";import"./main-CzLLrZqh.js";import"./index-B10L_pvS.js";import"./Tag-Bcq38jV6.js";import"./sys-help-2-CpwrGADB.js";import"./index-DtmBi3gW.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OgbCZidP.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-CSQibaZ3.js";import"./Link-D7pTqG-L.js";import"./chunk-HLWAVYOI-DMffFusc.js";import"./client-CM2XqZNc.js";import"./copy-Bk4HvEED.js";import"./copy-D7XnXV4f.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-CleVCBXA.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-BGParntk.js";import"./index-Cu1iuWPo.js";import"./Label-B8i_ob21.js";import"./index-B4BPp1es.js";import"./index-C2xxfhXS.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-GO_K9XHP.js";import"./index-DLowgKJL.js";import"./index-CwUsEHlC.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./accept-V4-1HGXV.js";import"./decline-BaAPJ8t9.js";import"./delete-B7kIMF7-.js";import"./i18n-defaults-C7jtn0Rp.js";import"./index-BYBYKbsD.js";import"./ResponsivePopover-ahXZCHF-.js";import"./Dialog-D5G9Xxpu.js";import"./ValueState-Bg0UWejw.js";import"./Title-C2YQObaz.js";function r(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(a,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:n}),`
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
`,e.jsx(m,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e.jsx(h,{})]})}function Ge(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{Ge as default};
