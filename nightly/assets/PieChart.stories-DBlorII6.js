import{s as H,d as O,t as j,l as x}from"./DemoProps-BXtrSXe3.js";import{P as A}from"./PieChart-DjCEOj1-.js";const F={title:"PieChart",component:A,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:H},argTypes:{dataset:{control:{disable:!0}}}},e={},r={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},s={args:{measure:{accessor:"users",formatter:c=>c>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},o={args:{measure:{accessor:"users",hideDataLabel:c=>{if(c.percent<.01)return!0}},dataset:O}},t={args:j},n={args:x};var i,m,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,d,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,C,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var h,S,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,L,W;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(W=(L=o.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var D,P,_;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(_=(P=t.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var w,T,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: legendConfig
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const N=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels","WithCustomTooltipConfig","WithCustomLegendConfig"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,HideLabels:o,LoadingPlaceholder:a,WithCustomColor:r,WithCustomLegendConfig:n,WithCustomTooltipConfig:t,WithFormatter:s,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{E as C,e as D,o as H,a as L,r as W,s as a,t as b,n as c};
