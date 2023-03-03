import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-386e3cad.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c,C as o}from"./index-0e8f60d5.js";import{C as h}from"./DomRefTable.module-f2d37632.js";import{D as d}from"./DocsHeader-418e4008.js";import{F as l}from"./Footer-d7beaea3.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as L,c as g,L as W,d as b,e as D}from"./LineChart.stories-08a0e5c2.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-3591d0cc.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-6f8afb28.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./decline-ff534003.js";import"./Icons-5bcf1e3f.js";import"./class-map-abcca105.js";import"./Button-2e5054c2.js";import"./Keys-50a1cb5a.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-58164062.js";import"./TableOfContent-b30f071b.js";import"./index-036cdf6d.js";import"./WrappingType-b81e595a.js";import"./index-46cb378d.js";import"./Label-6707bdfc.js";import"./Footer.module-c4f3b823.js";import"./index-82591e11.js";import"./Popover-97ca01c1.js";import"./Integer-8010a7ae.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-c56abc92.js";import"./MediaRange-25b98f31.js";import"./style-map-7b3eb5df.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-a63cb32b.js";import"./index-99d317a4.js";import"./YAxisTicks-14e2a356.js";import"./ChartContainer-4f7b200f.js";import"./index-0d4b1695.js";import"./i18n-defaults-a62b2e2b.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-a8e23c26.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-9773d8b0.js";import"./defaults-a20972b4.js";import"./ChartDataLabel-47afa1b4.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-4b6af140.js";import"./react-content-loader.es-eef51af2.js";import"./Line-2b31c0b4.js";import"./useIsRTL-fcdcb328.js";function Ir(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?r(n,Object.assign({},t,{children:r(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),t.components);return p(s,{children:[r(c,{of:f}),`
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
`,r(l,{})]})}}export{Ir as default};
//# sourceMappingURL=LineChart-7aaf97ad.js.map
