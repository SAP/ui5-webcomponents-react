import{j as e}from"./jsx-runtime-ccada58e.js";import{C as c}from"./DomRefTable.module-a2b6f51f.js";import{D as p}from"./DocsHeader-63d4f368.js";import{F as h}from"./Footer-e9e07b55.js";import"./index-f1f749bf.js";import{D as a}from"./DomRefTable-38ab2e0a.js";import{M as m,C as d}from"./chunk-PCJTTTQV-4ae10e69.js";import{C as l,D as i}from"./ActionSheet.stories-833cebc2.js";import{R as u}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as s}from"./index-4fb8b842.js";import{M as x}from"./index-0998c6eb.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9bb0c7b4.js";import"./clsx.m-1229b3e0.js";import"./index-334d9c45.js";import"./ThemingParameters-f4b4144e.js";import"./Import-cbc02a31.js";import"./TableOfContent-c5f2387f.js";import"./index-3aa6c6b1.js";import"./iframe-4723bbc5.js";import"../sb-preview/runtime.mjs";import"./Link-756c9448.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-791919b7.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-b04dccd7.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-be37d3aa.js";import"./Label-0e5fa470.js";import"./Device-208919c6.js";import"./class-map-dc0989fc.js";import"./index-96c5f47c.js";import"./index-51c5b0ca.js";import"./Popover-a5930009.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-4412d83b.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-0dbd5acf.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-d22cbf2f.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./accept-9744f30a.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./delete-86ba691f.js";import"./i18n-defaults-57d9744b.js";import"./I18nContext-bef5b452.js";import"./addCustomCSSWithScoping-3a8770ef.js";import"./CustomVariables-fd831c35.js";import"./CssSizeVariables-bd372cde.js";import"./index-03258fae.js";import"./ResponsivePopover-98351475.js";import"./Dialog-fdd9c36a.js";import"./ValueState-2c5e5904.js";import"./information-2c502181.js";import"./Button-08c55dbf.js";import"./Title-1c5327cd.js";import"./index-2dc3b07a.js";function Ye(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:l}),`
`,e.jsx(p,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{rows:u})," |"]}),`
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
`,e.jsx(x,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
In this case, we recommend using `,e.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(n.code,{children:"ActionSheet"})," outside of the DOM hierarchy of the parent component."]}),`
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
`,e.jsx(h,{})]})}}export{Ye as default};
//# sourceMappingURL=ActionSheet-e44db907.js.map
