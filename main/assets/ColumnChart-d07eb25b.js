import{j as r,a as m,F as c}from"./jsx-runtime-670450c2.js";import{C as h}from"./DomRefTable.module-b27921a9.js";import{D as s}from"./DocsHeader-09122a24.js";import{F as d}from"./Footer-0e91b0fd.js";import"./index-f1f749bf.js";import{M as l,C as t}from"./chunk-PCJTTTQV-ace93457.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as f,D as p,W as u,a as g,b as C,c as W,L as b,d as L,e as M}from"./ColumnChart.stories-b0e79e98.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-83a65795.js";import"./iframe-a1f40a2f.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-da505e61.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-2eaec75e.js";import"./TableOfContent-b4d2d5e8.js";import"./index-5f561a7c.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-408f3bf6.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-fa665bb7.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./defaults-b0f6e17a.js";import"./ChartContainer-379c2b60.js";import"./index-94593310.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./isString-77c0f675.js";import"./useCancelAnimationFallback-df54d3d0.js";import"./generateCategoricalChart-67298e38.js";import"./throttle-0d486062.js";import"./index-4d501b15.js";import"./YAxisTicks-431e3dd3.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-85137db5.js";import"./ChartDataLabel-6ef69f51.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-fe8ee200.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";function Zr(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?r(e,Object.assign({},i,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},a(),i.components);return m(c,{children:[r(l,{of:f}),`
`,r(s,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(t,{of:p}),`
`,r(o.h2,{children:"Properties"}),`
`,r(h,{of:p}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With custom color"}),`
`,r(t,{of:u}),`
`,r(o.h3,{children:"With Secondary Dimension"}),`
`,r(t,{of:g}),`
`,r(o.h3,{children:"With Stacks"}),`
`,r(t,{of:C}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(t,{of:W}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(t,{of:b}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,m(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
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
`,r(t,{of:L}),`
`,r(o.h2,{children:"With Highlighted Measures"}),`
`,r(t,{of:M}),`
`,r(d,{})]})}}export{Zr as default};
//# sourceMappingURL=ColumnChart-d07eb25b.js.map
