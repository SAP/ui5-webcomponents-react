import{j as e}from"./iframe-nPyk7Pli.js";import{useMDXComponents as a}from"./index-CtkrgsHZ.js";import{M as d,C as r}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import{C as c}from"./ControlsWithNote-Bxn-4kSn.js";import{D as h}from"./DocsHeader-Ct2B1yC6.js";import{F as m}from"./CommandsAndQueries-BH3LWIrk.js";import{M as l,a as p}from"./LegendConfig-fYEBEShs.js";import{C as i,D as t,W as x,a as j,b as f,c as C,L as u,d as g,e as L,f as W,g as b}from"./LineChart.stories-C8SN56A8.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./index-Bf4gw30l.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./copy-BLj-zT6B.js";import"./copy-YekArnCd.js";import"./GitHub-Mark-DYogR2nu.js";import"./TableOfContent-txTLOiW_.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./DemoProps-7gECJXuL.js";import"./LineChart-Cv9u6WSC.js";import"./ThemingParameters-pyhX3s39.js";import"./YAxisTicks-DWMOB1Hf.js";import"./ChartContainer-oN42UNXP.js";import"./index-CZMRCvhw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DpHa1USN.js";import"./staticProps-CNloYQAY.js";import"./ChartDataLabel-Dvkdncsa.js";import"./useLongestYAxisLabel-Ckfa2LHv.js";import"./react-content-loader.es-BN6k-YqE.js";import"./Line-CjjhMa2i.js";import"./useIsRTL-DgP77H3z.js";function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
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
