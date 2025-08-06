import{r as i,j as t,T as l}from"./iframe-D5q1aMGI.js";import{useMDXComponents as p}from"./index-B6q-95ic.js";import{M as u,a as h,k as f}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import"./index-YdpDWp2e.js";import"./copy-BKgapaDk.js";import{F as d}from"./CommandsAndQueries-B7jUlW4q.js";import{T as b}from"./TableOfContent-CCvgAgpP.js";import{C}from"./index-DH5n34a4.js";import{D}from"./BarChart.stories-BY60qwR1.js";import{D as y}from"./BulletChart.stories-DtjXAAB-.js";import{D as g}from"./ColumnChart.stories-5cKiTpMg.js";import{D as v}from"./ColumnChartWithTrend.stories-BkNzTVRn.js";import{D as x}from"./ComposedChart.stories-D3kXLYjq.js";import{D as j}from"./DonutChart.stories-BF3OCORn.js";import{D as w}from"./LineChart.stories-DmFO2uJ5.js";import{D as S}from"./PieChart.stories-CVqTatkK.js";import{D as R}from"./RadarChart.stories-B4sVzH4M.js";import{D as I}from"./RadialChart.stories-DDK36f-s.js";import{D as T}from"./ScatterChart.stories-COCp5xrP.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./index-DEUGWJD9.js";import"./Link-CDAcJh87.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-Bo48Ce9s.js";import"./Carousel-B-cKxIbU.js";import"./ScrollEnablement-Cc56P2Pl.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DSMSuKkT.js";import"./slim-arrow-left-CfowAw71.js";import"./DemoProps-CwaW7u4O.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B0XyMZ1O.js";import"./ChartContainer-DYcXZqZd.js";import"./index-BgZZQCdH.js";import"./useCancelAnimationFallback-DcH_RyiX.js";import"./YAxisTicks-raZEqVHW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Csq5GQNX.js";import"./ChartDataLabel-d79T7WrX.js";import"./useOnClickInternal-DE_neBEa.js";import"./react-content-loader.es-CXOrnAQ_.js";import"./useIsRTL-D1kDzTdS.js";import"./useLongestYAxisLabel-BF-gxYNo.js";import"./ComposedChart-DwYE71IV.js";import"./Line-Cc99mMhr.js";import"./Scatter-Co-CvxZi.js";import"./index-gHECHwsg.js";import"./PieChart-JVfG_Qg5.js";import"./Placeholder-BJ5g62pk.js";import"./LineChart-B1I6f8fA.js";const $=`# @ui5/webcomponents-react-charts

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
