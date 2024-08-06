import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-BErOzW3h.js";import"./useIsomorphicLayoutEffect-BDy32gDd.js";import"./index-ClU-Tc1p.js";import"./index-C-Zfmu7Z.js";import"./clsx-B-dksMZM.js";import"./defaults-tKugFn6m.js";import"./ChartContainer-BwLgH48i.js";import"./_baseForOwn-CS3BKc8p.js";import"./_baseUniq-DGAWXpCf.js";import"./addCustomCSSWithScoping-BIehpVOD.js";import"./withWebComponent-CPW0iYAf.js";import"./utils-B4B9qFe5.js";import"./throttle-BhuRV_m0.js";import"./isString-t1AFzGBk.js";import"./useStylesheet-Dw38joME.js";import"./index-B_PlQlVs.js";import"./iframe-DolwyH6k.js";import"../sb-preview/runtime.js";import"./BusyIndicator-C9Q0CDgp.js";import"./i18nBundle-shm5Q6c6.js";import"./Keys-F_3Gvx0K.js";import"./Label-BcgafC0L.js";import"./i18n-defaults-DRoh8QZU.js";import"./if-defined-BCPYWAh1.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./class-map-CQfLTfub.js";import"./index-DGcIIXSC.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-CzVU8Uee.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-BlzHz4BI.js";import"./Placeholder-1wOwdmxt.js";import"./generateCategoricalChart-BKHnGXrr.js";import"./isPlainObject-ByEQ1glX.js";import"./mapValues-DmWmqx7o.js";import"./react-content-loader.es-BFHa96Im.js";const ir={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
