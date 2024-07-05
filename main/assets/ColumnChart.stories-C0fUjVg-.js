import{c as ne,s as Me,a as Re}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{T as d}from"./ThemingParameters-DOkJX3Ed.js";import{e as Fe}from"./index-D8PAbW1n.js";import{r as O}from"./index-DEe9W-hO.js";import{C as Ne,a as ce}from"./defaults-Btw_Hen_.js";import{u as Ve,B as $e}from"./useCancelAnimationFallback-Bz09jyU8.js";import{u as He,a as Ee,C as Xe,X as Ge,c as Ue,Y as W,b as T}from"./YAxisTicks-BrJM9QOp.js";import{u as qe,C as Je}from"./ChartDataLabel-Bk6t3z9U.js";import{u as Qe,t as Ze,a as es,b as ss}from"./staticProps-DsetRNqa.js";import{u as rs}from"./useLongestYAxisLabel-czM1mYxX.js";import{u as as}from"./useOnClickInternal-Chqq3b2P.js";import{u as os,a as ts,r as is,b as z}from"./useTooltipFormatter-BbYZwW2Y.js";import{C as ns}from"./ChartContainer-DnAI4uY3.js";import{C as cs}from"./react-content-loader.es-CK-1p032.js";import{B as ls,a as ms,e as ds,d as us,R as ps,T as hs,h as gs}from"./generateCategoricalChart-DnZ1xyjX.js";import{u as Cs}from"./withWebComponent-BxrD_3pN.js";import{u as fs}from"./useIsRTL-cgFvq9WG.js";import"./_baseForOwn-DVWQo5xw.js";import"./isString-C_Q1T2_B.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BqAhPu7p.js";import"./index-CkjElkqm.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-BQ1aH0X1.js";import"./i18nBundle-NJJr-Wgh.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./useStylesheet-BlIIJPI8.js";import"./I18nStore-DrHVTNpv.js";import"./throttle-B-28IFuh.js";import"./index-CnDxfN9a.js";import"./iframe-kiogWMGL.js";import"../sb-preview/runtime.js";import"./Label-BqwA1t1q.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-Cl7uVo8B.js";import"./utils-DgTsnvPN.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./directionChange-F0SVwOWF.js";const u=s=>a.jsxs(cs,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:d.sapContent_ImagePlaceholderBackground,foregroundColor:d.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:d.sapContent_DisabledOpacity,...s,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),a.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),a.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),a.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),a.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),a.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const xs={formatter:ce},ys={formatter:ce,opacity:1},As=s=>({payload:k})=>Ne.getValueByDataKey(k,s),l=O.forwardRef((s,k)=>{var Y,w;const{loading:le,dataset:i,noLegend:me,noAnimation:D,tooltipConfig:p,onDataPointClick:h,onLegendClick:de,onClick:I,style:ue,className:pe,slot:he,ChartPlaceholder:ge,syncId:Ce,children:fe,...xe}=s,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:d.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...s.chartConfig},{referenceLine:o}=r,{dimensions:L,measures:m}=os(s.dimensions,s.measures,xs,ys),ye=ts(m),[Ae,be]=rs(i,m,r.legendPosition),n=L[0],{primaryMeasure:ve,secondaryMeasure:_e}=is(m,(Y=r==null?void 0:r.secondYAxis)==null?void 0:Y.dataKey),ke=qe(n),[Se,P]=Cs(k),je=m.map(({accessor:e})=>e),S=r.secondYAxis?je.findIndex(e=>{var t;return e===((t=r.secondYAxis)==null?void 0:t.dataKey)}):0,De=Qe(de),Ie=O.useCallback((e,t,g)=>{e&&h&&h(Fe(g,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:t,payload:e.payload}))},[h]),Le=as(I),Pe=(i==null?void 0:i.length)>30,Ye=n==null?void 0:n.accessor,we=He(r.margin,r.zoomingTool),Oe=Ee(P,s.dimensions.length),j=fs(P),{chartConfig:bs,dimensions:vs,measures:_s,...We}=xe,{isMounted:Te,handleBarAnimationStart:ze,handleBarAnimationEnd:Ke}=Ve(D);return a.jsx(ns,{dataset:i,loading:le,Placeholder:ge??u,ref:Se,style:ue,className:pe,slot:he,resizeDebounce:r.resizeDebounce,...We,children:a.jsxs($e,{syncId:Ce,onClick:Le,stackOffset:"sign",margin:we,data:i,barGap:r.barGap,className:typeof h=="function"||typeof I=="function"?"has-click-handler":void 0,children:[a.jsx(Xe,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&L.map((e,t)=>a.jsx(Ge,{dataKey:e.accessor,xAxisId:t,interval:(e==null?void 0:e.interval)??(Pe?"preserveStart":0),tick:a.jsx(Ue,{config:e}),tickLine:t<1,axisLine:t<1,height:Oe[t],allowDuplicatedCategory:t===0,reversed:j,...r.xAxisConfig},e.reactKey)),a.jsx(W,{orientation:j===!0?"right":"left",axisLine:r.yAxisVisible,tickLine:Ze,yAxisId:"left",interval:0,tick:a.jsx(T,{config:ve}),width:Ae,...r.yAxisConfig}),((w=r.secondYAxis)==null?void 0:w.dataKey)&&a.jsx(W,{dataKey:r.secondYAxis.dataKey,axisLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},tick:a.jsx(T,{config:_e,secondYAxisConfig:{color:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`}}),tickLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},label:{value:r.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:j===!0?"left":"right",yAxisId:"right",interval:0,...r.secondYAxisConfig}),Te&&m.map((e,t)=>{var g;return a.jsxs(ls,{yAxisId:((g=r.secondYAxis)==null?void 0:g.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,barSize:e.width,onClick:Ie,isAnimationActive:!D,onAnimationStart:ze,onAnimationEnd:Ke,children:[a.jsx(ms,{data:i,valueAccessor:As(e.accessor),content:a.jsx(Je,{config:e,chartType:"column",position:"insideTop"})}),i.map((c,Be)=>a.jsx(ds,{fill:z(e,c,t),stroke:z(e,c,t)},Be))]},e.reactKey)}),!me&&a.jsx(us,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:De,wrapperStyle:be}),o&&a.jsx(ps,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),yAxisId:(o==null?void 0:o.yAxisId)??"left",label:o==null?void 0:o.label}),(p==null?void 0:p.active)!==!1&&a.jsx(hs,{cursor:es,formatter:ye,contentStyle:ss,labelFormatter:ke,...p}),r.zoomingTool&&a.jsx(gs,{y:10,dataKey:Ye,tickFormatter:n==null?void 0:n.formatter,stroke:d.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),fe]})})});l.displayName="ColumnChart";try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}const hr={title:"ColumnChart",component:l,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ne,dimensions:[{accessor:"name",formatter:s=>`${s} 2019`}],measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},C={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:Me}},x={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Re}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ne}},A={args:{dimensions:[{accessor:"name",formatter:s=>s.slice(0,3)}],measures:[{accessor:"users",formatter:s=>`${s/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dataset:[]}},v={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},_={args:{measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:s=>{if(s>750)return"red"}}]}};var K,B,M;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(M=(B=C.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,F,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(N=(F=f.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,$,H;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var E,X,G;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(G=(X=y.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var U,q,J;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(q=A.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,re,ae;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,te,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const gr=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{C as Default,b as LoadingPlaceholder,f as WithCustomColor,A as WithFormatter,_ as WithHighlightedMeasure,v as WithReferenceLine,x as WithSecondaryDimension,y as WithStacks,gr as __namedExportsOrder,hr as default};
