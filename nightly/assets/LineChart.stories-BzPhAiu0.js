import{j as e}from"./jsx-runtime-DEdD30eg.js";import{c as X,s as z,a as V,b as E,t as k}from"./DemoProps-CfK95Xbq.js";import{L as F}from"./LineChart-vD6C7Kew.js";const q={title:"LineChart",component:F,args:{dimensions:[{accessor:"name",formatter:s=>`${s} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:s=>s.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:s=>`${s} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:X},argTypes:{dataset:{control:{disable:!0}}}},r={},a={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:z}},o={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:V}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:s=>s.slice(0,3)}],measures:[{accessor:"users",formatter:s=>`${s/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:E}},m={render:s=>e.jsx(F,{...s,children:e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"red"}),e.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:E,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}},d={args:k};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,C,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }, {
      accessor: 'dimension'
    }],
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: secondaryDimensionDataSet
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var D,L,W;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var x,v,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      label: 'number of users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,_,G;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(G=(_=c.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var U,T,$;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name'
    }],
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    },
    measures: [{
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }],
    dataset: bigDataSet
  }
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,M,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <LineChart {...args}>
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>,
  args: {
    dataset: bigDataSet,
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      width: 2,
      color: 'url(#colorUsers)'
    }]
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var P,R,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const B=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithLinearGradient","WithCustomTooltipConfig"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LoadingPlaceholder:c,WithCustomColor:a,WithCustomTooltipConfig:d,WithDataLabels:n,WithFormatter:t,WithLinearGradient:m,WithReferenceLine:i,WithSecondaryDimension:o,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{K as C,r as D,c as L,a as W,o as a,n as b,t as c,i as d,m as e,d as f};
