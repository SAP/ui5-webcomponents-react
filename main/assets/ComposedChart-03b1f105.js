import{j as r,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-f699ea68.js";import{D as c}from"./DocsHeader-ac0c999a.js";import{F as d}from"./Footer-ac07eb43.js";import"./index-f1f749bf.js";import{M as l,C as e}from"./chunk-PCJTTTQV-9fdac538.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as b,d as W,e as x,L}from"./ComposedChart.stories-c9c03555.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-328480cf.js";import"./iframe-02fbf49e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-3172a531.js";import"./TableOfContent-37189371.js";import"./index-68df259c.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-88346384.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-98a33e29.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-b0fb427c.js";import"./index-99d317a4.js";import"./defaults-00141738.js";import"./ChartContainer-503e3a16.js";import"./index-38c62efb.js";import"./i18n-defaults-f914d614.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./YAxisTicks-c1ec3dd5.js";import"./generateCategoricalChart-10f695ef.js";import"./index-4d501b15.js";import"./debounce-bee6fd25.js";import"./useTooltipFormatter-7be8c082.js";import"./ChartDataLabel-2f5ad38d.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-83e7b1aa.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-ea49f9db.js";import"./Line-ce3d6e71.js";import"./Scatter-f95c3270.js";function oo(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?r(i,Object.assign({},t,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),t.components);return m(h,{children:[r(l,{of:f}),`
`,r(c,{}),`
`,r(o.h2,{id:"example",children:"Example"}),`
`,r(e,{of:p}),`
`,r(o.h2,{id:"properties",children:"Properties"}),`
`,r(s,{of:p}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r(o.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r(e,{of:u}),`
`,r(o.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r(e,{of:g}),`
`,r(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r(e,{of:C}),`
`,r(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<ComposedChart
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
`,r(e,{of:b}),`
`,r(o.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r(e,{of:W}),`
`,r(o.h3,{id:"with-formatted-secondary-axis",children:"With Formatted Secondary Axis"}),`
`,r(e,{of:x}),`
`,r(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r(e,{of:L}),`
`,r(d,{})]})}}export{oo as default};
//# sourceMappingURL=ComposedChart-03b1f105.js.map
