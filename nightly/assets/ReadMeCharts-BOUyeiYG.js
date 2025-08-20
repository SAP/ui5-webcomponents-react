import{r as i,j as t,T as l}from"./iframe-CgMbHIkI.js";import{useMDXComponents as p}from"./index-uQo7cCLJ.js";import{M as u,a as h,k as f}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import"./copy-Cpi-mOYC.js";import{F as d}from"./CommandsAndQueries-BXDj4lkb.js";import{T as b}from"./TableOfContent-BTVE1HTf.js";import{C}from"./index-DFs-YkLw.js";import{D}from"./BarChart.stories-DmfMJj4B.js";import{D as y}from"./BulletChart.stories-BU_HaCl5.js";import{D as g}from"./ColumnChart.stories-B_ba52xt.js";import{D as v}from"./ColumnChartWithTrend.stories-TSTwCAry.js";import{D as x}from"./ComposedChart.stories-ffTzWx_9.js";import{D as j}from"./DonutChart.stories-D1YGwq-N.js";import{D as w}from"./LineChart.stories-BFVF6onT.js";import{D as S}from"./PieChart.stories-Ba3iMWCY.js";import{D as R}from"./RadarChart.stories-DYGoN67m.js";import{D as I}from"./RadialChart.stories-DjdNNNTY.js";import{D as T}from"./ScatterChart.stories-CW3zJDCR.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-B3DD2XIG.js";import"./Carousel-D3oegR64.js";import"./ScrollEnablement-C9I3jXtf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Bu7rLUpW.js";import"./slim-arrow-left-FhLDJNQL.js";import"./DemoProps-ByYvFC86.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dh7sju5C.js";import"./ChartContainer-DDcZh-oS.js";import"./index-DXMjlp8Z.js";import"./useCancelAnimationFallback-CFzgW3c6.js";import"./YAxisTicks-DasmAhmg.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BexaAdh3.js";import"./ChartDataLabel-DtQbLLQj.js";import"./useOnClickInternal-3XU2-Lth.js";import"./react-content-loader.es-D_dLO-iu.js";import"./useIsRTL-CXsGMYTx.js";import"./useLongestYAxisLabel-BSwb7Hst.js";import"./ComposedChart-Bd7DGdIW.js";import"./Line-l834PRUe.js";import"./Scatter-AxUu6dnR.js";import"./index-B8JBmG8Y.js";import"./PieChart-QaP8X4vk.js";import"./Placeholder-D_QdQoXf.js";import"./LineChart-COixtCyI.js";const $=`# @ui5/webcomponents-react-charts

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
