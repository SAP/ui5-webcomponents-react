import{j as o}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as m}from"./index-BrB9znxi.js";import{ae as n,af as e}from"./index-Bn8zN0Sq.js";import"./index-B2vAurCE.js";import{C as s}from"./ControlsWithNote-D2wkgvq3.js";import{D as a}from"./DocsHeader-B64LSbjU.js";import{F as c}from"./CommandsAndQueries-CAnyFPkm.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as d,D as p}from"./Popover.stories-DEGa21Bo.js";import"./iframe-CtsffICr.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-jpg_vyBt.js";import"./utils-C0V6LSSR.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DPK5r4a0.js";import"./decline-Rp8-5Vp_.js";import"./Icon-B5H_Qdfl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9JyKzKH.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-kkRN0naJ.js";import"./alert-Ddwvrqce.js";import"./class-map-q_nw4FEx.js";import"./Button-Cy3a2-vH.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Cg7KCFas.js";import"./TagDesign-Dou_yO3g.js";import"./utils-IhHJiS7C.js";import"./main-BPTHlokf.js";import"./index-Cmcqf4Ux.js";import"./Tag-ByGdD5E9.js";import"./sys-help-2-DRBnStTE.js";import"./index-BGYPT_ul.js";import"./Popover-CjvsUr2f.js";import"./PopupsCommon.css-B-WhbPRf.js";import"./getEffectiveScrollbarStyle-Evs_ZBOP.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Dgi63idk.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B_F0QOq3.js";import"./style-map-CGyh7Z7B.js";import"./BrowserScrollbar.css-BArmuj4M.js";import"./index-S_Fukng6.js";import"./Link-BFdl-cjb.js";import"./chunk-HLWAVYOI-DPLa7-VG.js";import"./client-DpDvupH-.js";import"./copy-D-5m-XxV.js";import"./copy-CSph0-JP.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-BxQBxwRK.js";import"./I18nStore-B9ZCcbUP.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-DARdDMho.js";import"./Label-4K9rAZXv.js";import"./index-BG-h_Kqf.js";import"./index-B2DesxhQ.js";import"./addCustomCSSWithScoping-C-29J_EE.js";import"./index-KsoA1c5h.js";import"./BusyIndicator-CE507Ogo.js";import"./index-BBTbE-GF.js";import"./index-ChnQk1Dh.js";import"./Avatar-TQEHR9dU.js";import"./employee-DEw0oR1K.js";import"./settings-rnwejKwK.js";import"./index-BU4RBYzp.js";import"./List-DMrBO1tG.js";import"./ItemNavigation-BZ1ENz4i.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-GsXsCP0A.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-9HfGUo9N.js";import"./accept-BJbC2y1u.js";import"./slim-arrow-right-Crkvsuh7.js";import"./index-6H8qActF.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
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
`,o.jsx(c,{})]})}function Zo(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Zo as default};
