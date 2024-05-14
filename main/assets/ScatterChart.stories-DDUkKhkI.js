import{f as he,g as pe}from"./DemoProps-BWWtsAFv.js";import{j as o}from"./ManagedStyles-B3AuKgSD.js";import{T as w}from"./ThemingParameters-DOkJX3Ed.js";import{e as V}from"./index-CBpU8qq5.js";import{r as y}from"./index-BP8_t0zE.js";import{X as F,Y as H,a as me,u as ue,C as fe,c as ge,b as be}from"./YAxisTicks-BcEkpdfW.js";import{u as ye,x as Ce,t as ve,a as xe,b as we}from"./staticProps-3DmeqWTG.js";import{u as ke}from"./useLongestYAxisLabel-DWQAJzV5.js";import{u as Ae,a as _e}from"./useTooltipFormatter-PWWZzAPB.js";import{C as Pe}from"./ChartContainer-1DzGzByv.js";import{a as je}from"./defaults-UKAnzuAm.js";import{C as Se}from"./react-content-loader.es-VoBEIBwl.js";import{c as Ve,f as Te,d as De,R as T,T as qe}from"./generateCategoricalChart-DuMzUBdg.js";import{S as U,Z as W}from"./Scatter-CfxiCZ4n.js";import{u as Ie}from"./withWebComponent-I_l1rtvY.js";import{u as ze}from"./useIsRTL-DlkNdqB2.js";import"./_baseForOwn-B3hW39GE.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BbzeZuBs.js";import"./index-CKYFoUHD.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-BbHxfVEE.js";import"./i18nBundle-VOPn86Vc.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./useStylesheet-NUMS3nLe.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-fqVzPwp6.js";import"./iframe-VEe5ujzg.js";import"../sb-preview/runtime.js";import"./Label-MHQDFgLT.js";import"./UI5Element-BDMamLf2.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./parameters-bundle.css-CG8awnKl.js";import"./utils-BFMQrOqR.js";import"./tiny-invariant-CCoILDQG.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./directionChange-BWsY0llq.js";var Ne=Ve({chartName:"ScatterChart",GraphicalChild:U,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:F},{axisType:"yAxis",AxisComp:H},{axisType:"zAxis",AxisComp:W}],formatAxisMap:Te});const u=l=>o.jsxs(Se,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:w.sapContent_ImagePlaceholderBackground,foregroundColor:w.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:w.sapContent_DisabledOpacity,...l,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("circle",{cx:"20",cy:"90",r:"2"}),o.jsx("circle",{cx:"40",cy:"58",r:"3"}),o.jsx("circle",{cx:"60",cy:"108",r:"14"}),o.jsx("circle",{cx:"85",cy:"87",r:"8"}),o.jsx("circle",{cx:"105",cy:"50",r:"6"}),o.jsx("circle",{cx:"125",cy:"115",r:"4"}),o.jsx("circle",{cx:"78",cy:"58",r:"10"}),o.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{u.displayName="ScatterChartPlaceholder",u.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Re={formatter:je},d=y.forwardRef((l,Y)=>{var j;const{dataset:c,loading:B,noLegend:K,noAnimation:$,tooltipConfig:f,onDataPointClick:p,onLegendClick:G,onClick:k,style:Z,className:J,slot:Q,ChartPlaceholder:X,children:M,...ee}=l,s={yAxisVisible:!1,xAxisVisible:!0,gridStroke:w.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:n,referenceLineX:i}=s,{measures:g}=Ae([],l.measures,{},Re),te=_e(g),[ae,_]=Ie(Y),h=y.useRef(!1),oe=ye(G),ne=y.useCallback((t,m)=>{var b,S;typeof k=="function"&&!h.current&&k(V(m,{payload:(S=(b=t==null?void 0:t.activePayload)==null?void 0:b[0])==null?void 0:S.payload,activePayloads:t==null?void 0:t.activePayload})),h.current&&(h.current=!1)},[k,h.current]),ie=y.useCallback((t,m,b)=>{t&&p&&(p(V(b,{value:t.node,dataKey:t.zAxis.dataKey,dataIndex:m,payload:t.payload})),h.current=!0)},[p,h.current]),re=(c==null?void 0:c.length)>30,a=g.find(({axis:t})=>t==="x"),e=g.find(({axis:t})=>t==="y"),r=g.find(({axis:t})=>t==="z"),[P,se]=ke((j=c==null?void 0:c[0])==null?void 0:j.data,[e],s.legendPosition),le=me(_,1),ce=ue(s.margin,s.zoomingTool),{chartConfig:Ee,measures:Le,...de}=ee,A=ze(_);return o.jsx(Pe,{dataset:c,loading:B,Placeholder:X??u,ref:ae,style:Z,className:J,slot:Q,resizeDebounce:s.resizeDebounce,...de,children:o.jsxs(Ne,{onClick:ne,margin:ce,className:typeof p=="function"?"has-click-handler":void 0,children:[o.jsx(fe,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&o.jsx(F,{type:"number",name:a==null?void 0:a.label,dataKey:a==null?void 0:a.accessor,xAxisId:0,interval:(a==null?void 0:a.interval)??(re?"preserveStart":0),tick:o.jsx(ge,{config:a}),padding:Ce,height:le[0],reversed:A,label:a!=null&&a.label?{value:a==null?void 0:a.label,dy:15,position:"insideRight"}:0},typeof(a==null?void 0:a.accessor)!="function"?a==null?void 0:a.accessor:a==null?void 0:a.label),o.jsx(H,{label:e!=null&&e.label?{value:e==null?void 0:e.label,angle:-90,position:A?"insideRight":"insideLeft"}:!1,type:"number",name:e==null?void 0:e.label,axisLine:s.yAxisVisible,tickLine:ve,dataKey:e==null?void 0:e.accessor,tickFormatter:e==null?void 0:e.formatter,interval:0,tick:o.jsx(be,{config:e}),width:e!=null&&e.label?P+10:P,margin:e!=null&&e.label?{left:200}:0,orientation:A===!0?"right":"left"},typeof(e==null?void 0:e.accessor)!="function"?e==null?void 0:e.accessor:e==null?void 0:e.label),o.jsx(W,{name:r==null?void 0:r.label,dataKey:r==null?void 0:r.accessor,range:[0,5e3]},typeof(r==null?void 0:r.accessor)!="function"?r==null?void 0:r.accessor:r==null?void 0:r.label),c==null?void 0:c.map((t,m)=>o.jsx(U,{className:typeof p=="function"?"has-click-handler":void 0,onMouseDown:ie,opacity:t.opacity,data:t==null?void 0:t.data,name:t==null?void 0:t.label,fill:(t==null?void 0:t.color)??`var(--sapChart_OrderedColor_${m%11+1})`,isAnimationActive:$===!1},t==null?void 0:t.label)),!K&&o.jsx(De,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:oe,wrapperStyle:se}),n&&o.jsx(T,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),y:(n==null?void 0:n.value)??(n==null?void 0:n.y),label:n==null?void 0:n.label}),i&&o.jsx(T,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(f==null?void 0:f.active)!==!1&&o.jsx(qe,{cursor:xe,formatter:te,contentStyle:we,...f}),M]})})});d.defaultProps={noLegend:!1,noAnimation:!1};d.displayName="ScatterChart";try{d.displayName="ScatterChart",d.__docgenInfo={description:`
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
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const Vt={title:"ScatterChart",component:d,argTypes:{children:{control:{disable:!0}}},args:{dataset:he,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},C={},v={args:{dataset:pe,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},x={args:{dataset:[]}};var D,q,I;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(I=(q=C.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var z,N,R;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(L=x.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Tt=["Default","WithCustomColor","LoadingPlaceholder"];export{C as Default,x as LoadingPlaceholder,v as WithCustomColor,Tt as __namedExportsOrder,Vt as default};
