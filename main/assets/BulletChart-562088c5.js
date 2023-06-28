import{j as t}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-8f34a183.js";import{D as a}from"./DocsHeader-d26da1f4.js";import{F as l}from"./Footer-d2d9ca2f.js";import"./index-ebeaab24.js";import{M as h,C as o}from"./chunk-PCJTTTQV-62f36a12.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-21340889.js";import{u as n}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-81c4f7c8.js";import"./iframe-0e5478f2.js";import"../sb-preview/runtime.js";import"./UI5Element-01913b1f.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-0a4d58ef.js";import"./Icons-d46a51e9.js";import"./decline-1fd321dc.js";import"./i18n-defaults-80781f7e.js";import"./information-c8e84372.js";import"./class-map-6a9bd920.js";import"./Button-3960a0de.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-cd9e7ac3.js";import"./index-41cc0703.js";import"./Integer-f7f172c9.js";import"./index-49bbaebe.js";import"./Avatar-0a66eae5.js";import"./ResizeHandler-edd29a36.js";import"./employee-a105984c.js";import"./index-3f04a494.js";import"./index-af3f90e9.js";import"./Link-daa8ef8a.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./TableOfContent-41f72179.js";import"./index-e705922c.js";import"./Label-a83eb715.js";import"./index-9c09ad76.js";import"./index-d49f54f4.js";import"./index-e3c1aaf5.js";import"./Popover-6ae302f4.js";import"./PopupUtils-4b9a91b6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-d689758d.js";import"./FocusableElements-426d0dfa.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./YAxisTicks-2dcb502c.js";import"./ChartContainer-eaecc74e.js";import"./index-b2349760.js";import"./i18n-defaults-d9fa5553.js";import"./I18nContext-cdb50611.js";import"./throttle-6f27c407.js";import"./isString-0886f00f.js";import"./generateCategoricalChart-b477642a.js";import"./index-f50b85d6.js";import"./debounce-b93ea6a0.js";import"./useTooltipFormatter-2ce8fa55.js";import"./defaults-929dce82.js";import"./ChartDataLabel-73a96dc8.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-f01d645f.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-f9778884.js";import"./Line-49abf738.js";import"./Scatter-39118191.js";function Vt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-562088c5.js.map
