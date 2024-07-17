import{c as Me,s as Pe,a as Re}from"./DemoProps-BWWtsAFv.js";import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{T as w}from"./ThemingParameters-DOkJX3Ed.js";import{e as Ve}from"./index-D8PAbW1n.js";import{r as T}from"./index-BQ1WsyJB.js";import{d as $e,C as ue,a as pe}from"./defaults-KrcEPx-U.js";import{u as Ee,B as He}from"./useCancelAnimationFallback-Bbgxcvdb.js";import{u as Xe,a as Ne,C as Ge,X as M,c as P,Y as Ue,b as qe}from"./YAxisTicks-2DadJ_53.js";import{u as Je,C as Qe}from"./ChartDataLabel-C4tJgQW9.js";import{u as Ze,t as es,a as ss,b as as}from"./staticProps-FzR48Pl7.js";import{g as rs,u as os,a as ts,r as is,b as R}from"./useTooltipFormatter-DivRqh7q.js";import{u as ns}from"./useOnClickInternal-DdAppmHO.js";import{C as cs}from"./ChartContainer-DGwIsHRx.js";import{B as ls}from"./Placeholder-BvWDCQ9m.js";import{B as ms,a as ds,e as us,d as ps,R as gs,T as hs,h as fs}from"./generateCategoricalChart-D2iRigoR.js";import{d as Cs}from"./withWebComponent-DykTwaBJ.js";import{u as xs}from"./useIsRTL-CjN8gnsZ.js";import"./_baseForOwn-DusBTQ6O.js";import"./isString-DU9kh5Q5.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BpWYsmmS.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./utils-BXNPXA0w.js";import"./clsx-B-dksMZM.js";import"./throttle-Cb9nBjQI.js";import"./useStylesheet-BB85D3ff.js";import"./index-wnqzdKnS.js";import"./iframe-Du1sszHP.js";import"../sb-preview/runtime.js";import"./BusyIndicator-Cc-m-tN-.js";import"./i18nBundle-CEPDwMcb.js";import"./Keys-F_3Gvx0K.js";import"./Label-Cn8Z-EZA.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-BBkLNtsu.js";import"./index-DaJWLaOZ.js";import"./react-content-loader.es-BgZLOsSQ.js";import"./isPlainObject-RD2cLuvA.js";import"./mapValues-DfqGXSk1.js";import"./directionChange-D3LuQWiF.js";const ys=(a,l,u="")=>T.useMemo(()=>{let m=Array(l.length).fill(0),i=0;if(a instanceof Array&&l){const L=n=>l.map(c=>c.formatter(ue.getValueByDataKey(n,c.accessor,"")));a.map(L).forEach(n=>{n.forEach((c,g)=>{m[g]=Math.max(rs(c),m[g])})}),m=m.map(n=>Math.min($e,n)),i=m.reduce((n,c)=>n+c,0)}return u==="middle"?[m,{width:"auto"}]:[m,{marginLeft:i,maxWidth:`calc(100% - ${i+8}px)`}]},[a,l,u]),As={formatter:pe},bs={formatter:pe,opacity:1},vs=a=>({payload:l})=>ue.getValueByDataKey(l,a),p=T.forwardRef((a,l)=>{var O,K;const{loading:u,loadingDelay:m,dataset:i,noLegend:L,noAnimation:B,tooltipConfig:n,onDataPointClick:c,onLegendClick:g,onClick:z,style:ge,className:he,slot:fe,syncId:Ce,ChartPlaceholder:xe,children:ye,...Ae}=a,s={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:w.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...a.chartConfig},r=s.referenceLine,{dimensions:I,measures:h}=os(a.dimensions,a.measures,As,bs),be=ts(h),d=I[0],{primaryMeasure:f,secondaryMeasure:ve}=is(h,(O=s==null?void 0:s.secondYAxis)==null?void 0:O.dataKey),ke=h.map(({accessor:e})=>e),j=s.secondYAxis?ke.findIndex(e=>{var t;return e===((t=s.secondYAxis)==null?void 0:t.dataKey)}):0,[_e,Y]=Cs(l),Se=Ze(g),De=Je(d),Le=T.useCallback((e,t,C)=>{if(e&&c){const x=e.value.length?e.value[1]-e.value[0]:e.value;c(Ve(C,{dataKey:Object.keys(e).filter(W=>W!=="value").find(W=>e[W]===x),value:x,payload:e.payload,dataIndex:t}))}},[c]),Be=ns(z),Ie=(i==null?void 0:i.length)>30,je=d==null?void 0:d.accessor,[We,Te]=ys(i,I,s.legendPosition),ze=Xe(s.margin,s.zoomingTool),[Ye]=Ne(Y,1),F=xs(Y),{isMounted:Fe,handleBarAnimationStart:Oe,handleBarAnimationEnd:Ke}=Ee(B),{chartConfig:ks,dimensions:_s,measures:Ss,...we}=Ae;return o.jsx(cs,{dataset:i,loading:u,loadingDelay:m,Placeholder:xe??ls,ref:_e,style:ge,className:he,slot:fe,resizeDebounce:s.resizeDebounce,...we,children:o.jsxs(He,{syncId:Ce,onClick:Be,stackOffset:"sign",margin:ze,layout:"vertical",data:i,barGap:s.barGap,className:typeof c=="function"||typeof z=="function"?"has-click-handler":void 0,children:[o.jsx(Ge,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&o.jsx(M,{interval:0,type:"number",tick:o.jsx(P,{config:f}),axisLine:s.xAxisVisible,tickLine:es,tickFormatter:f==null?void 0:f.formatter,height:Ye,reversed:F,...s.xAxisConfig}),((K=s.secondYAxis)==null?void 0:K.dataKey)&&o.jsx(M,{dataKey:s.secondYAxis.dataKey,axisLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},tick:o.jsx(P,{config:ve,secondYAxisConfig:{color:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`}}),tickLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},label:{value:s.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...s.secondXAxisConfig}),s.yAxisVisible&&I.map((e,t)=>o.jsx(Ue,{interval:(e==null?void 0:e.interval)??(Ie?"preserveStart":0),type:"category",dataKey:e.accessor,tick:o.jsx(qe,{config:e}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:We[t],allowDuplicatedCategory:t===0,orientation:F?"right":"left",...s.yAxisConfig},e.reactKey)),Fe&&h.map((e,t)=>o.jsxs(ms,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,barSize:e.width,onClick:Le,isAnimationActive:!B,onAnimationStart:Oe,onAnimationEnd:Ke,children:[o.jsx(ds,{data:i,valueAccessor:vs(e.accessor),content:o.jsx(Qe,{config:e,chartType:"bar",position:"insideRight"})}),i.map((C,x)=>o.jsx(us,{fill:R(e,C,t),stroke:R(e,C,t)},x))]},e.reactKey)),!L&&o.jsx(ps,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:Se,wrapperStyle:Te}),r&&o.jsx(gs,{...r,stroke:(r==null?void 0:r.color)??(r==null?void 0:r.stroke),x:(r==null?void 0:r.value)??(r==null?void 0:r.x),label:r==null?void 0:r.label}),(n==null?void 0:n.active)!==!1&&o.jsx(hs,{cursor:ss,formatter:be,contentStyle:as,labelFormatter:De,...n}),s.zoomingTool&&o.jsx(fs,{y:10,dataKey:je,tickFormatter:d==null?void 0:d.formatter,stroke:w.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});p.displayName="BarChart";try{p.displayName="BarChart",p.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}try{p.displayName="BarChart",p.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}const ha={title:"BarChart",component:p,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Me,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},y={},A={args:{measures:[{accessor:"users",color:"red"}],dataset:Pe}},b={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Re}},v={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},k={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},_={args:{dataset:[]}},S={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},D={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(a,l,u)=>{if(u.name==="February")return"red"}}]}};var V,$,E;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var H,X,N;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(N=(X=A.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var G,U,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,Q,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,se,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,oe,te;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(te=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ne,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,me,de;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(me=D.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const fa=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{y as Default,_ as LoadingPlaceholder,A as WithCustomColor,v as WithDataLabels,k as WithFormatter,D as WithHighlightedMeasure,S as WithReferenceLine,b as WithSecondaryDimension,fa as __namedExportsOrder,ha as default};
