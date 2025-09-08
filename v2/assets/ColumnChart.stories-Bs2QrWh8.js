import{c as R,s as ge,a as ye,e as be,t as Ce,l as ve}from"./DemoProps-LN2fOv_D.js";import{j as o,r as q,ap as we,o as ke}from"./iframe-CGUWa3l5.js";import{T as _}from"./ThemingParameters-pyhX3s39.js";import{u as xe,t as _e,a as Ae,b as Se,c as Le,e as W,C as De}from"./staticProps-DdvPzmsM.js";import{u as Ie,B as Pe}from"./useCancelAnimationFallback-C0q9iBiw.js";import{u as je,a as Ve,C as Te,X as qe,c as ze,Y as z,b as N}from"./YAxisTicks-BuigUAPX.js";import{u as Ne,C as Oe}from"./ChartDataLabel-Bynj3vru.js";import{u as Re}from"./useLongestYAxisLabel-CK2WYMmN.js";import{u as We}from"./useOnClickInternal-pTV9uYQ7.js";import{u as Ye,a as Ee,r as Fe,b as O}from"./useTooltipFormatter-D35zk6jT.js";import{m as Be,B as Me,e as Ke,o as He,n as $e,R as Ue,T as Xe,p as Ge}from"./ChartContainer-Bivel08W.js";import{C as Je}from"./react-content-loader.es-CToHGm2L.js";import{u as Qe}from"./useIsRTL-CiTgDNnq.js";const w=a=>o.jsxs(Je,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:_.sapContent_ImagePlaceholderBackground,foregroundColor:_.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:_.sapContent_DisabledOpacity,...a,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{w.displayName="ColumnChartPlaceholder",w.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{w.displayName="ColumnChartPlaceholder",w.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const Ze={formatter:W},et={formatter:W,opacity:1},tt=a=>({payload:A})=>De.getValueByDataKey(A,a),i=q.forwardRef((a,A)=>{const{loading:Y,loadingDelay:E,dataset:s,noLegend:F,noAnimation:I,tooltipConfig:P,onDataPointClick:k,onLegendClick:B,onClick:j,style:M,className:K,slot:H,ChartPlaceholder:$,syncId:U,children:X,...G}=a,t={yAxisVisible:!1,xAxisVisible:!0,gridStroke:_.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...a.chartConfig},{referenceLine:r}=t,{dimensions:V,measures:l}=Ye(a.dimensions,a.measures,Ze,et),J=Ee(l),[Q,Z]=Re(s,l,t.legendPosition),S=V[0],{primaryMeasure:ee,secondaryMeasure:te}=Fe(l,t?.secondYAxis?.dataKey),ae=Ne(S?.formatter),[oe,T]=we(A),ne=l.map(({accessor:e})=>e),L=t.secondYAxis?ne.findIndex(e=>e===t.secondYAxis?.dataKey):0,re=xe(B),se=q.useCallback((e,n,x)=>{e&&k&&k(ke(x,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:n,payload:e.payload}))},[k]),ie=We(j),le=s?.length>30,ce=S?.accessor,de=je(t.margin,t.zoomingTool),he=Ve(T,a.dimensions.length),D=Qe(T),{chartConfig:nt,dimensions:rt,measures:st,...ue}=G,{isMounted:me,handleBarAnimationStart:pe,handleBarAnimationEnd:fe}=Ie(I);return o.jsx(Be,{dataset:s,loading:Y,loadingDelay:E,Placeholder:$??w,ref:oe,style:M,className:K,slot:H,resizeDebounce:t.resizeDebounce,...ue,children:o.jsxs(Pe,{syncId:U,onClick:ie,stackOffset:"sign",margin:de,data:s,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof k=="function"||typeof j=="function"?"has-click-handler":void 0,children:[o.jsx(Te,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&V.map((e,n)=>o.jsx(qe,{dataKey:e.accessor,xAxisId:n,interval:e?.interval??(le?"preserveStart":0),tick:o.jsx(ze,{formatter:e?.formatter}),tickLine:n<1,axisLine:n<1,height:he[n],allowDuplicatedCategory:n===0,reversed:D,...t.xAxisConfig},e.reactKey)),o.jsx(z,{orientation:D===!0?"right":"left",axisLine:t.yAxisVisible,tickLine:_e,yAxisId:"left",interval:0,tick:o.jsx(N,{formatter:ee?.formatter}),width:Q,...t.yAxisConfig}),t.secondYAxis?.dataKey&&o.jsx(z,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${L%12+1})`},tick:o.jsx(N,{formatter:te?.formatter,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${L%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${L%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:D===!0?"left":"right",yAxisId:"right",interval:0,...t.secondYAxisConfig}),me&&l.map((e,n)=>o.jsxs(Me,{yAxisId:t.secondYAxis?.dataKey===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${n%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${n%12+1})`,barSize:e.width,onClick:se,isAnimationActive:!I,onAnimationStart:pe,onAnimationEnd:fe,children:[o.jsx(Ke,{data:s,valueAccessor:tt(e.accessor),content:o.jsx(Oe,{config:e,chartType:"column",position:"insideTop"})}),s.map((x,c)=>o.jsx(He,{fill:O(e,x,n),stroke:O(e,x,n)},c))]},e.reactKey)),!F&&o.jsx($e,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:re,wrapperStyle:Z,...t.legendConfig}),r&&o.jsx(Ue,{...r,stroke:r?.color??r?.stroke,y:r?.value??r?.y,yAxisId:r?.yAxisId??"left",label:r?.label}),P?.active!==!1&&o.jsx(Xe,{cursor:Se,formatter:J,contentStyle:Ae,labelFormatter:ae,...P}),!!t.zoomingTool&&o.jsx(Ge,{dataKey:ce,tickFormatter:S?.formatter,...Le,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),X]})})});i.displayName="ColumnChart";try{i.displayName="ColumnChart",i.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.\n\n__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{i.displayName="ColumnChart",i.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.\n\n__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const at={title:"ColumnChart",component:i,tags:["package:@ui5/webcomponents-react-charts"],argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:R,dimensions:[{accessor:"name",formatter:a=>`${a} 2019`}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},d={},h={args:{measures:[{accessor:"users",color:"red"}],dataset:ge}},u={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:ye}},m={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:R}},p={args:be},f={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},g={args:{dataset:[]}},y={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},b={args:{measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:a=>{if(a>750)return"red"}}]}},C={args:Ce},v={args:ve};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }, {
      accessor: 'dimension'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: secondaryDimensionDataSet
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume'
    }],
    dataset: complexDataSet
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      label: 'number of users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString()
    }, {
      accessor: 'sessions',
      label: 'Active Sessions',
      formatter: val => \`\${val} sessions\`,
      hideDataLabel: true
    }, {
      accessor: 'volume',
      label: 'Vol.',
      highlightColor: value => {
        if (value > 750) {
          return 'red';
        }
      }
    }]
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...v.parameters?.docs?.source}}};const ot=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithNormalizedStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithCustomTooltipConfig","WithCustomLegendConfig"],vt=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:g,WithCustomColor:h,WithCustomLegendConfig:v,WithCustomTooltipConfig:C,WithFormatter:f,WithHighlightedMeasure:b,WithNormalizedStacks:p,WithReferenceLine:y,WithSecondaryDimension:u,WithStacks:m,__namedExportsOrder:ot,default:at},Symbol.toStringTag,{value:"Module"}));export{vt as C,d as D,g as L,h as W,u as a,m as b,p as c,f as d,y as e,b as f,C as g,v as h};
