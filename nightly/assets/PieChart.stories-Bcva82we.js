import{j as z}from"./jsx-runtime-BjG_zV1W.js";import{r as C}from"./index-B7gF9TUu.js";import{s as M,d as R,t as q,l as B}from"./DemoProps-DuFaqo3J.js";import{P as h}from"./PieChart-DNMp24vG.js";const G={title:"PieChart",component:h,args:{dimension:{accessor:"name"},measure:{accessor:"users"},dataset:M},argTypes:{dataset:{control:{disable:!0}}}},a={},r={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)"]}}},n={args:{dataset:[]}},s={args:{measure:{accessor:"users",formatter:e=>e>200?"over 200":"lower"},chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){const[l,g]=C.useState(1),d=u=>{const{dataIndex:t}=u.detail;t!=null&&g(t)};return z.jsx(h,{...e,chartConfig:{...e.chartConfig,activeSegment:l},onClick:d})}},o={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){const[l,g]=C.useState(e.chartConfig.activeSegment),d=u=>{const{dataIndex:t}=u.detail;t!=null&&g(t)};return C.useEffect(()=>{g(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),z.jsx(h,{...e,chartConfig:{...e.chartConfig,activeSegment:l},onClick:d})}},c={args:{measure:{accessor:"users",hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:R}},i={args:q},m={args:B};var p,f,S;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,x,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)']
    }
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var A,L,W;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var D,k,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var P,j,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var _,E,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,H,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var F,N,V;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: legendConfig
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const J=["Default","WithCustomColor","LoadingPlaceholder","WithFormatter","WithActiveShape","HideLabels","WithCustomTooltipConfig","WithCustomLegendConfig"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,HideLabels:c,LoadingPlaceholder:n,WithActiveShape:o,WithCustomColor:r,WithCustomLegendConfig:m,WithCustomTooltipConfig:i,WithFormatter:s,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as C,a as D,c as H,n as L,r as W,s as a,i as b,m as c};
