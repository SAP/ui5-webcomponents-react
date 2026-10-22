import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,r as o}from"./blocks-CZIRCK8E.js";import{b as s,f as c,t as l,u}from"./components-C8vqF8qp.js";import{a as d,c as f,d as p,f as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./LineChart.stories-hF-HHwGy.js";import{i as C,n as w,r as T,t as E}from"./LegendConfig-LePyilZv.js";function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{of:_}),`
`,(0,k.jsx)(c,{of:_,isChart:!0}),`
`,(0,k.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(o,{of:x}),`
`,(0,k.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(s,{of:x}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,k.jsx)(t.h3,{id:`with-custom-color`,children:`With Custom Color`}),`
`,(0,k.jsx)(o,{of:h}),`
`,(0,k.jsx)(t.h3,{id:`with-secondary-dimension`,children:`With Secondary Dimension`}),`
`,(0,k.jsx)(o,{of:p}),`
`,(0,k.jsx)(t.h3,{id:`with-data-labels`,children:`With Data Labels`}),`
`,(0,k.jsx)(o,{of:b}),`
`,(0,k.jsx)(t.h3,{id:`with-formatter`,children:`With Formatter`}),`
`,(0,k.jsx)(o,{of:f}),`
`,(0,k.jsx)(t.h3,{id:`loading-placeholder`,children:`Loading Placeholder`}),`
`,(0,k.jsx)(o,{of:y}),`
`,(0,k.jsx)(t.h3,{id:`with-reference-line`,children:`With Reference Line`}),`
`,(0,k.jsxs)(t.p,{children:[`You can set a reference line to any value by using the `,(0,k.jsx)(t.code,{children:`referenceLine`}),` `,(0,k.jsx)(t.code,{children:`chartConfig`}),` property. `,(0,k.jsx)(t.code,{children:`referenceLine`}),` accepts all properties described `,(0,k.jsx)(t.a,{href:`https://recharts.org/en-US/api/ReferenceLine`,rel:`nofollow`,children:`here`}),`, but it's recommended to only use `,(0,k.jsx)(t.code,{children:`label`}),`,`,(0,k.jsx)(t.code,{children:`value`}),` and `,(0,k.jsx)(t.code,{children:`color`}),` to preserve the intended design.`]}),`
`,(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-jsx`,children:`<LineChart
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
`,(0,k.jsx)(o,{of:S}),`
`,(0,k.jsx)(t.h3,{id:`with-linear-gradient`,children:`With Linear Gradient`}),`
`,(0,k.jsx)(o,{of:g}),`
`,(0,k.jsx)(t.h4,{id:`code`,children:`Code`}),`
`,(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-jsx`,children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,(0,k.jsx)(T,{of:v}),`
`,(0,k.jsx)(E,{of:d}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(u,{})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),r(),i(),l(),C(),m(),w()})))()}A();export{O as default};