import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-cb72d915.js";import{D as a}from"./DocsHeader-cc6402b5.js";import{F as h}from"./Footer-8b29ea13.js";import"./index-ebeaab24.js";import{M as c,C as t}from"./chunk-PCJTTTQV-badaacef.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-e27e129b.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-849cee3d.js";import"./iframe-094919e0.js";import"../sb-preview/runtime.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-d703a0b9.js";import"./Icons-e2180d53.js";import"./decline-b90c4a5f.js";import"./i18n-defaults-80781f7e.js";import"./information-33412b2a.js";import"./class-map-6a9bd920.js";import"./Button-dc6eb42e.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-3f99aa96.js";import"./i18n-defaults-18f6652d.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./index-43bc6237.js";import"./Integer-f7f172c9.js";import"./index-49cba631.js";import"./Avatar-81a3aee4.js";import"./ResizeHandler-021ae412.js";import"./employee-dc1adeb6.js";import"./index-fef64524.js";import"./index-fe589c62.js";import"./Link-96b46196.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-f0e8bec6.js";import"./index-2b22de6a.js";import"./Label-4abbc3da.js";import"./index-9c09ad76.js";import"./index-97c21802.js";import"./Popover-fafbd2ef.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-bc608152.js";import"./index-99d317a4.js";import"./defaults-3ff98328.js";import"./ChartContainer-a0c75a01.js";import"./index-8fa2e938.js";import"./i18n-defaults-f649c0ce.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./YAxisTicks-dd900e25.js";import"./generateCategoricalChart-ee969e46.js";import"./index-f50b85d6.js";import"./debounce-86d6d72a.js";import"./useTooltipFormatter-d0949ded.js";import"./ChartDataLabel-0abfe255.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-ad410763.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-67cef99e.js";import"./Line-d37e8412.js";import"./Scatter-028f7f51.js";function oo(e={}){const{wrapper:i}=Object.assign({},p(),e.components);return i?r.jsx(i,Object.assign({},e,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),e.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(t,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(t,{of:l}),`
`,r.jsx(o.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(t,{of:x}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(t,{of:j}),`
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
`,r.jsx(t,{of:f}),`
`,r.jsx(o.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(t,{of:u}),`
`,r.jsx(o.h3,{id:"with-formatted-secondary-axis",children:"With Formatted Secondary Axis"}),`
`,r.jsx(t,{of:g}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(t,{of:C}),`
`,r.jsx(h,{})]})}}export{oo as default};
//# sourceMappingURL=ComposedChart-7e267c83.js.map
