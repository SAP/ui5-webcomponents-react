import{j as e,a as t,F as h}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-fb210060.js";import{D as a}from"./DocsHeader-b1974699.js";import{F as m}from"./Footer-54fe8402.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-675f43fa.js";import{M as l,C as u}from"./index-fc65de3d.js";import{C as f,D as c}from"./ActionSheet.stories-e45a26f8.js";import{R as g}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as p}from"./index-4fb8b842.js";import{M as S}from"./index-cbce79a2.js";import"./chunk-G4YQS2SV-3a764711.js";import"./iframe-51c9489d.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-8d74f27b.js";import"./TableOfContent-9c193c7f.js";import"./index-e644fe70.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-0e37da6f.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./index-224c0e2b.js";import"./Label-f9741f9c.js";import"./class-map-60f59e95.js";import"./Footer.module-c4f3b823.js";import"./index-273db19e.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./accept-39710bd2.js";import"./Icons-03f19c25.js";import"./decline-48ecb430.js";import"./delete-16a185eb.js";import"./i18n-defaults-fdda04bc.js";import"./I18nContext-bef5b452.js";import"./addCustomCSSWithScoping-6aa4fe38.js";import"./CustomVariables-fd831c35.js";import"./CssSizeVariables-bd372cde.js";import"./index-246e3aca.js";import"./ResponsivePopover-f9a06272.js";import"./Dialog-30b3aaf0.js";import"./ValueState-2c5e5904.js";import"./Button-981a9381.js";import"./Title-256f7c0a.js";import"./index-b690387f.js";function Pe(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?e(r,Object.assign({},o,{children:e(i,{})})):i();function i(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},p(),o.components);return t(h,{children:[e(l,{of:f}),`
`,e(a,{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(u,{of:c}),`
`,e(n.h2,{children:"Properties"}),`
`,e(s,{of:c}),`
`,t(n.p,{children:[e(d,{rows:g})," |"]}),`
`,e(n.h2,{children:"Opening ActionSheets"}),`
`,e("br",{}),`
`,e(n.h4,{children:"since 0.22.0"}),`
`,t(n.p,{children:["We recommend opening and closing the ",e(n.code,{children:"ActionSheet"})," component in a declarative way using the ",e(n.code,{children:"open"})," and ",e(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MyComponentWithActionSheet = () => {
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
`,e(n.p,{children:t(n.strong,{children:["Opening an ",e(n.code,{children:"ActionSheet"})," by reference and not by ",e(n.code,{children:"id"})]})}),`
`,t(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e(n.code,{children:"id"})," to the ",e(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e(S,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
  using this approach!`}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e(n.h4,{children:"before 0.22.0"}),`
`,t(n.p,{children:[e(n.code,{children:"ActionSheets"})," can only be opened by attaching a ",e(n.code,{children:"ref"})," to the component and then call the corresponding ",e(n.strong,{children:e(n.code,{children:"showAt"})})," method. The method receives the target element - ",t(n.em,{children:["on which the ",e(n.code,{children:"ActionSheet"})," is to be opened"]})," - as parameter."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,e(n.h2,{children:"Using ActionSheets inside other components"}),`
`,t(n.p,{children:[e(n.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(n.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",e(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-JSX",children:`const ActionSheetComponent = () => {
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
`,e(m,{})]})}}export{Pe as default};
//# sourceMappingURL=ActionSheet-f89f2ea8.js.map
