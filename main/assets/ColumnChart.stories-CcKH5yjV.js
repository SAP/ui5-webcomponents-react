import{c as ie,s as Ye,a as We}from"./DemoProps-BWWtsAFv.js";import{j as o}from"./ManagedStyles-CGOl3myG.js";import{T as h}from"./ThemingParameters--AGRs54p.js";import{e as Ee}from"./index-CBpU8qq5.js";import{r as q}from"./index-Dl6G-zuu.js";import{C as Fe,a as le}from"./defaults-BTkR9Ben.js";import{u as Be,B as Me}from"./useCancelAnimationFallback-BCESPdWS.js";import{u as He,a as Ke,C as $e,X as Ue,c as Xe,Y as T,b as z}from"./YAxisTicks-DrXRhcXe.js";import{u as Ge,C as Je}from"./ChartDataLabel-Cxt4uv0J.js";import{u as Qe,t as Ze,a as et,b as tt}from"./staticProps-CjaVosBc.js";import{u as at}from"./useLongestYAxisLabel-KtewmxvT.js";import{u as ot}from"./useOnClickInternal-lyLIrhui.js";import{u as nt,a as rt,r as st,b as R}from"./useTooltipFormatter-CJRVrhWK.js";import{C as it}from"./ChartContainer-BiTRorhU.js";import{C as lt}from"./react-content-loader.es-CRTrDzHi.js";import{B as ct,a as dt,e as ht,d as ut,R as mt,T as pt,h as gt}from"./generateCategoricalChart-CILERUev.js";import{u as ft}from"./withWebComponent-M0bhuh56.js";import{u as yt}from"./useIsRTL-LaNBLF-n.js";import"./_baseForOwn-DFjKyXZi.js";import"./isString-B_cEKuVX.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-DRxb5hvO.js";import"./index-BqjUyJKr.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-z_6XcBmn.js";import"./i18nBundle-Bsmczzvl.js";import"./Boot-Cnne3s27.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./useStylesheet-CxAEQokk.js";import"./throttle-ClB5v_5B.js";import"./index-DJzcDS_W.js";import"./iframe-CX1kMpsI.js";import"../sb-preview/runtime.js";import"./Label-CbTMDkBb.js";import"./UI5Element-tLl76uRl.js";import"./CustomElementsScopeUtils-B75AoQkl.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BS_6etQn.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./isPlainObject-1lSDzB4t.js";import"./mapValues-BvzalXkB.js";import"./utils-CeXI0Hi-.js";import"./directionChange-BWsY0llq.js";const u=t=>o.jsxs(lt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:h.sapContent_ImagePlaceholderBackground,foregroundColor:h.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:h.sapContent_DisabledOpacity,...t,children:[o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const bt={formatter:le},Ct={formatter:le,opacity:1},vt=t=>({payload:A})=>Fe.getValueByDataKey(A,t),l=q.forwardRef((t,A)=>{var V,L;const{loading:ce,dataset:s,noLegend:de,noAnimation:D,tooltipConfig:m,onDataPointClick:p,onLegendClick:he,onClick:I,style:ue,className:me,slot:pe,ChartPlaceholder:ge,syncId:fe,children:ye,...be}=t,a={yAxisVisible:!1,xAxisVisible:!0,gridStroke:h.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...t.chartConfig},{referenceLine:n}=a,{dimensions:P,measures:d}=nt(t.dimensions,t.measures,bt,Ct),Ce=rt(d),[ve,we]=at(s,d,a.legendPosition),i=P[0],{primaryMeasure:ke,secondaryMeasure:xe}=st(d,(V=a==null?void 0:a.secondYAxis)==null?void 0:V.dataKey),Ae=Ge(i),[Se,j]=ft(A),_e=d.map(({accessor:e})=>e),S=a.secondYAxis?_e.findIndex(e=>{var r;return e===((r=a.secondYAxis)==null?void 0:r.dataKey)}):0,De=Qe(he),Ie=q.useCallback((e,r,g)=>{e&&p&&p(Ee(g,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:r,payload:e.payload}))},[p]),Pe=ot(I),je=(s==null?void 0:s.length)>30,Ve=i==null?void 0:i.accessor,Le=He(a.margin,a.zoomingTool),qe=Ke(j,t.dimensions.length),_=yt(j),{chartConfig:wt,dimensions:kt,measures:xt,...Te}=be,{isMounted:ze,handleBarAnimationStart:Re,handleBarAnimationEnd:Ne}=Be(D);return o.jsx(it,{dataset:s,loading:ce,Placeholder:ge??u,ref:Se,style:ue,className:me,slot:pe,resizeDebounce:a.resizeDebounce,...Te,children:o.jsxs(Me,{syncId:fe,onClick:Pe,stackOffset:"sign",margin:Le,data:s,barGap:a.barGap,className:typeof p=="function"||typeof I=="function"?"has-click-handler":void 0,children:[o.jsx($e,{vertical:a.gridVertical,horizontal:a.gridHorizontal,stroke:a.gridStroke}),a.xAxisVisible&&P.map((e,r)=>o.jsx(Ue,{dataKey:e.accessor,xAxisId:r,interval:(e==null?void 0:e.interval)??(je?"preserveStart":0),tick:o.jsx(Xe,{config:e}),tickLine:r<1,axisLine:r<1,height:qe[r],allowDuplicatedCategory:r===0,reversed:_,...a.xAxisConfig},e.accessor)),o.jsx(T,{orientation:_===!0?"right":"left",axisLine:a.yAxisVisible,tickLine:Ze,yAxisId:"left",interval:0,tick:o.jsx(z,{config:ke}),width:ve,...a.yAxisConfig}),((L=a.secondYAxis)==null?void 0:L.dataKey)&&o.jsx(T,{dataKey:a.secondYAxis.dataKey,axisLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},tick:o.jsx(z,{config:xe,secondYAxisConfig:{color:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`}}),tickLine:{stroke:a.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},label:{value:a.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:_===!0?"left":"right",yAxisId:"right",interval:0,...a.secondYAxisConfig}),ze&&d.map((e,r)=>{var g;return o.jsxs(ct,{yAxisId:((g=a.secondYAxis)==null?void 0:g.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${r%11+1})`,barSize:e.width,onClick:Ie,isAnimationActive:D===!1,onAnimationStart:Re,onAnimationEnd:Ne,children:[o.jsx(dt,{data:s,valueAccessor:vt(e.accessor),content:o.jsx(Je,{config:e,chartType:"column",position:"insideTop"})}),s.map((c,Oe)=>o.jsx(ht,{fill:R(e,c,r),stroke:R(e,c,r)},Oe))]},e.accessor)}),!de&&o.jsx(ut,{verticalAlign:a.legendPosition,align:a.legendHorizontalAlign,onClick:De,wrapperStyle:we}),n&&o.jsx(mt,{...n,stroke:(n==null?void 0:n.color)??(n==null?void 0:n.stroke),y:(n==null?void 0:n.value)??(n==null?void 0:n.y),yAxisId:(n==null?void 0:n.yAxisId)??"left",label:n==null?void 0:n.label}),(m==null?void 0:m.active)!==!1&&o.jsx(pt,{cursor:et,formatter:Ce,contentStyle:tt,labelFormatter:Ae,...m}),a.zoomingTool&&o.jsx(gt,{y:10,dataKey:Ve,tickFormatter:i==null?void 0:i.formatter,stroke:h.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});l.defaultProps={noLegend:!1,noAnimation:!1};l.displayName="ColumnChart";try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{dimensions:{defaultValue:null,description:`An array of config objects. Each object will define one dimension of the chart.

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
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const fa={title:"ColumnChart",component:l,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ie,dimensions:[{accessor:"name",formatter:t=>`${t} 2019`}],measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},f={},y={args:{measures:[{accessor:"users",color:"red"}],dataset:Ye}},b={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:We}},C={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ie}},v={args:{dimensions:[{accessor:"name",formatter:t=>t.slice(0,3)}],measures:[{accessor:"users",formatter:t=>`${t/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},w={args:{dataset:[]}},k={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},x={args:{measures:[{accessor:"users",label:"Users",formatter:t=>t.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:t=>`${t} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:t=>{if(t>750)return"red"}}]}};var N,O,Y;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(Y=(O=f.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var W,E,F;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(F=(E=y.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,M,H;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var K,$,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,G,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const ya=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{f as Default,w as LoadingPlaceholder,y as WithCustomColor,v as WithFormatter,x as WithHighlightedMeasure,k as WithReferenceLine,b as WithSecondaryDimension,C as WithStacks,ya as __namedExportsOrder,fa as default};
