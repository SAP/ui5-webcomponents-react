import{r as i}from"./index-OjgoNOWw.js";import{j as s}from"./jsx-runtime-DtaoT6pD.js";import{T as u}from"./ThemingParameters-UghqSl-x.js";import{g as c}from"./useTooltipFormatter-6nswRNcM.js";import{i as f}from"./generateCategoricalChart-NPKs9C7S.js";const b=e=>i.useCallback(a=>e&&typeof e.formatter=="function"?e.formatter(a):a,[e]),o=e=>{const{config:a,chartType:t,viewBox:r}=e;if(a.hideDataLabel)return null;if(a.DataLabel)return i.createElement(a.DataLabel,e);const l=a.formatter(e.value??e.children);if((t==="bar"||t==="column")&&(Math.abs(r.width)<c(l)||Math.abs(r.height)<12))return null;let n=u.sapContent_ContrastTextColor;return["area","line","radar"].includes(t)&&(n=u.sapTextColor),s.jsx(f,{viewBox:r,...e,fill:n,stroke:"none",content:void 0,value:l})};try{o.displayName="ChartDataLabel",o.__docgenInfo={description:"",displayName:"ChartDataLabel",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"IChartMeasure"}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"any"}},chartType:{defaultValue:null,description:"",name:"chartType",required:!0,type:{name:"enum",value:[{value:'"area"'},{value:'"bar"'},{value:'"column"'},{value:'"line"'},{value:'"radar"'},{value:'"pie"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}}}catch{}export{o as C,b as u};
