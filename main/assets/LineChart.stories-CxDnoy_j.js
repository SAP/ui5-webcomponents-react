import{j as s}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{c as P,s as X,a as _,b as F}from"./DemoProps-BWWtsAFv.js";import{L as M}from"./LineChart-BjuKW8Yc.js";import"./index-DEe9W-hO.js";import"./ThemingParameters-DOkJX3Ed.js";import"./index-D8PAbW1n.js";import"./YAxisTicks-C_erODNK.js";import"./_baseForOwn-DVWQo5xw.js";import"./ChartContainer-Dw8QT8Pm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-BNbRyuBz.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-DeR0588M.js";import"./i18nBundle-NJJr-Wgh.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./I18nContext-qX06pm-v.js";import"./useStylesheet-B1i3sL0q.js";import"./throttle-B-28IFuh.js";import"./isString-C_Q1T2_B.js";import"./index-rDrF4wjJ.js";import"./iframe-DrZU0el_.js";import"../sb-preview/runtime.js";import"./Label-BA6opWOJ.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-vwvk3Exl.js";import"./if-defined-BG38O0o4.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./generateCategoricalChart-Cu9YhkHi.js";import"./tiny-invariant-CCoILDQG.js";import"./isPlainObject-B-J9bPgK.js";import"./mapValues-DXlf5GIm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-3LzP6jm0.js";import"./defaults-DXPUYVFj.js";import"./ChartDataLabel-DLXuw7Bo.js";import"./staticProps-DsetRNqa.js";import"./useLongestYAxisLabel-DhVxfOE3.js";import"./react-content-loader.es-CK-1p032.js";import"./Line-CUxvWqJ3.js";import"./useIsRTL-cgFvq9WG.js";import"./directionChange-F0SVwOWF.js";const $e={title:"LineChart",component:M,args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:P},argTypes:{dataset:{control:{disable:!0}}}},r={},o={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:X}},a={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:_}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:F}},m={render:e=>s.jsx(M,{...e,children:s.jsx("defs",{children:s.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"red"}),s.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:F,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,L,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var x,W,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(W=t.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var y,j,G;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(G=(j=c.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var U,$,A;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(A=($=i.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var R,w,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const Ae=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithLinearGradient"];export{r as Default,c as LoadingPlaceholder,o as WithCustomColor,n as WithDataLabels,t as WithFormatter,m as WithLinearGradient,i as WithReferenceLine,a as WithSecondaryDimension,Ae as __namedExportsOrder,$e as default};
