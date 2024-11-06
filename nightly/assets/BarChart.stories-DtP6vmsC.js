import{c as $e,s as Ue,a as Xe,t as Ge,l as Je}from"./DemoProps-zTw_Q8Fu.js";import{j as a}from"./jsx-runtime-DEdD30eg.js";import{T as I}from"./ThemingParameters-B358vlzA.js";import{e as Qe}from"./index-C-Zfmu7Z.js";import{r as z}from"./index-RYns6xqu.js";import{d as Ze,C as ve,u as et,t as tt,a as at,b as ot,c as nt,e as we}from"./staticProps-ChHwq_-u.js";import{u as rt,B as st}from"./useCancelAnimationFallback-BjpXtUQ9.js";import{u as it,a as lt,C as ct,X as E,c as F,Y as dt,b as ht}from"./YAxisTicks-DWrPfV5K.js";import{u as ut,C as mt}from"./ChartDataLabel-B1aftkSP.js";import{g as pt,u as gt,a as ft,r as yt,b as Y}from"./useTooltipFormatter-CdLssDfS.js";import{u as bt}from"./useOnClickInternal-CrvD_ZAc.js";import{q as Ct,B as vt,e as wt,s as kt,r as xt,R as At,T as St,t as Dt}from"./ChartContainer-BbY8XWCY.js";import{C as _t}from"./react-content-loader.es-BcmDwNEo.js";import{k as Lt}from"./withWebComponent-v3aPz19k.js";import{u as It}from"./useIsRTL-cDadyecF.js";const jt=(o,c,u="")=>z.useMemo(()=>{let d=Array(c.length).fill(0),s=0;if(o instanceof Array&&c){const j=i=>c.map(l=>l.formatter(ve.getValueByDataKey(i,l.accessor,"")));o.map(j).forEach(i=>{i.forEach((l,A)=>{d[A]=Math.max(pt(l),d[A])})}),d=d.map(i=>Math.min(Ze,i)),s=d.reduce((i,l)=>i+l,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:s,maxWidth:`calc(100% - ${s+8}px)`}]},[o,c,u]),Vt=()=>a.jsxs(_t,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:I.sapContent_ImagePlaceholderBackground,foregroundColor:I.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:I.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),Pt={formatter:we},Tt={formatter:we,opacity:1},qt=o=>({payload:c})=>ve.getValueByDataKey(c,o),m=z.forwardRef((o,c)=>{var W,N;const{loading:u,loadingDelay:d,dataset:s,noLegend:j,noAnimation:V,tooltipConfig:i,onDataPointClick:l,onLegendClick:A,onClick:B,style:ke,className:xe,slot:Ae,syncId:Se,ChartPlaceholder:De,children:_e,...Le}=o,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:I.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...o.chartConfig},n=t.referenceLine,{dimensions:P,measures:S}=gt(o.dimensions,o.measures,Pt,Tt),Ie=ft(S),h=P[0],{primaryMeasure:D,secondaryMeasure:je}=yt(S,(W=t==null?void 0:t.secondYAxis)==null?void 0:W.dataKey),Ve=S.map(({accessor:e})=>e),T=t.secondYAxis?Ve.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,[Pe,O]=Lt(c),Te=et(A),qe=ut(h),ze=z.useCallback((e,r,_)=>{if(e&&l){const L=e.value.length?e.value[1]-e.value[0]:e.value;l(Qe(_,{dataKey:Object.keys(e).filter(q=>q!=="value").find(q=>e[q]===L),value:L,payload:e.payload,dataIndex:r}))}},[l]),Be=bt(B),Oe=(s==null?void 0:s.length)>30,Re=h==null?void 0:h.accessor,[We,Ne]=jt(s,P,t.legendPosition),Ee=it(t.margin,t.zoomingTool),[Fe]=lt(O,1),R=It(O),{isMounted:Ye,handleBarAnimationStart:Me,handleBarAnimationEnd:Ke}=rt(V),{chartConfig:Ot,dimensions:Rt,measures:Wt,...He}=Le;return a.jsx(Ct,{dataset:s,loading:u,loadingDelay:d,Placeholder:De??Vt,ref:Pe,style:ke,className:xe,slot:Ae,resizeDebounce:t.resizeDebounce,...He,children:a.jsxs(st,{syncId:Se,onClick:Be,stackOffset:"sign",margin:Ee,layout:"vertical",data:s,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof l=="function"||typeof B=="function"?"has-click-handler":void 0,children:[a.jsx(ct,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&a.jsx(E,{interval:0,type:"number",tick:a.jsx(F,{config:D}),axisLine:t.xAxisVisible,tickLine:tt,tickFormatter:D==null?void 0:D.formatter,height:Fe,reversed:R,...t.xAxisConfig}),((N=t.secondYAxis)==null?void 0:N.dataKey)&&a.jsx(E,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`},tick:a.jsx(F,{config:je,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${T%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&P.map((e,r)=>a.jsx(dt,{interval:(e==null?void 0:e.interval)??"preserveStartEnd",minTickGap:Oe?void 0:-10,type:"category",dataKey:e.accessor,tick:a.jsx(ht,{config:e}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:We[r],allowDuplicatedCategory:r===0,orientation:R?"right":"left",...t.yAxisConfig},e.reactKey)),Ye&&S.map((e,r)=>a.jsxs(vt,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,barSize:e.width,onClick:ze,isAnimationActive:!V,onAnimationStart:Me,onAnimationEnd:Ke,children:[a.jsx(wt,{data:s,valueAccessor:qt(e.accessor),content:a.jsx(mt,{config:e,chartType:"bar",position:"insideRight"})}),s.map((_,L)=>a.jsx(kt,{fill:Y(e,_,r),stroke:Y(e,_,r)},L))]},e.reactKey)),!j&&a.jsx(xt,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:Te,wrapperStyle:Ne,...t.legendConfig}),n&&a.jsx(At,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(i==null?void 0:i.active)!==!1&&a.jsx(St,{cursor:at,formatter:Ie,contentStyle:ot,labelFormatter:qe,...i}),!!t.zoomingTool&&a.jsx(Dt,{dataKey:Re,tickFormatter:h==null?void 0:h.formatter,...nt,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),_e]})})});m.displayName="BarChart";try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const zt={title:"BarChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:$e,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:o=>o.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:o=>`${o} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},p={},g={args:{measures:[{accessor:"users",color:"red"}],dataset:Ue}},f={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Xe}},y={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dimensions:[{accessor:"name",formatter:o=>o.slice(0,3)}],measures:[{accessor:"users",formatter:o=>`${o/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},C={args:{dataset:[]}},v={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},w={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(o,c,u)=>{if(u.name==="February")return"red"}}]}},k={args:Ge},x={args:Je};var M,K,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(H=(K=p.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var $,U,X;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,J,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,oe,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
    }],
    chartConfig: {
      zoomingTool: true
    }
  }
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,se,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ie=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var he,ue,me;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume',
      highlightColor: (value, measure, data) => {
        if (data.name === 'February') {
          return 'red';
        }
      }
    }]
  }
}`,...(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,fe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(fe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ye,be,Ce;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: legendConfig
}`,...(Ce=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};const Bt=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithCustomTooltipConfig","WithCustomLegendConfig"],ta=Object.freeze(Object.defineProperty({__proto__:null,Default:p,LoadingPlaceholder:C,WithCustomColor:g,WithCustomLegendConfig:x,WithCustomTooltipConfig:k,WithDataLabels:y,WithFormatter:b,WithHighlightedMeasure:w,WithReferenceLine:v,WithSecondaryDimension:f,__namedExportsOrder:Bt,default:zt},Symbol.toStringTag,{value:"Module"}));export{ta as C,p as D,C as L,g as W,f as a,y as b,b as c,v as d,w as e,k as f,x as g};
