import{j as r,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-2f2d69b2.js";import{D as c}from"./DocsHeader-8ec99995.js";import{F as d}from"./Footer-c759063f.js";import"./index-f1f749bf.js";import{M as l,C as e}from"./chunk-PCJTTTQV-45d4e76c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as b,d as W,e as x,L}from"./ComposedChart.stories-de2b1afb.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-51a4be3d.js";import"./iframe-94d29641.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-945986a1.js";import"./TableOfContent-50c5e989.js";import"./index-b94fe035.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-29143832.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-4a4dd216.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-6c93162c.js";import"./index-99d317a4.js";import"./defaults-be1cbaaf.js";import"./ChartContainer-c82025ce.js";import"./index-8d3f977e.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./YAxisTicks-5596a28e.js";import"./generateCategoricalChart-9e06b6cc.js";import"./index-4d501b15.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-606bb37c.js";import"./ChartDataLabel-1ded874f.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-e13f9103.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-a11d908b.js";import"./Line-4c06b540.js";import"./Scatter-dda353e8.js";function oo(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?r(i,Object.assign({},t,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),t.components);return m(h,{children:[r(l,{of:f}),`
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
//# sourceMappingURL=ComposedChart-dbda09f6.js.map
