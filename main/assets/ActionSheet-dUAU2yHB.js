import{j as e}from"./ManagedStyles-CGOl3myG.js";import{useMDXComponents as i}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-Cel5mfGV.js";import{C as s}from"./ControlsWithNote-0d3epS9e.js";import{D as c}from"./DocsHeader-DmAlIMqv.js";import"./index-Dl6G-zuu.js";import{M as h,d as m}from"./index-CzTmKjWu.js";import{C as a,D as o}from"./ActionSheet.stories-BX_o8177.js";import{M as d}from"./index-R6uRzpud.js";import"./index-I94jMuNY.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./useStylesheet-CxAEQokk.js";import"./ThemingParameters--AGRs54p.js";import"./i18nBundle-Bsmczzvl.js";import"./I18nContext-BcGksm2n.js";import"./index-D1_ZHIBm.js";import"./ModalsContext-qaxSwC3j.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./chunk-HLWAVYOI-oX9fedy6.js";import"./iframe-mx9Cs_dO.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./index-ByYU1K04.js";import"./clsx-B-dksMZM.js";import"./index-C4cSObg_.js";import"./Label-DppxBELH.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./withWebComponent-DJIp_RUs.js";import"./utils-CeXI0Hi-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BS_6etQn.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-qkbFvGnV.js";import"./Button-Dh-otWwk.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-CBAKipU6.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D1vK26qK.js";import"./HasPopup-Cecjtg2t.js";import"./index-BpSQ2deJ.js";import"./Link-Bz4pS2E4.js";import"./index-Cd_-mw_D.js";import"./Popover-wWOUXlEf.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ChEyoFp6.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CM5pfEqV.js";import"./FocusableElements-B13w0nQJ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFfXzzyE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-ZAvUrcXy.js";import"./class-map-Cu2l68a-.js";import"./BrowserScrollbar.css-CZDKAGTv.js";import"./index-DlUnVxaj.js";import"./i18n-defaults-z_6XcBmn.js";import"./addCustomCSSWithScoping-BzrCsXtN.js";import"./index-Ds83oQtI.js";import"./index-IStBxi_i.js";import"./Avatar-CDGo5C_y.js";import"./employee-BBO6Qv_x.js";import"./alert-aIGc7Sj9.js";import"./index-ChRo0APt.js";import"./utils-Bjl8p5t4.js";import"./main-HWtSBowW.js";import"./index-CC0qv4s4.js";import"./sys-help-2-DBxBNdVt.js";import"./information-I51WcrjF.js";import"./i18n-defaults-BdfZArTM.js";import"./copy-D4uznMtW.js";import"./GitHub-Mark-cyXF45vO.js";import"./TableOfContent-CqZunpIm.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./accept-ui7GG3Oe.js";import"./decline-BbDtzwS9.js";import"./delete-Cu9kbuk9.js";import"./index-C74EL_v9.js";import"./ResponsivePopover-Cfs1foPp.js";import"./Dialog-ClW6fCa6.js";import"./ValueState-Bn-H2OaL.js";import"./Title-l-01ipbl.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:a}),`
`,e.jsx(c,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:o}),`
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
`,e.jsx(p,{})]})}function Ve(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{Ve as default};
