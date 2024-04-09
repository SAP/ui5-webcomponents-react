import{j as s}from"./jsx-runtime-Du8NFWEI.js";import{c as P,s as X,a as _,b as F}from"./DemoProps-BWWtsAFv.js";import{L as M}from"./LineChart-d_wNbvnV.js";import"./index-Dl6G-zuu.js";import"./ThemingParameters--AGRs54p.js";import"./index-CBpU8qq5.js";import"./YAxisTicks-DSI20y4S.js";import"./_baseForOwn-DFjKyXZi.js";import"./ChartContainer-DZO3OvfW.js";import"./_baseUniq-DRxb5hvO.js";import"./index-RRGlkfnj.js";import"./clsx-B-dksMZM.js";import"./react-jss.esm-BPPChJW9.js";import"./inheritsLoose-D8L2VVdp.js";import"./theming.esm-5daRW75o.js";import"./i18n-defaults-BV9KeZ-W.js";import"./i18nBundle-CW3QmvUh.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./I18nContext-BcGksm2n.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./throttle-ClB5v_5B.js";import"./isString-B_cEKuVX.js";import"./index-usMxjt4O.js";import"./iframe-B2aeQtEw.js";import"../sb-preview/runtime.js";import"./Label-BgNHvv84.js";import"./UI5Element-DtnZiShc.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-DRPzk8yN.js";import"./utils-BopS74sX.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-ByZSnYVg.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./generateCategoricalChart-6RO8jVZN.js";import"./tiny-invariant-CCoILDQG.js";import"./isPlainObject-1lSDzB4t.js";import"./mapValues-BvzalXkB.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BYiNX38t.js";import"./defaults-DTyXYSX_.js";import"./ChartDataLabel-Cu682Zbd.js";import"./staticProps-CjaVosBc.js";import"./useLongestYAxisLabel-tMzonFvj.js";import"./react-content-loader.es-CRTrDzHi.js";import"./Line-ydHkud3G.js";import"./useIsRTL-CfYrXIDN.js";import"./directionChange-BPMwfgRT.js";const Ee={title:"LineChart",component:M,args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:P},argTypes:{dataset:{control:{disable:!0}}}},r={},o={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:X}},a={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:_}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:F}},m={render:e=>s.jsx(M,{...e,children:s.jsx("defs",{children:s.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"red"}),s.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:F,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}};var p,d,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const Fe=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithLinearGradient"];export{r as Default,c as LoadingPlaceholder,o as WithCustomColor,n as WithDataLabels,t as WithFormatter,m as WithLinearGradient,i as WithReferenceLine,a as WithSecondaryDimension,Fe as __namedExportsOrder,Ee as default};
