import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./LineChart-BwkGh_9I.js";import{a,d as o,i as s,m as c,n as l,s as u,u as d}from"./DemoProps-BM6PS3Et.js";var f=t({Default:()=>h,LoadingPlaceholder:()=>b,WithCustomColor:()=>g,WithCustomLegendConfig:()=>w,WithCustomTooltipConfig:()=>C,WithDataLabels:()=>v,WithFormatter:()=>y,WithLinearGradient:()=>S,WithReferenceLine:()=>x,WithSecondaryDimension:()=>_,__namedExportsOrder:()=>T,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),r(),p=n(),m={title:`LineChart`,component:i,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),lineConfig:{type:`linear`}},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}],dataset:s}},h={},g={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`,color:`red`}],dataset:o}},_={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:d}},v={args:{dimensions:[{accessor:`name`}],measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},y={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}]}},b={args:{dataset:[]}},x={args:{dimensions:[{accessor:`name`}],chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}},measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}],dataset:l}},S={render:e=>(0,p.jsx)(i,{...e,children:(0,p.jsx)(`defs`,{children:(0,p.jsxs)(`linearGradient`,{id:`colorUsers`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,p.jsx)(`stop`,{offset:`0%`,stopColor:`red`}),(0,p.jsx)(`stop`,{offset:`100%`,stopColor:`green`})]})})}),args:{dataset:l,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,width:2,color:`url(#colorUsers)`}]}},C={args:c},w={args:u},T=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithDataLabels`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithLinearGradient`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...w.parameters?.docs?.source}}}})))()}export{w as a,y as c,_ as d,E as f,g as i,S as l,f as n,C as o,b as r,v as s,h as t,x as u};