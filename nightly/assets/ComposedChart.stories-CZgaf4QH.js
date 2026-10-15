import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,d as i,i as a,m as o,n as s,s as c,t as l}from"./DemoProps-BM6PS3Et.js";import{n as u,t as d}from"./ComposedChart-DKRfU5NI.js";var f=t({Default:()=>h,LoadingPlaceholder:()=>S,WithCustomColor:()=>g,WithCustomLegendConfig:()=>E,WithCustomTooltipConfig:()=>T,WithCustomTooltipTotal:()=>w,WithDataLabels:()=>_,WithFormattedSecondaryAxis:()=>x,WithFormatter:()=>v,WithHighlightedMeasures:()=>b,WithReferenceLine:()=>y,WithStackAggregateTotals:()=>C,__namedExportsOrder:()=>D,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),u(),p=n(),m={title:`ComposedChart`,component:d,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:a,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`bar`},{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),type:`area`},{accessor:`volume`,label:`Vol.`,formatter:e=>`${e} sessions`,type:`line`}]}},h={},g={args:{dataset:i,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,color:`red`,type:`bar`}]}},_={args:{measures:[{accessor:`users`,type:`area`},{accessor:`sessions`,type:`bar`,opacity:.6},{accessor:`volume`,type:`line`}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:`sessions`}}}},v={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,type:`bar`,label:`number of users`,stackId:`A`,width:30},{accessor:`sessions`,type:`bar`,stackId:`A`,width:30},{accessor:`volume`,type:`line`,width:2}]}},y={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:`red`,label:`MAX`,value:650}},dataset:s,measures:[{accessor:`users`,type:`bar`,width:2},{accessor:`sessions`,type:`line`},{accessor:`volume`,type:`line`}]}},b={args:{dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:`sessions`,label:`Active Sessions`,type:`bar`,highlightColor:e=>{if(e>400)return`red`}},{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),type:`area`},{accessor:`volume`,label:`Vol.`,formatter:e=>`${e} sessions`,type:`line`}]}},x={args:{measures:[{accessor:`volume`,type:`line`},{accessor:`sessions`,type:`bar`,opacity:.6,formatter:e=>`$`+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:`sessions`}}}},S={args:{dataset:[]}},C={args:{dataset:a.slice(0,7),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`,type:`bar`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`,type:`bar`},{accessor:`volume`,label:`Vol.`,type:`line`}],chartConfig:{showStackAggregateTotals:!0}}},w={args:{dataset:a.slice(0,7),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`,type:`bar`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`,type:`bar`},{accessor:`volume`,label:`Vol.`,type:`line`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,p.jsx)(l,{})}}},T={args:o},E={args:c},D=[`Default`,`WithCustomColor`,`WithDataLabels`,`WithFormatter`,`WithReferenceLine`,`WithHighlightedMeasures`,`WithFormattedSecondaryAxis`,`LoadingPlaceholder`,`WithStackAggregateTotals`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 7),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users',
      type: 'bar'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions',
      type: 'bar'
    }, {
      accessor: 'volume',
      label: 'Vol.',
      type: 'line'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 7),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users',
      type: 'bar'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions',
      type: 'bar'
    }, {
      accessor: 'volume',
      label: 'Vol.',
      type: 'line'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    },
    tooltipConfig: {
      content: <CustomTooltipContent />
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...E.parameters?.docs?.source}}}})))()}export{E as a,_ as c,b as d,y as f,g as i,x as l,O as m,h as n,T as o,C as p,S as r,w as s,f as t,v as u};