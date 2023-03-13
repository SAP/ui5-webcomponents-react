import{j as r,a as m,F as c}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-cfd794f9.js";import{D as s}from"./DocsHeader-eccf7cf9.js";import{F as d}from"./Footer-640a9f68.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./index-10343285.js";import"./chunk-PCJTTTQV-b0832a2e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,L as b,d as L,e as D}from"./BarChart.stories-062e29b2.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-6436bc2b.js";import"./iframe-e9a69322.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-66da1fc6.js";import"./Icons-7b82f601.js";import"./i18n-defaults-8c9b7f08.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ffc1363e.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-0b6fa56b.js";import"./TableOfContent-8fa697be.js";import"./index-333b46ad.js";import"./WrappingType-b81e595a.js";import"./index-76de7cc5.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-3d262420.js";import"./Popover-93eeebac.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-72d38d0e.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./BarChart-93b8c63c.js";import"./index-99d317a4.js";import"./defaults-d7d0aa0b.js";import"./ChartContainer-9ced867e.js";import"./index-7a2a7ca3.js";import"./i18n-defaults-41f1487d.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-ee7f46c4.js";import"./generateCategoricalChart-8f70fec0.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./YAxisTicks-d92c32c8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-aa24817d.js";import"./ChartDataLabel-0b0c14ea.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-d641c0af.js";import"./react-content-loader.es-de0c8b5a.js";import"./useIsRTL-4cfef02b.js";function Zr(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(c,{children:[r(l,{of:f}),`
`,r(s,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(t,{of:p}),`
`,r(o.h2,{children:"Properties"}),`
`,r(h,{of:p}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With Custom Color"}),`
`,r(t,{of:u}),`
`,r(o.h3,{children:"With Secondary Dimension"}),`
`,r(t,{of:g}),`
`,r(o.h3,{children:"With Data Labels"}),`
`,r(t,{of:C}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(t,{of:W}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(t,{of:b}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<BarChart
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
`,r(t,{of:L}),`
`,r(o.h3,{children:"With Highlighted Measure"}),`
`,r(t,{of:D}),`
`,r(d,{})]})}}export{Zr as default};
//# sourceMappingURL=BarChart-b1820694.js.map
