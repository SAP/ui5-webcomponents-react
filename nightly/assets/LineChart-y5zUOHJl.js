import{j as e}from"./iframe-BohNpW-0.js";import{useMDXComponents as a}from"./index-CNs9TfzQ.js";import{M as d,C as r}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import{C as c}from"./ControlsWithNote-QGl7DIf2.js";import{D as h}from"./DocsHeader-CokbDgUt.js";import{F as m}from"./CommandsAndQueries-dvLT1dsP.js";import{M as l,a as p}from"./LegendConfig-3lywA8Xg.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-BQ6Cis0g.js";import"./preload-helper-D9Z9MdNV.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./index-ByPlsUCp.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./copy-CU7ZgL8Y.js";import"./copy-CQ_htW6-.js";import"./GitHub-Mark-C90UNHWU.js";import"./TableOfContent-Dqpo1t13.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./DemoProps-CHnTGdYX.js";import"./LineChart-f-CI3oHl.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-KGwADwQj.js";import"./ChartContainer-CahGtjSY.js";import"./index-CjyJ5jjJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B0ZPw7r7.js";import"./staticProps-CiQX623A.js";import"./ChartDataLabel-BDMvREhC.js";import"./useLongestYAxisLabel-D5hxKjEW.js";import"./react-content-loader.es-DhsHSqgy.js";import"./Line-CSs2kKzr.js";import"./useIsRTL-D6FosoIx.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
