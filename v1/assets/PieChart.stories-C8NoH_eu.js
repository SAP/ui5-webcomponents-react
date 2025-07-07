import{s as L,d as b}from"./DemoProps-CtAguf8G.js";import{P as W}from"./PieChart-qyCCwcDG.js";import"./useIsomorphicLayoutEffect-DvGGtHJq.js";import"./index-BP8_t0zE.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-xxbdXCGa.js";import"./ChartContainer-DF8TMh3O.js";import"./_baseForOwn-B3hW39GE.js";import"./_baseUniq-BbzeZuBs.js";import"./index-DWZnENUk.js";import"./i18n-defaults-i2-x_YLi.js";import"./i18nBundle-B0EGx0z0.js";import"./Boot-DcdhI_RK.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useStylesheet-DWFaJupJ.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-DlwMO8AW.js";import"./iframe-BqnnHtrP.js";import"../sb-preview/runtime.js";import"./Label-CfM8R4Pi.js";import"./UI5Element-infrDpAf.js";import"./CustomElementsScope-Dt2MhVrA.js";import"./withWebComponent-Czp6OQvU.js";import"./utils-lAiJ6aRh.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-h9yeeTQy.js";import"./parameters-bundle.css-6UUskKkY.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-Cibfnvql.js";import"./ThemingParameters-pyhX3s39.js";import"./useOnClickInternal-Cyu2xiYx.js";import"./Placeholder-BCl99jif.js";import"./generateCategoricalChart-T5NsHMV6.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./react-content-loader.es-1lMwhoXk.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
