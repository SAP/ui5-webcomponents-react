import{c as We,s as Fe,a as Ee}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{T as p}from"./ThemingParameters-DOkJX3Ed.js";import{e as Ne}from"./index-C-Zfmu7Z.js";import{r as q}from"./index-RYns6xqu.js";import{d as Ye,C as ue,u as Me,t as Ke,a as He,b as $e,c as me}from"./staticProps-C5MG_lYS.js";import{u as Ue,B as Xe}from"./useCancelAnimationFallback-B3_8jRmF.js";import{u as Ge,a as Je,C as Qe,X as W,c as F,Y as Ze,b as et}from"./YAxisTicks-CzSBFcRz.js";import{u as tt,C as at}from"./ChartDataLabel-Cn1G0s9V.js";import{g as ot,u as nt,a as rt,r as st,b as E}from"./useTooltipFormatter-Bh1E1jcm.js";import{u as it}from"./useOnClickInternal-CrvD_ZAc.js";import{m as lt,B as ct,g as dt,o as ht,n as ut,R as mt,T as pt,p as gt}from"./ChartContainer-C1W1qYxY.js";import{C as ft}from"./react-content-loader.es-BcmDwNEo.js";import{d as yt}from"./withWebComponent-BI8vCDsY.js";import{u as bt}from"./useIsRTL-DOJWvUzy.js";import"./_getPrototype-B0L0C3AT.js";import"./isPlainObject-CkURvjQU.js";import"./_baseUniq-DGDOfdbw.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./debounce-BszCn3T9.js";import"./index-CtVrCvEM.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./utils-D0srJWpX.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BBgZv15h.js";import"./BusyIndicator-BnoGb-co.js";import"./i18nBundle-BIWfHXaq.js";import"./Keys-F_3Gvx0K.js";import"./Label-DiR341eU.js";import"./i18n-defaults-D-rFLjnS.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./class-map-CxhdjMwf.js";import"./index-CcQmYgD0.js";import"./directionChange-4ftox0My.js";const Ct=(o,c,u="")=>q.useMemo(()=>{let d=Array(c.length).fill(0),s=0;if(o instanceof Array&&c){const j=i=>c.map(l=>l.formatter(ue.getValueByDataKey(i,l.accessor,"")));o.map(j).forEach(i=>{i.forEach((l,g)=>{d[g]=Math.max(ot(l),d[g])})}),d=d.map(i=>Math.min(Ye,i)),s=d.reduce((i,l)=>i+l,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:s,maxWidth:`calc(100% - ${s+8}px)`}]},[o,c,u]),wt=()=>a.jsxs(ft,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:p.sapContent_ImagePlaceholderBackground,foregroundColor:p.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:p.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),vt={formatter:me},kt={formatter:me,opacity:1},xt=o=>({payload:c})=>ue.getValueByDataKey(c,o),m=q.forwardRef((o,c)=>{var R,O;const{loading:u,loadingDelay:d,dataset:s,noLegend:j,noAnimation:L,tooltipConfig:i,onDataPointClick:l,onLegendClick:g,onClick:T,style:pe,className:ge,slot:fe,syncId:ye,ChartPlaceholder:be,children:Ce,...we}=o,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:p.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...o.chartConfig},n=t.referenceLine,{dimensions:V,measures:f}=nt(o.dimensions,o.measures,vt,kt),ve=rt(f),h=V[0],{primaryMeasure:y,secondaryMeasure:ke}=st(f,(R=t==null?void 0:t.secondYAxis)==null?void 0:R.dataKey),xe=f.map(({accessor:e})=>e),_=t.secondYAxis?xe.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,[Ae,z]=yt(c),De=Me(g),Se=tt(h),Ie=q.useCallback((e,r,b)=>{if(e&&l){const C=e.value.length?e.value[1]-e.value[0]:e.value;l(Ne(b,{dataKey:Object.keys(e).filter(P=>P!=="value").find(P=>e[P]===C),value:C,payload:e.payload,dataIndex:r}))}},[l]),je=it(T),Le=(s==null?void 0:s.length)>30,Ve=h==null?void 0:h.accessor,[_e,Pe]=Ct(s,V,t.legendPosition),qe=Ge(t.margin,t.zoomingTool),[Te]=Je(z,1),B=bt(z),{isMounted:ze,handleBarAnimationStart:Be,handleBarAnimationEnd:Re}=Ue(L),{chartConfig:At,dimensions:Dt,measures:St,...Oe}=we;return a.jsx(lt,{dataset:s,loading:u,loadingDelay:d,Placeholder:be??wt,ref:Ae,style:pe,className:ge,slot:fe,resizeDebounce:t.resizeDebounce,...Oe,children:a.jsxs(Xe,{syncId:ye,onClick:je,stackOffset:"sign",margin:qe,layout:"vertical",data:s,barGap:t.barGap,className:typeof l=="function"||typeof T=="function"?"has-click-handler":void 0,children:[a.jsx(Qe,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&a.jsx(W,{interval:0,type:"number",tick:a.jsx(F,{config:y}),axisLine:t.xAxisVisible,tickLine:Ke,tickFormatter:y==null?void 0:y.formatter,height:Te,reversed:B,...t.xAxisConfig}),((O=t.secondYAxis)==null?void 0:O.dataKey)&&a.jsx(W,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},tick:a.jsx(F,{config:ke,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&V.map((e,r)=>a.jsx(Ze,{interval:(e==null?void 0:e.interval)??(Le?"preserveStart":0),type:"category",dataKey:e.accessor,tick:a.jsx(et,{config:e}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:_e[r],allowDuplicatedCategory:r===0,orientation:B?"right":"left",...t.yAxisConfig},e.reactKey)),ze&&f.map((e,r)=>a.jsxs(ct,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:Ie,isAnimationActive:!L,onAnimationStart:Be,onAnimationEnd:Re,children:[a.jsx(dt,{data:s,valueAccessor:xt(e.accessor),content:a.jsx(at,{config:e,chartType:"bar",position:"insideRight"})}),s.map((b,C)=>a.jsx(ht,{fill:E(e,b,r),stroke:E(e,b,r)},C))]},e.reactKey)),!j&&a.jsx(ut,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:De,wrapperStyle:Pe}),n&&a.jsx(mt,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),x:(n==null?void 0:n.value)??(n==null?void 0:n.x),label:n==null?void 0:n.label}),(i==null?void 0:i.active)!==!1&&a.jsx(pt,{cursor:He,formatter:ve,contentStyle:$e,labelFormatter:Se,...i}),t.zoomingTool&&a.jsx(gt,{y:10,dataKey:Ve,tickFormatter:h==null?void 0:h.formatter,stroke:p.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),Ce]})})});m.displayName="BarChart";try{m.displayName="BarChart",m.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
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
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:"Flag whether the chart should display a loading indicator.\n\nThis can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a `BusyIndicator` on top of the chart (in case the chart has already some data to display).",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:"loadingDelay",required:!1,type:{name:"number"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:'ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; }'}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const da={title:"BarChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:We,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:o=>o.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:o=>`${o} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},w={},v={args:{measures:[{accessor:"users",color:"red"}],dataset:Fe}},k={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ee}},x={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},A={args:{dimensions:[{accessor:"name",formatter:o=>o.slice(0,3)}],measures:[{accessor:"users",formatter:o=>`${o/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},S={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},I={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(o,c,u)=>{if(u.name==="February")return"red"}}]}};var N,Y,M;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(M=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var K,H,$;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...($=(H=v.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var U,X,G;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(X=k.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(re=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,he;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(de=I.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};const ha=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{w as Default,D as LoadingPlaceholder,v as WithCustomColor,x as WithDataLabels,A as WithFormatter,I as WithHighlightedMeasure,S as WithReferenceLine,k as WithSecondaryDimension,ha as __namedExportsOrder,da as default};
