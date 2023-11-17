import{A as R}from"./DomRefTable.module-KFV4vTNP.js";import{D as k}from"./DocsHeader-aw51gcp2.js";import{F as D}from"./Footer-5HE-tmQI.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as c}from"./index-OjgoNOWw.js";import{M as N,C as v,e as g,b as L}from"./chunk-HLWAVYOI-aRY61EAZ.js";import{D as A}from"./DomRefTable-785j6Hhl.js";import"./settings-yNp1ATrR.js";import{P,a as b,b as j}from"./Popover-pPQH5XeW.js";import{B as d}from"./index-d79YtGbT.js";import{B as a}from"./index-Nq0B0t7P.js";import{M as _}from"./index-hjlCGKub.js";import{I as y}from"./index-Rv-vHARw.js";import{L as C}from"./index-5G9NmmK_.js";import{L as w}from"./index-Bb4tPYzY.js";import{S as p}from"./index-CMFgy5ZC.js";import{T as S}from"./index-97AS13U9.js";import{P as u}from"./index-BVOpDmmc.js";import{r as V}from"./index-QYh6idnL.js";import{c as B}from"./clsx-2Jv0kmJG.js";import{u as x}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-S1zyQWjr.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./utils-CrDMzPRG.js";import"./index-oLSBYiL3.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./withWebComponent-ceo0jn6D.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./Integer-kog98579.js";import"./class-map-JXa0-u4l.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./alert-TGfQazfI.js";import"./index-2LFs6KZP.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-CFEEopUN.js";import"./Button-a5xMWTkk.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./i18n-defaults-n2A5pq_J.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-Q45dXYUl.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./Bar-N5iKDpB5.js";import"./parameters-bundle.css-h8WFSBOu.js";import"./information-WfdY8QHP.js";import"./Label-z__cPwIf.js";import"./ListItemBase-_j3gRdH2.js";import"./ItemNavigation-ETHVU2CC.js";import"./TabbableElements-aYIPY3zp.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-6K1dNXem.js";import"./StandardListItem-b4f3e0sc.js";import"./ValueState-zUcANXoY.js";import"./ListItem-rKilMSpt.js";import"./RadioButton-m4J4aih-.js";import"./CheckBox-0IljwRo-.js";import"./accept-vW9BdDVG.js";import"./HasPopup-9BAMrqbD.js";import"./slim-arrow-right-v6ItARyR.js";import"./ValueState-I_-hGNIb.js";import"./Title-QpYFGHiM.js";const M=`## Structure

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
`,i=c.forwardRef((n,t)=>V.createPortal(e.jsx(u,{...n,ref:t}),document.body));i.displayName="Popover";try{i.displayName="Popover",i.__docgenInfo={description:"",displayName:"Popover",props:{footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},header:{defaultValue:null,description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the content of the Popup.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, PopupBeforeCloseEventDetail>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<PopoverDomRef, never>) => void"}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'}]}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'}]}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const q=[{name:"showAt",visibility:"public",returnValue:{type:"Promise",description:"Resolved when the popover is open"},parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],description:"Shows the popover."},{name:"applyFocus",visibility:"public",returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"},description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise."},{name:"close",visibility:"public",description:"Closes the popup."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Tells if the component is opened"}];function E(n={}){const{wrapper:t}=Object.assign({},x(),n.components);return t?e.jsx(t,{...n,children:e.jsx(r,{})}):r();function r(){const o=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1"},x(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Modals & Popovers / Popover",component:u,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsx(C,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:P.Center,placementType:b.Right,verticalAlign:j.Center,className:"footerPartNoPadding"}}),`
`,e.jsx(k,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(v,{children:e.jsx(g,{name:"Default",children:s=>{const[m,l]=c.useState(s.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn",onClick:()=>{l(!0)},children:"Open Popover"}),e.jsx(i,{...s,onAfterClose:()=>{l(!1)},opener:"openPopoverBtn",open:m})]})}})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(R,{story:"Default"}),`
`,e.jsx(L,{children:M}),`
`,e.jsx(A,{rows:q}),`
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
`,e.jsx(_,{hideCloseButton:!0,children:`Changing properties outside of the React rendering cycle can lead to unwanted behavior, please be extra cautious when
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
`,e.jsx(v,{children:e.jsx(g,{name:"with content",children:s=>{const[m,l]=c.useState(!1),T=()=>{l(!0)},f=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn2",onClick:T,children:"Open Popover"}),e.jsx(i,{...s,opener:"openPopoverBtn2",open:m,onAfterClose:f,className:B("headerPartNoPadding",s.className),header:e.jsx(d,{endContent:e.jsx(y,{name:"settings"}),children:e.jsx(S,{children:"Popover"})}),footer:e.jsx(d,{endContent:e.jsx(a,{onClick:f,children:"Close"})}),children:e.jsxs(w,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e.jsx(D,{})]})}}const O=n=>{const[t,r]=c.useState(n.open);return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e.jsx(i,{...n,onAfterClose:()=>{r(!1)},opener:"openPopoverBtn",open:t})]})};O.storyName="Default";O.parameters={storySource:{source:`args => {
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
}`}};const I=n=>{const[t,r]=c.useState(!1),o=()=>{r(!0)},s=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"openPopoverBtn2",onClick:o,children:"Open Popover"}),e.jsx(i,{...n,opener:"openPopoverBtn2",open:t,onAfterClose:s,className:B("headerPartNoPadding",n.className),header:e.jsx(d,{endContent:e.jsx(y,{name:"settings"}),children:e.jsx(S,{children:"Popover"})}),footer:e.jsx(d,{endContent:e.jsx(a,{onClick:s,children:"Close"})}),children:e.jsxs(w,{style:{width:"200px"},children:[e.jsx(p,{additionalText:"3",children:"List Item 1"}),e.jsx(p,{additionalText:"2",children:"List Item 2"}),e.jsx(p,{additionalText:"1",children:"List Item 3"})]})})]})};I.storyName="with content";I.parameters={storySource:{source:`args => {
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
          <Popover {...args} opener="openPopoverBtn2" open={popoverIsOpen} onAfterClose={handleClose} className={clsx("headerPartNoPadding", args.className)} header={<Bar endContent={<Icon name="settings" />}>
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
}`}};const h={title:"Modals & Popovers / Popover",component:u,args:{children:e.jsx(C,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:P.Center,placementType:b.Right,verticalAlign:j.Center,className:"footerPartNoPadding"},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent"]};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:E};const jo=["defaultStory","withContent"];export{jo as __namedExportsOrder,h as default,O as defaultStory,I as withContent};
//# sourceMappingURL=Popover.stories-kndRxALa.js.map
