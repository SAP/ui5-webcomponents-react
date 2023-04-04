import{j as r,a as m,F as c}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-21e4cadd.js";import{D as s}from"./DocsHeader-edb0c9f6.js";import{F as d}from"./Footer-d597c1b7.js";import"./index-f1f749bf.js";import{M as l,C as e}from"./chunk-PCJTTTQV-cea7934e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,L as b,d as L,e as M}from"./ColumnChart.stories-811cd9a8.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-62ac2740.js";import"./iframe-3f23e3a1.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-92912c5c.js";import"./TableOfContent-9c817e9d.js";import"./index-ad45384c.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-199dce77.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-63874160.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-e39822ed.js";import"./ChartContainer-47cf9327.js";import"./index-8d3f977e.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-606f5191.js";import"./generateCategoricalChart-93977a74.js";import"./index-4d501b15.js";import"./YAxisTicks-91ef46eb.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-9c02cdce.js";import"./ChartDataLabel-3d647d41.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-30cec5d3.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";function Zr(i={}){const{wrapper:t}=Object.assign({},a(),i.components);return t?r(t,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(c,{children:[r(l,{of:f}),`
`,r(s,{}),`
`,r(o.h2,{id:"example",children:"Example"}),`
`,r(e,{of:p}),`
`,r(o.h2,{id:"properties",children:"Properties"}),`
`,r(h,{of:p}),`
`,r("br",{}),`
`,r(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r(o.h3,{id:"with-custom-color",children:"With custom color"}),`
`,r(e,{of:u}),`
`,r(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r(e,{of:g}),`
`,r(o.h3,{id:"with-stacks",children:"With Stacks"}),`
`,r(e,{of:C}),`
`,r(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r(e,{of:W}),`
`,r(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r(e,{of:b}),`
`,r(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<ColumnChart
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
`,r(e,{of:L}),`
`,r(o.h2,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,r(e,{of:M}),`
`,r(d,{})]})}}export{Zr as default};
//# sourceMappingURL=ColumnChart-21136ad9.js.map
