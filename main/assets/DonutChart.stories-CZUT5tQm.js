import{s as T,d as F}from"./DemoProps-BWWtsAFv.js";import{j as I}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{r as V}from"./index-BQ1WsyJB.js";import{P as $}from"./PieChart-B6Yq1V80.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-DzTJ00ap.js";import"./ChartContainer-COE1xdF0.js";import"./_baseForOwn-DusBTQ6O.js";import"./_baseUniq-BpWYsmmS.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./throttle-Cb9nBjQI.js";import"./isString-DU9kh5Q5.js";import"./useStylesheet-BB85D3ff.js";import"./index-CQLhJ0vX.js";import"./iframe-BPQHNpMa.js";import"../sb-preview/runtime.js";import"./BusyIndicator-BplFOaZ-.js";import"./i18nBundle-CYrspCbQ.js";import"./Keys-F_3Gvx0K.js";import"./Label-B8i_ob21.js";import"./i18n-defaults-D_1KzAB5.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-Cmqcr3Jy.js";import"./index-CW3RQi6x.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-FzR48Pl7.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-DdAppmHO.js";import"./Placeholder-DYuRLN_o.js";import"./generateCategoricalChart-09xz1YFh.js";import"./isPlainObject-RD2cLuvA.js";import"./mapValues-DfqGXSk1.js";import"./react-content-loader.es-BgZLOsSQ.js";const e=V.forwardRef((r,j)=>{const E={legendPosition:"bottom",paddingAngle:0,innerRadius:"50%",...r.chartConfig};return I.jsx($,{...r,ref:j,chartConfig:E})});e.displayName="DonutChart";try{e.displayName="DonutChart",e.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.",displayName:"DonutChart",props:{}}}catch{}try{e.displayName="DonutChart",e.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.",displayName:"DonutChart",props:{}}}catch{}const Wr={title:"DonutChart",component:e,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:T,dimension:{accessor:"name"},measure:{accessor:"users"}}},a={},t={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)","black","yellow","pink"]}}},o={args:{chartConfig:{paddingAngle:5}}},s={args:{chartConfig:{innerRadius:"20%",outerRadius:"90%"}}},i={args:{dataset:[]}},n={args:{dimension:{accessor:"name",formatter:r=>r.slice(0,3)},measure:{accessor:"users",formatter:r=>`${r/10}`}}},c={args:{chartConfig:{activeSegment:9,showActiveSegmentDataLabel:!0}}},m={args:{measure:{accessor:"users",hideDataLabel:r=>{if(r.percent<.01)return!0}},dataset:F}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const wr=["Default","WithCustomColor","WithPaddedAngle","WithCustomRadius","LoadingPlaceholder","WithFormatter","WithHighlightedActiveSegment","HideLabels"];export{a as Default,m as HideLabels,i as LoadingPlaceholder,t as WithCustomColor,s as WithCustomRadius,n as WithFormatter,c as WithHighlightedActiveSegment,o as WithPaddedAngle,wr as __namedExportsOrder,Wr as default};
