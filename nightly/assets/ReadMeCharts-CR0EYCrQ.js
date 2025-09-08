import{r as i,j as t,T as l}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as p}from"./index-DTW9WkuG.js";import{M as u,a as h,k as f}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import{F as d}from"./CommandsAndQueries-Di8bJMhG.js";import"./copy-DC4VamtM.js";import{T as b}from"./TableOfContent-CjHG1HZ_.js";import{C}from"./index-CvPfb8ct.js";import{D}from"./BarChart.stories-DIv7QRKl.js";import{D as y}from"./BulletChart.stories-BxgCGBSG.js";import{D as g}from"./ColumnChart.stories-lU5Y_BN5.js";import{D as v}from"./ColumnChartWithTrend.stories-BMMVGxZg.js";import{D as x}from"./ComposedChart.stories-BNMvgrzD.js";import{D as j}from"./DonutChart.stories-BrI48IFM.js";import{D as w}from"./LineChart.stories-CoCCY-iu.js";import{D as S}from"./PieChart.stories-B16_4_ta.js";import{D as R}from"./RadarChart.stories-Ct3_Rvfc.js";import{D as I}from"./RadialChart.stories-Br6n1DUZ.js";import{D as T}from"./ScatterChart.stories-D81-Jhrn.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./index-BrdrQHC3.js";import"./Carousel-BvD47qxV.js";import"./ScrollEnablement-CGteJMp0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BN-Oep1y.js";import"./slim-arrow-left-wQJgk70N.js";import"./DemoProps-D_yMW8Eo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D09KAPeg.js";import"./ChartContainer-BOk0Gn2g.js";import"./index-DYj6x7NK.js";import"./useCancelAnimationFallback-DrMWMvfm.js";import"./YAxisTicks-CPevk51F.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DzI5YqPh.js";import"./ChartDataLabel-L8E7HxCU.js";import"./useOnClickInternal-B7qWo7tC.js";import"./react-content-loader.es-CnABy7bh.js";import"./useIsRTL--3iCf25v.js";import"./useLongestYAxisLabel-CNWH0Kdd.js";import"./ComposedChart-CxIuYdvz.js";import"./Line-DQr4apLm.js";import"./Scatter-BHkX_-iI.js";import"./index-DQnq5btU.js";import"./index-BliLLy_V.js";import"./Placeholder-BZzlD1os.js";import"./index-Be50O8_r.js";const $=`# @ui5/webcomponents-react-charts

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
