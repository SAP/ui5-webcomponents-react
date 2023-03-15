import{j as e,a as t,F as h}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-1f0f3dba.js";import{D as a}from"./DocsHeader-b03eb088.js";import{F as m}from"./Footer-fff5a953.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-a469a52e.js";import{M as l,C as u}from"./index-57064a77.js";import{C as f,D as c}from"./ActionSheet.stories-b605e5f3.js";import{R as g}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as p}from"./index-4fb8b842.js";import{M as S}from"./index-c2d1886d.js";import"./chunk-PCJTTTQV-a8d9cca0.js";import"./iframe-0f93e311.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c92e801e.js";import"./TableOfContent-998d5bca.js";import"./index-7e4f7a74.js";import"./Link-6d546ee9.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./event-97133b94.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d66b3d5e.js";import"./index-e88af4cf.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./Footer.module-f90cad7d.js";import"./index-2f48a6ef.js";import"./Popover-907d427e.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./accept-a98baca8.js";import"./Icons-7b82f601.js";import"./decline-f2b294b3.js";import"./i18n-defaults-80781f7e.js";import"./delete-4d7642ad.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./addCustomCSSWithScoping-4c0cdfa9.js";import"./CustomVariables-fd831c35.js";import"./CssSizeVariables-bd372cde.js";import"./index-29ebb60d.js";import"./ResponsivePopover-36c83c4d.js";import"./Dialog-644759b8.js";import"./ValueState-2c5e5904.js";import"./Icon-459702a7.js";import"./information-50e1ad0f.js";import"./Button-04bad9a0.js";import"./Title-b986a4bd.js";import"./index-b1662cae.js";function Ge(o={}){const{wrapper:r}=Object.assign({},p(),o.components);return r?e(r,Object.assign({},o,{children:e(i,{})})):i();function i(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},p(),o.components);return t(h,{children:[e(l,{of:f}),`
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
`,e(m,{})]})}}export{Ge as default};
//# sourceMappingURL=ActionSheet-2cdc0fbb.js.map
