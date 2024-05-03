import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{L as h}from"./LineChart-VNx76xXh.js";import{A as f,D as y,V as s,N as n}from"./index-q2cYVYf8.js";import{r as o}from"./index-OjgoNOWw.js";import{C}from"./index-sZx3Kns2.js";import{u as _}from"./useStylesheet-MWHnOiB7.js";const b={packageName:"@ui5/webcomponents-react",fileName:"AnalyticalCard.module.css",content:".AnalyticalCard_content_2qomb_1{display:flex;flex:1 1 auto;overflow:hidden;position:relative}"},g={content:"AnalyticalCard_content_2qomb_1"},t=o.forwardRef((r,d)=>{const{children:m,header:u,...p}=r;return _(b,t.displayName),o.useEffect(()=>{},[]),e.jsxs(C,{ref:d,...p,children:[u,e.jsx("div",{className:g.content,role:"group",children:m})]})});t.displayName="AnalyticalCard";try{t.displayName="AnalyticalCard",t.__docgenInfo={description:"The `AnalyticalCard` is mainly used for data visualization. It consists of two areas – a header area and a chart area with a visual representation of the data.<br />",displayName:"AnalyticalCard",props:{header:{defaultValue:null,description:"The Card header Component. Using the `AnalyticalCardHeader` is recommended.",name:"header",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The content of the `AnalyticalCard`.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const x=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],N={title:"Data Display / AnalyticalCard",component:t,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{children:e.jsx(h,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:r=>`${r}k`}],dataset:x}),header:e.jsxs(f,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:y.Down,value:"65.34",state:s.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(n,{titleText:"Target",number:"100",unit:"k"}),e.jsx(n,{titleText:"Deviation",number:"34.7",unit:"%",state:s.Critical})]})}},a={};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const A=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{E as C,a as D};
