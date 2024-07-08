import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-DYIiUlfD.js";import"./useIsomorphicLayoutEffect-BpDYIkAV.js";import"./index-DEe9W-hO.js";import"./index-D8PAbW1n.js";import"./clsx-B-dksMZM.js";import"./defaults-Vo_ZgvIV.js";import"./ChartContainer-Bt0hW7ag.js";import"./_baseForOwn-DVWQo5xw.js";import"./_baseUniq-BqAhPu7p.js";import"./addCustomCSSWithScoping-B_dl8XEe.js";import"./UI5Element-Cjk_cKug.js";import"./CustomElementsScopeUtils-CJFx-0ms.js";import"./utils-Cjkb-4uz.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./useStylesheet-CBVvS9lW.js";import"./index-cw42yKWP.js";import"./iframe-0howv_Dp.js";import"../sb-preview/runtime.js";import"./BusyIndicator-CrHFv3Tm.js";import"./withWebComponent-ZLYt6Z72.js";import"./i18nBundle-DTd686OT.js";import"./Keys-pFVWso__.js";import"./Device-RcFucVeJ.js";import"./Label-BCs7fK18.js";import"./i18n-defaults-BPJU920w.js";import"./if-defined-9iVrMyiP.js";import"./parameters-bundle.css-BFbT_feV.js";import"./class-map-Dho2ozJ6.js";import"./index-BDFEWlxK.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-DsetRNqa.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Chqq3b2P.js";import"./Placeholder-LRnU_LMM.js";import"./generateCategoricalChart-BWdDpt1G.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./react-content-loader.es-CK-1p032.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
