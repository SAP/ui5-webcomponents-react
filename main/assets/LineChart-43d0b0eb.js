import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-420b4ede.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c,C as o}from"./index-afbbd947.js";import{C as h}from"./DomRefTable.module-6ce8754c.js";import{D as d}from"./DocsHeader-85b9e488.js";import{F as l}from"./Footer-50809b9e.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as L,c as g,L as W,d as b,e as D}from"./LineChart.stories-116af3e1.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-0f619c81.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-62607488.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./class-map-60f59e95.js";import"./Button-981a9381.js";import"./Keys-50a1cb5a.js";import"./index-7ac1a15f.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2bb789f5.js";import"./TableOfContent-eb3544ea.js";import"./index-56e3fc82.js";import"./WrappingType-b81e595a.js";import"./index-dfb05037.js";import"./Label-f9741f9c.js";import"./Footer.module-c4f3b823.js";import"./index-0b25d04c.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-711af0dd.js";import"./index-99d317a4.js";import"./YAxisTicks-7f3edc17.js";import"./ChartContainer-7b759103.js";import"./index-b3213c5e.js";import"./i18n-defaults-fdda04bc.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-b5e8ed78.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-ede1ccd8.js";import"./defaults-1a983f5f.js";import"./ChartDataLabel-c953230c.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-692b81f4.js";import"./react-content-loader.es-eef51af2.js";import"./Line-56724b02.js";import"./useIsRTL-2dc6fd10.js";function Jr(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?r(n,Object.assign({},t,{children:r(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),t.components);return p(s,{children:[r(c,{of:f}),`
`,r(d,{}),`
`,r(e.h2,{children:"Example"}),`
`,r(o,{of:m}),`
`,r(e.h2,{children:"Properties"}),`
`,r(h,{of:m}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(e.h2,{children:"More Examples"}),`
`,r(e.h3,{children:"With Custom Color"}),`
`,r(o,{of:u}),`
`,r(e.h3,{children:"With Secondary Dimension"}),`
`,r(o,{of:C}),`
`,r(e.h3,{children:"With Data Labels"}),`
`,r(o,{of:L}),`
`,r(e.h3,{children:"With Formatter"}),`
`,r(o,{of:g}),`
`,r(e.h3,{children:"Loading Placeholder"}),`
`,r(o,{of:W}),`
`,r(e.h3,{children:"With Reference Line"}),`
`,p(e.p,{children:["You can set a reference line to any value by using the ",r(e.code,{children:"referenceLine"})," ",r(e.code,{children:"chartConfig"})," property. ",r(e.code,{children:"referenceLine"})," accepts all properties described ",r(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(e.code,{children:"label"}),",",r(e.code,{children:"value"})," and ",r(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`<LineChart
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
`,r(o,{of:b}),`
`,r(e.h3,{children:"With Linear Gradient"}),`
`,r(o,{of:D}),`
`,r(e.h4,{children:"Code"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,r(l,{})]})}}export{Jr as default};
//# sourceMappingURL=LineChart-43d0b0eb.js.map
