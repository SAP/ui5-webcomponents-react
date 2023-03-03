import{A as x}from"./DomRefTable.module-060b9184.js";import{D as L}from"./DocsHeader-3b33ad08.js";import{F as A}from"./Footer-efa101c3.js";import{j as e,a as n,F as d}from"./jsx-runtime-670450c2.js";import{r as h}from"./index-f1f749bf.js";import{D as _}from"./DomRefTable-d5a12e27.js";import{M as N,C as P,i as R,a as V}from"./index-3cfc21ba.js";import"./settings-259db384.js";import{a as y,P as w,b}from"./Popover-97ca01c1.js";import{B as m}from"./index-72b2a12f.js";import{B as a}from"./index-c93d4bdb.js";import{I as B}from"./index-40b3dcba.js";import{L as S}from"./index-4188b6dc.js";import{L as O}from"./index-516f9ba2.js";import{S as l}from"./index-eaf170f0.js";import{T as I}from"./index-138c4579.js";import{R as f}from"./index-608cd87d.js";import{r as q}from"./index-96c5f47c.js";import{R as M}from"./ResponsivePopoverDomRef-b2da8c70.js";import{M as U}from"./index-925ac88a.js";import{u as C}from"./index-4fb8b842.js";import"./chunk-G4YQS2SV-0cbfd6a9.js";import"./iframe-7e1e0e22.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-12600013.js";import"./TableOfContent-ab45e62c.js";import"./index-7025512e.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-0e37da6f.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-7e960422.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Icons-5bcf1e3f.js";import"./decline-ff534003.js";import"./Integer-8010a7ae.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./Bar-b4a14d85.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-2e5054c2.js";import"./Label-6707bdfc.js";import"./ListItemBase-ef18a748.js";import"./ItemNavigation-4b509b49.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-59c61392.js";import"./StandardListItem-cb5818d4.js";import"./ValueState-2c5e5904.js";import"./ListItem-9550e3d3.js";import"./RadioButton-d0c7abe6.js";import"./CheckBox-2890456e.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-b22f5314.js";import"./employee-10cd14ab.js";import"./ValueState-ab6838cc.js";import"./Title-18f6d5a1.js";import"./ResponsivePopover-bf5faf8e.js";import"./Dialog-859ab2f5.js";const E=`## Usage

Use it when you want to make sure that all the content is visible on any device.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`ResponsivePopover\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`,p=h.forwardRef((t,r)=>q.createPortal(e(f,{...t,ref:r}),document.body));p.displayName="ResponsivePopover";try{p.displayName="ResponsivePopover",p.__docgenInfo={description:"",displayName:"ResponsivePopover",props:{footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Left`\n*   `Right`\n*   `Stretch`",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.\n\nAvailable options are:\n\n*   `Left`\n*   `Right`\n*   `Top`\n*   `Bottom`",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Top`\n*   `Bottom`\n*   `Stretch`",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}function F(t={}){const{wrapper:r}=Object.assign({},C(),t.components);return r?e(r,{...t,children:e(s,{})}):s();function s(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},C(),t.components);return n(d,{children:[e(N,{title:"Modals & Popovers / ResponsivePopover",component:f,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(S,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:y.Center,placementType:w.Right,verticalAlign:b.Center,opener:"openPopoverBtn"}}),`
`,e(L,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(o.h2,{children:"Example"}),`
`,e(P,{children:e(R,{name:"Default",children:i=>{const[v,c]=h.useState(i.open);return n(d,{children:[e(a,{id:"openResponsivePopoverBtn",onClick:()=>{c(!0)},children:"Open Popover"}),e(p,{...i,onAfterClose:()=>{c(!1)},opener:"openResponsivePopoverBtn",open:v})]})}})}),`
`,e(o.h2,{children:"Properties"}),`
`,e(x,{story:"Default"}),`
`,e(V,{children:E}),`
`,e(_,{rows:M}),`
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
`,e(P,{children:e(R,{name:"with content",children:i=>{const[v,c]=h.useState(!1),D=()=>{c(!0)},g=()=>{c(!1)};return n(d,{children:[e(a,{id:"respPopoverBtn2",onClick:D,children:"Open Responsive Popover"}),e(p,{...i,opener:"respPopoverBtn2",open:v,onAfterClose:g,header:e(m,{endContent:e(B,{name:"settings"}),children:e(I,{children:"Popover"})}),footer:e(m,{endContent:e(a,{onClick:g,children:"Close"})}),children:n(O,{style:{width:"200px"},children:[e(l,{additionalText:"3",children:"List Item 1"}),e(l,{additionalText:"2",children:"List Item 2"}),e(l,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(A,{})]})}}const T=t=>{const[r,s]=h.useState(t.open);return n(d,{children:[e(a,{id:"openResponsivePopoverBtn",onClick:()=>{s(!0)},children:"Open Popover"}),e(p,{...t,onAfterClose:()=>{s(!1)},opener:"openResponsivePopoverBtn",open:r})]})};T.storyName="Default";T.parameters={storySource:{source:`args => {
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
}`}};const k=t=>{const[r,s]=h.useState(!1),o=()=>{s(!0)},i=()=>{s(!1)};return n(d,{children:[e(a,{id:"respPopoverBtn2",onClick:o,children:"Open Responsive Popover"}),e(p,{...t,opener:"respPopoverBtn2",open:r,onAfterClose:i,header:e(m,{endContent:e(B,{name:"settings"}),children:e(I,{children:"Popover"})}),footer:e(m,{endContent:e(a,{onClick:i,children:"Close"})}),children:n(O,{style:{width:"200px"},children:[e(l,{additionalText:"3",children:"List Item 1"}),e(l,{additionalText:"2",children:"List Item 2"}),e(l,{additionalText:"1",children:"List Item 3"})]})})]})};k.storyName="with content";k.parameters={storySource:{source:`args => {
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
}`}};const u={title:"Modals & Popovers / ResponsivePopover",component:f,args:{children:e(S,{children:'Press "Esc", click outside or in mobile-mode press the "x" in the corner to close the ResponsivePopover.'}),headerText:"ResponsivePopover Header",horizontalAlign:y.Center,placementType:w.Right,verticalAlign:b.Center,opener:"openPopoverBtn"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:F};const wo=["defaultStory","withContent"];export{wo as __namedExportsOrder,u as default,T as defaultStory,k as withContent};
//# sourceMappingURL=ResponsivePopover.stories-ce25bdae.js.map
