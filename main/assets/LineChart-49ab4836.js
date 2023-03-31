import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import{M as c,C as o}from"./chunk-PCJTTTQV-e94ee50c.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as d}from"./DomRefTable.module-91defb2c.js";import{D as h}from"./DocsHeader-3b1855ec.js";import{F as l}from"./Footer-2b26a1e1.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as g,c as L,L as b,d as W,e as x}from"./LineChart.stories-acd5181d.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-79d758e5.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-9688201d.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-88fe2bdf.js";import"./TableOfContent-4802ac8a.js";import"./index-9a5cef1b.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-9ff72697.js";import"./Label-ccc234fe.js";import"./index-844e6146.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-1338a873.js";import"./index-99d317a4.js";import"./YAxisTicks-7adf7712.js";import"./ChartContainer-2f941806.js";import"./index-8d3f977e.js";import"./i18n-defaults-c7cc2cc1.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-2d364c1b.js";import"./index-4d501b15.js";import"./debounce-2c3bc435.js";import"./useTooltipFormatter-52a81dd7.js";import"./defaults-34c8cadd.js";import"./ChartDataLabel-80a4973f.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-037a07da.js";import"./react-content-loader.es-de0c8b5a.js";import"./Line-915a7307.js";function Zr(i={}){const{wrapper:t}=Object.assign({},a(),i.components);return t?r(t,Object.assign({},i,{children:r(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),i.components);return p(s,{children:[r(c,{of:f}),`
`,r(h,{}),`
`,r(e.h2,{id:"example",children:"Example"}),`
`,r(o,{of:m}),`
`,r(e.h2,{id:"properties",children:"Properties"}),`
`,r(d,{of:m}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r(o,{of:u}),`
`,r(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r(o,{of:C}),`
`,r(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r(o,{of:g}),`
`,r(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r(o,{of:L}),`
`,r(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r(o,{of:b}),`
`,r(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,p(e.p,{children:["You can set a reference line to any value by using the ",r(e.code,{children:"referenceLine"})," ",r(e.code,{children:"chartConfig"})," property. ",r(e.code,{children:"referenceLine"})," accepts all properties described ",r(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r(e.code,{children:"label"}),",",r(e.code,{children:"value"})," and ",r(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`<LineChart
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
`,r(o,{of:W}),`
`,r(e.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,r(o,{of:x}),`
`,r(e.h4,{id:"code",children:"Code"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
//# sourceMappingURL=LineChart-49ab4836.js.map
