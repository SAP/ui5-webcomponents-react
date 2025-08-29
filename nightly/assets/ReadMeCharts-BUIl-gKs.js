import{r as i,j as t,T as l}from"./iframe-BM9OIWQT.js";import{useMDXComponents as p}from"./index-BmDGYHRp.js";import{M as u,a as h,k as f}from"./blocks-DGMiQa0Z.js";import"./Tag-Bg9SPuPk.js";import"./index-DdMY_iOX.js";import{F as d}from"./CommandsAndQueries-CxAAQY3-.js";import"./copy-C5RvIJ1i.js";import{T as b}from"./TableOfContent-DDTzQYJ7.js";import{C}from"./index-DIFsPp0b.js";import{D}from"./BarChart.stories-CoZObXal.js";import{D as y}from"./BulletChart.stories-YlVFR2eL.js";import{D as g}from"./ColumnChart.stories-2mDwgMuh.js";import{D as v}from"./ColumnChartWithTrend.stories-LquPIL4K.js";import{D as x}from"./ComposedChart.stories-CSJ6mkw1.js";import{D as j}from"./DonutChart.stories-Ni1WfXp9.js";import{D as w}from"./LineChart.stories-B_bt7ch1.js";import{D as S}from"./PieChart.stories-C-5IUjtg.js";import{D as R}from"./RadarChart.stories-YHtTBDo1.js";import{D as I}from"./RadialChart.stories-W6Zz4h6B.js";import{D as T}from"./ScatterChart.stories-Cxy5NnIn.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Ofjl_yVD.js";import"./sys-enter-2-BDJ8zEGu.js";import"./alert-BRWAPDyh.js";import"./index-9uui-4yc.js";import"./index-BFMSgsw3.js";import"./index-9kU-764p.js";import"./Link-D90fL3tj.js";import"./addCustomCSSWithScoping-DJtAPEon.js";import"./index-CLY-4HWK.js";import"./index-DnPpq_H3.js";import"./index-6r2kDh88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4WbvrxN.js";import"./index-DEAaUqYT.js";import"./Carousel-mPE2D8g7.js";import"./ScrollEnablement-B6aqSdEO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B3afpmrB.js";import"./slim-arrow-left-D9UEFR-9.js";import"./DemoProps-Cm1Bnidt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DrpnqCly.js";import"./ChartContainer-BkoNUMPz.js";import"./index-4j8VosmR.js";import"./useCancelAnimationFallback-Dq3C0rNP.js";import"./YAxisTicks-d0qw8wCr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-j_2lzpRo.js";import"./ChartDataLabel-BW2Dv3EA.js";import"./useOnClickInternal-dZKdpN6o.js";import"./react-content-loader.es-CKdAubS5.js";import"./useIsRTL-uL9buPdP.js";import"./useLongestYAxisLabel-DWOFfwPi.js";import"./ComposedChart-C9ZGvCfu.js";import"./Line-dGmaRbu2.js";import"./Scatter-DSYLS7ew.js";import"./index-DLW1ctHJ.js";import"./PieChart-D2wC7B06.js";import"./Placeholder-CP3bF4Yj.js";import"./LineChart-BhFLJMfi.js";const $=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Installation

\`\`\`bash
npm install @ui5/webcomponents-react-charts
\`\`\`

## Accessibility

Charts only offer limited accessibility support with only basic built-in features, so it’s essential to ensure your implementation meets the accessibility standards of your application.

## React 19 support

To use this library with React 19 you have to override your \`react-is\` version to match your React version!

- **npm:**

  \`\`\`json
    "overrides": {
      "react-is": "19.1.0"
    },
  \`\`\`

- **yarn**

  \`\`\`json
    "resolutions": {
      "react-is": "19.1.0"
    },
  \`\`\`

## Static CSS

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://sap.github.io/ui5-webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/SAP/ui5-webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/SAP/ui5-webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:S},{name:"RadarChart",component:R},{name:"RadialChart",component:I},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
