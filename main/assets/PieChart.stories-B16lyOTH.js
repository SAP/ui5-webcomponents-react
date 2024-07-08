import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-BgBo0Sm1.js";import"./useIsomorphicLayoutEffect-kTr5k6y8.js";import"./index-BQ1WsyJB.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-BcujcU7u.js";import"./ChartContainer-DjrBkB_S.js";import"./_baseForOwn-DusBTQ6O.js";import"./_baseUniq-BpWYsmmS.js";import"./addCustomCSSWithScoping-CgvYqGaR.js";import"./UI5Element-CpDKvy14.js";import"./CustomElementsScopeUtils-CUyxdJhU.js";import"./utils-BKwn1mod.js";import"./throttle-Cb9nBjQI.js";import"./isString-DU9kh5Q5.js";import"./useStylesheet-CLr2-W5J.js";import"./index-__sSxueh.js";import"./iframe-DB1c1wU1.js";import"../sb-preview/runtime.js";import"./BusyIndicator-Cvlx0ISj.js";import"./withWebComponent-BS5KmJ8y.js";import"./i18nBundle-BnWtnlV0.js";import"./Keys-pFVWso__.js";import"./Device-RcFucVeJ.js";import"./Label-q6_PzA5e.js";import"./i18n-defaults-CTWfTbaq.js";import"./if-defined-fOOg8zCW.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-C2xEFFE_.js";import"./index-C2Nn3TLm.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-FzR48Pl7.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-DdAppmHO.js";import"./Placeholder-C2J5_vZJ.js";import"./generateCategoricalChart-Bs6DZhrZ.js";import"./isPlainObject-RD2cLuvA.js";import"./mapValues-DfqGXSk1.js";import"./react-content-loader.es-BgZLOsSQ.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const ur=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,t as LoadingPlaceholder,e as WithCustomColor,a as WithFormatter,ur as __namedExportsOrder,nr as default};
