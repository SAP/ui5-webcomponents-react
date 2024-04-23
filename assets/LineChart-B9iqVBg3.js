import{j as o}from"./ManagedStyles-DBz9b8_7.js";import{T as p}from"./ThemingParameters--AGRs54p.js";import{e as j}from"./index-CBpU8qq5.js";import{r as w}from"./index-Cu9bd8lq.js";import{X as D,Y as v,u as ne,a as ie,C as re,c as se,b as S}from"./YAxisTicks-DijxRKsX.js";import{u as le,C as de}from"./ChartDataLabel-B5GEJ7CQ.js";import{u as ce,x as he,t as pe,a as ue,b as me}from"./staticProps-5Y59Eqef.js";import{u as fe}from"./useLongestYAxisLabel-DM1YS5pt.js";import{u as ge,a as ye,r as be}from"./useTooltipFormatter-Cmob3xc5.js";import{C as Ce}from"./ChartContainer-Cl1iCOX0.js";import{a as T}from"./defaults-BGKCdXll.js";import{C as we}from"./react-content-loader.es-eOuwWd-Z.js";import{c as ve,f as xe,d as ke,R as Ae,T as Le,h as _e}from"./generateCategoricalChart-DhX_3WHM.js";import{L as q}from"./Line-IHEpeyQH.js";import{u as Pe}from"./withWebComponent-C_dYwLuv.js";import{u as Ve}from"./useIsRTL-c9-KFkUW.js";var je=ve({chartName:"LineChart",GraphicalChild:q,axisComponents:[{axisType:"xAxis",AxisComp:D},{axisType:"yAxis",AxisComp:v}],formatAxisMap:xe});const u=i=>o.jsxs(we,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:p.sapContent_ImagePlaceholderBackground,foregroundColor:p.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:p.sapContent_DisabledOpacity,...i,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("path",{d:"M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L 135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z",fill:"none",strokeWidth:"2"})]});try{u.displayName="LineChartPlaceholder",u.__docgenInfo={description:"",displayName:"LineChartPlaceholder",props:{}}}catch{}try{u.displayName="LineChartPlaceholder",u.__docgenInfo={description:"",displayName:"LineChartPlaceholder",props:{}}}catch{}const Se={formatter:T},De={formatter:T,width:1,opacity:1},l=w.forwardRef((i,I)=>{var _,P;const{dataset:s,loading:z,noLegend:R,noAnimation:N,tooltipConfig:m,onDataPointClick:f,onLegendClick:Y,onClick:x,style:F,className:E,slot:K,syncId:O,ChartPlaceholder:H,children:M,...W}=i,e={yAxisVisible:!1,xAxisVisible:!0,gridStroke:p.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,yAxisTicksVisible:!0,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...i.chartConfig},{dimensions:k,measures:d}=ge(i.dimensions,i.measures,Se,De),B=ye(d),r=k[0],{primaryMeasure:g,secondaryMeasure:U}=be(d,(_=e==null?void 0:e.secondYAxis)==null?void 0:_.dataKey),$=le(r),[X,A]=Pe(I),G=d.map(({accessor:t})=>t),y=e.secondYAxis?G.findIndex(t=>{var n;return t===((n=e.secondYAxis)==null?void 0:n.dataKey)}):0,Z=ce(Y),c=w.useRef(0),L=w.useCallback((t,n)=>{var h,V;n.dataKey&&typeof f=="function"?(c.current=2,f(j({},{value:n.value,dataKey:n.dataKey,dataIndex:n.index,payload:n.payload}))):typeof x=="function"&&c.current===0&&x(j(n,{payload:(V=(h=t==null?void 0:t.activePayload)==null?void 0:h[0])==null?void 0:V.payload,activePayloads:t==null?void 0:t.activePayload})),c.current>0&&(c.current-=1)},[f,c.current]),b=(s==null?void 0:s.length)>30,J=r==null?void 0:r.accessor,[Q,ee]=fe(s,d,e.legendPosition),te=ne(e.margin,e.zoomingTool),ae=ie(A,i.dimensions.length),{chartConfig:Te,dimensions:qe,measures:Ie,...oe}=W,C=Ve(A),a=e.referenceLine;return o.jsx(Ce,{dataset:s,loading:z,Placeholder:H??u,ref:X,style:F,className:E,slot:K,resizeDebounce:e.resizeDebounce,...oe,children:o.jsxs(je,{syncId:O,margin:te,data:s,onClick:L,className:typeof f=="function"?"has-click-handler":void 0,children:[o.jsx(re,{vertical:e.gridVertical,horizontal:e.gridHorizontal,stroke:e.gridStroke}),k.map((t,n)=>o.jsx(D,{dataKey:t.accessor,xAxisId:n,interval:(t==null?void 0:t.interval)??(b?"preserveStart":0),tick:o.jsx(se,{config:t}),tickLine:n<1,axisLine:n<1,height:e.xAxisVisible?ae[n]:0,padding:he,allowDuplicatedCategory:n===0,reversed:C,...e.xAxisConfig},t.accessor)),o.jsx(v,{orientation:C===!0?"right":"left",axisLine:e.yAxisVisible,tickLine:pe,yAxisId:"left",tickFormatter:g==null?void 0:g.formatter,interval:0,tick:e.yAxisTicksVisible&&o.jsx(S,{config:g}),width:Q,...e.yAxisConfig}),((P=e.secondYAxis)==null?void 0:P.dataKey)&&o.jsx(v,{dataKey:e.secondYAxis.dataKey,axisLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${y%11+1})`},tick:o.jsx(S,{config:U,secondYAxisConfig:{color:e.secondYAxis.color??`var(--sapChart_OrderedColor_${y%11+1})`}}),tickLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${y%11+1})`},label:{value:e.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:C===!0?"left":"right",yAxisId:"right",interval:0,...e.secondYAxisConfig}),d.map((t,n)=>{var h;return o.jsx(q,{dot:t.showDot??!b,yAxisId:((h=e.secondYAxis)==null?void 0:h.dataKey)===t.accessor?"right":"left",name:t.label??t.accessor,strokeOpacity:t.opacity,label:b?!1:o.jsx(de,{config:t,chartType:"line",position:"top"}),type:"monotone",dataKey:t.accessor,stroke:t.color??`var(--sapChart_OrderedColor_${n%11+1})`,strokeWidth:t.width,activeDot:{onClick:L},isAnimationActive:N===!1,...t.lineConfig},t.accessor)}),!R&&o.jsx(ke,{verticalAlign:e.legendPosition,align:e.legendHorizontalAlign,onClick:Z,wrapperStyle:ee}),a&&o.jsx(Ae,{...a,stroke:(a==null?void 0:a.color)??(a==null?void 0:a.stroke),y:(a==null?void 0:a.value)??(a==null?void 0:a.y),yAxisId:(a==null?void 0:a.yAxisId)??"left",label:a==null?void 0:a.label}),(m==null?void 0:m.active)!==!1&&o.jsx(Le,{cursor:ue,formatter:B,contentStyle:me,labelFormatter:$,...m}),e.zoomingTool&&o.jsx(_e,{y:10,dataKey:J,tickFormatter:r==null?void 0:r.formatter,stroke:p.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),M]})})});l.defaultProps={noLegend:!1,noAnimation:!1};l.displayName="LineChart";try{l.displayName="LineChart",l.__docgenInfo={description:"A `LineChart` is a type of chart used to show information that changes over time - it connects multiple dots.",displayName:"LineChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="LineChart",l.__docgenInfo={description:"A `LineChart` is a type of chart used to show information that changes over time - it connects multiple dots.",displayName:"LineChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}export{l as L};
