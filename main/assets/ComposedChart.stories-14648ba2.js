import{C as k}from"./index-e0948f7e.js";import{c as F,s as I,d as K}from"./DemoProps-9cd0a46b.js";const Y={title:"ComposedChart",component:k,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:F,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},a={args:{dataset:I,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},r={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},o={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},n={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:K,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:(e,P,U)=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},c={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},i={args:{dataset:[]}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,h,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,A,W;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(A=n.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var L,D,$;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      highlightColor: (value, measure, data) => {
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
}`,...($=(D=t.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var x,w,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,_,M;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const O=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LoadingPlaceholder:i,WithCustomColor:a,WithDataLabels:r,WithFormattedSecondaryAxis:c,WithFormatter:o,WithHighlightedMeasures:t,WithReferenceLine:n,__namedExportsOrder:O,default:Y},Symbol.toStringTag,{value:"Module"}));export{H as C,s as D,i as L,a as W,r as a,o as b,n as c,t as d,c as e};
//# sourceMappingURL=ComposedChart.stories-14648ba2.js.map
