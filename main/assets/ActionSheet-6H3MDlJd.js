import{j as e}from"./useIsomorphicLayoutEffect-wJjydpYF.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as p,C as s}from"./index-CRsJ87VM.js";import{C as c}from"./ControlsWithNote-E0PmY5Hx.js";import{D as h}from"./DocsHeader-D2b5Kdmx.js";import{F as m}from"./ProjectTemplate-DCXHvhgw.js";import"./index-BP8_t0zE.js";import{C as a,D as o}from"./ActionSheet.stories-DJ9YP_f6.js";import{M as d}from"./index-DdvZYCFL.js";import"./iframe-Fm8z7-pI.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-sIuyk5EO.js";import"./main-HWtSBowW.js";import"./index-BBQEgwzQ.js";import"./UI5Element-DC8MZeOy.js";import"./Boot-DRGCpzpB.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-yz8rUzbr.js";import"./withWebComponent-CWrtEEjV.js";import"./utils-EaJipdFl.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-BdneKiEM.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CmpPkOGs.js";import"./Icons-CG6FlOJ_.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CtgfEhuk.js";import"./sys-help-2-BljVJXa3.js";import"./information-CWnHh7YX.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-BiuXmsCV.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DKt7VHOa.js";import"./index-CjptDDV7.js";import"./Popover-D2WBCDl9.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-C_R40Sx-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BVkg1U_d.js";import"./FocusableElements-CrwTZl4-.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DEdNEOKg.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-MmmenpP7.js";import"./class-map-B9wLsnvZ.js";import"./BrowserScrollbar.css-cD_o1v9b.js";import"./index-BCnCS9qJ.js";import"./Link-Bsw9emR4.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./chunk-HLWAVYOI-CPtW9uxE.js";import"./client-Di-4O7We.js";import"./copy-3Ib5ZJqq.js";import"./index-Dir_-ReC.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-C61_kD7y.js";import"./index-DS2DEobQ.js";import"./i18n-defaults-DzvGxznN.js";import"./I18nContext-RJHUyvz-.js";import"./index-BeDksWJj.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BXZU7gws.js";import"./TableOfContent-DAOKSPoN.js";import"./index-0FzeaIKi.js";import"./Label-IIemeO1C.js";import"./index-hvSgZmqu.js";import"./Button-BrKU6WlN.js";import"./addCustomCSSWithScoping-Bzep2v3d.js";import"./index-B9Dz9UYK.js";import"./index-C7ewmq35.js";import"./Avatar-CzFTtzk7.js";import"./employee-DAykk7OJ.js";import"./index-DGR5qIa9.js";import"./accept-5SoBdaHQ.js";import"./decline--LpgiSgn.js";import"./delete-Dq2K_TXb.js";import"./index-CCvOoubg.js";import"./ResponsivePopover-DzElSN_X.js";import"./Dialog-DHFoNWVc.js";import"./ValueState-Bn-H2OaL.js";import"./Title-IUvBxdmV.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
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
