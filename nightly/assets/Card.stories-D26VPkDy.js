import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{p as C}from"./person-placeholder-NQOViC8a.js";import{L as f}from"./LineChart-CtjKb9k8.js";import{A as h,V as n,D as g,N as o}from"./index-URUintLn.js";import{C as S}from"./index-B61k-92l.js";import{I as j}from"./index-cHSlkY-E.js";import{L as T}from"./index-CMVptBWg.js";import{L as a}from"./index-BnZNqcvz.js";import{C as s}from"./index-B-i0fidp.js";const D={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(S,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(j,{name:C})})},tags:["package:@ui5/webcomponents"]},r={render:i=>e.jsx(s,{...i,children:e.jsxs(T,{children:[e.jsx(a,{description:"Software Architect",text:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",text:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",text:"John Miller"})]})})},y=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:i=>e.jsx(s,{header:e.jsxs(h,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:g.Down,value:"65.34",state:n.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:n.Critical})]}),children:e.jsx(f,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:x=>`${x}k`}],dataset:y})})};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const b=["Default","WithAnalyticalCardHeader"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:b,default:D},Symbol.toStringTag,{value:"Module"}));export{N as C,r as D,t as W};
