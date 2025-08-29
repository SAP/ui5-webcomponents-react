import{j as e}from"./iframe-D7jNN5F7.js";import{useMDXComponents as a}from"./index-DKysAdcf.js";import{M as d,C as r}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import{C as c}from"./ControlsWithNote-E5ssFwis.js";import{D as h}from"./DocsHeader-BTZUlQMm.js";import{F as m}from"./CommandsAndQueries-B3x-n25L.js";import{M as l,a as p}from"./LegendConfig-h_KomIB7.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-D8gwUhg0.js";import"./preload-helper-Ct5FWWRu.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./index-C3oU0sTK.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./copy-Dndk5unU.js";import"./copy-DjcHAfNd.js";import"./GitHub-Mark-C0A6whC2.js";import"./TableOfContent-DsCXo-br.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./DemoProps-BTahw_Rw.js";import"./LineChart-CqWq-Svv.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-B5fDrXRI.js";import"./ChartContainer-YB--FRlQ.js";import"./index-1d71x-Ip.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dkeb_YzJ.js";import"./staticProps-DkhYhSLB.js";import"./ChartDataLabel-YlpZ453m.js";import"./useLongestYAxisLabel-B8aW39zE.js";import"./react-content-loader.es-Dy-EAmgZ.js";import"./Line-gzGQxHu5.js";import"./useIsRTL-pM8eUPi3.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
