import{M as y,C as g,f as v,a as S}from"./chunk-PCJTTTQV-876def71.js";import{T as c,a as h}from"./index-8f1eae39.js";import{j as e,a as i,F as p}from"./jsx-runtime-670450c2.js";import{r}from"./index-f1f749bf.js";import{r as C}from"./index-96c5f47c.js";import{B as f}from"./index-13373b9f.js";import{d as M}from"./DomRefTable.module-982270f6.js";import{D as b}from"./DocsHeader-f90c548d.js";import{F as x}from"./Footer-25624531.js";import{D}from"./DomRefTable-f7c52e36.js";import{u}from"./index-4fb8b842.js";import"./iframe-184575c6.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Integer-f7f172c9.js";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./style-map-51d6dd91.js";import"./Button-400e2491.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./slot-76e48863.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-77bafcc7.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-6f3bee3a.js";import"./TableOfContent-940fb764.js";import"./index-4009412a.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-12fcfbc8.js";import"./Label-e3d88218.js";import"./index-e2da977c.js";import"./Popover-4088d87a.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";const a=r.forwardRef((o,n)=>C.createPortal(e(c,{...o,ref:n}),document.body));a.displayName="Toast";try{a.displayName="Toast",a.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:null,description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"Defines the placement of the component.\n\nAvailable options are:\n\n*   `TopStart`\n*   `TopCenter`\n*   `TopEnd`\n*   `MiddleStart`\n*   `MiddleCenter`\n*   `MiddleEnd`\n*   `BottomStart`\n*   `BottomCenter`\n*   `BottomEnd`",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const E=`## Usage

### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.
`,B=[{name:"show",visibility:"public",description:"Shows the component."}];function N(o={}){const{wrapper:n}=Object.assign({},u(),o.components);return n?e(n,{...o,children:e(s,{})}):s();function s(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},u(),o.components);return i(p,{children:[e(y,{title:"Modals & Popovers / Toast",component:c,argTypes:{children:{control:"text"}},args:{placement:h.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
`,e(b,{since:"0.9.0"}),`
`,e("br",{}),`
`,e(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
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
`,e(t.h2,{id:"example",children:"Example"}),`
`,e(g,{children:e(v,{name:"Default",children:l=>{const d=r.useRef(null),w=()=>{d.current.show()};return r.useEffect(()=>{},[]),i(p,{children:[e(a,{ref:d,duration:l.duration,placement:l.placement,children:l.children}),e(f,{onClick:w,children:"Show Toast"})]})}})}),`
`,e(t.h2,{id:"properties",children:"Properties"}),`
`,e(M,{story:"Default"}),`
`,e(S,{children:E}),`
`,e(D,{rows:B}),`
`,e(x,{})]})}}const T=o=>{const n=r.useRef(null),s=()=>{n.current.show()};return r.useEffect(()=>{},[]),i(p,{children:[e(a,{ref:n,duration:o.duration,placement:o.placement,children:o.children}),e(f,{onClick:s,children:"Show Toast"})]})};T.storyName="Default";T.parameters={storySource:{source:`args => {
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
}`}};const m={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:c,args:{placement:h.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:N};const We=["defaultStory"];export{We as __namedExportsOrder,m as default,T as defaultStory};
//# sourceMappingURL=Toast.stories-a24419ba.js.map
