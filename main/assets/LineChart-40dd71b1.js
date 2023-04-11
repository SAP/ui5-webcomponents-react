import{j as r,a as p,F as s}from"./jsx-runtime-670450c2.js";import{M as c,C as o}from"./chunk-PCJTTTQV-e425c80a.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{C as d}from"./DomRefTable.module-d75b0032.js";import{D as h}from"./DocsHeader-7a75838b.js";import{F as l}from"./Footer-728fca8f.js";import"./index-f1f749bf.js";import{C as f,D as m,W as u,a as C,b as g,c as L,L as b,d as W,e as x}from"./LineChart.stories-52fe1005.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-3fae4d97.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-1ab7e646.js";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-9e88a6aa.js";import"./TableOfContent-f6cb8f1d.js";import"./index-c077f72e.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-da28895d.js";import"./Label-e3d88218.js";import"./index-0c3ac0fb.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./DemoProps-9cd0a46b.js";import"./LineChart-c567d2bc.js";import"./index-99d317a4.js";import"./YAxisTicks-fdb5c1bf.js";import"./ChartContainer-76e4d9d0.js";import"./index-961add89.js";import"./i18n-defaults-a2281a8e.js";import"./I18nContext-bef5b452.js";import"./throttle-31c0810f.js";import"./isString-77c0f675.js";import"./generateCategoricalChart-b11b53c7.js";import"./index-4d501b15.js";import"./debounce-6203652a.js";import"./useTooltipFormatter-276b00db.js";import"./defaults-296cd15f.js";import"./ChartDataLabel-aed7d38f.js";import"./staticProps-9dd6f0f9.js";import"./useLongestYAxisLabel-b39fe857.js";import"./react-content-loader.es-de0c8b5a.js";import"./Line-89abb744.js";function Zr(i={}){const{wrapper:t}=Object.assign({},a(),i.components);return t?r(t,Object.assign({},i,{children:r(n,{})})):n();function n(){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",h4:"h4"},a(),i.components);return p(s,{children:[r(c,{of:f}),`
`,r(h,{}),`
`,r(e.h2,{id:"example",children:"Example"}),`
`,r(o,{of:m}),`
`,r(e.h2,{id:"properties",children:"Properties"}),`
`,r(d,{of:m}),`
`,r("br",{}),`
`,r("br",{}),`
`,r(e.h2,{id:"more-examples",children:"More Examples"}),`
`,r(e.h3,{id:"with-custom-color",children:"With Custom Color"}),`
`,r(o,{of:u}),`
`,r(e.h3,{id:"with-secondary-dimension",children:"With Secondary Dimension"}),`
`,r(o,{of:C}),`
`,r(e.h3,{id:"with-data-labels",children:"With Data Labels"}),`
`,r(o,{of:g}),`
`,r(e.h3,{id:"with-formatter",children:"With Formatter"}),`
`,r(o,{of:L}),`
`,r(e.h3,{id:"loading-placeholder",children:"Loading Placeholder"}),`
`,r(o,{of:b}),`
`,r(e.h3,{id:"with-reference-line",children:"With Reference Line"}),`
`,p(e.p,{children:["You can set a reference line to any value by using the ",r(e.code,{children:"referenceLine"})," ",r(e.code,{children:"chartConfig"})," property. ",r(e.code,{children:"referenceLine"})," accepts all properties described ",r(e.a,{href:"https://recharts.org/en-US/api/ReferenceLine",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),", but it's recommended to only use ",r(e.code,{children:"label"}),",",r(e.code,{children:"value"})," and ",r(e.code,{children:"color"})," to preserve the intended design."]}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`<LineChart
  {...props}
  chartConfig={{
    referenceLine: {
      color: 'red',
      label: 'MAX',
      value: 650
    }
  }}
/>
`})}),`
`,r(o,{of:W}),`
`,r(e.h3,{id:"with-linear-gradient",children:"With Linear Gradient"}),`
`,r(o,{of:x}),`
`,r(e.h4,{id:"code",children:"Code"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`export const LineChartWithLinearGradient = () => {
  return (
    <LineChart
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          width: 2,
          color: 'url(#colorUsers)'
        }
      ]}
    >
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};
`})}),`
`,r(l,{})]})}}export{Zr as default};
//# sourceMappingURL=LineChart-40dd71b1.js.map
