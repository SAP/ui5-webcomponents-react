import{c as ne,s as Re,a as Fe}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-kTr5k6y8.js";import{T as d}from"./ThemingParameters-DOkJX3Ed.js";import{e as Ne}from"./index-D8PAbW1n.js";import{r as O}from"./index-BQ1WsyJB.js";import{C as Ve,a as ce}from"./defaults-CussT844.js";import{u as $e,B as He}from"./useCancelAnimationFallback-CzW7Gfaw.js";import{u as Ee,a as Xe,C as Ge,X as Ue,c as qe,Y as W,b as T}from"./YAxisTicks-DMilApse.js";import{u as Je,C as Qe}from"./ChartDataLabel-xalOzs9s.js";import{u as Ze,t as es,a as ss,b as rs}from"./staticProps-FzR48Pl7.js";import{u as as}from"./useLongestYAxisLabel-QTbtQO-0.js";import{u as os}from"./useOnClickInternal-DdAppmHO.js";import{u as ts,a as is,r as ns,b as z}from"./useTooltipFormatter-CUP_yTms.js";import{C as cs}from"./ChartContainer-CBhLtRAu.js";import{C as ls}from"./react-content-loader.es-BgZLOsSQ.js";import{B as ms,a as ds,e as us,d as ps,R as hs,T as gs,h as Cs}from"./generateCategoricalChart-kdrf5Rrh.js";import{u as fs}from"./withWebComponent-BS5KmJ8y.js";import{u as xs}from"./useIsRTL-DQKatNxm.js";import"./_baseForOwn-DusBTQ6O.js";import"./isString-DU9kh5Q5.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BpWYsmmS.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./utils-BKwn1mod.js";import"./clsx-B-dksMZM.js";import"./throttle-Cb9nBjQI.js";import"./useStylesheet-CLr2-W5J.js";import"./index-D2dANm9w.js";import"./iframe-BSNFX450.js";import"../sb-preview/runtime.js";import"./BusyIndicator-Cvlx0ISj.js";import"./i18nBundle-BnWtnlV0.js";import"./Keys-pFVWso__.js";import"./Device-RcFucVeJ.js";import"./Label-q6_PzA5e.js";import"./i18n-defaults-CTWfTbaq.js";import"./if-defined-fOOg8zCW.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-C2xEFFE_.js";import"./index-CCsDBC37.js";import"./isPlainObject-RD2cLuvA.js";import"./mapValues-DfqGXSk1.js";import"./directionChange-BRySOgD0.js";const u=s=>a.jsxs(ls,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:d.sapContent_ImagePlaceholderBackground,foregroundColor:d.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:d.sapContent_DisabledOpacity,...s,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),a.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),a.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),a.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),a.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),a.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const ys={formatter:ce},As={formatter:ce,opacity:1},bs=s=>({payload:k})=>Ve.getValueByDataKey(k,s),l=O.forwardRef((s,k)=>{var Y,w;const{loading:le,loadingDelay:me,dataset:i,noLegend:de,noAnimation:D,tooltipConfig:p,onDataPointClick:h,onLegendClick:ue,onClick:I,style:pe,className:he,slot:ge,ChartPlaceholder:Ce,syncId:fe,children:xe,...ye}=s,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:d.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...s.chartConfig},{referenceLine:o}=r,{dimensions:L,measures:m}=ts(s.dimensions,s.measures,ys,As),Ae=is(m),[be,ve]=as(i,m,r.legendPosition),n=L[0],{primaryMeasure:_e,secondaryMeasure:ke}=ns(m,(Y=r==null?void 0:r.secondYAxis)==null?void 0:Y.dataKey),Se=Je(n),[je,P]=fs(k),De=m.map(({accessor:e})=>e),S=r.secondYAxis?De.findIndex(e=>{var t;return e===((t=r.secondYAxis)==null?void 0:t.dataKey)}):0,Ie=Ze(ue),Le=O.useCallback((e,t,g)=>{e&&h&&h(Ne(g,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:t,payload:e.payload}))},[h]),Pe=os(I),Ye=(i==null?void 0:i.length)>30,we=n==null?void 0:n.accessor,Oe=Ee(r.margin,r.zoomingTool),We=Xe(P,s.dimensions.length),j=xs(P),{chartConfig:vs,dimensions:_s,measures:ks,...Te}=ye,{isMounted:ze,handleBarAnimationStart:Ke,handleBarAnimationEnd:Be}=$e(D);return a.jsx(cs,{dataset:i,loading:le,loadingDelay:me,Placeholder:Ce??u,ref:je,style:pe,className:he,slot:ge,resizeDebounce:r.resizeDebounce,...Te,children:a.jsxs(He,{syncId:fe,onClick:Pe,stackOffset:"sign",margin:Oe,data:i,barGap:r.barGap,className:typeof h=="function"||typeof I=="function"?"has-click-handler":void 0,children:[a.jsx(Ge,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&L.map((e,t)=>a.jsx(Ue,{dataKey:e.accessor,xAxisId:t,interval:(e==null?void 0:e.interval)??(Ye?"preserveStart":0),tick:a.jsx(qe,{config:e}),tickLine:t<1,axisLine:t<1,height:We[t],allowDuplicatedCategory:t===0,reversed:j,...r.xAxisConfig},e.reactKey)),a.jsx(W,{orientation:j===!0?"right":"left",axisLine:r.yAxisVisible,tickLine:es,yAxisId:"left",interval:0,tick:a.jsx(T,{config:_e}),width:be,...r.yAxisConfig}),((w=r.secondYAxis)==null?void 0:w.dataKey)&&a.jsx(W,{dataKey:r.secondYAxis.dataKey,axisLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},tick:a.jsx(T,{config:ke,secondYAxisConfig:{color:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`}}),tickLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},label:{value:r.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:j===!0?"left":"right",yAxisId:"right",interval:0,...r.secondYAxisConfig}),ze&&m.map((e,t)=>{var g;return a.jsxs(ms,{yAxisId:((g=r.secondYAxis)==null?void 0:g.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,barSize:e.width,onClick:Le,isAnimationActive:!D,onAnimationStart:Ke,onAnimationEnd:Be,children:[a.jsx(ds,{data:i,valueAccessor:bs(e.accessor),content:a.jsx(Qe,{config:e,chartType:"column",position:"insideTop"})}),i.map((c,Me)=>a.jsx(us,{fill:z(e,c,t),stroke:z(e,c,t)},Me))]},e.reactKey)}),!de&&a.jsx(ps,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:Ie,wrapperStyle:ve}),o&&a.jsx(hs,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),yAxisId:(o==null?void 0:o.yAxisId)??"left",label:o==null?void 0:o.label}),(p==null?void 0:p.active)!==!1&&a.jsx(gs,{cursor:ss,formatter:Ae,contentStyle:rs,labelFormatter:Se,...p}),r.zoomingTool&&a.jsx(Cs,{y:10,dataKey:we,tickFormatter:n==null?void 0:n.formatter,stroke:d.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),xe]})})});l.displayName="ColumnChart";try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}const fr={title:"ColumnChart",component:l,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ne,dimensions:[{accessor:"name",formatter:s=>`${s} 2019`}],measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},C={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:Re}},x={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ne}},A={args:{dimensions:[{accessor:"name",formatter:s=>s.slice(0,3)}],measures:[{accessor:"users",formatter:s=>`${s/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dataset:[]}},v={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},_={args:{measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:s=>{if(s>750)return"red"}}]}};var K,B,M;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(M=(B=C.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,F,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(ie=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const xr=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{C as Default,b as LoadingPlaceholder,f as WithCustomColor,A as WithFormatter,_ as WithHighlightedMeasure,v as WithReferenceLine,x as WithSecondaryDimension,y as WithStacks,xr as __namedExportsOrder,fr as default};
