import{j as r}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-7e5b3ff6.js";import{D as a}from"./DocsHeader-0be916ce.js";import{F as c}from"./Footer-3ffae1ff.js";import"./index-f1f2c4b1.js";import{M as h,C as i}from"./chunk-S4VUQJ4A-aa8bbc14.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./ColumnChart.stories-afe62ced.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-d6910adc.js";import"./iframe-174a0e51.js";import"../sb-preview/runtime.js";import"./UI5Element-fe43d284.js";import"./CustomElementsScopeUtils-7e643eaa.js";import"./withWebComponent-40b4b429.js";import"./utils-64df43e3.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-4b8e6c3e.js";import"./Icons-1d0bcfc0.js";import"./decline-6c7fc0a2.js";import"./i18n-defaults-bdef1cce.js";import"./information-5d7a8806.js";import"./alert-1b225bb9.js";import"./class-map-c90b90b7.js";import"./Button-ca10e4c6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0dcb0e40.js";import"./index-75eac066.js";import"./Integer-f7f172c9.js";import"./index-7e54d59e.js";import"./Avatar-b61e760c.js";import"./ResizeHandler-c2d89e75.js";import"./employee-6f8dc3b6.js";import"./index-69c6fd40.js";import"./index-40728f1b.js";import"./Link-39a6449b.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-0cd31373.js";import"./index-65aa6e2e.js";import"./Label-44520d2b.js";import"./index-c74c9f7f.js";import"./index-8e334614.js";import"./index-4fbe5b1e.js";import"./Popover-e0a9892e.js";import"./PopupUtils-6f7aa5d8.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-20392ac5.js";import"./FocusableElements-81dc3a15.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-26bcc635.js";import"./BrowserScrollbar.css-6733af99.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./defaults-4e63f125.js";import"./ChartContainer-2d400d45.js";import"./index-bf80872f.js";import"./i18n-defaults-1fd9ada1.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./useCancelAnimationFallback-454996a1.js";import"./generateCategoricalChart-23859510.js";import"./index-b580f7e8.js";import"./YAxisTicks-250ffa18.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-2bbb66e0.js";import"./ChartDataLabel-45ebda89.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-f72f386b.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./useIsRTL-8f68c7d5.js";function $r(e={}){const{wrapper:t}=Object.assign({},p(),e.components);return t?r.jsx(t,Object.assign({},e,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),e.components);return r.jsxs(r.Fragment,{children:[r.jsx(h,{of:d}),`
`,r.jsx(a,{}),`
`,r.jsx(o.h2,{id:"example",children:"Example"}),`
`,r.jsx(i,{of:m}),`
`,r.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(s,{of:m}),`
`,r.jsx("br",{}),`
`,r.jsx(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(o.h3,{id:"with-custom-color",children:"With custom color"}),`
`,r.jsx(i,{of:l}),`
`,r.jsx(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(i,{of:x}),`
`,r.jsx(o.h3,{id:"with-stacks",children:"With Stacks"}),`
`,r.jsx(i,{of:j}),`
`,r.jsx(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(i,{of:f}),`
`,r.jsx(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(i,{of:u}),`
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
`,r.jsx(i,{of:g}),`
`,r.jsx(o.h2,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r.jsx(i,{of:C}),`
`,r.jsx(c,{})]})}}export{$r as default};
//# sourceMappingURL=ColumnChart-e728b17e.js.map
