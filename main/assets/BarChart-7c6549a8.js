import{j as r,a as m,F as h}from"./jsx-runtime-670450c2.js";import{C as c}from"./DomRefTable.module-3e9e8f2b.js";import{D as s}from"./DocsHeader-cb3d37d5.js";import{F as d}from"./Footer-4998e070.js";import"./index-f1f749bf.js";import{M as l,C as e}from"./chunk-PCJTTTQV-d264cdc0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as b,L as W,d as L,e as D}from"./BarChart.stories-931bf69f.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-3dd802da.js";import"./iframe-992ab87e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-492f6327.js";import"./TableOfContent-24d69342.js";import"./index-3e246e14.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-024d0820.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-9eb9b7cf.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./BarChart-785c62db.js";import"./index-99d317a4.js";import"./defaults-58b6f751.js";import"./ChartContainer-b0e7a6b4.js";import"./index-83f5c3ce.js";import"./i18n-defaults-57d9744b.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-3cfd5163.js";import"./generateCategoricalChart-0d546e03.js";import"./index-4d501b15.js";import"./YAxisTicks-bf401303.js";import"./debounce-c3e37d29.js";import"./useTooltipFormatter-2a0c1c93.js";import"./ChartDataLabel-33cd11bc.js";import"./staticProps-9dd6f0f9.js";import"./useOnClickInternal-d27d7c1e.js";import"./Placeholder-d641c0af.js";import"./react-content-loader.es-de0c8b5a.js";function $r(i={}){const{wrapper:t}=Object.assign({},a(),i.components);return t?r(t,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(h,{children:[r(l,{of:f}),`
`,r(s,{}),`
`,r(o.h2,{id:"example",children:"Example"}),`
`,r(e,{of:p}),`
`,r(o.h2,{id:"properties",children:"Properties"}),`
`,r(c,{of:p}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{id:"more-examples",children:"More Examples"}),`
`,r(o.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r(e,{of:u}),`
`,r(o.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r(e,{of:g}),`
`,r(o.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r(e,{of:C}),`
`,r(o.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r(e,{of:b}),`
`,r(o.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r(e,{of:W}),`
`,r(o.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<BarChart
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
`,r(o.h3,{id:"with-highlighted-measure",children:"With Highlighted Measure"}),`
`,r(e,{of:D}),`
`,r(d,{})]})}}export{$r as default};
//# sourceMappingURL=BarChart-7c6549a8.js.map
