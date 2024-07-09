import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-B6Yq1V80.js";import"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./index-BQ1WsyJB.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-DzTJ00ap.js";import"./ChartContainer-COE1xdF0.js";import"./_baseForOwn-DusBTQ6O.js";import"./_baseUniq-BpWYsmmS.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./throttle-Cb9nBjQI.js";import"./isString-DU9kh5Q5.js";import"./useStylesheet-BB85D3ff.js";import"./index-CQLhJ0vX.js";import"./iframe-BPQHNpMa.js";import"../sb-preview/runtime.js";import"./BusyIndicator-BplFOaZ-.js";import"./i18nBundle-CYrspCbQ.js";import"./Keys-F_3Gvx0K.js";import"./Label-B8i_ob21.js";import"./i18n-defaults-D_1KzAB5.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-Cmqcr3Jy.js";import"./index-CW3RQi6x.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-FzR48Pl7.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-DdAppmHO.js";import"./Placeholder-DYuRLN_o.js";import"./generateCategoricalChart-09xz1YFh.js";import"./isPlainObject-RD2cLuvA.js";import"./mapValues-DfqGXSk1.js";import"./react-content-loader.es-BgZLOsSQ.js";const ir={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,f,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      formatter: d => d > 200 ? 'over 200' : 'lower'
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const cr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,a as LoadingPlaceholder,e as WithCustomColor,t as WithFormatter,cr as __namedExportsOrder,ir as default};
