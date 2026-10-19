import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-BL36d_RL.js";import{b as s,f as c,t as l,u}from"./components-BxKQlBaO.js";import{a as d,c as f,d as p,f as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T}from"./ColumnChart.stories-D0UadVaC.js";import{i as E,n as D,r as O,t as k}from"./LegendConfig-DzwD6Hl0.js";import{n as A,t as j}from"./NormalizedStackedChart-C_DygaSK.js";import{i as M,n as N,r as P,t as F}from"./CustomTooltipTotal-B4_CbTs1.js";function I(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a,{of:w}),`
`,(0,R.jsx)(c,{of:w,isChart:!0}),`
`,(0,R.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,R.jsx)(o,{of:y}),`
`,(0,R.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,R.jsx)(s,{of:y}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,R.jsx)(t.h3,{id:`with-custom-color`,children:`With custom color`}),`
`,(0,R.jsx)(o,{of:g}),`
`,(0,R.jsx)(t.h3,{id:`with-secondary-dimension`,children:`With Secondary Dimension`}),`
`,(0,R.jsx)(o,{of:m}),`
`,(0,R.jsx)(t.h3,{id:`with-stacks`,children:`With Stacks`}),`
`,(0,R.jsx)(o,{of:v}),`
`,(0,R.jsx)(j,{of:T}),`
`,(0,R.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,R.jsx)(o,{of:f}),`
`,(0,R.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,R.jsx)(o,{of:S}),`
`,(0,R.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,R.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,R.jsx)(t.code,{children:`referenceLine`}),` `,(0,R.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,R.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,R.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,R.jsx)(t.code,{children:`label`}),`,`,(0,R.jsx)(t.code,{children:`value`}),` and `,(0,R.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-jsx`,children:`<ColumnChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,(0,R.jsx)(o,{of:p}),`
`,(0,R.jsx)(t.h3,{id:`with-highlighted-measures`,children:`With Highlighted Measures`}),`
`,(0,R.jsx)(o,{of:_}),`
`,(0,R.jsx)(P,{of:x,description:(0,R.jsxs)(R.Fragment,{children:[`You can display a total label at the top of each stacked column group by setting `,(0,R.jsx)(t.code,{children:`chartConfig.showStackAggregateTotals`}),` to `,(0,R.jsx)(t.code,{children:`true`}),`. The tooltip includes the total automatically when only a single column per dimension is present.`]})}),`
`,(0,R.jsx)(F,{of:C,description:(0,R.jsxs)(R.Fragment,{children:[`When multiple columns per dimension are present (e.g. stacked + standalone), the built-in tooltip total is not available. You can provide a custom tooltip via the `,(0,R.jsx)(t.code,{children:`tooltipConfig.content`}),` prop to display a total for specific measures.`]})}),`
`,(0,R.jsx)(O,{of:b}),`
`,(0,R.jsx)(k,{of:d}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(`br`,{}),`
`,(0,R.jsx)(u,{})]})}function L(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,R.jsx)(t,{...e,children:(0,R.jsx)(I,{...e})}):I(e)}var R;function z(){return(z=e((()=>{R=t(),r(),l(),i(),E(),D(),A(),M(),N(),h()})))()}z();export{L as default};