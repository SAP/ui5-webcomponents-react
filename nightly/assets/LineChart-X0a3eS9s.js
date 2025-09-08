import{j as e}from"./iframe-L-onm66G.js";import{useMDXComponents as a}from"./index-B-8X1idt.js";import{M as d,C as r}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import{C as c}from"./ControlsWithNote-D5F52cI6.js";import{D as h}from"./DocsHeader-Bj35IjP-.js";import{F as m}from"./CommandsAndQueries-CjMnaUpZ.js";import{M as l,a as p}from"./LegendConfig-B6Tggk6k.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-DmooqkLj.js";import"./preload-helper-D9Z9MdNV.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./index-8n5QiMPz.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./copy-BLNNZART.js";import"./copy-CyGTlTXm.js";import"./GitHub-Mark-BiOcy1h9.js";import"./TableOfContent-Cd4BpqKW.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./DemoProps-DCBuFVoA.js";import"./index-ChKTnUvt.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-C76SfQ48.js";import"./ChartContainer-ByCWrkus.js";import"./index-DktfzuQk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BUo4Sa4H.js";import"./staticProps-CR9njzaR.js";import"./ChartDataLabel-BGrOJu3x.js";import"./useLongestYAxisLabel-XHvDca1Q.js";import"./react-content-loader.es-BUUBWALW.js";import"./Line-Ce4ArOsc.js";import"./useIsRTL-DCVW4Rtb.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
