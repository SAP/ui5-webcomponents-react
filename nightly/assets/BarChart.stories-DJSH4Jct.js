import{c as Je,s as Qe,a as Ze,e as et,t as tt,l as at}from"./DemoProps-BerORI7p.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{T as j}from"./ThemingParameters-pyhX3s39.js";import"./CustomElementsScope-BZQ-yqK5.js";import{r as B}from"./index-U0ga5oGA.js";import{A as ot,k as nt}from"./jsx-runtime-2NO35c9p.js";import{d as rt,C as Ae,u as st,t as it,a as lt,b as ct,c as dt,e as Se}from"./staticProps-CezngBbN.js";import{u as ht,B as ut}from"./useCancelAnimationFallback-BjpUrZtA.js";import{u as mt,a as pt,C as gt,X as F,c as Y,Y as ft,b as yt}from"./YAxisTicks-5KHwjVB6.js";import{u as bt,C as Ct}from"./ChartDataLabel-id7cn9ux.js";import{g as vt,u as wt,a as kt,r as xt,b as M}from"./useTooltipFormatter-B_OY4Cm7.js";import{u as At}from"./useOnClickInternal-CrJVn7-y.js";import{l as St,B as Dt,g as _t,n as Lt,m as It,R as jt,T as Vt,o as Pt}from"./ChartContainer-Ba0xIgdg.js";import{C as Tt}from"./react-content-loader.es-C9Vmu4FD.js";import{u as zt}from"./useIsRTL-WiH5er_M.js";const qt=(o,c,u="")=>B.useMemo(()=>{let d=Array(c.length).fill(0),s=0;if(o instanceof Array&&c){const V=i=>c.map(l=>l.formatter(Ae.getValueByDataKey(i,l.accessor,"")));o.map(V).forEach(i=>{i.forEach((l,S)=>{d[S]=Math.max(vt(l),d[S])})}),d=d.map(i=>Math.min(rt,i)),s=d.reduce((i,l)=>i+l,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:s,maxWidth:`calc(100% - ${s+8}px)`}]},[o,c,u]),Bt=()=>a.jsxs(Tt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:j.sapContent_ImagePlaceholderBackground,foregroundColor:j.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:j.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),Nt={formatter:Se},Wt={formatter:Se,opacity:1},Ot=o=>({payload:c})=>Ae.getValueByDataKey(c,o),m=B.forwardRef((o,c)=>{var R,E;const{loading:u,loadingDelay:d,dataset:s,noLegend:V,noAnimation:P,tooltipConfig:i,onDataPointClick:l,onLegendClick:S,onClick:N,style:De,className:_e,slot:Le,syncId:Ie,ChartPlaceholder:je,children:Ve,...Pe}=o,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:j.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...o.chartConfig},n=t.referenceLine,{dimensions:T,measures:D}=wt(o.dimensions,o.measures,Nt,Wt),Te=kt(D),h=T[0],{primaryMeasure:_,secondaryMeasure:ze}=xt(D,(R=t==null?void 0:t.secondYAxis)==null?void 0:R.dataKey),qe=D.map(({accessor:e})=>e),z=t.secondYAxis?qe.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,[Be,W]=ot(c),Ne=st(S),We=bt(h),Oe=B.useCallback((e,r,L)=>{if(e&&l){const I=e.value.length?e.value[1]-e.value[0]:e.value;l(nt(L,{dataKey:Object.keys(e).filter(q=>q!=="value").find(q=>e[q]===I),value:I,payload:e.payload,dataIndex:r}))}},[l]),Re=At(N),Ee=(s==null?void 0:s.length)>30,Fe=h==null?void 0:h.accessor,[Ye,Me]=qt(s,T,t.legendPosition),Ke=mt(t.margin,t.zoomingTool),[He]=pt(W,1),O=zt(W),{isMounted:$e,handleBarAnimationStart:Ue,handleBarAnimationEnd:Xe}=ht(P),{chartConfig:Ft,dimensions:Yt,measures:Mt,...Ge}=Pe;return a.jsx(St,{dataset:s,loading:u,loadingDelay:d,Placeholder:je??Bt,ref:Be,style:De,className:_e,slot:Le,resizeDebounce:t.resizeDebounce,...Ge,children:a.jsxs(ut,{syncId:Ie,onClick:Re,stackOffset:"sign",margin:Ke,layout:"vertical",data:s,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof l=="function"||typeof N=="function"?"has-click-handler":void 0,children:[a.jsx(gt,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&a.jsx(F,{interval:0,type:"number",tick:a.jsx(Y,{config:_}),axisLine:t.xAxisVisible,tickLine:it,tickFormatter:_==null?void 0:_.formatter,height:He,reversed:O,...t.xAxisConfig}),((E=t.secondYAxis)==null?void 0:E.dataKey)&&a.jsx(F,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`},tick:a.jsx(Y,{config:ze,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${z%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&T.map((e,r)=>a.jsx(ft,{interval:(e==null?void 0:e.interval)??"preserveStartEnd",minTickGap:Ee?void 0:-10,type:"category",dataKey:e.accessor,tick:a.jsx(yt,{config:e}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:Ye[r],allowDuplicatedCategory:r===0,orientation:O?"right":"left",...t.yAxisConfig},e.reactKey)),$e&&D.map((e,r)=>a.jsxs(Dt,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,barSize:e.width,onClick:Oe,isAnimationActive:!P,onAnimationStart:Ue,onAnimationEnd:Xe,children:[a.jsx(_t,{data:s,valueAccessor:Ot(e.accessor),content:a.jsx(Ct,{config:e,chartType:"bar",position:"insideRight"})}),s.map((L,I)=>a.jsx(Lt,{fill:M(e,L,r),stroke:M(e,L,r)},I))]},e.reactKey)),!V&&a.jsx(It,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:Ne,wrapperStyle:Me,...t.legendConfig}),n&&a.jsx(jt,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(i==null?void 0:i.active)!==!1&&a.jsx(Vt,{cursor:ct,formatter:Te,contentStyle:lt,labelFormatter:We,...i}),!!t.zoomingTool&&a.jsx(Pt,{dataKey:Fe,tickFormatter:h==null?void 0:h.formatter,...dt,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),Ve]})})});m.displayName="BarChart";try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Rt={title:"BarChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Je,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:o=>o.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:o=>`${o} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},p={},g={args:{measures:[{accessor:"users",color:"red"}],dataset:Qe}},f={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ze}},y={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dimensions:[{accessor:"name",formatter:o=>o.slice(0,3)}],measures:[{accessor:"users",formatter:o=>`${o/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},C={args:{dataset:[]}},v={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},w={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(o,c,u)=>{if(u.name==="February")return"red"}}]}},k={args:et},x={args:tt},A={args:at};var K,H,$;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...($=(H=p.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var U,X,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(G=(X=g.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,le;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(le=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,he;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(de=v.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var ue,me,pe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,fe,ye;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...(ye=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,Ce,ve;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(ve=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var we,ke,xe;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: legendConfig
}`,...(xe=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};const Et=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithNormalizedStacks","WithCustomTooltipConfig","WithCustomLegendConfig"],sa=Object.freeze(Object.defineProperty({__proto__:null,Default:p,LoadingPlaceholder:C,WithCustomColor:g,WithCustomLegendConfig:A,WithCustomTooltipConfig:x,WithDataLabels:y,WithFormatter:b,WithHighlightedMeasure:w,WithNormalizedStacks:k,WithReferenceLine:v,WithSecondaryDimension:f,__namedExportsOrder:Et,default:Rt},Symbol.toStringTag,{value:"Module"}));export{sa as C,p as D,C as L,g as W,f as a,y as b,b as c,k as d,v as e,w as f,x as g,A as h};
