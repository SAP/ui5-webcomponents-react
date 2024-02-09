import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{F as c}from"./ProjectTemplate-iMYG_30v.js";import{C as p}from"./ControlsWithNote-AJFsp1y4.js";import{D as h}from"./DocsHeader-t0tUIu3R.js";import"./index-OjgoNOWw.js";import{M as m,C as a}from"./chunk-HLWAVYOI-d_FCsgO7.js";import{C as d,D as i}from"./ActionSheet.stories--ehX8mc_.js";import{u as s}from"./index-RwE9nQVW.js";import{M as l}from"./index-f6xrwIRc.js";import"./react-jss.esm-tmBtHfec.js";import"./index-3b4qDut6.js";import"./clsx-Zbgk8kpT.js";import"./index-QYh6idnL.js";import"./index-zjKNP_tG.js";import"./iframe-bucHV5di.js";import"../sb-preview/runtime.js";import"./Label-z2EGRvw-.js";import"./UI5Element-J5BIXSmd.js";import"./i18nBundle-hBv5shGA.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-KF6OS2eD.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./index-HF0UYVcE.js";import"./Button-3dE37AvA.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Keys-Mzj2D4aO.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-w8Ubykga.js";import"./Icon-9mGrp6sQ.js";import"./HasPopup-9BAMrqbD.js";import"./index-HlOm08Ra.js";import"./Link-qPsX_s-9.js";import"./index-0eBDwu-b.js";import"./Popover-_i-9Nlxt.js";import"./Integer-kog98579.js";import"./PopupUtils-vEkjvavX.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-mpuHIMki.js";import"./FocusableElements-yiWWnti0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-nsiBebAr.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./class-map-Y-YjCFqX.js";import"./BrowserScrollbar.css-f5JVpLjm.js";import"./index-I2ZSoiFx.js";import"./i18n-defaults-i_6r8m_B.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-cXf_ADaj.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-QKBhLXCa.js";import"./index-cAVSPhaO.js";import"./index-jVYVDuxL.js";import"./Avatar-DMnS_15W.js";import"./employee-E8ifPoB6.js";import"./alert-EvF5vfgw.js";import"./index-GH_PYKqc.js";import"./index-oT_htLL6.js";import"./sys-help-2-wmLSzyeg.js";import"./information-mLcAhNUH.js";import"./i18n-defaults-iZnAAWr4.js";import"./TableOfContent-amYhYTQs.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./accept-Zb_2NnI-.js";import"./decline-TLe42uKS.js";import"./delete-xQ-RMgQ6.js";import"./index-iBh6hvC-.js";import"./ResponsivePopover-BeCPNVpL.js";import"./Dialog-ew6cMbV-.js";import"./ValueState-zUcANXoY.js";import"./Title-ais60r-G.js";function Ge(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:d}),`
`,e.jsx(h,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:i}),`
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
`,e.jsx(l,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e.jsx(c,{})]})}}export{Ge as default};
