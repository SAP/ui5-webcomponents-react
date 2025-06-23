import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./LineChart-Y-qBBJxA.js";import{C as d}from"./index-DPnISxA_.js";import{V as a,D as u,A as i,N as t}from"./index-vdgqtEsL.js";const p=[{name:"January",users:76},{name:"February",users:230},{name:"March",users:240},{name:"April",users:280},{name:"May",users:100}],x={title:"Data Display / AnalyticalCardHeader",component:i,argTypes:{children:{control:{disable:!0}}},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{titleText:"Target",number:"100",unit:"k"}),e.jsx(t,{titleText:"Deviation",number:"34.7",unit:"%",state:a.Critical})]}),titleText:"Project Cloud Transformation",subtitleText:"Revenue",unitOfMeasurement:"EUR",trend:u.Down,value:"65.34",state:a.Error,scale:"K",description:"Q1, 2018"}},r={render(c){return e.jsx(d,{header:e.jsx(i,{...c}),children:e.jsx(l,{className:"chromatic-ignore",noLegend:!0,dimensions:[{accessor:"name"}],measures:[{accessor:"users",formatter:m=>`${m}k`}],dataset:p})})}};var s,n,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const C=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{D as C,r as D};
