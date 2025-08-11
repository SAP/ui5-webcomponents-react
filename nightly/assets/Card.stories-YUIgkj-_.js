import{j as e,I as C}from"./iframe-C5HYk_w9.js";import{p as h}from"./person-placeholder-D6KPeVYz.js";import{L as f}from"./LineChart-gQEifT9L.js";import{A as g,V as n,D as S,N as o}from"./index-p8Gt1ZSH.js";import{C as j}from"./index-DSpr5FZx.js";import{L as T}from"./index-DH8PPPSy.js";import{L as a}from"./index-BNbfz9XF.js";import{C as s}from"./index-CFd9-fPm.js";const D={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(j,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(C,{name:h})})},tags:["package:@ui5/webcomponents"]},r={render:i=>e.jsx(s,{...i,children:e.jsxs(T,{children:[e.jsx(a,{description:"Software Architect",text:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",text:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",text:"John Miller"})]})})},y=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:i=>e.jsx(s,{header:e.jsxs(g,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:S.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(f,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:x=>`${x}k`}],dataset:y})})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Card header={<AnalyticalCardHeader titleText="Project Cloud Transformation" subtitleText="Revenue" unitOfMeasurement="EUR" trend={DeviationIndicator.Down} value="65.34" state={ValueColor.Error} scale="K" description="Q1, 2018">
            <NumericSideIndicator titleText="Target" number="100" unit="k" />
            <NumericSideIndicator titleText="Deviation" number="34.7" unit="%" state={ValueColor.Critical} />
          </AnalyticalCardHeader>}>
        <LineChart className="chromatic-ignore" noLegend dimensions={[{
        accessor: 'name'
      }]} measures={[{
        accessor: 'users',
        formatter: val => \`\${val}k\`
      }]} dataset={simpleDataSet} />
      </Card>;
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const b=["Default","WithAnalyticalCardHeader"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:b,default:D},Symbol.toStringTag,{value:"Module"}));export{H as C,r as D,t as W};
