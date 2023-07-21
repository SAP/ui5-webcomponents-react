import{j as r}from"./jsx-runtime-6b79a019.js";import{C as s}from"./DomRefTable.module-fa39d1c6.js";import{D as a}from"./DocsHeader-bf43c24c.js";import{F as h}from"./Footer-1c7c3b21.js";import"./index-ccf6a75d.js";import{M as c,C as e}from"./chunk-PCJTTTQV-6422ee3e.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./BarChart.stories-04695af6.js";import{u as p}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-6bd7a05d.js";import"./iframe-f22632ce.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-bb3cd91f.js";import"./Integer-f7f172c9.js";import"./index-e7d2858a.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-d9c79a96.js";import"./index-1d30e7d4.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-bc9f3959.js";import"./TableOfContent-72caed00.js";import"./index-bb237535.js";import"./Label-f867a533.js";import"./index-8d7a8128.js";import"./index-eec8565f.js";import"./index-d56b8155.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./DemoProps-4ae16275.js";import"./index-99d317a4.js";import"./defaults-d4d77148.js";import"./ChartContainer-d4b3d2e9.js";import"./index-5f41748c.js";import"./i18n-defaults-2d74659d.js";import"./I18nContext-bec860f5.js";import"./throttle-3a2a57e7.js";import"./isString-aa6079bb.js";import"./useCancelAnimationFallback-6da016c7.js";import"./generateCategoricalChart-378b2891.js";import"./index-af6e0797.js";import"./YAxisTicks-e9114a7f.js";import"./debounce-bb226b95.js";import"./useTooltipFormatter-db6dd48d.js";import"./ChartDataLabel-91945cad.js";import"./staticProps-b1e5f52f.js";import"./useOnClickInternal-8ad4ca9b.js";import"./Placeholder-d8f3e1b8.js";import"./react-content-loader.es-f0af435f.js";function Zr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
`,r.jsx(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(e,{of:x}),`
`,r.jsx(o.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(e,{of:j}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(e,{of:f}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(e,{of:u}),`
`,r.jsx(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(o.p,{children:["You can set a reference line to any value by using the ",r.jsx(o.code,{children:"referenceLine"})," ",r.jsx(o.code,{children:"chartConfig"})," property. ",r.jsx(o.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(o.code,{children:"label"}),",",r.jsx(o.code,{children:"value"})," and ",r.jsx(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-jsx",children:`<BarChart
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
`,r.jsx(o.h3,{id:"with-highlighted-measure",children:"With Highlighted Measure"}),`
`,r.jsx(e,{of:C}),`
`,r.jsx(h,{})]})}}export{Zr as default};
//# sourceMappingURL=BarChart-78904d60.js.map
