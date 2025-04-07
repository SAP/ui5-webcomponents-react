import{c as V,s as j,b as H,t as R,l as X}from"./DemoProps-BerORI7p.js";import{C as E}from"./index-BMHwuFSF.js";const q={title:"ComposedChart",component:E,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:V,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},r={args:{dataset:j,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},a={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},o={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},n={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:H,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:e=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},c={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},i={args:{dataset:[]}},l={args:R},m={args:X};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    dataset: simpleDataSet,
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      color: 'red',
      type: 'bar'
    }]
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,b,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      type: 'area'
    }, {
      accessor: 'sessions',
      type: 'bar',
      opacity: 0.6
    }, {
      accessor: 'volume',
      type: 'line'
    }],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var v,S,W;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: element => element.slice(0, 3)
    }],
    measures: [{
      accessor: 'users',
      formatter: element => \`\${element / 10}\`,
      type: 'bar',
      label: 'number of users',
      stackId: 'A',
      width: 30
    }, {
      accessor: 'sessions',
      type: 'bar',
      stackId: 'A',
      width: 30
    }, {
      accessor: 'volume',
      type: 'line',
      width: 2
    }]
  }
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var A,L,D;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      zoomingTool: true,
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    },
    dataset: bigDataSet,
    measures: [{
      accessor: 'users',
      type: 'bar',
      width: 2
    }, {
      accessor: 'sessions',
      type: 'line'
    }, {
      accessor: 'volume',
      type: 'line'
    }]
  }
}`,...(D=(L=n.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var T,$,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    dimensions: [{
      accessor: 'name',
      formatter: d => \`\${d} 2019\`,
      interval: 0
    }],
    measures: [{
      accessor: 'sessions',
      label: 'Active Sessions',
      type: 'bar',
      highlightColor: value => {
        if (value > 400) {
          return 'red';
        }
      }
    }, {
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString(),
      type: 'area'
    }, {
      accessor: 'volume',
      label: 'Vol.',
      formatter: val => \`\${val} sessions\`,
      type: 'line'
    }]
  }
}`,...(x=($=t.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var w,z,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'volume',
      type: 'line'
    }, {
      accessor: 'sessions',
      type: 'bar',
      opacity: 0.6,
      formatter: e => '$' + e
    }],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions'
      }
    }
  }
}`,...(_=(z=c.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var M,k,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(F=(k=i.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,K,Y;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(Y=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var O,P,U;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: legendConfig
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const B=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder","WithCustomTooltipConfig","WithCustomLegendConfig"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LoadingPlaceholder:i,WithCustomColor:r,WithCustomLegendConfig:m,WithCustomTooltipConfig:l,WithDataLabels:a,WithFormattedSecondaryAxis:c,WithFormatter:o,WithHighlightedMeasures:t,WithReferenceLine:n,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{N as C,s as D,i as L,r as W,a,o as b,n as c,t as d,c as e,l as f,m as g};
