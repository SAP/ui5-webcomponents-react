import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-KFV4vTNP.js";import{D as a}from"./DocsHeader-aw51gcp2.js";import{F as l}from"./Footer-5HE-tmQI.js";import"./index-OjgoNOWw.js";import{M as h,C as o}from"./chunk-HLWAVYOI-aRY61EAZ.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-GMK_iGpa.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-hjlCGKub.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./withWebComponent-ceo0jn6D.js";import"./utils-CrDMzPRG.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./class-map-JXa0-u4l.js";import"./Button-a5xMWTkk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-oLSBYiL3.js";import"./Integer-kog98579.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./index-2LFs6KZP.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-CFEEopUN.js";import"./index-5G9NmmK_.js";import"./Label-z__cPwIf.js";import"./index-QYh6idnL.js";import"./index-Nq0B0t7P.js";import"./index-BVOpDmmc.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./DemoProps-6gtoxh9t.js";import"./index-Jm2lAFsC.js";import"./YAxisTicks-2mZRgAAI.js";import"./ChartContainer-bprh2aW7.js";import"./index-mRt75dop.js";import"./i18n-defaults-TsGk1om8.js";import"./I18nContext-VUOpdMoH.js";import"./throttle-NmXmgBk3.js";import"./isString-8_zMhoxi.js";import"./generateCategoricalChart-dmVc8FdS.js";import"./tiny-invariant-VyoA2Os1.js";import"./isPlainObject-k2A2ZpFa.js";import"./debounce-F9irgL9Y.js";import"./useTooltipFormatter-eh3TnJ7t.js";import"./defaults-d3yzAkjp.js";import"./ChartDataLabel-Qff_N7kn.js";import"./staticProps-YAKXJgHU.js";import"./useLongestYAxisLabel-ZVrSAWoZ.js";import"./useOnClickInternal-MGInwGCL.js";import"./react-content-loader.es-MhslfaKA.js";import"./ComposedChart--3WQ_MXf.js";import"./Line-ihjrivlh.js";import"./Scatter-GRVgCMyY.js";import"./useIsRTL-fTz-B5lw.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-7AkPd-zr.js.map
