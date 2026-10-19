import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{n as r,t as i}from"./useStylesheet-DvbLk5iS.js";import{a,i as o,o as s,r as c}from"./withWebComponent-CQvqGaAL.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{n as u,t as d}from"./ThemingParameters-ActMyMz4.js";import{n as f,t as p}from"./useIsRTL-nKEc1MHc.js";import{n as m,t as h}from"./clsx-Qb-WgvrD.js";import{Ct as g,St as ee,_,a as v,gt as y,h as b,ht as te,i as ne,n as x,o as re,r as S,t as ie}from"./ChartContainer-BnOstL7l.js";import{a as C,c as ae,d as oe,f as w,i as T,l as se,m as E,n as ce,o as le,p as ue,r as de,s as D,t as fe,u as O}from"./YAxisTicks-C_Nd4emi.js";import{i as k,n as A,r as pe,t as me}from"./Scatter-Dl-9WPOq.js";import{a as he,c as ge,l as j,m as M,s as N}from"./DemoProps-B8sOF3QJ.js";import{a as _e,c as P,i as ve,l as F,n as I,o as ye,r as be,s as xe,u as Se}from"./staticProps-BawIHHiD.js";import{i as Ce,n as we,r as Te,t as Ee}from"./useTooltipFormatter-CMPJKwuK.js";import{n as De,t as Oe}from"./react-content-loader.es-BP05QUZn.js";import{n as ke,t as Ae}from"./useLongestYAxisLabel-BFHt5j23.js";var je;function L(){return(L=e((()=>{ne(),A(),w(),O(),k(),_(),je=S({chartName:`ScatterChart`,GraphicalChild:me,defaultTooltipEventType:`item`,validateTooltipEventTypes:[`item`],axisComponents:[{axisType:`xAxis`,AxisComp:oe},{axisType:`yAxis`,AxisComp:se},{axisType:`zAxis`,AxisComp:pe}],formatAxisMap:b})})))()}var R,z;function B(){return(B=e((()=>{u(),De(),R=l(),z=e=>(0,R.jsxs)(Oe,{viewBox:`0 0 165 145`,preserveAspectRatio:`xMidYMid meet`,width:`100%`,height:`100%`,speed:2,backgroundColor:d.sapContent_ImagePlaceholderBackground,foregroundColor:d.sapContent_ImagePlaceholderForegroundColor,backgroundOpacity:d.sapContent_DisabledOpacity,...e,children:[(0,R.jsx)(`rect`,{x:`10`,y:`135`,width:`135`,height:`1`}),(0,R.jsx)(`circle`,{cx:`20`,cy:`90`,r:`2`}),(0,R.jsx)(`circle`,{cx:`40`,cy:`58`,r:`3`}),(0,R.jsx)(`circle`,{cx:`60`,cy:`108`,r:`14`}),(0,R.jsx)(`circle`,{cx:`85`,cy:`87`,r:`8`}),(0,R.jsx)(`circle`,{cx:`105`,cy:`50`,r:`6`}),(0,R.jsx)(`circle`,{cx:`125`,cy:`115`,r:`4`}),(0,R.jsx)(`circle`,{cx:`78`,cy:`58`,r:`10`}),(0,R.jsx)(`circle`,{cx:`28`,cy:`115`,r:`4`})]});try{z.displayName=`ScatterChartPlaceholder`,z.__docgenInfo={description:``,displayName:`ScatterChartPlaceholder`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ScatterChart/Placeholder.d.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var Me,Ne;function V(){return(V=e((()=>{Me=`@layer ui5-webcomponents-react{._scatterchart_174ln_1{g:focus,path:focus{outline:none}.recharts-scatter-symbol:focus path,.recharts-scatter-symbol[data-point-focused] path{stroke:var(--sapContent_FocusColor);stroke-width:calc(var(--sapContent_FocusWidth) * 2);paint-order:stroke}}}`,Ne={scatterchart:`_scatterchart_174ln_1`}})))()}function H(e,t){return typeof t==`function`?t(e):e[t]}function Pe(e,t){let n=[];e.datasetLabel&&n.push(e.datasetLabel);for(let r of t){let t=H(e.raw,r.accessor),i=r.formatter?r.formatter(t):String(t??``),a=r.label||(typeof r.accessor==`string`?r.accessor:r.axis);n.push(`${a}: ${i}`)}return n.join(`, `)}function Fe({chartRef:e,enabled:t,dataset:n,measures:r,onSelect:i,consumerOnBlur:a,consumerOnFocus:o,consumerOnKeyDownCapture:s}){let c=(0,U.useRef)(-1),l=(0,U.useRef)(!1),u=(0,U.useId)(),d=r.find(e=>e.axis===`x`),f=(0,U.useMemo)(()=>{if(!n?.length||!d)return[];let e=[];return n.forEach((t,n)=>{t.data?.forEach((r,i)=>{e.push({datasetIndex:n,pointIndex:i,datasetLabel:t.label??``,raw:r})})}),e.sort((e,t)=>{let n=Number(H(e.raw,d.accessor))||0,r=Number(H(t.raw,d.accessor))||0;return n===r?e.datasetIndex-t.datasetIndex:n-r}),e},[n,d]),p=(0,U.useRef)(f);(0,U.useEffect)(()=>{p.current=f,c.current=-1},[f]),(0,U.useEffect)(()=>{if(!t)return;let n=e.current;if(!n)return;let i=[];if(n.querySelectorAll(`.recharts-scatter`).forEach(e=>{i.push(Array.from(e.querySelectorAll(`:scope .recharts-scatter-symbol`)))}),i.length===0)return;for(let e=0;e<f.length;e++){let t=f[e],n=i[t.datasetIndex]?.[t.pointIndex];n&&(n.setAttribute(`id`,`${u}-point-${e}`),n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,Pe(t,r)))}let a=c.current;if(a>=0&&n.contains(document.activeElement)){let e=n.querySelector(`#${CSS.escape(u)}-point-${a}`);e&&(e.setAttribute(`data-point-focused`,``),n.setAttribute(`aria-activedescendant`,`${u}-point-${a}`))}});let m=(0,U.useCallback)(t=>{let n=e.current;if(!n)return;n.querySelector(`.recharts-scatter-symbol[data-point-focused]`)?.removeAttribute(`data-point-focused`),c.current=t;let r=n.querySelector(`#${CSS.escape(u)}-point-${t}`);r&&(r.setAttribute(`data-point-focused`,``),n.setAttribute(`aria-activedescendant`,`${u}-point-${t}`))},[u,e]),h=(0,U.useCallback)(()=>{let t=e.current;t&&(t.querySelector(`.recharts-scatter-symbol[data-point-focused]`)?.removeAttribute(`data-point-focused`),t.removeAttribute(`aria-activedescendant`))},[e]),g=(0,U.useCallback)(e=>{let t=p.current;if(t.length)switch(e.key){case`ArrowRight`:case`ArrowDown`:{e.preventDefault();let n=Math.min(c.current+1,t.length-1);m(n);break}case`ArrowLeft`:case`ArrowUp`:{e.preventDefault();let t=Math.max(c.current-1,0);m(t);break}case`Enter`:e.preventDefault(),c.current>=0&&typeof i==`function`&&i(t[c.current],e);break;case` `:e.preventDefault(),l.current=!0}},[m,i]),ee=(0,U.useCallback)(e=>{if(e.key===` `&&l.current){l.current=!1;let t=p.current;c.current>=0&&typeof i==`function`&&i(t[c.current],e)}},[i]),_=(0,U.useCallback)(e=>{if(e.target===e.currentTarget){let e=c.current>=0?c.current:0;m(e)}typeof o==`function`&&o(e)},[m,o]),v=(0,U.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||(h(),l.current=!1),typeof a==`function`&&a(e)},[h,a]),y=(0,U.useCallback)(e=>{g(e),typeof s==`function`&&s(e)},[g,s]),b=(0,U.useCallback)((e,t)=>{let n=p.current.findIndex(n=>n.datasetIndex===e&&n.pointIndex===t);n>=0&&m(n)},[m]);return t?f.length===0?{containerProps:{tabIndex:0,"aria-roledescription":`chart`},handlePointClick:void 0}:{containerProps:{tabIndex:0,role:`application`,"aria-roledescription":`chart`,onKeyDownCapture:y,onKeyUp:ee,onBlur:v,onFocus:_},handlePointClick:b}:{containerProps:{},handlePointClick:void 0}}var U;function Ie(){return(Ie=e((()=>{U=n()})))()}var W,G,Le,K;function Re(){return(Re=e((()=>{p(),i(),a(),o(),u(),m(),W=n(),E(),g(),re(),A(),L(),y(),w(),O(),k(),D(),F(),Ae(),C(),Te(),Ee(),x(),P(),I(),T(),ce(),B(),V(),Ie(),G=l(),Le={formatter:xe},K=(0,W.forwardRef)((e,t)=>{let{dataset:n,loading:i,loadingDelay:a,noLegend:o,noAnimation:l,tooltipConfig:u,onDataPointClick:p,onLegendClick:m,onClick:g,style:_,className:y,slot:b,ChartPlaceholder:ne,children:x,...re}=e,S={yAxisVisible:!1,xAxisVisible:!0,gridStroke:d.sapList_BorderColor,gridHorizontal:!0,gridVertical:!1,legendPosition:`bottom`,legendHorizontalAlign:`left`,zoomingTool:!1,resizeDebounce:250,...e.chartConfig},{referenceLine:C,referenceLineX:w}=S,{measures:T}=Ce([],e.measures,{},Le),E=we(T),[ce,D]=s(t),O=(0,W.useRef)(!1),k=Se(m),A=(0,W.useCallback)((e,t)=>{typeof g==`function`&&!O.current&&g(c(t,{payload:e?.activePayload?.[0]?.payload,activePayloads:e?.activePayload})),O.current&&=!1},[g,O.current]),he=(0,W.useCallback)((e,t,n)=>{e&&p&&(p(c(n,{value:e.node,dataKey:e.zAxis.dataKey,dataIndex:t,payload:e.payload})),O.current=!0)},[p,O.current]),ge=n?.length>30,j=T.find(({axis:e})=>e===`x`),M=T.find(({axis:e})=>e===`y`),N=T.find(({axis:e})=>e===`z`),[P,F]=ke(n?.[0]?.data,[M],S.legendPosition),I=le(D,1),xe=ae(S.margin,S.zoomingTool),{chartConfig:Te,measures:Ee,onBlur:De,onFocus:Oe,onKeyDownCapture:Ae,...L}=re,R=f(D);r(Me,K.displayName);let{containerProps:B,handlePointClick:V}=Fe({chartRef:D,enabled:!!S.accessibilityLayer,dataset:n??[],measures:T,consumerOnBlur:De,consumerOnFocus:Oe,consumerOnKeyDownCapture:Ae,onSelect:(0,W.useCallback)((e,t)=>{typeof p==`function`&&p(c(t,{value:e.raw,dataIndex:e.pointIndex,payload:e.raw}))},[p])});return(0,G.jsx)(ie,{dataset:n,loading:i,loadingDelay:a,Placeholder:ne??z,ref:ce,style:_,className:y,slot:b,resizeDebounce:S.resizeDebounce,...B,...L,children:(0,G.jsxs)(je,{onClick:A,margin:xe,className:h(typeof p==`function`?`has-click-handler`:void 0,Ne.scatterchart),children:[(0,G.jsx)(ue,{vertical:S.gridVertical,horizontal:S.gridHorizontal,stroke:S.gridStroke}),S.xAxisVisible&&(0,G.jsx)(oe,{type:`number`,name:j?.label,dataKey:j?.accessor,xAxisId:0,interval:j?.interval??(ge?`preserveStart`:0),tick:(0,G.jsx)(de,{formatter:j?.formatter}),padding:ye,height:I[0],reversed:R,label:j?.label?{value:j?.label,dy:15,position:`insideRight`}:0},typeof j?.accessor==`function`?j?.label:j?.accessor),(0,G.jsx)(se,{label:M?.label?{value:M?.label,angle:-90,position:R?`insideRight`:`insideLeft`}:null,type:`number`,name:M?.label,axisLine:S.yAxisVisible,tickLine:be,dataKey:M?.accessor,interval:0,tick:(0,G.jsx)(fe,{formatter:M?.formatter}),width:M?.label?P+10:P,orientation:R===!0?`right`:`left`},typeof M?.accessor==`function`?M?.label:M?.accessor),(0,G.jsx)(pe,{name:N?.label,dataKey:N?.accessor,range:[0,5e3]},typeof N?.accessor==`function`?N?.label:N?.accessor),n?.map((e,t)=>(0,G.jsx)(me,{className:typeof p==`function`?`has-click-handler`:void 0,onMouseDown:(e,n,r)=>{he(e,n,r),V?.(t,n)},opacity:e.opacity,data:e?.data,name:e?.label,fill:e?.color??`var(--sapChart_OrderedColor_${t%12+1})`,isAnimationActive:!l&&!S.accessibilityLayer},e?.label)),!o&&(0,G.jsx)(ee,{verticalAlign:S.legendPosition,align:S.legendHorizontalAlign,onClick:k,wrapperStyle:F,...S.legendConfig}),C&&(0,G.jsx)(v,{...C,stroke:C?.color??C?.stroke,y:C?.value??C?.y,label:C?.label}),w&&(0,G.jsx)(v,{...w,stroke:w?.color??w?.stroke,x:w?.value??w?.x,label:w?.label}),u?.active!==!1&&(0,G.jsx)(te,{cursor:_e,formatter:E,contentStyle:ve,...u}),x]})})}),K.displayName=`ScatterChart`;try{K.displayName=`ScatterChart`,K.__docgenInfo={description:`
A \`ScatterChart\` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.

Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.

__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.`,displayName:`ScatterChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,methods:[],props:{dataset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`}],description:`An array of dataset objects. Each object defines a dataset which is displayed.

**Required properties**
 - \`data\`: array of objects which contains the data.

**Optional properties**
 - \`label\`: string containing the label of the dataset which is also displayed in the legend.
 - \`color\`: any valid CSS color or CSS variable. Defaults to the \`sapChart_Ordinal\` colors.
 - \`opacity\`: number contains value of opacity of dataset

**Example of dataset:**

<code>
  <pre>
   [
     {
      label: 'America',
      opacity: 0.7,
      data: [
        {
          users: 120,
          sessions: 200,
          volume: 302
        },
        {
          users: 20,
          sessions: 230,
          volume: 392
        }
      ]
     }
   ]
  </pre>
</code>`,name:`dataset`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`},required:!1,tags:{},type:{name:`ScatterDataObject[]`}},measures:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`}],description:`An array of config objects. Each object is defining one axis in the chart.

**Required properties**
 - \`accessor\`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
    Can also be a getter.
 - \`axis\`: string containing definition of axis. Must be x, y or z data to the axis.

**Optional properties**
 - \`label\`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
 - \`formatter\`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.`,name:`measures`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/ScatterChart/index.d.ts`,name:`ScatterChartProps`},required:!0,tags:{},type:{name:`[MeasureConfig, MeasureConfig, MeasureConfig, ...MeasureConfig[]]`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:`children`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Fired when clicked anywhere in the chart.`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

This can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a \`BusyIndicator\` on top of the chart (in case the chart has already some data to display).`,name:`loading`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{default:`1000`},type:{name:`number`}},noAnimation:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noAnimation` disables all chart animations when set to `true`.",name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},syncId:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:`syncId`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`string`}},noLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:`noLegend`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onDataPointClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:`onDataPointClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<any>) => void`}},onLegendClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.`,name:`onLegendClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{param:`event`},type:{name:`(event: CustomEvent<any>) => void`}},chartConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:`chartConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`IScatterChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | ... 1 more ... | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }`}},tooltipConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).

__Note:__ It is possible to override internally used tooltip props, so please use with caution!`,name:`tooltipConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`TooltipProps<string | number | (string | number)[], string | number>`}},ChartPlaceholder:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
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
\`\`\``}}]}}},tags:{}}}catch{}})))()}var ze=t({Default:()=>q,LoadingPlaceholder:()=>X,WithAccessibilityLayer:()=>Y,WithCustomColor:()=>J,WithCustomLegendConfig:()=>Q,WithCustomTooltipConfig:()=>Z,__namedExportsOrder:()=>Ve,default:()=>Be}),Be,q,J,Y,X,Z,Q,Ve;function $(){return($=e((()=>{he(),Re(),Be={title:`ScatterChart`,component:K,argTypes:{children:{control:{disable:!0}}},tags:[`package:@ui5/webcomponents-react-charts`],args:{dataset:j,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,formatter:e=>`${e}k`,axis:`y`},{accessor:`volume`,axis:`z`}]}},q={},J={args:{dataset:ge,measures:[{accessor:`users`,label:`Users`,axis:`x`},{accessor:`sessions`,label:`Sessions`,axis:`y`},{accessor:`volume`,axis:`z`}]}},Y={args:{chartConfig:{accessibilityLayer:!0}}},X={args:{dataset:[]}},Z={args:M},Q={args:N},Ve=[`Default`,`WithCustomColor`,`WithAccessibilityLayer`,`LoadingPlaceholder`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: scatterColorDataSet,
    measures: [{
      accessor: 'users',
      label: 'Users',
      axis: 'x'
    }, {
      accessor: 'sessions',
      label: 'Sessions',
      axis: 'y'
    }, {
      accessor: 'volume',
      axis: 'z'
    }]
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      accessibilityLayer: true
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...Q.parameters?.docs?.source}}}})))()}export{J as a,$ as c,Y as i,X as n,Q as o,ze as r,Z as s,q as t};