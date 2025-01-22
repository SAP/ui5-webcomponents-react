import{j as G}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-D23YZj_x.js";import{s as Q,d as U,t as X,l as Y}from"./DemoProps-CM7ve7wo.js";import{P as Z}from"./PieChart-vJMCZ11h.js";const p=l.forwardRef((e,u)=>{const g={legendPosition:"bottom",paddingAngle:0,innerRadius:"50%",...e.chartConfig};return G.jsx(Z,{...e,ref:u,chartConfig:g,"data-component-name":"DonutChart"})});p.displayName="DonutChart";const ee={title:"DonutChart",component:p,argTypes:{dataset:{control:{disable:!0}},children:{control:{disable:!0}}},args:{dataset:Q,dimension:{accessor:"name"},measure:{accessor:"users"}}},a={},r={args:{measure:{accessor:"users",colors:["#f00","green","var(--sapNegativeColor)","black","yellow","pink"]}}},t={args:{chartConfig:{paddingAngle:5}}},s={args:{chartConfig:{innerRadius:"20%",outerRadius:"90%"}}},n={args:{dataset:[]}},o={args:{dimension:{accessor:"name",formatter:e=>e.slice(0,3)},measure:{accessor:"users",formatter:e=>`${e/10}`}}},c={args:{measure:{accessor:"users",hideDataLabel:e=>{if(e.percent<.01)return!0}},dataset:U}},i={args:X},m={args:Y},d={args:{chartConfig:{activeSegment:1,showActiveSegmentDataLabel:!0}},render(e){const[u,g]=l.useState(e.chartConfig.activeSegment),J=K=>{const{dataIndex:h}=K.detail;h!=null&&g(h)};return l.useEffect(()=>{g(e.chartConfig.activeSegment)},[e.chartConfig.activeSegment]),G.jsx(p,{...e,chartConfig:{...e.chartConfig,activeSegment:u},onClick:J})}};var C,f,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,W,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink']
    }
  }
}`,...(b=(W=r.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var D,A,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      paddingAngle: 5
    }
  }
}`,...(x=(A=t.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var L,k,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%'
    }
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var P,j,y;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    dataset: []
  }
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var _,w,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,T,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var N,O,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: tooltipConfig
}`,...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var V,$,z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: legendConfig
}`,...(z=($=m.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var M,q,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ae=["Default","WithCustomColor","WithPaddedAngle","WithCustomRadius","LoadingPlaceholder","WithFormatter","HideLabels","WithCustomTooltipConfig","WithCustomLegendConfig","WithActiveShape"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:a,HideLabels:c,LoadingPlaceholder:n,WithActiveShape:d,WithCustomColor:r,WithCustomLegendConfig:m,WithCustomRadius:s,WithCustomTooltipConfig:i,WithFormatter:o,WithPaddedAngle:t,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{oe as C,a as D,c as H,n as L,r as W,t as a,s as b,o as c,d,i as e,m as f};
