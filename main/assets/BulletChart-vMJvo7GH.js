import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-kpuBLZsD.js";import{D as a}from"./DocsHeader-Ei-tmaK4.js";import{F as l}from"./Footer-PkKOBGaD.js";import"./index-OjgoNOWw.js";import{M as h,C as o}from"./chunk-HLWAVYOI-uvCVN9Gp.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-LkWlawHN.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-CRQbju0c.js";import"./iframe-xY66R87u.js";import"../sb-preview/runtime.js";import"./UI5Element-OBgzz0fv.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./withWebComponent-6ZcDnwha.js";import"./utils-5CTKRvkw.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-eS-oBj3B.js";import"./alert-SMfrQE5J.js";import"./class-map-dxoND1Lf.js";import"./Button-UDaVhcBU.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-yaLaEhii.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./index-Ww-r9DV9.js";import"./Integer-kog98579.js";import"./index-2TRz3fej.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./index-DTZ9zPJi.js";import"./index-vt5IKEXF.js";import"./Link-Gs09ax_S.js";import"./WrappingType-avPrqc94.js";import"./index-FvozjNxD.js";import"./TableOfContent-LhZ7Qu2W.js";import"./index-TECIvL8m.js";import"./Label-bo0gz_aS.js";import"./index-QYh6idnL.js";import"./index-BrYKujOg.js";import"./index-InMYHlb5.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./index-GL4gBoyB.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./DemoProps-6gtoxh9t.js";import"./index-Jm2lAFsC.js";import"./YAxisTicks-bG0t3dNd.js";import"./ChartContainer-pnyUOn5k.js";import"./index-ftWZSkN-.js";import"./throttle-NPD2LhEd.js";import"./isString-yBrqhg_E.js";import"./debounce-F9irgL9Y.js";import"./useTooltipFormatter-fICME04w.js";import"./defaults-0JJzmY2k.js";import"./ChartDataLabel-vlB1jeVG.js";import"./generateCategoricalChart-mz89WCIP.js";import"./tiny-invariant-VyoA2Os1.js";import"./isPlainObject-hqM_z3iV.js";import"./staticProps-YAKXJgHU.js";import"./useLongestYAxisLabel-tCzhkN-k.js";import"./useOnClickInternal-MGInwGCL.js";import"./react-content-loader.es-MhslfaKA.js";import"./ComposedChart-v62jmLId.js";import"./Line-I-UiAVu4.js";import"./Scatter-OaiDJx8o.js";import"./useIsRTL-8cFGcCtf.js";function Zt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
`,t.jsx(l,{})]})}}export{Zt as default};
//# sourceMappingURL=BulletChart-vMJvo7GH.js.map
