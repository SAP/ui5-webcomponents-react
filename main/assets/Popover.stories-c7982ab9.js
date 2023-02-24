import{A}from"./DomRefTable.module-30f3bd43.js";import{D}from"./DocsHeader-ce92ab0e.js";import{F}from"./Footer-c8244a58.js";import{a as o,F as c,j as e}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{D as N}from"./DomRefTable-02666777.js";import{M as J,C as f,i as P,a as j}from"./index-02423177.js";import"./settings-10d311b7.js";import{B as O}from"./BarChart-8e25858a.js";import{M as B}from"./MicroBarChart-fcf8df49.js";import{a as w,P as b,b as I}from"./Popover-e3c8ecec.js";import{B as u}from"./index-79b906ee.js";import{B as l}from"./index-373748a1.js";import{M as E}from"./index-9d4f0257.js";import{I as S}from"./index-f7b539e8.js";import{L as x}from"./index-bd49c23e.js";import{L as M}from"./index-3f70bd96.js";import{S as h}from"./index-eb6fe343.js";import{T as k}from"./index-8ff8581d.js";import{P as s}from"./index-0db28cca.js";import{u as y}from"./index-4fb8b842.js";import"./chunk-4XCFV5WA-0265c491.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./WrappingType-b81e595a.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Icons-0f428547.js";import"./decline-2be11c85.js";import"./index-99d317a4.js";import"./defaults-cf40c6d5.js";import"./react-content-loader.es-24897b1e.js";import"./index-562ebeba.js";import"./i18n-defaults-15e6b3e0.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-d2f1201e.js";import"./generateCategoricalChart-778dcdfc.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./YAxisTicks-4f1dabb3.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-7cb0c647.js";import"./ChartDataLabel-e5969e9b.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-67ba424c.js";import"./useIsRTL-332a1bd9.js";import"./Integer-44c9be94.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./style-map-f4770aeb.js";import"./Bar-c4636896.js";import"./fastNavigation-ebf07f1c.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-6ca701be.js";import"./Label-aecaa844.js";import"./ListItemBase-4b52d1f0.js";import"./ItemNavigation-1cd3f78d.js";import"./TabbableElements-52be7164.js";import"./debounce-9c2fb7dd.js";import"./BusyIndicator-3e5a8ca3.js";import"./StandardListItem-ddbc126c.js";import"./ValueState-2c5e5904.js";import"./ListItem-bdb92faa.js";import"./RadioButton-71b27f26.js";import"./CheckBox-9f80be56.js";import"./accept-4d6b88bc.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac6f9b0d.js";import"./Avatar-e191e45f.js";import"./employee-01ecb76e.js";import"./ValueState-ab6838cc.js";import"./Title-fb9c1aba.js";const H=`## Structure

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
//# sourceMappingURL=Popover.stories-c7982ab9.js.map
