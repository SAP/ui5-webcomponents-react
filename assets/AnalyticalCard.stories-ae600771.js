import{j as a}from"./jsx-runtime-d079401a.js";import{L as f}from"./LineChart-2a031c75.js";import{A as h,D as y,V as o,N as i}from"./index-3cd1ae87.js";import{w as C,x as g}from"./UI5Element-9ae3ac4a.js";import{r as s,a as _}from"./index-f1f2c4b1.js";import{C as x}from"./index-95809ba7.js";function N(e){return e?s.useEffect:Reflect.get(_,"useInsertionEffect")||s.useLayoutEffect}function b(e,n){N(typeof window>"u")(()=>(C(e,e.packageName,n),()=>{g(e.packageName,n)}),[e])}const S={packageName:"@ui5/webcomponents-react",fileName:"AnalyticalCard.module.css",content:"._content_2qomb_1{display:flex;flex:1 1 auto;overflow:hidden;position:relative}"},w={content:"_content_2qomb_1"},r=s.forwardRef((e,n)=>{const{children:m,header:u,...p}=e;return b(S,r.displayName),s.useEffect(()=>{},[]),a.jsxs(x,{ref:n,...p,children:[u,a.jsx("div",{className:w.content,role:"group",children:m})]})});r.displayName="AnalyticalCard";try{r.displayName="AnalyticalCard",r.__docgenInfo={description:"The `AnalyticalCard` is mainly used for data visualization. It consists of two areas – a header area and a chart area with a visual representation of the data.<br />",displayName:"AnalyticalCard",props:{header:{defaultValue:null,description:"The Card header Component. Using the `AnalyticalCardHeader` is recommended.",name:"header",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The content of the `AnalyticalCard`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const v=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],A={title:"Data Display / AnalyticalCard",component:r,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:a.jsx(f,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:e=>`${e}k`}],dataset:v}),header:a.jsxs(h,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:y.Down,value:"65.34",state:o.Error,scale:"K",description:"Q1, 2018",children:[a.jsx(i,{titleText:"Target",number:"100",unit:"k"}),a.jsx(i,{titleText:"Deviation",number:"34.7",unit:"%",state:o.Critical})]})}},t={};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:j,default:A},Symbol.toStringTag,{value:"Module"}));export{I as C,t as D};
//# sourceMappingURL=AnalyticalCard.stories-ae600771.js.map
