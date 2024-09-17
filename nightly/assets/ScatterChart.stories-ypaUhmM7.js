import{f as pe,g as me}from"./DemoProps-BWWtsAFv.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{T as w}from"./ThemingParameters-DOkJX3Ed.js";import{e as D}from"./index-C-Zfmu7Z.js";import{r as y}from"./index-RYns6xqu.js";import{X as F,Y as B,a as ue,u as fe,C as ge,c as be,b as ye}from"./YAxisTicks-NxQLCLnr.js";import{u as Ce,x as ve,t as xe,a as we,b as ke,c as Ae}from"./staticProps-YOTN4v6a.js";import{u as _e}from"./useLongestYAxisLabel-DiJsoNdu.js";import{u as Pe,a as je}from"./useTooltipFormatter-i5A2tRtm.js";import{k as Se,l as De,m as Ve,n as Ie,R as V,T as Te}from"./ChartContainer-DhZW_ZaB.js";import{C as qe}from"./react-content-loader.es-BcmDwNEo.js";import{S as H,Z as U}from"./Scatter-CfV_Y44V.js";import{u as ze}from"./withWebComponent-BS26LpJo.js";import{u as Ne}from"./useIsRTL-DtzqLicj.js";import"./_baseUniq-18efwtne.js";import"./debounce-D7W5PopO.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-BNez58WF.js";import"./index-rNTiGNI1.js";import"./index-BdoYfwXe.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-fdPvni4l.js";import"./index-Cc-tEeMn.js";import"./BusyIndicator-DqlHMudg.js";import"./i18nBundle-BUZJrdsA.js";import"./Keys-D1SxbTOd.js";import"./Label-CIfQAdSL.js";import"./i18n-defaults-GANmd4m7.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./class-map-CcXho7vk.js";import"./index-DqrLvsQJ.js";import"./directionChange-DQGERUPd.js";var Re=Se({chartName:"ScatterChart",GraphicalChild:H,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:F},{axisType:"yAxis",AxisComp:B},{axisType:"zAxis",AxisComp:U}],formatAxisMap:De});const u=l=>n.jsxs(qe,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:w.sapContent_ImagePlaceholderBackground,foregroundColor:w.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:w.sapContent_DisabledOpacity,...l,children:[n.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),n.jsx("circle",{cx:"20",cy:"90",r:"2"}),n.jsx("circle",{cx:"40",cy:"58",r:"3"}),n.jsx("circle",{cx:"60",cy:"108",r:"14"}),n.jsx("circle",{cx:"85",cy:"87",r:"8"}),n.jsx("circle",{cx:"105",cy:"50",r:"6"}),n.jsx("circle",{cx:"125",cy:"115",r:"4"}),n.jsx("circle",{cx:"78",cy:"58",r:"10"}),n.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Ee={formatter:Ae},h=y.forwardRef((l,W)=>{var j;const{dataset:c,loading:Y,loadingDelay:K,noLegend:$,noAnimation:G,tooltipConfig:f,onDataPointClick:p,onLegendClick:Z,onClick:k,style:J,className:Q,slot:X,ChartPlaceholder:M,children:ee,...te}=l,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:w.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:o,referenceLineX:i}=r,{measures:g}=Pe([],l.measures,{},Ee),ae=je(g),[ne,_]=ze(W),d=y.useRef(!1),oe=Ce(Z),ie=y.useCallback((t,m)=>{var b,S;typeof k=="function"&&!d.current&&k(D(m,{payload:(S=(b=t==null?void 0:t.activePayload)==null?void 0:b[0])==null?void 0:S.payload,activePayloads:t==null?void 0:t.activePayload})),d.current&&(d.current=!1)},[k,d.current]),se=y.useCallback((t,m,b)=>{t&&p&&(p(D(b,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:m,payload:t.payload})),d.current=!0)},[p,d.current]),re=(c==null?void 0:c.length)>30,a=g.find(({axis:t})=>t==="x"),e=g.find(({axis:t})=>t==="y"),s=g.find(({axis:t})=>t==="z"),[P,le]=_e((j=c==null?void 0:c[0])==null?void 0:j.data,[e],r.legendPosition),ce=ue(_,1),de=fe(r.margin,r.zoomingTool),{chartConfig:Le,measures:Oe,...he}=te,A=Ne(_);return n.jsx(Ve,{dataset:c,loading:Y,loadingDelay:K,Placeholder:M??u,ref:ne,style:J,className:Q,slot:X,resizeDebounce:r.resizeDebounce,...he,children:n.jsxs(Re,{onClick:ie,margin:de,className:typeof p=="function"?"has-click-handler":void 0,children:[n.jsx(ge,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&n.jsx(F,{type:"number",name:a==null?void 0:a.label,dataKey:a==null?void 0:a.accessor,xAxisId:0,interval:(a==null?void 0:a.interval)??(re?"preserveStart":0),tick:n.jsx(be,{config:a}),padding:ve,height:ce[0],reversed:A,label:a!=null&&a.label?{value:a==null?void 0:a.label,dy:15,position:"insideRight"}:0},typeof(a==null?void 0:a.accessor)!="function"?a==null?void 0:a.accessor:a==null?void 0:a.label),n.jsx(B,{label:e!=null&&e.label?{value:e==null?void 0:e.label,angle:-90,position:A?"insideRight":"insideLeft"}:!1,type:"number",name:e==null?void 0:e.label,axisLine:r.yAxisVisible,tickLine:xe,dataKey:e==null?void 0:e.accessor,tickFormatter:e==null?void 0:e.formatter,interval:0,tick:n.jsx(ye,{config:e}),width:e!=null&&e.label?P+10:P,margin:e!=null&&e.label?{left:200}:0,orientation:A===!0?"right":"left"},typeof(e==null?void 0:e.accessor)!="function"?e==null?void 0:e.accessor:e==null?void 0:e.label),n.jsx(U,{name:s==null?void 0:s.label,dataKey:s==null?void 0:s.accessor,range:[0,5e3]},typeof(s==null?void 0:s.accessor)!="function"?s==null?void 0:s.accessor:s==null?void 0:s.label),c==null?void 0:c.map((t,m)=>n.jsx(H,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:se,opacity:t.opacity,data:t==null?void 0:t.data,name:t==null?void 0:t.label,fill:(t==null?void 0:t.color)??`var(--sapChart_OrderedColor_${m%11+1})`,isAnimationActive:!G},t==null?void 0:t.label)),!$&&n.jsx(Ie,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:oe,wrapperStyle:le}),o&&n.jsx(V,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),label:o==null?void 0:o.label}),i&&n.jsx(V,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(f==null?void 0:f.active)!==!1&&n.jsx(Te,{cursor:we,formatter:ae,contentStyle:ke,...f}),ee]})})});h.displayName="ScatterChart";try{h.displayName="ScatterChart",h.__docgenInfo={description:`
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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
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
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:"measures",required:!1,type:{name:"MeasureConfig[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const xt={title:"ScatterChart",component:h,argTypes:{children:{control:{disable:!0}}},args:{dataset:pe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},C={},v={args:{dataset:me,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},x={args:{dataset:[]}};var I,T,q;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(q=(T=C.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var z,N,R;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const wt=["Default","WithCustomColor","LoadingPlaceholder"];export{C as Default,x as LoadingPlaceholder,v as WithCustomColor,wt as __namedExportsOrder,xt as default};
