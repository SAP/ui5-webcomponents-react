import{j as r}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-583d3a91.js";import{D as a}from"./DocsHeader-81c46c03.js";import{F as h}from"./Footer-7faaf78e.js";import"./index-f1f2c4b1.js";import{M as c,C as e}from"./chunk-S4VUQJ4A-e99a66c2.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-a8bf117e.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0e05e1af.js";import"./iframe-666939ef.js";import"../sb-preview/runtime.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-dbbb1c9a.js";import"./class-map-0ab40ab9.js";import"./Button-02dfef34.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d5d083dd.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./index-2a4f8eb8.js";import"./Integer-f7f172c9.js";import"./index-62c9d52f.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-2d56461f.js";import"./index-e5cce8a0.js";import"./Link-498d09c2.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-b396612b.js";import"./index-f4002e78.js";import"./Label-287c3220.js";import"./index-b42968db.js";import"./index-13ea27ec.js";import"./index-85028799.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-7d2d6ce3.js";import"./index-99d317a4.js";import"./defaults-1c909bbd.js";import"./ChartContainer-cb74817a.js";import"./index-b28d3bd3.js";import"./i18n-defaults-456fcfbf.js";import"./I18nContext-dd74d568.js";import"./throttle-369be843.js";import"./isString-88f57f17.js";import"./YAxisTicks-2fe0f6ab.js";import"./generateCategoricalChart-50cb129d.js";import"./index-b580f7e8.js";import"./debounce-afefed63.js";import"./useTooltipFormatter-d160864b.js";import"./ChartDataLabel-540a2ab1.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-e1191fe6.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-12861a8c.js";import"./Line-403762af.js";import"./Scatter-01abc2ad.js";function ro(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?r.jsx(i,Object.assign({},t,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
`,r.jsx(h,{})]})}}export{ro as default};
//# sourceMappingURL=ComposedChart-e9046980.js.map
