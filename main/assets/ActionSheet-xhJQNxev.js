import{j as e}from"./ManagedStyles-CGOl3myG.js";import{useMDXComponents as i}from"./index-_byTH_QA.js";import{F as p}from"./ProjectTemplate-DEztgVYf.js";import{C as s}from"./ControlsWithNote-qOH7Jmpz.js";import{D as c}from"./DocsHeader-DvBVygYI.js";import"./index-Dl6G-zuu.js";import{M as h,d as m}from"./index-BcYSoVkD.js";import{C as a,D as o}from"./ActionSheet.stories-BYRgfsi5.js";import{M as d}from"./index-B4uZZmdX.js";import"./index-BgYfxxoj.js";import"./clsx-B-dksMZM.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./i18n-defaults-z_6XcBmn.js";import"./i18nBundle-Bsmczzvl.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./ThemingParameters--AGRs54p.js";import"./chunk-HLWAVYOI-C7i6e8Nh.js";import"./iframe-CX1kMpsI.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./index-D1_ZHIBm.js";import"./index-B81-j-0s.js";import"./useStylesheet-CxAEQokk.js";import"./index-DJzcDS_W.js";import"./Label-CbTMDkBb.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./withWebComponent-M0bhuh56.js";import"./utils-CeXI0Hi-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BS_6etQn.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-Dz0JocfY.js";import"./Button-WvH_Wkyp.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-CBAKipU6.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-jwLSXa4t.js";import"./HasPopup-Cecjtg2t.js";import"./index-BDBGDk-z.js";import"./Link-Dr8oTSuf.js";import"./index-Czm7_3jX.js";import"./Popover-DyMce1L3.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ChEyoFp6.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DiaJFluj.js";import"./FocusableElements-B13w0nQJ.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFfXzzyE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-wgSlw8JF.js";import"./class-map-BfEumRh6.js";import"./BrowserScrollbar.css-1pcdmAMh.js";import"./index-DYfcvCZD.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BzrCsXtN.js";import"./index-Jphd1cKU.js";import"./index-CN5pUlq0.js";import"./Avatar-D5wHCZAB.js";import"./employee-BBO6Qv_x.js";import"./alert-aIGc7Sj9.js";import"./index-Cf3vqSEb.js";import"./utils-B_p4vt7G.js";import"./main-HWtSBowW.js";import"./index-0OwgrVgA.js";import"./sys-help-2-DBxBNdVt.js";import"./information-I51WcrjF.js";import"./i18n-defaults-BdfZArTM.js";import"./copy-D4uznMtW.js";import"./GitHub-Mark-cyXF45vO.js";import"./TableOfContent-BkNqN_Yu.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./accept-ui7GG3Oe.js";import"./decline-BbDtzwS9.js";import"./delete-Cu9kbuk9.js";import"./index-CB3r32kf.js";import"./ResponsivePopover-DpTNbMPM.js";import"./Dialog-DUYY9JQ6.js";import"./ValueState-Bn-H2OaL.js";import"./Title-AWxW94U7.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:a}),`
`,e.jsx(c,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s,{of:o}),`
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
`,e.jsx(p,{})]})}function $e(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{$e as default};
