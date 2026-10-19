import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{a as r,i,o as ee,r as te}from"./withWebComponent-CQvqGaAL.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./ThemingParameters-ActMyMz4.js";import{n as ne,t as c}from"./useIsRTL-nKEc1MHc.js";import{Ct as l,M as u,N as re,St as ie,a as ae,b as oe,gt as d,ht as se,mt as ce,n as le,o as ue,pt as de,t as fe,v as pe,x as me,y as he}from"./ChartContainer-BnOstL7l.js";import{a as f,c as ge,d as _e,f as ve,i as ye,l as p,m,n as h,o as be,p as xe,r as Se,s as g,t as Ce,u as _}from"./YAxisTicks-C_Nd4emi.js";import{i as v,n as we,r as Te,t as Ee}from"./useCancelAnimationFallback-p7aSrKQ0.js";import{a as y,d as b,i as x,m as S,p as C,s as w,t as T,u as E}from"./DemoProps-B8sOF3QJ.js";import{a as De,c as D,d as O,i as Oe,l as k,n as A,r as ke,s as j,t as Ae,u as je}from"./staticProps-BawIHHiD.js";import{i as Me,n as Ne,r as Pe,t as Fe}from"./ChartDataLabel-BkTnDFt3.js";import{a as Ie,c as Le,i as Re,n as ze,r as Be,s as Ve,t as He}from"./useTooltipFormatter-CMPJKwuK.js";import{n as Ue,t as M}from"./useOnClickInternal-BT4nqvMX.js";import{i as We,n as Ge,r as Ke,t as qe}from"./StackedTooltipContent-1nI5HkPi.js";import{n as Je,t as Ye}from"./react-content-loader.es-BP05QUZn.js";import{n as Xe,t as Ze}from"./useLongestYAxisLabel-BFHt5j23.js";var N,P;function F(){return(F=e((()=>{o(),Je(),N=a(),P=e=>(0,N.jsxs)(Ye,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:s.sapContent_ImagePlaceholderBackground,foregroundColor:s.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:s.sapContent_DisabledOpacity,...e,children:[(0,N.jsx)(`rect`,{x:`10`,y:`135`,width:`135`,height:`1`}),(0,N.jsx)(`rect`,{x:`20`,y:`50`,width:`15`,height:`85`}),(0,N.jsx)(`rect`,{x:`40`,y:`18`,width:`15`,height:`117`}),(0,N.jsx)(`rect`,{x:`60`,y:`68`,width:`15`,height:`67`}),(0,N.jsx)(`rect`,{x:`80`,y:`60`,width:`15`,height:`75`}),(0,N.jsx)(`rect`,{x:`100`,y:`10`,width:`15`,height:`125`}),(0,N.jsx)(`rect`,{x:`120`,y:`75`,width:`15`,height:`60`})]});try{P.displayName=`ColumnChartPlaceholder`,P.__docgenInfo={description:``,displayName:`ColumnChartPlaceholder`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ColumnChart/Placeholder.d.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L,R,Qe,$e,z,B;function et(){return(et=e((()=>{c(),r(),i(),o(),I=n(),he(),v(),me(),m(),ce(),re(),l(),ue(),d(),ve(),_(),L=O(),Ee(),g(),Pe(),k(),Ze(),f(),M(),Be(),He(),le(),Ne(),D(),We(),Ge(),A(),Ve(),ye(),h(),F(),R=a(),Qe={formatter:j},$e={formatter:j,opacity:1},z=e=>({payload:t})=>(0,L.getValueByDataKey)(t,e),B=(0,I.forwardRef)((e,t)=>{let{loading:n,loadingDelay:r,dataset:i,noLegend:a,noAnimation:o,tooltipConfig:c,onDataPointClick:l,onLegendClick:re,onClick:d,style:ce,className:le,slot:ue,ChartPlaceholder:me,syncId:he,children:f,alignLabels:ve=`insideTop`,...ye}=e,m={yAxisVisible:!1,xAxisVisible:!0,gridStroke:s.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondYAxisConfig:{},...e.chartConfig},{referenceLine:h}=m,{dimensions:g,measures:_,stackGroups:v,lastInStack:Ee}=Re(e.dimensions,e.measures,Qe,$e,m.showStackAggregateTotals),y=ze(_),[b,x]=Xe(i,_,m.legendPosition),S=g[0],{primaryMeasure:C,secondaryMeasure:w}=Le(_,m?.secondYAxis?.dataKey),T=Me(S?.formatter),[E,D]=ee(t),O=_.map(({accessor:e})=>e),k=m.secondYAxis?O.findIndex(e=>e===m.secondYAxis?.dataKey):0,A=je(re),j=(0,I.useCallback)((e,t,n)=>{e&&l&&l(te(n,{dataKey:Object.keys(e).filter(t=>e.value.length?e[t]===e.value[1]-e.value[0]:e[t]===e.value&&t!==`value`)[0],value:e.value.length?e.value[1]-e.value[0]:e.value,dataIndex:t,payload:e.payload}))},[l]),Ne=Ue(d),Pe=i?.length>30,Be=S?.accessor,Ve=ge(m.margin,m.zoomingTool),He=be(D,e.dimensions.length),M=ne(D),{chartConfig:We,dimensions:Ge,measures:Je,...Ye}=ye,{isMounted:Ze,handleBarAnimationStart:N,handleBarAnimationEnd:F}=we(o),L=Object.keys(v),B=m.showStackAggregateTotals&&L.length===1&&_.every(e=>e.stackId!=null);return(0,R.jsx)(fe,{dataset:i,loading:n,loadingDelay:r,Placeholder:me??P,ref:E,style:ce,className:le,slot:ue,resizeDebounce:m.resizeDebounce,...Ye,children:(0,R.jsxs)(Te,{syncId:he,onClick:Ne,stackOffset:`sign`,margin:Ve,data:i,barGap:m.barGap,accessibilityLayer:m.accessibilityLayer,className:typeof l==`function`||typeof d==`function`?`has-click-handler`:void 0,children:[(0,R.jsx)(xe,{vertical:m.gridVertical,horizontal:m.gridHorizontal,stroke:m.gridStroke}),m.xAxisVisible&&g.map((e,t)=>(0,R.jsx)(_e,{dataKey:e.accessor,xAxisId:t,interval:e?.interval??(Pe?`preserveStart`:0),tick:(0,R.jsx)(Se,{formatter:e?.formatter}),tickLine:t<1,axisLine:t<1,height:He[t],allowDuplicatedCategory:t===0,reversed:M,...m.xAxisConfig},e.reactKey)),(0,R.jsx)(p,{orientation:M===!0?`right`:`left`,axisLine:m.yAxisVisible,tickLine:ke,yAxisId:`left`,interval:0,tick:(0,R.jsx)(Ce,{formatter:C?.formatter}),width:b,...m.yAxisConfig}),m.secondYAxis?.dataKey&&(0,R.jsx)(p,{dataKey:m.secondYAxis.dataKey,axisLine:{stroke:m.secondYAxis.color??`var(--sapChart_OrderedColor_${k%12+1})`},tick:(0,R.jsx)(Ce,{formatter:w?.formatter,secondYAxisConfig:{color:m.secondYAxis.color??`var(--sapChart_OrderedColor_${k%12+1})`}}),tickLine:{stroke:m.secondYAxis.color??`var(--sapChart_OrderedColor_${k%12+1})`},label:{value:m.secondYAxis.name,offset:2,angle:90,position:`center`},orientation:M===!0?`left`:`right`,yAxisId:`right`,interval:0,...m.secondYAxisConfig}),Ze&&_.map((e,t)=>(0,R.jsxs)(pe,{yAxisId:m.secondYAxis?.dataKey===e.accessor?`right`:`left`,stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:`monotone`,dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:e.width,onClick:j,isAnimationActive:!o,onAnimationStart:N,onAnimationEnd:F,children:[(0,R.jsx)(u,{data:i,valueAccessor:z(e.accessor),content:(0,R.jsx)(Fe,{config:e,chartType:`column`,position:ve})}),m.showStackAggregateTotals&&e.stackId&&typeof e.accessor==`string`&&Ee.has(e.accessor)&&(0,R.jsx)(u,{data:i,valueAccessor:z(e.accessor),position:`top`,content:(0,R.jsx)(Ke,{stackAccessors:v[e.stackId],dataset:i})}),i.map((n,r)=>(0,R.jsx)(de,{fill:Ie(e,n,t),stroke:Ie(e,n,t)},r))]},e.reactKey)),!a&&(0,R.jsx)(ie,{verticalAlign:m.legendPosition,align:m.legendHorizontalAlign,onClick:A,wrapperStyle:x,...m.legendConfig}),h&&(0,R.jsx)(ae,{...h,stroke:h?.color??h?.stroke,y:h?.value??h?.y,yAxisId:h?.yAxisId??`left`,label:h?.label}),c?.active!==!1&&(0,R.jsx)(se,{cursor:De,formatter:y,contentStyle:Oe,labelFormatter:T,...c,...B&&{content:(0,R.jsx)(qe,{stackAccessors:v[L[0]],totalFormatter:m.stackAggregateTotalFormatter})}}),!!m.zoomingTool&&(0,R.jsx)(oe,{dataKey:Be,tickFormatter:S?.formatter,...Ae,...typeof m.zoomingTool==`object`?m.zoomingTool:{}}),f]})})}),B.displayName=`ColumnChart`;try{B.displayName=`ColumnChart`,B.__docgenInfo={description:`A \`ColumnChart\` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`ColumnChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,methods:[],props:{alignLabels:{defaultValue:{value:`'insideTop'`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:`Alignment of the labels of the data points.`,name:`alignLabels`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!1,tags:{default:`'insideTop'`},type:{name:`enum`,raw:`LabelPosition`,value:[{value:`"end"`},{value:`"top"`},{value:`"bottom"`},{value:`"middle"`},{value:`"center"`},{value:`"left"`},{value:`"right"`},{value:`"inside"`},{value:`"outside"`},{value:`"insideLeft"`},{value:`"insideRight"`},{value:`"insideTop"`},{value:`"insideBottom"`},{value:`"insideTopLeft"`},{value:`"insideBottomLeft"`},{value:`"insideTopRight"`},{value:`"insideBottomRight"`},{value:`"insideStart"`},{value:`"insideEnd"`},{value:`"centerTop"`},{value:`"centerBottom"`},{value:`{ x?: number; y?: number; }`,description:``,fullComment:``,tags:{}}]}},dimensions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:`dimensions`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!0,tags:{},type:{name:`DimensionConfig[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`}],description:"An array of config objects. Each object is defining one column in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: column width, defaults to `auto`\n- `opacity`: column opacity, defaults to `1`\n- `stackId`: columns with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ColumnChart/index.d.ts`,name:`ColumnChartProps`},required:!0,tags:{},type:{name:`MeasureConfig[]`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

This can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a \`BusyIndicator\` on top of the chart (in case the chart has already some data to display).`,name:`loading`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{default:`1000`},type:{name:`number`}},dataset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:`dataset`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`Record<string, unknown>[]`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:`children`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},noLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:`noLegend`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Fired when clicked anywhere in the chart.`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void`}},onDataPointClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:`onDataPointClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<any>) => void`}},onLegendClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.`,name:`onLegendClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{param:`event`},type:{name:`(event: CustomEvent<any>) => void`}},noAnimation:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noAnimation` disables all chart animations when set to `true`.",name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},chartConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:`chartConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`ICartesianChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }`}},tooltipConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:`tooltipConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`TooltipProps<string | number | (string | number)[], string | number>`}},syncId:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:`syncId`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`string`}},ChartPlaceholder:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
standard loading placeholder of the specific chart is used.`,name:`ChartPlaceholder`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ComponentType`,value:[{value:`ComponentClass<{}, any>`,description:`Represents a component class in React.`,fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:`FunctionComponent<{}>`,description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:`P The props the component accepts.`,see:`{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}`,example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var tt=t({Default:()=>V,LoadingPlaceholder:()=>q,WithCustomColor:()=>H,WithCustomLegendConfig:()=>$,WithCustomTooltipConfig:()=>Q,WithCustomTooltipTotal:()=>Z,WithFormatter:()=>K,WithHighlightedMeasure:()=>Y,WithNormalizedStacks:()=>G,WithReferenceLine:()=>J,WithSecondaryDimension:()=>U,WithStackAggregateTotals:()=>X,WithStacks:()=>W,__namedExportsOrder:()=>it,default:()=>rt}),nt,rt,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,it;function at(){return(at=e((()=>{y(),et(),nt=a(),rt={title:`ColumnChart`,component:B,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:x,dimensions:[{accessor:`name`,formatter:e=>`${e} 2019`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},V={},H={args:{measures:[{accessor:`users`,color:`red`}],dataset:b}},U={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:E}},W={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],dataset:x}},G={args:C},K={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}]}},q={args:{dataset:[]}},J={args:{chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},Y={args:{measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString()},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`,highlightColor:e=>{if(e>750)return`red`}}]}},X={args:{dataset:x.slice(0,3),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},Z={args:{dataset:x.slice(0,5),dimensions:[{accessor:`name`}],measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,nt.jsx)(T,{})}}},Q={args:S},$={args:w},it=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithStacks`,`WithNormalizedStacks`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithStackAggregateTotals`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      color: 'red'
    }],
    dataset: simpleDataSet
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume'
    }],
    dataset: complexDataSet
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      label: 'Users',
      formatter: val => val.toLocaleString()
    }, {
      accessor: 'sessions',
      label: 'Active Sessions',
      formatter: val => \`\${val} sessions\`,
      hideDataLabel: true
    }, {
      accessor: 'volume',
      label: 'Vol.',
      highlightColor: value => {
        if (value > 750) {
          return 'red';
        }
      }
    }]
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 3),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: complexDataSet.slice(0, 5),
    dimensions: [{
      accessor: 'name'
    }],
    measures: [{
      accessor: 'users',
      stackId: 'A',
      label: 'Users'
    }, {
      accessor: 'sessions',
      stackId: 'A',
      label: 'Active Sessions'
    }, {
      accessor: 'volume',
      label: 'Vol.'
    }],
    chartConfig: {
      showStackAggregateTotals: true
    },
    tooltipConfig: {
      content: <CustomTooltipContent />
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...$.parameters?.docs?.source}}}})))()}export{$ as a,K as c,J as d,U as f,at as h,H as i,Y as l,W as m,V as n,Q as o,X as p,q as r,Z as s,tt as t,G as u};