import{s as L,d as b}from"./DemoProps-BWWtsAFv.js";import{P as W}from"./PieChart-CeVv_i98.js";import"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import"./index-CMKoANNR.js";import"./index-C-Zfmu7Z.js";import"./clsx-B-dksMZM.js";import"./defaults-DcCr7BZC.js";import"./ChartContainer-DAkHreMJ.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./withWebComponent-BbgN5sxI.js";import"./utils-B91Jjtng.js";import"./debounce-CwhyRj2d.js";import"./isString-C4zy8Dgc.js";import"./useStylesheet-BdPJGR6W.js";import"./index-DAgnB0eB.js";import"./iframe-KLsYqwp3.js";import"../sb-preview/runtime.js";import"./BusyIndicator-DYwg6ta4.js";import"./i18nBundle-CwTDKhhX.js";import"./Keys-F_3Gvx0K.js";import"./Label-B16HW9k1.js";import"./i18n-defaults-jWmICHmQ.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./class-map-DWnotN9Q.js";import"./index-DyjExw4T.js";import"./tiny-invariant-CCoILDQG.js";import"./staticProps-BOVdMLjY.js";import"./ThemingParameters-DOkJX3Ed.js";import"./useOnClickInternal-DHV-wPJM.js";import"./Placeholder-BZKqNmF4.js";import"./generateCategoricalChart-B6pzsqcS.js";import"./isPlainObject-ZDWxDszJ.js";import"./_getPrototype-CvhAe9S0.js";import"./_baseAssignValue-680W1HJy.js";import"./react-content-loader.es--fprHcRt.js";const cr={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:L},argTypes:{dataset:{control:{disable:!0}}}},r={},e={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},t={args:{measure:{accessor:"users",formatter:s=>s>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:s=>{if(s.percent<.01)return!0}},dataset:b}};var m,i,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const nr=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"];export{r as Default,o as HideLabels,a as LoadingPlaceholder,e as WithCustomColor,t as WithFormatter,nr as __namedExportsOrder,cr as default};
