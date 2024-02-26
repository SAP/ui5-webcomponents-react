import{c as Re,s as qe,a as Fe}from"./DemoProps-gxklhiCN.js";import{j as s}from"./jsx-runtime-DtaoT6pD.js";import{T as O}from"./ThemingParameters-UghqSl-x.js";import{e as Ye}from"./index-ENBflQbU.js";import{r as V}from"./index-OjgoNOWw.js";import{d as Ee,C as me,a as ue}from"./defaults-T5rrwvLA.js";import{u as Me,B as Ke}from"./useCancelAnimationFallback-ddPWbbJJ.js";import{u as Ne,a as He,C as $e,X as R,c as q,Y as Xe,b as Ue}from"./YAxisTicks-a2qJWbL9.js";import{u as Ge,C as Je}from"./ChartDataLabel-JxnOspbq.js";import{u as Qe,t as Ze,a as ea,b as aa}from"./staticProps-5PxpsJ6y.js";import{g as ta,u as oa,a as sa,r as ra,b as F}from"./useTooltipFormatter-dkEMuHLP.js";import{u as na}from"./useOnClickInternal-0NwCcJNk.js";import{C as ia}from"./ChartContainer-D446oWas.js";import{B as la}from"./Placeholder-L1vH04j7.js";import{B as ca,a as da,e as ma,d as ua,R as ha,T as pa,h as fa}from"./generateCategoricalChart-UEMzGld5.js";import{u as ga}from"./withWebComponent-76pUbYpZ.js";import{u as ba}from"./useIsRTL-ztCGrKk1.js";import"./_baseForOwn-a7AeJH13.js";import"./isString-F2o_0UD_.js";import"./tiny-invariant-csaaSLPr.js";import"./debounce-F9irgL9Y.js";import"./_baseUniq-_JZHYp0e.js";import"./index-WhQEMAxe.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-tmBtHfec.js";import"./i18n-defaults-ZVLl3Qs7.js";import"./i18nBundle-kNlRgZSb.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./throttle-SW6qI-oX.js";import"./index-8eL0vHRz.js";import"./iframe-2XDoCofd.js";import"../sb-preview/runtime.js";import"./Label-FF9RWaAe.js";import"./UI5Element-PDhTXJ0K.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-fXrRGy4a.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./react-content-loader.es-MhslfaKA.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./utils-axAaCEhS.js";import"./directionChange-ei-C-idv.js";const ya=(t,l,m="")=>V.useMemo(()=>{let r=Array(l.length).fill(0),u=0;if(t instanceof Array&&l){const g=i=>l.map(c=>c.formatter(me.getValueByDataKey(i,c.accessor,"")));t.map(g).forEach(i=>{i.forEach((c,p)=>{r[p]=Math.max(ta(c),r[p])})}),r=r.map(i=>Math.min(Ee,i)),u=r.reduce((i,c)=>i+c,0)}return m==="middle"?[r,{width:"auto"}]:[r,{marginLeft:u,maxWidth:`calc(100% - ${u+8}px)`}]},[t,l,m]),Ca={formatter:ue},va={formatter:ue,opacity:1},ka=t=>({payload:l})=>me.getValueByDataKey(l,t),f=V.forwardRef((t,l)=>{var B,W;const{loading:m,dataset:r,noLegend:u,noAnimation:g,tooltipConfig:h,onDataPointClick:i,onLegendClick:c,onClick:p,style:he,className:pe,slot:fe,syncId:ge,ChartPlaceholder:be,children:ye,...Ce}=t,a={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:O.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...t.chartConfig},o=a.referenceLine,{dimensions:j,measures:b}=oa(t.dimensions,t.measures,Ca,va),ve=sa(b),d=j[0],{primaryMeasure:y,secondaryMeasure:ke}=ra(b,(B=a==null?void 0:a.secondYAxis)==null?void 0:B.dataKey),xe=b.map(({accessor:e})=>e),_=a.secondYAxis?xe.findIndex(e=>{var n;return e===((n=a.secondYAxis)==null?void 0:n.dataKey)}):0,[Ae,T]=ga(l),we=Qe(c),Se=Ge(d),De=V.useCallback((e,n,C)=>{if(e&&i){const v=e.value.length?e.value[1]-e.value[0]:e.value;i(Ye(C,{dataKey:Object.keys(e).filter(P=>P!=="value").find(P=>e[P]===v),value:v,payload:e.payload,dataIndex:n}))}},[i]),Le=na(p),Ie=(r==null?void 0:r.length)>30,je=d==null?void 0:d.accessor,[_e,Pe]=ya(r,j,a.legendPosition),Ve=Ne(a.margin,a.zoomingTool),[Te]=He(T,1),z=ba(T),{isMounted:ze,handleBarAnimationStart:Be,handleBarAnimationEnd:We}=Me(g),{chartConfig:xa,dimensions:Aa,measures:wa,...Oe}=Ce;return s.jsx(ia,{dataset:r,loading:m,Placeholder:be??la,ref:Ae,style:he,className:pe,slot:fe,resizeDebounce:a.resizeDebounce,...Oe,children:s.jsxs(Ke,{syncId:ge,onClick:Le,stackOffset:"sign",margin:Ve,layout:"vertical",data:r,barGap:a.barGap,className:typeof i=="function"||typeof p=="function"?"has-click-handler":void 0,children:[s.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&s.jsx(R,{interval:0,type:"number",tick:s.jsx(q,{config:y}),axisLine:a.xAxisVisible,tickLine:Ze,tickFormatter:y==null?void 0:y.formatter,height:Te,reversed:z,...a.xAxisConfig}),((W=a.secondYAxis)==null?void 0:W.dataKey)&&s.jsx(R,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},tick:s.jsx(q,{config:ke,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...a.secondXAxisConfig}),a.yAxisVisible&&j.map((e,n)=>s.jsx(Xe,{interval:(e==null?void 0:e.interval)??(Ie?"preserveStart":0),type:"category",dataKey:e.accessor,tick:s.jsx(Ue,{config:e}),tickLine:n<1,axisLine:n<1,yAxisId:n,width:_e[n],allowDuplicatedCategory:n===0,orientation:z?"right":"left",...a.yAxisConfig},e.accessor)),ze&&b.map((e,n)=>s.jsxs(ca,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${n%11+1})`,barSize:e.width,onClick:De,isAnimationActive:g===!1,onAnimationStart:Be,onAnimationEnd:We,children:[s.jsx(da,{data:r,valueAccessor:ka(e.accessor),content:s.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),r.map((C,v)=>s.jsx(ma,{fill:F(e,C,n),stroke:F(e,C,n)},v))]},e.accessor)),!u&&s.jsx(ua,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:we,wrapperStyle:Pe}),o&&s.jsx(ha,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),x:(o==null?void 0:o.value)??(o==null?void 0:o.x),label:o==null?void 0:o.label}),(h==null?void 0:h.active)!==!1&&s.jsx(pa,{cursor:ea,formatter:ve,contentStyle:aa,labelFormatter:Se,...h}),a.zoomingTool&&s.jsx(fa,{y:10,dataKey:je,tickFormatter:d==null?void 0:d.formatter,stroke:O.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});f.defaultProps={noLegend:!1,noAnimation:!1};f.displayName="BarChart";try{f.displayName="BarChart",f.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const bt={title:"BarChart",component:f,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Re,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},k={},x={args:{measures:[{accessor:"users",color:"red"}],dataset:qe}},A={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},w={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},S={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},L={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},I={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(t,l,m)=>{if(m.name==="February")return"red"}}]}};var Y,E,M;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:"{}",...(M=(E=k.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var K,N,H;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(H=(N=x.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,X,U;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(X=A.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var G,J,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,oe,se;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(se=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ne,ie;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const yt=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{k as Default,D as LoadingPlaceholder,x as WithCustomColor,w as WithDataLabels,S as WithFormatter,I as WithHighlightedMeasure,L as WithReferenceLine,A as WithSecondaryDimension,yt as __namedExportsOrder,bt as default};
