import{j as e}from"./jsx-runtime-d079401a.js";import{p as h}from"./person-placeholder-7488e84f.js";import{L as C}from"./LineChart-2a031c75.js";import{A as f,D as S,V as n,N as o}from"./index-3cd1ae87.js";import{C as g}from"./index-60c0dd2c.js";import{I as j}from"./index-923c912b.js";import{L as D}from"./index-ac12f6ad.js";import{S as a}from"./index-f136978e.js";import{C as s}from"./index-95809ba7.js";const T={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(g,{titleText:"TeamSpace",subtitleText:"Direct Reports",status:"3 of 5",avatar:e.jsx(j,{name:h})})}},r={render:i=>e.jsx(s,{...i,children:e.jsxs(D,{children:[e.jsx(a,{description:"Software Architect",children:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",children:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",children:"John Miller"})]})})},L=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:i=>e.jsx(s,{header:e.jsxs(f,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:S.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(C,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:x=>`${x}k`}],dataset:L})})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <StandardListItem description="Software Architect">Richard Wilson</StandardListItem>
          <StandardListItem description="Visual Designer">Elena Petrova</StandardListItem>
          <StandardListItem description="Quality Specialist">John Miller</StandardListItem>
        </List>
      </Card>;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const y=["Default","WithAnalyticalCardHeader"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:y,default:T},Symbol.toStringTag,{value:"Module"}));export{V as C,r as D,t as W};
//# sourceMappingURL=Card.stories-44f9ead7.js.map
