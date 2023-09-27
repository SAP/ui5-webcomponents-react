import{M as x,C as T,e as w,b as y}from"./chunk-S4VUQJ4A-74ed328f.js";import{T as l,a as d}from"./index-a27c86a5.js";import{j as e}from"./jsx-runtime-d079401a.js";import{r as n}from"./index-f1f2c4b1.js";import{r as g}from"./index-c74c9f7f.js";import{B as u}from"./index-997d175b.js";import{A as j}from"./DomRefTable.module-ef2f031f.js";import{D as v}from"./DocsHeader-f9445f25.js";import{F as S}from"./Footer-c2244671.js";import{D as C}from"./DomRefTable-3c95c151.js";import{u as c}from"./index-59d6410c.js";import"./iframe-bb104014.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Integer-f7f172c9.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./style-map-26bcc635.js";import"./Button-ca10e4c6.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./slot-76e48863.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0d6c4f2d.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-7bf57a11.js";import"./index-f53287d3.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-445b3cf1.js";import"./index-7edabd42.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-ef93a395.js";import"./index-c10b5788.js";import"./Label-44520d2b.js";import"./index-db317946.js";import"./Popover-e0a9892e.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-6733af99.js";const s=n.forwardRef((o,r)=>g.createPortal(e.jsx(l,{...o,ref:r}),document.body));s.displayName="Toast";try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:null,description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const b=`## Usage

### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.
`,M=[{name:"show",visibility:"public",description:"Shows the component."}];function D(o={}){const{wrapper:r}=Object.assign({},c(),o.components);return r?e.jsx(r,{...o,children:e.jsx(a,{})}):a();function a(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},c(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Modals & Popovers / Toast",component:l,argTypes:{children:{control:"text"}},args:{placement:d.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
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
`,e.jsx(T,{children:e.jsx(w,{name:"Default",children:m=>{const p=n.useRef(null),f=()=>{p.current.show()};return n.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:p,duration:m.duration,placement:m.placement,children:m.children}),e.jsx(u,{onClick:f,children:"Show Toast"})]})}})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(j,{story:"Default"}),`
`,e.jsx(y,{children:b}),`
`,e.jsx(C,{rows:M}),`
`,e.jsx(S,{})]})}}const h=o=>{const r=n.useRef(null),a=()=>{r.current.show()};return n.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:r,duration:o.duration,placement:o.placement,children:o.children}),e.jsx(u,{onClick:a,children:"Show Toast"})]})};h.storyName="Default";h.parameters={storySource:{source:`args => {
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
//# sourceMappingURL=Toast.stories-8a2f1cff.js.map
