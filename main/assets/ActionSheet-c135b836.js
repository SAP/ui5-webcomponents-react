import{j as e,a as t,F as s}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-5bee02fe.js";import{D as a}from"./DocsHeader-19fe567c.js";import{F as m}from"./Footer-4f41da50.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-4a33de09.js";import{M as l,C as u}from"./chunk-PCJTTTQV-5f64d55f.js";import{C as f,D as c}from"./ActionSheet.stories-255ca5c0.js";import{R as g}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as p}from"./index-4fb8b842.js";import{M as S}from"./index-53f39dcd.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c34e5229.js";import"./TableOfContent-083bb516.js";import"./index-360f0083.js";import"./iframe-3ebe0622.js";import"../sb-preview/runtime.mjs";import"./Link-8808efba.js";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-53d2517e.js";import"./Label-e24223e9.js";import"./Device-208919c6.js";import"./class-map-6d48ebd3.js";import"./index-96c5f47c.js";import"./index-cc738ad9.js";import"./Popover-eac39f76.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./accept-0670a13e.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./delete-601aa8b1.js";import"./i18n-defaults-f914d614.js";import"./I18nContext-bef5b452.js";import"./addCustomCSSWithScoping-34c73984.js";import"./CustomVariables-fd831c35.js";import"./CssSizeVariables-bd372cde.js";import"./index-c1d9fc10.js";import"./ResponsivePopover-fe818bf5.js";import"./Dialog-0e44ed8a.js";import"./ValueState-2c5e5904.js";import"./information-bce3ba82.js";import"./Button-35e7f923.js";import"./Title-07ee6300.js";import"./index-22be0079.js";function Je(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?e(r,Object.assign({},o,{children:e(i,{})})):i();function i(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},p(),o.components);return t(s,{children:[e(l,{of:f}),`
`,e(a,{}),`
`,e("br",{}),`
`,e(n.h2,{id:"example",children:"Example"}),`
`,e(u,{of:c}),`
`,e(n.h2,{id:"properties",children:"Properties"}),`
`,e(h,{of:c}),`
`,t(n.p,{children:[e(d,{rows:g})," |"]}),`
`,e(n.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,e("br",{}),`
`,e(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
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
`,e(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
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
`,e(n.h2,{id:"using-actionsheets-inside-other-components",children:"Using ActionSheets inside other components"}),`
`,t(n.p,{children:[e(n.code,{children:"ActionSheets"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
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
`,e(m,{})]})}}export{Je as default};
//# sourceMappingURL=ActionSheet-c135b836.js.map
