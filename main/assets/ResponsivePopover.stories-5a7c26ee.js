import{d as L}from"./DomRefTable.module-b94d4cf4.js";import{D as A}from"./DocsHeader-e87500c9.js";import{F as M}from"./Footer-5c62ca44.js";import{a as n,F as l,j as e}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{D}from"./DomRefTable-e8dc4665.js";import{M as j,C as P,f as R,a as N}from"./chunk-PCJTTTQV-8096570c.js";import"./settings-16ef212d.js";import{a as g,P as B,b as O}from"./Popover-eac39f76.js";import{B as h}from"./index-3df3fc94.js";import{B as i}from"./index-95b87af5.js";import{I as w}from"./index-b3b3bbf3.js";import{L as I}from"./index-13cf759c.js";import{L as y}from"./index-1949746e.js";import{S as a}from"./index-6c23c104.js";import{T as S}from"./index-6a1464d4.js";import{R as x}from"./index-b201ab98.js";import{R as m}from"./CodeGen-5daab4bc.js";import{R as U}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as E}from"./index-abbdee96.js";import{u as C}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-55ea55ff.js";import"./TableOfContent-b7af9095.js";import"./index-acee3546.js";import"./iframe-d11ecd2e.js";import"../sb-preview/runtime.mjs";import"./Link-8808efba.js";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-96c5f47c.js";import"./index-c5256de2.js";import"./PopupsCommon.css-ab897c30.js";import"./slot-76e48863.js";import"./Device-208919c6.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./class-map-6d48ebd3.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./i18n-defaults-80781f7e.js";import"./Integer-f7f172c9.js";import"./Bar-93e4db55.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Button-35e7f923.js";import"./Label-e24223e9.js";import"./ListItemBase-b73c7fed.js";import"./ItemNavigation-316291cb.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-1df19c4b.js";import"./StandardListItem-2d39af82.js";import"./ValueState-2c5e5904.js";import"./ListItem-3c89af96.js";import"./decline-07b4d490.js";import"./RadioButton-17175673.js";import"./CheckBox-c006676c.js";import"./accept-0670a13e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-24b9c100.js";import"./Avatar-f4abe909.js";import"./employee-f8bb953b.js";import"./ValueState-ab6838cc.js";import"./Title-07ee6300.js";import"./ResponsivePopover-fe818bf5.js";import"./Dialog-0e44ed8a.js";import"./information-bce3ba82.js";const _=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`;function z(t={}){const{wrapper:p}=Object.assign({},C(),t.components);return p?e(p,{...t,children:e(r,{})}):r();function r(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},C(),t.components);return n(l,{children:[e(j,{title:"Modals & Popovers / ResponsivePopover",component:x,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"}}),`
`,e(A,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{id:"example",children:"Example"}),`
`,e(P,{children:e(R,{name:"Default",children:s=>{const[u,c]=d.useState(s.open);return n(l,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{c(!0)},children:"Open Popover"}),e(m,{...s,onAfterClose:()=>{c(!1)},opener:"openResponsivePopoverBtn",open:u})]})}})}),`
`,e(o.h2,{id:"properties",children:"Properties"}),`
`,e(L,{story:"Default"}),`
`,e(N,{children:_}),`
`,e(D,{rows:U}),`
`,e(o.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,e("br",{}),`
`,e(o.h4,{id:"since-0220",children:"since 0.22.0"}),`
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
`,e(E,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e(o.h4,{id:"before-0220",children:"before 0.22.0"}),`
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
`,e(o.h2,{id:"using-responsivepopovers-inside-other-components",children:"Using ResponsivePopovers inside other components"}),`
`,n(o.p,{children:[e(o.code,{children:"ResponsivePopovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(o.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e(o.code,{children:"ResponsivePopover"})," outside of the DOM hierarchy of the parent component."]}),`
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
`,e(o.h2,{id:"closing-responsivepopovers",children:"Closing ResponsivePopovers"}),`
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
`,e(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e(o.h2,{id:"responsivepopover-with-content",children:"ResponsivePopover with content"}),`
`,e(P,{children:e(R,{name:"with content",children:s=>{const[u,c]=d.useState(!1),T=()=>{c(!0)},f=()=>{c(!1)};return n(l,{children:[e(i,{id:"respPopoverBtn2",onClick:T,children:"Open Responsive Popover"}),e(m,{...s,opener:"respPopoverBtn2",open:u,onAfterClose:f,header:e(h,{endContent:e(w,{name:"settings"}),children:e(S,{children:"Popover"})}),footer:e(h,{endContent:e(i,{onClick:f,children:"Close"})}),children:n(y,{style:{width:"200px"},children:[e(a,{additionalText:"3",children:"List Item 1"}),e(a,{additionalText:"2",children:"List Item 2"}),e(a,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(M,{})]})}}const k=t=>{const[p,r]=d.useState(t.open);return n(l,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e(m,{...t,onAfterClose:()=>{r(!1)},opener:"openResponsivePopoverBtn",open:p})]})};k.storyName="Default";k.parameters={storySource:{source:`args => {
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
}`}};const b=t=>{const[p,r]=d.useState(!1),o=()=>{r(!0)},s=()=>{r(!1)};return n(l,{children:[e(i,{id:"respPopoverBtn2",onClick:o,children:"Open Responsive Popover"}),e(m,{...t,opener:"respPopoverBtn2",open:p,onAfterClose:s,header:e(h,{endContent:e(w,{name:"settings"}),children:e(S,{children:"Popover"})}),footer:e(h,{endContent:e(i,{onClick:s,children:"Close"})}),children:n(y,{style:{width:"200px"},children:[e(a,{additionalText:"3",children:"List Item 1"}),e(a,{additionalText:"2",children:"List Item 2"}),e(a,{additionalText:"1",children:"List Item 3"})]})})]})};b.storyName="with content";b.parameters={storySource:{source:`args => {
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
}`}};const v={title:"Modals & Popovers / ResponsivePopover",component:x,args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:z};const bo=["defaultStory","withContent"];export{bo as __namedExportsOrder,v as default,k as defaultStory,b as withContent};
//# sourceMappingURL=ResponsivePopover.stories-5a7c26ee.js.map
