import{c as Be,s as Oe,a as We}from"./DemoProps-CtAguf8G.js";import{j as n}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{T as Ee}from"./ThemingParameters-DOkJX3Ed.js";import{e as Fe}from"./index-CBpU8qq5.js";import{r as j}from"./index-BP8_t0zE.js";import{d as Ne,C as de,a as he}from"./defaults-DvAfGmew.js";import{u as Ye,B as Me}from"./useCancelAnimationFallback-UPsKZG5o.js";import{u as Ke,a as He,C as $e,X as B,c as O,Y as Ue,b as Xe}from"./YAxisTicks-D_3yFO4H.js";import{u as Ge,C as Je}from"./ChartDataLabel-DDxY4ipw.js";import{u as Qe,t as Ze,a as et,b as tt,c as at}from"./staticProps-BcuDgkDZ.js";import{g as ot,u as nt,a as rt,r as st,b as W}from"./useTooltipFormatter-mhk7Ayx3.js";import{u as it}from"./useOnClickInternal-Cyu2xiYx.js";import{C as lt}from"./ChartContainer-BRpyRSEu.js";import{B as ct}from"./Placeholder-DJVHgKGa.js";import{B as dt,a as ht,e as ut,d as mt,R as pt,T as ft,h as gt}from"./generateCategoricalChart-BEmJTE8L.js";import{u as bt}from"./withWebComponent-D63zXRZq.js";import{u as yt}from"./useIsRTL-85inLxow.js";import"./_baseForOwn-B3hW39GE.js";import"./isString-CadNZdQX.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BbzeZuBs.js";import"./index-TouoI-7c.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-B3GLB-7B.js";import"./i18nBundle-kZ6-2cpn.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useStylesheet-DfMTMFhn.js";import"./throttle-Cgcjdhlw.js";import"./index-DPTY6Bnx.js";import"./iframe-Cx73w9cb.js";import"../sb-preview/runtime.js";import"./Label-Cdlv07NW.js";import"./UI5Element-B2h7kErG.js";import"./CustomElementsScope-CE64eqAB.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-C_UMjLXx.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./react-content-loader.es-1lMwhoXk.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./utils-D8cetgVj.js";import"./directionChange-BWsY0llq.js";const Ct=(a,l,u="")=>j.useMemo(()=>{let r=Array(l.length).fill(0),m=0;if(a instanceof Array&&l){const g=i=>l.map(c=>c.formatter(de.getValueByDataKey(i,c.accessor,"")));a.map(g).forEach(i=>{i.forEach((c,f)=>{r[f]=Math.max(ot(c),r[f])})}),r=r.map(i=>Math.min(Ne,i)),m=r.reduce((i,c)=>i+c,0)}return u==="middle"?[r,{width:"auto"}]:[r,{marginLeft:m,maxWidth:`calc(100% - ${m+8}px)`}]},[a,l,u]),vt={formatter:he},wt={formatter:he,opacity:1},kt=a=>({payload:l})=>de.getValueByDataKey(l,a),h=j.forwardRef((a,l)=>{var z,R;const{loading:u,dataset:r,noLegend:m,noAnimation:g,tooltipConfig:p,onDataPointClick:i,onLegendClick:c,onClick:f,style:ue,className:me,slot:pe,syncId:fe,ChartPlaceholder:ge,children:be,...ye}=a,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:Ee.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...a.chartConfig},o=t.referenceLine,{dimensions:I,measures:b}=nt(a.dimensions,a.measures,vt,wt),Ce=rt(b),d=I[0],{primaryMeasure:y,secondaryMeasure:ve}=st(b,(z=t==null?void 0:t.secondYAxis)==null?void 0:z.dataKey),we=b.map(({accessor:e})=>e),P=t.secondYAxis?we.findIndex(e=>{var s;return e===((s=t.secondYAxis)==null?void 0:s.dataKey)}):0,[ke,T]=bt(l),Ae=Qe(c),xe=Ge(d),Se=j.useCallback((e,s,C)=>{if(e&&i){const v=e.value.length?e.value[1]-e.value[0]:e.value;i(Fe(C,{dataKey:Object.keys(e).filter(_=>_!=="value").find(_=>e[_]===v),value:v,payload:e.payload,dataIndex:s}))}},[i]),De=it(f),Le=(r==null?void 0:r.length)>30,Ve=d==null?void 0:d.accessor,[Ie,Pe]=Ct(r,I,t.legendPosition),_e=Ke(t.margin,t.zoomingTool),[je]=He(T,1),q=yt(T),{isMounted:Te,handleBarAnimationStart:qe,handleBarAnimationEnd:ze}=Ye(g),{chartConfig:At,dimensions:xt,measures:St,...Re}=ye;return n.jsx(lt,{dataset:r,loading:u,Placeholder:ge??ct,ref:ke,style:ue,className:me,slot:pe,resizeDebounce:t.resizeDebounce,...Re,children:n.jsxs(Me,{syncId:fe,onClick:De,stackOffset:"sign",margin:_e,layout:"vertical",data:r,barGap:t.barGap,className:typeof i=="function"||typeof f=="function"?"has-click-handler":void 0,children:[n.jsx($e,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&n.jsx(B,{interval:0,type:"number",tick:n.jsx(O,{config:y}),axisLine:t.xAxisVisible,tickLine:Ze,tickFormatter:y==null?void 0:y.formatter,height:je,reversed:q,...t.xAxisConfig}),((R=t.secondYAxis)==null?void 0:R.dataKey)&&n.jsx(B,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%11+1})`},tick:n.jsx(O,{config:ve,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%11+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${P%11+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&I.map((e,s)=>n.jsx(Ue,{interval:(e==null?void 0:e.interval)??(Le?"preserveStart":0),type:"category",dataKey:e.accessor,tick:n.jsx(Xe,{config:e}),tickLine:s<1,axisLine:s<1,yAxisId:s,width:Ie[s],allowDuplicatedCategory:s===0,orientation:q?"right":"left",...t.yAxisConfig},e.reactKey)),Te&&b.map((e,s)=>n.jsxs(dt,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,barSize:e.width,onClick:Se,isAnimationActive:g===!1,onAnimationStart:qe,onAnimationEnd:ze,children:[n.jsx(ht,{data:r,valueAccessor:kt(e.accessor),content:n.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),r.map((C,v)=>n.jsx(ut,{fill:W(e,C,s),stroke:W(e,C,s)},v))]},e.reactKey)),!m&&n.jsx(mt,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:Ae,wrapperStyle:Pe}),o&&n.jsx(pt,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),x:(o==null?void 0:o.value)??(o==null?void 0:o.x),label:o==null?void 0:o.label}),(p==null?void 0:p.active)!==!1&&n.jsx(ft,{cursor:et,formatter:Ce,contentStyle:tt,labelFormatter:xe,...p}),t.zoomingTool&&n.jsx(gt,{dataKey:Ve,tickFormatter:d==null?void 0:d.formatter,...at}),be]})})});h.defaultProps={noLegend:!1,noAnimation:!1};h.displayName="BarChart";try{h.displayName="BarChart",h.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="BarChart",h.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const ba={title:"BarChart",component:h,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Be,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},w={},k={args:{measures:[{accessor:"users",color:"red"}],dataset:Oe}},A={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:We}},x={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},S={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},L={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},V={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(a,l,u)=>{if(u.name==="February")return"red"}}]}};var E,F,N;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(N=(F=w.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var Y,M,K;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(K=(M=k.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var H,$,U;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=($=A.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ya=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{w as Default,D as LoadingPlaceholder,k as WithCustomColor,x as WithDataLabels,S as WithFormatter,V as WithHighlightedMeasure,L as WithReferenceLine,A as WithSecondaryDimension,ya as __namedExportsOrder,ba as default};
