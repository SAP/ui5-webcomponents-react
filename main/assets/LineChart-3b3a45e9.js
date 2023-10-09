import{j as r}from"./jsx-runtime-d079401a.js";import{M as m,C as o}from"./chunk-S4VUQJ4A-dbe541a3.js";import{C as a}from"./DomRefTable.module-44c90cde.js";import{D as c}from"./DocsHeader-f74822a2.js";import{F as d}from"./Footer-5cf52e0c.js";import"./index-f1f2c4b1.js";import{C as h,D as s,W as l,a as x,b as j,c as f,L as u,d as C,e as g}from"./LineChart.stories-75325c5d.js";import{u as p}from"./index-59d6410c.js";import"./iframe-b595b10c.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-869b3892.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-06ca282f.js";import"./Integer-f7f172c9.js";import"./index-5fb17042.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-d21d093a.js";import"./index-54186832.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-7122209e.js";import"./TableOfContent-62c26c90.js";import"./index-131394cb.js";import"./Label-2351773c.js";import"./index-eb083e27.js";import"./index-18b1fc73.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./DemoProps-4c4a52a7.js";import"./LineChart-ae7e172b.js";import"./index-99d317a4.js";import"./YAxisTicks-faa924c2.js";import"./ChartContainer-57709a73.js";import"./index-b4758f5a.js";import"./i18n-defaults-f9eebbcc.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./generateCategoricalChart-b12a5c98.js";import"./index-b580f7e8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-1d865cbd.js";import"./defaults-1f5d9bb1.js";import"./ChartDataLabel-1fa324c2.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-7d05153d.js";import"./react-content-loader.es-27eb8e7e.js";import"./Line-ff492d81.js";import"./useIsRTL-fd85e99a.js";function $r(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?r.jsx(t,Object.assign({},i,{children:r.jsx(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},p(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsx(e.h2,{id:"example",children:"Example"}),`
`,r.jsx(o,{of:s}),`
`,r.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(a,{of:s}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r.jsx(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,r.jsxs(e.p,{children:["You can set a reference line to any value by using the ",r.jsx(e.code,{children:"referenceLine"})," ",r.jsx(e.code,{children:"chartConfig"})," property. ",r.jsx(e.code,{children:"referenceLine"})," accepts all properties described ",r.jsx(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r.jsx(e.code,{children:"label"}),",",r.jsx(e.code,{children:"value"})," and ",r.jsx(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`<LineChart
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
`,r.jsx(o,{of:C}),`
`,r.jsx(e.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,r.jsx(o,{of:g}),`
`,r.jsx(e.h4,{id:"code",children:"Code"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
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
`,r.jsx(d,{})]})}}export{$r as default};
//# sourceMappingURL=LineChart-3b3a45e9.js.map
