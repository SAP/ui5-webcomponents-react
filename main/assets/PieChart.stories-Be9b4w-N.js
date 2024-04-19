import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-BvVwc_7-.js";import"./ManagedStyles-DBz9b8_7.js";import"./index-Cu9bd8lq.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-gtr4_akD.js";import"./ChartContainer-CjijpAZY.js";import"./_baseForOwn-CD7metVA.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-C2SZztzV.js";import"./i18n-defaults-DVTRFCa9.js";import"./i18nBundle-Dr6PGakp.js";import"./Boot-Biwz_Caq.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-lEOM8vPx.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./useStylesheet-Emr_nFue.js";import"./throttle-Dvq7gCm_.js";import"./isString-jSz9eJry.js";import"./index-CkoI_GPU.js";import"./iframe-CZGLp2jR.js";import"../sb-preview/runtime.js";import"./Label-CkBRSGa0.js";import"./UI5Element-C4mSOhNA.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./withWebComponent-C_dYwLuv.js";import"./utils--_sL0meP.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DyNPhf0P.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-5Y59Eqef.js";import"./ThemingParameters--AGRs54p.js";import"./useOnClickInternal-Ct1RWo0l.js";import"./Placeholder-DrtRgTaR.js";import"./generateCategoricalChart-pBJZ3l_Y.js";import"./isPlainObject-yhtJt77a.js";import"./mapValues-DbyeKAf9.js";import"./react-content-loader.es-eOuwWd-Z.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
