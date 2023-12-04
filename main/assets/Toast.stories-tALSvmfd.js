import{M as x,C as T,f as w,b as y}from"./chunk-HLWAVYOI-VbR0yKM4.js";import{T as p,a as d}from"./index-yZ6WVJOE.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as n}from"./index-OjgoNOWw.js";import{r as g}from"./index-QYh6idnL.js";import{B as u}from"./index-avvyQgOI.js";import{b as j}from"./DomRefTable.module-n051UOt3.js";import{D as v}from"./DocsHeader-gOp11F3i.js";import{F as S}from"./Footer-hm5WXwLb.js";import{D as b}from"./DomRefTable-FKgh4DEZ.js";import{u as c}from"./index-RwE9nQVW.js";import"./iframe-Ipyh2L0P.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./Integer-kog98579.js";import"./UI5Element-Y0uzLFOr.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./withWebComponent-l-jCeTa1.js";import"./utils-NoXYr8Q_.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./Icons-WRZ8WMWs.js";import"./style-map-IagzN5gT.js";import"./Button-udd0QuU3.js";import"./Icon-bdsWWJur.js";import"./slot-HSrR9XJ-.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-Xpt9ffmz.js";import"./react-jss.esm-tmBtHfec.js";import"./index-1O14NHzh.js";import"./decline-nB1v5zp8.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-7q7IEdiC.js";import"./alert-hH0G14f_.js";import"./class-map-kmjzTHDs.js";import"./index-CrFnN6zV.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-b_JjHWlv.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./index-G3vxELyh.js";import"./index-06wKem9k.js";import"./Avatar-PRs4M-6Z.js";import"./ResizeHandler-YlQCt_sN.js";import"./employee-fYGGLuhG.js";import"./index-onIIMkEE.js";import"./index-K7Ir0dCd.js";import"./Link-iRvTdZPp.js";import"./WrappingType-avPrqc94.js";import"./index-5ETO3hDj.js";import"./index-ZcOIUVJX.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./TableOfContent-goEofAVS.js";import"./index-ZUUzo-iy.js";import"./Label-KPXg4zHG.js";import"./index-2_GkS9Fn.js";import"./Popover-4c8T_r5P.js";import"./PopupsCommon.css-rFaoTaej.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-aoBbOOT0.js";const s=n.forwardRef((o,r)=>g.createPortal(e.jsx(p,{...o,ref:r}),document.body));s.displayName="Toast";try{s.displayName="Toast",s.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:null,description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:null,description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=`## Usage

### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.
`,M=[{name:"show",visibility:"public",description:"Shows the component."}];function D(o={}){const{wrapper:r}=Object.assign({},c(),o.components);return r?e.jsx(r,{...o,children:e.jsx(a,{})}):a();function a(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},c(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Modals & Popovers / Toast",component:p,argTypes:{children:{control:"text"}},args:{placement:d.BottomCenter,children:"Toast Text"},parameters:{chromatic:{delay:1e3}}}),`
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
`,e.jsx(T,{children:e.jsx(w,{name:"Default",children:m=>{const l=n.useRef(null),f=()=>{l.current.show()};return n.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:l,duration:m.duration,placement:m.placement,children:m.children}),e.jsx(u,{onClick:f,children:"Show Toast"})]})}})}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(j,{story:"Default"}),`
`,e.jsx(y,{children:C}),`
`,e.jsx(b,{rows:M}),`
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
}`}};const i={title:"Modals & Popovers / Toast",parameters:{chromatic:{delay:1e3}},component:p,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},tags:["stories-mdx"],includeStories:["defaultStory"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:D};const Ge=["defaultStory"];export{Ge as __namedExportsOrder,i as default,h as defaultStory};
