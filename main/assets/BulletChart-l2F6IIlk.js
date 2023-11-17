import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-V_iz5pw3.js";import{D as a}from"./DocsHeader-HlAwRvXd.js";import{F as l}from"./Footer-eFiH6U5V.js";import"./index-OjgoNOWw.js";import{M as h,C as o}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import{C as d,D as p,W as c,a as u,L as x}from"./BulletChart.stories-hSpHzQMT.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-9Rd_IMLD.js";import"./iframe-Lw9Evt3s.js";import"../sb-preview/runtime.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-Pjew2RCR.js";import"./Icons-nm0Q71Sx.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./class-map--IQ_mtyb.js";import"./Button-mmkHl5a0.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-74gTEkhE.js";import"./Integer-kog98579.js";import"./index-jnaUnQ4S.js";import"./Avatar-AvAtElJx.js";import"./ResizeHandler-hw9R1O21.js";import"./employee-AJKdaGgo.js";import"./index-FGcl4OpY.js";import"./index-ElgmpuNv.js";import"./Link-4yu6Lagp.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-E9FhblW9.js";import"./index-lbOevkjn.js";import"./Label-h0RP0plm.js";import"./index-QYh6idnL.js";import"./index-yQJZHkj2.js";import"./index-mV7dNsSC.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./DemoProps-6gtoxh9t.js";import"./index-Jm2lAFsC.js";import"./YAxisTicks-uCOmzi-h.js";import"./ChartContainer-4JJcl13t.js";import"./index-Xtag8QaG.js";import"./throttle-NmXmgBk3.js";import"./isString-8_zMhoxi.js";import"./generateCategoricalChart-0AYKekuc.js";import"./tiny-invariant-VyoA2Os1.js";import"./isPlainObject-k2A2ZpFa.js";import"./debounce-F9irgL9Y.js";import"./useTooltipFormatter-hIqN6qat.js";import"./defaults-y9FnyvFJ.js";import"./ChartDataLabel-at9y7LOG.js";import"./staticProps-YAKXJgHU.js";import"./useLongestYAxisLabel-PDah482Y.js";import"./useOnClickInternal-MGInwGCL.js";import"./react-content-loader.es-MhslfaKA.js";import"./ComposedChart-oM5M0bZu.js";import"./Line-HjdhgpvF.js";import"./Scatter-6jNSH9Us.js";import"./useIsRTL-RIxv1AjJ.js";function Zt(i={}){const{wrapper:e}=Object.assign({},n(),i.components);return e?t.jsx(e,Object.assign({},i,{children:t.jsx(m,{})})):m();function m(){const r=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},n(),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(h,{of:d}),`
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
//# sourceMappingURL=BulletChart-l2F6IIlk.js.map
