import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{T as h}from"./ThemingParameters-UghqSl-x.js";import{e as T}from"./index-Jm2lAFsC.js";import{r as b}from"./index-OjgoNOWw.js";import{X as D,Y as x,u as ie,a as ne,C as re,c as se,b as V}from"./YAxisTicks-bG0t3dNd.js";import{u as le,C as ce}from"./ChartDataLabel-vlB1jeVG.js";import{u as de,x as he,t as pe,a as ue,b as me}from"./staticProps-YAKXJgHU.js";import{u as fe}from"./useLongestYAxisLabel-tCzhkN-k.js";import{u as ge,a as ye,r as Ce}from"./useTooltipFormatter-fICME04w.js";import{C as be}from"./ChartContainer-pnyUOn5k.js";import{a as S}from"./defaults-0JJzmY2k.js";import{C as xe}from"./react-content-loader.es-MhslfaKA.js";import{h as Ae,i as ke,d as ve,R as we,T as Le,B as Pe}from"./generateCategoricalChart-mz89WCIP.js";import{L as I}from"./Line-I-UiAVu4.js";import{u as _e}from"./withWebComponent-6ZcDnwha.js";import{u as je}from"./useIsRTL-8cFGcCtf.js";var Te=Ae({chartName:"LineChart",GraphicalChild:I,axisComponents:[{axisType:"xAxis",AxisComp:D},{axisType:"yAxis",AxisComp:x}],formatAxisMap:ke});const A=n=>o.jsxs(xe,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:h.sapContent_ImagePlaceholderBackground,foregroundColor:h.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:h.sapContent_DisabledOpacity,...n,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("path",{d:"M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L 135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z",fill:"none",strokeWidth:"2"})]});try{A.displayName="LineChartPlaceholder",A.__docgenInfo={description:"",displayName:"LineChartPlaceholder",props:{}}}catch{}const Ve={formatter:S},De={formatter:S,width:1,opacity:1},f=b.forwardRef((n,Y)=>{var P,_;const{dataset:s,loading:z,noLegend:R,noAnimation:q,tooltipConfig:p,onDataPointClick:u,onLegendClick:N,onClick:k,style:F,className:K,slot:O,syncId:E,ChartPlaceholder:H,children:M,...B}=n,e={yAxisVisible:!1,xAxisVisible:!0,gridStroke:h.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,yAxisTicksVisible:!0,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...n.chartConfig},{dimensions:v,measures:l}=ge(n.dimensions,n.measures,Ve,De),W=ye(l),r=v[0],{primaryMeasure:m,secondaryMeasure:$}=Ce(l,(P=e==null?void 0:e.secondYAxis)==null?void 0:P.dataKey),U=le(r),[X,w]=_e(Y),G=l.map(({accessor:t})=>t),g=e.secondYAxis?G.findIndex(t=>{var i;return t===((i=e.secondYAxis)==null?void 0:i.dataKey)}):0,Z=de(N),c=b.useRef(0),L=b.useCallback((t,i)=>{var d,j;i.dataKey&&typeof u=="function"?(c.current=2,u(T({},{value:i.value,dataKey:i.dataKey,dataIndex:i.index,payload:i.payload}))):typeof k=="function"&&c.current===0&&k(T(i,{payload:(j=(d=t==null?void 0:t.activePayload)==null?void 0:d[0])==null?void 0:j.payload,activePayloads:t==null?void 0:t.activePayload})),c.current>0&&(c.current-=1)},[u,c.current]),y=(s==null?void 0:s.length)>30,J=r==null?void 0:r.accessor,[Q,ee]=fe(s,l,e.legendPosition),te=ie(e.margin,e.zoomingTool),ae=ne(w,n.dimensions.length),{chartConfig:Se,dimensions:Ie,measures:Ye,...oe}=B,C=je(w),a=e.referenceLine;return o.jsx(be,{dataset:s,loading:z,Placeholder:H??A,ref:X,style:F,className:K,slot:O,resizeDebounce:e.resizeDebounce,...oe,children:o.jsxs(Te,{syncId:E,margin:te,data:s,onClick:L,className:typeof u=="function"?"has-click-handler":void 0,children:[o.jsx(re,{vertical:e.gridVertical,horizontal:e.gridHorizontal,stroke:e.gridStroke}),v.map((t,i)=>o.jsx(D,{dataKey:t.accessor,xAxisId:i,interval:(t==null?void 0:t.interval)??(y?"preserveStart":0),tick:o.jsx(se,{config:t}),tickLine:i<1,axisLine:i<1,height:e.xAxisVisible?ae[i]:0,padding:he,allowDuplicatedCategory:i===0,reversed:C,...e.xAxisConfig},t.accessor)),o.jsx(x,{orientation:C===!0?"right":"left",axisLine:e.yAxisVisible,tickLine:pe,yAxisId:"left",tickFormatter:m==null?void 0:m.formatter,interval:0,tick:e.yAxisTicksVisible&&o.jsx(V,{config:m}),width:Q,...e.yAxisConfig}),((_=e.secondYAxis)==null?void 0:_.dataKey)&&o.jsx(x,{dataKey:e.secondYAxis.dataKey,axisLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${g%11+1})`},tick:o.jsx(V,{config:$,secondYAxisConfig:{color:e.secondYAxis.color??`var(--sapChart_OrderedColor_${g%11+1})`}}),tickLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${g%11+1})`},label:{value:e.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:C===!0?"left":"right",yAxisId:"right",interval:0,...e.secondYAxisConfig}),l.map((t,i)=>{var d;return o.jsx(I,{dot:t.showDot??!y,yAxisId:((d=e.secondYAxis)==null?void 0:d.dataKey)===t.accessor?"right":"left",name:t.label??t.accessor,strokeOpacity:t.opacity,label:y?!1:o.jsx(ce,{config:t,chartType:"line",position:"top"}),type:"monotone",dataKey:t.accessor,stroke:t.color??`var(--sapChart_OrderedColor_${i%11+1})`,strokeWidth:t.width,activeDot:{onClick:L},isAnimationActive:q===!1,...t.lineConfig},t.accessor)}),!R&&o.jsx(ve,{verticalAlign:e.legendPosition,align:e.legendHorizontalAlign,onClick:Z,wrapperStyle:ee}),a&&o.jsx(we,{...a,stroke:(a==null?void 0:a.color)??(a==null?void 0:a.stroke),y:(a==null?void 0:a.value)??(a==null?void 0:a.y),yAxisId:(a==null?void 0:a.yAxisId)??"left",label:a==null?void 0:a.label}),(p==null?void 0:p.active)!==!1&&o.jsx(Le,{cursor:ue,formatter:W,contentStyle:me,labelFormatter:U,...p}),e.zoomingTool&&o.jsx(Pe,{y:10,dataKey:J,tickFormatter:r==null?void 0:r.formatter,stroke:h.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),M]})})});f.defaultProps={noLegend:!1,noAnimation:!1};f.displayName="LineChart";try{f.displayName="LineChart",f.__docgenInfo={description:"A `LineChart` is a type of chart used to show information that changes over time - it connects multiple dots.",displayName:"LineChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one line in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this line.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: line width, defaults to `1`\n- `opacity`: line opacity, defaults to `1`\n- `showDot`: Flag whether the line dot should be displayed or not.\n- `lineConfig`: This prop allows passing all [Line Properties](https://recharts.org/en-US/api/Line) of the Recharts library.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{f as L};
//# sourceMappingURL=LineChart-5FKau2nx.js.map
