import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-BxVt_j7t.js";import{ae as n,af as e}from"./index-yr6qBvYR.js";import"./index-C009Ii_l.js";import"./index-uxCr0N9e.js";import{C as s}from"./ControlsWithNote-BRapwc2P.js";import{D as a}from"./DocsHeader-DWu4fNgR.js";import{F as c}from"./CommandsAndQueries-KhPw59jv.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import{C as d,D as p}from"./Popover.stories-DLtwyns9.js";import"./iframe-CD4GyrAU.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-CEvNJu7C.js";import"./utils-BPMdnTU-.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./class-map-CFjQlWtw.js";import"./Button-C6xYvRbu.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./i18n-defaults-DteWAmDn.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DWtFeuUx.js";import"./main-BwlHOnYP.js";import"./index-EUzft9Z_.js";import"./Tag-xKaXZN0c.js";import"./sys-help-2-C1sMmkr1.js";import"./index-ClFOKzxg.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CJRte1-9.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-NbVlvM4j.js";import"./Link-2s4hefKa.js";import"./chunk-NUUEMKO5-DKqk-xwP.js";import"./client-DPlujwLe.js";import"./copy-BJtGExJZ.js";import"./copy-C7Fphd8b.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-BB_TmT_H.js";import"./I18nStore-DnWKAes0.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-vaKWw58t.js";import"./index-CUd5UQ0Z.js";import"./Label-S_BgfXUY.js";import"./index-Yz8_Wo9H.js";import"./index-D8L7QTA6.js";import"./Text-CTrlD69_.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-BBLdTHsH.js";import"./BusyIndicator-CTFEFSn6.js";import"./index-7rUfxUBv.js";import"./index-D6lFKeEV.js";import"./Avatar-DMTAeY6x.js";import"./employee-B31iqtd8.js";import"./settings-0pgvk88g.js";import"./index-CxIs-oDB.js";import"./List-BeOyiQ4g.js";import"./ItemNavigation-DWbUprUI.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-2y34RTmJ.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BN3CQ6El.js";import"./accept-W9Dxcudv.js";import"./slim-arrow-right-BHycGIJI.js";import"./index-BOrF8Ff-.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
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
`,o.jsx(c,{})]})}function Uo(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Uo as default};
