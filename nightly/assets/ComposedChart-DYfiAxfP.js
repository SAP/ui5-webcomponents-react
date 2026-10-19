import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-BPOhBw-k.js";import{b as s,f as c,t as l,u}from"./components-Cws1YkAX.js";import{a as d,c as f,d as p,f as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w}from"./ComposedChart.stories-DQy-u5-n.js";import{i as T,n as E,r as D,t as O}from"./LegendConfig-VsPzWWDd.js";import{i as k,n as A,r as j,t as M}from"./CustomTooltipTotal-BJBb3KM2.js";function N(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{of:C}),`
`,(0,F.jsx)(c,{of:C,isChart:!0}),`
`,(0,F.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,F.jsx)(o,{of:v}),`
`,(0,F.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,F.jsx)(s,{of:v}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,F.jsx)(t.h3,{id:`with-custom-color`,children:`With Custom Color`}),`
`,(0,F.jsx)(o,{of:h}),`
`,(0,F.jsx)(t.h3,{id:`with-data-labels`,children:`With Data Labels`}),`
`,(0,F.jsx)(o,{of:f}),`
`,(0,F.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,F.jsx)(o,{of:w}),`
`,(0,F.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,F.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,F.jsx)(t.code,{children:`referenceLine`}),` `,(0,F.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,F.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,F.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,F.jsx)(t.code,{children:`label`}),`,`,(0,F.jsx)(t.code,{children:`value`}),` and `,(0,F.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-jsx`,children:`<ComposedChart
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
`,(0,F.jsx)(o,{of:m}),`
`,(0,F.jsx)(t.h3,{id:`with-highlighted-measures`,children:`With Highlighted Measures`}),`
`,(0,F.jsx)(o,{of:p}),`
`,(0,F.jsx)(t.h3,{id:`with-formatted-secondary-axis`,children:`With Formatted Secondary Axis`}),`
`,(0,F.jsx)(o,{of:g}),`
`,(0,F.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,F.jsx)(o,{of:x}),`
`,(0,F.jsx)(j,{of:b,description:(0,F.jsxs)(F.Fragment,{children:[`You can display a total label at the top of each stacked bar group by setting `,(0,F.jsx)(t.code,{children:`chartConfig.showStackAggregateTotals`}),` to `,(0,F.jsx)(t.code,{children:`true`}),`. The tooltip includes the total automatically when all measures are stacked bars within a single stack group. If non-bar measures (e.g. lines or areas) are present, only the bar labels are shown.`]})}),`
`,(0,F.jsx)(M,{of:S,description:(0,F.jsxs)(F.Fragment,{children:[`When non-bar measures (e.g. lines or areas) are present alongside stacked bars, the built-in tooltip total is not available. You can provide a custom tooltip via the `,(0,F.jsx)(t.code,{children:`tooltipConfig.content`}),` prop to display a total for the stacked bar measures.`]})}),`
`,(0,F.jsx)(D,{of:y}),`
`,(0,F.jsx)(O,{of:d}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(`br`,{}),`
`,(0,F.jsx)(u,{})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),l(),i(),T(),E(),k(),A(),_()})))()}I();export{P as default};