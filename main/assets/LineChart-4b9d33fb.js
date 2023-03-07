import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-a125d30f.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c,C as o}from"./index-43922050.js";import{C as h}from"./DomRefTable.module-f90a1284.js";import{D as d}from"./DocsHeader-5b523b99.js";import{F as l}from"./Footer-cb200abc.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as L,c as g,L as W,d as b,e as D}from"./LineChart.stories-da49e418.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-ea3a93fd.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-4f072a6d.js";import"./UI5Element-eb05fed8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-8627ed01.js";import"./decline-0a22f866.js";import"./Icons-8637bdfe.js";import"./class-map-5d8e4b2b.js";import"./Button-8cfaf72a.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-95e3d886.js";import"./TableOfContent-7b57719c.js";import"./index-f57edce5.js";import"./WrappingType-b81e595a.js";import"./index-b2c1542f.js";import"./Label-6255dce9.js";import"./Footer.module-c4f3b823.js";import"./index-d9205786.js";import"./Popover-3083ea67.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-f9f23bc7.js";import"./FocusableElements-44b79fcc.js";import"./ResizeHandler-a25182c3.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-44b91267.js";import"./index-99d317a4.js";import"./YAxisTicks-3f9aa897.js";import"./ChartContainer-352aa097.js";import"./index-9a83c207.js";import"./i18n-defaults-5a38197e.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-33d11ccd.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-703e266a.js";import"./defaults-aa9003b0.js";import"./ChartDataLabel-2523b2c0.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-fcd86dd0.js";import"./react-content-loader.es-eef51af2.js";import"./Line-a9e18706.js";import"./useIsRTL-f66ee1fc.js";function Kr(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?r(n,Object.assign({},t,{children:r(i,{})})):i();function i(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),t.components);return p(s,{children:[r(c,{of:f}),`
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
`,r(l,{})]})}}export{Kr as default};
//# sourceMappingURL=LineChart-4b9d33fb.js.map
