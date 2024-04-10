import{j as g}from"./jsx-runtime-Du8NFWEI.js";import{c as L}from"./clsx-B-dksMZM.js";import{r}from"./index-Dl6G-zuu.js";import{u as w,P as I}from"./i18n-defaults-GDPbxlcd.js";import{u as v}from"./useStylesheet-D5wp95d6.js";var o=(e=>(e.Determinate="Determinate",e.Indeterminate="Indeterminate",e))(o||{});const k={packageName:"@ui5/webcomponents-react",fileName:"Loader.module.css",content:'.Loader_loader_qpbhk_1{height:.25rem;position:relative;width:100%}.Loader_loader_qpbhk_1:before{background-color:var(--sapContent_BusyColor);content:"";height:100%;left:0;opacity:.15;position:absolute;width:100%}.Loader_loader_qpbhk_1.Loader_loaderDeterminate_qpbhk_16{background:linear-gradient(to right,var(--sapContent_BusyColor),var(--sapContent_BusyColor)) repeat-y}.Loader_loader_qpbhk_1.Loader_loaderIndeterminate_qpbhk_20{animation:Loader_scroll_qpbhk_1 1.2s linear infinite;background-size:40%;background:linear-gradient(to right,#0000 0,var(--sapContent_BusyColor) calc(50% - 2rem),var(--sapContent_BusyColor) calc(50% + 2rem),#0000 100%) repeat-y}@keyframes Loader_scroll_qpbhk_1{0%{background-position:-100% 0}to{background-position:200% 0}}'},l={loader:"Loader_loader_qpbhk_1",loaderDeterminate:"Loader_loaderDeterminate_qpbhk_16",loaderIndeterminate:"Loader_loaderIndeterminate_qpbhk_20",scroll:"Loader_scroll_qpbhk_1"},t=r.forwardRef((e,i)=>{const{className:d,type:n,progress:p,slot:u,style:m,delay:a,...c}=e;v(k,t.displayName);const[h,_]=r.useState(a===0),y=L(l.loader,d,l[`loader${n}`]),f=n!==o.Determinate?"40%":p;r.useEffect(()=>{let s;return a>0&&(s=setTimeout(()=>{_(!0)},a)),()=>{clearTimeout(s)}},[]);const b=w("@ui5/webcomponents-react");return h?g.jsx("div",{ref:i,className:y,"data-component-name":"Loader","aria-busy":"true",role:"progressbar",title:b.getText(I),slot:u,style:{...m,backgroundSize:f},...c}):null});t.defaultProps={type:o.Indeterminate,progress:"0px",delay:0};t.displayName="Loader";try{t.displayName="Loader",t.__docgenInfo={description:"The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />\nIt can be used to signal a data update on an already existing dataset, or where an expansion will happen.",displayName:"Loader",props:{delay:{defaultValue:{value:"0"},description:"Delay in ms until the Loader will be displayed",name:"delay",required:!1,type:{name:"number"}},type:{defaultValue:{value:"LoaderType.Indeterminate"},description:"Defines the type of the `Loader`.\n__Note:__ If the process completion rate can be detected the `Determinate` type should be used.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Determinate"'},{value:'"Indeterminate"'},{value:'"Determinate"'},{value:'"Indeterminate"'}]}},progress:{defaultValue:{value:"0px"},description:"Defines the progress of the Loader Bar. <br />\n__Note:__ This prop has no effect if used with type `Indeterminate`.",name:"progress",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{t.displayName="Loader",t.__docgenInfo={description:"The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />\nIt can be used to signal a data update on an already existing dataset, or where an expansion will happen.",displayName:"Loader",props:{delay:{defaultValue:{value:"0"},description:"Delay in ms until the Loader will be displayed",name:"delay",required:!1,type:{name:"number"}},type:{defaultValue:{value:"LoaderType.Indeterminate"},description:"Defines the type of the `Loader`.\n__Note:__ If the process completion rate can be detected the `Determinate` type should be used.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Determinate"'},{value:'"Indeterminate"'},{value:'"Determinate"'},{value:'"Indeterminate"'}]}},progress:{defaultValue:{value:"0px"},description:"Defines the progress of the Loader Bar. <br />\n__Note:__ This prop has no effect if used with type `Indeterminate`.",name:"progress",required:!1,type:{name:"Width<string | number>"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{t as L,o as a};
