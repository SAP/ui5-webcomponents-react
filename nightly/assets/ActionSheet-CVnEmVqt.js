import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as p,af as m}from"./index-vwU6v3L5.js";import"./index-D7Nv88Gg.js";import"./index-l80Wr29h.js";import{C as s}from"./ControlsWithNote-B4WAZKQs.js";import{D as c}from"./DocsHeader-CqbnX44r.js";import{F as a}from"./CommandsAndQueries-DBf0vj2e.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{C as h,D as e}from"./ActionSheet.stories-HOVlJ2FU.js";import"./iframe-DpvLi2wB.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-BoqZ1Nk6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-DyAOnJXW.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CKvcOODB.js";import"./main-C6oD7XT2.js";import"./index-CDPCSlUD.js";import"./Tag-C2WChDcP.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-B8rq_Cwn.js";import"./Link-DWmmrhq6.js";import"./chunk-NUUEMKO5-DPrtgAOl.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-XWmB5YeY.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-CIcp3lSM.js";import"./index-uL74TcGH.js";import"./index-D5w6Jnaw.js";import"./Label-DeMESwab.js";import"./index-P1IZkdfp.js";import"./index-CHNB8-uH.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-DYrmYIPb.js";import"./BusyIndicator-DLv3RVXJ.js";import"./index-Z34fJdHI.js";import"./index-BNw2TIlH.js";import"./Avatar-D0wBket6.js";import"./employee-BnxYOghN.js";import"./accept-DENHAmCe.js";import"./decline-BZCcmwv2.js";import"./delete-Cey32T08.js";import"./i18n-defaults-CQg0rmX6.js";import"./index-ze66iUFu.js";import"./ResponsivePopover-DRXUZ-Yn.js";import"./Dialog-zzL9k4HV.js";import"./ValueState-Bg0UWejw.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
