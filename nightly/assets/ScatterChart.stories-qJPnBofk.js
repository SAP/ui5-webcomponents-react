import{f as ve,g as xe,t as we,l as ke}from"./DemoProps-zTw_Q8Fu.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{T as A}from"./ThemingParameters-B358vlzA.js";import{e as T}from"./index-C-Zfmu7Z.js";import{r as k}from"./index-RYns6xqu.js";import{X as G,Y as Z,a as Ae,u as _e,C as Pe,c as Se,b as je}from"./YAxisTicks-CVe0h_LJ.js";import{u as De,x as Ve,t as Te,a as qe,b as Ie,e as ze}from"./staticProps-DZ3VDA-S.js";import{u as Ne}from"./useLongestYAxisLabel-DylX5Src.js";import{u as Le,a as Re}from"./useTooltipFormatter-w_PHATpl.js";import{k as Ee,l as Oe,q as We,r as Fe,R as q,T as Be}from"./ChartContainer-jFPGkFit.js";import{C as He}from"./react-content-loader.es-BcmDwNEo.js";import{S as J,Z as Q}from"./Scatter-Bbpd7ZjU.js";import{k as Ue}from"./withWebComponent-v3aPz19k.js";import{u as Ye}from"./useIsRTL-cDadyecF.js";var Ke=Ee({chartName:"ScatterChart",GraphicalChild:J,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:G},{axisType:"yAxis",AxisComp:Z},{axisType:"zAxis",AxisComp:Q}],formatAxisMap:Oe});const C=l=>n.jsxs(He,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:A.sapContent_ImagePlaceholderBackground,foregroundColor:A.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:A.sapContent_DisabledOpacity,...l,children:[n.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n.jsx("circle",{cx:"20",cy:"90",r:"2"}),n.jsx("circle",{cx:"40",cy:"58",r:"3"}),n.jsx("circle",{cx:"60",cy:"108",r:"14"}),n.jsx("circle",{cx:"85",cy:"87",r:"8"}),n.jsx("circle",{cx:"105",cy:"50",r:"6"}),n.jsx("circle",{cx:"125",cy:"115",r:"4"}),n.jsx("circle",{cx:"78",cy:"58",r:"10"}),n.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{C.displayName="ScatterChartPlaceholder",C.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{C.displayName="ScatterChartPlaceholder",C.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const $e={formatter:ze},h=k.forwardRef((l,X)=>{var D;const{dataset:c,loading:M,loadingDelay:ee,noLegend:te,noAnimation:ae,tooltipConfig:v,onDataPointClick:p,onLegendClick:ne,onClick:_,style:oe,className:ie,slot:se,ChartPlaceholder:re,children:le,...ce}=l,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:A.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:o,referenceLineX:i}=r,{measures:x}=Le([],l.measures,{},$e),de=Re(x),[he,S]=Ue(X),d=k.useRef(!1),pe=De(ne),ue=k.useCallback((t,u)=>{var w,V;typeof _=="function"&&!d.current&&_(T(u,{payload:(V=(w=t==null?void 0:t.activePayload)==null?void 0:w[0])==null?void 0:V.payload,activePayloads:t==null?void 0:t.activePayload})),d.current&&(d.current=!1)},[_,d.current]),me=k.useCallback((t,u,w)=>{t&&p&&(p(T(w,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:u,payload:t.payload})),d.current=!0)},[p,d.current]),fe=(c==null?void 0:c.length)>30,a=x.find(({axis:t})=>t==="x"),e=x.find(({axis:t})=>t==="y"),s=x.find(({axis:t})=>t==="z"),[j,ge]=Ne((D=c==null?void 0:c[0])==null?void 0:D.data,[e],r.legendPosition),be=Ae(S,1),ye=_e(r.margin,r.zoomingTool),{chartConfig:Je,measures:Qe,...Ce}=ce,P=Ye(S);return n.jsx(We,{dataset:c,loading:M,loadingDelay:ee,Placeholder:re??C,ref:he,style:oe,className:ie,slot:se,resizeDebounce:r.resizeDebounce,...Ce,children:n.jsxs(Ke,{onClick:ue,margin:ye,accessibilityLayer:r.accessibilityLayer,className:typeof p=="function"?"has-click-handler":void 0,children:[n.jsx(Pe,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&n.jsx(G,{type:"number",name:a==null?void 0:a.label,dataKey:a==null?void 0:a.accessor,xAxisId:0,interval:(a==null?void 0:a.interval)??(fe?"preserveStart":0),tick:n.jsx(Se,{config:a}),padding:Ve,height:be[0],reversed:P,label:a!=null&&a.label?{value:a==null?void 0:a.label,dy:15,position:"insideRight"}:0},typeof(a==null?void 0:a.accessor)!="function"?a==null?void 0:a.accessor:a==null?void 0:a.label),n.jsx(Z,{label:e!=null&&e.label?{value:e==null?void 0:e.label,angle:-90,position:P?"insideRight":"insideLeft"}:!1,type:"number",name:e==null?void 0:e.label,axisLine:r.yAxisVisible,tickLine:Te,dataKey:e==null?void 0:e.accessor,tickFormatter:e==null?void 0:e.formatter,interval:0,tick:n.jsx(je,{config:e}),width:e!=null&&e.label?j+10:j,margin:e!=null&&e.label?{left:200}:0,orientation:P===!0?"right":"left"},typeof(e==null?void 0:e.accessor)!="function"?e==null?void 0:e.accessor:e==null?void 0:e.label),n.jsx(Q,{name:s==null?void 0:s.label,dataKey:s==null?void 0:s.accessor,range:[0,5e3]},typeof(s==null?void 0:s.accessor)!="function"?s==null?void 0:s.accessor:s==null?void 0:s.label),c==null?void 0:c.map((t,u)=>n.jsx(J,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:me,opacity:t.opacity,data:t==null?void 0:t.data,name:t==null?void 0:t.label,fill:(t==null?void 0:t.color)??`var(--sapChart_OrderedColor_${u%12+1})`,isAnimationActive:!ae},t==null?void 0:t.label)),!te&&n.jsx(Fe,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:pe,wrapperStyle:ge,...r.legendConfig}),o&&n.jsx(q,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),label:o==null?void 0:o.label}),i&&n.jsx(q,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(v==null?void 0:v.active)!==!1&&n.jsx(Be,{cursor:qe,formatter:de,contentStyle:Ie,...v}),le]})})});h.displayName="ScatterChart";try{h.displayName="ScatterChart",h.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.`,displayName:"ScatterChart",props:{dataset:{defaultValue:null,description:`An array of dataset objects. Each object defines a dataset which is displayed.

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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{h.displayName="ScatterChart",h.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.`,displayName:"ScatterChart",props:{dataset:{defaultValue:null,description:`An array of dataset objects. Each object defines a dataset which is displayed.

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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const Ge={title:"ScatterChart",component:h,argTypes:{children:{control:{disable:!0}}},args:{dataset:ve,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},m={},f={args:{dataset:xe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},g={args:{dataset:[]}},b={args:we},y={args:ke};var I,z,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var L,R,E;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(R=f.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,W,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var B,H,U;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(U=(H=b.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var Y,K,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: legendConfig
}`,...($=(K=y.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const Ze=["Default","WithCustomColor","LoadingPlaceholder","WithCustomTooltipConfig","WithCustomLegendConfig"],pt=Object.freeze(Object.defineProperty({__proto__:null,Default:m,LoadingPlaceholder:g,WithCustomColor:f,WithCustomLegendConfig:y,WithCustomTooltipConfig:b,__namedExportsOrder:Ze,default:Ge},Symbol.toStringTag,{value:"Module"}));export{pt as C,m as D,g as L,f as W,b as a,y as b};
