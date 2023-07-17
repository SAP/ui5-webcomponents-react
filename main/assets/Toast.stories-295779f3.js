import{M as x,C as T,f as w,a as y}from"./chunk-PCJTTTQV-a9e3658a.js";import{T as l,a as d}from"./index-27dd016f.js";import{j as e}from"./jsx-runtime-5926aa06.js";import{r}from"./index-ebeaab24.js";import{r as g}from"./index-9c09ad76.js";import{B as u}from"./index-1e6d36e9.js";import{e as j}from"./DomRefTable.module-14c44f12.js";import{D as v}from"./DocsHeader-f649463f.js";import{F as S}from"./Footer-6ef542a8.js";import{D as C}from"./DomRefTable-3d92585a.js";import{u as c}from"./index-bda0bad7.js";import"./iframe-7c494daf.js";import"../sb-preview/runtime.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./Integer-f7f172c9.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./style-map-54298215.js";import"./Button-4160b137.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./slot-76e48863.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./react-jss.esm-022ab528.js";import"./index-42ec113b.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-d843ee57.js";import"./index-a53c6ece.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-3855522a.js";import"./index-95e30611.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-d0aaab26.js";import"./index-c885d522.js";import"./Label-7f4aa83d.js";import"./index-5c82c908.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-0e9b1550.js";const s=r.forwardRef((o,n)=>g.createPortal(e.jsx(l,{...o,ref:n}),document.body));s.displayName="Toast";try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:null,description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"Defines the placement of the component.\n\nAvailable options are:\n\n*   `TopStart`\n*   `TopCenter`\n*   `TopEnd`\n*   `MiddleStart`\n*   `MiddleCenter`\n*   `MiddleEnd`\n*   `BottomStart`\n*   `BottomCenter`\n*   `BottomEnd`",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=`## Usage

### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.
`,b=[{name:"show",visibility:"public",description:"Shows the component."}];function D(o={}){const{wrapper:n}=Object.assign({},c(),o.components);return n?e.jsx(n,{...o,children:e.jsx(a,{})}):a();function a(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},c(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Modals & Popovers / Toast",component:l,argTypes:{children:{control:"text"}},args:{placement:d.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
`,e.jsx(v,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,e.jsx(t.code,{children:"Toast"})," DOM element and call the ",e.jsx(t.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,e.jsx(t.code,{children:"ref"})," or work with IDs."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Example"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show();
  };
  return (
    <ThemeProvider>
      <Button onClick={showToast}>Show Toast</Button>
      <Toast ref={toast}>This is my Toast!</Toast>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(T,{children:e.jsx(w,{name:"Default",children:m=>{const p=r.useRef(null),f=()=>{p.current.show()};return r.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:p,duration:m.duration,placement:m.placement,children:m.children}),e.jsx(u,{onClick:f,children:"Show Toast"})]})}})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(j,{story:"Default"}),`
`,e.jsx(y,{children:M}),`
`,e.jsx(C,{rows:b}),`
`,e.jsx(S,{})]})}}const h=o=>{const n=r.useRef(null),a=()=>{n.current.show()};return r.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:n,duration:o.duration,placement:o.placement,children:o.children}),e.jsx(u,{onClick:a,children:"Show Toast"})]})};h.storyName="Default";h.parameters={storySource:{source:`args => {
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show();
  };

  useEffect(() => {
    if (isChromatic) {
      toast.current.show();
    }
  }, []);
  return <>
          <Toast ref={toast} duration={args.duration} placement={args.placement}>
            {args.children}
          </Toast>
          <Button onClick={showToast}>Show Toast</Button>
        </>;
}`}};const i={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:l,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:D};const Ve=["defaultStory"];export{Ve as __namedExportsOrder,i as default,h as defaultStory};
//# sourceMappingURL=Toast.stories-295779f3.js.map
