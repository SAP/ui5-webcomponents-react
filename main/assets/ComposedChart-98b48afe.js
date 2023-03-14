import{j as r,a as n,F as c}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-e689c5a9.js";import{D as h}from"./DocsHeader-b1a72d76.js";import{F as d}from"./Footer-ae892764.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./index-d282060a.js";import"./chunk-PCJTTTQV-5265a540.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,d as b,e as L,L as M}from"./ComposedChart.stories-e0dd2c5f.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-6c2a9341.js";import"./iframe-dbd569dd.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f5d9fb2f.js";import"./TableOfContent-110221ee.js";import"./index-6279e8c6.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-322784b8.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-01970899.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./index-4d51f0b3.js";import"./index-99d317a4.js";import"./defaults-16a31e74.js";import"./ChartContainer-4a5f1ff7.js";import"./index-94593310.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./isString-77c0f675.js";import"./YAxisTicks-6a9363ff.js";import"./generateCategoricalChart-0e025af1.js";import"./throttle-0d486062.js";import"./index-4d501b15.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-d94d9ef6.js";import"./ChartDataLabel-bce474ef.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-6082052d.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-b86b04f6.js";import"./Line-75a6c457.js";import"./Scatter-2b918393.js";function no(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(m,{})})):m();function m(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return n(c,{children:[r(l,{of:f}),`
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
`,n(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
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
`,r(d,{})]})}}export{no as default};
//# sourceMappingURL=ComposedChart-98b48afe.js.map
