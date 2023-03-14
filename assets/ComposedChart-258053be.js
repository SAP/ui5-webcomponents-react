import{j as r,a as n,F as c}from"./jsx-runtime-670450c2.js";import{C as s}from"./DomRefTable.module-41e2a724.js";import{D as h}from"./DocsHeader-6d1c2bce.js";import{F as d}from"./Footer-fd5b7b86.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./index-058ab9af.js";import"./chunk-PCJTTTQV-5c549173.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,d as b,e as L,L as M}from"./ComposedChart.stories-e848e6cc.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-1e4ab027.js";import"./iframe-980aec02.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-3f1501ef.js";import"./TableOfContent-3f224c4a.js";import"./index-529f63d8.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-d6b28517.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-ab2fbe22.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./index-1303ba22.js";import"./index-99d317a4.js";import"./defaults-8f1a69d7.js";import"./ChartContainer-d4c69876.js";import"./index-94593310.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./isString-77c0f675.js";import"./YAxisTicks-236ebe12.js";import"./generateCategoricalChart-6e1bfc84.js";import"./throttle-0d486062.js";import"./index-4d501b15.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-3b0035b9.js";import"./ChartDataLabel-5d2cccb5.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-9e1f45cd.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-e8faaebf.js";import"./Line-90eb87de.js";import"./Scatter-4d5d2454.js";function no(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(m,{})})):m();function m(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return n(c,{children:[r(l,{of:f}),`
`,r(h,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(t,{of:p}),`
`,r(o.h2,{children:"Properties"}),`
`,r(s,{of:p}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With Custom Color"}),`
`,r(t,{of:u}),`
`,r(o.h3,{children:"With Data Labels"}),`
`,r(t,{of:g}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(t,{of:C}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,n(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
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
`,r(t,{of:W}),`
`,r(o.h3,{children:"With Highlighted Measures"}),`
`,r(t,{of:b}),`
`,r(o.h3,{children:"With Formatted Secondary Axis"}),`
`,r(t,{of:L}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(t,{of:M}),`
`,r(d,{})]})}}export{no as default};
//# sourceMappingURL=ComposedChart-258053be.js.map
