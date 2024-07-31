import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./withWebComponent-Bw_l6Ewh.js";import"./person-placeholder-B-GaAyfq.js";import{L as h}from"./LineChart-B_nnUVIA.js";import{A as C,D as f,V as i,N as o}from"./index-CmRg6VJC.js";import{C as S}from"./index-CicW97oq.js";import{I as g}from"./index-DZ_C2PQH.js";import{L as j}from"./index-BUgDSziE.js";import{L as a}from"./index-CXt02CWw.js";import{C as s}from"./index-C_2FGMDq.js";const T="person-placeholder",D={title:"Data Display / Card",component:s,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:"300px"},header:e.jsx(S,{titleText:"TeamSpace",subtitleText:"Direct Reports",additionalText:"3 of 5",avatar:e.jsx(g,{name:T})})},tags:["package:@ui5/webcomponents"]},r={render:n=>e.jsx(s,{...n,children:e.jsxs(j,{children:[e.jsx(a,{description:"Software Architect",children:"Richard Wilson"}),e.jsx(a,{description:"Visual Designer",children:"Elena Petrova"}),e.jsx(a,{description:"Quality Specialist",children:"John Miller"})]})})},L=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],t={render:n=>e.jsx(s,{header:e.jsxs(C,{titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:f.Down,value:"65.34",state:i.Error,scale:"K",description:"Q1, 2018",children:[e.jsx(o,{titleText:"Target",number:"100",unit:"k"}),e.jsx(o,{titleText:"Deviation",number:"34.7",unit:"%",state:i.Critical})]}),children:e.jsx(h,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:x=>`${x}k`}],dataset:L})})};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const y=["Default","WithAnalyticalCardHeader"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithAnalyticalCardHeader:t,__namedExportsOrder:y,default:D},Symbol.toStringTag,{value:"Module"}));export{V as C,r as D,t as W};
