import{g as ne,h as oe,t as ie,l as se}from"./DemoProps-T-KdCSDC.js";import{j as e,r as x,ap as re,o as j}from"./iframe-113A6qfG.js";import{T as w}from"./ThemingParameters-pyhX3s39.js";import{X as D,Y as T,a as le,u as ce,C as de,c as he,b as pe}from"./YAxisTicks-k1UaLcpo.js";import{u as ue,x as me,t as fe,a as ge,b as ye,e as be}from"./staticProps-JOkx9YXF.js";import{u as Ce}from"./useLongestYAxisLabel-CPdedSvk.js";import{u as ve,a as xe}from"./useTooltipFormatter-CgOymT9T.js";import{k as we,l as _e,m as ke,n as Se,R as L,T as Ae}from"./ChartContainer-DnomnaFm.js";import{C as Pe}from"./react-content-loader.es-D99mBMuH.js";import{S as V,Z as z}from"./Scatter-C9b3rbeX.js";import{u as je}from"./useIsRTL-D16EWQ1V.js";var Le=we({chartName:"ScatterChart",GraphicalChild:V,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:D},{axisType:"yAxis",AxisComp:T},{axisType:"zAxis",AxisComp:z}],formatAxisMap:_e});const b=n=>e.jsxs(Pe,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:w.sapContent_ImagePlaceholderBackground,foregroundColor:w.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:w.sapContent_DisabledOpacity,...n,children:[e.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),e.jsx("circle",{cx:"20",cy:"90",r:"2"}),e.jsx("circle",{cx:"40",cy:"58",r:"3"}),e.jsx("circle",{cx:"60",cy:"108",r:"14"}),e.jsx("circle",{cx:"85",cy:"87",r:"8"}),e.jsx("circle",{cx:"105",cy:"50",r:"6"}),e.jsx("circle",{cx:"125",cy:"115",r:"4"}),e.jsx("circle",{cx:"78",cy:"58",r:"10"}),e.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{b.displayName="ScatterChartPlaceholder",b.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{b.displayName="ScatterChartPlaceholder",b.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const De={formatter:be},c=x.forwardRef((n,q)=>{const{dataset:C,loading:I,loadingDelay:N,noLegend:R,noAnimation:M,tooltipConfig:S,onDataPointClick:d,onLegendClick:E,onClick:_,style:O,className:W,slot:F,ChartPlaceholder:B,children:H,...U}=n,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:w.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...n.chartConfig},{referenceLine:s,referenceLineX:r}=a,{measures:v}=ve([],n.measures,{},De),Y=xe(v),[K,A]=re(q),l=x.useRef(!1),X=ue(E),$=x.useCallback((t,p)=>{typeof _=="function"&&!l.current&&_(j(p,{payload:t?.activePayload?.[0]?.payload,activePayloads:t?.activePayload})),l.current&&(l.current=!1)},[_,l.current]),G=x.useCallback((t,p,ae)=>{t&&d&&(d(j(ae,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:p,payload:t.payload})),l.current=!0)},[d,l.current]),Z=C?.length>30,i=v.find(({axis:t})=>t==="x"),o=v.find(({axis:t})=>t==="y"),h=v.find(({axis:t})=>t==="z"),[P,J]=Ce(C?.[0]?.data,[o],a.legendPosition),Q=le(A,1),ee=ce(a.margin,a.zoomingTool),{chartConfig:ze,measures:qe,...te}=U,k=je(A);return e.jsx(ke,{dataset:C,loading:I,loadingDelay:N,Placeholder:B??b,ref:K,style:O,className:W,slot:F,resizeDebounce:a.resizeDebounce,...te,children:e.jsxs(Le,{onClick:$,margin:ee,accessibilityLayer:a.accessibilityLayer,className:typeof d=="function"?"has-click-handler":void 0,children:[e.jsx(de,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&e.jsx(D,{type:"number",name:i?.label,dataKey:i?.accessor,xAxisId:0,interval:i?.interval??(Z?"preserveStart":0),tick:e.jsx(he,{formatter:i?.formatter}),padding:me,height:Q[0],reversed:k,label:i?.label?{value:i?.label,dy:15,position:"insideRight"}:0},typeof i?.accessor!="function"?i?.accessor:i?.label),e.jsx(T,{label:o?.label?{value:o?.label,angle:-90,position:k?"insideRight":"insideLeft"}:null,type:"number",name:o?.label,axisLine:a.yAxisVisible,tickLine:fe,dataKey:o?.accessor,interval:0,tick:e.jsx(pe,{formatter:o?.formatter}),width:o?.label?P+10:P,orientation:k===!0?"right":"left"},typeof o?.accessor!="function"?o?.accessor:o?.label),e.jsx(z,{name:h?.label,dataKey:h?.accessor,range:[0,5e3]},typeof h?.accessor!="function"?h?.accessor:h?.label),C?.map((t,p)=>e.jsx(V,{className:typeof d=="function"?"has-click-handler":void 0,onMouseDown:G,opacity:t.opacity,data:t?.data,name:t?.label,fill:t?.color??`var(--sapChart_OrderedColor_${p%12+1})`,isAnimationActive:!M},t?.label)),!R&&e.jsx(Se,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:X,wrapperStyle:J,...a.legendConfig}),s&&e.jsx(L,{...s,stroke:s?.color??s?.stroke,y:s?.value??s?.y,label:s?.label}),r&&e.jsx(L,{...r,stroke:r?.color??r?.stroke,x:r?.value??r?.x,label:r?.label}),S?.active!==!1&&e.jsx(Ae,{cursor:ye,formatter:Y,contentStyle:ge,...S}),H]})})});c.displayName="ScatterChart";try{c.displayName="ScatterChart",c.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:"ScatterChart",props:{dataset:{defaultValue:null,description:`An array of dataset objects. Each object defines a dataset which is displayed.

**Required properties**
 - \`data\`: array of objects which contains the data.

**Optional properties**
 - \`label\`: string containing the label of the dataset which is also displayed in the legend.
 - \`color\`: any valid CSS color or CSS variable. Defaults to the \`sapChart_Ordinal\` colors.
 - \`opacity\`: number contains value of opacity of dataset

**Example of dataset:**

<code>
  <pre>
   [
     {
      label: 'America',
      opacity: 0.7,
      data: [
        {
          users: 120,
          sessions: 200,
          volume: 302
        },
        {
          users: 20,
          sessions: 230,
          volume: 392
        }
      ]
     }
   ]
  </pre>
</code>`,name:"dataset",required:!1,type:{name:"ScatterDataObject[]"}},measures:{defaultValue:null,description:`An array of config objects. Each object is defining one axis in the chart.

**Required properties**
 - \`accessor\`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
    Can also be a getter.
 - \`axis\`: string containing definition of axis. Must be x, y or z data to the axis.

**Optional properties**
 - \`label\`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!0,type:{name:"[MeasureConfig, MeasureConfig, MeasureConfig, ...MeasureConfig[]]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{c.displayName="ScatterChart",c.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:"ScatterChart",props:{dataset:{defaultValue:null,description:`An array of dataset objects. Each object defines a dataset which is displayed.

**Required properties**
 - \`data\`: array of objects which contains the data.

**Optional properties**
 - \`label\`: string containing the label of the dataset which is also displayed in the legend.
 - \`color\`: any valid CSS color or CSS variable. Defaults to the \`sapChart_Ordinal\` colors.
 - \`opacity\`: number contains value of opacity of dataset

**Example of dataset:**

<code>
  <pre>
   [
     {
      label: 'America',
      opacity: 0.7,
      data: [
        {
          users: 120,
          sessions: 200,
          volume: 302
        },
        {
          users: 20,
          sessions: 230,
          volume: 392
        }
      ]
     }
   ]
  </pre>
</code>`,name:"dataset",required:!1,type:{name:"ScatterDataObject[]"}},measures:{defaultValue:null,description:`An array of config objects. Each object is defining one axis in the chart.

**Required properties**
 - \`accessor\`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
    Can also be a getter.
 - \`axis\`: string containing definition of axis. Must be x, y or z data to the axis.

**Optional properties**
 - \`label\`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!0,type:{name:"[MeasureConfig, MeasureConfig, MeasureConfig, ...MeasureConfig[]]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const Te={title:"ScatterChart",component:c,argTypes:{children:{control:{disable:!0}}},tags:["package:@ui5/webcomponents-react-charts"],args:{dataset:ne,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:n=>`${n}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},u={},m={args:{dataset:oe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},f={args:{dataset:[]}},g={args:ie},y={args:se};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: scatterColorDataSet,
    measures: [{
      accessor: 'users',
      label: 'Users',
      axis: 'x'
    }, {
      accessor: 'sessions',
      label: 'Sessions',
      axis: 'y'
    }, {
      accessor: 'volume',
      axis: 'z'
    }]
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...y.parameters?.docs?.source}}};const Ve=["Default","WithCustomColor","LoadingPlaceholder","WithCustomTooltipConfig","WithCustomLegendConfig"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default:u,LoadingPlaceholder:f,WithCustomColor:m,WithCustomLegendConfig:y,WithCustomTooltipConfig:g,__namedExportsOrder:Ve,default:Te},Symbol.toStringTag,{value:"Module"}));export{Ye as C,u as D,f as L,m as W,g as a,y as b};
