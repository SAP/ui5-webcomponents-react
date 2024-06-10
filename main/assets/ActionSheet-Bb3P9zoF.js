import{j as e}from"./useIsomorphicLayoutEffect-Cdhcir-A.js";import{useMDXComponents as i}from"./index-DcZOShwE.js";import{M as p,C as s}from"./index-xDQX3AHM.js";import{C as c}from"./ControlsWithNote-SsIF1qGN.js";import{D as h}from"./DocsHeader-u1i2a2OT.js";import{F as m}from"./ProjectTemplate-Ck6AVtNI.js";import"./index-gJgmXzrm.js";import{C as a,D as o}from"./ActionSheet.stories-dgI0Rr_H.js";import{M as d}from"./index-CzrqfmU6.js";import"./iframe-C0meVrib.js";import"../sb-preview/runtime.js";import"./index-DjqRnomV.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./utils-Cq1g27aY.js";import"./main-HWtSBowW.js";import"./index-BhXyHRw9.js";import"./UI5Element-CzMfQqnP.js";import"./Boot-DutchAmg.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-HfHyyjXv.js";import"./withWebComponent-B-q4dpqR.js";import"./utils-CzTHXoYc.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-C7Xi0JmF.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Czk9o4-x.js";import"./Icons-DOypJ1ey.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./sys-help-2-JVQsHWLX.js";import"./information-Bz3ag37N.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Cx3mJvyk.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-iTMd0Np9.js";import"./index-D8fKZ7tY.js";import"./Popover-CgEuE7bG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-_doHq5C_.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-3JkkzoGu.js";import"./FocusableElements-CGV1dSWU.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DQKG4dIE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-5kI6_gZF.js";import"./class-map-D3G_ubmA.js";import"./BrowserScrollbar.css-opuuJdpl.js";import"./index-Cldr3Iyv.js";import"./Link-BpvJx02W.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-BmmGQwuU.js";import"./client-DNfJn3vO.js";import"./copy-DwYLhAbQ.js";import"./index-B16wtpXA.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BapCJMzX.js";import"./index-BJXBoxs7.js";import"./i18n-defaults-BFgjw7fK.js";import"./I18nContext-D8i4N15C.js";import"./index-CqL1iFrm.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./GitHub-Mark-hv4rNEh_.js";import"./TableOfContent-D-yJmfo0.js";import"./index-rDE9cpP4.js";import"./Label-COhM1iHW.js";import"./index-ebqUa56T.js";import"./Button-BzKON9jh.js";import"./addCustomCSSWithScoping-E64gwvMe.js";import"./index-BUUEt7hy.js";import"./index-DrQF5bh8.js";import"./Avatar-B4OEebUt.js";import"./employee-B43YsEH_.js";import"./index-ClbUDf6Q.js";import"./accept-0PbfTM3V.js";import"./decline-DCttDR6b.js";import"./delete-B_1CJA-1.js";import"./index-DhvJZmVz.js";import"./ResponsivePopover-DIp5CuFY.js";import"./Dialog-4m5b8l_W.js";import"./ValueState-Bn-H2OaL.js";import"./Title-tveis1mX.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
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
