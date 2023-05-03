import{c as Y}from"./DemoProps-9cd0a46b.js";import{j as a}from"./jsx-runtime-5926aa06.js";import{T as g}from"./ThemingParameters-f4b4144e.js";import{r as S}from"./index-ebeaab24.js";import{u as F}from"./useLongestYAxisLabel-8d61a369.js";import{u as H}from"./useTooltipFormatter-179783d3.js";import{d as c,g as U}from"./defaults-d485632a.js";import{C as k}from"./index-0d2e8451.js";import{C as K}from"./react-content-loader.es-627d673d.js";import{u as G}from"./useIsomorphicId-4be7c5e3.js";const Z=(t,l)=>S.useMemo(()=>{const s=[],n=[],e=[];return t==null||t.forEach((o,i)=>{o.type==="bar"&&(s.push({...o,opacity:0,hide:!0,hideDataLabel:!0,showDot:!1,formatter:c}),n.push({color:o.color??`var(--sapChart_OrderedColor_${i%11+1})`,formatter:c,...o})),o.type==="line"&&(s.push({color:o.color??`var(--sapChart_OrderedColor_${i%11+1})`,formatter:c,...o}),n.push({...o,opacity:0,hideDataLabel:!0,showDot:!1,formatter:c}))}),l==null||l.forEach(o=>{const i={};s.forEach(r=>{r.type==="line"&&(i[`__${r.accessor}`]=U(o,r.accessor),i[r.accessor]=1)}),e.push({...o,...i})}),{lineMeasures:s,columnMeasures:n,columnDataset:e}},[t,l]),C=t=>a.jsxs(K,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:g.sapContent_ImagePlaceholderBackground,foregroundColor:g.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:g.sapContent_DisabledOpacity,...t,children:[a.jsx("path",{d:"M 20 56 L 39 33 L 57 25 L 77 5 L 99 25 L 125 31 L 139 25 L 125 32 L 98 27 L 77 10 L 58 27 L 39 35 L 20 56 Z",fill:"none",strokeWidth:"2"}),a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("rect",{x:"20",y:"65",width:"15",height:"70"}),a.jsx("rect",{x:"40",y:"58",width:"15",height:"77"}),a.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),a.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),a.jsx("rect",{x:"100",y:"35",width:"15",height:"100"}),a.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{C.displayName="ColumnChartWithTrendPlaceholder",C.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}const J={formatter:c},Q={formatter:c,opacity:1},X={wrapperStyle:{visibility:"hidden"}},u=S.forwardRef((t,l)=>{const{loading:s,dataset:n,style:e,className:o,slot:i,onClick:r,noLegend:q,noAnimation:w,onDataPointClick:p,onLegendClick:N,ChartPlaceholder:I,...E}=t,v=G(),O={yAxisVisible:!1,xAxisVisible:!0,gridStroke:g.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,...t.chartConfig},{dimensions:x,measures:W}=H(t.dimensions,t.measures,J,Q),{lineMeasures:_,columnMeasures:y,columnDataset:L}=Z(W,n),[z]=F(L,y),M={formatter:($,B,m)=>{const b=_.find(f=>f.type==="line"&&f.accessor===m.dataKey);return b?b.formatter(m.payload[`__${b.accessor}`]):y.find(f=>f.accessor===m.dataKey).formatter($,B,m)}},{chartConfig:oe,dimensions:ne,measures:ae,tooltipConfig:re,...R}=E;return a.jsxs("div",{ref:l,style:{display:"flex",flexDirection:"column",height:e==null?void 0:e.height,width:e==null?void 0:e.width,...e},className:o,slot:i,...R,children:[(n==null?void 0:n.length)!==0&&a.jsx(k,{className:typeof p=="function"||typeof r=="function"?"has-click-handler":void 0,tooltipConfig:X,noAnimation:w,loading:s,onClick:r,syncId:v,style:{...e,height:`calc(${e==null?void 0:e.height} * 0.2)`},dataset:n,measures:_,dimensions:x,noLegend:!0,onDataPointClick:p,chartConfig:{xAxisVisible:!1,yAxisVisible:!1,yAxisTicksVisible:!1,gridHorizontal:!1,yAxisLabelsVisible:!1,yAxisWidth:z}}),a.jsx(k,{onLegendClick:N,tooltipConfig:M,noAnimation:w,noLegend:q,loading:s,onClick:r,onDataPointClick:p,syncId:v,ChartPlaceholder:I??C,dataset:L,measures:y,dimensions:x,chartConfig:O,style:{...e,height:`calc(${e==null?void 0:e.height} * ${(n==null?void 0:n.length)!==0?.8:1})`},className:typeof p=="function"||typeof r=="function"?"has-click-handler":void 0})]})});u.defaultProps={noLegend:!1,noAnimation:!1};u.displayName="ColumnChartWithTrend";try{u.displayName="ColumnChartWithTrend",u.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'Omit<ICartesianChartConfig, "secondYAxis" | "secondYAxisConfig"> & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const ee={title:"ColumnChartWithTrend",component:u,args:{style:{height:"400px"},dataset:Y,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),type:"line"},{accessor:"sessions",label:"Active Sessions",type:"bar"}]}},d={},h={args:{dataset:[]}};var D,P,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,V,A;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(A=(V=h.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const te=["Default","LoadingPlaceholder"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:h,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{ye as C,d as D,h as L};
//# sourceMappingURL=ColumnChartWithTrend.stories-6ebf46b9.js.map
