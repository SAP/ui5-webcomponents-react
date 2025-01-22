import{c as Js,s as Qs,a as Zs,e as se,t as ee,l as ae}from"./DemoProps-CM7ve7wo.js";import{j as a}from"./jsx-runtime-CLpGMVip.js";import{T}from"./ThemingParameters-le4wpk1U.js";import{e as re}from"./index-BQ73vKGB.js";import{r as P}from"./index-D23YZj_x.js";import{d as oe,C as vs,u as te,t as ne,a as ie,b as ce,c as le,e as Ss}from"./staticProps-C8ijBduP.js";import{u as de,B as me}from"./useCancelAnimationFallback-C3MeIIKc.js";import{u as ue,a as ge,C as he,X as R,c as V,Y as pe,b as fe}from"./YAxisTicks-DrQ71R4i.js";import{u as Ce,C as xe}from"./ChartDataLabel-DDF5aXoe.js";import{g as ye,u as be,a as Ae,r as ke,b as E}from"./useTooltipFormatter-z6hUvnAk.js";import{u as ve}from"./useOnClickInternal-Bzi6oxFd.js";import{n as Se,B as Le,k as je,p as De,o as We,R as Te,T as _e,q as Ie}from"./ChartContainer-Cu5mgRhq.js";import{C as ze}from"./react-content-loader.es-CXkD-qGt.js";import{h as Be}from"./withWebComponent-DfVDXLfc.js";import{u as Oe}from"./useIsRTL-CAvJaecp.js";const Pe=(r,l,u="")=>P.useMemo(()=>{let d=Array(l.length).fill(0),n=0;if(r instanceof Array&&l){const _=i=>l.map(c=>c.formatter(vs.getValueByDataKey(i,c.accessor,"")));r.map(_).forEach(i=>{i.forEach((c,S)=>{d[S]=Math.max(ye(c),d[S])})}),d=d.map(i=>Math.min(oe,i)),n=d.reduce((i,c)=>i+c,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:n,maxWidth:`calc(100% - ${n+8}px)`}]},[r,l,u]),Ye=()=>a.jsxs(ze,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:T.sapContent_ImagePlaceholderBackground,foregroundColor:T.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:T.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),we={formatter:Ss},Fe={formatter:Ss,opacity:1},Me=r=>({payload:l})=>vs.getValueByDataKey(l,r),Ls=P.forwardRef((r,l)=>{var M,K;const{loading:u,loadingDelay:d,dataset:n,noLegend:_,noAnimation:I,tooltipConfig:i,onDataPointClick:c,onLegendClick:S,onClick:Y,style:js,className:Ds,slot:Ws,syncId:Ts,ChartPlaceholder:_s,children:Is,...zs}=r,e={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:T.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...r.chartConfig},o=e.referenceLine,{dimensions:z,measures:L}=be(r.dimensions,r.measures,we,Fe),Bs=Ae(L),m=z[0],{primaryMeasure:j,secondaryMeasure:Os}=ke(L,(M=e==null?void 0:e.secondYAxis)==null?void 0:M.dataKey),Ps=L.map(({accessor:s})=>s),B=e.secondYAxis?Ps.findIndex(s=>{var t;return s===((t=e.secondYAxis)==null?void 0:t.dataKey)}):0,[Ys,w]=Be(l),ws=te(S),Fs=Ce(m),Ms=P.useCallback((s,t,D)=>{if(s&&c){const W=s.value.length?s.value[1]-s.value[0]:s.value;c(re(D,{dataKey:Object.keys(s).filter(O=>O!=="value").find(O=>s[O]===W),value:W,payload:s.payload,dataIndex:t}))}},[c]),Ks=ve(Y),Rs=(n==null?void 0:n.length)>30,Vs=m==null?void 0:m.accessor,[Es,$s]=Pe(n,z,e.legendPosition),Hs=ue(e.margin,e.zoomingTool),[Xs]=ge(w,1),F=Oe(w),{isMounted:Ns,handleBarAnimationStart:Gs,handleBarAnimationEnd:Us}=de(I),{chartConfig:Ve,dimensions:Ee,measures:$e,...qs}=zs;return a.jsx(Se,{dataset:n,loading:u,loadingDelay:d,Placeholder:_s??Ye,ref:Ys,style:js,className:Ds,slot:Ws,resizeDebounce:e.resizeDebounce,...qs,children:a.jsxs(me,{syncId:Ts,onClick:Ks,stackOffset:"sign",margin:Hs,layout:"vertical",data:n,barGap:e.barGap,accessibilityLayer:e.accessibilityLayer,className:typeof c=="function"||typeof Y=="function"?"has-click-handler":void 0,children:[a.jsx(he,{vertical:e.gridVertical,horizontal:e.gridHorizontal,stroke:e.gridStroke}),e.xAxisVisible&&a.jsx(R,{interval:0,type:"number",tick:a.jsx(V,{config:j}),axisLine:e.xAxisVisible,tickLine:ne,tickFormatter:j==null?void 0:j.formatter,height:Xs,reversed:F,...e.xAxisConfig}),((K=e.secondYAxis)==null?void 0:K.dataKey)&&a.jsx(R,{dataKey:e.secondYAxis.dataKey,axisLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${B%12+1})`},tick:a.jsx(V,{config:Os,secondYAxisConfig:{color:e.secondYAxis.color??`var(--sapChart_OrderedColor_${B%12+1})`}}),tickLine:{stroke:e.secondYAxis.color??`var(--sapChart_OrderedColor_${B%12+1})`},label:{value:e.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...e.secondXAxisConfig}),e.yAxisVisible&&z.map((s,t)=>a.jsx(pe,{interval:(s==null?void 0:s.interval)??"preserveStartEnd",minTickGap:Rs?void 0:-10,type:"category",dataKey:s.accessor,tick:a.jsx(fe,{config:s}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:Es[t],allowDuplicatedCategory:t===0,orientation:F?"right":"left",...e.yAxisConfig},s.reactKey)),Ns&&L.map((s,t)=>a.jsxs(Le,{stackId:s.stackId,fillOpacity:s.opacity,name:s.label??s.accessor,strokeOpacity:s.opacity,type:"monotone",dataKey:s.accessor,fill:s.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:s.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:s.width,onClick:Ms,isAnimationActive:!I,onAnimationStart:Gs,onAnimationEnd:Us,children:[a.jsx(je,{data:n,valueAccessor:Me(s.accessor),content:a.jsx(xe,{config:s,chartType:"bar",position:"insideRight"})}),n.map((D,W)=>a.jsx(De,{fill:E(s,D,t),stroke:E(s,D,t)},W))]},s.reactKey)),!_&&a.jsx(We,{verticalAlign:e.legendPosition,align:e.legendHorizontalAlign,onClick:ws,wrapperStyle:$s,...e.legendConfig}),o&&a.jsx(Te,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),x:(o==null?void 0:o.value)??(o==null?void 0:o.x),label:o==null?void 0:o.label}),(i==null?void 0:i.active)!==!1&&a.jsx(_e,{cursor:ie,formatter:Bs,contentStyle:ce,labelFormatter:Fs,...i}),!!e.zoomingTool&&a.jsx(Ie,{dataKey:Vs,tickFormatter:m==null?void 0:m.formatter,...le,...typeof e.zoomingTool=="object"?e.zoomingTool:{}}),Is]})})});Ls.displayName="BarChart";const Ke={title:"BarChart",component:Ls,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Js,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:r=>r.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:r=>`${r} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},g={},h={args:{measures:[{accessor:"users",color:"red"}],dataset:Qs}},p={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Zs}},f={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},C={args:{dimensions:[{accessor:"name",formatter:r=>r.slice(0,3)}],measures:[{accessor:"users",formatter:r=>`${r/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},x={args:{dataset:[]}},y={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},b={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(r,l,u)=>{if(u.name==="February")return"red"}}]}},A={args:se},k={args:ee},v={args:ae};var $,H,X;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(X=(H=g.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var N,G,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(U=(G=h.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var q,J,Q;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ss,es;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(es=(ss=f.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};var as,rs,os;C.parameters={...C.parameters,docs:{...(as=C.parameters)==null?void 0:as.docs,source:{originalSource:`{
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
}`,...(os=(rs=C.parameters)==null?void 0:rs.docs)==null?void 0:os.source}}};var ts,ns,is;x.parameters={...x.parameters,docs:{...(ts=x.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(is=(ns=x.parameters)==null?void 0:ns.docs)==null?void 0:is.source}}};var cs,ls,ds;y.parameters={...y.parameters,docs:{...(cs=y.parameters)==null?void 0:cs.docs,source:{originalSource:`{
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
}`,...(ds=(ls=y.parameters)==null?void 0:ls.docs)==null?void 0:ds.source}}};var ms,us,gs;b.parameters={...b.parameters,docs:{...(ms=b.parameters)==null?void 0:ms.docs,source:{originalSource:`{
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
}`,...(gs=(us=b.parameters)==null?void 0:us.docs)==null?void 0:gs.source}}};var hs,ps,fs;A.parameters={...A.parameters,docs:{...(hs=A.parameters)==null?void 0:hs.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...(fs=(ps=A.parameters)==null?void 0:ps.docs)==null?void 0:fs.source}}};var Cs,xs,ys;k.parameters={...k.parameters,docs:{...(Cs=k.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(ys=(xs=k.parameters)==null?void 0:xs.docs)==null?void 0:ys.source}}};var bs,As,ks;v.parameters={...v.parameters,docs:{...(bs=v.parameters)==null?void 0:bs.docs,source:{originalSource:`{
  args: legendConfig
}`,...(ks=(As=v.parameters)==null?void 0:As.docs)==null?void 0:ks.source}}};const Re=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure","WithNormalizedStacks","WithCustomTooltipConfig","WithCustomLegendConfig"],na=Object.freeze(Object.defineProperty({__proto__:null,Default:g,LoadingPlaceholder:x,WithCustomColor:h,WithCustomLegendConfig:v,WithCustomTooltipConfig:k,WithDataLabels:f,WithFormatter:C,WithHighlightedMeasure:b,WithNormalizedStacks:A,WithReferenceLine:y,WithSecondaryDimension:p,__namedExportsOrder:Re,default:Ke},Symbol.toStringTag,{value:"Module"}));export{na as C,g as D,x as L,h as W,p as a,f as b,C as c,A as d,y as e,b as f,k as g,v as h};
