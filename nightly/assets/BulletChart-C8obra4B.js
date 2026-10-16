import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-BOKIvUzN.js";import{_ as i,d as a,r as o}from"./blocks-DXeKFkas.js";import{b as s,f as c,t as l,u}from"./components-B-xCMNi4.js";import{a as d,c as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./BulletChart.stories-bbChjvzw.js";import{i as y,n as b,r as x,t as S}from"./LegendConfig-DBliuTN0.js";function C(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{of:v}),`
`,(0,T.jsx)(c,{of:v,isChart:!0}),`
`,(0,T.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,T.jsx)(o,{of:m}),`
`,(0,T.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`usage-notes`,children:`Usage Notes`}),`
`,(0,T.jsxs)(t.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,(0,T.jsx)(t.code,{children:`measures`}),` array:`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-jsx`,children:`<BulletChart
  data={
    [
      /* data */
    ]
  }
  dimensions={
    [
      /* dimensions */
    ]
  }
  measures={[
    {
      accessor: 'actuals',
      label: 'Actual Revenue',
      type: 'primary' // this will be the primary bar
    },
    {
      accessor: 'target',
      label: 'Planned Target Revenue',
      type: 'comparison' // this will be the bullet line
    }
  ]}
/>
`})}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,T.jsx)(t.h3,{id:`with-custom-size`,children:`With Custom Size`}),`
`,(0,T.jsx)(o,{of:d}),`
`,(0,T.jsx)(t.h3,{id:`with-highlighted-measures`,children:`With Highlighted Measures`}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(x,{of:h}),`
`,(0,T.jsx)(S,{of:p}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(`br`,{}),`
`,(0,T.jsx)(u,{})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=t(),r(),l(),i(),y(),b(),f()})))()}E();export{w as default};