import{f as dt,g as ht}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{T as _}from"./ThemingParameters-DOkJX3Ed.js";import{e as D}from"./index-C-Zfmu7Z.js";import{r as f}from"./index-RYns6xqu.js";import{X as K,Y as W,a as gt,u as xt,C as bt,c as Ct,b as ft}from"./YAxisTicks-DYxzEOhw.js";import{u as ut,x as yt,t as vt,a as _t,b as At,c as kt}from"./staticProps-Cv_Pl17n.js";import{u as jt}from"./useLongestYAxisLabel-CFXo21Kl.js";import{u as Pt,a as wt}from"./useTooltipFormatter-DBjoVhBj.js";import{k as Tt,l as Dt,m as St,n as It,R as S,T as Nt}from"./ChartContainer-CxDlWoyz.js";import{C as Rt}from"./react-content-loader.es-DAsmkmNP.js";import{S as Y,Z as B}from"./Scatter-C1F9nk99.js";import{d as zt}from"./withWebComponent-_WQ2NUTk.js";import{u as Ot}from"./useIsRTL-C9EAOKbF.js";import"./_getPrototype-B0L0C3AT.js";import"./_baseUniq-DGDOfdbw.js";import"./debounce-D7W5PopO.js";import"./isPlainObject-CkURvjQU.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-BszCn3T9.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./utils-DNCbgL6O.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-DPXSmAm1.js";import"./iframe-GLV1doqT.js";import"../sb-preview/runtime.js";import"./BusyIndicator-C2GpyWwn.js";import"./i18nBundle-Cey6jF2F.js";import"./Keys-F_3Gvx0K.js";import"./Label-COQgloJF.js";import"./i18n-defaults-QZuI92fE.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./class-map-BevVk84l.js";import"./index-BPhLdmb1.js";import"./directionChange-ChfEYpsa.js";var Vt=Tt({chartName:"ScatterChart",GraphicalChild:Y,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:K},{axisType:"yAxis",AxisComp:W},{axisType:"zAxis",AxisComp:B}],formatAxisMap:Dt});const g=l=>a.jsxs(Rt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:_.sapContent_ImagePlaceholderBackground,foregroundColor:_.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:_.sapContent_DisabledOpacity,...l,children:[a.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),a.jsx("circle",{cx:"20",cy:"90",r:"2"}),a.jsx("circle",{cx:"40",cy:"58",r:"3"}),a.jsx("circle",{cx:"60",cy:"108",r:"14"}),a.jsx("circle",{cx:"85",cy:"87",r:"8"}),a.jsx("circle",{cx:"105",cy:"50",r:"6"}),a.jsx("circle",{cx:"125",cy:"115",r:"4"}),a.jsx("circle",{cx:"78",cy:"58",r:"10"}),a.jsx("circle",{cx:"28",cy:"115",r:"4"})]});try{g.displayName="ScatterChartPlaceholder",g.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}try{g.displayName="ScatterChartPlaceholder",g.__docgenInfo={description:"",displayName:"ScatterChartPlaceholder",props:{}}}catch{}const Et={formatter:kt},p=f.forwardRef((l,U)=>{var w;const{dataset:n,loading:$,loadingDelay:G,noLegend:Z,noAnimation:q,tooltipConfig:x,onDataPointClick:d,onLegendClick:J,onClick:A,style:L,className:Q,slot:X,ChartPlaceholder:M,children:tt,...ot}=l,c={yAxisVisible:!1,xAxisVisible:!0,gridStroke:_.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,...l.chartConfig},{referenceLine:r,referenceLineX:i}=c,{measures:b}=Pt([],l.measures,{},Et),st=wt(b),[at,j]=zt(U),m=f.useRef(!1),rt=ut(J),it=f.useCallback((o,h)=>{var C,T;typeof A=="function"&&!m.current&&A(D(h,{payload:(T=(C=o==null?void 0:o.activePayload)==null?void 0:C[0])==null?void 0:T.payload,activePayloads:o==null?void 0:o.activePayload})),m.current&&(m.current=!1)},[A,m.current]),et=f.useCallback((o,h,C)=>{o&&d&&(d(D(C,{value:o.node,dataKey:o.zAxis.dataKey,dataIndex:h,payload:o.payload})),m.current=!0)},[d,m.current]),ct=(n==null?void 0:n.length)>30,s=b.find(({axis:o})=>o==="x"),t=b.find(({axis:o})=>o==="y"),e=b.find(({axis:o})=>o==="z"),[P,lt]=jt((w=n==null?void 0:n[0])==null?void 0:w.data,[t],c.legendPosition),nt=gt(j,1),mt=xt(c.margin,c.zoomingTool),{chartConfig:Ft,measures:Ht,...pt}=ot,k=Ot(j);return a.jsx(St,{dataset:n,loading:$,loadingDelay:G,Placeholder:M??g,ref:at,style:L,className:Q,slot:X,resizeDebounce:c.resizeDebounce,...pt,children:a.jsxs(Vt,{onClick:it,margin:mt,className:typeof d=="function"?"has-click-handler":void 0,children:[a.jsx(bt,{vertical:c.gridVertical,horizontal:c.gridHorizontal,stroke:c.gridStroke}),c.xAxisVisible&&a.jsx(K,{type:"number",name:s==null?void 0:s.label,dataKey:s==null?void 0:s.accessor,xAxisId:0,interval:(s==null?void 0:s.interval)??(ct?"preserveStart":0),tick:a.jsx(Ct,{config:s}),padding:yt,height:nt[0],reversed:k,label:s!=null&&s.label?{value:s==null?void 0:s.label,dy:15,position:"insideRight"}:0},typeof(s==null?void 0:s.accessor)!="function"?s==null?void 0:s.accessor:s==null?void 0:s.label),a.jsx(W,{label:t!=null&&t.label?{value:t==null?void 0:t.label,angle:-90,position:k?"insideRight":"insideLeft"}:!1,type:"number",name:t==null?void 0:t.label,axisLine:c.yAxisVisible,tickLine:vt,dataKey:t==null?void 0:t.accessor,tickFormatter:t==null?void 0:t.formatter,interval:0,tick:a.jsx(ft,{config:t}),width:t!=null&&t.label?P+10:P,margin:t!=null&&t.label?{left:200}:0,orientation:k===!0?"right":"left"},typeof(t==null?void 0:t.accessor)!="function"?t==null?void 0:t.accessor:t==null?void 0:t.label),a.jsx(B,{name:e==null?void 0:e.label,dataKey:e==null?void 0:e.accessor,range:[0,5e3]},typeof(e==null?void 0:e.accessor)!="function"?e==null?void 0:e.accessor:e==null?void 0:e.label),n==null?void 0:n.map((o,h)=>a.jsx(Y,{className:typeof d=="function"?"has-click-handler":void 0,onMouseDown:et,opacity:o.opacity,data:o==null?void 0:o.data,name:o==null?void 0:o.label,fill:(o==null?void 0:o.color)??`var(--sapChart_OrderedColor_${h%11+1})`,isAnimationActive:!q},o==null?void 0:o.label)),!Z&&a.jsx(It,{verticalAlign:c.legendPosition,align:c.legendHorizontalAlign,onClick:rt,wrapperStyle:lt}),r&&a.jsx(S,{...r,stroke:(r==null?void 0:r.color)??(r==null?void 0:r.stroke),y:(r==null?void 0:r.value)??(r==null?void 0:r.y),label:r==null?void 0:r.label}),i&&a.jsx(S,{...i,stroke:(i==null?void 0:i.color)??(i==null?void 0:i.stroke),x:(i==null?void 0:i.value)??(i==null?void 0:i.x),label:i==null?void 0:i.label}),(x==null?void 0:x.active)!==!1&&a.jsx(Nt,{cursor:_t,formatter:st,contentStyle:At,...x}),tt]})})});p.displayName="ScatterChart";try{p.displayName="ScatterChart",p.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.`,displayName:"ScatterChart",props:{}}}catch{}try{p.displayName="ScatterChart",p.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.`,displayName:"ScatterChart",props:{}}}catch{}const ko={title:"ScatterChart",component:p,argTypes:{children:{control:{disable:!0}}},args:{dataset:dt,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",formatter:l=>`${l}k`,axis:"y"},{accessor:"volume",axis:"z"}]}},u={},y={args:{dataset:ht,measures:[{accessor:"users",label:"Users",axis:"x"},{accessor:"sessions",label:"Sessions",axis:"y"},{accessor:"volume",axis:"z"}]}},v={args:{dataset:[]}};var I,N,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,O,V;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dataset: scatterColorDataSet,
    measures: [{
      accessor: 'users',
      label: 'Users',
      axis: 'x'
    }, {
      accessor: 'sessions',
      label: 'Sessions',
      axis: 'y'
    }, {
      accessor: 'volume',
      axis: 'z'
    }]
  }
}`,...(V=(O=y.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var E,F,H;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const jo=["Default","WithCustomColor","LoadingPlaceholder"];export{u as Default,v as LoadingPlaceholder,y as WithCustomColor,jo as __namedExportsOrder,ko as default};
