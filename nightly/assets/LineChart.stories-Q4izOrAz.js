import{j as s}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{c as P,s as X,a as _,b as F}from"./DemoProps-BWWtsAFv.js";import{L as M}from"./LineChart-nrdXIpRF.js";import"./index-CMKoANNR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./index-C-Zfmu7Z.js";import"./YAxisTicks-ddceah1v.js";import"./_overArg-Mt7ZKpko.js";import"./ChartContainer-DB44CFmA.js";import"./_baseUniq-qZQRvdR-.js";import"./addCustomCSSWithScoping-BIONmqoK.js";import"./withWebComponent-Bvd6GsxT.js";import"./utils-B91Jjtng.js";import"./clsx-B-dksMZM.js";import"./debounce-CwhyRj2d.js";import"./isString-C4zy8Dgc.js";import"./useStylesheet-BdPJGR6W.js";import"./index-BBQJg9SC.js";import"./iframe-Bim-0N3I.js";import"../sb-preview/runtime.js";import"./BusyIndicator-Cx-S6BZJ.js";import"./i18nBundle-DyvSagx7.js";import"./Keys-F_3Gvx0K.js";import"./Label-CuT9KatJ.js";import"./i18n-defaults-CcfWlpG-.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./class-map-izHjq-7_.js";import"./index-BPUMq9xi.js";import"./generateCategoricalChart-ByA9Qk5e.js";import"./tiny-invariant-CCoILDQG.js";import"./isPlainObject-ZDWxDszJ.js";import"./_getPrototype-CvhAe9S0.js";import"./_baseAssignValue-680W1HJy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BWHI5miQ.js";import"./defaults-BkGs5LVQ.js";import"./ChartDataLabel-BaMRKzct.js";import"./staticProps-BOVdMLjY.js";import"./useLongestYAxisLabel-FdHv-NeA.js";import"./react-content-loader.es--fprHcRt.js";import"./Line-CnvFDaLt.js";import"./useIsRTL-DjiVgzlY.js";import"./directionChange-Cqe8fKR6.js";const $e={title:"LineChart",component:M,args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:P},argTypes:{dataset:{control:{disable:!0}}}},r={},o={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:X}},a={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:_}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:F}},m={render:e=>s.jsx(M,{...e,children:s.jsx("defs",{children:s.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"red"}),s.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:F,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
