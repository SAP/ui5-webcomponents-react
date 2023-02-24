import{A as T}from"./DomRefTable.module-30f3bd43.js";import{D as L}from"./DocsHeader-ce92ab0e.js";import{F as A}from"./Footer-c8244a58.js";import{a as n,F as d,j as e}from"./jsx-runtime-670450c2.js";import{r as h}from"./index-f1f749bf.js";import{D as M}from"./DomRefTable-02666777.js";import{M as D,C as P,i as R,a as j}from"./index-02423177.js";import"./settings-10d311b7.js";import{a as g,P as B,b as O}from"./Popover-e3c8ecec.js";import{B as m}from"./index-79b906ee.js";import{B as i}from"./index-373748a1.js";import{I as w}from"./index-f7b539e8.js";import{L as I}from"./index-bd49c23e.js";import{L as y}from"./index-3f70bd96.js";import{S as a}from"./index-eb6fe343.js";import{T as S}from"./index-8ff8581d.js";import{R as c}from"./index-723c1fef.js";import{R as N}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as U}from"./index-9d4f0257.js";import{u as C}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-0db28cca.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Icons-0f428547.js";import"./decline-2be11c85.js";import"./Integer-44c9be94.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./style-map-f4770aeb.js";import"./Bar-c4636896.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-6ca701be.js";import"./Label-aecaa844.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./StandardListItem-ddbc126c.js";import"./ValueState-2c5e5904.js";import"./ListItem-bdb92faa.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./ValueState-ab6838cc.js";import"./Title-fb9c1aba.js";import"./ResponsivePopover-9c15f502.js";import"./Dialog-32c7096e.js";const E=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function _(t={}){const{wrapper:p}=Object.assign({},C(),t.components);return p?e(p,{...t,children:e(r,{})}):r();function r(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},C(),t.components);return n(d,{children:[e(D,{title:"Modals & Popovers / ResponsivePopover",component:c,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"}}),`
`,e(L,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(P,{children:e(R,{name:"Default",children:s=>{const[u,l]=h.useState(s.open);return n(d,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{l(!0)},children:"Open Popover"}),e(c,{...s,onAfterClose:()=>{l(!1)},opener:"openResponsivePopoverBtn",open:u})]})}})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(T,{story:"Default"}),`
`,e(j,{children:E}),`
`,e(M,{rows:N}),`
`,e(o.h2,{children:"Opening ResponsivePopovers"}),`
`,e("br",{}),`
`,e(o.h4,{children:"since 0.22.0"}),`
`,n(o.p,{children:["We recommend opening and closing the ",e(o.code,{children:"ResponsivePopover"})," component in a declarative way using the ",e(o.code,{children:"open"})," and ",e(o.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
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
`,e(o.p,{children:n(o.strong,{children:["Opening a ",e(o.code,{children:"ResponsivePopover"})," by reference and not by ",e(o.code,{children:"id"})]})}),`
`,n(o.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e(o.code,{children:"id"})," to the ",e(o.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e(o.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e(U,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(o.h4,{children:"before 0.22.0"}),`
`,n(o.p,{children:[e(o.code,{children:"ResponsivePopovers"})," can only be opened by attaching a ",e(o.code,{children:"ref"})," to the component and then call the corresponding ",e(o.strong,{children:e(o.code,{children:"showAt"})})," method. The method receives the target element - ",n(o.em,{children:["on which the ",e(o.code,{children:"ResponsivePopover"})," is to be opened"]})," - as parameter."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`  const PopoverComponent = () => {
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
`,e(o.h2,{children:"Using ResponsivePopovers inside other components"}),`
`,n(o.p,{children:[e(o.code,{children:"ResponsivePopovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(o.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",e(o.code,{children:"ResponsivePopover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(o.h2,{children:"Closing ResponsivePopovers"}),`
`,n(o.p,{children:["Closing ",e(o.code,{children:"ResponsivePopovers"}),` works in the same way as opening them.
You can either set the `,e(o.code,{children:"open"})," prop to ",e(o.code,{children:"false"})," or attaching a ",e(o.code,{children:"ref"})," on which the corresponding ",e(o.code,{children:"close"})," method is called."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(o.h1,{children:"More Examples"}),`
`,e(o.h2,{children:"ResponsivePopover with content"}),`
`,e(P,{children:e(R,{name:"with content",children:s=>{const[u,l]=h.useState(!1),b=()=>{l(!0)},f=()=>{l(!1)};return n(d,{children:[e(i,{id:"respPopoverBtn2",onClick:b,children:"Open Responsive Popover"}),e(c,{...s,opener:"respPopoverBtn2",open:u,onAfterClose:f,header:e(m,{endContent:e(w,{name:"settings"}),children:e(S,{children:"Popover"})}),footer:e(m,{endContent:e(i,{onClick:f,children:"Close"})}),children:n(y,{style:{width:"200px"},children:[e(a,{additionalText:"3",children:"List Item 1"}),e(a,{additionalText:"2",children:"List Item 2"}),e(a,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(A,{})]})}}const k=t=>{const[p,r]=h.useState(t.open);return n(d,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e(c,{...t,onAfterClose:()=>{r(!1)},opener:"openResponsivePopoverBtn",open:p})]})};k.storyName="Default";k.parameters={storySource:{source:`args => {
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
}`}};const x=t=>{const[p,r]=h.useState(!1),o=()=>{r(!0)},s=()=>{r(!1)};return n(d,{children:[e(i,{id:"respPopoverBtn2",onClick:o,children:"Open Responsive Popover"}),e(c,{...t,opener:"respPopoverBtn2",open:p,onAfterClose:s,header:e(m,{endContent:e(w,{name:"settings"}),children:e(S,{children:"Popover"})}),footer:e(m,{endContent:e(i,{onClick:s,children:"Close"})}),children:n(y,{style:{width:"200px"},children:[e(a,{additionalText:"3",children:"List Item 1"}),e(a,{additionalText:"2",children:"List Item 2"}),e(a,{additionalText:"1",children:"List Item 3"})]})})]})};x.storyName="with content";x.parameters={storySource:{source:`args => {
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
}`}};const v={title:"Modals & Popovers / ResponsivePopover",component:c,args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:_};const Co=["defaultStory","withContent"];export{Co as __namedExportsOrder,v as default,k as defaultStory,x as withContent};
//# sourceMappingURL=ResponsivePopover.stories-b4c8fe85.js.map
