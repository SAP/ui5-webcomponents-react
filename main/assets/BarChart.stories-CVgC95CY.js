import{c as Oe,s as We,a as Ee}from"./DemoProps-BWWtsAFv.js";import{j as n}from"./ManagedStyles-B3AuKgSD.js";import{T as R}from"./ThemingParameters-DOkJX3Ed.js";import{e as Fe}from"./index-CBpU8qq5.js";import{r as j}from"./index-BP8_t0zE.js";import{d as Ne,C as he,a as ue}from"./defaults-CZWDvaZw.js";import{u as Ye,B as Me}from"./useCancelAnimationFallback-BaB1ONbT.js";import{u as Ke,a as He,C as $e,X as O,c as W,Y as Ue,b as Xe}from"./YAxisTicks-B8iTEUDh.js";import{u as Ge,C as Je}from"./ChartDataLabel-Cb1O5XYU.js";import{u as Qe,t as Ze,a as et,b as tt}from"./staticProps-3DmeqWTG.js";import{g as at,u as ot,a as nt,r as rt,b as E}from"./useTooltipFormatter-ZpZxFIhU.js";import{u as st}from"./useOnClickInternal-Cyu2xiYx.js";import{C as it}from"./ChartContainer-2C8-Hgap.js";import{B as lt}from"./Placeholder-C8hw1Nvt.js";import{B as ct,a as dt,e as ht,d as ut,R as mt,T as pt,h as ft}from"./generateCategoricalChart-D3dHb9i1.js";import{u as gt}from"./withWebComponent-B6oBGWld.js";import{u as bt}from"./useIsRTL-DlkNdqB2.js";import"./_baseForOwn-B3hW39GE.js";import"./isString-CadNZdQX.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BbzeZuBs.js";import"./index-6J2frV2o.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-DlmaUOWU.js";import"./i18nBundle-VOPn86Vc.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./useStylesheet-NUMS3nLe.js";import"./throttle-Cgcjdhlw.js";import"./index-CWCBzOP1.js";import"./iframe-fmJfv8Tc.js";import"../sb-preview/runtime.js";import"./Label-DpitxhM9.js";import"./UI5Element-BDMamLf2.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./parameters-bundle.css-CG8awnKl.js";import"./react-content-loader.es-VoBEIBwl.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./utils-BFMQrOqR.js";import"./directionChange-BWsY0llq.js";const yt=(a,l,u="")=>j.useMemo(()=>{let r=Array(l.length).fill(0),m=0;if(a instanceof Array&&l){const g=i=>l.map(c=>c.formatter(he.getValueByDataKey(i,c.accessor,"")));a.map(g).forEach(i=>{i.forEach((c,f)=>{r[f]=Math.max(at(c),r[f])})}),r=r.map(i=>Math.min(Ne,i)),m=r.reduce((i,c)=>i+c,0)}return u==="middle"?[r,{width:"auto"}]:[r,{marginLeft:m,maxWidth:`calc(100% - ${m+8}px)`}]},[a,l,u]),Ct={formatter:ue},vt={formatter:ue,opacity:1},wt=a=>({payload:l})=>he.getValueByDataKey(l,a),h=j.forwardRef((a,l)=>{var z,B;const{loading:u,dataset:r,noLegend:m,noAnimation:g,tooltipConfig:p,onDataPointClick:i,onLegendClick:c,onClick:f,style:me,className:pe,slot:fe,syncId:ge,ChartPlaceholder:be,children:ye,...Ce}=a,t={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:R.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...a.chartConfig},o=t.referenceLine,{dimensions:I,measures:b}=ot(a.dimensions,a.measures,Ct,vt),ve=nt(b),d=I[0],{primaryMeasure:y,secondaryMeasure:we}=rt(b,(z=t==null?void 0:t.secondYAxis)==null?void 0:z.dataKey),ke=b.map(({accessor:e})=>e),_=t.secondYAxis?ke.findIndex(e=>{var s;return e===((s=t.secondYAxis)==null?void 0:s.dataKey)}):0,[Ae,T]=gt(l),xe=Qe(c),Se=Ge(d),De=j.useCallback((e,s,C)=>{if(e&&i){const v=e.value.length?e.value[1]-e.value[0]:e.value;i(Fe(C,{dataKey:Object.keys(e).filter(P=>P!=="value").find(P=>e[P]===v),value:v,payload:e.payload,dataIndex:s}))}},[i]),Le=st(f),Ve=(r==null?void 0:r.length)>30,Ie=d==null?void 0:d.accessor,[_e,Pe]=yt(r,I,t.legendPosition),je=Ke(t.margin,t.zoomingTool),[Te]=He(T,1),q=bt(T),{isMounted:qe,handleBarAnimationStart:ze,handleBarAnimationEnd:Be}=Ye(g),{chartConfig:kt,dimensions:At,measures:xt,...Re}=Ce;return n.jsx(it,{dataset:r,loading:u,Placeholder:be??lt,ref:Ae,style:me,className:pe,slot:fe,resizeDebounce:t.resizeDebounce,...Re,children:n.jsxs(Me,{syncId:ge,onClick:Le,stackOffset:"sign",margin:je,layout:"vertical",data:r,barGap:t.barGap,className:typeof i=="function"||typeof f=="function"?"has-click-handler":void 0,children:[n.jsx($e,{vertical:t.gridVertical,horizontal:t.gridHorizontal,stroke:t.gridStroke}),t.xAxisVisible&&n.jsx(O,{interval:0,type:"number",tick:n.jsx(W,{config:y}),axisLine:t.xAxisVisible,tickLine:Ze,tickFormatter:y==null?void 0:y.formatter,height:Te,reversed:q,...t.xAxisConfig}),((B=t.secondYAxis)==null?void 0:B.dataKey)&&n.jsx(O,{dataKey:t.secondYAxis.dataKey,axisLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},tick:n.jsx(W,{config:we,secondYAxisConfig:{color:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`}}),tickLine:{stroke:t.secondYAxis.color??`var(--sapChart_OrderedColor_${_%11+1})`},label:{value:t.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...t.secondXAxisConfig}),t.yAxisVisible&&I.map((e,s)=>n.jsx(Ue,{interval:(e==null?void 0:e.interval)??(Ve?"preserveStart":0),type:"category",dataKey:e.accessor,tick:n.jsx(Xe,{config:e}),tickLine:s<1,axisLine:s<1,yAxisId:s,width:_e[s],allowDuplicatedCategory:s===0,orientation:q?"right":"left",...t.yAxisConfig},e.reactKey)),qe&&b.map((e,s)=>n.jsxs(ct,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${s%11+1})`,barSize:e.width,onClick:De,isAnimationActive:g===!1,onAnimationStart:ze,onAnimationEnd:Be,children:[n.jsx(dt,{data:r,valueAccessor:wt(e.accessor),content:n.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),r.map((C,v)=>n.jsx(ht,{fill:E(e,C,s),stroke:E(e,C,s)},v))]},e.reactKey)),!m&&n.jsx(ut,{verticalAlign:t.legendPosition,align:t.legendHorizontalAlign,onClick:xe,wrapperStyle:Pe}),o&&n.jsx(mt,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),x:(o==null?void 0:o.value)??(o==null?void 0:o.x),label:o==null?void 0:o.label}),(p==null?void 0:p.active)!==!1&&n.jsx(pt,{cursor:et,formatter:ve,contentStyle:tt,labelFormatter:Se,...p}),t.zoomingTool&&n.jsx(ft,{y:10,dataKey:Ie,tickFormatter:d==null?void 0:d.formatter,stroke:R.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});h.defaultProps={noLegend:!1,noAnimation:!1};h.displayName="BarChart";try{h.displayName="BarChart",h.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const ba={title:"BarChart",component:h,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Oe,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},w={},k={args:{measures:[{accessor:"users",color:"red"}],dataset:We}},A={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Ee}},x={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},S={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},L={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},V={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(a,l,u)=>{if(u.name==="February")return"red"}}]}};var F,N,Y;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(Y=(N=w.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var M,K,H;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(H=(K=k.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var $,U,X;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(U=A.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,oe,ne;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ne=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,se,ie;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=L.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,de;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const ya=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{w as Default,D as LoadingPlaceholder,k as WithCustomColor,x as WithDataLabels,S as WithFormatter,V as WithHighlightedMeasure,L as WithReferenceLine,A as WithSecondaryDimension,ya as __namedExportsOrder,ba as default};
