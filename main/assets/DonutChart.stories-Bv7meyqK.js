import{s as T,d as F}from"./DemoProps-BWWtsAFv.js";import{j as I}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{r as V}from"./index-DEe9W-hO.js";import{P as $}from"./PieChart--iOaPr-t.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-DVTYzynM.js";import"./ChartContainer-D2P7WoRW.js";import"./_baseForOwn-DVWQo5xw.js";import"./_baseUniq-BqAhPu7p.js";import"./index-CkjElkqm.js";import"./i18n-defaults-BQ1aH0X1.js";import"./i18nBundle-NJJr-Wgh.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./useStylesheet-BlIIJPI8.js";import"./I18nStore-DrHVTNpv.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./index-CwAmHk73.js";import"./iframe-C7_2vYGb.js";import"../sb-preview/runtime.js";import"./Label-BA6opWOJ.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-BG38O0o4.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-DsetRNqa.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Chqq3b2P.js";import"./Placeholder-CQH2ziNf.js";import"./generateCategoricalChart-YEcjcC3y.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./react-content-loader.es-CK-1p032.js";const e=V.forwardRef((r,j)=>{const E={legendPosition:"bottom",paddingAngle:0,innerRadius:"50%",...r.chartConfig};return I.jsx($,{...r,ref:j,chartConfig:E})});e.displayName="DonutChart";try{e.displayName="DonutChart",e.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.",displayName:"DonutChart",props:{}}}catch{}try{e.displayName="DonutChart",e.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.",displayName:"DonutChart",props:{}}}catch{}const wr={title:"DonutChart",component:e,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:T,dimension:{accessor:"name"},measure:{accessor:"users"}}},a={},t={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)","black","yellow","pink"]}}},o={args:{chartConfig:{paddingAngle:5}}},s={args:{chartConfig:{innerRadius:"20%",outerRadius:"90%"}}},i={args:{dataset:[]}},n={args:{dimension:{accessor:"name",formatter:r=>r.slice(0,3)},measure:{accessor:"users",formatter:r=>`${r/10}`}}},c={args:{chartConfig:{activeSegment:9,showActiveSegmentDataLabel:!0}}},m={args:{measure:{accessor:"users",hideDataLabel:r=>{if(r.percent<.01)return!0}},dataset:F}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,C,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var D,S,_;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var b,A,W;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var w,v,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    dimension: {
      accessor: 'name',
      formatter: el => el.slice(0, 3)
    },
    measure: {
      accessor: 'users',
      formatter: el => \`\${el / 10}\`
    }
  }
}`,...(P=(v=n.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var R,L,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      activeSegment: 9,
      showActiveSegmentDataLabel: true
    }
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var x,k,H;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: chartConfig => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      }
    },
    dataset: simpleDataSetWithSmallValues
  }
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const vr=["Default","WithCustomColor","WithPaddedAngle","WithCustomRadius","LoadingPlaceholder","WithFormatter","WithHighlightedActiveSegment","HideLabels"];export{a as Default,m as HideLabels,i as LoadingPlaceholder,t as WithCustomColor,s as WithCustomRadius,n as WithFormatter,c as WithHighlightedActiveSegment,o as WithPaddedAngle,vr as __namedExportsOrder,wr as default};
