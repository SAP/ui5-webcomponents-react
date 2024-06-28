import{j as e}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as p,C as s}from"./index-DxuOfQlo.js";import{C as c}from"./ControlsWithNote-CZJc6GdO.js";import{D as h}from"./DocsHeader-4Tnph7Tn.js";import{F as m}from"./ProjectTemplate-C8X93s0c.js";import"./index-BP8_t0zE.js";import{C as a,D as o}from"./ActionSheet.stories-vyeq1qGn.js";import{M as d}from"./index-DqXXZe2g.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-Br2NyzTh.js";import"./main-HWtSBowW.js";import"./index-BeHW3T8O.js";import"./UI5Element-SUktJcPg.js";import"./Boot-CclrjlB_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DaXqDOt3.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./Icons-Bft-hUnu.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./sys-help-2-D4EtiAJW.js";import"./information-C5yxSOcR.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-ClVg17pq.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-1MXDhRqV.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./class-map-CeKKj88r.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import"./client-Di-4O7We.js";import"./copy-CpRxx2mm.js";import"./index-BykYlwjP.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NckrYtSC.js";import"./index-DOeO8XXJ.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./index-C2xRLxKL.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BiaPdlPr.js";import"./TableOfContent-DEwwt8Fx.js";import"./index-DLdLI-Lw.js";import"./Label-DmN4xHd_.js";import"./index-BaLzQqsI.js";import"./Button-awfxS-u-.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./index-4leB1AGq.js";import"./accept-DNk1siyF.js";import"./decline-ubQgRYfe.js";import"./delete-CcZComvK.js";import"./index-BaH_pMmu.js";import"./ResponsivePopover-DENUalpE.js";import"./Dialog-doRJW-7X.js";import"./ValueState-Bn-H2OaL.js";import"./Title-C9HFD-MY.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(h,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(n.p,{children:["We recommend opening and closing the ",e.jsx(n.code,{children:"ActionSheet"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithActionSheet = () => {
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
        onAfterClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Opening an ",e.jsx(n.code,{children:"ActionSheet"})," by reference and not by ",e.jsx(n.code,{children:"id"})]})}),`
`,e.jsxs(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(d,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
  using this approach!`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e.jsx(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionSheets"})," can only be opened by attaching a ",e.jsx(n.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(n.em,{children:["on which the ",e.jsx(n.code,{children:"ActionSheet"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
  const actionSheetRef = useRef(null);
  const onButtonClick = (e) => {
    actionSheetRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ActionSheet</Button>
      <ActionSheet ref={actionSheetRef}>
        <Button icon="add">Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"using-actionsheets-inside-other-components",children:"Using ActionSheets inside other components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",rel:"nofollow",children:"createPortal"})," to mount the ",e.jsx(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-JSX",children:`const ActionSheetComponent = () => {
  const actionSheetRef = useRef(null);
  const onButtonClick = (e) => {
    actionSheetRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ActionSheet</Button>
      {createPortal(
        <ActionSheet ref={actionSheetRef}>
          <Button icon="add">Accept</Button>
          <Button>Reject</Button>
          <Button>This is my super long text!</Button>
        </ActionSheet>,
        document.body
      )}
    </>
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ve(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{Ve as default};
