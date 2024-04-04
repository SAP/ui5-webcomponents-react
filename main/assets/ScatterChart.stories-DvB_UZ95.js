import{f as he,g as pe}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{T as w}from"./ThemingParameters--AGRs54p.js";import{e as V}from"./index-CBpU8qq5.js";import{r as y}from"./index-Dl6G-zuu.js";import{X as F,Y as H,a as me,u as ue,C as fe,c as ge,b as be}from"./YAxisTicks-D_txc_aE.js";import{u as ye,x as Ce,t as ve,a as xe,b as we}from"./staticProps-CjaVosBc.js";import{u as ke}from"./useLongestYAxisLabel-CHUHkwhL.js";import{u as Ae,a as _e}from"./useTooltipFormatter-B01VOF1O.js";import{C as Pe}from"./ChartContainer-BIuesZYU.js";import{a as je}from"./defaults-DZ9TSsq8.js";import{C as Se}from"./react-content-loader.es-CRTrDzHi.js";import{c as Ve,f as Te,d as De,R as T,T as qe}from"./generateCategoricalChart-VtSpEqUr.js";import{S as U,Z as W}from"./Scatter-DnI2wi0_.js";import{u as ze}from"./withWebComponent-WdPEUVG_.js";import{u as Ie}from"./useIsRTL-CMXegYV-.js";import"./_baseForOwn-DFjKyXZi.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-DRxb5hvO.js";import"./index-Dimcfuga.js";import"./clsx-B-dksMZM.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./i18n-defaults-FgEXIKeH.js";import"./i18nBundle-C2WczoLt.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./throttle-ClB5v_5B.js";import"./isString-B_cEKuVX.js";import"./index-DaRmuT3k.js";import"./iframe-aoKFBcy-.js";import"../sb-preview/runtime.js";import"./Label-Cuq9lQQu.js";import"./UI5Element-TZfj5eGG.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-weVOdquz.js";import"./parameters-bundle.css-B6zgRRib.js";import"./utils-B7AYZOSV.js";import"./tiny-invariant-CCoILDQG.js";import"./isPlainObject-1lSDzB4t.js";import"./mapValues-BvzalXkB.js";import"./directionChange-DUANdzdS.js";var Ne=Ve({chartName:"ScatterChart",GraphicalChild:U,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:F},{axisType:"yAxis",AxisComp:H},{axisType:"zAxis",AxisComp:W}],formatAxisMap:Te});const u=s=>a.jsxs(Se,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:w.sapContent_ImagePlaceholderBackground,foregroundColor:w.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:w.sapContent_DisabledOpacity,...s,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("circle",{cx:"20",cy:"90",r:"2"}),a.jsx("circle",{cx:"40",cy:"58",r:"3"}),a.jsx("circle",{cx:"60",cy:"108",r:"14"}),a.jsx("circle",{cx:"85",cy:"87",r:"8"}),a.jsx("circle",{cx:"105",cy:"50",r:"6"}),a.jsx("circle",{cx:"125",cy:"115",r:"4"}),a.jsx("circle",{cx:"78",cy:"58",r:"10"}),a.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Re={formatter:je},d=y.forwardRef((s,Y)=>{var j;const{dataset:l,loading:B,noLegend:K,noAnimation:$,tooltipConfig:f,onDataPointClick:p,onLegendClick:G,onClick:k,style:Z,className:J,slot:Q,ChartPlaceholder:X,children:M,...ee}=s,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:w.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...s.chartConfig},{referenceLine:o,referenceLineX:i}=r,{measures:g}=Ae([],s.measures,{},Re),te=_e(g),[ae,_]=ze(Y),h=y.useRef(!1),ne=ye(G),oe=y.useCallback((e,m)=>{var b,S;typeof k=="function"&&!h.current&&k(V(m,{payload:(S=(b=e==null?void 0:e.activePayload)==null?void 0:b[0])==null?void 0:S.payload,activePayloads:e==null?void 0:e.activePayload})),h.current&&(h.current=!1)},[k,h.current]),ie=y.useCallback((e,m,b)=>{e&&p&&(p(V(b,{value:e.node,dataKey:e.zAxis.dataKey,dataIndex:m,payload:e.payload})),h.current=!0)},[p,h.current]),re=(l==null?void 0:l.length)>30,n=g.find(({axis:e})=>e==="x"),t=g.find(({axis:e})=>e==="y"),c=g.find(({axis:e})=>e==="z"),[P,se]=ke((j=l==null?void 0:l[0])==null?void 0:j.data,[t],r.legendPosition),le=me(_,1),ce=ue(r.margin,r.zoomingTool),{chartConfig:Ee,measures:Le,...de}=ee,A=Ie(_);return a.jsx(Pe,{dataset:l,loading:B,Placeholder:X??u,ref:ae,style:Z,className:J,slot:Q,resizeDebounce:r.resizeDebounce,...de,children:a.jsxs(Ne,{onClick:oe,margin:ce,className:typeof p=="function"?"has-click-handler":void 0,children:[a.jsx(fe,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&a.jsx(F,{type:"number",name:n==null?void 0:n.label,dataKey:n==null?void 0:n.accessor,xAxisId:0,interval:(n==null?void 0:n.interval)??(re?"preserveStart":0),tick:a.jsx(ge,{config:n}),padding:Ce,height:le[0],reversed:A,label:n!=null&&n.label?{value:n==null?void 0:n.label,dy:15,position:"insideRight"}:0},n==null?void 0:n.accessor),a.jsx(H,{label:t!=null&&t.label?{value:t==null?void 0:t.label,angle:-90,position:A?"insideRight":"insideLeft"}:!1,type:"number",name:t==null?void 0:t.label,axisLine:r.yAxisVisible,tickLine:ve,dataKey:t==null?void 0:t.accessor,tickFormatter:t==null?void 0:t.formatter,interval:0,tick:a.jsx(be,{config:t}),width:t!=null&&t.label?P+10:P,margin:t!=null&&t.label?{left:200}:0,orientation:A===!0?"right":"left"},t==null?void 0:t.accessor),a.jsx(W,{name:c==null?void 0:c.label,dataKey:c==null?void 0:c.accessor,range:[0,5e3]},c==null?void 0:c.accessor),l==null?void 0:l.map((e,m)=>a.jsx(U,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:ie,opacity:e.opacity,data:e==null?void 0:e.data,name:e==null?void 0:e.label,fill:(e==null?void 0:e.color)??`var(--sapChart_OrderedColor_${m%11+1})`,isAnimationActive:$===!1},e==null?void 0:e.label)),!K&&a.jsx(De,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:ne,wrapperStyle:se}),o&&a.jsx(T,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),label:o==null?void 0:o.label}),i&&a.jsx(T,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(f==null?void 0:f.active)!==!1&&a.jsx(qe,{cursor:xe,formatter:te,contentStyle:we,...f}),M]})})});d.defaultProps={noLegend:!1,noAnimation:!1};d.displayName="ScatterChart";try{d.displayName="ScatterChart",d.__docgenInfo={description:`
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
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}try{d.displayName="ScatterChart",d.__docgenInfo={description:`
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
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const Dt={title:"ScatterChart",component:d,argTypes:{children:{control:{disable:!0}}},args:{dataset:he,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:s=>`${s}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},C={},v={args:{dataset:pe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},x={args:{dataset:[]}};var D,q,z;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(z=(q=C.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var I,N,R;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,L,O;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const qt=["Default","WithCustomColor","LoadingPlaceholder"];export{C as Default,x as LoadingPlaceholder,v as WithCustomColor,qt as __namedExportsOrder,Dt as default};
