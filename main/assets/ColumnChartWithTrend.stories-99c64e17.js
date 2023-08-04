import{c as B}from"./DemoProps-4c4a52a7.js";import{j as n}from"./jsx-runtime-d079401a.js";import{T as g}from"./ThemingParameters-7e2e4e30.js";import{r as q}from"./index-f1f2c4b1.js";import{u as F}from"./useLongestYAxisLabel-097403ef.js";import{u as H}from"./useTooltipFormatter-200a2b5e.js";import{a as c,g as U}from"./defaults-e34d79bc.js";import{C as D}from"./index-bc733aa2.js";import{C as K}from"./react-content-loader.es-27eb8e7e.js";import{u as G}from"./useIsomorphicId-ed1d334d.js";const Z=(t,l)=>q.useMemo(()=>{const s=[],a=[],e=[];return t==null||t.forEach((o,r)=>{o.type==="bar"&&(s.push({...o,opacity:0,hide:!0,hideDataLabel:!0,showDot:!1,formatter:c}),a.push({color:o.color??`var(--sapChart_OrderedColor_${r%11+1})`,formatter:c,...o})),o.type==="line"&&(s.push({color:o.color??`var(--sapChart_OrderedColor_${r%11+1})`,formatter:c,...o}),a.push({...o,opacity:0,hideDataLabel:!0,showDot:!1,formatter:c}))}),l==null||l.forEach(o=>{const r={};s.forEach(i=>{i.type==="line"&&(r[`__${i.accessor}`]=U(o,i.accessor),r[i.accessor]=1)}),e.push({...o,...r})}),{lineMeasures:s,columnMeasures:a,columnDataset:e}},[t,l]),C=t=>n.jsxs(K,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:g.sapContent_ImagePlaceholderBackground,foregroundColor:g.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:g.sapContent_DisabledOpacity,...t,children:[n.jsx("path",{d:"M 20 56 L 39 33 L 57 25 L 77 5 L 99 25 L 125 31 L 139 25 L 125 32 L 98 27 L 77 10 L 58 27 L 39 35 L 20 56 Z",fill:"none",strokeWidth:"2"}),n.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n.jsx("rect",{x:"20",y:"65",width:"15",height:"70"}),n.jsx("rect",{x:"40",y:"58",width:"15",height:"77"}),n.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),n.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),n.jsx("rect",{x:"100",y:"35",width:"15",height:"100"}),n.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{C.displayName="ColumnChartWithTrendPlaceholder",C.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}const J={formatter:c},Q={formatter:c,opacity:1},X={wrapperStyle:{visibility:"hidden"}},u=q.forwardRef((t,l)=>{const{loading:s,dataset:a,style:e,className:o,slot:r,onClick:i,noLegend:N,noAnimation:w,onDataPointClick:p,onLegendClick:I,ChartPlaceholder:W,...O}=t,v=G(),x={yAxisVisible:!1,xAxisVisible:!0,gridStroke:g.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,...t.chartConfig},{dimensions:_,measures:z}=H(t.dimensions,t.measures,J,Q),{lineMeasures:L,columnMeasures:y,columnDataset:k}=Z(z,a),[E]=F(k,y,x.legendPosition),M={formatter:($,Y,m)=>{const b=L.find(f=>f.type==="line"&&f.accessor===m.dataKey);return b?b.formatter(m.payload[`__${b.accessor}`]):y.find(f=>f.accessor===m.dataKey).formatter($,Y,m)}},{chartConfig:oe,dimensions:ae,measures:ne,tooltipConfig:ie,...R}=O;return n.jsxs("div",{ref:l,style:{display:"flex",flexDirection:"column",height:e==null?void 0:e.height,width:e==null?void 0:e.width,...e},className:o,slot:r,...R,children:[(a==null?void 0:a.length)!==0&&n.jsx(D,{className:typeof p=="function"||typeof i=="function"?"has-click-handler":void 0,tooltipConfig:X,noAnimation:w,loading:s,onClick:i,syncId:v,style:{...e,height:`calc(${e==null?void 0:e.height} * 0.2)`},dataset:a,measures:L,dimensions:_,noLegend:!0,onDataPointClick:p,chartConfig:{xAxisVisible:!1,yAxisVisible:!1,yAxisTicksVisible:!1,gridHorizontal:!1,yAxisLabelsVisible:!1,yAxisWidth:E}}),n.jsx(D,{onLegendClick:I,tooltipConfig:M,noAnimation:w,noLegend:N,loading:s,onClick:i,onDataPointClick:p,syncId:v,ChartPlaceholder:W??C,dataset:k,measures:y,dimensions:_,chartConfig:x,style:{...e,height:`calc(${e==null?void 0:e.height} * ${(a==null?void 0:a.length)!==0?.8:1})`},className:typeof p=="function"||typeof i=="function"?"has-click-handler":void 0})]})});u.defaultProps={noLegend:!1,noAnimation:!1};u.displayName="ColumnChartWithTrend";try{u.displayName="ColumnChartWithTrend",u.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'Omit<ICartesianChartConfig, "secondYAxis" | "secondYAxisConfig"> & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const ee={title:"ColumnChartWithTrend",component:u,args:{style:{height:"400px"},dataset:B,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),type:"line"},{accessor:"sessions",label:"Active Sessions",type:"bar"}]}},d={},h={args:{dataset:[]}};var P,T,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var V,A,S;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(S=(A=h.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const te=["Default","LoadingPlaceholder"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:h,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{ye as C,d as D,h as L};
//# sourceMappingURL=ColumnChartWithTrend.stories-99c64e17.js.map
