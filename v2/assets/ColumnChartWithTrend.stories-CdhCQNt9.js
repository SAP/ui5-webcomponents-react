import{c as $}from"./DemoProps-CfK95Xbq.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{T as b}from"./ThemingParameters-B358vlzA.js";import{r as v}from"./index-RYns6xqu.js";import{u as H}from"./useLongestYAxisLabel-CXRTVIKH.js";import{u as U}from"./useTooltipFormatter-B4uZ8KTF.js";import{c as d,C as K}from"./staticProps-yz1en77Y.js";import{C as V}from"./index-Dg90y-qo.js";import{C as G}from"./react-content-loader.es-BcmDwNEo.js";const Z=(t,r)=>v.useMemo(()=>{const i=[],l=[],a=[];return t==null||t.forEach((e,o)=>{e.type==="bar"&&(i.push({...e,opacity:0,hide:!0,hideDataLabel:!0,showDot:!1,formatter:d}),l.push({color:e.color??`var(--sapChart_OrderedColor_${o%12+1})`,formatter:d,...e})),e.type==="line"&&(i.push({color:e.color??`var(--sapChart_OrderedColor_${o%12+1})`,formatter:d,...e}),l.push({...e,opacity:0,hideDataLabel:!0,showDot:!1,formatter:d}))}),r==null||r.forEach(e=>{const o={};i.forEach(s=>{s.type==="line"&&(o[`__${s.accessor}`]=K.getValueByDataKey(e,s.accessor),o[s.accessor]=1)}),a.push({...e,...o})}),{lineMeasures:i,columnMeasures:l,columnDataset:a}},[t,r]),m=t=>n.jsxs(G,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:b.sapContent_ImagePlaceholderBackground,foregroundColor:b.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:b.sapContent_DisabledOpacity,...t,children:[n.jsx("path",{d:"M 20 56 L 39 33 L 57 25 L 77 5 L 99 25 L 125 31 L 139 25 L 125 32 L 98 27 L 77 10 L 58 27 L 39 35 L 20 56 Z",fill:"none",strokeWidth:"2"}),n.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n.jsx("rect",{x:"20",y:"65",width:"15",height:"70"}),n.jsx("rect",{x:"40",y:"58",width:"15",height:"77"}),n.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),n.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),n.jsx("rect",{x:"100",y:"35",width:"15",height:"100"}),n.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{m.displayName="ColumnChartWithTrendPlaceholder",m.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}try{m.displayName="ColumnChartWithTrendPlaceholder",m.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}const J={formatter:d},Q={formatter:d,opacity:1},X={wrapperStyle:{visibility:"hidden"}},c=v.forwardRef((t,r)=>{const{loading:i,loadingDelay:l,dataset:a,style:e,className:o,slot:s,onClick:p,noLegend:I,noAnimation:_,onDataPointClick:f,onLegendClick:W,ChartPlaceholder:E,...z}=t,k=v.useId(),x={yAxisVisible:!1,xAxisVisible:!0,gridStroke:b.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,...t.chartConfig},{dimensions:D,measures:O}=U(t.dimensions,t.measures,J,Q),{lineMeasures:L,columnMeasures:C,columnDataset:P}=Z(O,a),[R]=H(P,C,x.legendPosition),M={formatter:(F,Y,g)=>{const w=L.find(y=>y.type==="line"&&y.accessor===g.dataKey);return w?w.formatter(g.payload[`__${w.accessor}`]):C.find(y=>y.accessor===g.dataKey).formatter(F,Y,g)}},{chartConfig:ne,dimensions:ae,measures:oe,...B}=z;return n.jsxs("div",{ref:r,style:{display:"flex",flexDirection:"column",height:e==null?void 0:e.height,width:e==null?void 0:e.width,...e},className:o,slot:s,...B,children:[(a==null?void 0:a.length)!==0&&n.jsx(V,{className:typeof f=="function"||typeof p=="function"?"has-click-handler":void 0,tooltipConfig:X,noAnimation:_,loading:i,loadingDelay:l,onClick:p,syncId:k,style:{...e,height:`calc(${e==null?void 0:e.height} * 0.2)`},dataset:a,measures:L,dimensions:D,noLegend:!0,onDataPointClick:f,chartConfig:{xAxisVisible:!1,yAxisVisible:!1,yAxisTicksVisible:!1,gridHorizontal:!1,yAxisLabelsVisible:!1,yAxisWidth:R}}),n.jsx(V,{onLegendClick:W,tooltipConfig:M,noAnimation:_,noLegend:I,loading:i,loadingDelay:l,onClick:p,onDataPointClick:f,syncId:k,ChartPlaceholder:E??m,dataset:P,measures:C,dimensions:D,chartConfig:x,style:{...e,height:`calc(${e==null?void 0:e.height} * ${(a==null?void 0:a.length)!==0?.8:1})`},className:typeof f=="function"||typeof p=="function"?"has-click-handler":void 0})]})});c.displayName="ColumnChartWithTrend";try{c.displayName="ColumnChartWithTrend",c.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x-axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'Omit<ICartesianChartConfig, "secondYAxis" | "secondYAxisConfig"> & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | ... 1 more ... | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{c.displayName="ColumnChartWithTrend",c.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x-axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'Omit<ICartesianChartConfig, "secondYAxis" | "secondYAxisConfig"> & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | ... 1 more ... | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const ee={title:"ColumnChartWithTrend",component:c,args:{style:{height:"400px"},dataset:$,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),type:"line"},{accessor:"sessions",label:"Active Sessions",type:"bar"}]}},h={},u={args:{dataset:[]}};var T,S,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(A=(S=h.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var j,q,N;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(N=(q=u.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const te=["Default","LoadingPlaceholder"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:h,LoadingPlaceholder:u,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{fe as C,h as D,u as L};
