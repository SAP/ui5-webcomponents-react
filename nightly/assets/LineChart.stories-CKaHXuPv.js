import{j as s}from"./jsx-runtime-DEdD30eg.js";import{c as P,s as X,a as _,b as F}from"./DemoProps-BWWtsAFv.js";import{L as M}from"./LineChart-DvcJkDod.js";import"./index-RYns6xqu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./index-C-Zfmu7Z.js";import"./YAxisTicks-USPhOzi_.js";import"./_baseUniq-18efwtne.js";import"./ChartContainer-B4SROuKR.js";import"./debounce-BNez58WF.js";import"./tiny-invariant-CCoILDQG.js";import"./index-rNTiGNI1.js";import"./index-B3xkXEHq.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CIcp3lSM.js";import"./index-ByWjnIRN.js";import"./BusyIndicator-DLv3RVXJ.js";import"./i18nBundle-BUZJrdsA.js";import"./Keys-D1SxbTOd.js";import"./Label-DeMESwab.js";import"./i18n-defaults-DyAOnJXW.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./class-map-CcXho7vk.js";import"./index-D5w6Jnaw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Crg4_fG2.js";import"./staticProps-BWJhtNSD.js";import"./ChartDataLabel-BwDcHQv6.js";import"./useLongestYAxisLabel-DrOcrdiN.js";import"./react-content-loader.es-BcmDwNEo.js";import"./Line-rwihq11S.js";import"./useIsRTL-DtzqLicj.js";import"./directionChange-DQGERUPd.js";const xe={title:"LineChart",component:M,args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),lineConfig:{type:"linear"}},{accessor:"sessions",label:"Active Sessions",formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:"volume",label:"Vol."}],dataset:P},argTypes:{dataset:{control:{disable:!0}}}},r={},a={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red"}],dataset:X}},o={args:{dimensions:[{accessor:"name"},{accessor:"dimension"}],measures:[{accessor:"users",color:"red"}],dataset:_}},n={args:{dimensions:[{accessor:"name"}],measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,label:"number of users"},{accessor:"sessions"},{accessor:"volume"}]}},c={args:{dataset:[]}},i={args:{dimensions:[{accessor:"name"}],chartConfig:{referenceLine:{color:"red",label:"MAX",value:650}},measures:[{accessor:"users"},{accessor:"sessions"},{accessor:"volume"}],dataset:F}},m={render:e=>s.jsx(M,{...e,children:s.jsx("defs",{children:s.jsxs("linearGradient",{id:"colorUsers",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"red"}),s.jsx("stop",{offset:"100%",stopColor:"green"})]})})}),args:{dataset:F,dimensions:[{accessor:"name"}],measures:[{accessor:"users",width:2,color:"url(#colorUsers)"}]}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,S,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var D,L,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const We=["Default","WithCustomColor","WithSecondaryDimension","WithDataLabels","WithFormatter","LoadingPlaceholder","WithReferenceLine","WithLinearGradient"];export{r as Default,c as LoadingPlaceholder,a as WithCustomColor,n as WithDataLabels,t as WithFormatter,m as WithLinearGradient,i as WithReferenceLine,o as WithSecondaryDimension,We as __namedExportsOrder,xe as default};
