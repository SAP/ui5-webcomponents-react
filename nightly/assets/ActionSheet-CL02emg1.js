import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import{ae as p,af as m}from"./index-qOY-DeAO.js";import"./index-CY-aFc8B.js";import"./index-BGbUezX6.js";import{C as s}from"./ControlsWithNote-CKFwqXD5.js";import{D as c}from"./DocsHeader-PNZrs-jk.js";import{F as a}from"./CommandsAndQueries-FGmV4TaY.js";import"./products-B8km3JGR.js";import"./index-CjmQ2z5u.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import{C as h,D as e}from"./ActionSheet.stories-BQTpoG-E.js";import"./iframe-B18BTbil.js";import"../sb-preview/runtime.js";import"./index-bI5-aUrJ.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./withWebComponent-DbOtF11K.js";import"./utils-5ouIlTbN.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Button-Df0TC0Md.js";import"./Keys-DundVx7l.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./Icon-DiKvMA1d.js";import"./parameters-bundle.css-BzaqQttB.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./i18n-defaults-Do22Zz-4.js";import"./decline-DrrSJfqv.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CbqKdr-p.js";import"./information-DA6q7hAT.js";import"./sys-enter-2-DZyqnfP0.js";import"./sys-enter-2-BQuGujks.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DM5Jl4eX.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./index-Bsy_aHPG.js";import"./Tag-4_eO7NFx.js";import"./sys-help-2-CiQ-GoLU.js";import"./index-BibcJJNq.js";import"./Link-D-wjqtz_.js";import"./index-uo5_YZoe.js";import"./Popover-BEou1Y9a.js";import"./PopupsCommon.css-IJUzQyRd.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./chunk-NUUEMKO5-DvX1tZ-5.js";import"./client-CY4f97Aa.js";import"./copy-CtVlzodN.js";import"./copy-08oD3P1Y.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DQxIZPp2.js";import"./TableOfContent-BTksmC1d.js";import"./index-Dx4fI5_u.js";import"./I18nStore-CG8U7JCg.js";import"./useStylesheet-CGem_MOm.js";import"./index-pHxnwrJg.js";import"./index-DnJL0qev.js";import"./Label-qWriTtuJ.js";import"./index-CkQLB81g.js";import"./index-C-cAGxuE.js";import"./Text-C2JOarjX.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-C-b0WtXR.js";import"./BusyIndicator-D8_NMEhC.js";import"./index-DFo5s-d0.js";import"./index-tKYk34_N.js";import"./AvatarSize-BceVhWoP.js";import"./employee-bNtHwQyf.js";import"./accept-C8IONXec.js";import"./delete-Pmq52mEJ.js";import"./i18n-defaults-BfQ0gFYt.js";import"./index-AIsT-Xhb.js";import"./ResponsivePopover-DhwVJmwv.js";import"./Dialog-B5eXWXJL.js";import"./ValueState-CyC8gWMA.js";function r(n){const o={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:h}),`
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
`,t.jsx(a,{})]})}function Jt(n={}){const{wrapper:o}={...i(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Jt as default};
