import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart--iOaPr-t.js";import"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./index-DEe9W-hO.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-DVTYzynM.js";import"./ChartContainer-D2P7WoRW.js";import"./_baseForOwn-DVWQo5xw.js";import"./_baseUniq-BqAhPu7p.js";import"./index-CkjElkqm.js";import"./i18n-defaults-BQ1aH0X1.js";import"./i18nBundle-NJJr-Wgh.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./useStylesheet-BlIIJPI8.js";import"./I18nStore-DrHVTNpv.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./index-CwAmHk73.js";import"./iframe-C7_2vYGb.js";import"../sb-preview/runtime.js";import"./Label-BA6opWOJ.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-BG38O0o4.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-DsetRNqa.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Chqq3b2P.js";import"./Placeholder-CQH2ziNf.js";import"./generateCategoricalChart-YEcjcC3y.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./react-content-loader.es-CK-1p032.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const nr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,a as LoadingPlaceholder,e as WithCustomColor,t as WithFormatter,nr as __namedExportsOrder,cr as default};
