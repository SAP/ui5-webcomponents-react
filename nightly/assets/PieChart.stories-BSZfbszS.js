import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-CBEHN2aK.js";import"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./index-ClU-Tc1p.js";import"./index-C-Zfmu7Z.js";import"./clsx-B-dksMZM.js";import"./defaults-CHc6vqVM.js";import"./ChartContainer-BPit9Wpr.js";import"./_baseForOwn-CS3BKc8p.js";import"./_baseUniq-DGAWXpCf.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./withWebComponent-Dj0CMfaz.js";import"./utils-B21VtmG1.js";import"./throttle-BhuRV_m0.js";import"./isString-t1AFzGBk.js";import"./useStylesheet-waKyCe7Y.js";import"./index-Q99RaNNf.js";import"./iframe-CNne69o2.js";import"../sb-preview/runtime.js";import"./BusyIndicator-DGQpVjo-.js";import"./i18nBundle-vPfkXYRc.js";import"./Keys-F_3Gvx0K.js";import"./Label-DYSmE5xX.js";import"./i18n-defaults-BrbxGX_s.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-DwAhupCS.js";import"./index-BC6Sa5OT.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-CzVU8Uee.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-BlzHz4BI.js";import"./Placeholder-B1WgnPM1.js";import"./generateCategoricalChart-CuZ6RflZ.js";import"./isPlainObject-ByEQ1glX.js";import"./mapValues-DmWmqx7o.js";import"./react-content-loader.es-BFHa96Im.js";const ir={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
