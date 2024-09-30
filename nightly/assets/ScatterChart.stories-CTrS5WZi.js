import{f as ge,g as be,t as ye}from"./DemoProps-CfK95Xbq.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{T as k}from"./ThemingParameters-DOkJX3Ed.js";import{e as V}from"./index-C-Zfmu7Z.js";import{r as w}from"./index-RYns6xqu.js";import{X as U,Y,a as Ce,u as ve,C as xe,c as we,b as ke}from"./YAxisTicks-BtD-RATT.js";import{u as Ae,x as _e,t as Pe,a as Se,b as je,c as De}from"./staticProps-CctNQyLm.js";import{u as Ve}from"./useLongestYAxisLabel-BxOfxd2t.js";import{u as Te,a as qe}from"./useTooltipFormatter-_UsUSH_P.js";import{k as Ie,l as ze,q as Ne,r as Re,R as T,T as Ee}from"./ChartContainer-CefQ7BTC.js";import{C as Oe}from"./react-content-loader.es-BcmDwNEo.js";import{S as K,Z as $}from"./Scatter-CnPtCWCs.js";import{u as Le}from"./withWebComponent-BS26LpJo.js";import{u as Fe}from"./useIsRTL-DtzqLicj.js";var We=Ie({chartName:"ScatterChart",GraphicalChild:K,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:U},{axisType:"yAxis",AxisComp:Y},{axisType:"zAxis",AxisComp:$}],formatAxisMap:ze});const y=l=>n.jsxs(Oe,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:k.sapContent_ImagePlaceholderBackground,foregroundColor:k.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:k.sapContent_DisabledOpacity,...l,children:[n.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n.jsx("circle",{cx:"20",cy:"90",r:"2"}),n.jsx("circle",{cx:"40",cy:"58",r:"3"}),n.jsx("circle",{cx:"60",cy:"108",r:"14"}),n.jsx("circle",{cx:"85",cy:"87",r:"8"}),n.jsx("circle",{cx:"105",cy:"50",r:"6"}),n.jsx("circle",{cx:"125",cy:"115",r:"4"}),n.jsx("circle",{cx:"78",cy:"58",r:"10"}),n.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{y.displayName="ScatterChartPlaceholder",y.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{y.displayName="ScatterChartPlaceholder",y.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Be={formatter:De},h=w.forwardRef((l,G)=>{var j;const{dataset:c,loading:Z,loadingDelay:J,noLegend:Q,noAnimation:X,tooltipConfig:C,onDataPointClick:p,onLegendClick:M,onClick:A,style:ee,className:te,slot:ae,ChartPlaceholder:ne,children:oe,...ie}=l,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:k.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:o,referenceLineX:i}=r,{measures:v}=Te([],l.measures,{},Be),se=qe(v),[re,P]=Le(G),d=w.useRef(!1),le=Ae(M),ce=w.useCallback((t,u)=>{var x,D;typeof A=="function"&&!d.current&&A(V(u,{payload:(D=(x=t==null?void 0:t.activePayload)==null?void 0:x[0])==null?void 0:D.payload,activePayloads:t==null?void 0:t.activePayload})),d.current&&(d.current=!1)},[A,d.current]),de=w.useCallback((t,u,x)=>{t&&p&&(p(V(x,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:u,payload:t.payload})),d.current=!0)},[p,d.current]),he=(c==null?void 0:c.length)>30,a=v.find(({axis:t})=>t==="x"),e=v.find(({axis:t})=>t==="y"),s=v.find(({axis:t})=>t==="z"),[S,pe]=Ve((j=c==null?void 0:c[0])==null?void 0:j.data,[e],r.legendPosition),ue=Ce(P,1),me=ve(r.margin,r.zoomingTool),{chartConfig:Ye,measures:Ke,...fe}=ie,_=Fe(P);return n.jsx(Ne,{dataset:c,loading:Z,loadingDelay:J,Placeholder:ne??y,ref:re,style:ee,className:te,slot:ae,resizeDebounce:r.resizeDebounce,...fe,children:n.jsxs(We,{onClick:ce,margin:me,className:typeof p=="function"?"has-click-handler":void 0,children:[n.jsx(xe,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&n.jsx(U,{type:"number",name:a==null?void 0:a.label,dataKey:a==null?void 0:a.accessor,xAxisId:0,interval:(a==null?void 0:a.interval)??(he?"preserveStart":0),tick:n.jsx(we,{config:a}),padding:_e,height:ue[0],reversed:_,label:a!=null&&a.label?{value:a==null?void 0:a.label,dy:15,position:"insideRight"}:0},typeof(a==null?void 0:a.accessor)!="function"?a==null?void 0:a.accessor:a==null?void 0:a.label),n.jsx(Y,{label:e!=null&&e.label?{value:e==null?void 0:e.label,angle:-90,position:_?"insideRight":"insideLeft"}:!1,type:"number",name:e==null?void 0:e.label,axisLine:r.yAxisVisible,tickLine:Pe,dataKey:e==null?void 0:e.accessor,tickFormatter:e==null?void 0:e.formatter,interval:0,tick:n.jsx(ke,{config:e}),width:e!=null&&e.label?S+10:S,margin:e!=null&&e.label?{left:200}:0,orientation:_===!0?"right":"left"},typeof(e==null?void 0:e.accessor)!="function"?e==null?void 0:e.accessor:e==null?void 0:e.label),n.jsx($,{name:s==null?void 0:s.label,dataKey:s==null?void 0:s.accessor,range:[0,5e3]},typeof(s==null?void 0:s.accessor)!="function"?s==null?void 0:s.accessor:s==null?void 0:s.label),c==null?void 0:c.map((t,u)=>n.jsx(K,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:de,opacity:t.opacity,data:t==null?void 0:t.data,name:t==null?void 0:t.label,fill:(t==null?void 0:t.color)??`var(--sapChart_OrderedColor_${u%11+1})`,isAnimationActive:!X},t==null?void 0:t.label)),!Q&&n.jsx(Re,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:le,wrapperStyle:pe}),o&&n.jsx(T,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),label:o==null?void 0:o.label}),i&&n.jsx(T,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(C==null?void 0:C.active)!==!1&&n.jsx(Ee,{cursor:Se,formatter:se,contentStyle:je,...C}),oe]})})});h.displayName="ScatterChart";try{h.displayName="ScatterChart",h.__docgenInfo={description:`
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
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
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
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const He={title:"ScatterChart",component:h,argTypes:{children:{control:{disable:!0}}},args:{dataset:ge,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},m={},f={args:{dataset:be,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},g={args:{dataset:[]}},b={args:ye};var q,I,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(z=(I=m.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var N,R,E;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(R=f.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,L,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(F=(L=g.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,B,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Ue=["Default","WithCustomColor","LoadingPlaceholder","WithCustomTooltipConfig"],rt=Object.freeze(Object.defineProperty({__proto__:null,Default:m,LoadingPlaceholder:g,WithCustomColor:f,WithCustomTooltipConfig:b,__namedExportsOrder:Ue,default:He},Symbol.toStringTag,{value:"Module"}));export{rt as C,m as D,g as L,f as W,b as a};
