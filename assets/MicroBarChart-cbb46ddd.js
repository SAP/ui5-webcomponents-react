import{j as r}from"./jsx-runtime-5926aa06.js";import{T as i}from"./ThemingParameters-f4b4144e.js";import{e as N}from"./index-99d317a4.js";import{c as P}from"./clsx.m-1229b3e0.js";import{r as l}from"./index-ebeaab24.js";import{c as q}from"./react-jss.esm-022ab528.js";import{d as C,g as p}from"./defaults-d485632a.js";import{C as I}from"./ChartContainer-cd95e3b7.js";import{B as z}from"./Placeholder-fd4af553.js";const L=(a,c=null)=>c?i[c]??c:i[`sapChart_Sequence_${a%11+1}`],T={container:{display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:i.sapFontFamily,fontWeight:"normal",width:"100%",height:"100%",justifyContent:"space-around"},barContainer:{cursor:"auto"},barContainerActive:{"&:active":{opacity:"0.3 !important"},cursor:"pointer"},labelContainer:{display:"flex",justifyContent:"space-between"},valueContainer:{display:"flex",backgroundColor:i.sapContent_Placeholderloading_Background},valueBar:{height:"100%"},label:{color:i.sapContent_LabelColor,display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:i.sapFontSmallSize,maxWidth:"70%"},text:{paddingLeft:"6px",display:"inline-block",overflow:"hidden",fontSize:i.sapFontSmallSize,boxSizing:"border-box",whiteSpace:"nowrap",textOverflow:"ellipsis",color:i.sapTextColor,textAlign:"right"}},A=q(T,{name:"MicroBarChart"}),f=l.forwardRef((a,c)=>{const{loading:x,dataset:t,onDataPointClick:d,style:w,className:v,slot:S,ChartPlaceholder:V,...j}=a,o=A(),y=l.useMemo(()=>({formatter:C,...a.dimension}),[a.dimension]),e=l.useMemo(()=>({formatter:C,...a.measure}),[a.measure]),k=l.useMemo(()=>{if(t){const n=Math.max(...t==null?void 0:t.map(s=>p(s,e.accessor)));return a.maxValue??n}return 0},[t,e,a.maxValue]),D=e!=null&&e.width?`${e.width}px`:"4px",_=l.useCallback((n,s)=>h=>{typeof d=="function"&&d(N(h,{dataKey:e.accessor,value:p(n,e.accessor),payload:n,dataIndex:s}))},[e.accessor,d]),B=P(o.barContainer,d&&o.barContainerActive),{maxValue:E,dimension:F,measure:O,...M}=j;return r.jsx(I,{dataset:t,loading:x,Placeholder:V??z,ref:c,style:w,className:v,slot:S,resizeDebounce:250,...M,children:r.jsx("div",{className:o.container,children:t==null?void 0:t.map((n,s)=>{var g;const h=p(n,y.accessor),u=p(n,e.accessor),b=y.formatter(h);let m="";return e.hideDataLabel||(e.DataLabel?m=l.createElement(e.DataLabel,{value:u,config:e,formattedValue:e.formatter(u)}):m=e.formatter(u)),r.jsxs("div",{className:B,onClick:_(n,s),children:[r.jsxs("div",{className:o.labelContainer,children:[r.jsx("span",{className:o.label,title:b,children:b}),r.jsx("span",{className:o.text,title:m,children:e.hideDataLabel?"":m})]}),r.jsx("div",{className:o.valueContainer,style:{opacity:(e==null?void 0:e.opacity)??1,height:D},children:r.jsx("div",{className:o.valueBar,style:{width:`${u/k*100}%`,backgroundColor:L(s,(g=e==null?void 0:e.colors)==null?void 0:g[s])}})})]},h)})})})});f.displayName="MicroBarChart";try{f.displayName="MicroBarChart",f.__docgenInfo={description:"The `MicroBarChart` compares different values of the same category to each other by displaying them in a compact way.",displayName:"MicroBarChart",props:{dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\nCan also be a getter.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `width`: bar width in pixel, defaults to `4`\n- `opacity`: bar opacity, defaults to `1`\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label",name:"measure",required:!0,type:{name:"MeasureConfig"}},maxValue:{defaultValue:null,description:`An optional number for the maxValue of the valueBar.
Default is the highest number of the corresponding accessor in the dataset.`,name:"maxValue",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}export{f as M};
//# sourceMappingURL=MicroBarChart-cbb46ddd.js.map
