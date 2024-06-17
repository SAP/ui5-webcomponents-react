import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as i}from"./index-Bql5lgBm.js";import{M as p,C as s}from"./index-iULR_kpT.js";import{M as c}from"./index-CV7fJtKN.js";import{C as h}from"./ControlsWithNote-DeYQ57Hu.js";import{D as m}from"./DocsHeader-B1J4JqLh.js";import{F as a}from"./ProjectTemplate-CB2C6ugZ.js";import"./index-CP2MHerv.js";import"./WrappingType-CW8URInd.js";import{C as d,D as o}from"./ActionSheet.stories-D9DXZYvy.js";import"./iframe-BT3dBJb8.js";import"../sb-preview/runtime.js";import"./index-CUD6gg2y.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./Boot-CUKJMqeB.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-BJ75y3Nh.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DUapXIrq.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-DSgXoUhG.js";import"./main-J1meqccC.js";import"./index-Ck2iqYp5.js";import"./Tag-DHJn2Stl.js";import"./sys-help-2-BIIHI8V5.js";import"./index-BTKixQtf.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-fkXM4tlm.js";import"./Link-D4QFbUsq.js";import"./chunk-HLWAVYOI-BK11lLZ3.js";import"./client-CeotCdvV.js";import"./copy-CyR7DYXM.js";import"./copy-BR6xdeTx.js";import"./index-CLsLcJtX.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./GitHub-Mark-DCTbc_R1.js";import"./TableOfContent-DcvxAg33.js";import"./index-BRbfZ8TA.js";import"./Label-aqqXsG4M.js";import"./index-BLLqbIKJ.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-BzPxJpX0.js";import"./index-DSJfAGO8.js";import"./index-BJTAaYKj.js";import"./Avatar-BFwygaOl.js";import"./employee-CKaAdAd4.js";import"./accept-Tej0xwW-.js";import"./decline-C8Rs0K4j.js";import"./delete-BlgamWkf.js";import"./index-Becfgart.js";import"./ResponsivePopover-6Cmaenjk.js";import"./Dialog-Cwbenurs.js";import"./ValueState-Bg0UWejw.js";import"./Title-DOT2nEnt.js";function r(n){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(m,{subComponents:["Button"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:o}),`
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
`,e.jsx(a,{})]})}function $e(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{$e as default};
