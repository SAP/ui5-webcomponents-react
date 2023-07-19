import{j as r}from"./jsx-runtime-6b79a019.js";import{M as m,C as o}from"./chunk-PCJTTTQV-b245ce1c.js";import{C as a}from"./DomRefTable.module-865202fc.js";import{D as c}from"./DocsHeader-d60e5b5e.js";import{F as d}from"./Footer-b254f2dd.js";import"./index-ccf6a75d.js";import{C as h,D as s,W as l,a as x,b as j,c as f,L as u,d as C,e as g}from"./LineChart.stories-a768d7ca.js";import{u as p}from"./index-f2208173.js";import"./iframe-37ac82f0.js";import"../sb-preview/runtime.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-8d7a8128.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./react-jss.esm-0528916b.js";import"./index-ef33a88b.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-bbc9063c.js";import"./Integer-f7f172c9.js";import"./index-e06735ec.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-def09afe.js";import"./index-023f8080.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-bc9f3959.js";import"./TableOfContent-4b167d2f.js";import"./index-a250c7c2.js";import"./Label-f867a533.js";import"./index-687652dc.js";import"./index-7251e6bf.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./DemoProps-4ae16275.js";import"./LineChart-8c8146ac.js";import"./index-99d317a4.js";import"./YAxisTicks-dc766eca.js";import"./ChartContainer-ed0fd0ee.js";import"./index-5f41748c.js";import"./i18n-defaults-2d74659d.js";import"./I18nContext-bec860f5.js";import"./throttle-3a2a57e7.js";import"./isString-aa6079bb.js";import"./generateCategoricalChart-7016f35f.js";import"./index-af6e0797.js";import"./debounce-bb226b95.js";import"./useTooltipFormatter-4f6a5adb.js";import"./defaults-e3da6b1e.js";import"./ChartDataLabel-d9814153.js";import"./staticProps-b1e5f52f.js";import"./useLongestYAxisLabel-f788dc7b.js";import"./react-content-loader.es-f0af435f.js";import"./Line-3437d482.js";function Zr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(o,{of:s}),`
`,r.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(a,{of:s}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(e.p,{children:["You can set a reference line to any value by using the ",r.jsx(e.code,{children:"referenceLine"})," ",r.jsx(e.code,{children:"chartConfig"})," property. ",r.jsx(e.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(e.code,{children:"label"}),",",r.jsx(e.code,{children:"value"})," and ",r.jsx(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`<LineChart
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
`,r.jsx(o,{of:C}),`
`,r.jsx(e.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,r.jsx(o,{of:g}),`
`,r.jsx(e.h4,{id:"code",children:"Code"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,r.jsx(d,{})]})}}export{Zr as default};
//# sourceMappingURL=LineChart-801eafc0.js.map
