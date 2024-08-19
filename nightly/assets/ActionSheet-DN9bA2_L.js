import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as i}from"./index-BrB9znxi.js";import{ae as p,af as m}from"./index-Bn8zN0Sq.js";import"./index-B2vAurCE.js";import{C as s}from"./ControlsWithNote-D2wkgvq3.js";import{D as c}from"./DocsHeader-B64LSbjU.js";import{F as a}from"./CommandsAndQueries-CAnyFPkm.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ActionSheet.stories-B4abCdnU.js";import"./iframe-CtsffICr.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-jpg_vyBt.js";import"./utils-C0V6LSSR.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DPK5r4a0.js";import"./decline-Rp8-5Vp_.js";import"./Icon-B5H_Qdfl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9JyKzKH.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-kkRN0naJ.js";import"./alert-Ddwvrqce.js";import"./class-map-q_nw4FEx.js";import"./Button-Cy3a2-vH.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Cg7KCFas.js";import"./TagDesign-Dou_yO3g.js";import"./utils-IhHJiS7C.js";import"./main-BPTHlokf.js";import"./index-Cmcqf4Ux.js";import"./Tag-ByGdD5E9.js";import"./sys-help-2-DRBnStTE.js";import"./index-BGYPT_ul.js";import"./Popover-CjvsUr2f.js";import"./PopupsCommon.css-B-WhbPRf.js";import"./getEffectiveScrollbarStyle-Evs_ZBOP.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Dgi63idk.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B_F0QOq3.js";import"./style-map-CGyh7Z7B.js";import"./BrowserScrollbar.css-BArmuj4M.js";import"./index-S_Fukng6.js";import"./Link-BFdl-cjb.js";import"./chunk-HLWAVYOI-DPLa7-VG.js";import"./client-DpDvupH-.js";import"./copy-D-5m-XxV.js";import"./copy-CSph0-JP.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-BxQBxwRK.js";import"./I18nStore-B9ZCcbUP.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-DARdDMho.js";import"./Label-4K9rAZXv.js";import"./index-BG-h_Kqf.js";import"./index-B2DesxhQ.js";import"./addCustomCSSWithScoping-C-29J_EE.js";import"./index-KsoA1c5h.js";import"./BusyIndicator-CE507Ogo.js";import"./index-BBTbE-GF.js";import"./index-ChnQk1Dh.js";import"./Avatar-TQEHR9dU.js";import"./employee-DEw0oR1K.js";import"./accept-BJbC2y1u.js";import"./decline-Bl9ArL0O.js";import"./delete-DRC5fkYh.js";import"./i18n-defaults-BdyoGaf_.js";import"./index-B7wcVkxv.js";import"./ResponsivePopover-CBjngt0A.js";import"./Dialog-9tfy61aS.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
`,t.jsx(a,{})]})}function Gt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Gt as default};
