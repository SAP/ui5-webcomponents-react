import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-9e5188af.js";import{D as a}from"./DocsHeader-62d8c29a.js";import{F as l}from"./Footer-0ab24177.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-S4VUQJ4A-f913ec15.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-28d007b8.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-3b0c2088.js";import"./iframe-7b61d7fb.js";import"../sb-preview/runtime.js";import"./UI5Element-6dcea8dd.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7d7e5133.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b7f7d9e7.js";import"./Icons-e937042c.js";import"./decline-d1fe7fdd.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-a40f0e71.js";import"./class-map-0ab40ab9.js";import"./Button-6bb9ed58.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-d675a36d.js";import"./index-bb1f9706.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-5ee8a8c4.js";import"./index-9f3d62b1.js";import"./Integer-f7f172c9.js";import"./index-61902fdf.js";import"./Avatar-faa225d6.js";import"./ResizeHandler-e83234a4.js";import"./employee-f0b5ef8f.js";import"./index-c5b53353.js";import"./index-645b17d2.js";import"./Link-34530090.js";import"./WrappingType-b81e595a.js";import"./index-fb6e8b5e.js";import"./TableOfContent-36a09441.js";import"./index-b8f22ecb.js";import"./Label-c4db564a.js";import"./index-b42968db.js";import"./index-b591dd17.js";import"./index-80ffa7ff.js";import"./Popover-8ece70a3.js";import"./PopupsCommon.css-2b73575b.js";import"./FocusableElements-ae22402e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-22391551.js";import"./index-d203965f.js";import"./mapValues-e5c6f517.js";import"./_baseForOwn-24231fc1.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-00f63d78.js";import"./_baseUniq-edf521f4.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-2f47d6ef.js";import"./ChartContainer-0fbb3c15.js";import"./index-bd1059d6.js";import"./i18n-defaults-a506bd94.js";import"./I18nContext-dd74d568.js";import"./throttle-369be843.js";import"./isString-88f57f17.js";import"./generateCategoricalChart-63205db5.js";import"./index-b580f7e8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-a39ebbc2.js";import"./defaults-c95d0da4.js";import"./ChartDataLabel-1c988e24.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-6e10173e.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-7c6c2f04.js";import"./Line-0acbfdb0.js";import"./Scatter-4882fa7e.js";import"./useIsRTL-f58f04b0.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
`,t.jsx(l,{})]})}}export{Qt as default};
//# sourceMappingURL=BulletChart-a88434d1.js.map
