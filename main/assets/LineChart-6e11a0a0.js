import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-e4b5f208.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c,C as e}from"./index-4c6bc1d8.js";import{C as h}from"./DomRefTable.module-796e5b92.js";import{D as d}from"./DocsHeader-275d7057.js";import{F as l}from"./Footer-c24922c1.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as L,c as g,L as W,d as b,e as D}from"./LineChart.stories-648f1fea.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-62981b78.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-a1d9006c.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-6eff54b4.js";import"./TableOfContent-6d559a7d.js";import"./index-6328c9d9.js";import"./Link-4cf74d63.js";import"./WrappingType-b81e595a.js";import"./index-87d6c211.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-6454d6ca.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-777d213b.js";import"./index-99d317a4.js";import"./YAxisTicks-05c106ee.js";import"./ChartContainer-13d9ecd0.js";import"./index-bdf14a6c.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-96ae6471.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-f64444d2.js";import"./defaults-f1fffe5b.js";import"./ChartDataLabel-514b0ed2.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-3ff349a1.js";import"./react-content-loader.es-de0c8b5a.js";import"./Line-0618c383.js";import"./useIsRTL-4cfef02b.js";function oo(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?r(i,Object.assign({},t,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),t.components);return p(s,{children:[r(c,{of:f}),`
`,r(d,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(e,{of:m}),`
`,r(o.h2,{children:"Properties"}),`
`,r(h,{of:m}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With Custom Color"}),`
`,r(e,{of:u}),`
`,r(o.h3,{children:"With Secondary Dimension"}),`
`,r(e,{of:C}),`
`,r(o.h3,{children:"With Data Labels"}),`
`,r(e,{of:L}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(e,{of:g}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(e,{of:W}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,p(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<LineChart
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
`,r(e,{of:b}),`
`,r(o.h3,{children:"With Linear Gradient"}),`
`,r(e,{of:D}),`
`,r(o.h4,{children:"Code"}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,r(l,{})]})}}export{oo as default};
//# sourceMappingURL=LineChart-6e11a0a0.js.map
