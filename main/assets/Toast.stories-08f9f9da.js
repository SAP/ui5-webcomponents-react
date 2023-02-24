import{M as w,C as g,i as y,a as x}from"./index-02423177.js";import{T as a,a as d}from"./index-b347825a.js";import{B as u}from"./index-373748a1.js";import{A as D}from"./DomRefTable.module-30f3bd43.js";import{D as b}from"./DocsHeader-ce92ab0e.js";import{F as M}from"./Footer-c8244a58.js";import{a as s,F as p,j as t}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";import{D as C}from"./DomRefTable-02666777.js";import{u as h}from"./index-4fb8b842.js";import"./iframe-3c157cf7.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Integer-44c9be94.js";import"./UI5Element-5c53814f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./MarkedEvents-f33713fa.js";import"./AriaLabelHelper-dee23f38.js";import"./withWebComponent-b8903b2e.js";import"./utils-ed90fb1b.js";import"./class-map-a4eccd4f.js";import"./FocusableElements-679e4fb9.js";import"./Keys-50a1cb5a.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-da7c4a52.js";import"./MediaRange-25b98f31.js";import"./style-map-f4770aeb.js";import"./Button-6ca701be.js";import"./Icons-0f428547.js";import"./chunk-4XCFV5WA-0265c491.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-9d4f0257.js";import"./decline-2be11c85.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-60eb1828.js";import"./TableOfContent-75175b8f.js";import"./index-63e4052b.js";import"./WrappingType-b81e595a.js";import"./index-bd49c23e.js";import"./Label-aecaa844.js";import"./Media-6b270b80.js";import"./index-0db28cca.js";import"./Popover-e3c8ecec.js";const S=`## Usage

### When to use:

*   You want to display a short success or information message.
*   You do not want to interrupt users while they are performing an action.
*   You want to confirm a successful action.

### When not to use:

*   You want to display error or warning message.
*   You want to interrupt users while they are performing an action.
*   You want to make sure that users read the message before they leave the page.
*   You want users to be able to copy some part of the message text.`,v=[{name:"show",visibility:"public",description:"Shows the component."}];function B(e={}){const{wrapper:r}=Object.assign({},h(),e.components);return r?t(r,{...e,children:t(n,{})}):n();function n(){const o=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},h(),e.components);return s(p,{children:[t(w,{title:"Modals & Popovers / Toast",component:a,argTypes:{children:{control:"text"}},args:{placement:d.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
`,t(b,{since:"0.9.0"}),`
`,t("br",{}),`
`,t(o.h2,{children:"Show a toast"}),`
`,s(o.p,{children:["The ",t(o.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,t(o.code,{children:"Toast"})," DOM element and call the ",t(o.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,t(o.code,{children:"ref"})," or work with IDs."]}),`
`,t(o.p,{children:t(o.strong,{children:"Example"})}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
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
`,t("br",{}),`
`,t(o.h2,{children:"Example"}),`
`,t(g,{children:t(y,{name:"Default",children:c=>{const l=i.useRef(null),T=()=>{l.current.show()};return i.useEffect(()=>{},[]),s(p,{children:[t(a,{ref:l,duration:c.duration,placement:c.placement,children:c.children}),t(u,{onClick:T,children:"Show Toast"})]})}})}),`
`,t(o.h2,{children:"Properties"}),`
`,t(D,{story:"Default"}),`
`,t(x,{children:S}),`
`,t(C,{rows:v}),`
`,t(M,{})]})}}const f=e=>{const r=i.useRef(null),n=()=>{r.current.show()};return i.useEffect(()=>{},[]),s(p,{children:[t(a,{ref:r,duration:e.duration,placement:e.placement,children:e.children}),t(u,{onClick:n,children:"Show Toast"})]})};f.storyName="Default";f.parameters={storySource:{source:`args => {
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
}`}};const m={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:a,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:B};const Et=["defaultStory"];export{Et as __namedExportsOrder,m as default,f as defaultStory};
//# sourceMappingURL=Toast.stories-08f9f9da.js.map
