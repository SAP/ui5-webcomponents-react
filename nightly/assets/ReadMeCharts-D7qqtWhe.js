import{r as i,j as t,T as l}from"./iframe-DEht8tsT.js";import{useMDXComponents as p}from"./index-CHmvqmZV.js";import{M as u,a as h,k as f}from"./blocks-B9eJfK2p.js";import"./Tag-Bo7VmRFf.js";import"./index-qqa4-hS-.js";import{F as d}from"./CommandsAndQueries-r7FFQXZn.js";import"./i18n-DCXZOGva.js";import"./copy-DdxSmOcQ.js";import{T as b}from"./TableOfContent-BBCeB6M5.js";import{C}from"./index-DSFKgvf-.js";import{D}from"./BarChart.stories-DSGTxBP5.js";import{D as y}from"./BulletChart.stories-BC1VpVKb.js";import{D as g}from"./ColumnChart.stories-BhmiUUzU.js";import{D as v}from"./ColumnChartWithTrend.stories-1dlVXctl.js";import{D as x}from"./ComposedChart.stories-BFhc7Bds.js";import{D as j}from"./DonutChart.stories-BTLQcd4L.js";import{D as w}from"./LineChart.stories-BiGajAhf.js";import{D as S}from"./PieChart.stories-D4FjFqpu.js";import{D as R}from"./RadarChart.stories-BVzaYb_a.js";import{D as I}from"./RadialChart.stories-BlNDTg5r.js";import{D as T}from"./ScatterChart.stories-B3ZD2Sro.js";import"./preload-helper-D9Z9MdNV.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./index-v8e_2LrN.js";import"./Carousel-DOhHnVUF.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-Bke_jWFm.js";import"./DemoProps-CLb_UkSQ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BVdwkYxN.js";import"./ChartContainer-BpqENyU9.js";import"./index-CXm15WPn.js";import"./useCancelAnimationFallback-DURiFIP6.js";import"./YAxisTicks-ASNopS38.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CkTEXin0.js";import"./ChartDataLabel-CAIZz03U.js";import"./useOnClickInternal-C9txrrkQ.js";import"./react-content-loader.es-BuNNcX-P.js";import"./useIsRTL-DuD9eh_M.js";import"./useLongestYAxisLabel-VeFeaC4a.js";import"./ComposedChart-D1xAOCPk.js";import"./Line-BROF3LaP.js";import"./Scatter-c7_Ig-fR.js";import"./index-C3KEX4ZH.js";import"./index-CJIw-UvT.js";import"./Placeholder-DiHF9Lnv.js";import"./index-Bwoxld26.js";const $=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
