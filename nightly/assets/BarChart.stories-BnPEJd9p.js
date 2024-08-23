import{c as Pe,s as Ke,a as Re}from"./DemoProps-BWWtsAFv.js";import{j as a}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{T as h}from"./ThemingParameters-DOkJX3Ed.js";import{e as Ve}from"./index-C-Zfmu7Z.js";import{r as O}from"./index-RYns6xqu.js";import{d as $e,C as ue,u as Ee,t as He,a as Xe,b as Ne,c as pe}from"./staticProps-C-FYjzaC.js";import{u as Ge,B as Ue}from"./useCancelAnimationFallback-oMMUv6aH.js";import{u as qe,a as Je,C as Qe,X as P,c as K,Y as Ze,b as es}from"./YAxisTicks-B7bhPhdw.js";import{u as ss,C as as}from"./ChartDataLabel-DfnCT1Xs.js";import{g as rs,u as os,a as ts,r as is,b as R}from"./useTooltipFormatter-CoO1GMFG.js";import{u as ns}from"./useOnClickInternal-CrvD_ZAc.js";import{m as cs,B as ls,g as ds,o as ms,n as us,R as ps,T as hs,p as gs}from"./ChartContainer-CyZZ-OhC.js";import{C as fs}from"./react-content-loader.es-DAsmkmNP.js";import{d as xs}from"./withWebComponent-_WQ2NUTk.js";import{u as Cs}from"./useIsRTL-C9EAOKbF.js";import"./_getPrototype-B0L0C3AT.js";import"./isPlainObject-CkURvjQU.js";import"./_baseUniq-DGDOfdbw.js";import"./tiny-invariant-CCoILDQG.js";import"./debounce-D7W5PopO.js";import"./debounce-BszCn3T9.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./utils-DNCbgL6O.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BwO4P3QM.js";import"./iframe-BnnVgAaS.js";import"../sb-preview/runtime.js";import"./BusyIndicator-C2GpyWwn.js";import"./i18nBundle-Cey6jF2F.js";import"./Keys-F_3Gvx0K.js";import"./Label-COQgloJF.js";import"./i18n-defaults-QZuI92fE.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./class-map-BevVk84l.js";import"./index-B4c19w12.js";import"./directionChange-ChfEYpsa.js";const ys=(r,l,u="")=>O.useMemo(()=>{let d=Array(l.length).fill(0),i=0;if(r instanceof Array&&l){const L=n=>l.map(c=>c.formatter(ue.getValueByDataKey(n,c.accessor,"")));r.map(L).forEach(n=>{n.forEach((c,g)=>{d[g]=Math.max(rs(c),d[g])})}),d=d.map(n=>Math.min($e,n)),i=d.reduce((n,c)=>n+c,0)}return u==="middle"?[d,{width:"auto"}]:[d,{marginLeft:i,maxWidth:`calc(100% - ${i+8}px)`}]},[r,l,u]),As=()=>a.jsxs(fs,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:h.sapContent_ImagePlaceholderBackground,foregroundColor:h.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:h.sapContent_DisabledOpacity,children:[a.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),a.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),a.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),a.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),a.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),a.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),a.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),bs={formatter:pe},vs={formatter:pe,opacity:1},ks=r=>({payload:l})=>ue.getValueByDataKey(l,r),p=O.forwardRef((r,l)=>{var F,M;const{loading:u,loadingDelay:d,dataset:i,noLegend:L,noAnimation:B,tooltipConfig:n,onDataPointClick:c,onLegendClick:g,onClick:T,style:he,className:ge,slot:fe,syncId:xe,ChartPlaceholder:Ce,children:ye,...Ae}=r,s={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:h.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...r.chartConfig},o=s.referenceLine,{dimensions:I,measures:f}=os(r.dimensions,r.measures,bs,vs),be=ts(f),m=I[0],{primaryMeasure:x,secondaryMeasure:ve}=is(f,(F=s==null?void 0:s.secondYAxis)==null?void 0:F.dataKey),ke=f.map(({accessor:e})=>e),w=s.secondYAxis?ke.findIndex(e=>{var t;return e===((t=s.secondYAxis)==null?void 0:t.dataKey)}):0,[_e,Y]=xs(l),De=Ee(g),Se=ss(m),je=O.useCallback((e,t,C)=>{if(e&&c){const y=e.value.length?e.value[1]-e.value[0]:e.value;c(Ve(C,{dataKey:Object.keys(e).filter(W=>W!=="value").find(W=>e[W]===y),value:y,payload:e.payload,dataIndex:t}))}},[c]),Le=ns(T),Be=(i==null?void 0:i.length)>30,Ie=m==null?void 0:m.accessor,[we,We]=ys(i,I,s.legendPosition),Oe=qe(s.margin,s.zoomingTool),[Te]=Je(Y,1),z=Cs(Y),{isMounted:Ye,handleBarAnimationStart:ze,handleBarAnimationEnd:Fe}=Ge(B),{chartConfig:_s,dimensions:Ds,measures:Ss,...Me}=Ae;return a.jsx(cs,{dataset:i,loading:u,loadingDelay:d,Placeholder:Ce??As,ref:_e,style:he,className:ge,slot:fe,resizeDebounce:s.resizeDebounce,...Me,children:a.jsxs(Ue,{syncId:xe,onClick:Le,stackOffset:"sign",margin:Oe,layout:"vertical",data:i,barGap:s.barGap,className:typeof c=="function"||typeof T=="function"?"has-click-handler":void 0,children:[a.jsx(Qe,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),s.xAxisVisible&&a.jsx(P,{interval:0,type:"number",tick:a.jsx(K,{config:x}),axisLine:s.xAxisVisible,tickLine:He,tickFormatter:x==null?void 0:x.formatter,height:Te,reversed:z,...s.xAxisConfig}),((M=s.secondYAxis)==null?void 0:M.dataKey)&&a.jsx(P,{dataKey:s.secondYAxis.dataKey,axisLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},tick:a.jsx(K,{config:ve,secondYAxisConfig:{color:s.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`}}),tickLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${w%11+1})`},label:{value:s.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...s.secondXAxisConfig}),s.yAxisVisible&&I.map((e,t)=>a.jsx(Ze,{interval:(e==null?void 0:e.interval)??(Be?"preserveStart":0),type:"category",dataKey:e.accessor,tick:a.jsx(es,{config:e}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:we[t],allowDuplicatedCategory:t===0,orientation:z?"right":"left",...s.yAxisConfig},e.reactKey)),Ye&&f.map((e,t)=>a.jsxs(ls,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:"monotone",dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%11+1})`,barSize:e.width,onClick:je,isAnimationActive:!B,onAnimationStart:ze,onAnimationEnd:Fe,children:[a.jsx(ds,{data:i,valueAccessor:ks(e.accessor),content:a.jsx(as,{config:e,chartType:"bar",position:"insideRight"})}),i.map((C,y)=>a.jsx(ms,{fill:R(e,C,t),stroke:R(e,C,t)},y))]},e.reactKey)),!L&&a.jsx(us,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:De,wrapperStyle:We}),o&&a.jsx(ps,{...o,stroke:(o==null?void 0:o.color)??(o==null?void 0:o.stroke),x:(o==null?void 0:o.value)??(o==null?void 0:o.x),label:o==null?void 0:o.label}),(n==null?void 0:n.active)!==!1&&a.jsx(hs,{cursor:Xe,formatter:be,contentStyle:Ne,labelFormatter:Se,...n}),s.zoomingTool&&a.jsx(gs,{y:10,dataKey:Ie,tickFormatter:m==null?void 0:m.formatter,stroke:h.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ye]})})});p.displayName="BarChart";try{p.displayName="BarChart",p.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}try{p.displayName="BarChart",p.__docgenInfo={description:"A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.",displayName:"BarChart",props:{}}}catch{}const ma={title:"BarChart",component:p,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Pe,dimensions:[{accessor:"name"}],measures:[{accessor:"users",label:"Users",formatter:r=>r.toLocaleString(),opacity:.6},{accessor:"sessions",label:"Active Sessions",formatter:r=>`${r} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}]}},A={},b={args:{measures:[{accessor:"users",color:"red"}],dataset:Ke}},v={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:Re}},k={args:{measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},_={args:{dimensions:[{accessor:"name",formatter:r=>r.slice(0,3)}],measures:[{accessor:"users",formatter:r=>`${r/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}],chartConfig:{zoomingTool:!0}}},D={args:{dataset:[]}},S={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}}}},j={args:{measures:[{accessor:"users",stackId:"A"},{accessor:"sessions",stackId:"A"},{accessor:"volume",highlightColor:(r,l,u)=>{if(u.name==="February")return"red"}}]}};var V,$,E;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(E=($=A.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var H,X,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(N=(X=b.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var G,U,q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,Q,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(Z=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,se,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,oe,te;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(te=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ne,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,de,me;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const ua=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithHighlightedMeasure"];export{A as Default,D as LoadingPlaceholder,b as WithCustomColor,k as WithDataLabels,_ as WithFormatter,j as WithHighlightedMeasure,S as WithReferenceLine,v as WithSecondaryDimension,ua as __namedExportsOrder,ma as default};
