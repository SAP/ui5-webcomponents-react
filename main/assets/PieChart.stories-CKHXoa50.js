import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-ByUzbZ1h.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./defaults-Bij1vlW2.js";import"./ChartContainer-Bin9BOZE.js";import"./_baseForOwn-DFjKyXZi.js";import"./_baseUniq-DRxb5hvO.js";import"./index-oF-FT8yh.js";import"./i18n-defaults-DkhM4WLz.js";import"./i18nBundle-Duvqe7kG.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./useStylesheet-D5wp95d6.js";import"./throttle-ClB5v_5B.js";import"./isString-B_cEKuVX.js";import"./index-RqjmvTeX.js";import"./iframe-DIUUOptS.js";import"../sb-preview/runtime.js";import"./Label-D6k6fzJu.js";import"./UI5Element-Lw3nTtTN.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-zM8JcmxY.js";import"./utils-syHHPmsO.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-D1sujP0E.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-CjaVosBc.js";import"./ThemingParameters--AGRs54p.js";import"./useOnClickInternal-lyLIrhui.js";import"./Placeholder-BomdZCwA.js";import"./generateCategoricalChart-BZHygJBk.js";import"./isPlainObject-1lSDzB4t.js";import"./mapValues-BvzalXkB.js";import"./react-content-loader.es-CRTrDzHi.js";const dr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const gr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,t as LoadingPlaceholder,e as WithCustomColor,a as WithFormatter,gr as __namedExportsOrder,dr as default};
