import{j as r}from"./jsx-runtime-b5ed1ca8.js";import{C as s}from"./DomRefTable.module-20a17752.js";import{D as a}from"./DocsHeader-5d2e6e6d.js";import{F as h}from"./Footer-a12681c7.js";import"./index-64f120e9.js";import{M as c,C as e}from"./chunk-PCJTTTQV-dd96a6af.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as d,D as m,W as l,a as x,b as j,c as f,d as u,e as g,L as C}from"./ComposedChart.stories-66d27589.js";import{u as p}from"./index-de4e61b4.js";import"./react-jss.esm-a429ae4e.js";import"./inheritsLoose-93e09647.js";import"./index-7e57121b.js";import"./iframe-0ab8965f.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./slot-76e48863.js";import"./Icon-46afc304.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-fc32fe45.js";import"./Button-3c41aad1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-336951e7.js";import"./clsx.m-1229b3e0.js";import"./index-d460da36.js";import"./ThemingParameters-f4b4144e.js";import"./Import-23c9a4e6.js";import"./TableOfContent-3517adb9.js";import"./index-fe573db0.js";import"./Link-20aa90b6.js";import"./WrappingType-b81e595a.js";import"./index-a140c2c7.js";import"./Label-51e2d33c.js";import"./index-7bf58b0a.js";import"./index-e9d3835d.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-02d033ae.js";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-0b782d3f.js";import"./index-99d317a4.js";import"./defaults-0300823a.js";import"./ChartContainer-bf19ab30.js";import"./index-7f99f8b5.js";import"./i18n-defaults-c061e17d.js";import"./I18nContext-0b0a9f3e.js";import"./throttle-e87f3bdd.js";import"./isString-08195b8f.js";import"./YAxisTicks-26bf3be9.js";import"./generateCategoricalChart-99a05059.js";import"./index-4d501b15.js";import"./debounce-8390a477.js";import"./useTooltipFormatter-1f5ceadb.js";import"./ChartDataLabel-cdb22c8e.js";import"./staticProps-86b3f6fa.js";import"./useLongestYAxisLabel-e8b26d18.js";import"./useOnClickInternal-9d3345b5.js";import"./react-content-loader.es-81ae82e1.js";import"./ComposedChart-5d2bea67.js";import"./Line-0e556985.js";import"./Scatter-28a16340.js";function Zr(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?r.jsx(i,Object.assign({},t,{children:r.jsx(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},p(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(c,{of:d}),`
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
`,r.jsx(h,{})]})}}export{Zr as default};
//# sourceMappingURL=ComposedChart-0bf65d2c.js.map
