import{j as r,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-f1e04cd9.js";import{D as c}from"./DocsHeader-dd0cab9c.js";import{F as d}from"./Footer-6f037717.js";import"./index-f1f749bf.js";import{M as l,C as e}from"./chunk-PCJTTTQV-0758a203.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as b,d as W,e as x,L}from"./ComposedChart.stories-e5aede66.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-53f0c945.js";import"./iframe-5dc614e4.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f6fac1d6.js";import"./TableOfContent-51c2772d.js";import"./index-b6d55309.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-b86e29db.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-f8732276.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-ee259b73.js";import"./index-99d317a4.js";import"./defaults-1e5f0fd0.js";import"./ChartContainer-e7151b48.js";import"./index-83f5c3ce.js";import"./i18n-defaults-57d9744b.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./YAxisTicks-8084636d.js";import"./generateCategoricalChart-f4bd7c81.js";import"./index-4d501b15.js";import"./debounce-c3e37d29.js";import"./useTooltipFormatter-31164691.js";import"./ChartDataLabel-2752a34d.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-e10f4fab.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-a389ebb2.js";import"./Line-e191c543.js";import"./Scatter-3e8eeb24.js";function oo(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?r(i,Object.assign({},t,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),t.components);return m(h,{children:[r(l,{of:f}),`
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
//# sourceMappingURL=ComposedChart-9e3c9850.js.map
