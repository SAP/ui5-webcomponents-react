import{s as L,d as b}from"./DemoProps-CtAguf8G.js";import{P as W}from"./PieChart-BsP0mk6J.js";import"./useIsomorphicLayoutEffect-CRjHBNH3.js";import"./index-BP8_t0zE.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-DtWWZuRl.js";import"./ChartContainer-Bpl9REIT.js";import"./_baseForOwn-B3hW39GE.js";import"./_baseUniq-BbzeZuBs.js";import"./index-TouoI-7c.js";import"./i18n-defaults-B3GLB-7B.js";import"./i18nBundle-kZ6-2cpn.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useStylesheet-DfMTMFhn.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-Cj1pZIKL.js";import"./iframe-CR0up_Yh.js";import"../sb-preview/runtime.js";import"./Label-Cdlv07NW.js";import"./UI5Element-B2h7kErG.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-C_UMjLXx.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-BcuDgkDZ.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Cyu2xiYx.js";import"./Placeholder-CnmP1b9v.js";import"./generateCategoricalChart-CM9Rq6O2.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./react-content-loader.es-1lMwhoXk.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
