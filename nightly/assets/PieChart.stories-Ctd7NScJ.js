import{r as C,j as p}from"./iframe-BVTjwwa8.js";import{s as f,d as S,t as v,l as x}from"./DemoProps-97zvyYjk.js";import{P as h}from"./index-CT0UjecB.js";const b={title:"PieChart",component:h,tags:["package:@ui5/webcomponents-react-charts"],args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:f},argTypes:{dataset:{control:{disable:!0}}}},a={},r={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},n={args:{dataset:[]}},s={args:{measure:{accessor:"users",formatter:e=>e>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){const[l,m]=C.useState(1),d=u=>{const{dataIndex:t}=u.detail;t!=null&&m(t)};return p.jsx(h,{...e,chartConfig:{...e.chartConfig,activeSegment:l},onClick:d})}},o={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){const[l,m]=C.useState(e.chartConfig.activeSegment),d=u=>{const{dataIndex:t}=u.detail;t!=null&&m(t)};return C.useEffect(()=>{m(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),p.jsx(h,{...e,chartConfig:{...e.chartConfig,activeSegment:l},onClick:d})}},c={args:{measure:{accessor:"users",hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:S}},i={args:v},g={args:x};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      formatter: d => d > 200 ? 'over 200' : 'lower'
    },
    chartConfig: {
      activeSegment: 1,
      showActiveSegmentDataLabel: true
    }
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(1);
    const handleChartClick = e => {
      const {
        dataIndex
      } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };
    return <PieChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    return <PieChart {...args} chartConfig={{
      ...args.chartConfig,
      activeSegment
    }} onClick={handleChartClick} />;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...g.parameters?.docs?.source}}};const A=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","WithActiveShape","HideLabels","WithCustomTooltipConfig","WithCustomLegendConfig"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,HideLabels:c,LoadingPlaceholder:n,WithActiveShape:o,WithCustomColor:r,WithCustomLegendConfig:g,WithCustomTooltipConfig:i,WithFormatter:s,__namedExportsOrder:A,default:b},Symbol.toStringTag,{value:"Module"}));export{k as C,a as D,c as H,n as L,r as W,s as a,i as b,g as c};
