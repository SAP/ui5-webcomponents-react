import{f as pe,g as me}from"./DemoProps-9cd0a46b.js";import{a as F,j as a}from"./jsx-runtime-670450c2.js";import{T as x}from"./ThemingParameters-f4b4144e.js";import{e as D}from"./index-99d317a4.js";import{r as v}from"./index-f1f749bf.js";import{X as H,Y as W,a as ue,u as ge,C as fe,c as be,b as ye}from"./YAxisTicks-ccaf2d50.js";import{u as Ce,x as ve,t as xe,a as ke,b as we}from"./staticProps-9dd6f0f9.js";import{u as Ae}from"./useLongestYAxisLabel-f7efbbf7.js";import{u as Pe,a as _e}from"./useTooltipFormatter-08317062.js";import{C as Te}from"./ChartContainer-5372fd6a.js";import{d as Se}from"./defaults-4571ae57.js";import{C as De}from"./react-content-loader.es-de0c8b5a.js";import{h as ze,i as Ve,L as Ie,R as z,T as Re}from"./generateCategoricalChart-4bf63582.js";import{S as Y,Z as B}from"./Scatter-77aa60a8.js";import{u as qe}from"./withWebComponent-e4481254.js";import{u as Ne}from"./debounce-2c3bc435.js";var je=ze({chartName:"ScatterChart",GraphicalChild:Y,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:H},{axisType:"yAxis",AxisComp:W},{axisType:"zAxis",AxisComp:B}],formatAxisMap:Ve});const A=l=>F(De,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:x.sapContent_ImagePlaceholderBackground,foregroundColor:x.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:x.sapContent_DisabledOpacity,...l,children:[a("rect",{x:"10",y:"135",width:"135",height:"1"}),a("circle",{cx:"20",cy:"90",r:"2"}),a("circle",{cx:"40",cy:"58",r:"3"}),a("circle",{cx:"60",cy:"108",r:"14"}),a("circle",{cx:"85",cy:"87",r:"8"}),a("circle",{cx:"105",cy:"50",r:"6"}),a("circle",{cx:"125",cy:"115",r:"4"}),a("circle",{cx:"78",cy:"58",r:"10"}),a("circle",{cx:"28",cy:"115",r:"4"})]});try{A.displayName="ScatterChartPlaceholder",A.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Oe={formatter:Se},f=v.forwardRef((l,U)=>{var T;const{dataset:r,loading:K,noLegend:$,noAnimation:G,tooltipConfig:b,onDataPointClick:h,onLegendClick:Z,onClick:k,style:J,className:Q,slot:X,ChartPlaceholder:M,children:ee,...te}=l,s={yAxisVisible:!1,xAxisVisible:!0,gridStroke:x.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:n,referenceLineX:i}=s,{measures:y}=Pe([],l.measures,{},Oe),ae=_e(y),[oe,P]=qe(U),d=v.useRef(!1),ne=Ce(Z),ie=v.useCallback((e,p)=>{var C,S;typeof k=="function"&&!d.current&&k(D(p,{payload:(S=(C=e==null?void 0:e.activePayload)==null?void 0:C[0])==null?void 0:S.payload,activePayloads:e==null?void 0:e.activePayload})),d.current&&(d.current=!1)},[k,d.current]),se=v.useCallback((e,p,C)=>{e&&h&&(h(D(C,{value:e.node,dataKey:e.zAxis.dataKey,dataIndex:p,payload:e.payload})),d.current=!0)},[h,d.current]),re=(r==null?void 0:r.length)>30,o=y.find(({axis:e})=>e==="x"),t=y.find(({axis:e})=>e==="y"),c=y.find(({axis:e})=>e==="z"),[_,le]=Ae((T=r==null?void 0:r[0])==null?void 0:T.data,[t]),ce=ue(P,1),de=ge(s.margin,s.zoomingTool),{chartConfig:Fe,measures:He,...he}=te,w=Ne(P);return a(Te,{dataset:r,loading:K,Placeholder:M??A,ref:oe,style:J,className:Q,slot:X,resizeDebounce:s.resizeDebounce,...he,children:F(je,{onClick:ie,margin:de,className:typeof h=="function"?"has-click-handler":void 0,children:[a(fe,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&a(H,{type:"number",name:o==null?void 0:o.label,dataKey:o==null?void 0:o.accessor,xAxisId:0,interval:(o==null?void 0:o.interval)??(re?"preserveStart":0),tick:a(be,{config:o}),padding:ve,height:ce[0],reversed:w,label:o!=null&&o.label?{value:o==null?void 0:o.label,dy:15,position:"insideRight"}:0},o==null?void 0:o.accessor),a(W,{label:t!=null&&t.label?{value:t==null?void 0:t.label,angle:-90,position:w?"insideRight":"insideLeft"}:!1,type:"number",name:t==null?void 0:t.label,axisLine:s.yAxisVisible,tickLine:xe,dataKey:t==null?void 0:t.accessor,tickFormatter:t==null?void 0:t.formatter,interval:0,tick:a(ye,{config:t}),width:t!=null&&t.label?_+10:_,margin:t!=null&&t.label?{left:200}:0,orientation:w===!0?"right":"left"},t==null?void 0:t.accessor),a(B,{name:c==null?void 0:c.label,dataKey:c==null?void 0:c.accessor,range:[0,5e3]},c==null?void 0:c.accessor),r==null?void 0:r.map((e,p)=>a(Y,{className:typeof h=="function"?"has-click-handler":void 0,onMouseDown:se,opacity:e.opacity,data:e==null?void 0:e.data,name:e==null?void 0:e.label,fill:(e==null?void 0:e.color)??`var(--sapChart_OrderedColor_${p%11+1})`,isAnimationActive:G===!1},e==null?void 0:e.label)),!$&&a(Ie,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:ne,wrapperStyle:le}),n&&a(z,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),y:(n==null?void 0:n.value)??(n==null?void 0:n.y),label:n==null?void 0:n.label}),i&&a(z,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(b==null?void 0:b.active)!==!1&&a(Re,{cursor:ke,formatter:ae,contentStyle:we,...b}),ee]})})});f.defaultProps={noLegend:!1,noAnimation:!1};f.displayName="ScatterChart";try{f.displayName="ScatterChart",f.__docgenInfo={description:`
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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IScatterChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType<{}>"}}}}}catch{}const Ee={title:"ScatterChart",component:f,argTypes:{children:{control:{disable:!0}}},args:{dataset:pe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},m={},u={args:{dataset:me,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},g={args:{dataset:[]}};var V,I,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,N,j;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var O,E,L;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(L=(E=g.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Le=["Default","WithCustomColor","LoadingPlaceholder"],nt=Object.freeze(Object.defineProperty({__proto__:null,Default:m,LoadingPlaceholder:g,WithCustomColor:u,__namedExportsOrder:Le,default:Ee},Symbol.toStringTag,{value:"Module"}));export{nt as C,m as D,g as L,u as W};
//# sourceMappingURL=ScatterChart.stories-24544c2b.js.map
