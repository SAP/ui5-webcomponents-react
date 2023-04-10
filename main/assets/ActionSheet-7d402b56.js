import{j as e,a as t,F as s}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-7ccc680d.js";import{D as a}from"./DocsHeader-f6424144.js";import{F as m}from"./Footer-02dced94.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-9828962a.js";import{M as l,C as u}from"./chunk-PCJTTTQV-d9e1f245.js";import{C as f,D as c}from"./ActionSheet.stories-36b418c2.js";import{R as g}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as p}from"./index-4fb8b842.js";import{M as S}from"./index-af8e863f.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-526feece.js";import"./TableOfContent-786bd8f6.js";import"./index-60854897.js";import"./iframe-c2cea1d1.js";import"../sb-preview/runtime.mjs";import"./Link-706be030.js";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-4836378a.js";import"./Label-e3d88218.js";import"./Device-208919c6.js";import"./class-map-6d48ebd3.js";import"./index-96c5f47c.js";import"./index-3e009d02.js";import"./Popover-4088d87a.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./accept-ca825c33.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./delete-50c6a9bb.js";import"./i18n-defaults-a2281a8e.js";import"./I18nContext-bef5b452.js";import"./addCustomCSSWithScoping-0859af07.js";import"./CustomVariables-fd831c35.js";import"./CssSizeVariables-bd372cde.js";import"./index-eabd23cb.js";import"./ResponsivePopover-f45885b9.js";import"./Dialog-c83d8172.js";import"./ValueState-2c5e5904.js";import"./information-859245b4.js";import"./Button-400e2491.js";import"./Title-6041704e.js";import"./index-638222cb.js";function Je(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?e(r,Object.assign({},o,{children:e(i,{})})):i();function i(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},p(),o.components);return t(s,{children:[e(l,{of:f}),`
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
//# sourceMappingURL=ActionSheet-7d402b56.js.map
