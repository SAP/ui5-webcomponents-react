import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-d28202ae.js";import{D as a}from"./DocsHeader-2dc93259.js";import{F as l}from"./Footer-a27b3765.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-S4VUQJ4A-6079bfc4.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-e5ff7e1f.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-7fca83fe.js";import"./iframe-724310a4.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-930470f5.js";import"./Integer-f7f172c9.js";import"./index-24682cac.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-b089c4b0.js";import"./index-25ebe629.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-e1019ca8.js";import"./TableOfContent-cc6ceb13.js";import"./index-74db5996.js";import"./Label-2351773c.js";import"./index-c74c9f7f.js";import"./index-2541bd1b.js";import"./index-7dd95209.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-67ed6e32.js";import"./ChartContainer-840c7e0a.js";import"./index-b4758f5a.js";import"./i18n-defaults-f9eebbcc.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./generateCategoricalChart-f05559f2.js";import"./index-b580f7e8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-c082403f.js";import"./defaults-af432bf1.js";import"./ChartDataLabel-a5b692d9.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-37f15e1b.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-ed0125ef.js";import"./Line-d8ee6492.js";import"./Scatter-86c4d8b4.js";import"./useIsRTL-fd85e99a.js";function Vt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsx(r.h2,{id:"example",children:"Example"}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(s,{of:p}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"usage-notes",children:"Usage Notes"}),`
`,t.jsxs(r.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,t.jsx(r.code,{children:"measures"})," array:"]}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-jsx",children:`<BulletChart
  data={
    [
      /* data */
    ]
  }
  dimensions={
    [
      /* dimensions */
    ]
  }
  measures={[
    {
      accessor: 'actuals',
      label: 'Actual Revenue',
      type: 'primary' // this will be the primary bar
    },
    {
      accessor: 'target',
      label: 'Planned Target Revenue',
      type: 'comparison' // this will be the bullet line
    }
  ]}
/>
`})}),`
`,t.jsx("br",{}),`
`,t.jsx(r.h2,{id:"more-examples",children:"More Examples"}),`
`,t.jsx(r.h3,{id:"with-custom-size",children:"With Custom Size"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(r.h3,{id:"with-highlighted-measures",children:"With Highlighted Measures"}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(r.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,t.jsx(o,{of:x}),`
`,t.jsx(l,{})]})}}export{Vt as default};
//# sourceMappingURL=BulletChart-3af26222.js.map
