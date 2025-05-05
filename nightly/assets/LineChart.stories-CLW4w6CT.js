import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as q,s as B,a as H,b as V,t as I,l as J}from"./DemoProps-BerORI7p.js";import{L as k}from"./LineChart-Bss2RVYE.js";const K={title:"LineChart",component:k,args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:q},argTypes:{dataset:{control:{disable:!0}}}},r={},a={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:B}},o={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:H}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:V}},m={render:e=>s.jsx(k,{...e,children:s.jsx("defs",{children:s.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"red"}),s.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:V,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}},d={args:I},l={args:J};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,h,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var S,b,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var D,W,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var v,y,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,G,U;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(U=(G=c.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var T,$,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var M,O,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,w,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,X,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: legendConfig
}`,...(z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const N=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithLinearGradient","WithCustomTooltipConfig","WithCustomLegendConfig"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LoadingPlaceholder:c,WithCustomColor:a,WithCustomLegendConfig:l,WithCustomTooltipConfig:d,WithDataLabels:n,WithFormatter:t,WithLinearGradient:m,WithReferenceLine:i,WithSecondaryDimension:o,__namedExportsOrder:N,default:K},Symbol.toStringTag,{value:"Module"}));export{ee as C,r as D,c as L,a as W,o as a,n as b,t as c,i as d,m as e,d as f,l as g};
