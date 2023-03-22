import{c as le,s as Be,a as Fe}from"./DemoProps-9cd0a46b.js";import{a as _,j as o}from"./jsx-runtime-670450c2.js";import{T as y}from"./ThemingParameters-f4b4144e.js";import{e as Me}from"./index-99d317a4.js";import{r as z}from"./index-f1f749bf.js";import{g as Ne,d as ce}from"./defaults-96aeec83.js";import{u as Ee,B as Ke}from"./useCancelAnimationFallback-468a03d9.js";import{u as He,a as $e,C as Ue,X as Xe,c as Ge,Y,b as q}from"./YAxisTicks-93e3f04d.js";import{u as Je,C as Qe}from"./ChartDataLabel-804afb6f.js";import{u as Ze,t as ea,a as aa,b as ta}from"./staticProps-9dd6f0f9.js";import{u as oa}from"./useLongestYAxisLabel-a1fd2fb2.js";import{u as sa}from"./useOnClickInternal-d27d7c1e.js";import{u as ra,a as na,r as ia,g as R}from"./useTooltipFormatter-81208254.js";import{C as la}from"./ChartContainer-f30244b6.js";import{C as ca}from"./react-content-loader.es-de0c8b5a.js";import{B as da,b as ua,C as ha,L as ma,R as pa,T as ga,a as fa}from"./generateCategoricalChart-149f8f71.js";import{u as ba}from"./withWebComponent-65cd39a0.js";import{u as ya}from"./debounce-2c3bc435.js";const D=t=>_(ca,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:y.sapContent_ImagePlaceholderBackground,foregroundColor:y.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:y.sapContent_DisabledOpacity,...t,children:[o("rect",{x:"10",y:"135",width:"135",height:"1"}),o("rect",{x:"20",y:"50",width:"15",height:"85"}),o("rect",{x:"40",y:"18",width:"15",height:"117"}),o("rect",{x:"60",y:"68",width:"15",height:"67"}),o("rect",{x:"80",y:"60",width:"15",height:"75"}),o("rect",{x:"100",y:"10",width:"15",height:"125"}),o("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{D.displayName="ColumnChartPlaceholder",D.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const Ca={formatter:ce},va={formatter:ce,opacity:1},Aa=t=>({payload:w})=>Ne(w,t),C=z.forwardRef((t,w)=>{var T,O;const{loading:de,dataset:n,noLegend:ue,noAnimation:I,tooltipConfig:v,onDataPointClick:A,onLegendClick:he,onClick:L,style:me,className:pe,slot:ge,ChartPlaceholder:fe,syncId:be,children:ye,...Ce}=t,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:y.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...t.chartConfig},{referenceLine:s}=a,{dimensions:P,measures:c}=ra(t.dimensions,t.measures,Ca,va),ve=na(c),[Ae,ke]=oa(n,c),i=P[0],{primaryMeasure:we,secondaryMeasure:xe}=ia(c,(T=a==null?void 0:a.secondYAxis)==null?void 0:T.dataKey),Se=Je(i),[_e,V]=ba(w),De=c.map(({accessor:e})=>e),x=a.secondYAxis?De.findIndex(e=>{var r;return e===((r=a.secondYAxis)==null?void 0:r.dataKey)}):0,Ie=Ze(he),Le=z.useCallback((e,r,k)=>{e&&A&&A(Me(k,{dataKey:Object.keys(e).filter(l=>e.value.length?e[l]===e.value[1]-e.value[0]:e[l]===e.value&&l!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:r,payload:e.payload}))},[A]),Pe=sa(L),Ve=(n==null?void 0:n.length)>30,Te=i==null?void 0:i.accessor,Oe=He(a.margin,a.zoomingTool),ze=$e(V,t.dimensions.length),S=ya(V),{chartConfig:xa,dimensions:Sa,measures:_a,...Ye}=Ce,{isMounted:qe,handleBarAnimationStart:Re,handleBarAnimationEnd:We}=Ee(I);return o(la,{dataset:n,loading:de,Placeholder:fe??D,ref:_e,style:me,className:pe,slot:ge,resizeDebounce:a.resizeDebounce,...Ye,children:_(Ke,{syncId:be,onClick:Pe,stackOffset:"sign",margin:Oe,data:n,barGap:a.barGap,className:typeof A=="function"||typeof L=="function"?"has-click-handler":void 0,children:[o(Ue,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&P.map((e,r)=>o(Xe,{dataKey:e.accessor,xAxisId:r,interval:(e==null?void 0:e.interval)??(Ve?"preserveStart":0),tick:o(Ge,{config:e}),tickLine:r<1,axisLine:r<1,height:ze[r],allowDuplicatedCategory:r===0,reversed:S,...a.xAxisConfig},e.accessor)),o(Y,{orientation:S===!0?"right":"left",axisLine:a.yAxisVisible,tickLine:ea,yAxisId:"left",interval:0,tick:o(q,{config:we}),width:Ae,...a.yAxisConfig}),((O=a.secondYAxis)==null?void 0:O.dataKey)&&o(Y,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${x%11+1})`},tick:o(q,{config:xe,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${x%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${x%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:S===!0?"left":"right",yAxisId:"right",interval:0,...a.secondYAxisConfig}),qe&&c.map((e,r)=>{var k;return _(da,{yAxisId:((k=a.secondYAxis)==null?void 0:k.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:Le,isAnimationActive:I===!1,onAnimationStart:Re,onAnimationEnd:We,children:[o(ua,{data:n,valueAccessor:Aa(e.accessor),content:o(Qe,{config:e,chartType:"column",position:"insideTop"})}),n.map((l,je)=>o(ha,{fill:R(e,l,r),stroke:R(e,l,r)},je))]},e.accessor)}),!ue&&o(ma,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:Ie,wrapperStyle:ke}),s&&o(pa,{...s,stroke:(s==null?void 0:s.color)??(s==null?void 0:s.stroke),y:(s==null?void 0:s.value)??(s==null?void 0:s.y),yAxisId:(s==null?void 0:s.yAxisId)??"left",label:s==null?void 0:s.label}),(v==null?void 0:v.active)!==!1&&o(ga,{cursor:aa,formatter:ve,contentStyle:ta,labelFormatter:Se,...v}),a.zoomingTool&&o(fa,{y:10,dataKey:Te,tickFormatter:i==null?void 0:i.formatter,stroke:y.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});C.defaultProps={noLegend:!1,noAnimation:!1};C.displayName="ColumnChart";try{C.displayName="ColumnChart",C.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const ka={title:"ColumnChart",component:C,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:le,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},d={},u={args:{measures:[{accessor:"users",color:"red"}],dataset:Be}},h={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},m={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:le}},p={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},g={args:{dataset:[]}},f={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},b={args:{measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:t=>{if(t>750)return"red"}}]}};var W,j,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,M,N;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var E,K,H;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(K=h.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var $,U,X;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,J,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,oe,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ne,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const wa=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"],Ka=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:g,WithCustomColor:u,WithFormatter:p,WithHighlightedMeasure:b,WithReferenceLine:f,WithSecondaryDimension:h,WithStacks:m,__namedExportsOrder:wa,default:ka},Symbol.toStringTag,{value:"Module"}));export{Ka as C,d as D,g as L,u as W,h as a,m as b,p as c,f as d,b as e};
//# sourceMappingURL=ColumnChart.stories-0df6e4c0.js.map
