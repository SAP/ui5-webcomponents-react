import{j as e}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as i}from"./index-Bpj30qF7.js";import{M as p,C as s}from"./index-BL3MocwW.js";import{M as c}from"./index-B7zegQ7L.js";import{C as m}from"./ControlsWithNote-C2uDhuO0.js";import{D as h}from"./DocsHeader-CvF2uzd3.js";import{F as a}from"./ProjectTemplate-CveI0i3m.js";import"./index-DVqgc125.js";import"./WrappingType-CW8URInd.js";import{C as d,D as o}from"./ActionSheet.stories-CY82Lveq.js";import"./iframe-B84mfQK4.js";import"../sb-preview/runtime.js";import"./index-oytpl9VN.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./Boot-DBJWGo1y.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-B3obxaDo.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BBSxky5H.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-BP25vhFe.js";import"./main-J1meqccC.js";import"./index-CF5lDG4Y.js";import"./Tag-BT5Mvbr4.js";import"./sys-help-2-2Us62-4y.js";import"./index-D0N00bvv.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-Dccl7bU_.js";import"./Link-CM0QSx8V.js";import"./chunk-HLWAVYOI-CGxSQk5C.js";import"./client-5PD-IPQ1.js";import"./copy-Cmf2rNBH.js";import"./copy-e7WxF_om.js";import"./index-C4tKiJwu.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-DoUANS_S.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./GitHub-Mark-BB1PBR_N.js";import"./TableOfContent-kHwhsg6d.js";import"./index-CuwioZPY.js";import"./Label-BcDuAK9i.js";import"./index-DJ5L8y-0.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-IGbS6e4w.js";import"./index-fOa8eJr7.js";import"./index-CKf3seen.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";import"./accept-Db-bru4f.js";import"./decline-yTSlkrOh.js";import"./delete-CChCdU2i.js";import"./index-889fa8ri.js";import"./ResponsivePopover-B13iEHLw.js";import"./Dialog-DHL3bsk8.js";import"./ValueState-Bg0UWejw.js";import"./Title-BjHLMeGd.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(h,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(m,{of:o}),`
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
        onClose={() => {
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
`,e.jsx(c,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e.jsx(a,{})]})}function et(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{et as default};
