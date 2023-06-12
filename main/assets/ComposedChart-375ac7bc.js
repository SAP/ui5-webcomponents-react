import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-6cfc4ed5.js";import{D as a}from"./DocsHeader-09052fea.js";import{F as h}from"./Footer-4d65d15f.js";import"./index-ebeaab24.js";import{M as c,C as e}from"./chunk-PCJTTTQV-c9b08a08.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-a639f2b9.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-91ba7822.js";import"./iframe-118e37f2.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-ded66bb3.js";import"./index-28672e3f.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-38fceebb.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-48a94bd2.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-362355a7.js";import"./index-99d317a4.js";import"./defaults-be8eb229.js";import"./ChartContainer-4b75bce7.js";import"./index-e2d17b9e.js";import"./i18n-defaults-9842c5eb.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./YAxisTicks-85eefdcb.js";import"./generateCategoricalChart-181befc3.js";import"./index-f50b85d6.js";import"./debounce-63a1d38f.js";import"./useTooltipFormatter-7c1e00b3.js";import"./ChartDataLabel-22bcc96e.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-a600c4d3.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-bf9e49c2.js";import"./Line-7e881fec.js";import"./Scatter-95bdc9ee.js";function Qr(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?r.jsx(i,Object.assign({},t,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
//# sourceMappingURL=ComposedChart-375ac7bc.js.map
