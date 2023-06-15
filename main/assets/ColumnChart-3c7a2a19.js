import{j as r}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-9a1a7d7b.js";import{D as a}from"./DocsHeader-a0d7f904.js";import{F as c}from"./Footer-53452d64.js";import"./index-ebeaab24.js";import{M as h,C as e}from"./chunk-PCJTTTQV-3191a95a.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./ColumnChart.stories-cbc4f889.js";import{u as p}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-491a0b65.js";import"./iframe-cbfe8030.js";import"../sb-preview/runtime.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-1927e688.js";import"./Icons-fe8ad928.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./information-bc6b0940.js";import"./class-map-6a9bd920.js";import"./Button-a741ea37.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-470e4a6a.js";import"./index-a208f7d1.js";import"./Link-92895189.js";import"./WrappingType-b81e595a.js";import"./index-162d099d.js";import"./Label-51e84534.js";import"./index-9c09ad76.js";import"./index-be83d8f0.js";import"./Popover-898d0a68.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-6913d948.js";import"./ChartContainer-838010cf.js";import"./index-20df30c4.js";import"./i18n-defaults-be17d191.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./useCancelAnimationFallback-2b5dd1c3.js";import"./generateCategoricalChart-5c65bebd.js";import"./index-f50b85d6.js";import"./YAxisTicks-847ad5d5.js";import"./debounce-534019d1.js";import"./useTooltipFormatter-a56ecfe4.js";import"./ChartDataLabel-91d8a0e6.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-93a90b5f.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";function Ir(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With custom color"}),`
`,r.jsx(e,{of:l}),`
`,r.jsx(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(e,{of:x}),`
`,r.jsx(o.h3,{id:"with-stacks",children:"With Stacks"}),`
`,r.jsx(e,{of:j}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(e,{of:f}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(e,{of:u}),`
`,r.jsx(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(o.p,{children:["You can set a reference line to any value by using the ",r.jsx(o.code,{children:"referenceLine"})," ",r.jsx(o.code,{children:"chartConfig"})," property. ",r.jsx(o.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(o.code,{children:"label"}),",",r.jsx(o.code,{children:"value"})," and ",r.jsx(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`<ColumnChart
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
`,r.jsx(e,{of:g}),`
`,r.jsx(o.h2,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(e,{of:C}),`
`,r.jsx(c,{})]})}}export{Ir as default};
//# sourceMappingURL=ColumnChart-3c7a2a19.js.map
