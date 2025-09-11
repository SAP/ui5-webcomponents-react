import{r as i,j as t,T as l}from"./iframe-7wbn2r8t.js";import{useMDXComponents as p}from"./index-9iabKYe6.js";import{M as u,a as h,k as f}from"./blocks-DhPDsuAg.js";import"./Tag-B4Xu1fg_.js";import"./index-BbDQ_pma.js";import{F as d}from"./CommandsAndQueries-ByqqJAkO.js";import"./copy-BfB9wT2Y.js";import{T as b}from"./TableOfContent-Lvb8dz3J.js";import{C}from"./index-CMIRsEo0.js";import{D}from"./BarChart.stories-D2VoMBTy.js";import{D as y}from"./BulletChart.stories-DiImNPl1.js";import{D as g}from"./ColumnChart.stories-DA0CvnLb.js";import{D as v}from"./ColumnChartWithTrend.stories-Clj2V5t8.js";import{D as x}from"./ComposedChart.stories-DBH0tUgB.js";import{D as j}from"./DonutChart.stories-D05rEvhs.js";import{D as w}from"./LineChart.stories-DQGvpBvb.js";import{D as S}from"./PieChart.stories-DRlHvYS-.js";import{D as R}from"./RadarChart.stories-48zw-eAi.js";import{D as I}from"./RadialChart.stories-Bjt_mQZU.js";import{D as T}from"./ScatterChart.stories-CIQKP2VQ.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C3oesKbG.js";import"./sys-enter-2-5KLli2cX.js";import"./alert-BzwIc2o-.js";import"./index--oRJYcmq.js";import"./index-s9oyD4rV.js";import"./index-BXziIIti.js";import"./Link-CMqhXbfj.js";import"./addCustomCSSWithScoping-DOSmtfkU.js";import"./index-BcN9ZXV0.js";import"./index-B507ER4a.js";import"./index-DZM58baw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_u8Wshbe.js";import"./index-C5gTJ--F.js";import"./Carousel-CIPm3BxN.js";import"./ScrollEnablement-kUlDPclg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BRTUGINJ.js";import"./slim-arrow-left-DRVWU0SP.js";import"./DemoProps-DwcvyohL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-I9LTVpsj.js";import"./ChartContainer-BhOg2JJk.js";import"./index-DSDAeY17.js";import"./useCancelAnimationFallback-D3wdba3F.js";import"./YAxisTicks-DWsxcMGg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CpNpUcfi.js";import"./ChartDataLabel-vujbgur_.js";import"./useOnClickInternal-BIc2nEKp.js";import"./react-content-loader.es-Ds7rN60s.js";import"./useIsRTL-nMUuowmY.js";import"./useLongestYAxisLabel-Cj83_yfj.js";import"./ComposedChart-oCW5dF-B.js";import"./Line-CiGUhe0y.js";import"./Scatter-DJ-m8fH3.js";import"./index-CbBpub4-.js";import"./index-B-mOAQU5.js";import"./Placeholder-DGV9keAW.js";import"./index-MCFJ-wRX.js";const $=`# @ui5/webcomponents-react-charts

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
