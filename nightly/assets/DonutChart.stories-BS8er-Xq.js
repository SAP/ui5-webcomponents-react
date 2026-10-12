import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./PieChart-DvH0yhNE.js";import{a as o,d as s,f as c,m as l,o as u,s as d}from"./DemoProps-BM6PS3Et.js";var f,p,m;function h(){return(h=e((()=>{f=n(),i(),p=r(),m=(0,f.forwardRef)((e,t)=>{let n={legendPosition:`bottom`,paddingAngle:0,innerRadius:`50%`,...e.chartConfig};return(0,p.jsx)(a,{...e,ref:t,chartConfig:n,"data-component-name":`DonutChart`})}),m.displayName=`DonutChart`;try{m.displayName=`DonutChart`,m.__docgenInfo={description:"A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.\nThe pieces of the graph are proportional to the fraction of the whole in each category.\nA `DonutChart` is basically a `PieChart` with a hole.\n\n__Note:__ Charts are custom-built __without__ defined design specifications! They use the Fiori color palette, but functionality and especially accessibility may not meet standard app requirements.",displayName:`DonutChart`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/charts/dist/components/DonutChart/index.d.ts`,methods:[],props:{centerLabel:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`}],description:"A label to display in the center of the `PieChart`.\nIf you use this prop to display a text, we recommend to increase `chartConfig.innerRadius` to have some free\nspace for the text.",name:`centerLabel`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`},required:!1,tags:{},type:{name:`string`}},dimension:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`}],description:`A object which contains the configuration of the dimension.

**Required Properties**
- \`accessor\`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
  Can also be a getter.

**Optional Properties**
- \`formatter\`: function will be called for each data label and allows you to format it according to your needs`,name:`dimension`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`},required:!0,tags:{},type:{name:`IChartDimension`}},measure:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`}],description:"A object which contains the configuration of the measure. The object is defining one pie in the chart.\n\n**Required properties**\n- `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.\n\n**Optional properties**\n\n- `formatter`: function will be called for each data label and allows you to format it according to your needs\n- `DataLabel`: a custom component to be used for the data label\n- `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors\n- `hideDataLabel`: flag whether the data labels should be hidden in the chart for this segment. When passed a function it will be called for each data label with the corresponding chart properties.",name:`measure`,parent:{fileName:`webcomponents-react/packages/charts/dist/components/PieChart/index.d.ts`,name:`PieChartProps`},required:!0,tags:{},type:{name:`MeasureConfig`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display\na linear gradient.",name:`children`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Fired when clicked anywhere in the chart.`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[]; }>) => void`}},loading:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Flag whether the chart should display a loading indicator.

This can either be a skeleton placeholder shimmer (in case the chart has no data yet) or a \`BusyIndicator\` on top of the chart (in case the chart has already some data to display).`,name:`loading`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"Defines the delay in milliseconds, after which the `BusyIndicator` will be visible on the screen.",name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{default:`1000`},type:{name:`number`}},noAnimation:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noAnimation` disables all chart animations when set to `true`.",name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},syncId:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
of the tooltips, the startIndex and the endIndex of the zooming tool.`,name:`syncId`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`string`}},dataset:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `dataset` is an array of objects that contains all the measures and dimensions.\n\n__Note:__ The values for measure data points must be of type `number`.",name:`dataset`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`Record<string, unknown>[]`}},noLegend:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"`noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.",name:`noLegend`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},onDataPointClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:"The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.\n\nYou can use this event to trigger e.g. navigations or set filters based on the last clicked data point.",name:`onDataPointClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`(event: CustomEvent<any>) => void`}},onLegendClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`The \`onLegendClick\` event fires when the user clicks on a label of the legend.

This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.`,name:`onLegendClick`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{param:`event`},type:{name:`(event: CustomEvent<any>) => void`}},chartConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:'Defines possible configurations of the chart.\n\n**Properties available on all charts:**\n\n- `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.\n- `legendPosition`: Vertical position of the legend. Can be one of the following: `"top"`,`"middle"`, `"bottom"` (`"middle"` is not supported for: ColumnChartWithTrend, DonutChart, PieChart)\n- `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`\n- `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.\n- `accessibilityLayer`: Experimental property to improve accessibility. Not supported by all charts and configurations!\n\nPlease note that depending on the chart type, the `chartConfig` prop may accept more properties.',name:`chartConfig`,parent:{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`},required:!1,tags:{},type:{name:`IPolarChartConfig & { margin?: { right?: number; left?: number; top?: number; bottom?: number; }; legendPosition?: "top" | "bottom" | "middle"; legendHorizontalAlign?: "center" | "left" | "right"; resizeDebounce?: number; legendConfig?: Omit<...>; accessibilityLayer?: boolean; }`}},tooltipConfig:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/charts/dist/interfaces/IChartBaseProps.d.ts`,name:`IChartBaseProps`}],description:`Defines the configuration object for the internally used \`recharts\` Tooltip popover that is displayed when hovering over data points.
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
\`\`\``}}]}}},tags:{}}}catch{}})))()}var g=t({Default:()=>b,HideLabels:()=>O,KeyboardNavigation:()=>D,LoadingPlaceholder:()=>w,WithActiveShape:()=>E,WithCustomColor:()=>x,WithCustomLegendConfig:()=>A,WithCustomRadius:()=>C,WithCustomTooltipConfig:()=>k,WithFormatter:()=>T,WithPaddedAngle:()=>S,__namedExportsOrder:()=>j,default:()=>y}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{_=n(),o(),h(),v=r(),y={title:`DonutChart`,component:m,tags:[`package:@ui5/webcomponents-react-charts`],argTypes:{children:{control:{disable:!0}}},args:{dataset:s,dimension:{accessor:`name`},measure:{accessor:`users`}}},b={},x={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`,`black`,`yellow`,`pink`]}}},S={args:{chartConfig:{paddingAngle:5}}},C={args:{chartConfig:{innerRadius:`20%`,outerRadius:`90%`}}},w={args:{dataset:[]}},T={args:{dimension:{accessor:`name`,formatter:e=>e.slice(0,3)},measure:{accessor:`users`,formatter:e=>`${e/10}`}}},E={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,_.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,_.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,v.jsx)(m,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},D=u(m),O={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:c}},k={args:l},A={args:d},j=[`Default`,`WithCustomColor`,`WithPaddedAngle`,`WithCustomRadius`,`LoadingPlaceholder`,`WithFormatter`,`WithActiveShape`,`KeyboardNavigation`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(args.chartConfig.activeSegment);
    const handleChartClick = e => {
      const {
        dataIndex
      } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };
    useEffect(() => {
      setActiveSegment(args.chartConfig.activeSegment);
    }, [args.chartConfig.activeSegment]);
    return <DonutChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`keyboardNavigationStory(DonutChart)`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...A.parameters?.docs?.source}}}})))()}export{w as a,A as c,T as d,S as f,D as i,C as l,g as n,E as o,M as p,O as r,x as s,b as t,k as u};