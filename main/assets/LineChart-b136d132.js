import{j as r}from"./jsx-runtime-5926aa06.js";import{M as m,C as o}from"./chunk-PCJTTTQV-7baf5620.js";import{C as a}from"./DomRefTable.module-0c18fa53.js";import{D as c}from"./DocsHeader-3e7e9022.js";import{F as d}from"./Footer-8cb6ad35.js";import"./index-ebeaab24.js";import{C as h,D as s,W as l,a as x,b as j,c as f,L as u,d as C,e as g}from"./LineChart.stories-33659167.js";import{u as p}from"./index-bda0bad7.js";import"./iframe-5d00b076.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-017d4ba3.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-d703a0b9.js";import"./Icons-e2180d53.js";import"./decline-b90c4a5f.js";import"./i18n-defaults-80781f7e.js";import"./information-33412b2a.js";import"./class-map-6a9bd920.js";import"./Button-dc6eb42e.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-3f99aa96.js";import"./i18n-defaults-18f6652d.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-fff84180.js";import"./Integer-f7f172c9.js";import"./index-66af6058.js";import"./Avatar-81a3aee4.js";import"./ResizeHandler-021ae412.js";import"./employee-dc1adeb6.js";import"./index-e513c782.js";import"./index-acbda5f4.js";import"./Link-96b46196.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-fd31b65c.js";import"./index-eff5c1fd.js";import"./Label-4abbc3da.js";import"./index-286e8b37.js";import"./Popover-fafbd2ef.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-d701d3f7.js";import"./index-99d317a4.js";import"./YAxisTicks-be45afdf.js";import"./ChartContainer-c344c211.js";import"./index-8fa2e938.js";import"./i18n-defaults-f649c0ce.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./generateCategoricalChart-77049cb2.js";import"./index-f50b85d6.js";import"./debounce-86d6d72a.js";import"./useTooltipFormatter-4b49b063.js";import"./defaults-0086ea48.js";import"./ChartDataLabel-ab1a7de5.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-632a62db.js";import"./react-content-loader.es-627d673d.js";import"./Line-058b633b.js";function Zr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:h}),`
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
//# sourceMappingURL=LineChart-b136d132.js.map
