import{j as t}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-7b7d092b.js";import{D as a}from"./DocsHeader-c1f06e8c.js";import{F as l}from"./Footer-9dcd6fb2.js";import"./index-ebeaab24.js";import{M as h,C as o}from"./chunk-PCJTTTQV-f6245022.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-5d152a12.js";import{u as n}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-498a437d.js";import"./iframe-9a58d1ec.js";import"../sb-preview/runtime.js";import"./UI5Element-978c7ec7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-87626f33.js";import"./Icons-24533df9.js";import"./decline-2dc3f691.js";import"./i18n-defaults-80781f7e.js";import"./information-573ff8e0.js";import"./class-map-6a9bd920.js";import"./Button-c3cdbc47.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0421cb7d.js";import"./index-fc58bb5f.js";import"./Integer-f7f172c9.js";import"./index-832cea8d.js";import"./Avatar-02045306.js";import"./ResizeHandler-d96d99c4.js";import"./employee-397ee2c5.js";import"./index-83de8902.js";import"./index-06f0cfcb.js";import"./Link-a59da54b.js";import"./WrappingType-b81e595a.js";import"./index-4c0ab015.js";import"./TableOfContent-cf57f367.js";import"./index-90e35494.js";import"./Label-3a4ee32a.js";import"./index-9c09ad76.js";import"./index-ea8449e1.js";import"./index-e7d7a0c7.js";import"./Popover-24cfcc49.js";import"./PopupUtils-7b496d9b.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-aca8c783.js";import"./FocusableElements-ba36fca8.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./YAxisTicks-49553d25.js";import"./ChartContainer-caf6f1dd.js";import"./index-f15f3c03.js";import"./i18n-defaults-a742ff0b.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./generateCategoricalChart-7e42aa63.js";import"./index-f50b85d6.js";import"./debounce-7c4b2ae3.js";import"./useTooltipFormatter-e9ee1d2d.js";import"./defaults-d8e841d9.js";import"./ChartDataLabel-58d51406.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-fff1b804.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-2905207b.js";import"./Line-1d031ff1.js";import"./Scatter-c5cf1113.js";function Vt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-2a4cf064.js.map
