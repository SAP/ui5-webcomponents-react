import{j as e,I as d}from"./iframe-BaUS3k1G.js";import{p as l}from"./person-placeholder-CWT06Lo-.js";import{L as m}from"./LineChart-7SZdrauh.js";import{A as u,V as n,D as p,N as o}from"./index-LCHVyHDr.js";import{C as x}from"./index-C3F6-2iN.js";import{L as C}from"./index-CmvusNlc.js";import{L as a}from"./index-DNH4Ez_N.js";import{C as s}from"./index-Cf1dwhov.js";const h={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(x,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(d,{name:l})})},tags:["package:@ui5/webcomponents"]},r={render:i=>e.jsx(s,{...i,children:e.jsxs(C,{children:[e.jsx(a,{description:"Software Architect",text:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",text:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",text:"John Miller"})]})})},f=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:i=>e.jsx(s,{header:e.jsxs(u,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:p.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(m,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:c=>`${c}k`}],dataset:f})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Default","WithAnalyticalCardHeader"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{I as C,r as D,t as W};
