import{j as r}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-0cb57df1.js";import{D as a}from"./DocsHeader-991d32fe.js";import{F as h}from"./Footer-3f8faf83.js";import"./index-f1f2c4b1.js";import{M as c,C as e}from"./chunk-S4VUQJ4A-2f00d13c.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./BarChart.stories-fcee341f.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-099fdb19.js";import"./iframe-95e95fd4.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-8885c1b6.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-6459d230.js";import"./Icons-234bf59e.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./class-map-2a13820b.js";import"./Button-1a04ac66.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-f092546e.js";import"./Integer-f7f172c9.js";import"./index-abc2cc05.js";import"./Avatar-60ab180c.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-81ae69cd.js";import"./index-5644339f.js";import"./Link-6bda31f4.js";import"./WrappingType-b81e595a.js";import"./index-14ef1273.js";import"./TableOfContent-0ec8ba6f.js";import"./index-4b7fcd1e.js";import"./Label-78e0be96.js";import"./index-c74c9f7f.js";import"./index-9e4a4085.js";import"./index-acff0a7f.js";import"./Popover-d6899044.js";import"./PopupsCommon.css-a62fa435.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-4f876188.js";import"./BrowserScrollbar.css-7fb20ad4.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./defaults-8cd43b5b.js";import"./ChartContainer-46462772.js";import"./index-e80fa1bf.js";import"./i18n-defaults-c60b9a37.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./useCancelAnimationFallback-f5331615.js";import"./generateCategoricalChart-ad989dd0.js";import"./index-b580f7e8.js";import"./YAxisTicks-b0f7fc3c.js";import"./debounce-be6825b8.js";import"./useTooltipFormatter-5ef8e4e6.js";import"./ChartDataLabel-98bce1a4.js";import"./staticProps-d8b65b3f.js";import"./useOnClickInternal-7ffac7fa.js";import"./Placeholder-a1d9078d.js";import"./react-content-loader.es-27eb8e7e.js";function Zr(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
//# sourceMappingURL=BarChart-cf0c213c.js.map
