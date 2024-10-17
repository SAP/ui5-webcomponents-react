import{c as Ye,s as Me,a as Ke,t as He}from"./DemoProps-CIcjkBju.js";import{j as a}from"./jsx-runtime-DEdD30eg.js";import{T as L}from"./ThemingParameters-B358vlzA.js";import{e as $e}from"./index-C-Zfmu7Z.js";import{r as q}from"./index-RYns6xqu.js";import{d as Ue,C as ge,u as Xe,t as Ge,a as Je,b as Qe,c as Ze,e as ye}from"./staticProps-B2rAT27W.js";import{u as et,B as tt}from"./useCancelAnimationFallback-DyOSQX7J.js";import{u as at,a as ot,C as nt,X as W,c as E,Y as rt,b as st}from"./YAxisTicks-DumsuCnv.js";import{u as it,C as lt}from"./ChartDataLabel-CmYkIMNe.js";import{g as ct,u as dt,a as ht,r as ut,b as F}from"./useTooltipFormatter-BQ05NG9L.js";import{u as mt}from"./useOnClickInternal-CrvD_ZAc.js";import{q as pt,B as ft,g as gt,s as yt,r as bt,R as Ct,T as vt,t as wt}from"./ChartContainer-D2CMsM_H.js";import{C as kt}from"./react-content-loader.es-BcmDwNEo.js";import{k as xt}from"./withWebComponent-m_Fq5lNf.js";import{u as At}from"./useIsRTL-C5iQ0Bor.js";const St=(o,c,u="")=>q.useMemo(()=>{let d=Array(c.length).fill(0),s=0;if(o instanceof Array&&c){const I=i=>c.map(l=>l.formatter(ge.getValueByDataKey(i,l.accessor,"")));o.map(I).forEach(i=>{i.forEach((l,x)=>{d[x]=Math.max(ct(l),d[x])})}),d=d.map(i=>Math.min(Ue,i)),s=d.reduce((i,l)=>i+l,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:s,maxWidth:`calc(100% - ${s+8}px)`}]},[o,c,u]),Dt=()=>a.jsxs(kt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:L.sapContent_ImagePlaceholderBackground,foregroundColor:L.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:L.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),_t={formatter:ye},Lt={formatter:ye,opacity:1},It=o=>({payload:c})=>ge.getValueByDataKey(c,o),m=q.forwardRef((o,c)=>{var O,N;const{loading:u,loadingDelay:d,dataset:s,noLegend:I,noAnimation:j,tooltipConfig:i,onDataPointClick:l,onLegendClick:x,onClick:z,style:be,className:Ce,slot:ve,syncId:we,ChartPlaceholder:ke,children:xe,...Ae}=o,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:L.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...o.chartConfig},n=t.referenceLine,{dimensions:V,measures:A}=dt(o.dimensions,o.measures,_t,Lt),Se=ht(A),h=V[0],{primaryMeasure:S,secondaryMeasure:De}=ut(A,(O=t==null?void 0:t.secondYAxis)==null?void 0:O.dataKey),_e=A.map(({accessor:e})=>e),P=t.secondYAxis?_e.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,[Le,B]=xt(c),Ie=Xe(x),je=it(h),Ve=q.useCallback((e,r,D)=>{if(e&&l){const _=e.value.length?e.value[1]-e.value[0]:e.value;l($e(D,{dataKey:Object.keys(e).filter(T=>T!=="value").find(T=>e[T]===_),value:_,payload:e.payload,dataIndex:r}))}},[l]),Pe=mt(z),Te=(s==null?void 0:s.length)>30,qe=h==null?void 0:h.accessor,[ze,Be]=St(s,V,t.legendPosition),Re=at(t.margin,t.zoomingTool),[Oe]=ot(B,1),R=At(B),{isMounted:Ne,handleBarAnimationStart:We,handleBarAnimationEnd:Ee}=et(j),{chartConfig:Pt,dimensions:Tt,measures:qt,...Fe}=Ae;return a.jsx(pt,{dataset:s,loading:u,loadingDelay:d,Placeholder:ke??Dt,ref:Le,style:be,className:Ce,slot:ve,resizeDebounce:t.resizeDebounce,...Fe,children:a.jsxs(tt,{syncId:we,onClick:Pe,stackOffset:"sign",margin:Re,layout:"vertical",data:s,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof l=="function"||typeof z=="function"?"has-click-handler":void 0,children:[a.jsx(nt,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&a.jsx(W,{interval:0,type:"number",tick:a.jsx(E,{config:S}),axisLine:t.xAxisVisible,tickLine:Ge,tickFormatter:S==null?void 0:S.formatter,height:Oe,reversed:R,...t.xAxisConfig}),((N=t.secondYAxis)==null?void 0:N.dataKey)&&a.jsx(W,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%12+1})`},tick:a.jsx(E,{config:De,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&V.map((e,r)=>a.jsx(rt,{interval:(e==null?void 0:e.interval)??"preserveStartEnd",minTickGap:Te?void 0:-10,type:"category",dataKey:e.accessor,tick:a.jsx(st,{config:e}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:ze[r],allowDuplicatedCategory:r===0,orientation:R?"right":"left",...t.yAxisConfig},e.reactKey)),Ne&&A.map((e,r)=>a.jsxs(ft,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,barSize:e.width,onClick:Ve,isAnimationActive:!j,onAnimationStart:We,onAnimationEnd:Ee,children:[a.jsx(gt,{data:s,valueAccessor:It(e.accessor),content:a.jsx(lt,{config:e,chartType:"bar",position:"insideRight"})}),s.map((D,_)=>a.jsx(yt,{fill:F(e,D,r),stroke:F(e,D,r)},_))]},e.reactKey)),!I&&a.jsx(bt,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:Ie,wrapperStyle:Be}),n&&a.jsx(Ct,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(i==null?void 0:i.active)!==!1&&a.jsx(vt,{cursor:Je,formatter:Se,contentStyle:Qe,labelFormatter:je,...i}),!!t.zoomingTool&&a.jsx(wt,{dataKey:qe,tickFormatter:h==null?void 0:h.formatter,...Ze,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),xe]})})});m.displayName="BarChart";try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
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
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; accessibilityLayer?: boolean; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const jt={title:"BarChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Ye,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:o=>o.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:o=>`${o} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},p={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:Me}},g={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ke}},y={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dimensions:[{accessor:"name",formatter:o=>o.slice(0,3)}],measures:[{accessor:"users",formatter:o=>`${o/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},C={args:{dataset:[]}},v={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},w={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(o,c,u)=>{if(u.name==="February")return"red"}}]}},k={args:He};var Y,M,K;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(K=(M=p.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var H,$,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(U=($=f.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,he,ue;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var me,pe,fe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(fe=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};const Vt=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithCustomTooltipConfig"],Gt=Object.freeze(Object.defineProperty({__proto__:null,Default:p,LoadingPlaceholder:C,WithCustomColor:f,WithCustomTooltipConfig:k,WithDataLabels:y,WithFormatter:b,WithHighlightedMeasure:w,WithReferenceLine:v,WithSecondaryDimension:g,__namedExportsOrder:Vt,default:jt},Symbol.toStringTag,{value:"Module"}));export{Gt as C,p as D,C as L,f as W,g as a,y as b,b as c,v as d,w as e,k as f};
