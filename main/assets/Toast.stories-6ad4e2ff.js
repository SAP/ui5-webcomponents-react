import{M as y,C as g,j as v,a as S}from"./index-2eb5db95.js";import{T as c,a as h}from"./index-ff5d994b.js";import{j as e,a as i,F as p}from"./jsx-runtime-670450c2.js";import{r}from"./index-f1f749bf.js";import{r as C}from"./index-96c5f47c.js";import{B as f}from"./index-f8eca0cc.js";import{A as M}from"./DomRefTable.module-9d048681.js";import{D as b}from"./DocsHeader-40fbd71a.js";import{F as D}from"./Footer-67049b4c.js";import{D as x}from"./DomRefTable-8ff0455c.js";import{u}from"./index-4fb8b842.js";import"./iframe-387196f1.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Integer-d9976c13.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./PopupsCommon.css-ab0735c6.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./Device-208919c6.js";import"./FocusableElements-c2f39514.js";import"./Keys-3acbae73.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./class-map-5d8e4b2b.js";import"./Button-e27d9549.js";import"./Icons-7b82f601.js";import"./chunk-QDOP3WTA-4d67ff75.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-6836c374.js";import"./decline-0a03b0b0.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b176d46e.js";import"./TableOfContent-7560364c.js";import"./index-283ce192.js";import"./WrappingType-b81e595a.js";import"./index-5c52c118.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-46eae42e.js";import"./Popover-cbbb060d.js";const a=r.forwardRef((o,n)=>C.createPortal(e(c,{...o,ref:n}),document.body));a.displayName="Toast";try{a.displayName="Toast",a.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:null,description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"Defines the placement of the component.\n\nAvailable options are:\n\n*   `TopStart`\n*   `TopCenter`\n*   `TopEnd`\n*   `MiddleStart`\n*   `MiddleCenter`\n*   `MiddleEnd`\n*   `BottomStart`\n*   `BottomCenter`\n*   `BottomEnd`",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const E=`## Usage

### When to use:

*   You want to display a short success or information message.
*   You do not want to interrupt users while they are performing an action.
*   You want to confirm a successful action.

### When not to use:

*   You want to display error or warning message.
*   You want to interrupt users while they are performing an action.
*   You want to make sure that users read the message before they leave the page.
*   You want users to be able to copy some part of the message text.`,B=[{name:"show",visibility:"public",description:"Shows the component."}];function N(o={}){const{wrapper:n}=Object.assign({},u(),o.components);return n?e(n,{...o,children:e(s,{})}):s();function s(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},u(),o.components);return i(p,{children:[e(y,{title:"Modals & Popovers / Toast",component:c,argTypes:{children:{control:"text"}},args:{placement:h.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
`,e(b,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Show a toast"}),`
`,i(t.p,{children:["The ",e(t.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,e(t.code,{children:"Toast"})," DOM element and call the ",e(t.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,e(t.code,{children:"ref"})," or work with IDs."]}),`
`,e(t.p,{children:e(t.strong,{children:"Example"})}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
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
`,e("br",{}),`
`,e(t.h2,{children:"Example"}),`
`,e(g,{children:e(v,{name:"Default",children:l=>{const d=r.useRef(null),w=()=>{d.current.show()};return r.useEffect(()=>{},[]),i(p,{children:[e(a,{ref:d,duration:l.duration,placement:l.placement,children:l.children}),e(f,{onClick:w,children:"Show Toast"})]})}})}),`
`,e(t.h2,{children:"Properties"}),`
`,e(M,{story:"Default"}),`
`,e(S,{children:E}),`
`,e(x,{rows:B}),`
`,e(D,{})]})}}const T=o=>{const n=r.useRef(null),s=()=>{n.current.show()};return r.useEffect(()=>{},[]),i(p,{children:[e(a,{ref:n,duration:o.duration,placement:o.placement,children:o.children}),e(f,{onClick:s,children:"Show Toast"})]})};T.storyName="Default";T.parameters={storySource:{source:`args => {
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
}`}};const m={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:c,args:{placement:h.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:N};const Ae=["defaultStory"];export{Ae as __namedExportsOrder,m as default,T as defaultStory};
//# sourceMappingURL=Toast.stories-6ad4e2ff.js.map
