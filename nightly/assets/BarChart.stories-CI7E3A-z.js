import{c as Je,s as Qe,a as Ze,e as et,t as tt,l as at}from"./DemoProps-DpAHnTHz.js";import{r as N,j as a,ap as ot,o as nt}from"./iframe-BCRKbB-F.js";import{T as I}from"./ThemingParameters-pyhX3s39.js";import{d as rt,C as Se,u as st,t as it,a as lt,b as ct,c as dt,e as De}from"./staticProps-CL5uldzL.js";import{u as ht,B as ut}from"./useCancelAnimationFallback-D2t9o-S9.js";import{u as mt,a as pt,C as gt,X as Y,c as M,Y as ft,b as bt}from"./YAxisTicks-cpjPKQk-.js";import{u as yt,C as Ct}from"./ChartDataLabel-eN6GoV2D.js";import{g as vt,u as wt,a as kt,r as xt,b as K}from"./useTooltipFormatter-ChNLwMsD.js";import{u as At}from"./useOnClickInternal-CIKyfteA.js";import{m as St,B as Dt,e as Lt,o as _t,n as It,R as jt,T as Vt,p as Pt}from"./ChartContainer-C2dQXD77.js";import{C as Tt}from"./react-content-loader.es-wJYJ4Zmw.js";import{u as zt}from"./useIsRTL-CHXXP87C.js";const qt=(o,c,u="")=>N.useMemo(()=>{let d=Array(c.length).fill(0),s=0;if(o instanceof Array&&c){const j=i=>c.map(l=>l.formatter(Se.getValueByDataKey(i,l.accessor,"")));o.map(j).forEach(i=>{i.forEach((l,S)=>{d[S]=Math.max(vt(l),d[S])})}),d=d.map(i=>Math.min(rt,i)),s=d.reduce((i,l)=>i+l,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:s,maxWidth:`calc(100% - ${s+8}px)`}]},[o,c,u]),Bt=()=>a.jsxs(Tt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:I.sapContent_ImagePlaceholderBackground,foregroundColor:I.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:I.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),Nt={formatter:De},Wt={formatter:De,opacity:1},Ot=o=>({payload:c})=>Se.getValueByDataKey(c,o),m=N.forwardRef((o,c)=>{var E,F;const{loading:u,loadingDelay:d,dataset:s,noLegend:j,noAnimation:V,tooltipConfig:i,onDataPointClick:l,onLegendClick:S,onClick:W,style:Le,className:_e,slot:Ie,syncId:je,ChartPlaceholder:Ve,children:Pe,...Te}=o,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:I.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...o.chartConfig},n=t.referenceLine,{dimensions:P,measures:D}=wt(o.dimensions,o.measures,Nt,Wt),ze=kt(D),h=P[0],{primaryMeasure:T,secondaryMeasure:z}=xt(D,(E=t==null?void 0:t.secondYAxis)==null?void 0:E.dataKey),qe=D.map(({accessor:e})=>e),q=t.secondYAxis?qe.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,[Be,O]=ot(c),Ne=st(S),We=yt(h==null?void 0:h.formatter),Oe=N.useCallback((e,r,L)=>{if(e&&l){const _=e.value.length?e.value[1]-e.value[0]:e.value;l(nt(L,{dataKey:Object.keys(e).filter(B=>B!=="value").find(B=>e[B]===_),value:_,payload:e.payload,dataIndex:r}))}},[l]),Re=At(W),Ee=(s==null?void 0:s.length)>30,Fe=h==null?void 0:h.accessor,[Ye,Me]=qt(s,P,t.legendPosition),Ke=mt(t.margin,t.zoomingTool),[He]=pt(O,1),R=zt(O),{isMounted:$e,handleBarAnimationStart:Ue,handleBarAnimationEnd:Xe}=ht(V),{chartConfig:Ft,dimensions:Yt,measures:Mt,...Ge}=Te;return a.jsx(St,{dataset:s,loading:u,loadingDelay:d,Placeholder:Ve??Bt,ref:Be,style:Le,className:_e,slot:Ie,resizeDebounce:t.resizeDebounce,...Ge,children:a.jsxs(ut,{syncId:je,onClick:Re,stackOffset:"sign",margin:Ke,layout:"vertical",data:s,barGap:t.barGap,accessibilityLayer:t.accessibilityLayer,className:typeof l=="function"||typeof W=="function"?"has-click-handler":void 0,children:[a.jsx(gt,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&a.jsx(Y,{interval:0,type:"number",tick:a.jsx(M,{formatter:T==null?void 0:T.formatter}),axisLine:t.xAxisVisible,tickLine:it,height:He,reversed:R,...t.xAxisConfig}),((F=t.secondYAxis)==null?void 0:F.dataKey)&&a.jsx(Y,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${q%12+1})`},tick:a.jsx(M,{formatter:z==null?void 0:z.formatter,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${q%12+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${q%12+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&P.map((e,r)=>a.jsx(ft,{interval:(e==null?void 0:e.interval)??"preserveStartEnd",minTickGap:Ee?void 0:-10,type:"category",dataKey:e.accessor,tick:a.jsx(bt,{formatter:e==null?void 0:e.formatter}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:Ye[r],allowDuplicatedCategory:r===0,orientation:R?"right":"left",...t.yAxisConfig},e.reactKey)),$e&&D.map((e,r)=>a.jsxs(Dt,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%12+1})`,barSize:e.width,onClick:Oe,isAnimationActive:!V,onAnimationStart:Ue,onAnimationEnd:Xe,children:[a.jsx(Lt,{data:s,valueAccessor:Ot(e.accessor),content:a.jsx(Ct,{config:e,chartType:"bar",position:"insideRight"})}),s.map((L,_)=>a.jsx(_t,{fill:K(e,L,r),stroke:K(e,L,r)},_))]},e.reactKey)),!j&&a.jsx(It,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:Ne,wrapperStyle:Me,...t.legendConfig}),n&&a.jsx(jt,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(i==null?void 0:i.active)!==!1&&a.jsx(Vt,{cursor:ct,formatter:ze,contentStyle:lt,labelFormatter:We,...i}),!!t.zoomingTool&&a.jsx(Pt,{dataKey:Fe,tickFormatter:h==null?void 0:h.formatter,...dt,...typeof t.zoomingTool=="object"?t.zoomingTool:{}}),Pe]})})});m.displayName="BarChart";try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Rt={title:"BarChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Je,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:o=>o.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:o=>`${o} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},p={},g={args:{measures:[{accessor:"users",color:"red"}],dataset:Qe}},f={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ze}},b={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},y={args:{dimensions:[{accessor:"name",formatter:o=>o.slice(0,3)}],measures:[{accessor:"users",formatter:o=>`${o/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},C={args:{dataset:[]}},v={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},w={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(o,c,u)=>{if(u.name==="February")return"red"}}]}},k={args:et},x={args:tt},A={args:at};var H,$,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(U=($=p.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,he,ue;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var me,pe,ge;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,be,ye;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...(ye=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Ce,ve,we;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(we=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var ke,xe,Ae;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: legendConfig
}`,...(Ae=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};const Et=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithNormalizedStacks","WithCustomTooltipConfig","WithCustomLegendConfig"],oa=Object.freeze(Object.defineProperty({__proto__:null,Default:p,LoadingPlaceholder:C,WithCustomColor:g,WithCustomLegendConfig:A,WithCustomTooltipConfig:x,WithDataLabels:b,WithFormatter:y,WithHighlightedMeasure:w,WithNormalizedStacks:k,WithReferenceLine:v,WithSecondaryDimension:f,__namedExportsOrder:Et,default:Rt},Symbol.toStringTag,{value:"Module"}));export{oa as C,p as D,C as L,g as W,f as a,b,y as c,k as d,v as e,w as f,x as g,A as h};
