import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-0dbb9652.js";import{D as a}from"./DocsHeader-93510fe5.js";import{F as l}from"./Footer-2630401a.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-HLWAVYOI-ef9124d6.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-b672e5d6.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-ca577f17.js";import"./iframe-98d6bf96.js";import"../sb-preview/runtime.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-085ae741.js";import"./Icons-aa504494.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-a64dbe13.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-9804ffd1.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-da201040.js";import"./Integer-f7f172c9.js";import"./index-853e2444.js";import"./Avatar-d7b0dbe0.js";import"./ResizeHandler-a1ba39c5.js";import"./employee-bd01b92f.js";import"./index-e5a5ffc5.js";import"./index-f8782e5c.js";import"./Link-6d4f6070.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-316f4349.js";import"./index-82ce7147.js";import"./Label-7e3ff047.js";import"./index-c74c9f7f.js";import"./index-b72b4a11.js";import"./index-3d93527f.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-eca8fe57.js";import"./ChartContainer-c58d0298.js";import"./index-d0775cfe.js";import"./i18n-defaults-925f41f7.js";import"./I18nContext-dd74d568.js";import"./throttle-1a78f35a.js";import"./isString-8430bca4.js";import"./generateCategoricalChart-a93bf3dd.js";import"./tiny-invariant-dd7d57d2.js";import"./isPlainObject-9b87b748.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-b77f44d6.js";import"./defaults-5f9caf57.js";import"./ChartDataLabel-6ea8b9fd.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-c1093d6c.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-6f8f2540.js";import"./Line-2051afe8.js";import"./Scatter-ce712dca.js";import"./useIsRTL-fd85e99a.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-d96bcbc3.js.map
