import{d as L}from"./DomRefTable.module-cc532124.js";import{D as N}from"./DocsHeader-72e224d5.js";import{F as V}from"./Footer-91fdb81f.js";import{j as e,a as o,F as l}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{D as _}from"./DomRefTable-6a64ff55.js";import{M as q,C as f,f as g,a as F}from"./chunk-PCJTTTQV-6559a1e8.js";import"./settings-f4b98acd.js";import{B as w}from"./BarChart-c8702a2c.js";import{M as O}from"./MicroBarChart-c5912a60.js";import{a as B,P as S,b as I}from"./Popover-224d761a.js";import{B as u}from"./index-d8756bd4.js";import{B as c}from"./index-11bb2ad5.js";import{M as E}from"./index-3d3d9052.js";import{I as T}from"./index-073ac1b6.js";import{L as D}from"./index-d66aa8c3.js";import{L as x}from"./index-a2ea666d.js";import{S as m}from"./index-2ef1aa76.js";import{T as R}from"./index-de24ef9f.js";import{P as y}from"./index-61594d42.js";import{r as U}from"./index-96c5f47c.js";import{u as P}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-78a41d3b.js";import"./TableOfContent-fb6c5e26.js";import"./index-029c7438.js";import"./iframe-a0ef9536.js";import"../sb-preview/runtime.mjs";import"./Link-018547e8.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-254d6b69.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./i18n-defaults-80781f7e.js";import"./index-99d317a4.js";import"./defaults-6623ba3a.js";import"./ChartContainer-0c75438b.js";import"./index-f3986e5a.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-27aea987.js";import"./generateCategoricalChart-1401ca18.js";import"./index-4d501b15.js";import"./YAxisTicks-dc54bae5.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-9b1bf7ff.js";import"./ChartDataLabel-20d17cbc.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-d641c0af.js";import"./react-content-loader.es-de0c8b5a.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./class-map-95320e87.js";import"./Bar-78c6a88f.js";import"./fastNavigation-8b41cdda.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Button-bc3a11a1.js";import"./decline-6bd98a2e.js";import"./information-b6c8ed8e.js";import"./Label-ccc234fe.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-15ff681f.js";import"./StandardListItem-ac3f40c5.js";import"./ValueState-2c5e5904.js";import"./ListItem-83c0fb9e.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./Avatar-7e1d4e21.js";import"./employee-1bc983a2.js";import"./ValueState-ab6838cc.js";import"./Title-129aeb28.js";const H=`## Structure

The popover has three main areas:

*   Header (optional)
*   Content
*   Footer (optional)

**Note:** The \`Popover\` is closed when the user clicks or taps outside the popover or selects an action within the popover. You can prevent this with the \`modal\` property.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Popover\` exposes the following CSS Shadow Parts:

*   header - Used to style the header of the component
*   content - Used to style the content of the component
*   footer - Used to style the footer of the component`,i=d.forwardRef((t,a)=>U.createPortal(e(y,{...t,ref:a}),document.body));i.displayName="Popover";try{i.displayName="Popover",i.__docgenInfo={description:"",displayName:"Popover",props:{footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Left`\n*   `Right`\n*   `Stretch`",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Left"'},{value:'"Right"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.\n\nAvailable options are:\n\n*   `Left`\n*   `Right`\n*   `Top`\n*   `Bottom`",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Top`\n*   `Bottom`\n*   `Stretch`",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const J=[{name:"showAt",visibility:"public",returnValue:{type:"Promise",description:"Resolved when the popover is open"},parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],description:"Shows the popover."},{name:"applyFocus",visibility:"public",returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"},description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise."},{name:"close",visibility:"public",description:"Closes the popup."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Tells if the component is opened"}];function j(t={}){const{wrapper:a}=Object.assign({},P(),t.components);return a?e(a,{...t,children:e(r,{})}):r();function r(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1",div:"div"},P(),t.components);return o(l,{children:[e(q,{title:"Modals & Popovers / Popover",component:y,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(D,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:B.Center,placementType:S.Right,verticalAlign:I.Center}}),`
`,e(N,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(f,{children:e(g,{name:"Default",children:s=>{const[h,p]=d.useState(s.open);return o(l,{children:[e(c,{id:"openPopoverBtn",onClick:()=>{p(!0)},children:"Open Popover"}),e(i,{...s,onAfterClose:()=>{p(!1)},opener:"openPopoverBtn",open:h})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(L,{story:"Default"}),`
`,e(F,{children:H}),`
`,e(_,{rows:J}),`
`,e(n.h2,{children:"Opening Popovers"}),`
`,e("br",{}),`
`,e(n.h4,{children:"since 0.22.0"}),`
`,o(n.p,{children:["We recommend opening and closing the ",e(n.code,{children:"Popover"})," component in a declarative way using the ",e(n.code,{children:"open"})," and ",e(n.code,{children:"opener"}),` prop.
You can still use the imperative way which is outlined below.`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
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
`,e(n.p,{children:o(n.strong,{children:["Opening a ",e(n.code,{children:"Popover"})," by reference and not by ",e(n.code,{children:"id"})]})}),`
`,o(n.p,{children:["This web component exposes a way to pass a reference of an element instead of an ",e(n.code,{children:"id"})," to the ",e(n.code,{children:"opener"})," prop. Since this is not supported when passing the reference in a declarative way to a React ",e(n.code,{children:"prop"}),`, you have to attach the ref directly on the web component.
You can do that by e.g. leveraging a React Ref, and then set the corresponding property there.`]}),`
`,e(E,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
using this approach!`}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(n.h4,{children:"before 0.22.0"}),`
`,o(n.p,{children:[e(n.code,{children:"Popovers"})," can only be opened by attaching a ",e(n.code,{children:"ref"})," to the component and then calling the corresponding ",e(n.strong,{children:e(n.code,{children:"showAt"})})," method. The method receives the target element - ",o(n.em,{children:["on which the ",e(n.code,{children:"Popover"})," is to be opened"]})," - as parameter."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(n.h2,{children:"Using Popovers inside other components"}),`
`,o(n.p,{children:[e(n.code,{children:"Popovers"}),` are often used within other components, when opened this could sometimes have unwanted side effects.
In this case, we recommend using `,e(n.a,{href:"https://reactjs.org/docs/portals.html",children:"createPortal"})," to mount the ",e(n.code,{children:"Popover"})," outside of the DOM hierarchy of the parent component."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(n.h2,{children:"Closing Popovers"}),`
`,o(n.p,{children:["Closing ",e(n.code,{children:"Popovers"}),` works in the same way as opening them.
You can either set the `,e(n.code,{children:"open"})," prop to ",e(n.code,{children:"false"})," or attaching a ",e(n.code,{children:"ref"})," on which the corresponding ",e(n.code,{children:"close"})," method is called."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const PopoverComponent = () => {
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
`,e(n.h1,{children:"More Examples"}),`
`,e(n.h2,{children:"Popover with content"}),`
`,e(f,{children:e(g,{name:"with content",children:s=>{const[h,p]=d.useState(!1);return o(l,{children:[e(c,{id:"openPopoverBtn2",onClick:()=>{p(!0)},children:"Open Popover"}),e(i,{...s,opener:"openPopoverBtn2",open:h,header:e(u,{endContent:e(T,{name:"settings"}),children:e(R,{children:"Popover"})}),footer:e(u,{endContent:e(c,{onClick:()=>{p(!1)},children:"Close"})}),children:o(x,{style:{width:"200px"},children:[e(m,{additionalText:"3",children:"List Item 1"}),e(m,{additionalText:"2",children:"List Item 2"}),e(m,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(n.h2,{children:"Popover: open on hover"}),`
`,o(n.p,{children:["Hover over the ",e(n.code,{children:"MicroBarChart"})," to see a more detailed view."]}),`
`,e(f,{children:e(g,{name:"open on hover",children:s=>{const[h,p]=d.useState(!1),C=()=>{p(!0)},b=()=>{p(!1)};return o(l,{children:[e(n.div,{id:"microBarChart",onMouseEnter:C,onMouseLeave:b,style:{width:"120px"},children:e(O,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e(i,{...s,open:h,opener:"microBarChart",headerText:"Detailed Chart View",children:e(w,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})}})}),`
`,e(V,{})]})}}const k=t=>{const[a,r]=d.useState(t.open);return o(l,{children:[e(c,{id:"openPopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e(i,{...t,onAfterClose:()=>{r(!1)},opener:"openPopoverBtn",open:a})]})};k.storyName="Default";k.parameters={storySource:{source:`args => {
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
}`}};const M=t=>{const[a,r]=d.useState(!1);return o(l,{children:[e(c,{id:"openPopoverBtn2",onClick:()=>{r(!0)},children:"Open Popover"}),e(i,{...t,opener:"openPopoverBtn2",open:a,header:e(u,{endContent:e(T,{name:"settings"}),children:e(R,{children:"Popover"})}),footer:e(u,{endContent:e(c,{onClick:()=>{r(!1)},children:"Close"})}),children:o(x,{style:{width:"200px"},children:[e(m,{additionalText:"3",children:"List Item 1"}),e(m,{additionalText:"2",children:"List Item 2"}),e(m,{additionalText:"1",children:"List Item 3"})]})})]})};M.storyName="with content";M.parameters={storySource:{source:`args => {
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
}`}};const A=t=>{const[a,r]=d.useState(!1);return o(l,{children:[e("div",{id:"microBarChart",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},style:{width:"120px"},children:e(O,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e(i,{...t,open:a,opener:"microBarChart",headerText:"Detailed Chart View",children:e(w,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})};A.storyName="open on hover";A.parameters={storySource:{source:`args => {
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
}`}};const v={title:"Modals & Popovers / Popover",component:y,args:{children:e(D,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:B.Center,placementType:S.Right,verticalAlign:I.Center},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent","openOnHover"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:j};const Gn=["defaultStory","withContent","openOnHover"];export{Gn as __namedExportsOrder,v as default,k as defaultStory,A as openOnHover,M as withContent};
//# sourceMappingURL=Popover.stories-2a0570ec.js.map
