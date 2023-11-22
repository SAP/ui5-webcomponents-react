import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{C as c}from"./DomRefTable.module-1teiQWGe.js";import{D as p}from"./DocsHeader-TZSTd_u-.js";import{F as h}from"./Footer-f0i2sv-0.js";import"./index-OjgoNOWw.js";import{M as a,C as m}from"./chunk-HLWAVYOI-psJj60ml.js";import{D as d}from"./DomRefTable-wmSENnNG.js";import{C as l,D as i}from"./ActionSheet.stories-s3w4LpKF.js";import{R as u}from"./ResponsivePopoverDomRef-DZOTnbwm.js";import{u as s}from"./index-RwE9nQVW.js";import{M as x}from"./index--fFZoO1L.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-yaLaEhii.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./UI5Element-OBgzz0fv.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./utils-5CTKRvkw.js";import"./index-Vrh7cvSu.js";import"./iframe-S4JyMSMM.js";import"../sb-preview/runtime.js";import"./withWebComponent-6ZcDnwha.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./Integer-kog98579.js";import"./class-map-dxoND1Lf.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-RDyNiobK.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./alert-SMfrQE5J.js";import"./index-JiwscGpR.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-FFmUsnk4.js";import"./Link-Gs09ax_S.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-FvozjNxD.js";import"./index-3PxZPhBC.js";import"./index-QYh6idnL.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-IMpNFjIe.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-uZmr2UoK.js";import"./index-17AA29k7.js";import"./Label-bo0gz_aS.js";import"./index-070p_6Jf.js";import"./Button-UDaVhcBU.js";import"./index-xCjRCXU5.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./index-GL4gBoyB.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./accept-sNf1zbjr.js";import"./delete-2sMs8p4I.js";import"./useIsRTL-8cFGcCtf.js";import"./index-DWxST6Lq.js";import"./ResponsivePopover-voK1PETi.js";import"./Dialog-sWOJmdZ6.js";import"./ValueState-zUcANXoY.js";import"./information-eS-oBj3B.js";import"./Title-nBPKLywE.js";function Ue(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(p,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(n.p,{children:[e.jsx(d,{rows:u})," |"]}),`
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
`,e.jsx(x,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
In this case, we recommend using `,e.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
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
`,e.jsx(h,{})]})}}export{Ue as default};
//# sourceMappingURL=ActionSheet-1iq5WsM9.js.map
