import{j as e}from"./iframe-DvixYE7k.js";import{useMDXComponents as a}from"./index-DvcP8w-F.js";import{M as d,C as r}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import{C as c}from"./ControlsWithNote-s_60twtr.js";import{D as h}from"./DocsHeader-BkkmtBJn.js";import{F as m}from"./CommandsAndQueries-BP59pkyc.js";import{M as l,a as p}from"./LegendConfig-ByEOLJig.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CmTuolJW.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./index-BiNCRTue.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./copy-BSDmbcVi.js";import"./copy-CVzsP6l9.js";import"./GitHub-Mark-1hS7OttQ.js";import"./TableOfContent-gAqVWuC4.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./DemoProps-B2p3Wk6C.js";import"./LineChart-D9tZoyt1.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-CFQfwpLx.js";import"./ChartContainer-CCQp-9zw.js";import"./index-TXUBpY7W.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-XtR6frXz.js";import"./staticProps-83LgWYgO.js";import"./ChartDataLabel-BKbQOY35.js";import"./useLongestYAxisLabel-B5QSD8DR.js";import"./react-content-loader.es-LwLBFaCw.js";import"./Line-DPY4s2fn.js";import"./useIsRTL-fdT0zKkd.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
