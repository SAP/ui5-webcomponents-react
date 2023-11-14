import{s as D,a as L}from"./DemoProps-4c4a52a7.js";import{P as W}from"./PieChart-726ce110.js";const P={title:"PieChart",component:W,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:D},argTypes:{dataset:{control:{disable:!0}}}},e={},a={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},r={args:{dataset:[]}},s={args:{measure:{accessor:"users",formatter:o=>o>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}}},t={args:{measure:{accessor:"users",hideDataLabel:o=>{if(o.percent<.01)return!0}},dataset:L}};var n,c,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,u,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,v,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const _=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","HideLabels"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,HideLabels:t,LoadingPlaceholder:r,WithCustomColor:a,WithFormatter:s,__namedExportsOrder:_,default:P},Symbol.toStringTag,{value:"Module"}));export{H as C,e as D,t as H,r as L,a as W,s as a};
//# sourceMappingURL=PieChart.stories-e61d6bec.js.map
