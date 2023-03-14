import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-3a010e1c.js";import{D as h}from"./DocsHeader-94a5e897.js";import{F as c}from"./Footer-b60b5166.js";import"./index-f1f749bf.js";import{M as d,C as o}from"./index-023c5086.js";import"./chunk-PCJTTTQV-7a0b3678.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as u,D as n,W as f,a as g,L as b}from"./BulletChart.stories-2c0d0e19.js";import{u as a}from"./index-4fb8b842.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-d86028b0.js";import"./iframe-e0e4877e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-876771f0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-6bc67b6a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-57eaac56.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-f15ae098.js";import"./TableOfContent-c9cdbd2b.js";import"./index-cf25ee95.js";import"./Link-687260e5.js";import"./WrappingType-b81e595a.js";import"./index-3f8f5b98.js";import"./Label-040efebd.js";import"./index-96c5f47c.js";import"./Footer.module-f90cad7d.js";import"./index-084bb0f0.js";import"./Popover-54e30804.js";import"./Integer-f7f172c9.js";import"./PopupsCommon.css-d3649668.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-18-2bb9dade.js";import"./DemoProps-9cd0a46b.js";import"./index-99d317a4.js";import"./YAxisTicks-b0f72e93.js";import"./ChartContainer-aa5a91a7.js";import"./index-bdf14a6c.js";import"./i18n-defaults-9da374be.js";import"./I18nContext-bef5b452.js";import"./debounce-bc2bf61c.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-1f4c643c.js";import"./throttle-28509771.js";import"./index-4d501b15.js";import"./debounce-5c77766a.js";import"./useTooltipFormatter-d9273b2d.js";import"./defaults-e856afaf.js";import"./ChartDataLabel-c0a98c36.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-57a93c67.js";import"./useOnClickInternal-d27d7c1e.js";import"./react-content-loader.es-de0c8b5a.js";import"./ComposedChart-99272e02.js";import"./Line-a75d0228.js";import"./Scatter-1239ce7a.js";import"./useIsRTL-4cfef02b.js";function ot(i={}){const{wrapper:m}=Object.assign({},a(),i.components);return m?r(m,Object.assign({},i,{children:r(e,{})})):e();function e(){const t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},a(),i.components);return p(s,{children:[r(d,{of:u}),`
`,r(h,{}),`
`,r(t.h2,{children:"Example"}),`
`,r(o,{of:n}),`
`,r(t.h2,{children:"Properties"}),`
`,r(l,{of:n}),`
`,r("br",{}),`
`,r(t.h2,{children:"Usage Notes"}),`
`,p(t.p,{children:[`In order to display the "Bullet" lines in the chart, you have to configure which measure should be rendered as bullet line.
You can do this via the `,r(t.code,{children:"measures"})," array:"]}),`
`,r(t.pre,{children:r(t.code,{className:"language-jsx",children:`<BulletChart
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
`,r("br",{}),`
`,r(t.h2,{children:"More Examples"}),`
`,r(t.h3,{children:"With Custom Size"}),`
`,r(o,{of:f}),`
`,r(t.h3,{children:"With Highlighted Measures"}),`
`,r(o,{of:g}),`
`,r(t.h3,{children:"Loading Placeholder"}),`
`,r(o,{of:b}),`
`,r(c,{})]})}}export{ot as default};
//# sourceMappingURL=BulletChart-82c76e01.js.map
