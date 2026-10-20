import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{a as r,i,o as ee,r as te}from"./withWebComponent-CQvqGaAL.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./ThemingParameters-ActMyMz4.js";import{n as ne,t as c}from"./useIsRTL-amsgtLUV.js";import{Ct as l,M as re,N as ie,St as ae,a as oe,b as se,gt as u,ht as ce,mt as le,n as ue,o as de,pt as fe,t as pe,v as me,x as d,y as he}from"./ChartContainer-BnOstL7l.js";import{a as ge,c as _e,d as ve,f as ye,i as be,l as xe,m as f,n as p,o as Se,p as Ce,r as we,s as m,t as Te,u as h}from"./YAxisTicks-C_Nd4emi.js";import{i as g,n as Ee,r as De,t as Oe}from"./useCancelAnimationFallback-p7aSrKQ0.js";import{a as ke,d as _,i as v,m as Ae,p as je,s as y,t as Me,u as b}from"./DemoProps-B8sOF3QJ.js";import{a as Ne,c as x,d as S,i as Pe,l as C,n as w,r as Fe,s as T,t as Ie,u as Le}from"./staticProps-BawIHHiD.js";import{i as Re,n as E,r as ze,t as Be}from"./ChartDataLabel-BkTnDFt3.js";import{a as Ve,c as He,i as Ue,n as We,o as Ge,r as D,s as O,t as k}from"./useTooltipFormatter-CMPJKwuK.js";import{n as Ke,t as A}from"./useOnClickInternal-BT4nqvMX.js";import{i as j,n as M,r as qe,t as Je}from"./StackedTooltipContent-1nI5HkPi.js";import{n as N,t as P}from"./react-content-loader.es-BP05QUZn.js";var F,Ye,Xe;function Ze(){return(Ze=e((()=>{F=n(),Ye=S(),x(),O(),Xe=(e,t,n=``)=>(0,F.useMemo)(()=>{let r=Array(t.length).fill(0),i=0;return e instanceof Array&&t&&(e.map(e=>t.map(t=>t.formatter((0,Ye.getValueByDataKey)(e,t.accessor,``)))).forEach(e=>{e.forEach((e,t)=>{r[t]=Math.max(Ge(e),r[t])})}),r=r.map(e=>Math.min(200,e)),i=r.reduce((e,t)=>e+t,0)),n===`middle`?[r,{width:`auto`}]:[r,{marginLeft:i,maxWidth:`calc(100% - ${i+8}px)`}]},[e,t,n])})))()}var I,Qe;function $e(){return($e=e((()=>{o(),N(),I=a(),Qe=()=>(0,I.jsxs)(P,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:s.sapContent_ImagePlaceholderBackground,foregroundColor:s.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:s.sapContent_DisabledOpacity,children:[(0,I.jsx)(`rect`,{x:`20`,y:`10`,width:`1`,height:`135`}),(0,I.jsx)(`rect`,{x:`20`,y:`20`,width:`85`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`40`,width:`117`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`60`,width:`67`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`80`,width:`75`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`100`,width:`125`,height:`15`}),(0,I.jsx)(`rect`,{x:`20`,y:`120`,width:`60`,height:`15`})]})})))()}var L,et,R,tt,nt,z,B;function rt(){return(rt=e((()=>{c(),r(),i(),o(),L=n(),he(),g(),d(),f(),le(),ie(),l(),de(),u(),ye(),h(),et=S(),Oe(),m(),ze(),C(),Ze(),ge(),A(),D(),k(),ue(),E(),x(),j(),M(),w(),O(),be(),p(),$e(),R=a(),tt={formatter:T},nt={formatter:T,opacity:1},z=e=>({payload:t})=>(0,et.getValueByDataKey)(t,e),B=(0,L.forwardRef)((e,t)=>{let{loading:n,loadingDelay:r,dataset:i,noLegend:a,noAnimation:o,tooltipConfig:c,onDataPointClick:l,onLegendClick:ie,onClick:u,style:le,className:ue,slot:de,syncId:d,ChartPlaceholder:he,children:ge,alignLabels:ye=`insideRight`,...be}=e,f={margin:{},yAxisVisible:!0,xAxisVisible:!0,gridStroke:s.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,barGap:3,zoomingTool:!1,resizeDebounce:250,yAxisConfig:{},xAxisConfig:{},secondXAxisConfig:{},...e.chartConfig},p=f.referenceLine,{dimensions:m,measures:h,stackGroups:g,lastInStack:Oe}=Ue(e.dimensions,e.measures,tt,nt,f.showStackAggregateTotals),ke=We(h),_=m[0],{primaryMeasure:v,secondaryMeasure:Ae}=He(h,f?.secondYAxis?.dataKey),je=h.map(({accessor:e})=>e),y=f.secondYAxis?je.findIndex(e=>e===f.secondYAxis?.dataKey):0,[Me,b]=ee(t),x=Le(ie),S=Re(_?.formatter),C=(0,L.useCallback)((e,t,n)=>{if(e&&l){let r=e.value.length?e.value[1]-e.value[0]:e.value;l(te(n,{dataKey:Object.keys(e).filter(e=>e!==`value`).find(t=>e[t]===r),value:r,payload:e.payload,dataIndex:t}))}},[l]),w=Ke(u),T=i?.length>30,E=_?.accessor,[ze,Ge]=Xe(i,m,f.legendPosition),D=_e(f.margin,f.zoomingTool),[O]=Se(b,1),k=ne(b),{isMounted:A,handleBarAnimationStart:j,handleBarAnimationEnd:M}=Ee(o),N=Object.keys(g),P=f.showStackAggregateTotals&&N.length===1&&h.every(e=>e.stackId!=null),{chartConfig:F,dimensions:Ye,measures:Ze,...I}=be;return(0,R.jsx)(pe,{dataset:i,loading:n,loadingDelay:r,Placeholder:he??Qe,ref:Me,style:le,className:ue,slot:de,resizeDebounce:f.resizeDebounce,...I,children:(0,R.jsxs)(De,{syncId:d,onClick:w,stackOffset:`sign`,margin:D,layout:`vertical`,data:i,barGap:f.barGap,accessibilityLayer:f.accessibilityLayer,className:typeof l==`function`||typeof u==`function`?`has-click-handler`:void 0,children:[(0,R.jsx)(Ce,{vertical:f.gridVertical,horizontal:f.gridHorizontal,stroke:f.gridStroke}),f.xAxisVisible&&(0,R.jsx)(ve,{interval:0,type:`number`,tick:(0,R.jsx)(we,{formatter:v?.formatter}),axisLine:f.xAxisVisible,tickLine:Fe,height:O,reversed:k,...f.xAxisConfig}),f.secondYAxis?.dataKey&&(0,R.jsx)(ve,{dataKey:f.secondYAxis.dataKey,axisLine:{stroke:f.secondYAxis.color??`var(--sapChart_OrderedColor_${y%12+1})`},tick:(0,R.jsx)(we,{formatter:Ae?.formatter,secondYAxisConfig:{color:f.secondYAxis.color??`var(--sapChart_OrderedColor_${y%12+1})`}}),tickLine:{stroke:f.secondYAxis.color??`var(--sapChart_OrderedColor_${y%12+1})`},label:{value:f.secondYAxis.name,offset:2,angle:90,position:`center`},orientation:`top`,interval:0,xAxisId:`secondary`,type:`number`,...f.secondXAxisConfig}),f.yAxisVisible&&m.map((e,t)=>(0,R.jsx)(xe,{interval:e?.interval??`preserveStartEnd`,minTickGap:T?void 0:-10,type:`category`,dataKey:e.accessor,tick:(0,R.jsx)(Te,{formatter:e?.formatter}),tickLine:t<1,axisLine:t<1,yAxisId:t,width:ze[t],allowDuplicatedCategory:t===0,orientation:k?`right`:`left`,...f.yAxisConfig},e.reactKey)),A&&h.map((e,t)=>(0,R.jsxs)(me,{stackId:e.stackId,fillOpacity:e.opacity,name:e.label??e.accessor,strokeOpacity:e.opacity,type:`monotone`,dataKey:e.accessor,fill:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,stroke:e.color??`var(--sapChart_OrderedColor_${t%12+1})`,barSize:e.width,onClick:C,isAnimationActive:!o,onAnimationStart:j,onAnimationEnd:M,children:[(0,R.jsx)(re,{data:i,valueAccessor:z(e.accessor),content:(0,R.jsx)(Be,{config:e,chartType:`bar`,position:ye})}),f.showStackAggregateTotals&&e.stackId&&typeof e.accessor==`string`&&Oe.has(e.accessor)&&(0,R.jsx)(re,{data:i,valueAccessor:z(e.accessor),position:`right`,content:(0,R.jsx)(qe,{stackAccessors:g[e.stackId],dataset:i})}),i.map((n,r)=>(0,R.jsx)(fe,{fill:Ve(e,n,t),stroke:Ve(e,n,t)},r))]},e.reactKey)),!a&&(0,R.jsx)(ae,{verticalAlign:f.legendPosition,align:f.legendHorizontalAlign,onClick:x,wrapperStyle:Ge,...f.legendConfig}),p&&(0,R.jsx)(oe,{...p,stroke:p?.color??p?.stroke,x:p?.value??p?.x,label:p?.label}),c?.active!==!1&&(0,R.jsx)(ce,{cursor:Ne,formatter:ke,contentStyle:Pe,labelFormatter:S,...c,...P&&{content:(0,R.jsx)(Je,{stackAccessors:g[N[0]],totalFormatter:f.stackAggregateTotalFormatter})}}),!!f.zoomingTool&&(0,R.jsx)(se,{dataKey:E,tickFormatter:_?.formatter,...Ie,...typeof f.zoomingTool==`object`?f.zoomingTool:{}}),ge]})})}),B.displayName=`BarChart`;try{B.displayName=`BarChart`,B.__docgenInfo={description:`A \`BarChart\` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`BarChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,methods:[],props:{alignLabels:{defaultValue:{value:`'insideRight'`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:`Alignment of the labels of the data points.`,name:`alignLabels`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!1,tags:{default:`'insideRight'`},type:{name:`enum`,raw:`LabelPosition`,value:[{value:`"end"`},{value:`"top"`},{value:`"bottom"`},{value:`"middle"`},{value:`"center"`},{value:`"left"`},{value:`"right"`},{value:`"inside"`},{value:`"outside"`},{value:`"insideLeft"`},{value:`"insideRight"`},{value:`"insideTop"`},{value:`"insideBottom"`},{value:`"insideTopLeft"`},{value:`"insideBottomLeft"`},{value:`"insideTopRight"`},{value:`"insideBottomRight"`},{value:`"insideStart"`},{value:`"insideEnd"`},{value:`"centerTop"`},{value:`"centerBottom"`},{value:`{ x?: number; y?: number; }`,description:``,fullComment:``,tags:{}}]}},dimensions:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:`An array of config objects. Each object will define one dimension of the chart.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs
- \`interval\`: number that controls how many ticks are rendered on the x axis`,name:`dimensions`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!0,tags:{},type:{name:`DimensionConfig[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`}],description:"An array of config objects. Each object is defining one bar in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.\n  Can also be a getter.\n\n**Optional properties**\n\n- `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.\n- `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.\n- `DataLabel`: a custom component to be used for the data label\n- `width`: bar width, defaults to `auto`\n- `opacity`: bar opacity, defaults to `1`\n- `stackId`: bars with the same stackId will be stacked\n- `highlightColor`: function will be called to define a custom color of a specific element which matches the\n   defined condition. Overwrites code>color</code> of the element.",name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/BarChart/index.d.ts`,name:`BarChartProps`},required:!0,tags:{},type:{name:`MeasureConfig[]`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

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
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var it=t({Default:()=>V,LoadingPlaceholder:()=>K,WithCustomColor:()=>H,WithCustomLegendConfig:()=>$,WithCustomTooltipConfig:()=>Q,WithCustomTooltipTotal:()=>Z,WithDataLabels:()=>W,WithFormatter:()=>G,WithHighlightedMeasure:()=>J,WithNormalizedStacks:()=>Y,WithReferenceLine:()=>q,WithSecondaryDimension:()=>U,WithStackAggregateTotalsAndTooltip:()=>X,__namedExportsOrder:()=>st,default:()=>ot}),at,ot,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,st;function ct(){return(ct=e((()=>{ke(),rt(),at=a(),ot={title:`BarChart`,component:B,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:v,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,label:`Users`,formatter:e=>e.toLocaleString(),opacity:.6},{accessor:`sessions`,label:`Active Sessions`,formatter:e=>`${e} sessions`,hideDataLabel:!0},{accessor:`volume`,label:`Vol.`}]}},V={},H={args:{measures:[{accessor:`users`,color:`red`}],dataset:_}},U={args:{dimensions:[{accessor:`name`},{accessor:`dimension`}],measures:[{accessor:`users`,color:`red`}],dataset:b}},W={args:{measures:[{accessor:`users`},{accessor:`sessions`},{accessor:`volume`}]}},G={args:{dimensions:[{accessor:`name`,formatter:e=>e.slice(0,3)}],measures:[{accessor:`users`,formatter:e=>`${e/10}`,label:`number of users`},{accessor:`sessions`},{accessor:`volume`}],chartConfig:{zoomingTool:!0}}},K={args:{dataset:[]}},q={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`}],chartConfig:{referenceLine:{color:`red`,label:`MAX`,value:650}}}},J={args:{measures:[{accessor:`users`,stackId:`A`},{accessor:`sessions`,stackId:`A`},{accessor:`volume`,highlightColor:(e,t,n)=>{if(n.name===`February`)return`red`}}]}},Y={args:je},X={name:`With Stack Aggregate Totals`,args:{dataset:v.slice(0,3),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`}],chartConfig:{showStackAggregateTotals:!0}}},Z={args:{dataset:v.slice(0,5),measures:[{accessor:`users`,stackId:`A`,label:`Users`},{accessor:`sessions`,stackId:`A`,label:`Active Sessions`},{accessor:`volume`,label:`Vol.`}],chartConfig:{showStackAggregateTotals:!0},tooltipConfig:{content:(0,at.jsx)(Me,{})}}},Q={args:Ae},$={args:y},st=[`Default`,`WithCustomColor`,`WithSecondaryDimension`,`WithDataLabels`,`WithFormatter`,`LoadingPlaceholder`,`WithReferenceLine`,`WithHighlightedMeasure`,`WithNormalizedStacks`,`WithStackAggregateTotalsAndTooltip`,`WithCustomTooltipTotal`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
      accessor: 'users'
    }, {
      accessor: 'sessions'
    }, {
      accessor: 'volume'
    }]
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    }],
    chartConfig: {
      zoomingTool: true
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    measures: [{
      accessor: 'users',
      stackId: 'A'
    }, {
      accessor: 'sessions',
      stackId: 'A'
    }, {
      accessor: 'volume',
      highlightColor: (value, measure, data) => {
        if (data.name === 'February') {
          return 'red';
        }
      }
    }]
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: stackedNormalizedConfig
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'With Stack Aggregate Totals',
  args: {
    dataset: complexDataSet.slice(0, 3),
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
}`,...$.parameters?.docs?.source}}}})))()}export{$ as a,W as c,Y as d,q as f,ct as h,H as i,G as l,X as m,V as n,Q as o,U as p,K as r,Z as s,it as t,J as u};