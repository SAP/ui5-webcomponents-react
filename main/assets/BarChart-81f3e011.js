import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-be77dad2.js";import{D as a}from"./DocsHeader-ff8509cd.js";import{F as h}from"./Footer-7c791a9b.js";import"./index-ebeaab24.js";import{M as c,C as o}from"./chunk-PCJTTTQV-632ad8a3.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./BarChart.stories-beccfba0.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-122ee91e.js";import"./iframe-3b722e78.js";import"../sb-preview/runtime.js";import"./UI5Element-b1843653.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-aac9cdc2.js";import"./Icons-9f549e0f.js";import"./decline-d907918c.js";import"./i18n-defaults-80781f7e.js";import"./information-0f993e39.js";import"./class-map-6a9bd920.js";import"./Button-37a8c146.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-fca59c5d.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-a9860527.js";import"./index-d6e28a7c.js";import"./Link-64c69167.js";import"./WrappingType-b81e595a.js";import"./index-452605d8.js";import"./Label-350e96fc.js";import"./index-9c09ad76.js";import"./index-8b18e2e7.js";import"./Popover-a3a62d04.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2f7e8748.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-38257fbf.js";import"./FocusableElements-72585d9b.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-8726336f.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-fa8bb32d.js";import"./ChartContainer-4cfc9c5f.js";import"./index-e2d17b9e.js";import"./i18n-defaults-9842c5eb.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./useCancelAnimationFallback-dcf4def9.js";import"./generateCategoricalChart-21faddf7.js";import"./index-f50b85d6.js";import"./YAxisTicks-a07c4c8b.js";import"./debounce-63a1d38f.js";import"./useTooltipFormatter-57fa38db.js";import"./ChartDataLabel-3ee773a2.js";import"./staticProps-411b051b.js";import"./useOnClickInternal-c48662e6.js";import"./Placeholder-0503e054.js";import"./react-content-loader.es-627d673d.js";function Ir(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(o,{of:m}),`
`,r.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(e.p,{children:["You can set a reference line to any value by using the ",r.jsx(e.code,{children:"referenceLine"})," ",r.jsx(e.code,{children:"chartConfig"})," property. ",r.jsx(e.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(e.code,{children:"label"}),",",r.jsx(e.code,{children:"value"})," and ",r.jsx(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`<BarChart
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
`,r.jsx(o,{of:g}),`
`,r.jsx(e.h3,{id:"with-highlighted-measure",children:"With Highlighted Measure"}),`
`,r.jsx(o,{of:C}),`
`,r.jsx(h,{})]})}}export{Ir as default};
//# sourceMappingURL=BarChart-81f3e011.js.map
