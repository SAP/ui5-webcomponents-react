import{c as ie,s as We,a as Be}from"./DemoProps-9cd0a46b.js";import{j as o}from"./jsx-runtime-5926aa06.js";import{T as y}from"./ThemingParameters-7e2e4e30.js";import{e as Fe}from"./index-99d317a4.js";import{r as T}from"./index-ebeaab24.js";import{g as Me,a as le}from"./defaults-91f1e758.js";import{u as Ne,B as Ee}from"./useCancelAnimationFallback-520e39ba.js";import{u as Ke,a as He,C as $e,X as Ue,b as Xe,Y as O,c as z}from"./YAxisTicks-4c875e27.js";import{u as Ge,C as Je}from"./ChartDataLabel-bba2ca1c.js";import{u as Qe,t as Ze,a as ea,b as aa}from"./staticProps-411b051b.js";import{u as ta}from"./useLongestYAxisLabel-431ed027.js";import{u as oa}from"./useOnClickInternal-c48662e6.js";import{u as sa,a as ra,r as na,b as Y}from"./useTooltipFormatter-313e6845.js";import{C as ia}from"./ChartContainer-b21e30f2.js";import{C as la}from"./react-content-loader.es-627d673d.js";import{B as ca,L as da,C as ua,a as ha,R as ma,T as pa,b as ga}from"./generateCategoricalChart-3a01f6e1.js";import{u as fa}from"./withWebComponent-884f99a7.js";import{u as ba}from"./debounce-c13310e6.js";const _=t=>o.jsxs(la,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:y.sapContent_ImagePlaceholderBackground,foregroundColor:y.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:y.sapContent_DisabledOpacity,...t,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{_.displayName="ColumnChartPlaceholder",_.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const ya={formatter:le},Ca={formatter:le,opacity:1},va=t=>({payload:k})=>Me(k,t),C=T.forwardRef((t,k)=>{var P,V;const{loading:ce,dataset:n,noLegend:de,noAnimation:j,tooltipConfig:v,onDataPointClick:x,onLegendClick:ue,onClick:D,style:he,className:me,slot:pe,ChartPlaceholder:ge,syncId:fe,children:be,...ye}=t,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:y.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...t.chartConfig},{referenceLine:s}=a,{dimensions:I,measures:c}=sa(t.dimensions,t.measures,ya,Ca),Ce=ra(c),[ve,xe]=ta(n,c),i=I[0],{primaryMeasure:Ae,secondaryMeasure:ke}=na(c,(P=a==null?void 0:a.secondYAxis)==null?void 0:P.dataKey),we=Ge(i),[Se,L]=fa(k),_e=c.map(({accessor:e})=>e),w=a.secondYAxis?_e.findIndex(e=>{var r;return e===((r=a.secondYAxis)==null?void 0:r.dataKey)}):0,je=Qe(ue),De=T.useCallback((e,r,A)=>{e&&x&&x(Fe(A,{dataKey:Object.keys(e).filter(l=>e.value.length?e[l]===e.value[1]-e.value[0]:e[l]===e.value&&l!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:r,payload:e.payload}))},[x]),Ie=oa(D),Le=(n==null?void 0:n.length)>30,Pe=i==null?void 0:i.accessor,Ve=Ke(a.margin,a.zoomingTool),Te=He(L,t.dimensions.length),S=ba(L),{chartConfig:ka,dimensions:wa,measures:Sa,...Oe}=ye,{isMounted:ze,handleBarAnimationStart:Ye,handleBarAnimationEnd:Re}=Ne(j);return o.jsx(ia,{dataset:n,loading:ce,Placeholder:ge??_,ref:Se,style:he,className:me,slot:pe,resizeDebounce:a.resizeDebounce,...Oe,children:o.jsxs(Ee,{syncId:fe,onClick:Ie,stackOffset:"sign",margin:Ve,data:n,barGap:a.barGap,className:typeof x=="function"||typeof D=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&I.map((e,r)=>o.jsx(Ue,{dataKey:e.accessor,xAxisId:r,interval:(e==null?void 0:e.interval)??(Le?"preserveStart":0),tick:o.jsx(Xe,{config:e}),tickLine:r<1,axisLine:r<1,height:Te[r],allowDuplicatedCategory:r===0,reversed:S,...a.xAxisConfig},e.accessor)),o.jsx(O,{orientation:S===!0?"right":"left",axisLine:a.yAxisVisible,tickLine:Ze,yAxisId:"left",interval:0,tick:o.jsx(z,{config:Ae}),width:ve,...a.yAxisConfig}),((V=a.secondYAxis)==null?void 0:V.dataKey)&&o.jsx(O,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},tick:o.jsx(z,{config:ke,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:S===!0?"left":"right",yAxisId:"right",interval:0,...a.secondYAxisConfig}),ze&&c.map((e,r)=>{var A;return o.jsxs(ca,{yAxisId:((A=a.secondYAxis)==null?void 0:A.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:De,isAnimationActive:j===!1,onAnimationStart:Ye,onAnimationEnd:Re,children:[o.jsx(da,{data:n,valueAccessor:va(e.accessor),content:o.jsx(Je,{config:e,chartType:"column",position:"insideTop"})}),n.map((l,qe)=>o.jsx(ua,{fill:Y(e,l,r),stroke:Y(e,l,r)},qe))]},e.accessor)}),!de&&o.jsx(ha,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:je,wrapperStyle:xe}),s&&o.jsx(ma,{...s,stroke:(s==null?void 0:s.color)??(s==null?void 0:s.stroke),y:(s==null?void 0:s.value)??(s==null?void 0:s.y),yAxisId:(s==null?void 0:s.yAxisId)??"left",label:s==null?void 0:s.label}),(v==null?void 0:v.active)!==!1&&o.jsx(pa,{cursor:ea,formatter:Ce,contentStyle:aa,labelFormatter:we,...v}),a.zoomingTool&&o.jsx(ga,{y:10,dataKey:Pe,tickFormatter:i==null?void 0:i.formatter,stroke:y.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),be]})})});C.defaultProps={noLegend:!1,noAnimation:!1};C.displayName="ColumnChart";try{C.displayName="ColumnChart",C.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"Props<string | number | (string | number)[], string | number> & { allowEscapeViewBox?: { x?: boolean; y?: boolean; }; reverseDirection?: { x?: boolean; y?: boolean; }; content?: ContentType<string | number | (string | number)[], string | number>; ... 14 more ...; useTranslate3d?: boolean; }"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const xa={title:"ColumnChart",component:C,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ie,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},d={},u={args:{measures:[{accessor:"users",color:"red"}],dataset:We}},h={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Be}},m={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ie}},p={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},g={args:{dataset:[]}},f={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},b={args:{measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:t=>{if(t>750)return"red"}}]}};var R,q,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,F,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,E,K;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(E=h.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var H,$,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,re,ne;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Aa=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"],Ea=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:g,WithCustomColor:u,WithFormatter:p,WithHighlightedMeasure:b,WithReferenceLine:f,WithSecondaryDimension:h,WithStacks:m,__namedExportsOrder:Aa,default:xa},Symbol.toStringTag,{value:"Module"}));export{Ea as C,d as D,g as L,u as W,h as a,m as b,p as c,f as d,b as e};
//# sourceMappingURL=ColumnChart.stories-bfae2339.js.map
