import{M as u}from"./MicroBarChart-b97bee54.js";const g={title:"MicroBarChart",component:u,args:{dimension:{accessor:"name"},measure:{accessor:"data"},dataset:[{name:"January",data:100},{name:"February",data:300},{name:"March",data:530},{name:"April",data:200}]},argTypes:{dataset:{control:{disable:!0}}}},a={},r={args:{measure:{accessor:"data",colors:["#f0ab00","var(--sapHighlightColor)"],formatter:p=>p>200?"over 200":"lower",width:16}}},e={args:{dataset:[]}};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var c,n,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'data',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: d => d > 200 ? 'over 200' : 'lower',
      width: 16
    }
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,i,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["Default","WithFormatter","LoadingPlaceholder"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:a,LoadingPlaceholder:e,WithFormatter:r,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{b as C,a as D,e as L,r as W};
//# sourceMappingURL=MicroBarChart.stories-68da5065.js.map
