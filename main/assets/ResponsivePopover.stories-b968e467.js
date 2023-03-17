import{d as L}from"./DomRefTable.module-529e2c9b.js";import{D as A}from"./DocsHeader-dc7b0421.js";import{F as M}from"./Footer-b315d151.js";import{a as n,F as l,j as e}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{D}from"./DomRefTable-8d664da8.js";import{M as j,C as P,f as R,a as N}from"./chunk-PCJTTTQV-347fd8ec.js";import"./settings-f4b98acd.js";import{a as g,P as B,b as O}from"./Popover-224d761a.js";import{B as h}from"./index-52c86b48.js";import{B as i}from"./index-7adf8db1.js";import{I as w}from"./index-9668a61f.js";import{L as I}from"./index-cf2e7231.js";import{L as y}from"./index-21a6a233.js";import{S as a}from"./index-a1d2693e.js";import{T as S}from"./index-d8212c6d.js";import{R as k}from"./index-74d85c4a.js";import{R as m}from"./CodeGen-9ac48189.js";import{R as U}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as E}from"./index-380eaa8f.js";import{u as C}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-c1474d4d.js";import"./TableOfContent-f27a0f87.js";import"./index-16557c79.js";import"./iframe-14fcefcb.js";import"../sb-preview/runtime.mjs";import"./Link-018547e8.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./index-96c5f47c.js";import"./index-4254c8e7.js";import"./PopupsCommon.css-9873a291.js";import"./slot-634e3e91.js";import"./Device-208919c6.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./class-map-95320e87.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./i18n-defaults-80781f7e.js";import"./Integer-f7f172c9.js";import"./Bar-78c6a88f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Button-bc3a11a1.js";import"./Label-ccc234fe.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./StandardListItem-ac3f40c5.js";import"./ValueState-2c5e5904.js";import"./ListItem-83c0fb9e.js";import"./decline-6bd98a2e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ValueState-ab6838cc.js";import"./Title-129aeb28.js";import"./ResponsivePopover-fcaf2b05.js";import"./Dialog-43ec4fb1.js";import"./information-b6c8ed8e.js";const _=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`;function z(t={}){const{wrapper:p}=Object.assign({},C(),t.components);return p?e(p,{...t,children:e(r,{})}):r();function r(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},C(),t.components);return n(l,{children:[e(j,{title:"Modals & Popovers / ResponsivePopover",component:k,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"}}),`
`,e(A,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(P,{children:e(R,{name:"Default",children:s=>{const[u,c]=d.useState(s.open);return n(l,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{c(!0)},children:"Open Popover"}),e(m,{...s,onAfterClose:()=>{c(!1)},opener:"openResponsivePopoverBtn",open:u})]})}})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(L,{story:"Default"}),`
`,e(N,{children:_}),`
`,e(D,{rows:U}),`
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
`,e(P,{children:e(R,{name:"with content",children:s=>{const[u,c]=d.useState(!1),T=()=>{c(!0)},f=()=>{c(!1)};return n(l,{children:[e(i,{id:"respPopoverBtn2",onClick:T,children:"Open Responsive Popover"}),e(m,{...s,opener:"respPopoverBtn2",open:u,onAfterClose:f,header:e(h,{endContent:e(w,{name:"settings"}),children:e(S,{children:"Popover"})}),footer:e(h,{endContent:e(i,{onClick:f,children:"Close"})}),children:n(y,{style:{width:"200px"},children:[e(a,{additionalText:"3",children:"List Item 1"}),e(a,{additionalText:"2",children:"List Item 2"}),e(a,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(M,{})]})}}const x=t=>{const[p,r]=d.useState(t.open);return n(l,{children:[e(i,{id:"openResponsivePopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e(m,{...t,onAfterClose:()=>{r(!1)},opener:"openResponsivePopoverBtn",open:p})]})};x.storyName="Default";x.parameters={storySource:{source:`args => {
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
}`}};const v={title:"Modals & Popovers / ResponsivePopover",component:k,args:{children:e(I,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:g.Center,placementType:B.Right,verticalAlign:O.Center,opener:"openPopoverBtn"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:z};const To=["defaultStory","withContent"];export{To as __namedExportsOrder,v as default,x as defaultStory,b as withContent};
//# sourceMappingURL=ResponsivePopover.stories-b968e467.js.map
