import{j as e}from"./iframe-DOJWwQPM.js";import{L as i}from"./index-BXDsti4B.js";import{C as c}from"./index-IwfXz8bd.js";import{V as a,D as m,A as s,N as t}from"./index-DY1jHRl3.js";const l=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],d={title:"Data Display / AnalyticalCardHeader",component:s,argTypes:{children:{control:{disable:!0}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{titleText:"Target",number:"100",unit:"k"}),e.jsx(t,{titleText:"Deviation",number:"34.7",unit:"%",state:a.Critical})]}),titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:m.Down,value:"65.34",state:a.Error,scale:"K",description:"Q1, 2018"},tags:["package:@ui5/webcomponents-react"]},r={render(n){return e.jsx(c,{header:e.jsx(s,{...n}),children:e.jsx(i,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:o=>`${o}k`}],dataset:l})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render(props) {
    return <Card header={<AnalyticalCardHeader {...props} />}>
        <LineChart className="chromatic-ignore" noLegend dimensions={[{
        accessor: 'name'
      }]} measures={[{
        accessor: 'users',
        formatter: val => \`\${val}k\`
      }]} dataset={simpleDataSet} />
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};const u=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{g as C,r as D};
