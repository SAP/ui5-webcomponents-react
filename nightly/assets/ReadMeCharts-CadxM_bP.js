import{r as i,j as t,T as l}from"./iframe-BVTjwwa8.js";import{useMDXComponents as p}from"./index-B7X7f4OL.js";import{M as u,a as h,k as f}from"./blocks-eGiRc96Y.js";import"./Tag-Dd2A7Fyt.js";import"./index-CMlRFogN.js";import{F as d}from"./CommandsAndQueries-BxY3Aj9d.js";import"./copy-B0_44_hm.js";import{T as b}from"./TableOfContent-pmxBEo13.js";import{C}from"./index-xMRz1oFD.js";import{D}from"./BarChart.stories-DkD_7X40.js";import{D as y}from"./BulletChart.stories-BLneWQ-U.js";import{D as g}from"./ColumnChart.stories-UZhD1h_g.js";import{D as v}from"./ColumnChartWithTrend.stories-DHpVO3_m.js";import{D as x}from"./ComposedChart.stories-CCPi3fUp.js";import{D as j}from"./DonutChart.stories-Dw-9E8w2.js";import{D as w}from"./LineChart.stories-WQi5zsr5.js";import{D as S}from"./PieChart.stories-Ctd7NScJ.js";import{D as R}from"./RadarChart.stories-D6CEw7tl.js";import{D as I}from"./RadialChart.stories-BCukkSEn.js";import{D as T}from"./ScatterChart.stories-DW6tMuFu.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DblDnfTa.js";import"./sys-enter-2-w3Gdy4bH.js";import"./alert-DS_YR08B.js";import"./index-DP8RXEYN.js";import"./index-BvWmgkkb.js";import"./index-BsaRVQdN.js";import"./Link-B7kPjB45.js";import"./addCustomCSSWithScoping-CzL_B1eM.js";import"./index-ytwNl_Zj.js";import"./index-IhKV7aiN.js";import"./index-BQCzDji_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-yJLdt4rK.js";import"./index-B1gqswNl.js";import"./Carousel-CznW2yZy.js";import"./ScrollEnablement-X9DTHKIv.js";import"./animate-JylhYHXj.js";import"./AnimationMode-zsCTpucJ.js";import"./slim-arrow-left-CvY6wENp.js";import"./DemoProps-97zvyYjk.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-eA49BgC9.js";import"./ChartContainer-CSMG73wp.js";import"./index-DPurakIR.js";import"./useCancelAnimationFallback-Lr95mXRR.js";import"./YAxisTicks-DCo-JGih.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ImENue0U.js";import"./ChartDataLabel-BCrljpyy.js";import"./useOnClickInternal-BZ8m7wwH.js";import"./react-content-loader.es-CCXuSYdz.js";import"./useIsRTL-D_4xzLEe.js";import"./useLongestYAxisLabel-SYoQYTr3.js";import"./ComposedChart-Ck-oaT2D.js";import"./Line-74MVAD0-.js";import"./Scatter-D5pnRwgm.js";import"./index-OSdQdjpq.js";import"./index-CT0UjecB.js";import"./Placeholder-CQLlnOrV.js";import"./index-DWSwoVdB.js";const $=`# @ui5/webcomponents-react-charts

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
