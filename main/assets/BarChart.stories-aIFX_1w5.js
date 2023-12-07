import{c as Re,s as qe,a as Fe}from"./DemoProps-gxklhiCN.js";import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{T as O}from"./ThemingParameters-UghqSl-x.js";import{e as Ye}from"./index-Jm2lAFsC.js";import{r as V}from"./index-OjgoNOWw.js";import{d as Ee,C as ue,a as he}from"./defaults-6TEcj9ka.js";import{u as Me,B as Ke}from"./useCancelAnimationFallback-Rd_mPdd9.js";import{u as Ne,a as He,C as $e,X as R,c as q,Y as Xe,b as Ue}from"./YAxisTicks-TyGB6lQJ.js";import{u as Ge,C as Je}from"./ChartDataLabel-hNb_mpK4.js";import{u as Qe,t as Ze,a as ea,b as aa}from"./staticProps-YAKXJgHU.js";import{g as ta,u as sa,a as oa,r as ra,b as F}from"./useTooltipFormatter-dm0WVnn1.js";import{u as na}from"./useOnClickInternal-MGInwGCL.js";import{C as ia}from"./ChartContainer-YHkXgOdx.js";import{B as la}from"./Placeholder-L1vH04j7.js";import{B as ca,a as da,h as ua,e as ha,R as ma,T as pa,i as fa}from"./generateCategoricalChart-XOjaZWRK.js";import{u as ga}from"./withWebComponent-I1wSIv4y.js";import{u as ba}from"./useIsRTL-CC2qjreu.js";const ya=(t,l,u="")=>V.useMemo(()=>{let r=Array(l.length).fill(0),h=0;if(t instanceof Array&&l){const w=i=>l.map(c=>c.formatter(ue.getValueByDataKey(i,c.accessor,"")));t.map(w).forEach(i=>{i.forEach((c,p)=>{r[p]=Math.max(ta(c),r[p])})}),r=r.map(i=>Math.min(Ee,i)),h=r.reduce((i,c)=>i+c,0)}return u==="middle"?[r,{width:"auto"}]:[r,{marginLeft:h,maxWidth:`calc(100% - ${h+8}px)`}]},[t,l,u]),Ca={formatter:he},va={formatter:he,opacity:1},ka=t=>({payload:l})=>ue.getValueByDataKey(l,t),A=V.forwardRef((t,l)=>{var B,W;const{loading:u,dataset:r,noLegend:h,noAnimation:w,tooltipConfig:m,onDataPointClick:i,onLegendClick:c,onClick:p,style:me,className:pe,slot:fe,syncId:ge,ChartPlaceholder:be,children:ye,...Ce}=t,a={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:O.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...t.chartConfig},s=a.referenceLine,{dimensions:j,measures:S}=sa(t.dimensions,t.measures,Ca,va),ve=oa(S),d=j[0],{primaryMeasure:D,secondaryMeasure:ke}=ra(S,(B=a==null?void 0:a.secondYAxis)==null?void 0:B.dataKey),xe=S.map(({accessor:e})=>e),I=a.secondYAxis?xe.findIndex(e=>{var n;return e===((n=a.secondYAxis)==null?void 0:n.dataKey)}):0,[Ae,T]=ga(l),we=Qe(c),Se=Ge(d),De=V.useCallback((e,n,L)=>{if(e&&i){const _=e.value.length?e.value[1]-e.value[0]:e.value;i(Ye(L,{dataKey:Object.keys(e).filter(P=>P!=="value").find(P=>e[P]===_),value:_,payload:e.payload,dataIndex:n}))}},[i]),Le=na(p),_e=(r==null?void 0:r.length)>30,je=d==null?void 0:d.accessor,[Ie,Pe]=ya(r,j,a.legendPosition),Ve=Ne(a.margin,a.zoomingTool),[Te]=He(T,1),z=ba(T),{isMounted:ze,handleBarAnimationStart:Be,handleBarAnimationEnd:We}=Me(w),{chartConfig:wa,dimensions:Sa,measures:Da,...Oe}=Ce;return o.jsx(ia,{dataset:r,loading:u,Placeholder:be??la,ref:Ae,style:me,className:pe,slot:fe,resizeDebounce:a.resizeDebounce,...Oe,children:o.jsxs(Ke,{syncId:ge,onClick:Le,stackOffset:"sign",margin:Ve,layout:"vertical",data:r,barGap:a.barGap,className:typeof i=="function"||typeof p=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&o.jsx(R,{interval:0,type:"number",tick:o.jsx(q,{config:D}),axisLine:a.xAxisVisible,tickLine:Ze,tickFormatter:D==null?void 0:D.formatter,height:Te,reversed:z,...a.xAxisConfig}),((W=a.secondYAxis)==null?void 0:W.dataKey)&&o.jsx(R,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${I%11+1})`},tick:o.jsx(q,{config:ke,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${I%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${I%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),a.yAxisVisible&&j.map((e,n)=>o.jsx(Xe,{interval:(e==null?void 0:e.interval)??(_e?"preserveStart":0),type:"category",dataKey:e.accessor,tick:o.jsx(Ue,{config:e}),tickLine:n<1,axisLine:n<1,yAxisId:n,width:Ie[n],allowDuplicatedCategory:n===0,orientation:z?"right":"left",...a.yAxisConfig},e.accessor)),ze&&S.map((e,n)=>o.jsxs(ca,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,barSize:e.width,onClick:De,isAnimationActive:w===!1,onAnimationStart:Be,onAnimationEnd:We,children:[o.jsx(da,{data:r,valueAccessor:ka(e.accessor),content:o.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),r.map((L,_)=>o.jsx(ua,{fill:F(e,L,n),stroke:F(e,L,n)},_))]},e.accessor)),!h&&o.jsx(ha,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:we,wrapperStyle:Pe}),s&&o.jsx(ma,{...s,stroke:(s==null?void 0:s.color)??(s==null?void 0:s.stroke),x:(s==null?void 0:s.value)??(s==null?void 0:s.x),label:s==null?void 0:s.label}),(m==null?void 0:m.active)!==!1&&o.jsx(pa,{cursor:ea,formatter:ve,contentStyle:aa,labelFormatter:Se,...m}),a.zoomingTool&&o.jsx(fa,{y:10,dataKey:je,tickFormatter:d==null?void 0:d.formatter,stroke:O.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});A.defaultProps={noLegend:!1,noAnimation:!1};A.displayName="BarChart";try{A.displayName="BarChart",A.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:"dimensions",required:!0,type:{name:"DimensionConfig[]"}},measures:{defaultValue:null,description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:"measures",required:!0,type:{name:"MeasureConfig[]"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},noLegend:{defaultValue:{value:"false"},description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:{value:"false"},description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"ICartesianChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const xa={title:"BarChart",component:A,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Re,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},f={},g={args:{measures:[{accessor:"users",color:"red"}],dataset:qe}},b={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},y={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},C={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},v={args:{dataset:[]}},k={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},x={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(t,l,u)=>{if(u.name==="February")return"red"}}]}};var Y,E,M;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var K,N,H;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(H=(N=g.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,X,U;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(X=b.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var G,J,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ne,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Aa=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"],Ka=Object.freeze(Object.defineProperty({__proto__:null,Default:f,LoadingPlaceholder:v,WithCustomColor:g,WithDataLabels:y,WithFormatter:C,WithHighlightedMeasure:x,WithReferenceLine:k,WithSecondaryDimension:b,__namedExportsOrder:Aa,default:xa},Symbol.toStringTag,{value:"Module"}));export{Ka as C,f as D,v as L,g as W,b as a,y as b,C as c,k as d,x as e};
