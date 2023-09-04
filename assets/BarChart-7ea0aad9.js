import{j as r}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-6eaea8ef.js";import{D as a}from"./DocsHeader-60c6061f.js";import{F as h}from"./Footer-bc468449.js";import"./index-f1f2c4b1.js";import{M as c,C as e}from"./chunk-S4VUQJ4A-5100a69a.js";import{C as d,D as m,W as l,a as x,b as j,c as f,L as u,d as g,e as C}from"./BarChart.stories-53197659.js";import{u as p}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-bead39d9.js";import"./iframe-57e6b318.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-0c050832.js";import"./Integer-f7f172c9.js";import"./index-dcdbed31.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-11aefe52.js";import"./index-a11ae6e8.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-343af056.js";import"./TableOfContent-811e3a06.js";import"./index-aa5143cc.js";import"./Label-69062358.js";import"./index-b42968db.js";import"./index-f220b36f.js";import"./index-e8d395a3.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./defaults-fa2b6586.js";import"./ChartContainer-dc5acbfb.js";import"./index-aeb67831.js";import"./i18n-defaults-c3ad23f6.js";import"./I18nContext-dd74d568.js";import"./throttle-369be843.js";import"./isString-88f57f17.js";import"./useCancelAnimationFallback-0c0ba39c.js";import"./generateCategoricalChart-2a73f212.js";import"./index-b580f7e8.js";import"./YAxisTicks-c632487c.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-593558c4.js";import"./ChartDataLabel-5669fe33.js";import"./staticProps-d8b65b3f.js";import"./useOnClickInternal-7ffac7fa.js";import"./Placeholder-a1d9078d.js";import"./react-content-loader.es-27eb8e7e.js";import"./useIsRTL-9db2a057.js";function ro(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
`,r.jsx(h,{})]})}}export{ro as default};
//# sourceMappingURL=BarChart-7ea0aad9.js.map
