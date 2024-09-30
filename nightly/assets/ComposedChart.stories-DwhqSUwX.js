import{c as Y,s as O,b as P,t as U}from"./DemoProps-CfK95Xbq.js";import{C as V}from"./index-zvXOoEMZ.js";const j={title:"ComposedChart",component:V,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Y,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},r={args:{dataset:O,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},a={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},o={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},n={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:P,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:e=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},c={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},i={args:{dataset:[]}},l={args:U};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,b,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,C,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,W,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(W=n.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var D,T,$;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(T=t.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var x,w,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var _,M,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(k=(M=i.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var F,I,K;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(K=(I=l.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const H=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder","WithCustomTooltipConfig"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LoadingPlaceholder:i,WithCustomColor:r,WithCustomTooltipConfig:l,WithDataLabels:a,WithFormattedSecondaryAxis:c,WithFormatter:o,WithHighlightedMeasures:t,WithReferenceLine:n,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{E as C,s as D,i as L,r as W,a,o as b,n as c,t as d,c as e,l as f};
