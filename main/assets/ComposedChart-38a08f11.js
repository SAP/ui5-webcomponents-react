import{j as r}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-e26fe270.js";import{D as a}from"./DocsHeader-31b4cd8e.js";import{F as h}from"./Footer-515737ac.js";import"./index-f1f2c4b1.js";import{M as c,C as t}from"./chunk-S4VUQJ4A-18fb694d.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-4eaaca32.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-c0ca7266.js";import"./iframe-becc6373.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-c3be52fc.js";import"./Integer-f7f172c9.js";import"./index-15fbe6ab.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-0681a04b.js";import"./index-58775084.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-480f63b1.js";import"./TableOfContent-2d27733e.js";import"./index-6989d869.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-c70f02b9.js";import"./index-b607e9e5.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-789aae24.js";import"./index-99d317a4.js";import"./defaults-8c41c09b.js";import"./ChartContainer-69774445.js";import"./index-aeb67831.js";import"./i18n-defaults-c3ad23f6.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./YAxisTicks-8de78094.js";import"./generateCategoricalChart-7d3a07c8.js";import"./index-b580f7e8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-5102c3ce.js";import"./ChartDataLabel-cf38ddf5.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-68994f6a.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-f147e138.js";import"./Line-de5ca0c1.js";import"./Scatter-00ce53cb.js";import"./useIsRTL-9db2a057.js";function to(e={}){const{wrapper:i}=Object.assign({},p(),e.components);return i?r.jsx(i,Object.assign({},e,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),e.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
`,r.jsx(h,{})]})}}export{to as default};
//# sourceMappingURL=ComposedChart-38a08f11.js.map
