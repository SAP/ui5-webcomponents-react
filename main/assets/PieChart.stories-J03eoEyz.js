import{s as L,d as b}from"./DemoProps-gxklhiCN.js";import{P as W}from"./PieChart-BWGitWX5.js";import"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import"./index-ENBflQbU.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./defaults-E637mfTG.js";import"./ChartContainer-xki5PXW6.js";import"./_baseForOwn-a7AeJH13.js";import"./_baseUniq-_JZHYp0e.js";import"./index-ZLssTuGc.js";import"./i18n-defaults-EsDEVf23.js";import"./i18nBundle-QOmUTBjc.js";import"./Boot-ZMdbUkXu.js";import"./VersionInfo-szri6OiK.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-jdIcBaoB.js";import"./iframe-lvTVDQ9h.js";import"../sb-preview/runtime.js";import"./Label-6T3Q5KMo.js";import"./UI5Element-i6xEMhb-.js";import"./CustomElementsScopeUtils-E-jGiXBT.js";import"./withWebComponent-WsMVk7rH.js";import"./utils-TqRdq3Pf.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-KFYnnpmz.js";import"./parameters-bundle.css-I2VxmuZZ.js";import"./tiny-invariant-csaaSLPr.js";import"./staticProps-5PxpsJ6y.js";import"./useOnClickInternal-0NwCcJNk.js";import"./Placeholder-mYpHDIxy.js";import"./generateCategoricalChart-W-9gf-YP.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./react-content-loader.es-MhslfaKA.js";const ur={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const lr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,t as LoadingPlaceholder,e as WithCustomColor,a as WithFormatter,lr as __namedExportsOrder,ur as default};
