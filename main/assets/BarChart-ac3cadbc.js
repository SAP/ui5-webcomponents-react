import{j as r,a as m,F as c}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-50e807ae.js";import{D as s}from"./DocsHeader-e45f142c.js";import{F as d}from"./Footer-0ec8c8be.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./index-86940779.js";import"./chunk-PCJTTTQV-6102e2fa.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,L as b,d as L,e as D}from"./BarChart.stories-00d33bd3.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-93b042f8.js";import"./iframe-6c121fc0.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./i18n-defaults-da1c0a37.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-a9b28f0c.js";import"./Keys-3acbae73.js";import"./Button-b7bbfa18.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b7f5c49b.js";import"./TableOfContent-11ed99bc.js";import"./index-10110123.js";import"./Link-f8688ae9.js";import"./WrappingType-b81e595a.js";import"./index-bbdcdfc4.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-8496b4e7.js";import"./Popover-661594f1.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-be465885.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./BarChart-8c884bc8.js";import"./index-99d317a4.js";import"./defaults-55714c09.js";import"./ChartContainer-871ad64f.js";import"./index-bdf14a6c.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-13ac8547.js";import"./generateCategoricalChart-0500276c.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./YAxisTicks-fe386dfd.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-2320c720.js";import"./ChartDataLabel-982b24dc.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-d641c0af.js";import"./react-content-loader.es-de0c8b5a.js";import"./useIsRTL-4cfef02b.js";function eo(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(c,{children:[r(l,{of:f}),`
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
`,r(d,{})]})}}export{eo as default};
//# sourceMappingURL=BarChart-ac3cadbc.js.map
