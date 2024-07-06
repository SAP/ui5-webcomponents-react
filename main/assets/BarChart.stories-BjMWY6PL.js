import{c as we,s as Me,a as Pe}from"./DemoProps-BWWtsAFv.js";import{j as o}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{T as K}from"./ThemingParameters-DOkJX3Ed.js";import{e as Re}from"./index-D8PAbW1n.js";import{r as T}from"./index-DEe9W-hO.js";import{d as Ve,C as de,a as ue}from"./defaults-BgkCdKQr.js";import{u as $e,B as Ee}from"./useCancelAnimationFallback-DAzbQEEX.js";import{u as He,a as Xe,C as Ne,X as w,c as M,Y as Ge,b as Ue}from"./YAxisTicks-XXM5XLuK.js";import{u as qe,C as Je}from"./ChartDataLabel-CjkhAtPe.js";import{u as Qe,t as Ze,a as es,b as ss}from"./staticProps-DsetRNqa.js";import{g as rs,u as as,a as os,r as ts,b as P}from"./useTooltipFormatter-D3RfzZz1.js";import{u as is}from"./useOnClickInternal-Chqq3b2P.js";import{C as ns}from"./ChartContainer-CI7lcR3J.js";import{B as cs}from"./Placeholder-CaqE8Idz.js";import{B as ls,a as ms,e as ds,d as us,R as ps,T as gs,h as hs}from"./generateCategoricalChart-DGQuSwO_.js";import{u as fs}from"./withWebComponent-BxrD_3pN.js";import{u as Cs}from"./useIsRTL-cgFvq9WG.js";import"./_baseForOwn-DVWQo5xw.js";import"./isString-C_Q1T2_B.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./_baseUniq-BqAhPu7p.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./utils-DgTsnvPN.js";import"./clsx-B-dksMZM.js";import"./throttle-B-28IFuh.js";import"./useStylesheet-BlIIJPI8.js";import"./index-DP_1Pf-i.js";import"./iframe-CIrk4XW5.js";import"../sb-preview/runtime.js";import"./BusyIndicator-B1mvkq_I.js";import"./i18nBundle-NJJr-Wgh.js";import"./Keys-B00bFMgT.js";import"./Integer-DgRYWdxf.js";import"./Device-RcFucVeJ.js";import"./Label-BqwA1t1q.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-Cl7uVo8B.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./class-map-CVq5yHuN.js";import"./index-Cy3tZWHc.js";import"./react-content-loader.es-CK-1p032.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./directionChange-F0SVwOWF.js";const xs=(r,c,d="")=>T.useMemo(()=>{let t=Array(c.length).fill(0),p=0;if(r instanceof Array&&c){const f=n=>c.map(l=>l.formatter(de.getValueByDataKey(n,l.accessor,"")));r.map(f).forEach(n=>{n.forEach((l,h)=>{t[h]=Math.max(rs(l),t[h])})}),t=t.map(n=>Math.min(Ve,n)),p=t.reduce((n,l)=>n+l,0)}return d==="middle"?[t,{width:"auto"}]:[t,{marginLeft:p,maxWidth:`calc(100% - ${p+8}px)`}]},[r,c,d]),ys={formatter:ue},As={formatter:ue,opacity:1},bs=r=>({payload:c})=>de.getValueByDataKey(c,r),u=T.forwardRef((r,c)=>{var F,O;const{loading:d,dataset:t,noLegend:p,noAnimation:f,tooltipConfig:g,onDataPointClick:n,onLegendClick:l,onClick:h,style:pe,className:ge,slot:he,syncId:fe,ChartPlaceholder:Ce,children:xe,...ye}=r,s={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:K.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...r.chartConfig},a=s.referenceLine,{dimensions:I,measures:C}=as(r.dimensions,r.measures,ys,As),Ae=os(C),m=I[0],{primaryMeasure:x,secondaryMeasure:be}=ts(C,(F=s==null?void 0:s.secondYAxis)==null?void 0:F.dataKey),ve=C.map(({accessor:e})=>e),j=s.secondYAxis?ve.findIndex(e=>{var i;return e===((i=s.secondYAxis)==null?void 0:i.dataKey)}):0,[ke,z]=fs(c),_e=Qe(l),Se=qe(m),De=T.useCallback((e,i,y)=>{if(e&&n){const A=e.value.length?e.value[1]-e.value[0]:e.value;n(Re(y,{dataKey:Object.keys(e).filter(W=>W!=="value").find(W=>e[W]===A),value:A,payload:e.payload,dataIndex:i}))}},[n]),Le=is(h),Be=(t==null?void 0:t.length)>30,Ie=m==null?void 0:m.accessor,[je,We]=xs(t,I,s.legendPosition),Te=He(s.margin,s.zoomingTool),[ze]=Xe(z,1),Y=Cs(z),{isMounted:Ye,handleBarAnimationStart:Fe,handleBarAnimationEnd:Oe}=$e(f),{chartConfig:vs,dimensions:ks,measures:_s,...Ke}=ye;return o.jsx(ns,{dataset:t,loading:d,Placeholder:Ce??cs,ref:ke,style:pe,className:ge,slot:he,resizeDebounce:s.resizeDebounce,...Ke,children:o.jsxs(Ee,{syncId:fe,onClick:Le,stackOffset:"sign",margin:Te,layout:"vertical",data:t,barGap:s.barGap,className:typeof n=="function"||typeof h=="function"?"has-click-handler":void 0,children:[o.jsx(Ne,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&o.jsx(w,{interval:0,type:"number",tick:o.jsx(M,{config:x}),axisLine:s.xAxisVisible,tickLine:Ze,tickFormatter:x==null?void 0:x.formatter,height:ze,reversed:Y,...s.xAxisConfig}),((O=s.secondYAxis)==null?void 0:O.dataKey)&&o.jsx(w,{dataKey:s.secondYAxis.dataKey,axisLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},tick:o.jsx(M,{config:be,secondYAxisConfig:{color:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`}}),tickLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${j%11+1})`},label:{value:s.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...s.secondXAxisConfig}),s.yAxisVisible&&I.map((e,i)=>o.jsx(Ge,{interval:(e==null?void 0:e.interval)??(Be?"preserveStart":0),type:"category",dataKey:e.accessor,tick:o.jsx(Ue,{config:e}),tickLine:i<1,axisLine:i<1,yAxisId:i,width:je[i],allowDuplicatedCategory:i===0,orientation:Y?"right":"left",...s.yAxisConfig},e.reactKey)),Ye&&C.map((e,i)=>o.jsxs(ls,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${i%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${i%11+1})`,barSize:e.width,onClick:De,isAnimationActive:!f,onAnimationStart:Fe,onAnimationEnd:Oe,children:[o.jsx(ms,{data:t,valueAccessor:bs(e.accessor),content:o.jsx(Je,{config:e,chartType:"bar",position:"insideRight"})}),t.map((y,A)=>o.jsx(ds,{fill:P(e,y,i),stroke:P(e,y,i)},A))]},e.reactKey)),!p&&o.jsx(us,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:_e,wrapperStyle:We}),a&&o.jsx(ps,{...a,stroke:(a==null?void 0:a.color)??(a==null?void 0:a.stroke),x:(a==null?void 0:a.value)??(a==null?void 0:a.x),label:a==null?void 0:a.label}),(g==null?void 0:g.active)!==!1&&o.jsx(gs,{cursor:es,formatter:Ae,contentStyle:ss,labelFormatter:Se,...g}),s.zoomingTool&&o.jsx(hs,{y:10,dataKey:Ie,tickFormatter:m==null?void 0:m.formatter,stroke:K.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),xe]})})});u.displayName="BarChart";try{u.displayName="BarChart",u.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}try{u.displayName="BarChart",u.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}const yr={title:"BarChart",component:u,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:we,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:r=>r.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:r=>`${r} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},b={},v={args:{measures:[{accessor:"users",color:"red"}],dataset:Me}},k={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Pe}},_={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},S={args:{dimensions:[{accessor:"name",formatter:r=>r.slice(0,3)}],measures:[{accessor:"users",formatter:r=>`${r/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},L={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},B={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(r,c,d)=>{if(d.name==="February")return"red"}}]}};var R,V,$;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...($=(V=b.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var E,H,X;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(X=(H=v.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var N,G,U;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(G=k.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,J,Q;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,se;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,oe;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ie,ne;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ce,le,me;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(le=B.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const Ar=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{b as Default,D as LoadingPlaceholder,v as WithCustomColor,_ as WithDataLabels,S as WithFormatter,B as WithHighlightedMeasure,L as WithReferenceLine,k as WithSecondaryDimension,Ar as __namedExportsOrder,yr as default};
