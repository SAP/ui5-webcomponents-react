import{e as T}from"./DomRefTable.module-75b81cf7.js";import{D as R}from"./DocsHeader-a27e58e8.js";import{F as D}from"./Footer-ff60e615.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{r as c}from"./index-ebeaab24.js";import{D as k}from"./DomRefTable-b6d9eec7.js";import{M as L,C as f,f as v,a as A}from"./chunk-PCJTTTQV-40505ee2.js";import"./settings-bc9c7eeb.js";import{a as x,P,b as j}from"./Popover-ceaaf26b.js";import{B as d}from"./index-8270682e.js";import{B as a}from"./index-68f05016.js";import{M as N}from"./index-0fe0e6ec.js";import{I as y}from"./index-2b93e8f0.js";import{L as w}from"./index-6392da1b.js";import{L as b}from"./index-eaba8213.js";import{S as p}from"./index-ca9db3fd.js";import{T as C}from"./index-c944718b.js";import{P as u}from"./index-9779548c.js";import{r as _}from"./index-9c09ad76.js";import{u as g}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-a77d7cda.js";import"./iframe-45204dbc.js";import"../sb-preview/runtime.js";import"./withWebComponent-7b9bd1ee.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-bd7f152d.js";import"./Icons-bac066a4.js";import"./Device-99b8bbf4.js";import"./Integer-f7f172c9.js";import"./class-map-6a9bd920.js";import"./i18n-defaults-ac1c9dde.js";import"./index-cc894c11.js";import"./Avatar-a8f74fed.js";import"./ResizeHandler-021ae412.js";import"./employee-a1fe0822.js";import"./index-47724e42.js";import"./AriaLabelHelper-43a261ec.js";import"./index-1c8be582.js";import"./Link-fd0c7f1f.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-5b566de3.js";import"./Button-37628041.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./i18n-defaults-80781f7e.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-27fb56a9.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./decline-e64814d9.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./Bar-c671d5aa.js";import"./parameters-bundle.css-5626463c.js";import"./information-f9c20ced.js";import"./Label-77c4efbc.js";import"./ListItemBase-d9c7b338.js";import"./ItemNavigation-9c411313.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-0490e909.js";import"./StandardListItem-a8677076.js";import"./ValueState-2c5e5904.js";import"./ListItem-833837ab.js";import"./RadioButton-ac0d39a7.js";import"./CheckBox-0289245d.js";import"./accept-549e2cca.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-9332e21e.js";import"./ValueState-ab6838cc.js";import"./Title-6c23a67a.js";const V=`## Structure

The popover has three main areas:

- Header (optional)
- Content
- Footer (optional)

**Note:** The \`Popover\` is closed when the user clicks or taps outside the popover or selects an action within the popover. You can prevent this with the \`modal\` property.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Popover\` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component
`,s=c.forwardRef((n,t)=>_.createPortal(e.jsx(u,{...n,ref:t}),document.body));s.displayName="Popover";try{s.displayName="Popover",s.__docgenInfo={description:"",displayName:"Popover",props:{footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Left`\n*   `Right`\n*   `Stretch`",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Left"'},{value:'"Right"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.\n\nAvailable options are:\n\n*   `Left`\n*   `Right`\n*   `Top`\n*   `Bottom`",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Top`\n*   `Bottom`\n*   `Stretch`",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const q=[{name:"showAt",visibility:"public",returnValue:{type:"Promise",description:"Resolved when the popover is open"},parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],description:"Shows the popover."},{name:"applyFocus",visibility:"public",returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"},description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise."},{name:"close",visibility:"public",description:"Closes the popup."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Tells if the component is opened"}];function M(n={}){const{wrapper:t}=Object.assign({},g(),n.components);return t?e.jsx(t,{...n,children:e.jsx(r,{})}):r();function r(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},g(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Modals & Popovers / Popover",component:u,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(w,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:x.Center,placementType:P.Right,verticalAlign:j.Center}}),`
`,e.jsx(R,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(f,{children:e.jsx(v,{name:"Default",children:i=>{const[m,l]=c.useState(i.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn",onClick:()=>{l(!0)},children:"Open Popover"}),e.jsx(s,{...i,onAfterClose:()=>{l(!1)},opener:"openPopoverBtn",open:m})]})}})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(T,{story:"Default"}),`
`,e.jsx(A,{children:V}),`
`,e.jsx(k,{rows:q}),`
`,e.jsx(o.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(o.p,{children:["We recommend opening and closing the ",e.jsx(o.code,{children:"Popover"})," component in a declarative way using the ",e.jsx(o.code,{children:"open"})," and ",e.jsx(o.code,{children:"opener"}),` prop.
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
      <Popover
        opener={'openPopoverBtn'}
        open={popoverIsOpen}
        onAfterClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(o.p,{children:e.jsxs(o.strong,{children:["Opening a ",e.jsx(o.code,{children:"Popover"})," by reference and not by ",e.jsx(o.code,{children:"id"})]})}),`
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
      <Popover ref={popoverRef} open={open}>
        {/* Content */}
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(o.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Popovers"})," can only be opened by attaching a ",e.jsx(o.code,{children:"ref"})," to the component and then calling the corresponding ",e.jsx(o.strong,{children:e.jsx(o.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(o.em,{children:["on which the ",e.jsx(o.code,{children:"Popover"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      <Popover ref={popoverRef}>Some Content</Popover>
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"using-popovers-inside-other-components",children:"Using Popovers inside other components"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Popovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(o.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(o.code,{children:"Popover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      {createPortal(<Popover ref={popoverRef} />, document.body)}
    </>
  );
};
`})}),`
`,e.jsx(o.h2,{id:"closing-popovers",children:"Closing Popovers"}),`
`,e.jsxs(o.p,{children:["Closing ",e.jsx(o.code,{children:"Popovers"}),` works in the same way as opening them.
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
      <Popover ref={popoverRef}>
        <Button onClick={handleClose}>Close Popover</Button>
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(o.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(o.h2,{id:"popover-with-content",children:"Popover with content"}),`
`,e.jsx(f,{children:e.jsx(v,{name:"with content",children:i=>{const[m,l]=c.useState(!1),O=()=>{l(!0)},I=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn2",onClick:O,children:"Open Popover"}),e.jsx(s,{...i,opener:"openPopoverBtn2",open:m,header:e.jsx(d,{endContent:e.jsx(y,{name:"settings"}),children:e.jsx(C,{children:"Popover"})}),footer:e.jsx(d,{endContent:e.jsx(a,{onClick:I,children:"Close"})}),children:e.jsxs(b,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e.jsx(D,{})]})}}const B=n=>{const[t,r]=c.useState(n.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e.jsx(s,{...n,onAfterClose:()=>{r(!1)},opener:"openPopoverBtn",open:t})]})};B.storyName="Default";B.parameters={storySource:{source:`args => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(isChromatic || args.open);
  return <>
          <Button id={"openPopoverBtn"} onClick={() => {
      setPopoverIsOpen(true);
    }}>
            Open Popover
          </Button>
          <Popover {...args} onAfterClose={() => {
      setPopoverIsOpen(false);
    }} opener="openPopoverBtn" open={popoverIsOpen} />
        </>;
}`}};const S=n=>{const[t,r]=c.useState(!1),o=()=>{r(!0)},i=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn2",onClick:o,children:"Open Popover"}),e.jsx(s,{...n,opener:"openPopoverBtn2",open:t,header:e.jsx(d,{endContent:e.jsx(y,{name:"settings"}),children:e.jsx(C,{children:"Popover"})}),footer:e.jsx(d,{endContent:e.jsx(a,{onClick:i,children:"Close"})}),children:e.jsxs(b,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})};S.storyName="with content";S.parameters={storySource:{source:`args => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const onButtonClick = () => {
    setPopoverIsOpen(true);
  };

  const handleClose = () => {
    setPopoverIsOpen(false);
  };

  return <>
          <Button id="openPopoverBtn2" onClick={onButtonClick}>
            Open Popover
          </Button>
          <Popover {...args} opener="openPopoverBtn2" open={popoverIsOpen} header={<Bar endContent={<Icon name="settings" />}>
                <Title>Popover</Title>
              </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
            <List style={{
        width: "200px"
      }}>
              <StandardListItem additionalText="3">List Item 1</StandardListItem>
              <StandardListItem additionalText="2">List Item 2</StandardListItem>
              <StandardListItem additionalText="1">List Item 3</StandardListItem>
            </List>
          </Popover>
        </>;
}`}};const h={title:"Modals & Popovers / Popover",component:u,args:{children:e.jsx(w,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:x.Center,placementType:P.Right,verticalAlign:j.Center},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:M};const bo=["defaultStory","withContent"];export{bo as __namedExportsOrder,h as default,B as defaultStory,S as withContent};
//# sourceMappingURL=Popover.stories-9b8647d6.js.map
