import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import{M as c,C as e}from"./chunk-PCJTTTQV-ad373b6b.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as h}from"./DomRefTable.module-99277c4e.js";import{D as d}from"./DocsHeader-717ab963.js";import{F as l}from"./Footer-19f66ef1.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as L,c as g,L as W,d as b,e as D}from"./LineChart.stories-3cb0faaf.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-c16f0db2.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-e54d2f1d.js";import"./index-ae647a18.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-357a510f.js";import"./TableOfContent-4b60ef9d.js";import"./index-74b60432.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-ca9ec31f.js";import"./Label-ccc234fe.js";import"./index-e56bacd7.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-428e1a72.js";import"./index-99d317a4.js";import"./YAxisTicks-1ed15f91.js";import"./ChartContainer-906d58d0.js";import"./index-f3986e5a.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-4cc1ce12.js";import"./index-4d501b15.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-3fef8887.js";import"./defaults-38843434.js";import"./ChartDataLabel-596673a6.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-fca67883.js";import"./react-content-loader.es-de0c8b5a.js";import"./Line-ee3ed8e7.js";function Zr(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?r(i,Object.assign({},t,{children:r(n,{})})):n();function n(){const o=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),t.components);return p(s,{children:[r(c,{of:f}),`
`,r(d,{}),`
`,r(o.h2,{children:"Example"}),`
`,r(e,{of:m}),`
`,r(o.h2,{children:"Properties"}),`
`,r(h,{of:m}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(o.h2,{children:"More Examples"}),`
`,r(o.h3,{children:"With Custom Color"}),`
`,r(e,{of:u}),`
`,r(o.h3,{children:"With Secondary Dimension"}),`
`,r(e,{of:C}),`
`,r(o.h3,{children:"With Data Labels"}),`
`,r(e,{of:L}),`
`,r(o.h3,{children:"With Formatter"}),`
`,r(e,{of:g}),`
`,r(o.h3,{children:"Loading Placeholder"}),`
`,r(e,{of:W}),`
`,r(o.h3,{children:"With Reference Line"}),`
`,p(o.p,{children:["You can set a reference line to any value by using the ",r(o.code,{children:"referenceLine"})," ",r(o.code,{children:"chartConfig"})," property. ",r(o.code,{children:"referenceLine"})," accepts all properties described ",r(o.a,{href:"https://recharts.org/en-US/api/ReferenceLine",children:"here"}),", but it's recommended to only use ",r(o.code,{children:"label"}),",",r(o.code,{children:"value"})," and ",r(o.code,{children:"color"})," to preserve the intended design."]}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`<LineChart
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
`,r(o.h3,{children:"With Linear Gradient"}),`
`,r(e,{of:D}),`
`,r(o.h4,{children:"Code"}),`
`,r(o.pre,{children:r(o.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,r(l,{})]})}}export{Zr as default};
//# sourceMappingURL=LineChart-277946e8.js.map
