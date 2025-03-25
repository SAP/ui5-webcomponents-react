import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{p as h}from"./person-placeholder-C2JyHdMq.js";import{L as C}from"./LineChart-DN2Qo0IJ.js";import{A as f,V as n,D as S,N as o}from"./index-CzuSnlv6.js";import{C as g}from"./index-D-QlfT-1.js";import{I as j}from"./index-Blw57xH1.js";import{L as T}from"./index-C9PWDxiW.js";import{L as a}from"./index-BVnFB9i2.js";import{C as s}from"./index-sxpf8z2p.js";const D={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(g,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(j,{name:h})})},tags:["package:@ui5/webcomponents"]},r={render:i=>e.jsx(s,{...i,children:e.jsxs(T,{children:[e.jsx(a,{description:"Software Architect",children:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",children:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",children:"John Miller"})]})})},L=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:i=>e.jsx(s,{header:e.jsxs(f,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:S.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(C,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:x=>`${x}k`}],dataset:L})})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect">Richard Wilson</ListItemStandard>
          <ListItemStandard description="Visual Designer">Elena Petrova</ListItemStandard>
          <ListItemStandard description="Quality Specialist">John Miller</ListItemStandard>
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const y=["Default","WithAnalyticalCardHeader"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:y,default:D},Symbol.toStringTag,{value:"Module"}));export{N as C,r as D,t as W};
