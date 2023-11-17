import{M as x,C as T,e as w,b as y}from"./chunk-HLWAVYOI-aRY61EAZ.js";import{T as l,a as d}from"./index--2hMvmkI.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as n}from"./index-OjgoNOWw.js";import{r as g}from"./index-QYh6idnL.js";import{B as u}from"./index-Nq0B0t7P.js";import{A as j}from"./DomRefTable.module-KFV4vTNP.js";import{D as v}from"./DocsHeader-aw51gcp2.js";import{F as S}from"./Footer-5HE-tmQI.js";import{D as C}from"./DomRefTable-785j6Hhl.js";import{u as c}from"./index-RwE9nQVW.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./Integer-kog98579.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./withWebComponent-ceo0jn6D.js";import"./utils-CrDMzPRG.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./Icons-3pbvVZUr.js";import"./style-map-uWW-8QIe.js";import"./Button-a5xMWTkk.js";import"./Icon-HNXZSIOG.js";import"./slot-HSrR9XJ-.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-hjlCGKub.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./class-map-JXa0-u4l.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-oLSBYiL3.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./index-2LFs6KZP.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-CFEEopUN.js";import"./index-5G9NmmK_.js";import"./Label-z__cPwIf.js";import"./index-BVOpDmmc.js";import"./Popover-pPQH5XeW.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-HfEGARrw.js";const s=n.forwardRef((o,r)=>g.createPortal(e.jsx(l,{...o,ref:r}),document.body));s.displayName="Toast";try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

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
}`}};const i={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:l,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:D};const Fe=["defaultStory"];export{Fe as __namedExportsOrder,i as default,h as defaultStory};
//# sourceMappingURL=Toast.stories-G6scCo7n.js.map
