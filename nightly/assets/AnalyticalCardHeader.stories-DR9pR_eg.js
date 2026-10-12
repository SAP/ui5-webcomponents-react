import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./NumericSideIndicator-wwfv-D9f.js";import{n as d,t as f}from"./Card-BVukVFa9.js";import{n as p,t as m}from"./LineChart-CrGt1yIC.js";var h=t({Default:()=>y,__namedExportsOrder:()=>b,default:()=>v}),g,_,v,y,b;function x(){return(x=e((()=>{p(),i(),s(),d(),o(),a(),g=n(),_=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],v={title:`Data Display / AnalyticalCardHeader`,component:c,argTypes:{children:{control:{disable:!0}}},args:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{titleText:`Target`,number:`100`,unit:`k`}),(0,g.jsx)(u,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:r.Critical})]}),titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:l.Down,value:`65.34`,state:r.Error,scale:`K`,description:`Q1, 2018`},tags:[`package:@ui5/webcomponents-react`]},y={render(e){return(0,g.jsx)(f,{header:(0,g.jsx)(c,{...e}),children:(0,g.jsx)(m,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:_})})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}export{y as n,x as r,h as t};