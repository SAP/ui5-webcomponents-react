import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-DQADfzxf.js";import"./useIsomorphicLayoutEffect-5feXxxyy.js";import"./index-CP2MHerv.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-CMuXSmYS.js";import"./ChartContainer-qqZbAT8q.js";import"./_baseForOwn-39ViRbo3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-Bh3rbvgQ.js";import"./i18n-defaults-BCHmAjec.js";import"./i18nBundle-X-a5Hvm9.js";import"./Boot-Bc3-yGxv.js";import"./EventProvider-CVfkyUHo.js";import"./I18nContext-BwNxpyJO.js";import"./useStylesheet-DIoLZaP8.js";import"./throttle-Csanhruw.js";import"./isString-qejI8o3g.js";import"./index-R6MDbNOP.js";import"./iframe-B4XrxqEi.js";import"../sb-preview/runtime.js";import"./Label-BevGptB9.js";import"./UI5Element-DFWAHaHd.js";import"./CustomElementsScopeUtils-u88Ac6A7.js";import"./withWebComponent-ah_drTxp.js";import"./utils-CGfXuD-n.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DUjPXQIq.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-BNRDkG_-.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-SPrOqEbT.js";import"./Placeholder-DT8acxM_.js";import"./generateCategoricalChart-BYIN0ypX.js";import"./isPlainObject-BX3T42r5.js";import"./mapValues-BafCeOy3.js";import"./react-content-loader.es-87Z_OzOF.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
