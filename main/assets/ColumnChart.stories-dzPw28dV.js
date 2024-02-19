import{c as ie,s as We,a as Be}from"./DemoProps-gxklhiCN.js";import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{T as d}from"./ThemingParameters-UghqSl-x.js";import{e as Fe}from"./index-ENBflQbU.js";import{r as T}from"./index-OjgoNOWw.js";import{C as Ne,a as le}from"./defaults-aodX_hZG.js";import{u as Ee,B as Me}from"./useCancelAnimationFallback-RpzJxoo1.js";import{u as Ke,a as He,C as $e,X as Ue,c as Xe,Y as z,b as O}from"./YAxisTicks-Vk29NdX_.js";import{u as Ge,C as Je}from"./ChartDataLabel-DjseMl5P.js";import{u as Qe,t as Ze,a as et,b as tt}from"./staticProps-5PxpsJ6y.js";import{u as at}from"./useLongestYAxisLabel-4__vJASG.js";import{u as ot}from"./useOnClickInternal-0NwCcJNk.js";import{u as st,a as rt,r as nt,b as Y}from"./useTooltipFormatter-kX40mN-f.js";import{C as it}from"./ChartContainer-eYCyM2Ay.js";import{C as lt}from"./react-content-loader.es-MhslfaKA.js";import{B as ct,a as dt,e as mt,d as ut,R as ht,T as pt,h as gt}from"./generateCategoricalChart-ElqWv7fA.js";import{u as ft}from"./withWebComponent--kEkWNJH.js";import{u as Ct}from"./useIsRTL-OxgbF-6h.js";import"./_baseForOwn-a7AeJH13.js";import"./isString-F2o_0UD_.js";import"./tiny-invariant-csaaSLPr.js";import"./debounce-F9irgL9Y.js";import"./_baseUniq-_JZHYp0e.js";import"./index-4Xp3nZk1.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-1NWI3C8K.js";import"./i18nBundle-YvxCnun_.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./throttle-SW6qI-oX.js";import"./index-dEAEz2ho.js";import"./iframe-afcLpRFY.js";import"../sb-preview/runtime.js";import"./Label-z6oc8zzv.js";import"./UI5Element-oLeGfnU4.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-CQMo-g9a.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./utils-rNFQc6Ui.js";import"./directionChange-2yTxknTV.js";const _=a=>o.jsxs(lt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:d.sapContent_ImagePlaceholderBackground,foregroundColor:d.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:d.sapContent_DisabledOpacity,...a,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{_.displayName="ColumnChartPlaceholder",_.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const yt={formatter:le},bt={formatter:le,opacity:1},vt=a=>({payload:k})=>Ne.getValueByDataKey(k,a),m=T.forwardRef((a,k)=>{var P,V;const{loading:ce,dataset:n,noLegend:de,noAnimation:j,tooltipConfig:u,onDataPointClick:h,onLegendClick:me,onClick:D,style:ue,className:he,slot:pe,ChartPlaceholder:ge,syncId:fe,children:Ce,...ye}=a,t={yAxisVisible:!1,xAxisVisible:!0,gridStroke:d.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...a.chartConfig},{referenceLine:s}=t,{dimensions:I,measures:c}=st(a.dimensions,a.measures,yt,bt),be=rt(c),[ve,xe]=at(n,c,t.legendPosition),i=I[0],{primaryMeasure:Ae,secondaryMeasure:ke}=nt(c,(P=t==null?void 0:t.secondYAxis)==null?void 0:P.dataKey),we=Ge(i),[Se,L]=ft(k),_e=c.map(({accessor:e})=>e),w=t.secondYAxis?_e.findIndex(e=>{var r;return e===((r=t.secondYAxis)==null?void 0:r.dataKey)}):0,je=Qe(me),De=T.useCallback((e,r,p)=>{e&&h&&h(Fe(p,{dataKey:Object.keys(e).filter(l=>e.value.length?e[l]===e.value[1]-e.value[0]:e[l]===e.value&&l!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:r,payload:e.payload}))},[h]),Ie=ot(D),Le=(n==null?void 0:n.length)>30,Pe=i==null?void 0:i.accessor,Ve=Ke(t.margin,t.zoomingTool),Te=He(L,a.dimensions.length),S=Ct(L),{chartConfig:xt,dimensions:At,measures:kt,...ze}=ye,{isMounted:Oe,handleBarAnimationStart:Ye,handleBarAnimationEnd:Re}=Ee(j);return o.jsx(it,{dataset:n,loading:ce,Placeholder:ge??_,ref:Se,style:ue,className:he,slot:pe,resizeDebounce:t.resizeDebounce,...ze,children:o.jsxs(Me,{syncId:fe,onClick:Ie,stackOffset:"sign",margin:Ve,data:n,barGap:t.barGap,className:typeof h=="function"||typeof D=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&I.map((e,r)=>o.jsx(Ue,{dataKey:e.accessor,xAxisId:r,interval:(e==null?void 0:e.interval)??(Le?"preserveStart":0),tick:o.jsx(Xe,{config:e}),tickLine:r<1,axisLine:r<1,height:Te[r],allowDuplicatedCategory:r===0,reversed:S,...t.xAxisConfig},e.accessor)),o.jsx(z,{orientation:S===!0?"right":"left",axisLine:t.yAxisVisible,tickLine:Ze,yAxisId:"left",interval:0,tick:o.jsx(O,{config:Ae}),width:ve,...t.yAxisConfig}),((V=t.secondYAxis)==null?void 0:V.dataKey)&&o.jsx(z,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},tick:o.jsx(O,{config:ke,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:S===!0?"left":"right",yAxisId:"right",interval:0,...t.secondYAxisConfig}),Oe&&c.map((e,r)=>{var p;return o.jsxs(ct,{yAxisId:((p=t.secondYAxis)==null?void 0:p.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:De,isAnimationActive:j===!1,onAnimationStart:Ye,onAnimationEnd:Re,children:[o.jsx(dt,{data:n,valueAccessor:vt(e.accessor),content:o.jsx(Je,{config:e,chartType:"column",position:"insideTop"})}),n.map((l,qe)=>o.jsx(mt,{fill:Y(e,l,r),stroke:Y(e,l,r)},qe))]},e.accessor)}),!de&&o.jsx(ut,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:je,wrapperStyle:xe}),s&&o.jsx(ht,{...s,stroke:(s==null?void 0:s.color)??(s==null?void 0:s.stroke),y:(s==null?void 0:s.value)??(s==null?void 0:s.y),yAxisId:(s==null?void 0:s.yAxisId)??"left",label:s==null?void 0:s.label}),(u==null?void 0:u.active)!==!1&&o.jsx(pt,{cursor:et,formatter:be,contentStyle:tt,labelFormatter:we,...u}),t.zoomingTool&&o.jsx(gt,{y:10,dataKey:Pe,tickFormatter:i==null?void 0:i.formatter,stroke:d.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),Ce]})})});m.defaultProps={noLegend:!1,noAnimation:!1};m.displayName="ColumnChart";try{m.displayName="ColumnChart",m.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const fa={title:"ColumnChart",component:m,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ie,dimensions:[{accessor:"name",formatter:a=>`${a} 2019`}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},g={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:We}},C={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Be}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ie}},b={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},v={args:{dataset:[]}},x={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},A={args:{measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:a=>{if(a>750)return"red"}}]}};var R,q,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(W=(q=g.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,F,N;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var E,M,K;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(M=C.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var H,$,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=($=y.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ne;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ca=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{g as Default,v as LoadingPlaceholder,f as WithCustomColor,b as WithFormatter,A as WithHighlightedMeasure,x as WithReferenceLine,C as WithSecondaryDimension,y as WithStacks,Ca as __namedExportsOrder,fa as default};
