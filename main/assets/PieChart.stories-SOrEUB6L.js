import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-t9vrp9vl.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./react-jss.esm-BpNdaHSZ.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-BaGMLphO.js";import"./defaults-Ieo7EYdY.js";import"./ChartContainer-CGlGptTY.js";import"./_baseForOwn-CD7metVA.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-CgIv350b.js";import"./i18n-defaults-DcbMYOf3.js";import"./i18nBundle-C2WczoLt.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./I18nContext-lEOM8vPx.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./ThemingParameters--AGRs54p.js";import"./throttle-Dvq7gCm_.js";import"./isString-jSz9eJry.js";import"./index-DnOeCPFE.js";import"./iframe-gVadmDKp.js";import"../sb-preview/runtime.js";import"./Label-ps0cWtHP.js";import"./UI5Element-TZfj5eGG.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-CmHHCrVX.js";import"./utils-CnhbIiu8.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-weVOdquz.js";import"./parameters-bundle.css-B6zgRRib.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-5Y59Eqef.js";import"./useOnClickInternal-Ct1RWo0l.js";import"./Placeholder-MwPnSu2v.js";import"./generateCategoricalChart-gh1gFK46.js";import"./isPlainObject-yhtJt77a.js";import"./mapValues-DbyeKAf9.js";import"./react-content-loader.es-eOuwWd-Z.js";const lr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const dr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,t as LoadingPlaceholder,e as WithCustomColor,a as WithFormatter,dr as __namedExportsOrder,lr as default};
