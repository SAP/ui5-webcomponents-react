import{e as k}from"./DomRefTable.module-2c3fee7b.js";import{D as b}from"./DocsHeader-7a932e7b.js";import{F as T}from"./Footer-172042a0.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{r as c}from"./index-ebeaab24.js";import{D as L}from"./DomRefTable-567cc405.js";import{M as A,C as x,f as u,a as M}from"./chunk-PCJTTTQV-4e89d9f3.js";import"./settings-1a3068b6.js";import{a as j,P,b as R}from"./Popover-aaa493d1.js";import{B as l}from"./index-1fdebf1c.js";import{B as p}from"./index-9aabde06.js";import{I as g}from"./index-ab95084e.js";import{L as C}from"./index-8c5338d1.js";import{L as B}from"./index-e23baf4e.js";import{S as i}from"./index-c7903480.js";import{T as O}from"./index-8b4a9b90.js";import{R as w}from"./index-703d773c.js";import{R as d}from"./CodeGen-7f134adf.js";import{R as D}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as N}from"./index-2b834fa7.js";import{u as f}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-a40016d3.js";import"./index-672bfa7a.js";import"./iframe-d7e4e9dc.js";import"../sb-preview/runtime.js";import"./Link-d48f545c.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-9c09ad76.js";import"./index-00054e05.js";import"./PopupsCommon.css-a5a6237e.js";import"./slot-76e48863.js";import"./Device-208919c6.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./decline-02d24632.js";import"./i18n-defaults-80781f7e.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./class-map-519e9c6d.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Integer-f7f172c9.js";import"./Bar-5072b9d6.js";import"./parameters-bundle.css-deb4e0b1.js";import"./Button-0cdf0df4.js";import"./Label-07c40881.js";import"./ListItemBase-e3ea9589.js";import"./ItemNavigation-18d1bc39.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9f101f31.js";import"./StandardListItem-68d600ed.js";import"./ValueState-2c5e5904.js";import"./ListItem-9ee5a385.js";import"./RadioButton-8f2ea794.js";import"./CheckBox-0dc7f77e.js";import"./accept-83b05845.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-62d048e9.js";import"./Avatar-b9c0c6ae.js";import"./employee-0da36253.js";import"./ValueState-ab6838cc.js";import"./Title-693a182d.js";import"./ResponsivePopover-53484bae.js";import"./Dialog-5c8482e3.js";import"./information-aaa07e0e.js";const E=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function F(n={}){const{wrapper:s}=Object.assign({},f(),n.components);return s?e.jsx(s,{...n,children:e.jsx(t,{})}):t();function t(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},f(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Modals & Popovers / ResponsivePopover",component:w,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(C,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:j.Center,placementType:P.Right,verticalAlign:R.Center,opener:"openPopoverBtn"}}),`
`,e.jsx(b,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(x,{children:e.jsx(u,{name:"Default",children:r=>{const[m,a]=c.useState(r.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openResponsivePopoverBtn",onClick:()=>{a(!0)},children:"Open Popover"}),e.jsx(d,{...r,onAfterClose:()=>{a(!1)},opener:"openResponsivePopoverBtn",open:m})]})}})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(M,{children:E}),`
`,e.jsx(L,{rows:D}),`
`,e.jsx(o.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(o.p,{children:["We recommend opening and closing the ",e.jsx(o.code,{children:"ResponsivePopover"})," component in a declarative way using the ",e.jsx(o.code,{children:"open"})," and ",e.jsx(o.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openPopoverBtn'}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={'openPopoverBtn'}
        open={popoverIsOpen}
        onAfterClose={() => {
          setResponsivePopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Opening a ",e.jsx(o.code,{children:"ResponsivePopover"})," by reference and not by ",e.jsx(o.code,{children:"id"})]})}),`
`,e.jsxs(o.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(o.code,{children:"id"})," to the ",e.jsx(o.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(o.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(N,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
      <ResponsivePopover ref={popoverRef} open={open}>
        {/* Content */}
      </ResponsivePopover>
    </>
  );
};
`})}),`
`,e.jsx(o.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"ResponsivePopovers"})," can only be opened by attaching a ",e.jsx(o.code,{children:"ref"})," to the component and then call the corresponding ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(o.em,{children:["on which the ",e.jsx(o.code,{children:"ResponsivePopover"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`  const PopoverComponent = () => {
    const popoverRef = useRef(null);
    const onButtonClick = (e) => {
        popoverRef.current.showAt(e.target);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Popover</Button>
        <ResponsivePopover ref={popoverRef}>Some Content</ResponsivePopovers>
      </>
    );
  };
`})}),`
`,e.jsx(o.h2,{id:"using-responsivepopovers-inside-other-components",children:"Using ResponsivePopovers inside other components"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"ResponsivePopovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(o.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(o.code,{children:"ResponsivePopover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      {createPortal(<ResponsivePopovers ref={popoverRef} />, document.body)}
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"closing-responsivepopovers",children:"Closing ResponsivePopovers"}),`
`,e.jsxs(o.p,{children:["Closing ",e.jsx(o.code,{children:"ResponsivePopovers"}),` works in the same way as opening them.
You can either set the `,e.jsx(o.code,{children:"open"})," prop to ",e.jsx(o.code,{children:"false"})," or attaching a ",e.jsx(o.code,{children:"ref"})," on which the corresponding ",e.jsx(o.code,{children:"close"})," method is called."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const handleOpen = (e) => {
    popoverRef.current.showAt(e.target);
  };
  const handleClose = () => {
    popoverRef.current.close();
  };
  return (
    <>
      <Button onClick={handleOpen}>Open Popover</Button>
      <ResponsivePopovers ref={popoverRef}>
        <Button onClick={handleClose}>Close Popover</Button>
      </ResponsivePopovers>
    </>
  );
};
`})}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h2,{id:"responsivepopover-with-content",children:"ResponsivePopover with content"}),`
`,e.jsx(x,{children:e.jsx(u,{name:"with content",children:r=>{const[m,a]=c.useState(!1),S=()=>{a(!0)},v=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"respPopoverBtn2",onClick:S,children:"Open Responsive Popover"}),e.jsx(d,{...r,opener:"respPopoverBtn2",open:m,onAfterClose:v,header:e.jsx(l,{endContent:e.jsx(g,{name:"settings"}),children:e.jsx(O,{children:"Popover"})}),footer:e.jsx(l,{endContent:e.jsx(p,{onClick:v,children:"Close"})}),children:e.jsxs(B,{style:{width:"200px"},children:[e.jsx(i,{additionalText:"3",children:"List Item 1"}),e.jsx(i,{additionalText:"2",children:"List Item 2"}),e.jsx(i,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e.jsx(T,{})]})}}const I=n=>{const[s,t]=c.useState(n.open);return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"openResponsivePopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(d,{...n,onAfterClose:()=>{t(!1)},opener:"openResponsivePopoverBtn",open:s})]})};I.storyName="Default";I.parameters={storySource:{source:`args => {
  const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(isChromatic || args.open);
  return <>
          <Button id={"openResponsivePopoverBtn"} onClick={() => {
      setResponsivePopoverIsOpen(true);
    }}>
            Open Popover
          </Button>
          <ResponsivePopover {...args} onAfterClose={() => {
      setResponsivePopoverIsOpen(false);
    }} opener="openResponsivePopoverBtn" open={responsivePopoverIsOpen} />
        </>;
}`}};const y=n=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},r=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"respPopoverBtn2",onClick:o,children:"Open Responsive Popover"}),e.jsx(d,{...n,opener:"respPopoverBtn2",open:s,onAfterClose:r,header:e.jsx(l,{endContent:e.jsx(g,{name:"settings"}),children:e.jsx(O,{children:"Popover"})}),footer:e.jsx(l,{endContent:e.jsx(p,{onClick:r,children:"Close"})}),children:e.jsxs(B,{style:{width:"200px"},children:[e.jsx(i,{additionalText:"3",children:"List Item 1"}),e.jsx(i,{additionalText:"2",children:"List Item 2"}),e.jsx(i,{additionalText:"1",children:"List Item 3"})]})})]})};y.storyName="with content";y.parameters={storySource:{source:`args => {
  const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(false);

  const onButtonClick = () => {
    setResponsivePopoverIsOpen(true);
  };

  const handleClose = () => {
    setResponsivePopoverIsOpen(false);
  };

  return <>
          <Button id="respPopoverBtn2" onClick={onButtonClick}>
            Open Responsive Popover
          </Button>
          <ResponsivePopover {...args} opener="respPopoverBtn2" open={responsivePopoverIsOpen} onAfterClose={handleClose} header={<Bar endContent={<Icon name="settings" />}>
                <Title>Popover</Title>
              </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
            <List style={{
        width: "200px"
      }}>
              <StandardListItem additionalText="3">List Item 1</StandardListItem>
              <StandardListItem additionalText="2">List Item 2</StandardListItem>
              <StandardListItem additionalText="1">List Item 3</StandardListItem>
            </List>
          </ResponsivePopover>
        </>;
}`}};const h={title:"Modals & Popovers / ResponsivePopover",component:w,args:{children:e.jsx(C,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:j.Center,placementType:P.Right,verticalAlign:R.Center,opener:"openPopoverBtn"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:F};const Bo=["defaultStory","withContent"];export{Bo as __namedExportsOrder,h as default,I as defaultStory,y as withContent};
//# sourceMappingURL=ResponsivePopover.stories-b0c3d8e6.js.map
