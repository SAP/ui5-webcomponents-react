import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-rVGi012t.js";import{D as a}from"./DocsHeader-sc4weluW.js";import{F as l}from"./Footer-jfdx2u5v.js";import"./index-OjgoNOWw.js";import{M as h,C as o}from"./chunk-HLWAVYOI-UeCpg4wL.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-jY4siwz0.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-visvyNcT.js";import"./iframe-_OlRtZJR.js";import"../sb-preview/runtime.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./withWebComponent-ceo0jn6D.js";import"./utils-CrDMzPRG.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./class-map-JXa0-u4l.js";import"./Button-a5xMWTkk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-WbINX23N.js";import"./Integer-kog98579.js";import"./index-F2xDrKNT.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./index-06AsSkAh.js";import"./index-pvnqkZ_E.js";import"./Link-DluRE2Z1.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-bZnE1URh.js";import"./index-nNeIKPnb.js";import"./Label-z__cPwIf.js";import"./index-QYh6idnL.js";import"./index-2S6zoQWg.js";import"./index-f2x4nzdX.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./DemoProps-6gtoxh9t.js";import"./index-Jm2lAFsC.js";import"./YAxisTicks-Tf9aZziV.js";import"./ChartContainer-j8V-nuwC.js";import"./index-mRt75dop.js";import"./i18n-defaults-TsGk1om8.js";import"./I18nContext-VUOpdMoH.js";import"./throttle-NmXmgBk3.js";import"./isString-8_zMhoxi.js";import"./generateCategoricalChart-R9slvvNA.js";import"./tiny-invariant-VyoA2Os1.js";import"./isPlainObject-k2A2ZpFa.js";import"./debounce-F9irgL9Y.js";import"./useTooltipFormatter-W7g02FN2.js";import"./defaults-p0m9wcod.js";import"./ChartDataLabel-aAV_dOaY.js";import"./staticProps-YAKXJgHU.js";import"./useLongestYAxisLabel-mywZHkKQ.js";import"./useOnClickInternal-MGInwGCL.js";import"./react-content-loader.es-MhslfaKA.js";import"./ComposedChart-0S2aNnbk.js";import"./Line-b0CiuHUp.js";import"./Scatter-Q-vH6Gut.js";import"./useIsRTL-fTz-B5lw.js";function Qt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-SHT9TGey.js.map
