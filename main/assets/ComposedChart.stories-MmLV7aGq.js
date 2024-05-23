import{c as I,s as K,b as M}from"./DemoProps-BWWtsAFv.js";import{C as Y}from"./index-DyNGlh4V.js";import"./ManagedStyles-B3AuKgSD.js";import"./index-BP8_t0zE.js";import"./ThemingParameters-DOkJX3Ed.js";import"./index-CBpU8qq5.js";import"./defaults-DIgwwjYk.js";import"./ChartContainer-wNRCfRoi.js";import"./_baseForOwn-B3hW39GE.js";import"./_baseUniq-BbzeZuBs.js";import"./index-6J2frV2o.js";import"./clsx-B-dksMZM.js";import"./i18n-defaults-DlmaUOWU.js";import"./i18nBundle-VOPn86Vc.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./I18nContext-RJHUyvz-.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./useStylesheet-NUMS3nLe.js";import"./throttle-Cgcjdhlw.js";import"./isString-CadNZdQX.js";import"./index-C8-i5PF-.js";import"./iframe-D0hJidP0.js";import"../sb-preview/runtime.js";import"./Label-DpitxhM9.js";import"./UI5Element-BDMamLf2.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-B6oBGWld.js";import"./utils-BFMQrOqR.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./parameters-bundle.css-CG8awnKl.js";import"./tiny-invariant-CCoILDQG.js";import"./YAxisTicks-CYjGODnc.js";import"./generateCategoricalChart-tLI1G98B.js";import"./isPlainObject-DMxkze9F.js";import"./mapValues-COmDofVS.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CiWlG87_.js";import"./ChartDataLabel-DwOgAPy8.js";import"./staticProps-3DmeqWTG.js";import"./useLongestYAxisLabel-BnbhrF4L.js";import"./useOnClickInternal-Cyu2xiYx.js";import"./react-content-loader.es-VoBEIBwl.js";import"./ComposedChart-CNhihMpg.js";import"./Line-DF5w9WUp.js";import"./Scatter-Dw8U3Fyt.js";import"./useIsRTL-DlkNdqB2.js";import"./directionChange-BWsY0llq.js";const Fe={title:"ComposedChart",component:Y,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:I,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},r={args:{dataset:K,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},o={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},a={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},t={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:M,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},n={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:e=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},i={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},c={args:{dataset:[]}};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,A,W;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(A=t.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var L,$,x;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=($=n.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var D,w,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,k,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Ie=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder"];export{s as Default,c as LoadingPlaceholder,r as WithCustomColor,o as WithDataLabels,i as WithFormattedSecondaryAxis,a as WithFormatter,n as WithHighlightedMeasures,t as WithReferenceLine,Ie as __namedExportsOrder,Fe as default};
