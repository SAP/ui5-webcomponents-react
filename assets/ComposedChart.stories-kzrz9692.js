import{c as I,s as K,b as M}from"./DemoProps-gxklhiCN.js";import{C as Y}from"./index-6DQXChqU.js";import"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import"./ThemingParameters-UghqSl-x.js";import"./index-ENBflQbU.js";import"./defaults-eVwm5Krk.js";import"./ChartContainer-58GoJfhO.js";import"./_baseForOwn-a7AeJH13.js";import"./_baseUniq-_JZHYp0e.js";import"./index-XRg6augb.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./i18n-defaults-Ph_9MK3s.js";import"./i18nBundle-j8vDD4VY.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-iSZg5FOa.js";import"./iframe-V6w1a2pO.js";import"../sb-preview/runtime.js";import"./Label-mY98SzPQ.js";import"./UI5Element-9EXj3atz.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-X1FTyPSK.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./tiny-invariant-csaaSLPr.js";import"./YAxisTicks-_1Rl_JWZ.js";import"./generateCategoricalChart-eHD7w2D1.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./debounce-F9irgL9Y.js";import"./useTooltipFormatter-GfUA2TRu.js";import"./ChartDataLabel-EFXGmGRI.js";import"./staticProps-5PxpsJ6y.js";import"./useLongestYAxisLabel-I2Di2fWv.js";import"./useOnClickInternal-0NwCcJNk.js";import"./react-content-loader.es-OqJegcLF.js";import"./ComposedChart-d3ynVvfW.js";import"./Line-VLuAnlxU.js";import"./Scatter-mpjILkcA.js";import"./useIsRTL-v9TqQ2ve.js";import"./directionChange-Rh8tPvuN.js";const Ie={title:"ComposedChart",component:Y,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:I,dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar"},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},s={},r={args:{dataset:K,dimensions:[{accessor:"name"}],measures:[{accessor:"users",color:"red",type:"bar"}]}},o={args:{measures:[{accessor:"users",type:"area"},{accessor:"sessions",type:"bar",opacity:.6},{accessor:"volume",type:"line"}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},a={args:{dimensions:[{accessor:"name",formatter:e=>e.slice(0,3)}],measures:[{accessor:"users",formatter:e=>`${e/10}`,type:"bar",label:"number of users",stackId:"A",width:30},{accessor:"sessions",type:"bar",stackId:"A",width:30},{accessor:"volume",type:"line",width:2}]}},t={args:{chartConfig:{zoomingTool:!0,referenceLine:{color:"red",label:"MAX",value:650}},dataset:M,measures:[{accessor:"users",type:"bar",width:2},{accessor:"sessions",type:"line"},{accessor:"volume",type:"line"}]}},n={args:{dimensions:[{accessor:"name",formatter:e=>`${e} 2019`,interval:0}],measures:[{accessor:"sessions",label:"Active Sessions",type:"bar",highlightColor:e=>{if(e>400)return"red"}},{accessor:"users",label:"Users",formatter:e=>e.toLocaleString(),type:"area"},{accessor:"volume",label:"Vol.",formatter:e=>`${e} sessions`,type:"line"}]}},i={args:{measures:[{accessor:"volume",type:"line"},{accessor:"sessions",type:"bar",opacity:.6,formatter:e=>"$"+e}],chartConfig:{zoomingTool:!0,secondYAxis:{dataKey:"sessions"}}}},c={args:{dataset:[]}};var m,p,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const Ke=["Default","WithCustomColor","WithDataLabels","WithFormatter","WithReferenceLine","WithHighlightedMeasures","WithFormattedSecondaryAxis","LoadingPlaceholder"];export{s as Default,c as LoadingPlaceholder,r as WithCustomColor,o as WithDataLabels,i as WithFormattedSecondaryAxis,a as WithFormatter,n as WithHighlightedMeasures,t as WithReferenceLine,Ke as __namedExportsOrder,Ie as default};
