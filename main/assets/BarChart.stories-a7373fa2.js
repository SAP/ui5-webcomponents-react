import{c as Re,s as qe,a as Fe}from"./DemoProps-9cd0a46b.js";import{j as o}from"./jsx-runtime-5926aa06.js";import{T as W}from"./ThemingParameters-7e2e4e30.js";import{e as Ye}from"./index-99d317a4.js";import{r as P}from"./index-ebeaab24.js";import{d as Me,g as ue,a as he}from"./defaults-725a85d6.js";import{u as Ee,B as Ne}from"./useCancelAnimationFallback-2d054187.js";import{u as He,a as Ke,C as $e,X as R,b as q,Y as Xe,c as Ge}from"./YAxisTicks-5a21136b.js";import{u as Ue,C as Je}from"./ChartDataLabel-4c7fab65.js";import{u as Qe,t as Ze,a as ea,b as aa}from"./staticProps-411b051b.js";import{g as ta,u as sa,a as oa,r as ra,b as F}from"./useTooltipFormatter-95fc98ac.js";import{u as na}from"./useOnClickInternal-c48662e6.js";import{C as ia}from"./ChartContainer-15877e85.js";import{B as ca}from"./Placeholder-0503e054.js";import{B as la,L as da,C as ua,a as ha,R as ma,T as pa,b as ga}from"./generateCategoricalChart-535992a2.js";import{u as fa}from"./withWebComponent-d4224c1c.js";import{u as ba}from"./debounce-925f19e3.js";const ya=(t,d)=>P.useMemo(()=>{let l=Array(d.length).fill(0),n=0;if(t instanceof Array&&d){const L=i=>d.map(c=>c.formatter(ue(i,c.accessor,"")));t.map(L).forEach(i=>{i.forEach((c,k)=>{l[k]=Math.max(ta(c),l[k])})}),l=l.map(i=>Math.min(Me,i)),n=l.reduce((i,c)=>i+c,0)}return[l,{marginLeft:n,maxWidth:`calc(100% - ${n+8}px)`}]},[t,d]),Ca={formatter:he},va={formatter:he,opacity:1},ka=t=>({payload:d})=>ue(d,t),v=P.forwardRef((t,d)=>{var B,O;const{loading:l,dataset:n,noLegend:L,noAnimation:D,tooltipConfig:i,onDataPointClick:c,onLegendClick:k,onClick:T,style:me,className:pe,slot:ge,syncId:fe,ChartPlaceholder:be,children:ye,...Ce}=t,a={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:W.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...t.chartConfig},s=a.referenceLine,{dimensions:_,measures:A}=sa(t.dimensions,t.measures,Ca,va),ve=oa(A),u=_[0],{primaryMeasure:x,secondaryMeasure:ke}=ra(A,(B=a==null?void 0:a.secondYAxis)==null?void 0:B.dataKey),Ae=A.map(({accessor:e})=>e),j=a.secondYAxis?Ae.findIndex(e=>{var r;return e===((r=a.secondYAxis)==null?void 0:r.dataKey)}):0,[xe,V]=fa(d),we=Qe(k),Se=Ue(u),Le=P.useCallback((e,r,w)=>{if(e&&c){const S=e.value.length?e.value[1]-e.value[0]:e.value;c(Ye(w,{dataKey:Object.keys(e).filter(I=>I!=="value").find(I=>e[I]===S),value:S,payload:e.payload,dataIndex:r}))}},[c]),De=na(T),_e=(n==null?void 0:n.length)>30,je=u==null?void 0:u.accessor,[Ie,Pe]=ya(n,_),Te=He(a.margin,a.zoomingTool),[Ve]=Ke(V,1),z=ba(V),{isMounted:ze,handleBarAnimationStart:Be,handleBarAnimationEnd:Oe}=Ee(D),{chartConfig:wa,dimensions:Sa,measures:La,...We}=Ce;return o.jsx(ia,{dataset:n,loading:l,Placeholder:be??ca,ref:xe,style:me,className:pe,slot:ge,resizeDebounce:a.resizeDebounce,...We,children:o.jsxs(Ne,{syncId:fe,onClick:De,stackOffset:"sign",margin:Te,layout:"vertical",data:n,barGap:a.barGap,className:typeof c=="function"||typeof T=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&o.jsx(R,{interval:0,type:"number",tick:o.jsx(q,{config:x}),axisLine:a.xAxisVisible,tickLine:Ze,tickFormatter:x==null?void 0:x.formatter,height:Ve,reversed:z,...a.xAxisConfig}),((O=a.secondYAxis)==null?void 0:O.dataKey)&&o.jsx(R,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},tick:o.jsx(q,{config:ke,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),a.yAxisVisible&&_.map((e,r)=>o.jsx(Xe,{interval:(e==null?void 0:e.interval)??(_e?"preserveStart":0),type:"category",dataKey:e.accessor,tick:o.jsx(Ge,{config:e}),tickLine:r<1,axisLine:r<1,yAxisId:r,width:Ie[r],allowDuplicatedCategory:r===0,orientation:z?"right":"left",...a.yAxisConfig},e.accessor)),ze&&A.map((e,r)=>o.jsxs(la,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:Le,isAnimationActive:D===!1,onAnimationStart:Be,onAnimationEnd:Oe,children:[o.jsx(da,{data:n,valueAccessor:ka(e.accessor),content:o.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),n.map((w,S)=>o.jsx(ua,{fill:F(e,w,r),stroke:F(e,w,r)},S))]},e.accessor)),!L&&o.jsx(ha,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:we,wrapperStyle:Pe}),s&&o.jsx(ma,{...s,stroke:(s==null?void 0:s.color)??(s==null?void 0:s.stroke),x:(s==null?void 0:s.value)??(s==null?void 0:s.x),label:s==null?void 0:s.label}),(i==null?void 0:i.active)!==!1&&o.jsx(pa,{cursor:ea,formatter:ve,contentStyle:aa,labelFormatter:Se,...i}),a.zoomingTool&&o.jsx(ga,{y:10,dataKey:je,tickFormatter:u==null?void 0:u.formatter,stroke:W.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});v.defaultProps={noLegend:!1,noAnimation:!1};v.displayName="BarChart";try{v.displayName="BarChart",v.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const Aa={title:"BarChart",component:v,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Re,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},h={},m={args:{measures:[{accessor:"users",color:"red"}],dataset:qe}},p={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},g={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},f={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},b={args:{dataset:[]}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},C={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(t,d,l)=>{if(l.name==="February")return"red"}}]}};var Y,M,E;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(E=(M=h.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var N,H,K;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var $,X,G;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(X=p.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var U,J,Q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ne,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,le,de;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=C.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const xa=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"],Na=Object.freeze(Object.defineProperty({__proto__:null,Default:h,LoadingPlaceholder:b,WithCustomColor:m,WithDataLabels:g,WithFormatter:f,WithHighlightedMeasure:C,WithReferenceLine:y,WithSecondaryDimension:p,__namedExportsOrder:xa,default:Aa},Symbol.toStringTag,{value:"Module"}));export{Na as C,h as D,b as L,m as W,p as a,g as b,f as c,y as d,C as e};
//# sourceMappingURL=BarChart.stories-a7373fa2.js.map
