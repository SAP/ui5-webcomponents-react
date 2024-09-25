import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-DLgdV0xS.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import"./index-C-Zfmu7Z.js";import"./clsx-B-dksMZM.js";import"./staticProps-c8G7jV_g.js";import"./ChartContainer-CAW-Ik09.js";import"./_baseUniq-18efwtne.js";import"./debounce-BNez58WF.js";import"./tiny-invariant-CCoILDQG.js";import"./index-rNTiGNI1.js";import"./index-D6xIxso0.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./useStylesheet-CIcp3lSM.js";import"./index-ByWjnIRN.js";import"./BusyIndicator-DLv3RVXJ.js";import"./i18nBundle-BUZJrdsA.js";import"./Keys-D1SxbTOd.js";import"./Label-DeMESwab.js";import"./i18n-defaults-DyAOnJXW.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./class-map-CcXho7vk.js";import"./index-D5w6Jnaw.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-CrvD_ZAc.js";import"./Placeholder-Dk6P2_Ws.js";import"./react-content-loader.es-BcmDwNEo.js";const er={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:o=>o>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},s={args:{measure:{accessor:"users",hideDataLabel:o=>{if(o.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const ar=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,s as HideLabels,a as LoadingPlaceholder,e as WithCustomColor,t as WithFormatter,ar as __namedExportsOrder,er as default};
