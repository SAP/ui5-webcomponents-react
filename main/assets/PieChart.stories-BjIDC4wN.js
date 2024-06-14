import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-CAakqiGo.js";import"./useIsomorphicLayoutEffect-J-vjyzBO.js";import"./index-DVqgc125.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-4Sg4PsGo.js";import"./ChartContainer-BJI6_lVP.js";import"./_baseForOwn-czysEfXW.js";import"./_baseUniq-fADs2fxN.js";import"./index-BfsycYn4.js";import"./i18n-defaults-CNyODxfy.js";import"./i18nBundle-Baemx9Ir.js";import"./Boot-DBJWGo1y.js";import"./EventProvider-CVfkyUHo.js";import"./I18nContext-BrA05J-F.js";import"./useStylesheet-DGwRvl1X.js";import"./throttle-Dl_m-peW.js";import"./isString-D7zYwilD.js";import"./index-BiYRYNgb.js";import"./iframe-CD3rruG0.js";import"../sb-preview/runtime.js";import"./Label-BcDuAK9i.js";import"./UI5Element-ZIczsayz.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BBSxky5H.js";import"./parameters-bundle.css-B_nLitlw.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-3HxSKqj7.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-yEpt7jtH.js";import"./Placeholder-CrRtHPfK.js";import"./generateCategoricalChart-sbBkg3AG.js";import"./isPlainObject-BydcgycZ.js";import"./mapValues-DJmJhyxk.js";import"./react-content-loader.es-CmqtvJxN.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
