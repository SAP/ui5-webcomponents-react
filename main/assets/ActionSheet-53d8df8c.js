import{j as e}from"./jsx-runtime-d079401a.js";import{C as c}from"./DomRefTable.module-5f7d4bb9.js";import{D as p}from"./DocsHeader-bf16386f.js";import{F as h}from"./Footer-db4cba16.js";import"./index-f1f2c4b1.js";import{M as a,C as m}from"./chunk-S4VUQJ4A-439e91d3.js";import{D as d}from"./DomRefTable-2d2b8543.js";import{C as l,D as i}from"./ActionSheet.stories-6166cb70.js";import{R as u}from"./ResponsivePopoverDomRef-b2da8c70.js";import{u as s}from"./index-59d6410c.js";import{M as x}from"./index-a597240d.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./utils-e9940b93.js";import"./index-036d6662.js";import"./iframe-9aa476e7.js";import"../sb-preview/runtime.js";import"./withWebComponent-b4c67a1a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./Integer-f7f172c9.js";import"./class-map-e1b423a4.js";import"./i18n-defaults-d5195a49.js";import"./index-41f46b2e.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./alert-7494fabe.js";import"./index-36550905.js";import"./AriaLabelHelper-43a261ec.js";import"./index-cea49163.js";import"./Link-a373b451.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-f9caa56d.js";import"./index-e0ea9518.js";import"./Label-69062358.js";import"./index-b42968db.js";import"./index-f7f79d36.js";import"./Button-4505b9f6.js";import"./index-b0dfbba4.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./accept-92104380.js";import"./delete-ddd33e93.js";import"./i18n-defaults-c3ad23f6.js";import"./I18nContext-dd74d568.js";import"./useIsRTL-9db2a057.js";import"./CustomVariables-f4d4caba.js";import"./CssSizeVariables-596b7aba.js";import"./index-68d8343d.js";import"./ResponsivePopover-ffa286b7.js";import"./Dialog-cf714d6a.js";import"./ValueState-2c5e5904.js";import"./information-e97f915a.js";import"./Title-0fb688d3.js";function Je(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h2:"h2",p:"p",h4:"h4",code:"code",pre:"pre",strong:"strong",em:"em",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(p,{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
`,e.jsxs(n.p,{children:[e.jsx(d,{rows:u})," |"]}),`
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
`,e.jsx(h,{})]})}}export{Je as default};
//# sourceMappingURL=ActionSheet-53d8df8c.js.map
