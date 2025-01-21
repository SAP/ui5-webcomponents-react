import{c as Cs,s as Js,a as Qs,e as Zs,t as se,l as ee}from"./DemoProps-CM7ve7wo.js";import{j as r}from"./jsx-runtime-CLpGMVip.js";import{T as S}from"./ThemingParameters-le4wpk1U.js";import{e as ae}from"./index-BQ73vKGB.js";import{r as O}from"./index-D23YZj_x.js";import{u as re,t as oe,a as te,b as ne,c as ie,C as ce,e as xs}from"./staticProps-DTJEdH3d.js";import{u as le,B as de}from"./useCancelAnimationFallback-BdDMLgPE.js";import{u as me,a as ue,C as ge,X as he,c as pe,Y as P,b as w}from"./YAxisTicks-BIRG7QR7.js";import{u as fe,C as Ce}from"./ChartDataLabel-Bb7a4bXX.js";import{u as xe}from"./useLongestYAxisLabel-DyGZCi6D.js";import{u as Ae}from"./useOnClickInternal-Bzi6oxFd.js";import{u as be,a as ye,r as ve,b as K}from"./useTooltipFormatter-CSbWHChr.js";import{n as ke,B as Se,k as je,p as De,o as Le,R as Ie,T as _e,q as We}from"./ChartContainer-eZ9elVkO.js";import{C as Te}from"./react-content-loader.es-CXkD-qGt.js";import{h as ze}from"./withWebComponent-DfVDXLfc.js";import{u as Ye}from"./useIsRTL-CAvJaecp.js";const Oe=a=>r.jsxs(Te,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:S.sapContent_ImagePlaceholderBackground,foregroundColor:S.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:S.sapContent_DisabledOpacity,...a,children:[r.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),r.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),r.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),r.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),r.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),r.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),r.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]}),Pe={formatter:xs},we={formatter:xs,opacity:1},Ke=a=>({payload:j})=>ce.getValueByDataKey(j,a),As=O.forwardRef((a,j)=>{var z,Y;const{loading:bs,loadingDelay:ys,dataset:n,noLegend:vs,noAnimation:I,tooltipConfig:y,onDataPointClick:v,onLegendClick:ks,onClick:_,style:Ss,className:js,slot:Ds,ChartPlaceholder:Ls,syncId:Is,children:_s,...Ws}=a,e={yAxisVisible:!1,xAxisVisible:!0,gridStroke:S.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...a.chartConfig},{referenceLine:o}=e,{dimensions:W,measures:l}=be(a.dimensions,a.measures,Pe,we),Ts=ye(l),[zs,Ys]=xe(n,l,e.legendPosition),i=W[0],{primaryMeasure:Os,secondaryMeasure:Ps}=ve(l,(z=e==null?void 0:e.secondYAxis)==null?void 0:z.dataKey),ws=fe(i),[Ks,T]=ze(j),Ms=l.map(({accessor:s})=>s),D=e.secondYAxis?Ms.findIndex(s=>{var t;return s===((t=e.secondYAxis)==null?void 0:t.dataKey)}):0,Bs=re(ks),Rs=O.useCallback((s,t,k)=>{s&&v&&v(ae(k,{dataKey:Object.keys(s).filter(c=>s.value.length?s[c]===s.value[1]-s.value[0]:s[c]===s.value&&c!=="value")[0],value:s.value.length?s.value[1]-s.value[0]:s.value,dataIndex:t,payload:s.payload}))},[v]),Fs=Ae(_),Vs=(n==null?void 0:n.length)>30,$s=i==null?void 0:i.accessor,Hs=me(e.margin,e.zoomingTool),Es=ue(T,a.dimensions.length),L=Ye(T),{chartConfig:Re,dimensions:Fe,measures:Ve,...Ns}=Ws,{isMounted:Xs,handleBarAnimationStart:Gs,handleBarAnimationEnd:Us}=le(I);return r.jsx(ke,{dataset:n,loading:bs,loadingDelay:ys,Placeholder:Ls??Oe,ref:Ks,style:Ss,className:js,slot:Ds,resizeDebounce:e.resizeDebounce,...Ns,children:r.jsxs(de,{syncId:Is,onClick:Fs,stackOffset:"sign",margin:Hs,data:n,barGap:e.barGap,accessibilityLayer:e.accessibilityLayer,className:typeof v=="function"||typeof _=="function"?"has-click-handler":void 0,children:[r.jsx(ge,{vertical:e.gridVertical,horizontal:e.gridHorizontal,stroke:e.gridStroke}),e.xAxisVisible&&W.map((s,t)=>r.jsx(he,{dataKey:s.accessor,xAxisId:t,interval:(s==null?void 0:s.interval)??(Vs?"preserveStart":0),tick:r.jsx(pe,{config:s}),tickLine:t<1,axisLine:t<1,height:Es[t],allowDuplicatedCategory:t===0,reversed:L,...e.xAxisConfig},s.reactKey)),r.jsx(P,{orientation:L===!0?"right":"left",axisLine:e.yAxisVisible,tickLine:oe,yAxisId:"left",interval:0,tick:r.jsx(w,{config:Os}),width:zs,...e.yAxisConfig}),((Y=e.secondYAxis)==null?void 0:Y.dataKey)&&r.jsx(P,{dataKey:e.secondYAxis.dataKey,axisLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${D%12+1})`},tick:r.jsx(w,{config:Ps,secondYAxisConfig:{color:e.secondYAxis.color??`var(--sapChart_OrderedColor_${D%12+1})`}}),tickLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${D%12+1})`},label:{value:e.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:L===!0?"left":"right",yAxisId:"right",interval:0,...e.secondYAxisConfig}),Xs&&l.map((s,t)=>{var k;return r.jsxs(Se,{yAxisId:((k=e.secondYAxis)==null?void 0:k.dataKey)===s.accessor?"right":"left",stackId:s.stackId,fillOpacity:s.opacity,name:s.label??s.accessor,strokeOpacity:s.opacity,type:"monotone",dataKey:s.accessor,fill:s.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:s.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:s.width,onClick:Rs,isAnimationActive:!I,onAnimationStart:Gs,onAnimationEnd:Us,children:[r.jsx(je,{data:n,valueAccessor:Ke(s.accessor),content:r.jsx(Ce,{config:s,chartType:"column",position:"insideTop"})}),n.map((c,qs)=>r.jsx(De,{fill:K(s,c,t),stroke:K(s,c,t)},qs))]},s.reactKey)}),!vs&&r.jsx(Le,{verticalAlign:e.legendPosition,align:e.legendHorizontalAlign,onClick:Bs,wrapperStyle:Ys,...e.legendConfig}),o&&r.jsx(Ie,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),y:(o==null?void 0:o.value)??(o==null?void 0:o.y),yAxisId:(o==null?void 0:o.yAxisId)??"left",label:o==null?void 0:o.label}),(y==null?void 0:y.active)!==!1&&r.jsx(_e,{cursor:te,formatter:Ts,contentStyle:ne,labelFormatter:ws,...y}),!!e.zoomingTool&&r.jsx(We,{dataKey:$s,tickFormatter:i==null?void 0:i.formatter,...ie,...typeof e.zoomingTool=="object"?e.zoomingTool:{}}),_s]})})});As.displayName="ColumnChart";const Me={title:"ColumnChart",component:As,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Cs,dimensions:[{accessor:"name",formatter:a=>`${a} 2019`}],measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},d={},m={args:{measures:[{accessor:"users",color:"red"}],dataset:Js}},u={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Qs}},g={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],dataset:Cs}},h={args:Zs},p={args:{dimensions:[{accessor:"name",formatter:a=>a.slice(0,3)}],measures:[{accessor:"users",formatter:a=>`${a/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},f={args:{dataset:[]}},C={args:{chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},x={args:{measures:[{accessor:"users",label:"Users",formatter:a=>a.toLocaleString()},{accessor:"sessions",label:"Active Sessions",formatter:a=>`${a} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol.",highlightColor:a=>{if(a>750)return"red"}}]}},A={args:se},b={args:ee};var M,B,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var F,V,$;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,E,N;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var X,G,U;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(G=g.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,J,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ss,es;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(es=(ss=p.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};var as,rs,os;f.parameters={...f.parameters,docs:{...(as=f.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(os=(rs=f.parameters)==null?void 0:rs.docs)==null?void 0:os.source}}};var ts,ns,is;C.parameters={...C.parameters,docs:{...(ts=C.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...(is=(ns=C.parameters)==null?void 0:ns.docs)==null?void 0:is.source}}};var cs,ls,ds;x.parameters={...x.parameters,docs:{...(cs=x.parameters)==null?void 0:cs.docs,source:{originalSource:`{
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
}`,...(ds=(ls=x.parameters)==null?void 0:ls.docs)==null?void 0:ds.source}}};var ms,us,gs;A.parameters={...A.parameters,docs:{...(ms=A.parameters)==null?void 0:ms.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(gs=(us=A.parameters)==null?void 0:us.docs)==null?void 0:gs.source}}};var hs,ps,fs;b.parameters={...b.parameters,docs:{...(hs=b.parameters)==null?void 0:hs.docs,source:{originalSource:`{
  args: legendConfig
}`,...(fs=(ps=b.parameters)==null?void 0:ps.docs)==null?void 0:fs.source}}};const Be=["Default","WithCustomColor","WithSecondaryDimension","WithStacks","WithNormalizedStacks","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithCustomTooltipConfig","WithCustomLegendConfig"],ta=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingPlaceholder:f,WithCustomColor:m,WithCustomLegendConfig:b,WithCustomTooltipConfig:A,WithFormatter:p,WithHighlightedMeasure:x,WithNormalizedStacks:h,WithReferenceLine:C,WithSecondaryDimension:u,WithStacks:g,__namedExportsOrder:Be,default:Me},Symbol.toStringTag,{value:"Module"}));export{ta as C,d as D,f as L,m as W,u as a,g as b,h as c,p as d,C as e,x as f,A as g,b as h};
