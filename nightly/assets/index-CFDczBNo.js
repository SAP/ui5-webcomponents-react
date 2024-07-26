import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{T as C}from"./ThemingParameters-DOkJX3Ed.js";import{e as B}from"./index-C-Zfmu7Z.js";import{r as H}from"./index-ClU-Tc1p.js";import{C as Ct,a as E}from"./defaults-BZaSiIBS.js";import{u as mt,a as ft,C as At,Y as w,b as Y,X as I,c as z}from"./YAxisTicks-BfRjppte.js";import{u as vt,C as M}from"./ChartDataLabel-CO3QAtmY.js";import{u as bt,t as kt,a as _t,b as jt}from"./staticProps-CzVU8Uee.js";import{u as Lt}from"./useLongestYAxisLabel-gO2kv9bw.js";import{u as wt}from"./useOnClickInternal-BlzHz4BI.js";import{u as Yt,a as It,r as zt,b as $}from"./useTooltipFormatter-pnyfQ-cB.js";import{C as Pt}from"./ChartContainer-CjcZzcVn.js";import{C as Kt}from"./react-content-loader.es-BFHa96Im.js";import{C as Tt,A as Vt}from"./ComposedChart-Bu4xmUR3.js";import{R as Dt,T as Ot,d as Ft,a as St,e as Nt,h as Rt,B as Wt}from"./generateCategoricalChart-B7R4cYtq.js";import{L as Bt}from"./Line-BagyBkZr.js";import{d as Ht}from"./withWebComponent-Bw_l6Ewh.js";import{u as Mt}from"./useIsRTL-p2PDFm8P.js";const $t=o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"20",y:"20",width:"85",height:"15"}),o.jsx("rect",{x:"20",y:"40",width:"117",height:"15"}),o.jsx("rect",{x:"20",y:"60",width:"67",height:"15"}),o.jsx("rect",{x:"20",y:"80",width:"75",height:"15"}),o.jsx("rect",{x:"20",y:"100",width:"125",height:"15"}),o.jsx("rect",{x:"20",y:"120",width:"60",height:"15"})]}),Et=o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:"20",y:"50",width:"15",height:"85"}),o.jsx("rect",{x:"40",y:"18",width:"15",height:"117"}),o.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),o.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),o.jsx("rect",{x:"100",y:"10",width:"15",height:"125"}),o.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]}),Xt=o.jsx(o.Fragment,{children:o.jsx("path",{d:"M20 20 L75 40 L85 60 L125 80 L105 100 L90 120 L55 135 L92 120 L107 100 L127 80 L87 60 L77 40 L22 20 Z",fill:"none",strokeWidth:"2"})}),qt=o.jsx(o.Fragment,{children:o.jsx("path",{d:"M20 135 L40 80 L60 70 L80 30 L100 50 L120 65 L135 100 L120 67 L100 52 L80 32 L60 72 L40 82 L20 137 Z",fill:"none",strokeWidth:"2"})}),m=({layout:r,measures:k})=>{const d=new Set(k.map(_=>_.type));return o.jsxs(Kt,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:C.sapContent_ImagePlaceholderBackground,foregroundColor:C.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:C.sapContent_DisabledOpacity,children:[r==="vertical"&&o.jsx("rect",{x:"20",y:"10",width:"1",height:"135"}),r==="horizontal"&&o.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),r==="vertical"&&d.has("bar")&&$t,r==="horizontal"&&d.has("bar")&&Et,r==="vertical"&&(d.has("line")||d.has("area"))&&Xt,r==="horizontal"&&(d.has("line")||d.has("area"))&&qt]})};try{m.displayName="ComposedChartPlaceholder",m.__docgenInfo={description:"",displayName:"ComposedChartPlaceholder",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"(IChartMeasure & { type: string; })[]"}}}}}catch{}try{m.displayName="ComposedChartPlaceholder",m.__docgenInfo={description:"",displayName:"ComposedChartPlaceholder",props:{layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},measures:{defaultValue:null,description:"",name:"measures",required:!0,type:{name:"(IChartMeasure & { type: string; })[]"}}}}}catch{}const Zt={formatter:E},Gt={formatter:E,opacity:1},Ut={line:Bt,bar:Wt,area:Vt},f=H.forwardRef((r,k)=>{var O,F,S;const{loading:d,loadingDelay:_,dataset:h,onDataPointClick:A,noLegend:X,noAnimation:q,tooltipConfig:v,onLegendClick:Z,onClick:P,layout:c="horizontal",style:G,className:U,slot:J,syncId:Q,ChartPlaceholder:tt,children:ot,...st}=r,[at,K]=Ht(k),s={yAxisLabelsVisible:!0,yAxisVisible:!1,xAxisVisible:!0,gridStroke:C.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",zoomingTool:!1,resizeDebounce:250,yAxisWidth:null,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},secondXAxisConfig:{},...r.chartConfig},{referenceLine:e}=s,{dimensions:j,measures:n}=Yt(r.dimensions,r.measures,Zt,Gt),et=It(n),p=j[0],{primaryMeasure:y,secondaryMeasure:T}=zt(n,(O=s==null?void 0:s.secondYAxis)==null?void 0:O.dataKey),it=vt(p),rt=n.map(({accessor:t})=>t),u=s.secondYAxis?rt.findIndex(t=>{var i;return t===((i=s.secondYAxis)==null?void 0:i.dataKey)}):0,ct=t=>({payload:i})=>Ct.getValueByDataKey(i,t),L=(t,i,x)=>{if(typeof A=="function")if(typeof i=="number"){const a=Array.isArray(t==null?void 0:t.value);A(B(x,{value:a?t.value[1]-t.value[0]:t.value,dataIndex:t.index??i,dataKey:a?Object.keys(t).filter(l=>t.value.length?t[l]===t.value[1]-t.value[0]:t[l]===t.value&&l!=="value")[0]:t.dataKey??Object.keys(t).find(l=>t[l]&&t[l]===t.value&&l!=="value"),payload:t.payload}))}else A(B({},{value:Array.isArray(i.value)?i.value[1]-i.value[0]:i.value,dataKey:i.dataKey,dataIndex:i.index,payload:i.payload}))},lt=bt(Z),nt=wt(P),b=(h==null?void 0:h.length)>30,dt=p==null?void 0:p.accessor,[V,ht]=Lt(h,c==="vertical"?j:n,s.legendPosition),pt=mt(s.margin,s.zoomingTool),xt=ft(K,c==="vertical"?1:r.dimensions.length),D={axisLine:s.yAxisVisible,tickLine:kt,tickFormatter:y==null?void 0:y.formatter,interval:0},ut=H.useCallback(()=>o.jsx(m,{layout:c,measures:n}),[c,n]),{chartConfig:Jt,dimensions:Qt,measures:to,...yt}=st,g=Mt(K);return o.jsx(Pt,{ref:at,loading:d,loadingDelay:_,dataset:h,Placeholder:tt??ut,style:G,className:U,slot:J,resizeDebounce:s.resizeDebounce,...yt,children:o.jsxs(Tt,{syncId:Q,onClick:nt,stackOffset:"sign",margin:pt,data:h,layout:c,className:typeof A=="function"||typeof P=="function"?"has-click-handler":void 0,children:[o.jsx(At,{vertical:s.gridVertical,horizontal:s.gridHorizontal,stroke:s.gridStroke}),j.map((t,i)=>{let x;const a={dataKey:t.accessor,interval:(t==null?void 0:t.interval)??(b?"preserveStart":0),tickLine:i<1,axisLine:i<1,allowDuplicatedCategory:i===0};return c==="vertical"?(a.type="category",a.visible=!1,a.hide=!s.yAxisVisible,a.tick=o.jsx(Y,{config:t}),a.yAxisId=i,a.width=s.yAxisWidth??V,x=w,a.orientation=g?"right":"left"):(a.dataKey=t.accessor,a.tick=o.jsx(z,{config:t}),a.hide=!s.xAxisVisible,a.xAxisId=i,a.height=xt[i],x=I,a.reversed=g),o.jsx(x,{...a},t.reactKey)}),c==="horizontal"&&o.jsx(w,{...D,yAxisId:"primary",width:s.yAxisWidth??V,orientation:g?"right":"left",tick:s.yAxisLabelsVisible?o.jsx(Y,{config:y}):!1,...s.yAxisConfig}),c==="vertical"&&o.jsx(I,{...D,reversed:g,xAxisId:"primary",type:"number",tick:o.jsx(z,{config:y}),...s.xAxisConfig}),((F=s.secondYAxis)==null?void 0:F.dataKey)&&c==="horizontal"&&o.jsx(w,{dataKey:s.secondYAxis.dataKey,axisLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`},tick:o.jsx(Y,{config:T,secondYAxisConfig:{color:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`}}),tickLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`},label:{value:s.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:g?"left":"right",interval:0,yAxisId:"secondary",...s.secondYAxisConfig}),((S=s.secondYAxis)==null?void 0:S.dataKey)&&c==="vertical"&&o.jsx(I,{dataKey:s.secondYAxis.dataKey,axisLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`},tick:o.jsx(z,{config:T,secondYAxisConfig:{color:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`}}),tickLine:{stroke:s.secondYAxis.color??`var(--sapChart_OrderedColor_${u%11+1})`},label:{value:s.secondYAxis.name,offset:2,angle:90,position:"center"},orientation:"top",interval:0,xAxisId:"secondary",type:"number",...s.secondXAxisConfig}),e&&o.jsx(Dt,{...e,stroke:(e==null?void 0:e.color)??(e==null?void 0:e.stroke),y:e!=null&&e.value?c==="horizontal"?e==null?void 0:e.value:void 0:e==null?void 0:e.y,x:e!=null&&e.value?c==="vertical"?e==null?void 0:e.value:void 0:e==null?void 0:e.x,yAxisId:(e==null?void 0:e.yAxisId)??c==="horizontal"?"primary":void 0,xAxisId:(e==null?void 0:e.xAxisId)??c==="vertical"?"primary":void 0,label:e==null?void 0:e.label}),(v==null?void 0:v.active)!==!1&&o.jsx(Ot,{cursor:_t,formatter:et,contentStyle:jt,labelFormatter:it,...v}),!X&&o.jsx(Ft,{verticalAlign:s.legendPosition,align:s.legendHorizontalAlign,onClick:lt,wrapperStyle:ht}),n==null?void 0:n.map((t,i)=>{var N,R;const x=Ut[t.type],a={isAnimationActive:!q};let l="top";switch(t.type){case"line":a.activeDot={onClick:L},a.strokeWidth=t.width,a.strokeOpacity=t.opacity,a.dot=t.showDot??!b;break;case"bar":a.hide=t.hide,a.fillOpacity=t.opacity,a.strokeOpacity=t.opacity,a.barSize=t.width,a.onClick=L,a.stackId=t.stackId??void 0,a.labelPosition=t.stackId?"insideTop":"top",c==="vertical"?l="insideRight":l="insideTop";break;case"area":a.dot=!b,a.fillOpacity=.3,a.strokeOpacity=t.opacity,a.strokeWidth=t.width,a.activeDot={onClick:L};break}return c==="vertical"?a.xAxisId=((N=s.secondYAxis)==null?void 0:N.dataKey)===t.accessor?"secondary":"primary":a.yAxisId=((R=s.secondYAxis)==null?void 0:R.dataKey)===t.accessor?"secondary":"primary",o.jsx(x,{name:t.label??t.accessor,label:t.type==="bar"||b?void 0:o.jsx(M,{config:t,chartType:t.type,position:l}),stroke:t.color??`var(--sapChart_OrderedColor_${i%11+1})`,fill:t.color??`var(--sapChart_OrderedColor_${i%11+1})`,type:"monotone",dataKey:t.accessor,...a,children:t.type==="bar"&&o.jsxs(o.Fragment,{children:[o.jsx(St,{data:h,valueAccessor:ct(t.accessor),content:o.jsx(M,{config:t,chartType:"column",position:"insideTop"})}),h.map((W,gt)=>o.jsx(Nt,{fill:$(t,W,i),stroke:$(t,W,i)},gt))]})},t.reactKey)}),s.zoomingTool&&o.jsx(Rt,{y:10,dataKey:dt,tickFormatter:p==null?void 0:p.formatter,stroke:C.sapObjectHeader_BorderColor,travellerWidth:10,height:20}),ot]})})});f.displayName="ComposedChart";try{f.displayName="ComposedChart",f.__docgenInfo={description:"The `ComposedChart` enables you to combine different chart types in one chart, e.g. showing bars together with lines.",displayName:"ComposedChart",props:{}}}catch{}try{f.displayName="ComposedChart",f.__docgenInfo={description:"The `ComposedChart` enables you to combine different chart types in one chart, e.g. showing bars together with lines.",displayName:"ComposedChart",props:{}}}catch{}export{f as C};
