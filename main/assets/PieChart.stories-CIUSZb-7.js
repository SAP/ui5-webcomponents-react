import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-DCVeJ74k.js";import"./useIsomorphicLayoutEffect-CZEdMYkS.js";import"./index-gJgmXzrm.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-DR4swK4X.js";import"./ChartContainer-Drrh7LNr.js";import"./_baseForOwn-CLRePLhI.js";import"./_baseUniq-C22BvjpN.js";import"./index-OWOrq7cE.js";import"./i18n-defaults-DXj3O94t.js";import"./i18nBundle-D-vhNEte.js";import"./Boot-Bi0-wsLc.js";import"./EventProvider-CVfkyUHo.js";import"./I18nContext-D8i4N15C.js";import"./useStylesheet-IiibRSM5.js";import"./throttle-Cs07APlj.js";import"./isString-DNBrwdzY.js";import"./index-DFf4EEFj.js";import"./iframe-Cdu6IyIp.js";import"../sb-preview/runtime.js";import"./Label-fn3eGIhh.js";import"./UI5Element-BSD7m3Nn.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-5yojRpQ-.js";import"./parameters-bundle.css-B_nLitlw.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-BjKyWMEM.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-bORhQ-RE.js";import"./Placeholder-BGw-_p39.js";import"./generateCategoricalChart-BocXSWfA.js";import"./isPlainObject-DAPEVY59.js";import"./mapValues-B_fQXYuL.js";import"./react-content-loader.es-CVKUvkVy.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
