import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-C4MAm31e.js";import"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./index-DEe9W-hO.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-BgkCdKQr.js";import"./ChartContainer-CI7lcR3J.js";import"./_baseForOwn-DVWQo5xw.js";import"./_baseUniq-BqAhPu7p.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./utils-DgTsnvPN.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./useStylesheet-BlIIJPI8.js";import"./index-DP_1Pf-i.js";import"./iframe-CIrk4XW5.js";import"../sb-preview/runtime.js";import"./BusyIndicator-B1mvkq_I.js";import"./withWebComponent-BxrD_3pN.js";import"./i18nBundle-NJJr-Wgh.js";import"./Keys-B00bFMgT.js";import"./Integer-DgRYWdxf.js";import"./Device-RcFucVeJ.js";import"./Label-BqwA1t1q.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-Cl7uVo8B.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./class-map-CVq5yHuN.js";import"./index-Cy3tZWHc.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-DsetRNqa.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Chqq3b2P.js";import"./Placeholder-Obs_SouH.js";import"./generateCategoricalChart-DGQuSwO_.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./react-content-loader.es-CK-1p032.js";const lr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var l,d,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,f,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const dr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,t as LoadingPlaceholder,e as WithCustomColor,a as WithFormatter,dr as __namedExportsOrder,lr as default};
