import{j as e}from"./useIsomorphicLayoutEffect-5feXxxyy.js";import{useMDXComponents as i}from"./index-Bql5lgBm.js";import{M as p,C as m}from"./index-BMhnYdHf.js";import{M as s}from"./index-BJjS9G4Z.js";import{C as c}from"./ControlsWithNote-Bnjf0ZB8.js";import{D as a}from"./DocsHeader-CwBIR7Zx.js";import{F as h}from"./ProjectTemplate-_1VTuOiN.js";import"./index-CP2MHerv.js";import"./WrappingType-CW8URInd.js";import{C as d,D as n}from"./ActionSheet.stories-BoKUrWbS.js";import"./iframe-C7Reoh8v.js";import"../sb-preview/runtime.js";import"./index-CUD6gg2y.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-DFWAHaHd.js";import"./Boot-Bc3-yGxv.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-u88Ac6A7.js";import"./withWebComponent-ah_drTxp.js";import"./utils-CGfXuD-n.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-X-a5Hvm9.js";import"./decline-DOPX1W-e.js";import"./Icons-o-g_t4X3.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-D2w0wkAo.js";import"./alert-RYmCrbKT.js";import"./class-map-CSNjIC4y.js";import"./Icon-CDJWObqH.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-CO6Cy06z.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DUjPXQIq.js";import"./TagDesign-Dou_yO3g.js";import"./utils-9Pksmnua.js";import"./main-gIccE3pA.js";import"./index-BEq8eX2n.js";import"./Tag-Ci8p7pHO.js";import"./sys-help-2-nFCNh-Xc.js";import"./index-Cu_crJJ8.js";import"./Popover-C8kXaV3G.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-DMExQBIY.js";import"./FocusableElements-T7dKq3am.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C9Gw3xFv.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-P64ToWDx.js";import"./BrowserScrollbar.css-Br9LgvKH.js";import"./index-4_RQBqHr.js";import"./Link-CXA-r5WN.js";import"./chunk-HLWAVYOI-DMMLsVJA.js";import"./client-CeotCdvV.js";import"./copy-B1GUjixQ.js";import"./copy-Bux_XWOJ.js";import"./index-B5D3uFwJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DIoLZaP8.js";import"./index-DJHd8BMW.js";import"./i18n-defaults-BCHmAjec.js";import"./I18nContext-BwNxpyJO.js";import"./index-89I0sryf.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./GitHub-Mark-jOGaUROA.js";import"./TableOfContent-CyfKv-YL.js";import"./index-Bswgice2.js";import"./Label-BevGptB9.js";import"./index-_H_y6PCU.js";import"./addCustomCSSWithScoping-DKVM2fpC.js";import"./index-yOjpL2wZ.js";import"./index-DQ0xax42.js";import"./index-DTI44gIf.js";import"./Avatar-CBU7GVET.js";import"./employee-CzaM-cwk.js";import"./accept-9bsH0TOK.js";import"./decline-uYpoS0W7.js";import"./delete-BPGAVaJW.js";import"./index-qQtEPaJG.js";import"./ResponsivePopover-C-i60yxX.js";import"./Dialog-_titf59N.js";import"./ValueState-Bg0UWejw.js";import"./Title-CYTK9TNQ.js";function r(o){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
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
