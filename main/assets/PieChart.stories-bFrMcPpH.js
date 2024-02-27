import{s as L,d as b}from"./DemoProps-gxklhiCN.js";import{P as W}from"./PieChart-HTGs-jSx.js";import"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import"./index-ENBflQbU.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-tmBtHfec.js";import"./defaults-CTgx0-FI.js";import"./ChartContainer-ohauMq_M.js";import"./_baseForOwn-a7AeJH13.js";import"./_baseUniq-_JZHYp0e.js";import"./index-bzkw3A5Q.js";import"./i18n-defaults-nru-HZH8.js";import"./i18nBundle-kNlRgZSb.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-COlr0lRD.js";import"./iframe-JncxsQwv.js";import"../sb-preview/runtime.js";import"./Label-T23s9s-4.js";import"./UI5Element-d7BKyERc.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-fXrRGy4a.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./tiny-invariant-csaaSLPr.js";import"./staticProps-5PxpsJ6y.js";import"./useOnClickInternal-0NwCcJNk.js";import"./Placeholder-WsHqZrbA.js";import"./generateCategoricalChart-lx60FtYW.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./react-content-loader.es-MhslfaKA.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
