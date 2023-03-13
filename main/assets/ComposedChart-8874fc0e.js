import{j as r,a as m,F as c}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-9a9ff34b.js";import{D as h}from"./DocsHeader-c5a3abb5.js";import{F as d}from"./Footer-7f457475.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./index-bc5dd318.js";import"./chunk-PCJTTTQV-7a3eb077.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,d as b,e as L,L as M}from"./ComposedChart.stories-a1120555.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-195fa335.js";import"./iframe-e0204f0d.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5cbed584.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b13c67a4.js";import"./TableOfContent-1593fab8.js";import"./index-2d96caf1.js";import"./WrappingType-b81e595a.js";import"./index-bdbf428d.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-94872efc.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./index-c1308f9d.js";import"./index-99d317a4.js";import"./defaults-db016348.js";import"./ChartContainer-08ad9025.js";import"./index-7a2a7ca3.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./YAxisTicks-bb337337.js";import"./generateCategoricalChart-6a5164e7.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-1202f8c8.js";import"./ChartDataLabel-4b49550e.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-14261a90.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-24961444.js";import"./Line-80595584.js";import"./Scatter-51092723.js";import"./useIsRTL-4cfef02b.js";function io(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(c,{children:[r(l,{of:f}),`
`,r(h,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(t,{of:p}),`
`,r(o.h2,{children:"Properties"}),`
`,r(s,{of:p}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With Custom Color"}),`
`,r(t,{of:u}),`
`,r(o.h3,{children:"With Data Labels"}),`
`,r(t,{of:g}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(t,{of:C}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<ComposedChart
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
`,r(t,{of:W}),`
`,r(o.h3,{children:"With Highlighted Measures"}),`
`,r(t,{of:b}),`
`,r(o.h3,{children:"With Formatted Secondary Axis"}),`
`,r(t,{of:L}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(t,{of:M}),`
`,r(d,{})]})}}export{io as default};
//# sourceMappingURL=ComposedChart-8874fc0e.js.map
