import{d as k}from"./DomRefTable.module-8ebd75e9.js";import{D as M}from"./DocsHeader-e3bb9b48.js";import{F as A}from"./Footer-ab1781e8.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{r as p}from"./index-ebeaab24.js";import{D as L}from"./DomRefTable-3da4f28e.js";import{M as N,C as f,f as x,a as V}from"./chunk-PCJTTTQV-cac2f671.js";import"./settings-1a3068b6.js";import{B as j}from"./BarChart-cf9e7360.js";import{M as b}from"./MicroBarChart-f33c9e34.js";import{a as P,P as C,b as w}from"./Popover-6674202f.js";import{B as m}from"./index-2b5817f1.js";import{B as l}from"./index-f94ca29a.js";import{M as _}from"./index-7169ae5d.js";import{I as O}from"./index-dff758e2.js";import{L as B}from"./index-08680789.js";import{L as S}from"./index-a884cd06.js";import{S as d}from"./index-43f7fb4c.js";import{T as I}from"./index-c23a6a78.js";import{P as g}from"./index-e53f1fd6.js";import{r as F}from"./index-9c09ad76.js";import{u as y}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-9ec1bfa2.js";import"./TableOfContent-4d897ccd.js";import"./index-4ca10859.js";import"./iframe-1ecc0858.js";import"../sb-preview/runtime.js";import"./Link-d48f545c.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./i18n-defaults-80781f7e.js";import"./index-99d317a4.js";import"./defaults-72384ec7.js";import"./ChartContainer-8f9f4eab.js";import"./index-1f954fba.js";import"./i18n-defaults-b56a0b3b.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./useCancelAnimationFallback-9731718e.js";import"./generateCategoricalChart-0f40722e.js";import"./index-f50b85d6.js";import"./YAxisTicks-52da7ed4.js";import"./debounce-ab129990.js";import"./useTooltipFormatter-7defd682.js";import"./ChartDataLabel-96fb09d4.js";import"./staticProps-411b051b.js";import"./useOnClickInternal-c48662e6.js";import"./Placeholder-0503e054.js";import"./react-content-loader.es-627d673d.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-586317d0.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-12b70099.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./class-map-519e9c6d.js";import"./Bar-5072b9d6.js";import"./parameters-bundle.css-deb4e0b1.js";import"./Button-0cdf0df4.js";import"./decline-1806c5c4.js";import"./information-aaa07e0e.js";import"./Label-07c40881.js";import"./ListItemBase-1b8f200b.js";import"./ItemNavigation-18d1bc39.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-9f101f31.js";import"./StandardListItem-a4dacc1d.js";import"./ValueState-2c5e5904.js";import"./ListItem-69faf8c2.js";import"./RadioButton-8f2ea794.js";import"./CheckBox-0dc7f77e.js";import"./accept-83b05845.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-62d048e9.js";import"./Avatar-b9c0c6ae.js";import"./employee-0da36253.js";import"./ValueState-ab6838cc.js";import"./Title-693a182d.js";const q=`## Structure

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
`,s=p.forwardRef((o,r)=>F.createPortal(e.jsx(g,{...o,ref:r}),document.body));s.displayName="Popover";try{s.displayName="Popover",s.__docgenInfo={description:"",displayName:"Popover",props:{footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Left`\n*   `Right`\n*   `Stretch`",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Left"'},{value:'"Right"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.\n\nAvailable options are:\n\n*   `Left`\n*   `Right`\n*   `Top`\n*   `Bottom`",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Top`\n*   `Bottom`\n*   `Stretch`",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const E=[{name:"showAt",visibility:"public",returnValue:{type:"Promise",description:"Resolved when the popover is open"},parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],description:"Shows the popover."},{name:"applyFocus",visibility:"public",returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"},description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise."},{name:"close",visibility:"public",description:"Closes the popup."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Tells if the component is opened"}];function U(o={}){const{wrapper:r}=Object.assign({},y(),o.components);return r?e.jsx(r,{...o,children:e.jsx(t,{})}):t();function t(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1",div:"div"},y(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Modals & Popovers / Popover",component:g,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(B,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:P.Center,placementType:C.Right,verticalAlign:w.Center}}),`
`,e.jsx(M,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(f,{children:e.jsx(x,{name:"Default",children:a=>{const[c,i]=p.useState(a.open);return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"openPopoverBtn",onClick:()=>{i(!0)},children:"Open Popover"}),e.jsx(s,{...a,onAfterClose:()=>{i(!1)},opener:"openPopoverBtn",open:c})]})}})}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(V,{children:q}),`
`,e.jsx(L,{rows:E}),`
`,e.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h4,{id:"since-0220",children:"since 0.22.0"}),`
`,e.jsxs(n.p,{children:["We recommend opening and closing the ",e.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
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
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Opening a ",e.jsx(n.code,{children:"Popover"})," by reference and not by ",e.jsx(n.code,{children:"id"})]})}),`
`,e.jsxs(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e.jsx(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e.jsx(_,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e.jsx(n.h4,{id:"before-0220",children:"before 0.22.0"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popovers"})," can only be opened by attaching a ",e.jsx(n.code,{children:"ref"})," to the component and then calling the corresponding ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"showAt"})})," method. The method receives the target element - ",e.jsxs(n.em,{children:["on which the ",e.jsx(n.code,{children:"Popover"})," is to be opened"]})," - as parameter."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e.jsx(n.h2,{id:"using-popovers-inside-other-components",children:"Using Popovers inside other components"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Popovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e.jsx(n.a,{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"createPortal"})," to mount the ",e.jsx(n.code,{children:"Popover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e.jsx(n.h2,{id:"closing-popovers",children:"Closing Popovers"}),`
`,e.jsxs(n.p,{children:["Closing ",e.jsx(n.code,{children:"Popovers"}),` works in the same way as opening them.
You can either set the `,e.jsx(n.code,{children:"open"})," prop to ",e.jsx(n.code,{children:"false"})," or attaching a ",e.jsx(n.code,{children:"ref"})," on which the corresponding ",e.jsx(n.code,{children:"close"})," method is called."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h2,{id:"popover-with-content",children:"Popover with content"}),`
`,e.jsx(f,{children:e.jsx(x,{name:"with content",children:a=>{const[c,i]=p.useState(!1),u=()=>{i(!0)},v=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"openPopoverBtn2",onClick:u,children:"Open Popover"}),e.jsx(s,{...a,opener:"openPopoverBtn2",open:c,header:e.jsx(m,{endContent:e.jsx(O,{name:"settings"}),children:e.jsx(I,{children:"Popover"})}),footer:e.jsx(m,{endContent:e.jsx(l,{onClick:v,children:"Close"})}),children:e.jsxs(S,{style:{width:"200px"},children:[e.jsx(d,{additionalText:"3",children:"List Item 1"}),e.jsx(d,{additionalText:"2",children:"List Item 2"}),e.jsx(d,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e.jsx(n.h2,{id:"popover-open-on-hover",children:"Popover: open on hover"}),`
`,e.jsxs(n.p,{children:["Hover over the ",e.jsx(n.code,{children:"MicroBarChart"})," to see a more detailed view."]}),`
`,e.jsx(f,{children:e.jsx(x,{name:"open on hover",children:a=>{const[c,i]=p.useState(!1),u=()=>{i(!0)},v=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n.div,{id:"microBarChart",onMouseEnter:u,onMouseLeave:v,style:{width:"120px"},children:e.jsx(b,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e.jsx(s,{...a,open:c,opener:"microBarChart",headerText:"Detailed Chart View",children:e.jsx(j,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})}})}),`
`,e.jsx(A,{})]})}}const T=o=>{const[r,t]=p.useState(o.open);return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(s,{...o,onAfterClose:()=>{t(!1)},opener:"openPopoverBtn",open:r})]})};T.storyName="Default";T.parameters={storySource:{source:`args => {
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
}`}};const D=o=>{const[r,t]=p.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"openPopoverBtn2",onClick:n,children:"Open Popover"}),e.jsx(s,{...o,opener:"openPopoverBtn2",open:r,header:e.jsx(m,{endContent:e.jsx(O,{name:"settings"}),children:e.jsx(I,{children:"Popover"})}),footer:e.jsx(m,{endContent:e.jsx(l,{onClick:a,children:"Close"})}),children:e.jsxs(S,{style:{width:"200px"},children:[e.jsx(d,{additionalText:"3",children:"List Item 1"}),e.jsx(d,{additionalText:"2",children:"List Item 2"}),e.jsx(d,{additionalText:"1",children:"List Item 3"})]})})]})};D.storyName="with content";D.parameters={storySource:{source:`args => {
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
}`}};const R=o=>{const[r,t]=p.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"microBarChart",onMouseEnter:n,onMouseLeave:a,style:{width:"120px"},children:e.jsx(b,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e.jsx(s,{...o,open:r,opener:"microBarChart",headerText:"Detailed Chart View",children:e.jsx(j,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})};R.storyName="open on hover";R.parameters={storySource:{source:`args => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const handleOpen = () => {
    setPopoverIsOpen(true);
  };

  const handleClose = () => {
    setPopoverIsOpen(false);
  };

  return <>
          <div id="microBarChart" onMouseEnter={handleOpen} onMouseLeave={handleClose} style={{
      width: "120px"
    }}>
            <MicroBarChart style={{
        height: "70px"
      }} dimension={{
        accessor: "name"
      }} measure={{
        accessor: "data"
      }} dataset={[{
        name: "January",
        data: 100
      }, {
        name: "February",
        data: 300
      }, {
        name: "March",
        data: 530
      }]} />
          </div>
          <Popover {...args} open={popoverIsOpen} opener={"microBarChart"} headerText="Detailed Chart View">
            <BarChart style={{
        height: "400px",
        width: "300px"
      }} dimensions={[{
        accessor: "name"
      }]} measures={[{
        accessor: "data"
      }]} dataset={[{
        name: "January",
        data: 100
      }, {
        name: "February",
        data: 300
      }, {
        name: "March",
        data: 530
      }, {
        name: "April",
        data: 450
      }, {
        name: "May",
        data: 420
      }, {
        name: "June",
        data: 455
      }, {
        name: "July",
        data: 300
      }, {
        name: "August",
        data: 70
      }, {
        name: "September",
        data: 220
      }, {
        name: "October",
        data: 350
      }, {
        name: "November",
        data: 415
      }, {
        name: "December",
        data: 350
      }]} />
          </Popover>
        </>;
}`}};const h={title:"Modals & Popovers / Popover",component:g,args:{children:e.jsx(B,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:P.Center,placementType:C.Right,verticalAlign:w.Center},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent","openOnHover"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:U};const Wn=["defaultStory","withContent","openOnHover"];export{Wn as __namedExportsOrder,h as default,T as defaultStory,R as openOnHover,D as withContent};
//# sourceMappingURL=Popover.stories-dc3c2feb.js.map
