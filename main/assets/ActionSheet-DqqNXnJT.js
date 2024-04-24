import{j as e}from"./ManagedStyles-DBz9b8_7.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{M as p,d as s}from"./index-8sMg4zFU.js";import{C as c}from"./ControlsWithNote-DdwHm4s5.js";import{D as h}from"./DocsHeader-CLaN7WZ1.js";import{F as m}from"./ProjectTemplate-DQbVNXQs.js";import"./index-Cu9bd8lq.js";import{C as a,D as o}from"./ActionSheet.stories-6tDPCZDd.js";import{M as d}from"./index-BMTIYx3a.js";import"./iframe-DppkCPbE.js";import"../sb-preview/runtime.js";import"./index-Ckls47V4.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-CdnsVG_W.js";import"./index-DrFu-skq.js";import"./utils-gNxdmned.js";import"./main-HWtSBowW.js";import"./index-DEWwNpfg.js";import"./UI5Element-C4mSOhNA.js";import"./Boot-Biwz_Caq.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./withWebComponent-C_dYwLuv.js";import"./utils--_sL0meP.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-Dr6PGakp.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Clr9g2fS.js";import"./Icons-DjI__-3J.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./sys-help-2-CYHXlBDZ.js";import"./information-_3DJs868.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-BU0AsmHE.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DyNPhf0P.js";import"./index-Dch7Pu0E.js";import"./Popover-DNMeFD1A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ApBaW5cX.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1I1Br736.js";import"./FocusableElements-BYZ07gKz.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DG5rdHnC.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DouRFD4_.js";import"./class-map-Cfio9s54.js";import"./BrowserScrollbar.css-rLpJ_tAN.js";import"./index-B9vV0M-J.js";import"./Link-CMvBWZzp.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-xsLbOqJm.js";import"./react-18-CyVMVvrE.js";import"./copy-Cu_ZU0U0.js";import"./index-h8mMc9-D.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Emr_nFue.js";import"./index-DkTfA-Yk.js";import"./i18n-defaults-DVTRFCa9.js";import"./I18nContext-lEOM8vPx.js";import"./index-CzirVdIS.js";import"./ThemingParameters--AGRs54p.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./GitHub-Mark-DqU93U5N.js";import"./TableOfContent-DL8rzHAE.js";import"./index-Bw2fG2FP.js";import"./Label-CkBRSGa0.js";import"./index-CDYbESaI.js";import"./Button-BAj8jTq4.js";import"./addCustomCSSWithScoping-BxGdOQ6d.js";import"./index-BKzcCC2_.js";import"./index-3ScwKvr-.js";import"./Avatar-DrQd1eyL.js";import"./employee-BUX20iaG.js";import"./index-DJN62Ggf.js";import"./accept-CA1P5ZIg.js";import"./decline-b84495rg.js";import"./delete-DN6eE65f.js";import"./index-B70jMiUD.js";import"./ResponsivePopover-BTNOkfkr.js";import"./Dialog-D-YRA55P.js";import"./ValueState-Bn-H2OaL.js";import"./Title-CUrkl5uS.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(h,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(t.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(t.p,{children:["We recommend opening and closing the ",e.jsx(t.code,{children:"ActionSheet"})," component in a declarative way using the ",e.jsx(t.code,{children:"open"})," and ",e.jsx(t.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithActionSheet = () => {
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
`,e.jsx(t.p,{children:e.jsxs(t.strong,{children:["Opening an ",e.jsx(t.code,{children:"ActionSheet"})," by reference and not by ",e.jsx(t.code,{children:"id"})]})}),`
`,e.jsxs(t.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(t.code,{children:"id"})," to the ",e.jsx(t.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(t.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(d,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e.jsx(t.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ActionSheets"})," can only be opened by attaching a ",e.jsx(t.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(t.em,{children:["on which the ",e.jsx(t.code,{children:"ActionSheet"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e.jsx(t.h2,{id:"using-actionsheets-inside-other-components",children:"Using ActionSheets inside other components"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(t.a,{href:"https://reactjs.org/docs/portals.html",rel:"nofollow",children:"createPortal"})," to mount the ",e.jsx(t.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-JSX",children:`const ActionSheetComponent = () => {
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
`,e.jsx(m,{})]})}function Ze(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ze as default};
