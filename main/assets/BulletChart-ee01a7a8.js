import{j as t}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-8bb2cc9c.js";import{D as a}from"./DocsHeader-8bf31a6e.js";import{F as l}from"./Footer-a66983eb.js";import"./index-ebeaab24.js";import{M as h,C as o}from"./chunk-PCJTTTQV-d3c2c893.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-e914617e.js";import{u as n}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-b374007c.js";import"./iframe-ef582881.js";import"../sb-preview/runtime.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./information-451d615b.js";import"./class-map-18f572ce.js";import"./Button-4160b137.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-a58643fd.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./index-ea035418.js";import"./Integer-f7f172c9.js";import"./index-e8782cbc.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-a6e91fba.js";import"./index-91489cf8.js";import"./Link-057b3642.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./TableOfContent-a6135d52.js";import"./index-c9e548a1.js";import"./Label-7f4aa83d.js";import"./index-9c09ad76.js";import"./index-8e7563b0.js";import"./index-5e3d3a36.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./YAxisTicks-76cde79b.js";import"./ChartContainer-ad8ad54d.js";import"./index-00f1bb0d.js";import"./i18n-defaults-7eea5c5b.js";import"./I18nContext-cdb50611.js";import"./throttle-f7338282.js";import"./isString-bc3e57d7.js";import"./generateCategoricalChart-7f08f2c7.js";import"./index-f50b85d6.js";import"./debounce-8486f6b5.js";import"./useTooltipFormatter-8ce2feff.js";import"./defaults-a083ceb6.js";import"./ChartDataLabel-40b5f0bc.js";import"./staticProps-411b051b.js";import"./useLongestYAxisLabel-a12610da.js";import"./useOnClickInternal-c48662e6.js";import"./react-content-loader.es-627d673d.js";import"./ComposedChart-2f22754c.js";import"./Line-67841877.js";import"./Scatter-66a2708d.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-ee01a7a8.js.map
