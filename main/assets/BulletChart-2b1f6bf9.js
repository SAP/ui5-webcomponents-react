import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-d8bb041f.js";import{D as a}from"./DocsHeader-d0b74f07.js";import{F as l}from"./Footer-b1def5e3.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-HLWAVYOI-577e40d3.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-465f0f8d.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-825df3e6.js";import"./iframe-026e5bdf.js";import"../sb-preview/runtime.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./withWebComponent-f146e44d.js";import"./utils-85c0effb.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./information-ff75d6c3.js";import"./alert-fa33aca2.js";import"./class-map-5b190712.js";import"./Button-f20bbbdf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-a1ecaff4.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./index-2ca57cb5.js";import"./Integer-f7f172c9.js";import"./index-eeffdb9c.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./index-88d2d023.js";import"./index-b8c3cd34.js";import"./Link-0dce4afc.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-3af5c55e.js";import"./index-2a6e4ea0.js";import"./Label-025b0296.js";import"./index-c74c9f7f.js";import"./index-e520ff97.js";import"./index-08937dea.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./index-f82c8853.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-38a3d04d.js";import"./ChartContainer-10be7219.js";import"./index-5c33297b.js";import"./i18n-defaults-3e7d7856.js";import"./I18nContext-dd74d568.js";import"./throttle-1a78f35a.js";import"./isString-8430bca4.js";import"./generateCategoricalChart-9614ca09.js";import"./tiny-invariant-dd7d57d2.js";import"./isPlainObject-9b87b748.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-210c943e.js";import"./defaults-09073625.js";import"./ChartDataLabel-01c5c64d.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-4ce321e9.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-7495b007.js";import"./Line-45f078e5.js";import"./Scatter-28e19af8.js";import"./useIsRTL-db86ce09.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-2b1f6bf9.js.map
