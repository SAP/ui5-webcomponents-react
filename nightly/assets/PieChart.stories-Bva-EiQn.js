import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./PieChart-Bgmqr3nY.js";import{a as o,d as s,f as c,m as l,o as u,s as d}from"./DemoProps-D5nO5Znp.js";var f=t({Default:()=>g,HideLabels:()=>S,KeyboardNavigation:()=>x,LoadingPlaceholder:()=>v,WithActiveShape:()=>b,WithCustomColor:()=>_,WithCustomLegendConfig:()=>w,WithCustomTooltipConfig:()=>C,WithFormatter:()=>y,__namedExportsOrder:()=>T,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{p=n(),o(),i(),m=r(),h={title:`PieChart`,component:a,tags:[`package:@ui5/webcomponents-react-charts`],args:{dimension:{accessor:`name`},measure:{accessor:`users`},dataset:s}},g={},_={args:{measure:{accessor:`users`,colors:[`#f00`,`green`,`var(--sapNegativeColor)`]}}},v={args:{dataset:[]}},y={args:{measure:{accessor:`users`,formatter:e=>e>200?`over 200`:`lower`},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,p.useState)(1),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,m.jsx)(a,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},b={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){let[t,n]=(0,p.useState)(e.chartConfig.activeSegment),r=e=>{let{dataIndex:t}=e.detail;t!=null&&n(t)};return(0,p.useEffect)(()=>{n(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),(0,m.jsx)(a,{...e,chartConfig:{...e.chartConfig,activeSegment:t},onClick:r})}},x=u(a),S={args:{measure:{accessor:`users`,hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:c}},C={args:l},w={args:d},T=[`Default`,`WithCustomColor`,`LoadingPlaceholder`,`WithFormatter`,`WithActiveShape`,`KeyboardNavigation`,`HideLabels`,`WithCustomTooltipConfig`,`WithCustomLegendConfig`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`keyboardNavigationStory(PieChart)`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: legendConfig
}`,...w.parameters?.docs?.source}}}})))()}export{f as a,w as c,E as d,v as i,C as l,S as n,b as o,x as r,_ as s,g as t,y as u};