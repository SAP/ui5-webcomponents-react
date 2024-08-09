import{c as ne,s as Re,a as Fe}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{T as m}from"./ThemingParameters-DOkJX3Ed.js";import{e as Ne}from"./index-C-Zfmu7Z.js";import{r as O}from"./index-ClU-Tc1p.js";import{C as Ve,a as ce}from"./defaults-BPX4iVge.js";import{u as $e,B as He}from"./useCancelAnimationFallback-dH6NacAR.js";import{u as Ee,a as Xe,C as Ge,X as Ue,c as qe,Y as W,b as T}from"./YAxisTicks-B9wa8W5O.js";import{u as Je,C as Qe}from"./ChartDataLabel-oQHuYtmm.js";import{u as Ze,t as es,a as ss,b as rs}from"./staticProps-CzVU8Uee.js";import{u as as}from"./useLongestYAxisLabel-ZaQN1Bwr.js";import{u as os}from"./useOnClickInternal-BlzHz4BI.js";import{u as ts,a as is,r as ns,b as z}from"./useTooltipFormatter-CRK8g42F.js";import{C as cs}from"./ChartContainer-OLNiQ8AF.js";import{C as ls}from"./react-content-loader.es-BFHa96Im.js";import{B as ds,a as ms,e as us,d as ps,R as hs,T as gs,h as Cs}from"./generateCategoricalChart-C5DO5lWm.js";import{d as fs}from"./withWebComponent--2-UXDGX.js";import{u as xs}from"./useIsRTL-MN5eY04s.js";import"./_baseForOwn-CS3BKc8p.js";import"./isString-t1AFzGBk.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-DGAWXpCf.js";import"./addCustomCSSWithScoping-BAXItpVh.js";import"./utils-DLW1sA5D.js";import"./clsx-B-dksMZM.js";import"./throttle-BhuRV_m0.js";import"./useStylesheet-Dw38joME.js";import"./index-EM_WIGHO.js";import"./iframe-B1DxKb9w.js";import"../sb-preview/runtime.js";import"./BusyIndicator-B3EKab9f.js";import"./i18nBundle-d4QydjzH.js";import"./Keys-F_3Gvx0K.js";import"./Label-BByfo__S.js";import"./i18n-defaults-CY90T2oA.js";import"./if-defined-BflNsp1k.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./class-map-Oct9Grst.js";import"./index-BnAkacAy.js";import"./isPlainObject-ByEQ1glX.js";import"./mapValues-DmWmqx7o.js";import"./directionChange-CNvxcPpd.js";const u=s=>a.jsxs(ls,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:m.sapContent_ImagePlaceholderBackground,foregroundColor:m.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:m.sapContent_DisabledOpacity,...s,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),a.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),a.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),a.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),a.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),a.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}try{u.displayName="ColumnChartPlaceholder",u.__docgenInfo={description:"",displayName:"ColumnChartPlaceholder",props:{}}}catch{}const ys={formatter:ce},As={formatter:ce,opacity:1},bs=s=>({payload:k})=>Ve.getValueByDataKey(k,s),l=O.forwardRef((s,k)=>{var Y,w;const{loading:le,loadingDelay:de,dataset:i,noLegend:me,noAnimation:D,tooltipConfig:p,onDataPointClick:h,onLegendClick:ue,onClick:I,style:pe,className:he,slot:ge,ChartPlaceholder:Ce,syncId:fe,children:xe,...ye}=s,r={yAxisVisible:!1,xAxisVisible:!0,gridStroke:m.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...s.chartConfig},{referenceLine:o}=r,{dimensions:L,measures:d}=ts(s.dimensions,s.measures,ys,As),Ae=is(d),[be,ve]=as(i,d,r.legendPosition),n=L[0],{primaryMeasure:_e,secondaryMeasure:ke}=ns(d,(Y=r==null?void 0:r.secondYAxis)==null?void 0:Y.dataKey),Se=Je(n),[je,P]=fs(k),De=d.map(({accessor:e})=>e),S=r.secondYAxis?De.findIndex(e=>{var t;return e===((t=r.secondYAxis)==null?void 0:t.dataKey)}):0,Ie=Ze(ue),Le=O.useCallback((e,t,g)=>{e&&h&&h(Ne(g,{dataKey:Object.keys(e).filter(c=>e.value.length?e[c]===e.value[1]-e.value[0]:e[c]===e.value&&c!=="value")[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:t,payload:e.payload}))},[h]),Pe=os(I),Ye=(i==null?void 0:i.length)>30,we=n==null?void 0:n.accessor,Oe=Ee(r.margin,r.zoomingTool),We=Xe(P,s.dimensions.length),j=xs(P),{chartConfig:vs,dimensions:_s,measures:ks,...Te}=ye,{isMounted:ze,handleBarAnimationStart:Ke,handleBarAnimationEnd:Be}=$e(D);return a.jsx(cs,{dataset:i,loading:le,loadingDelay:de,Placeholder:Ce??u,ref:je,style:pe,className:he,slot:ge,resizeDebounce:r.resizeDebounce,...Te,children:a.jsxs(He,{syncId:fe,onClick:Pe,stackOffset:"sign",margin:Oe,data:i,barGap:r.barGap,className:typeof h=="function"||typeof I=="function"?"has-click-handler":void 0,children:[a.jsx(Ge,{vertical:r.gridVertical,horizontal:r.gridHorizontal,stroke:r.gridStroke}),r.xAxisVisible&&L.map((e,t)=>a.jsx(Ue,{dataKey:e.accessor,xAxisId:t,interval:(e==null?void 0:e.interval)??(Ye?"preserveStart":0),tick:a.jsx(qe,{config:e}),tickLine:t<1,axisLine:t<1,height:We[t],allowDuplicatedCategory:t===0,reversed:j,...r.xAxisConfig},e.reactKey)),a.jsx(W,{orientation:j===!0?"right":"left",axisLine:r.yAxisVisible,tickLine:es,yAxisId:"left",interval:0,tick:a.jsx(T,{config:_e}),width:be,...r.yAxisConfig}),((w=r.secondYAxis)==null?void 0:w.dataKey)&&a.jsx(W,{dataKey:r.secondYAxis.dataKey,axisLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},tick:a.jsx(T,{config:ke,secondYAxisConfig:{color:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`}}),tickLine:{stroke:r.secondYAxis.color??`var(--sapChart_OrderedColor_${S%11+1})`},label:{value:r.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:j===!0?"left":"right",yAxisId:"right",interval:0,...r.secondYAxisConfig}),ze&&d.map((e,t)=>{var g;return a.jsxs(ds,{yAxisId:((g=r.secondYAxis)==null?void 0:g.dataKey)===e.accessor?"right":"left",stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,barSize:e.width,onClick:Le,isAnimationActive:!D,onAnimationStart:Ke,onAnimationEnd:Be,children:[a.jsx(ms,{data:i,valueAccessor:bs(e.accessor),content:a.jsx(Qe,{config:e,chartType:"column",position:"insideTop"})}),i.map((c,Me)=>a.jsx(us,{fill:z(e,c,t),stroke:z(e,c,t)},Me))]},e.reactKey)}),!me&&a.jsx(ps,{verticalAlign:r.legendPosition,align:r.legendHorizontalAlign,onClick:Ie,wrapperStyle:ve}),o&&a.jsx(hs,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),yAxisId:(o==null?void 0:o.yAxisId)??"left",label:o==null?void 0:o.label}),(p==null?void 0:p.active)!==!1&&a.jsx(gs,{cursor:ss,formatter:Ae,contentStyle:rs,labelFormatter:Se,...p}),r.zoomingTool&&a.jsx(Cs,{y:10,dataKey:we,tickFormatter:n==null?void 0:n.formatter,stroke:m.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),xe]})})});l.displayName="ColumnChart";try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}try{l.displayName="ColumnChart",l.__docgenInfo={description:"A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.",displayName:"ColumnChart",props:{}}}catch{}const hr={title:"ColumnChart",component:l,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:ne,dimensions:[{accessor:"name",formatter:s=>`${s} 2019`}],measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},C={},f={args:{measures:[{accessor:"users",color:"red"}],dataset:Re}},x={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Fe}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:ne}},A={args:{dimensions:[{accessor:"name",formatter:s=>s.slice(0,3)}],measures:[{accessor:"users",formatter:s=>`${s/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},b={args:{dataset:[]}},v={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},_={args:{measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:s=>{if(s>750)return"red"}}]}};var K,B,M;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(M=(B=C.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,F,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
