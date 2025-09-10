import{j as e}from"./iframe-W4A4TPxI.js";import{useMDXComponents as a}from"./index-DR9mRC8k.js";import{M as d,C as r}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import{C as c}from"./ControlsWithNote-DJvfCr-6.js";import{D as h}from"./DocsHeader-BspJ71bI.js";import{F as m}from"./CommandsAndQueries-CqKi30YT.js";import{M as l,a as p}from"./LegendConfig-BxvcSyj2.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-DZovIXEz.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./index-DKRTY3p_.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./copy-CNHqT_CZ.js";import"./copy-ieRXWhTl.js";import"./GitHub-Mark-D8W3wBw0.js";import"./TableOfContent-C_C61g46.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./DemoProps-ClZyO4MZ.js";import"./index-DD6aCW3C.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-fBNlA-bW.js";import"./ChartContainer-BLS71XOL.js";import"./index-DcYUW_FQ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-W-8d44rr.js";import"./staticProps-B6jKSygB.js";import"./ChartDataLabel-Dbp5W_nC.js";import"./useLongestYAxisLabel-DOYYi6JS.js";import"./react-content-loader.es-CkCYy2ML.js";import"./Line-B0I4M9v8.js";import"./useIsRTL-B3zfNNQF.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(h,{of:i,isChart:!0}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(n.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h3,{id:"with-formatter",children:"With Formatter"}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,e.jsxs(n.p,{children:["You can set a reference line to any value by using the ",e.jsx(n.code,{children:"referenceLine"})," ",e.jsx(n.code,{children:"chartConfig"})," property. ",e.jsx(n.code,{children:"referenceLine"})," accepts all properties described ",e.jsx(n.a,{href:"https://recharts.org/en-US/api/ReferenceLine",rel:"nofollow",children:"here"}),", but it's recommended to only use ",e.jsx(n.code,{children:"label"}),",",e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"color"})," to preserve the intended design."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<LineChart
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
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,e.jsx(r,{of:L}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,e.jsx(l,{of:W}),`
`,e.jsx(p,{of:b}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(m,{})]})}function le(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{le as default};
