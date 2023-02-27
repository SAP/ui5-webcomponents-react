import{A}from"./DomRefTable.module-bd2f6310.js";import{D}from"./DocsHeader-7b277ff6.js";import{F}from"./Footer-a200614f.js";import{a as o,F as c,j as e}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{D as N}from"./DomRefTable-693c15e9.js";import{M as J,C as f,i as P,a as j}from"./index-08f5a92a.js";import"./settings-259db384.js";import{B as O}from"./BarChart-db51fa50.js";import{M as B}from"./MicroBarChart-5ad3dea2.js";import{a as w,P as b,b as I}from"./Popover-5336e3a5.js";import{B as u}from"./index-64b8a720.js";import{B as l}from"./index-b7f80a1d.js";import{M as E}from"./index-c79180df.js";import{I as S}from"./index-4e221527.js";import{L as x}from"./index-998f859a.js";import{L as M}from"./index-bd274735.js";import{S as h}from"./index-7c687405.js";import{T as k}from"./index-349afbe4.js";import{P as s}from"./index-65416cbf.js";import{u as y}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-12e22cb0.js";import"./iframe-baaa6734.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-e249b0b6.js";import"./TableOfContent-b905a526.js";import"./index-1220256a.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Icons-5bcf1e3f.js";import"./decline-ff534003.js";import"./index-99d317a4.js";import"./defaults-d7c4709e.js";import"./react-content-loader.es-bed4ed6e.js";import"./index-0d4b1695.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-5a1c7c7f.js";import"./generateCategoricalChart-b3d3f175.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./YAxisTicks-f6e3001f.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-82396fca.js";import"./ChartDataLabel-2f810ac3.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-cf65a8f6.js";import"./useIsRTL-fcdcb328.js";import"./Integer-a72984d1.js";import"./class-map-abcca105.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./style-map-7b3eb5df.js";import"./Bar-b4a14d85.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-e1b15b5b.js";import"./Label-6707bdfc.js";import"./ListItemBase-948677f0.js";import"./ItemNavigation-4b509b49.js";import"./TabbableElements-21c27087.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-39ca40d3.js";import"./StandardListItem-b3f5cad6.js";import"./ValueState-2c5e5904.js";import"./ListItem-d264515d.js";import"./RadioButton-a7b6e11f.js";import"./CheckBox-61258afb.js";import"./accept-70258933.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-a1b07349.js";import"./Avatar-68f47788.js";import"./employee-10cd14ab.js";import"./ValueState-ab6838cc.js";import"./Title-18f6d5a1.js";const H=`## Structure

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
*   footer - Used to style the footer of the component`,V=[{name:"showAt",visibility:"public",returnValue:{type:"Promise",description:"Resolved when the popover is open"},parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"},{name:"preventInitialFocus",type:"boolean",optional:!0,defaultValue:!1,description:"prevents applying the focus inside the popover"}],description:"Shows the popover."},{name:"applyFocus",visibility:"public",returnValue:{type:"Promise",description:"Promise that resolves when the focus is applied"},description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise."},{name:"close",visibility:"public",description:"Closes the popup."},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Tells if the component is opened"}];function U(r={}){const{wrapper:a}=Object.assign({},y(),r.components);return a?e(a,{...r,children:e(t,{})}):t();function t(){const n=Object.assign({h2:"h2",h4:"h4",p:"p",code:"code",pre:"pre",strong:"strong",em:"em",a:"a",h1:"h1",div:"div"},y(),r.components);return o(c,{children:[e(J,{title:"Modals & Popovers / Popover",component:s,argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e(x,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:w.Center,placementType:b.Right,verticalAlign:I.Center}}),`
`,e(D,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(n.h2,{children:"Example"}),`
`,e(f,{children:e(P,{name:"Default",children:p=>{const[m,i]=d.useState(p.open);return o(c,{children:[e(l,{id:"openPopoverBtn",onClick:()=>{i(!0)},children:"Open Popover"}),e(s,{...p,onAfterClose:()=>{i(!1)},opener:"openPopoverBtn",open:m})]})}})}),`
`,e(n.h2,{children:"Properties"}),`
`,e(A,{story:"Default"}),`
`,e(j,{children:H}),`
`,e(N,{rows:V}),`
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
`,e(f,{children:e(P,{name:"with content",children:p=>{const[m,i]=d.useState(!1);return o(c,{children:[e(l,{id:"openPopoverBtn2",onClick:()=>{i(!0)},children:"Open Popover"}),e(s,{...p,opener:"openPopoverBtn2",open:m,header:e(u,{endContent:e(S,{name:"settings"}),children:e(k,{children:"Popover"})}),footer:e(u,{endContent:e(l,{onClick:()=>{i(!1)},children:"Close"})}),children:o(M,{style:{width:"200px"},children:[e(h,{additionalText:"3",children:"List Item 1"}),e(h,{additionalText:"2",children:"List Item 2"}),e(h,{additionalText:"1",children:"List Item 3"})]})})]})}})}),`
`,e(n.h2,{children:"Popover: open on hover"}),`
`,o(n.p,{children:["Hover over the ",e(n.code,{children:"MicroBarChart"})," to see a more detailed view."]}),`
`,e(f,{children:e(P,{name:"open on hover",children:p=>{const[m,i]=d.useState(!1),C=()=>{i(!0)},g=()=>{i(!1)};return o(c,{children:[e(n.div,{id:"microBarChart",onMouseEnter:C,onMouseLeave:g,style:{width:"120px"},children:e(B,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e(s,{...p,open:m,opener:"microBarChart",headerText:"Detailed Chart View",children:e(O,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})}})}),`
`,e(F,{})]})}}const T=r=>{const[a,t]=d.useState(r.open);return o(c,{children:[e(l,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e(s,{...r,onAfterClose:()=>{t(!1)},opener:"openPopoverBtn",open:a})]})};T.storyName="Default";T.parameters={storySource:{source:`args => {
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
}`}};const L=r=>{const[a,t]=d.useState(!1);return o(c,{children:[e(l,{id:"openPopoverBtn2",onClick:()=>{t(!0)},children:"Open Popover"}),e(s,{...r,opener:"openPopoverBtn2",open:a,header:e(u,{endContent:e(S,{name:"settings"}),children:e(k,{children:"Popover"})}),footer:e(u,{endContent:e(l,{onClick:()=>{t(!1)},children:"Close"})}),children:o(M,{style:{width:"200px"},children:[e(h,{additionalText:"3",children:"List Item 1"}),e(h,{additionalText:"2",children:"List Item 2"}),e(h,{additionalText:"1",children:"List Item 3"})]})})]})};L.storyName="with content";L.parameters={storySource:{source:`args => {
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
}`}};const R=r=>{const[a,t]=d.useState(!1);return o(c,{children:[e("div",{id:"microBarChart",onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},style:{width:"120px"},children:e(B,{style:{height:"70px"},dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530}]})}),e(s,{...r,open:a,opener:"microBarChart",headerText:"Detailed Chart View",children:e(O,{style:{height:"400px",width:"300px"},dimensions:[{accessor:"name"}],measures:[{accessor:"data"}],dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:450},{name:"May",data:420},{name:"June",data:455},{name:"July",data:300},{name:"August",data:70},{name:"September",data:220},{name:"October",data:350},{name:"November",data:415},{name:"December",data:350}]})})]})};R.storyName="open on hover";R.parameters={storySource:{source:`args => {
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
}`}};const v={title:"Modals & Popovers / Popover",component:s,args:{children:e(x,{children:'Press "Escape" or click outside to close the Popover'}),headerText:"Popover Header",horizontalAlign:w.Center,placementType:b.Right,verticalAlign:I.Center},argTypes:{footer:{control:{disable:!0}},header:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory","withContent","openOnHover"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:U};const Hn=["defaultStory","withContent","openOnHover"];export{Hn as __namedExportsOrder,v as default,T as defaultStory,R as openOnHover,L as withContent};
//# sourceMappingURL=Popover.stories-acffd460.js.map
