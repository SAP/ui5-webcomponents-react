import{s as N,d as x}from"./DemoProps-gxklhiCN.js";import{j as z}from"./jsx-runtime-DtaoT6pD.js";import{r as E}from"./index-OjgoNOWw.js";import{P as H}from"./PieChart-dKac3lsJ.js";import"./index-ENBflQbU.js";import"./clsx-Zbgk8kpT.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./defaults-PS8y0OHf.js";import"./ChartContainer-raa18hKk.js";import"./_baseForOwn-a7AeJH13.js";import"./_baseUniq-_JZHYp0e.js";import"./index-XRg6augb.js";import"./i18n-defaults-Ph_9MK3s.js";import"./i18nBundle-j8vDD4VY.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./throttle-SW6qI-oX.js";import"./isString-F2o_0UD_.js";import"./index-mG3laKte.js";import"./iframe-NvEupkM7.js";import"../sb-preview/runtime.js";import"./Label-mY98SzPQ.js";import"./UI5Element-9EXj3atz.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-X1FTyPSK.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./tiny-invariant-csaaSLPr.js";import"./staticProps-5PxpsJ6y.js";import"./useOnClickInternal-0NwCcJNk.js";import"./Placeholder-MM2fElbI.js";import"./generateCategoricalChart-NPKs9C7S.js";import"./isPlainObject-F1bmvOby.js";import"./mapValues-_kP3xGjM.js";import"./react-content-loader.es-OqJegcLF.js";const c=E.forwardRef((e,T)=>{const j={legendPosition:"bottom",paddingAngle:0,innerRadius:"50%",...e.chartConfig};return z.jsx(H,{...e,ref:T,chartConfig:j})});c.displayName="DonutChart";try{c.displayName="DonutChart",c.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.",displayName:"DonutChart",props:{centerLabel:{defaultValue:null,description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:"centerLabel",required:!1,type:{name:"string"}},dimension:{defaultValue:null,description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:"dimension",required:!0,type:{name:"IChartDimension"}},measure:{defaultValue:null,description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:"measure",required:!0,type:{name:"MeasureConfig"}},children:{defaultValue:null,description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Fired when clicked anywhere in the chart.",name:"onClick",required:!1,type:{name:"(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void"}},syncId:{defaultValue:null,description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:"syncId",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:`Flag whether the chart should display a loading indicator.

This can either be a placeholder shimmer (in case the chart has no data yet) or a small
loading bar in the top of the chart (in case the chart has already some data to display).`,name:"loading",required:!1,type:{name:"boolean"}},dataset:{defaultValue:null,description:"The `dataset` is an array of object which will be displayed in the chart.",name:"dataset",required:!1,type:{name:"Record<string, unknown>[]"}},noLegend:{defaultValue:null,description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:"noLegend",required:!1,type:{name:"boolean"}},onDataPointClick:{defaultValue:null,description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:"onDataPointClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},onLegendClick:{defaultValue:null,description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
@param event`,name:"onLegendClick",required:!1,type:{name:"(event: CustomEvent<any>) => void"}},noAnimation:{defaultValue:null,description:"`noAnimation` disables all chart animations when set to `true`.",name:"noAnimation",required:!1,type:{name:"boolean"}},chartConfig:{defaultValue:null,description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:"chartConfig",required:!1,type:{name:"IPolarChartConfig & { margin?: { right: number; left: number; top: number; bottom: number; }; legendPosition?: string; legendHorizontalAlign?: string; resizeDebounce?: number; }"}},tooltipConfig:{defaultValue:null,description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to overwrite internally used tooltip props, so use with caution!`,name:"tooltipConfig",required:!1,type:{name:"TooltipProps<string | number | (string | number)[], string | number>"}},ChartPlaceholder:{defaultValue:null,description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:"ChartPlaceholder",required:!1,type:{name:"ComponentType"}}}}}catch{}const qe={title:"DonutChart",component:c,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:N,dimension:{accessor:"name"},measure:{accessor:"users"}}},t={},a={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)","black","yellow","pink"]}}},r={args:{chartConfig:{paddingAngle:5}}},n={args:{chartConfig:{innerRadius:"20%",outerRadius:"90%"}}},o={args:{dataset:[]}},i={args:{dimension:{accessor:"name",formatter:e=>e.slice(0,3)},measure:{accessor:"users",formatter:e=>`${e/10}`}}},s={args:{chartConfig:{activeSegment:9,showActiveSegmentDataLabel:!0}}},l={args:{measure:{accessor:"users",hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:x}};var d,h,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,w,v;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,D,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var k,A,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    dimension: {
      accessor: 'name',
      formatter: el => el.slice(0, 3)
    },
    measure: {
      accessor: 'users',
      formatter: el => \`\${el / 10}\`
    }
  }
}`,...(V=(A=i.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,L,R;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      activeSegment: 9,
      showActiveSegmentDataLabel: true
    }
  }
}`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var _,W,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: chartConfig => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      }
    },
    dataset: simpleDataSetWithSmallValues
  }
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const Le=["Default","WithCustomColor","WithPaddedAngle","WithCustomRadius","LoadingPlaceholder","WithFormatter","WithHighlightedActiveSegment","HideLabels"];export{t as Default,l as HideLabels,o as LoadingPlaceholder,a as WithCustomColor,n as WithCustomRadius,i as WithFormatter,s as WithHighlightedActiveSegment,r as WithPaddedAngle,Le as __namedExportsOrder,qe as default};
