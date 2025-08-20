import{c as d,s as u,b as p,t as g,l as y}from"./DemoProps-ByYvFC86.js";import{C as f}from"./index-B8JBmG8Y.js";const h={title:"ComposedChart",component:f,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:d,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},r={args:{dataset:u,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},a={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},o={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},n={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:p,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},t={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:e=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},c={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},i={args:{dataset:[]}},l={args:g},m={args:y};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...m.parameters?.docs?.source}}};const b=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder","WithCustomTooltipConfig","WithCustomLegendConfig"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:s,LoadingPlaceholder:i,WithCustomColor:r,WithCustomLegendConfig:m,WithCustomTooltipConfig:l,WithDataLabels:a,WithFormattedSecondaryAxis:c,WithFormatter:o,WithHighlightedMeasures:t,WithReferenceLine:n,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{S as C,s as D,i as L,r as W,a,o as b,n as c,t as d,c as e,l as f,m as g};
