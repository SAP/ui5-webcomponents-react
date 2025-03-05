import{c as ie,s as Ye,a as Ee}from"./DemoProps-CtAguf8G.js";import{j as o}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{T as x}from"./ThemingParameters-DOkJX3Ed.js";import{e as We}from"./index-CBpU8qq5.js";import{r as q}from"./index-BP8_t0zE.js";import{C as Fe,a as le}from"./defaults-DtWWZuRl.js";import{u as Be,B as Ke}from"./useCancelAnimationFallback-CvtEtlLW.js";import{u as Me,a as He,C as $e,X as Ue,c as Xe,Y as T,b as z}from"./YAxisTicks-iWle2r9Y.js";import{u as Ge,C as Je}from"./ChartDataLabel-Ckk0UZEJ.js";import{u as Qe,t as Ze,a as et,b as tt,c as at}from"./staticProps-BcuDgkDZ.js";import{u as ot}from"./useLongestYAxisLabel-Dhd1I-z1.js";import{u as nt}from"./useOnClickInternal-Cyu2xiYx.js";import{u as rt,a as st,r as it,b as R}from"./useTooltipFormatter-lixUI8RY.js";import{C as lt}from"./ChartContainer-Bpl9REIT.js";import{C as ct}from"./react-content-loader.es-1lMwhoXk.js";import{B as dt,a as ht,e as ut,d as mt,R as pt,T as gt,h as ft}from"./generateCategoricalChart-CM9Rq6O2.js";import{u as yt}from"./withWebComponent-D63zXRZq.js";import{u as bt}from"./useIsRTL-85inLxow.js";import"./_baseForOwn-B3hW39GE.js";import"./isString-CadNZdQX.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BbzeZuBs.js";import"./index-TouoI-7c.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-B3GLB-7B.js";import"./i18nBundle-kZ6-2cpn.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useStylesheet-DfMTMFhn.js";import"./throttle-Cgcjdhlw.js";import"./index-Cj1pZIKL.js";import"./iframe-CR0up_Yh.js";import"../sb-preview/runtime.js";import"./Label-Cdlv07NW.js";import"./UI5Element-B2h7kErG.js";import"./CustomElementsScope-CE64eqAB.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-C_UMjLXx.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./utils-D8cetgVj.js";import"./directionChange-BWsY0llq.js";const h=t=>o.jsxs(ct,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:x.sapContent_ImagePlaceholderBackground,foregroundColor:x.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:x.sapContent_DisabledOpacity,...t,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{h.displayName="ColumnChartPlaceholder",h.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{h.displayName="ColumnChartPlaceholder",h.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const Ct={formatter:le},vt={formatter:le,opacity:1},wt=t=>({payload:A})=>Fe.getValueByDataKey(A,t),l=q.forwardRef((t,A)=>{var V,L;const{loading:ce,dataset:s,noLegend:de,noAnimation:P,tooltipConfig:u,onDataPointClick:m,onLegendClick:he,onClick:D,style:ue,className:me,slot:pe,ChartPlaceholder:ge,syncId:fe,children:ye,...be}=t,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:x.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...t.chartConfig},{referenceLine:n}=a,{dimensions:I,measures:d}=rt(t.dimensions,t.measures,Ct,vt),Ce=st(d),[ve,we]=ot(s,d,a.legendPosition),i=I[0],{primaryMeasure:ke,secondaryMeasure:xe}=it(d,(V=a==null?void 0:a.secondYAxis)==null?void 0:V.dataKey),Ae=Ge(i),[Se,j]=yt(A),_e=d.map(({accessor:e})=>e),S=a.secondYAxis?_e.findIndex(e=>{var r;return e===((r=a.secondYAxis)==null?void 0:r.dataKey)}):0,Pe=Qe(he),De=q.useCallback((e,r,p)=>{e&&m&&m(We(p,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:r,payload:e.payload}))},[m]),Ie=nt(D),je=(s==null?void 0:s.length)>30,Ve=i==null?void 0:i.accessor,Le=Me(a.margin,a.zoomingTool),qe=He(j,t.dimensions.length),_=bt(j),{chartConfig:kt,dimensions:xt,measures:At,...Te}=be,{isMounted:ze,handleBarAnimationStart:Re,handleBarAnimationEnd:Ne}=Be(P);return o.jsx(lt,{dataset:s,loading:ce,Placeholder:ge??h,ref:Se,style:ue,className:me,slot:pe,resizeDebounce:a.resizeDebounce,...Te,children:o.jsxs(Ke,{syncId:fe,onClick:Ie,stackOffset:"sign",margin:Le,data:s,barGap:a.barGap,className:typeof m=="function"||typeof D=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&I.map((e,r)=>o.jsx(Ue,{dataKey:e.accessor,xAxisId:r,interval:(e==null?void 0:e.interval)??(je?"preserveStart":0),tick:o.jsx(Xe,{config:e}),tickLine:r<1,axisLine:r<1,height:qe[r],allowDuplicatedCategory:r===0,reversed:_,...a.xAxisConfig},e.reactKey)),o.jsx(T,{orientation:_===!0?"right":"left",axisLine:a.yAxisVisible,tickLine:Ze,yAxisId:"left",interval:0,tick:o.jsx(z,{config:ke}),width:ve,...a.yAxisConfig}),((L=a.secondYAxis)==null?void 0:L.dataKey)&&o.jsx(T,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},tick:o.jsx(z,{config:xe,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:_===!0?"left":"right",yAxisId:"right",interval:0,...a.secondYAxisConfig}),ze&&d.map((e,r)=>{var p;return o.jsxs(dt,{yAxisId:((p=a.secondYAxis)==null?void 0:p.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:De,isAnimationActive:P===!1,onAnimationStart:Re,onAnimationEnd:Ne,children:[o.jsx(ht,{data:s,valueAccessor:wt(e.accessor),content:o.jsx(Je,{config:e,chartType:"column",position:"insideTop"})}),s.map((c,Oe)=>o.jsx(ut,{fill:R(e,c,r),stroke:R(e,c,r)},Oe))]},e.reactKey)}),!de&&o.jsx(mt,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:Pe,wrapperStyle:we}),n&&o.jsx(pt,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),y:(n==null?void 0:n.value)??(n==null?void 0:n.y),yAxisId:(n==null?void 0:n.yAxisId)??"left",label:n==null?void 0:n.label}),(u==null?void 0:u.active)!==!1&&o.jsx(gt,{cursor:et,formatter:Ce,contentStyle:tt,labelFormatter:Ae,...u}),a.zoomingTool&&o.jsx(ft,{dataKey:Ve,tickFormatter:i==null?void 0:i.formatter,...at}),ye]})})});l.defaultProps={noLegend:!1,noAnimation:!1};l.displayName="ColumnChart";try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const fa={title:"ColumnChart",component:l,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ie,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},g={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:Ye}},y={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ee}},b={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ie}},C={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},v={args:{dataset:[]}},w={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},k={args:{measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:t=>{if(t>750)return"red"}}]}};var N,O,Y;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(Y=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var E,W,F;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(F=(W=f.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var B,K,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(K=y.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var H,$,U;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
    dataset: complexDataSet
  }
}`,...(U=($=b.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    }]
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString()
    }, {
      accessor: 'sessions',
      label: 'Active Sessions',
      formatter: val => \`\${val} sessions\`,
      hideDataLabel: true
    }, {
      accessor: 'volume',
      label: 'Vol.',
      highlightColor: value => {
        if (value > 750) {
          return 'red';
        }
      }
    }]
  }
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const ya=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{g as Default,v as LoadingPlaceholder,f as WithCustomColor,C as WithFormatter,k as WithHighlightedMeasure,w as WithReferenceLine,y as WithSecondaryDimension,b as WithStacks,ya as __namedExportsOrder,fa as default};
