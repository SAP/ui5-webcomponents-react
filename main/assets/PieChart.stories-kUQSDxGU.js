import{s as L,d as b}from"./DemoProps-gxklhiCN.js";import{P as W}from"./PieChart-4nEpFSMX.js";import"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import"./index-ENBflQbU.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-tmBtHfec.js";import"./defaults-U_1xhbY4.js";import"./ChartContainer-FRFoQAnO.js";import"./_baseForOwn-a7AeJH13.js";import"./_baseUniq-_JZHYp0e.js";import"./index-4Xp3nZk1.js";import"./i18n-defaults-1NWI3C8K.js";import"./i18nBundle-YvxCnun_.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-u1Ak3rma.js";import"./iframe-pB3lLiEW.js";import"../sb-preview/runtime.js";import"./Label-Q5XT_dC3.js";import"./UI5Element-oLeGfnU4.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-HIa-lgkZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./tiny-invariant-csaaSLPr.js";import"./staticProps-5PxpsJ6y.js";import"./useOnClickInternal-0NwCcJNk.js";import"./Placeholder-RY6Wc7WJ.js";import"./generateCategoricalChart-sHkHaDvD.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./react-content-loader.es-MhslfaKA.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
