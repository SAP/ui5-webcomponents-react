import{j as e}from"./iframe-DXDeCCXH.js";import{useMDXComponents as a}from"./index-BVVJ9Xmn.js";import{M as d,C as r}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import{C as c}from"./ControlsWithNote-hJ8WC7xW.js";import{D as h}from"./DocsHeader-1wDTrNBL.js";import{F as m}from"./CommandsAndQueries-Dq5DBaAz.js";import{M as l,a as p}from"./LegendConfig-Du_Dm8Bi.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-CkmUJo3n.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./index-CtGW4gqB.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./copy-Bp4cxNkh.js";import"./copy-WTqS65ha.js";import"./GitHub-Mark-DJyWkpqr.js";import"./TableOfContent-Cw9to3Gb.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./DemoProps-BuxFMMT0.js";import"./LineChart-D9psMS_j.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-BmAjcAPh.js";import"./ChartContainer-KqaonayD.js";import"./index-aDIzQfUJ.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-hnTyvLwW.js";import"./staticProps-DbRQzNYm.js";import"./ChartDataLabel-BOoaUgds.js";import"./useLongestYAxisLabel-CIues_9v.js";import"./react-content-loader.es-DwsiRCbp.js";import"./Line-N0oaZlwf.js";import"./useIsRTL-BkUHaPCa.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
