import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-a45b6abb.js";import{D as a}from"./DocsHeader-37865433.js";import{F as h}from"./Footer-640692b5.js";import"./index-ebeaab24.js";import{M as c,C as e}from"./chunk-PCJTTTQV-d5cca9fe.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-32f0bcc7.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-e054df11.js";import"./iframe-32d0c6f9.js";import"../sb-preview/runtime.js";import"./UI5Element-784c80b7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a5230073.js";import"./Icons-e56d104a.js";import"./decline-02d24632.js";import"./i18n-defaults-80781f7e.js";import"./information-aaa07e0e.js";import"./class-map-519e9c6d.js";import"./Button-0cdf0df4.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-2b9d69e6.js";import"./index-40ec362f.js";import"./Link-d48f545c.js";import"./WrappingType-b81e595a.js";import"./index-ab84db68.js";import"./Label-07c40881.js";import"./index-9c09ad76.js";import"./index-605f73ee.js";import"./Popover-aaa493d1.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6cc8839e.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-a5a6237e.js";import"./FocusableElements-9503dbb2.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-846eb684.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-d6405bfa.js";import"./index-99d317a4.js";import"./defaults-d0d5f328.js";import"./ChartContainer-ad3b368a.js";import"./index-1f954fba.js";import"./i18n-defaults-b56a0b3b.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./YAxisTicks-f7b7fe22.js";import"./generateCategoricalChart-4614960a.js";import"./index-f50b85d6.js";import"./debounce-ab129990.js";import"./useTooltipFormatter-734f2853.js";import"./ChartDataLabel-a74f188f.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-d90acc48.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-7a6ad152.js";import"./Line-692cbe53.js";import"./Scatter-bd3c1f51.js";function Qr(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?r.jsx(i,Object.assign({},t,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(e,{of:l}),`
`,r.jsx(o.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(e,{of:x}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(e,{of:j}),`
`,r.jsx(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(o.p,{children:["You can set a reference line to any value by using the ",r.jsx(o.code,{children:"referenceLine"})," ",r.jsx(o.code,{children:"chartConfig"})," property. ",r.jsx(o.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(o.code,{children:"label"}),",",r.jsx(o.code,{children:"value"})," and ",r.jsx(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`<ComposedChart
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
`,r.jsx(e,{of:f}),`
`,r.jsx(o.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(e,{of:u}),`
`,r.jsx(o.h3,{id:"with-formatted-secondary-axis",children:"With Formatted Secondary Axis"}),`
`,r.jsx(e,{of:g}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(e,{of:C}),`
`,r.jsx(h,{})]})}}export{Qr as default};
//# sourceMappingURL=ComposedChart-aa2059e3.js.map
