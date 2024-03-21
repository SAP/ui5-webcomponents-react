import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as i}from"./index-DtGqrCZN.js";import{F as p}from"./ProjectTemplate-C8PB08XF.js";import{C as s}from"./ControlsWithNote-4WAAQNmU.js";import{D as c}from"./DocsHeader-uT3dVPvD.js";import"./index-Cu9bd8lq.js";import{M as m,C as h}from"./index-CQTAO8tP.js";import{C as a,D as o}from"./ActionSheet.stories-D74b1eh_.js";import{M as d}from"./index-kmDWEYkA.js";import"./react-jss.esm-BpNdaHSZ.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-BaGMLphO.js";import"./chunk-HLWAVYOI-Dk4242Or.js";import"./iframe-B9ojHKoH.js";import"../sb-preview/runtime.js";import"./client-Cby6Sz3m.js";import"./index-Ckls47V4.js";import"./index-D9X0AKIp.js";import"./clsx-B-dksMZM.js";import"./index-ChJ4ay-7.js";import"./Label-ps0cWtHP.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-CmHHCrVX.js";import"./utils-CnhbIiu8.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./i18nBundle-C2WczoLt.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-weVOdquz.js";import"./parameters-bundle.css-B6zgRRib.js";import"./index-BeutTfwK.js";import"./Button-BzhOkI6c.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BiUfzlGt.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Bz_R9SHk.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-xNvpL1oe.js";import"./HasPopup-Cecjtg2t.js";import"./index-DpnfAJj0.js";import"./Link-Ckf4Uxns.js";import"./index-BEu48q3i.js";import"./Popover-Jk90pyiT.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1-Fx8yKA.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DDqpi34j.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DseTvTa6.js";import"./class-map-CmJPAu_C.js";import"./BrowserScrollbar.css-0WwBRmTe.js";import"./index-Clgb5PFv.js";import"./i18n-defaults-DcbMYOf3.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CvWpx1AF.js";import"./useStylesheet-CLZMRdPE.js";import"./ModalsContext-DDUwbLsf.js";import"./addCustomCSSWithScoping-CWznCzZ1.js";import"./index-DY4lAGWN.js";import"./index-B1NRCyGN.js";import"./Avatar-DrytwCNY.js";import"./employee-BRu8U1FM.js";import"./alert-CXHMnQvw.js";import"./index--d4BYfBU.js";import"./utils-DJZxX_wL.js";import"./index-BsJcpZyx.js";import"./sys-help-2-DXsgVRAc.js";import"./information-DW1Al7d0.js";import"./i18n-defaults-BdfZArTM.js";import"./copy-ChpJf3sv.js";import"./GitHub-Mark-Cz0z7Mur.js";import"./TableOfContent-D08YBOJ5.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./accept-D1NAdLE7.js";import"./decline-D6EEqVrc.js";import"./delete-7c8wZlNN.js";import"./CustomVariables-D8LEXY9s.js";import"./index-BA9JIqnt.js";import"./ResponsivePopover-vsmk_8wm.js";import"./Dialog-DSAMqjwk.js";import"./ValueState-Bn-H2OaL.js";import"./Title-Dz2AvBrM.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a}),`
`,e.jsx(c,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(h,{of:o}),`
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
`,e.jsx(p,{})]})}function et(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{et as default};
