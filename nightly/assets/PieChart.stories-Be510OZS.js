import{s as _,d as w,t as T}from"./DemoProps-CfK95Xbq.js";import{P as y}from"./PieChart-wZ6eqbCy.js";const H={title:"PieChart",component:y,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:_},argTypes:{dataset:{control:{disable:!0}}}},e={},r={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},a={args:{dataset:[]}},s={args:{measure:{accessor:"users",formatter:n=>n>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},t={args:{measure:{accessor:"users",hideDataLabel:n=>{if(n.percent<.01)return!0}},dataset:w}},o={args:T};var c,i,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,l,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,C,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,v,D;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var L,W,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(P=(W=o.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const O=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels","WithCustomTooltipConfig"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,HideLabels:t,LoadingPlaceholder:a,WithCustomColor:r,WithCustomTooltipConfig:o,WithFormatter:s,__namedExportsOrder:O,default:H},Symbol.toStringTag,{value:"Module"}));export{A as C,e as D,t as H,a as L,r as W,s as a,o as b};
