import{e as Ne,t as Ye}from"./DemoProps-CfK95Xbq.js";import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as I}from"./ThemingParameters-B358vlzA.js";import{e as Q}from"./index-C-Zfmu7Z.js";import{r as Y}from"./index-RYns6xqu.js";import{u as Be,a as Oe,C as Re,Y as B,b as W,X as O,c as K}from"./YAxisTicks-DQHUNJJw.js";import{u as We,C as Ke}from"./ChartDataLabel-DRkE5y1e.js";import{u as Ee,t as Fe,a as $e,b as He,c as fe}from"./staticProps-yz1en77Y.js";import{u as Me}from"./useLongestYAxisLabel-CXRTVIKH.js";import{u as Ue}from"./useOnClickInternal-CrvD_ZAc.js";import{u as Xe,a as Ge,r as Je,b as Z}from"./useTooltipFormatter-B4uZ8KTF.js";import{q as Qe,R as Ze,T as et,r as tt,B as at,s as ot,t as nt}from"./ChartContainer-BfEqDHQe.js";import{C as rt}from"./react-content-loader.es-BcmDwNEo.js";import{C as it}from"./ComposedChart-BZekR3tF.js";import{k as st}from"./withWebComponent-m_Fq5lNf.js";import{u as lt}from"./useIsRTL-C5iQ0Bor.js";const S=n=>{const{x:h,y:d,width:p,height:u,index:f,fill:D,strokeWidth:c,layout:b}=n,T={x1:c?h+(p-c)/2-1:h-3,x2:c?h+c+(p-c)/2:h+p+3},v={y1:c?d+(u-c)/2-1:d-3,y2:c?d+c+(u-c)/2:d+u+3};return b==="horizontal"?e.jsx("line",{x1:T.x1,x2:T.x2,y1:d,y2:d,stroke:D,strokeWidth:3},`target-${f}`):e.jsx("line",{x1:h+p,x2:h+p,y1:v.y1,y2:v.y2,stroke:D,strokeWidth:3},`target-${f}`)};try{S.displayName="ComparisonLine",S.__docgenInfo={description:"",displayName:"ComparisonLine",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"number"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"Fill"}},layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{S.displayName="ComparisonLine",S.__docgenInfo={description:"",displayName:"ComparisonLine",props:{x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:null,description:"",name:"strokeWidth",required:!1,type:{name:"number"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"Fill"}},layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const ct=e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),e.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),e.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),e.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),e.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),e.jsx("rect",{x:"20",y:"120",width:"60",height:"15"}),e.jsx("rect",{x:"115",y:"17.5",width:"2",height:"20"}),e.jsx("rect",{x:"150",y:"37.5",width:"2",height:"20"}),e.jsx("rect",{x:"90",y:"57.5",width:"2",height:"20"}),e.jsx("rect",{x:"100",y:"77.5",width:"2",height:"20"}),e.jsx("rect",{x:"120",y:"97.5",width:"2",height:"20"}),e.jsx("rect",{x:"87",y:"117.5",width:"2",height:"20"})]}),dt=e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),e.jsx("rect",{x:"40",y:"70",width:"15",height:"65"}),e.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),e.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),e.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),e.jsx("rect",{x:"120",y:"75",width:"15",height:"60"}),e.jsx("rect",{x:"17.5",y:"35",width:"20",height:"2"}),e.jsx("rect",{x:"37.5",y:"62",width:"20",height:"2"}),e.jsx("rect",{x:"57.5",y:"56",width:"20",height:"2"}),e.jsx("rect",{x:"77.5",y:"37",width:"20",height:"2"}),e.jsx("rect",{x:"97.5",y:"45",width:"20",height:"2"}),e.jsx("rect",{x:"117.5",y:"70",width:"20",height:"2"})]}),z=({layout:n,measures:h})=>{const d=new Set(h.map(p=>p.type));return e.jsxs(rt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:I.sapContent_ImagePlaceholderBackground,foregroundColor:I.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:I.sapContent_DisabledOpacity,children:[n==="vertical"&&e.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),n==="horizontal"&&e.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n==="vertical"&&d.has("primary")&&ct,n==="horizontal"&&d.has("primary")&&dt]})};try{z.displayName="BulletChartPlaceholder",z.__docgenInfo={description:"",displayName:"BulletChartPlaceholder",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"(IChartMeasure & { type: string; })[]"}}}}}catch{}try{z.displayName="BulletChartPlaceholder",z.__docgenInfo={description:"",displayName:"BulletChartPlaceholder",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"(IChartMeasure & { type: string; })[]"}}}}}catch{}const ut={formatter:fe},ht={formatter:fe,opacity:1},x=Y.forwardRef((n,h)=>{var U,X,G;const{loading:d,loadingDelay:p,dataset:u,onDataPointClick:f,noLegend:D,noAnimation:c,tooltipConfig:b,onLegendClick:T,onClick:v,layout:l="horizontal",style:ye,className:ge,slot:be,syncId:Ce,ChartPlaceholder:xe,children:ve,...we}=n,[ke,E]=st(h),a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:I.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},secondXAxisConfig:{},...n.chartConfig},{referenceLine:o}=a,{dimensions:R,measures:L}=Xe(n.dimensions,n.measures,ut,ht),y=Y.useMemo(()=>L.sort(t=>t.type==="comparison"?1:t.type==="primary"?-1:0),[L]),_e=Ge(y),g=R[0],{primaryMeasure:w,secondaryMeasure:F}=Je(y,(U=a==null?void 0:a.secondYAxis)==null?void 0:U.dataKey),Ae=We(g),je=y.map(({accessor:t})=>t),C=a.secondYAxis?je.findIndex(t=>{var i;return t===((i=a.secondYAxis)==null?void 0:i.dataKey)}):0,$=Y.useCallback((t,i,r)=>{var s;if(typeof f=="function")if(t.name){const _=(s=t==null?void 0:t.value)==null?void 0:s.length;f(Q(r??i,{value:_?t.value[1]-t.value[0]:t.value,dataIndex:t.index??i,dataKey:_?Object.keys(t).filter(m=>t.value.length?t[m]===t.value[1]-t.value[0]:t[m]===t.value&&m!=="value")[0]:t.dataKey??Object.keys(t).find(m=>t[m]===t.value&&m!=="value"),payload:t.payload}))}else f(Q({},{value:i.value,dataKey:i.dataKey,dataIndex:i.index,payload:i.payload}))},[f]),Ve=Ee(T),qe=Ue(v),N=(u==null?void 0:u.length)>30,Pe=g==null?void 0:g.accessor,[H,Ie]=Me(u,l==="vertical"?R:y,a.legendPosition),Se=Be(a.margin,a.zoomingTool),ze=Oe(E,l==="vertical"?1:n.dimensions.length),M={axisLine:a.yAxisVisible,tickLine:Fe,tickFormatter:w==null?void 0:w.formatter,interval:0},k=lt(E),De=Y.useCallback(()=>e.jsx(z,{layout:l,measures:L}),[l,L]),{chartConfig:ft,dimensions:yt,measures:gt,...Te}=we;return e.jsx(Qe,{ref:ke,loading:d,loadingDelay:p,dataset:u,Placeholder:xe??De,style:ye,className:ge,slot:be,resizeDebounce:a.resizeDebounce,...Te,children:e.jsxs(it,{syncId:Ce,onClick:qe,stackOffset:"sign",margin:Se,data:u,layout:l,className:typeof f=="function"||typeof v=="function"?"has-click-handler":void 0,children:[e.jsx(Re,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&R.map((t,i)=>{let r;const s={dataKey:t.accessor,interval:(t==null?void 0:t.interval)??(N?"preserveStartEnd":0),tickLine:i<1,axisLine:i<1,allowDuplicatedCategory:i===0};return l==="vertical"?(s.type="category",s.tick=e.jsx(W,{config:t}),s.yAxisId=i,s.width=H,r=B,s.orientation=k?"right":"left",s.interval="preserveStartEnd",s.minTickGap=N?void 0:-10):(s.dataKey=t.accessor,s.tick=e.jsx(K,{config:t}),s.xAxisId=i,s.height=ze[i],r=O,s.reversed=k),e.jsx(r,{...s},t.reactKey)}),l==="horizontal"&&e.jsx(B,{...M,yAxisId:"primary",width:H,orientation:k?"right":"left",tick:e.jsx(W,{config:w}),...a.yAxisConfig}),l==="vertical"&&e.jsx(O,{...M,reversed:k,xAxisId:"primary",type:"number",tick:e.jsx(K,{config:w}),...a.xAxisConfig}),((X=a.secondYAxis)==null?void 0:X.dataKey)&&l==="horizontal"&&e.jsx(B,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`},tick:e.jsx(W,{config:F,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:k?"left":"right",interval:0,yAxisId:"secondary",...a.secondYAxisConfig}),((G=a.secondYAxis)==null?void 0:G.dataKey)&&l==="vertical"&&e.jsx(O,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`},tick:e.jsx(K,{config:F,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${C%12+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),l==="horizontal"&&e.jsx(O,{xAxisId:"comparisonXAxis",hide:!0}),l==="vertical"&&e.jsx(B,{yAxisId:"comparisonYAxis",type:"category",hide:!0}),o&&e.jsx(Ze,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:o!=null&&o.value?l==="horizontal"?o==null?void 0:o.value:void 0:o==null?void 0:o.y,x:o!=null&&o.value?l==="vertical"?o==null?void 0:o.value:void 0:o==null?void 0:o.x,yAxisId:(o==null?void 0:o.yAxisId)??l==="horizontal"?"primary":void 0,xAxisId:(o==null?void 0:o.xAxisId)??l==="vertical"?"primary":void 0,label:o==null?void 0:o.label}),(b==null?void 0:b.active)!==!1&&e.jsx(et,{cursor:$e,formatter:_e,contentStyle:He,labelFormatter:Ae,...b}),!D&&e.jsx(tt,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:Ve,wrapperStyle:Ie}),y==null?void 0:y.map((t,i)=>{var _,m;const r={isAnimationActive:!c};let s="top";switch(t.type){case"primary":case"additional":r.fillOpacity=t.opacity,r.strokeOpacity=t.opacity,r.barSize=t.width,r.onClick=$,r.stackId="A",r.labelPosition=t.stackId?"insideTop":"top",l==="vertical"?s="insideRight":s="insideTop";break;case"comparison":r.onClick=$,r.fill=t.color??"black",r.strokeWidth=t.width,r.shape=e.jsx(S,{layout:l}),r.strokeOpacity=t.opacity,r.label=!1,r.xAxisId="comparisonXAxis",r.yAxisId="comparisonYAxis",r.dot=!N;break}return l==="vertical"?r.xAxisId=((_=a.secondYAxis)==null?void 0:_.dataKey)===t.accessor?"secondary":"primary":r.yAxisId=((m=a.secondYAxis)==null?void 0:m.dataKey)===t.accessor?"secondary":"primary",e.jsx(at,{name:t.label??t.accessor,label:N?null:e.jsx(Ke,{config:t,chartType:"bar",position:s}),stroke:t.color??`var(--sapChart_OrderedColor_${i%12+1})`,fill:t.color??`var(--sapChart_OrderedColor_${i%12+1})`,type:"monotone",dataKey:t.accessor,...r,children:t.type!=="comparison"&&u.map((J,Le)=>e.jsx(ot,{fill:Z(t,J,i),stroke:Z(t,J,i)},Le))},t.reactKey)}),a.zoomingTool&&e.jsx(nt,{y:10,dataKey:Pe,tickFormatter:g==null?void 0:g.formatter,stroke:I.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ve]})})});x.displayName="BulletChart";try{x.displayName="BulletChart",x.__docgenInfo={description:"The `BulletChart` is used to compare primary and secondary (comparison) values. The primary and additional values\nare rendered as a stacked Bar Chart while the comparison value is displayed as a line above.",displayName:"BulletChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one element in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n- `type`: string which chart element (value type) to show. Possible values: `primary`, `comparison`, `additional`.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: width of the current chart element, defaults to `1` for `lines` and `20` for bars\n- `opacity`: element opacity, defaults to `1`\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},layout:{defaultValue:{value:'`"horizontal"`'},description:"layout for showing measures. `horizontal` bars would equal the column chart, `vertical` would be a bar chart.\nDefault Value: `horizontal`",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{x.displayName="BulletChart",x.__docgenInfo={description:"The `BulletChart` is used to compare primary and secondary (comparison) values. The primary and additional values\nare rendered as a stacked Bar Chart while the comparison value is displayed as a line above.",displayName:"BulletChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one element in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n- `type`: string which chart element (value type) to show. Possible values: `primary`, `comparison`, `additional`.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: width of the current chart element, defaults to `1` for `lines` and `20` for bars\n- `opacity`: element opacity, defaults to `1`\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},layout:{defaultValue:{value:'`"horizontal"`'},description:"layout for showing measures. `horizontal` bars would equal the column chart, `vertical` would be a bar chart.\nDefault Value: `horizontal`",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const pt={title:"BulletChart",component:x,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Ne,layout:"horizontal",dimensions:[{accessor:"name",formatter:n=>`${n} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"primary"},{accessor:"users",label:"Users",type:"additional"},{accessor:"volume",label:"Volume",formatter:n=>n.toLocaleString(),type:"comparison"}]}},A={},j={args:{layout:"vertical",dimensions:[{accessor:"name",formatter:n=>n.slice(0,3)}],measures:[{accessor:"users",formatter:n=>`${n/10}`,type:"additional",label:"Number of users",width:10},{accessor:"sessions",type:"primary",width:10,opacity:.5},{accessor:"volume",type:"comparison",width:10}]}},V={args:{dimensions:[{accessor:"name",formatter:n=>`${n} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"primary"},{accessor:"users",label:"Users",type:"additional",highlightColor:n=>{if(n>100)return"red"}},{accessor:"volume",label:"Volume",formatter:n=>n.toLocaleString(),type:"comparison"}]}},q={args:{dataset:[]}},P={args:Ye};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:"{}",...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    layout: 'vertical',
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      type: 'additional',
      label: 'Number of users',
      width: 10
    }, {
      accessor: 'sessions',
      type: 'primary',
      width: 10,
      opacity: 0.5
    }, {
      accessor: 'volume',
      type: 'comparison',
      width: 10
    }]
  }
}`,...(re=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,se,le;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: d => \`\${d} 2019\`,
      interval: 0
    }],
    measures: [{
      accessor: 'sessions',
      label: 'Active Sessions',
      type: 'primary'
    }, {
      accessor: 'users',
      label: 'Users',
      type: 'additional',
      highlightColor: value => {
        if (value > 100) {
          return 'red';
        }
      }
    }, {
      accessor: 'volume',
      label: 'Volume',
      formatter: val => val.toLocaleString(),
      type: 'comparison'
    }]
  }
}`,...(le=(se=V.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,ue;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ue=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,pe,me;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(me=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const mt=["Default","WithCustomSize","WithHighlightedMeasures","LoadingPlaceholder","WithCustomTooltipConfig"],Tt=Object.freeze(Object.defineProperty({__proto__:null,Default:A,LoadingPlaceholder:q,WithCustomSize:j,WithCustomTooltipConfig:P,WithHighlightedMeasures:V,__namedExportsOrder:mt,default:pt},Symbol.toStringTag,{value:"Module"}));export{Tt as C,A as D,q as L,j as W,V as a,P as b};
