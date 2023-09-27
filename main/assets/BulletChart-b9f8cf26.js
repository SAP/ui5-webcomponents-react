import{j as t}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-8c555a75.js";import{D as a}from"./DocsHeader-40b1a17f.js";import{F as l}from"./Footer-d304da71.js";import"./index-f1f2c4b1.js";import{M as h,C as o}from"./chunk-S4VUQJ4A-e8e37c71.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-34023f67.js";import{u as n}from"./index-59d6410c.js";import"./react-jss.esm-2e5f50f2.js";import"./index-0274787e.js";import"./iframe-c44915d3.js";import"../sb-preview/runtime.js";import"./UI5Element-e590cd60.js";import"./CustomElementsScopeUtils-264b8a39.js";import"./withWebComponent-b4c67a1a.js";import"./utils-e9940b93.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-b897d66f.js";import"./Icons-65b34360.js";import"./decline-2f6198d2.js";import"./i18n-defaults-bdef1cce.js";import"./information-e97f915a.js";import"./alert-7494fabe.js";import"./class-map-e1b423a4.js";import"./Button-4505b9f6.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-d5195a49.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-203b56de.js";import"./index-70ec8fc4.js";import"./Integer-f7f172c9.js";import"./index-b0b14adb.js";import"./Avatar-60d18bb8.js";import"./ResizeHandler-34ecee99.js";import"./employee-78fe46d2.js";import"./index-4860fa40.js";import"./index-1f39bd6d.js";import"./Link-a373b451.js";import"./WrappingType-b81e595a.js";import"./index-480f63b1.js";import"./TableOfContent-3c18a580.js";import"./index-17bba2ec.js";import"./Label-69062358.js";import"./index-c74c9f7f.js";import"./index-492ce928.js";import"./index-d3f57d49.js";import"./Popover-742c9988.js";import"./PopupUtils-f407c5e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97942203.js";import"./FocusableElements-d024bb16.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-ecc46a93.js";import"./BrowserScrollbar.css-4a87524a.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./DemoProps-4c4a52a7.js";import"./index-99d317a4.js";import"./YAxisTicks-1dc0e103.js";import"./ChartContainer-f4125fe5.js";import"./index-aeb67831.js";import"./i18n-defaults-c3ad23f6.js";import"./I18nContext-dd74d568.js";import"./throttle-e28860fd.js";import"./isString-529da971.js";import"./generateCategoricalChart-998608b5.js";import"./index-b580f7e8.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-93700622.js";import"./defaults-8f21b6d0.js";import"./ChartDataLabel-b2cbef0f.js";import"./staticProps-d8b65b3f.js";import"./useLongestYAxisLabel-eb522d33.js";import"./useOnClickInternal-7ffac7fa.js";import"./react-content-loader.es-27eb8e7e.js";import"./ComposedChart-51c9ed81.js";import"./Line-1e152cd1.js";import"./Scatter-6c0d2018.js";import"./useIsRTL-9db2a057.js";function Vt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-b9f8cf26.js.map
