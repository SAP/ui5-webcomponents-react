import{c as R}from"./DemoProps-BWWtsAFv.js";import{j as i}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{T as C}from"./ThemingParameters-DOkJX3Ed.js";import{r as M}from"./index-DEe9W-hO.js";import{u as F}from"./useLongestYAxisLabel-BGihnBaq.js";import{u as U}from"./useTooltipFormatter-CKPI5pac.js";import{a as l,C as Y}from"./defaults-cSwjFkvl.js";import{C as W}from"./index-BTjbf0U1.js";import{C as G}from"./react-content-loader.es-CK-1p032.js";import{u as Z}from"./useIsomorphicId-CULvwDT0.js";import"./ChartContainer-CNtbS5M-.js";import"./_baseForOwn-DVWQo5xw.js";import"./_baseUniq-BqAhPu7p.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./utils-DgTsnvPN.js";import"./clsx-B-dksMZM.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./useStylesheet-BlIIJPI8.js";import"./index-XXZonsW8.js";import"./iframe-DU2Y8nfz.js";import"../sb-preview/runtime.js";import"./BusyIndicator-B1mvkq_I.js";import"./withWebComponent-BxrD_3pN.js";import"./i18nBundle-NJJr-Wgh.js";import"./Keys-B00bFMgT.js";import"./Integer-DgRYWdxf.js";import"./Device-RcFucVeJ.js";import"./Label-BqwA1t1q.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-Cl7uVo8B.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./class-map-CVq5yHuN.js";import"./index-Bou0u6gP.js";import"./tiny-invariant-CCoILDQG.js";import"./index-D8PAbW1n.js";import"./YAxisTicks-BCX7FOVO.js";import"./generateCategoricalChart-JltjzL8R.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./debounce-D7W5PopO.js";import"./ChartDataLabel-BAa9HCdw.js";import"./staticProps-DsetRNqa.js";import"./useOnClickInternal-Chqq3b2P.js";import"./ComposedChart-C3g12dIO.js";import"./Line-BI4frcVm.js";import"./Scatter-VJ8Qufx4.js";import"./useIsRTL-cgFvq9WG.js";import"./directionChange-F0SVwOWF.js";const q=(e,c)=>M.useMemo(()=>{const n=[],r=[],t=[];return e==null||e.forEach((o,s)=>{o.type==="bar"&&(n.push({...o,opacity:0,hide:!0,hideDataLabel:!0,showDot:!1,formatter:l}),r.push({color:o.color??`var(--sapChart_OrderedColor_${s%11+1})`,formatter:l,...o})),o.type==="line"&&(n.push({color:o.color??`var(--sapChart_OrderedColor_${s%11+1})`,formatter:l,...o}),r.push({...o,opacity:0,hideDataLabel:!0,showDot:!1,formatter:l}))}),c==null||c.forEach(o=>{const s={};n.forEach(a=>{a.type==="line"&&(s[`__${a.accessor}`]=Y.getValueByDataKey(o,a.accessor),s[a.accessor]=1)}),t.push({...o,...s})}),{lineMeasures:n,columnMeasures:r,columnDataset:t}},[e,c]),d=e=>i.jsxs(G,{viewBox:"0 0 165 145",preserveAspectRatio:"xMidYMid meet",width:"100%",height:"100%",speed:2,backgroundColor:C.sapContent_ImagePlaceholderBackground,foregroundColor:C.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:C.sapContent_DisabledOpacity,...e,children:[i.jsx("path",{d:"M 20 56 L 39 33 L 57 25 L 77 5 L 99 25 L 125 31 L 139 25 L 125 32 L 98 27 L 77 10 L 58 27 L 39 35 L 20 56 Z",fill:"none",strokeWidth:"2"}),i.jsx("rect",{x:"10",y:"135",width:"135",height:"1"}),i.jsx("rect",{x:"20",y:"65",width:"15",height:"70"}),i.jsx("rect",{x:"40",y:"58",width:"15",height:"77"}),i.jsx("rect",{x:"60",y:"68",width:"15",height:"67"}),i.jsx("rect",{x:"80",y:"60",width:"15",height:"75"}),i.jsx("rect",{x:"100",y:"35",width:"15",height:"100"}),i.jsx("rect",{x:"120",y:"75",width:"15",height:"60"})]});try{d.displayName="ColumnChartWithTrendPlaceholder",d.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}try{d.displayName="ColumnChartWithTrendPlaceholder",d.__docgenInfo={description:"",displayName:"ColumnChartWithTrendPlaceholder",props:{}}}catch{}const J={formatter:l},Q={formatter:l,opacity:1},X={wrapperStyle:{visibility:"hidden"}},h=M.forwardRef((e,c)=>{const{loading:n,dataset:r,style:t,className:o,slot:s,onClick:a,noLegend:I,noAnimation:x,onDataPointClick:p,onLegendClick:V,ChartPlaceholder:$,...z}=e,b=Z(),L={yAxisVisible:!1,xAxisVisible:!0,gridStroke:C.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:"bottom",legendHorizontalAlign:"left",barGap:3,zoomingTool:!1,resizeDebounce:250,...e.chartConfig},{dimensions:w,measures:E}=U(e.dimensions,e.measures,J,Q),{lineMeasures:T,columnMeasures:y,columnDataset:D}=q(E,r),[S]=F(D,y,L.legendPosition),O={formatter:(H,K,m)=>{const _=T.find(u=>u.type==="line"&&u.accessor===m.dataKey);return _?_.formatter(m.payload[`__${_.accessor}`]):y.find(u=>u.accessor===m.dataKey).formatter(H,K,m)}},{chartConfig:ee,dimensions:te,measures:oe,tooltipConfig:re,...B}=z;return i.jsxs("div",{ref:c,style:{display:"flex",flexDirection:"column",height:t==null?void 0:t.height,width:t==null?void 0:t.width,...t},className:o,slot:s,...B,children:[(r==null?void 0:r.length)!==0&&i.jsx(W,{className:typeof p=="function"||typeof a=="function"?"has-click-handler":void 0,tooltipConfig:X,noAnimation:x,loading:n,onClick:a,syncId:b,style:{...t,height:`calc(${t==null?void 0:t.height} * 0.2)`},dataset:r,measures:T,dimensions:w,noLegend:!0,onDataPointClick:p,chartConfig:{xAxisVisible:!1,yAxisVisible:!1,yAxisTicksVisible:!1,gridHorizontal:!1,yAxisLabelsVisible:!1,yAxisWidth:S}}),i.jsx(W,{onLegendClick:V,tooltipConfig:O,noAnimation:x,noLegend:I,loading:n,onClick:a,onDataPointClick:p,syncId:b,ChartPlaceholder:$??d,dataset:D,measures:y,dimensions:w,chartConfig:L,style:{...t,height:`calc(${t==null?void 0:t.height} * ${(r==null?void 0:r.length)!==0?.8:1})`},className:typeof p=="function"||typeof a=="function"?"has-click-handler":void 0})]})});h.displayName="ColumnChartWithTrend";try{h.displayName="ColumnChartWithTrend",h.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{}}}catch{}try{h.displayName="ColumnChartWithTrend",h.__docgenInfo={description:"A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.",displayName:"ColumnChartWithTrend",props:{}}}catch{}const rt={title:"ColumnChartWithTrend",component:h,args:{style:{height:"400px"},dataset:R,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"line"},{accessor:"sessions",label:"Active Sessions",type:"bar"}]}},g={},f={args:{dataset:[]}};var v,A,j;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(j=(A=g.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var P,N,k;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(k=(N=f.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const it=["Default","LoadingPlaceholder"];export{g as Default,f as LoadingPlaceholder,it as __namedExportsOrder,rt as default};
