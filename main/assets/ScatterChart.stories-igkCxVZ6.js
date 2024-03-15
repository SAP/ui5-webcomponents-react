import{f as pe,g as me}from"./DemoProps-gxklhiCN.js";import{j as a}from"./jsx-runtime-DtaoT6pD.js";import{T as v}from"./ThemingParameters-UghqSl-x.js";import{e as D}from"./index-ENBflQbU.js";import{r as b}from"./index-OjgoNOWw.js";import{X as L,Y as H,a as he,u as ue,C as ge,c as fe,b as be}from"./YAxisTicks-Fo_KYLaC.js";import{u as ye,x as Ce,t as xe,a as ve,b as ke}from"./staticProps-5PxpsJ6y.js";import{u as we}from"./useLongestYAxisLabel-RujRfXcn.js";import{u as Ae,a as je}from"./useTooltipFormatter-7h42Z9BX.js";import{C as Pe}from"./ChartContainer-VaURoX6d.js";import{a as _e}from"./defaults-xsA6jjiu.js";import{C as Te}from"./react-content-loader.es-OqJegcLF.js";import{c as De,f as Se,d as Ve,R as S,T as ze}from"./generateCategoricalChart-WBNcn6d0.js";import{S as W,Z as Y}from"./Scatter-izODQmQX.js";import{u as Ie}from"./withWebComponent-LTFbYRvs.js";import{u as Re}from"./useIsRTL-v9TqQ2ve.js";import"./_baseForOwn-a7AeJH13.js";import"./debounce-F9irgL9Y.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PHfgVmYh.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./i18n-defaults-HYsq20ry.js";import"./i18nBundle-j8vDD4VY.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-dLF_-WPQ.js";import"./iframe-datKVotR.js";import"../sb-preview/runtime.js";import"./Label-mY98SzPQ.js";import"./UI5Element-9EXj3atz.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-X1FTyPSK.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./utils-d3BcYjeO.js";import"./tiny-invariant-csaaSLPr.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./directionChange-Rh8tPvuN.js";var qe=De({chartName:"ScatterChart",GraphicalChild:W,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:L},{axisType:"yAxis",AxisComp:H},{axisType:"zAxis",AxisComp:Y}],formatAxisMap:Se});const A=l=>a.jsxs(Te,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:v.sapContent_ImagePlaceholderBackground,foregroundColor:v.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:v.sapContent_DisabledOpacity,...l,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("circle",{cx:"20",cy:"90",r:"2"}),a.jsx("circle",{cx:"40",cy:"58",r:"3"}),a.jsx("circle",{cx:"60",cy:"108",r:"14"}),a.jsx("circle",{cx:"85",cy:"87",r:"8"}),a.jsx("circle",{cx:"105",cy:"50",r:"6"}),a.jsx("circle",{cx:"125",cy:"115",r:"4"}),a.jsx("circle",{cx:"78",cy:"58",r:"10"}),a.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{A.displayName="ScatterChartPlaceholder",A.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Ne={formatter:_e},h=b.forwardRef((l,U)=>{var _;const{dataset:r,loading:B,noLegend:K,noAnimation:$,tooltipConfig:u,onDataPointClick:p,onLegendClick:G,onClick:k,style:Z,className:J,slot:Q,ChartPlaceholder:X,children:M,...ee}=l,s={yAxisVisible:!1,xAxisVisible:!0,gridStroke:v.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:i,referenceLineX:n}=s,{measures:g}=Ae([],l.measures,{},Ne),te=je(g),[ae,j]=Ie(U),d=b.useRef(!1),oe=ye(G),ie=b.useCallback((e,m)=>{var f,T;typeof k=="function"&&!d.current&&k(D(m,{payload:(T=(f=e==null?void 0:e.activePayload)==null?void 0:f[0])==null?void 0:T.payload,activePayloads:e==null?void 0:e.activePayload})),d.current&&(d.current=!1)},[k,d.current]),ne=b.useCallback((e,m,f)=>{e&&p&&(p(D(f,{value:e.node,dataKey:e.zAxis.dataKey,dataIndex:m,payload:e.payload})),d.current=!0)},[p,d.current]),se=(r==null?void 0:r.length)>30,o=g.find(({axis:e})=>e==="x"),t=g.find(({axis:e})=>e==="y"),c=g.find(({axis:e})=>e==="z"),[P,re]=we((_=r==null?void 0:r[0])==null?void 0:_.data,[t],s.legendPosition),le=he(j,1),ce=ue(s.margin,s.zoomingTool),{chartConfig:Ee,measures:Oe,...de}=ee,w=Re(j);return a.jsx(Pe,{dataset:r,loading:B,Placeholder:X??A,ref:ae,style:Z,className:J,slot:Q,resizeDebounce:s.resizeDebounce,...de,children:a.jsxs(qe,{onClick:ie,margin:ce,className:typeof p=="function"?"has-click-handler":void 0,children:[a.jsx(ge,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&a.jsx(L,{type:"number",name:o==null?void 0:o.label,dataKey:o==null?void 0:o.accessor,xAxisId:0,interval:(o==null?void 0:o.interval)??(se?"preserveStart":0),tick:a.jsx(fe,{config:o}),padding:Ce,height:le[0],reversed:w,label:o!=null&&o.label?{value:o==null?void 0:o.label,dy:15,position:"insideRight"}:0},o==null?void 0:o.accessor),a.jsx(H,{label:t!=null&&t.label?{value:t==null?void 0:t.label,angle:-90,position:w?"insideRight":"insideLeft"}:!1,type:"number",name:t==null?void 0:t.label,axisLine:s.yAxisVisible,tickLine:xe,dataKey:t==null?void 0:t.accessor,tickFormatter:t==null?void 0:t.formatter,interval:0,tick:a.jsx(be,{config:t}),width:t!=null&&t.label?P+10:P,margin:t!=null&&t.label?{left:200}:0,orientation:w===!0?"right":"left"},t==null?void 0:t.accessor),a.jsx(Y,{name:c==null?void 0:c.label,dataKey:c==null?void 0:c.accessor,range:[0,5e3]},c==null?void 0:c.accessor),r==null?void 0:r.map((e,m)=>a.jsx(W,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:ne,opacity:e.opacity,data:e==null?void 0:e.data,name:e==null?void 0:e.label,fill:(e==null?void 0:e.color)??`var(--sapChart_OrderedColor_${m%11+1})`,isAnimationActive:$===!1},e==null?void 0:e.label)),!K&&a.jsx(Ve,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:oe,wrapperStyle:re}),i&&a.jsx(S,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),y:(i==null?void 0:i.value)??(i==null?void 0:i.y),label:i==null?void 0:i.label}),n&&a.jsx(S,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(u==null?void 0:u.active)!==!1&&a.jsx(ze,{cursor:ve,formatter:te,contentStyle:ke,...u}),M]})})});h.defaultProps={noLegend:!1,noAnimation:!1};h.displayName="ScatterChart";try{h.displayName="ScatterChart",h.__docgenInfo={description:`
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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IScatterChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const St={title:"ScatterChart",component:h,argTypes:{children:{control:{disable:!0}}},args:{dataset:pe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},y={},C={args:{dataset:me,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},x={args:{dataset:[]}};var V,z,I;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(I=(z=y.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var R,q,N;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(q=C.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var E,O,F;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(F=(O=x.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const Vt=["Default","WithCustomColor","LoadingPlaceholder"];export{y as Default,x as LoadingPlaceholder,C as WithCustomColor,Vt as __namedExportsOrder,St as default};
