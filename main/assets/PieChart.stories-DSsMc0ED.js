import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-CzohJUpd.js";import"./ManagedStyles-B3AuKgSD.js";import"./index-BP8_t0zE.js";import"./index-CBpU8qq5.js";import"./clsx-B-dksMZM.js";import"./defaults-CjKgCOyS.js";import"./ChartContainer-D54b_5h-.js";import"./_baseForOwn-B3hW39GE.js";import"./_baseUniq-BbzeZuBs.js";import"./index-6J2frV2o.js";import"./i18n-defaults-DlmaUOWU.js";import"./i18nBundle-VOPn86Vc.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./useStylesheet-NUMS3nLe.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-Ce2MXDri.js";import"./iframe-6RoL00I4.js";import"../sb-preview/runtime.js";import"./Label-DpitxhM9.js";import"./UI5Element-BDMamLf2.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-B6oBGWld.js";import"./utils-BFMQrOqR.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./parameters-bundle.css-CG8awnKl.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-3DmeqWTG.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-Cyu2xiYx.js";import"./Placeholder-BP-mbOpj.js";import"./generateCategoricalChart-B98b9maJ.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./react-content-loader.es-VoBEIBwl.js";const nr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},t={args:{dataset:[]}},a={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,n,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
