import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Icon-8auMEs_f.js";import{n as a,t as o}from"./List-D99jvvtL.js";import{n as s,t as c}from"./ListItemStandard-BLH1GaEa.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./NumericSideIndicator-Ps-krt0d.js";import{n as _,t as v}from"./Card-DBjtMKsP.js";import{n as y,t as b}from"./CardHeader-uZmM8auJ.js";import{n as x,t as S}from"./person-placeholder-ChrYKXFO.js";import{n as C,t as w}from"./LineChart-uzSDTatY.js";var T=t({Default:()=>O,WithAnalyticalCardHeader:()=>A,__namedExportsOrder:()=>j,default:()=>D}),E,D,O,k,A,j;function M(){return(M=e((()=>{S(),C(),d(),f(),u(),p(),y(),r(),a(),s(),_(),E=n(),D={title:`Data Display / Card`,component:v,argTypes:{header:{control:{disable:!0}},children:{control:{disable:!0}}},args:{style:{width:`300px`},header:(0,E.jsx)(b,{titleText:`TeamSpace`,subtitleText:`Direct Reports`,additionalText:`3 of 5`,avatar:(0,E.jsx)(i,{name:x})})},tags:[`package:@ui5/webcomponents`]},O={render:e=>(0,E.jsx)(v,{...e,children:(0,E.jsxs)(o,{children:[(0,E.jsx)(c,{description:`Software Architect`,text:`Richard Wilson`}),(0,E.jsx)(c,{description:`Visual Designer`,text:`Elena Petrova`}),(0,E.jsx)(c,{description:`Quality Specialist`,text:`John Miller`})]})})},k=[{name:`January`,users:76},{name:`February`,users:230},{name:`March`,users:240},{name:`April`,users:280},{name:`May`,users:100}],A={render:()=>(0,E.jsx)(v,{header:(0,E.jsxs)(m,{titleText:`Project Cloud Transformation`,subtitleText:`Revenue`,unitOfMeasurement:`EUR`,trend:h.Down,value:`65.34`,state:l.Error,scale:`K`,description:`Q1, 2018`,children:[(0,E.jsx)(g,{titleText:`Target`,number:`100`,unit:`k`}),(0,E.jsx)(g,{titleText:`Deviation`,number:`34.7`,unit:`%`,state:l.Critical})]}),children:(0,E.jsx)(w,{className:`chromatic-ignore`,noLegend:!0,dimensions:[{accessor:`name`}],measures:[{accessor:`users`,formatter:e=>`${e}k`}],dataset:k})})},j=[`Default`,`WithAnalyticalCardHeader`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
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
}`,...A.parameters?.docs?.source}}}})))()}export{M as i,O as n,A as r,T as t};