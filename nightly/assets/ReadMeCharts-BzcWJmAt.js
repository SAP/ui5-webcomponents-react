import{r as i,j as t,T as l}from"./iframe-CpjYl_X5.js";import{useMDXComponents as p}from"./index-33t6PBxs.js";import{M as u,a as h,k as f}from"./blocks-BkWlBCqX.js";import"./Tag-DAYBa8yS.js";import"./index-joCwOwY7.js";import"./copy-BKpc5Gew.js";import{F as d}from"./CommandsAndQueries-EZVtGsJe.js";import{T as b}from"./TableOfContent-D2ZJCbj2.js";import{C}from"./index-D1pvaZZv.js";import{D}from"./BarChart.stories-C7gC99c-.js";import{D as y}from"./BulletChart.stories-D_r3NYfL.js";import{D as g}from"./ColumnChart.stories-DBq3wOGZ.js";import{D as v}from"./ColumnChartWithTrend.stories-BKOGy8Wq.js";import{D as x}from"./ComposedChart.stories-CyN7uMgm.js";import{D as j}from"./DonutChart.stories-2bs6XE5t.js";import{D as w}from"./LineChart.stories-BhwqpBkE.js";import{D as S}from"./PieChart.stories-Dud95t8g.js";import{D as R}from"./RadarChart.stories-Dccm6K59.js";import{D as I}from"./RadialChart.stories-DMdWNG5t.js";import{D as T}from"./ScatterChart.stories-C6DY0-XX.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DIh11mSj.js";import"./sys-enter-2-Dq_jhMR8.js";import"./alert-D8p6gt1X.js";import"./index--ofYB3gh.js";import"./index-DdElBtDf.js";import"./index-Us1w7EKB.js";import"./Link-D3b32oQu.js";import"./addCustomCSSWithScoping-DT7KX0jQ.js";import"./index-DkiFqVtv.js";import"./index-n0koIvnW.js";import"./index-CNY9O4wi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCOGUGQL.js";import"./index-C2_ggH5f.js";import"./Carousel-BrOnLLEq.js";import"./ScrollEnablement-wFgsvqM3.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BxR6Sw-w.js";import"./slim-arrow-left-BDS05PiE.js";import"./DemoProps-BhfmbNtT.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-mmrlzAOa.js";import"./ChartContainer-Cs7vYMcE.js";import"./index-BNinvQDt.js";import"./useCancelAnimationFallback-CF_-_AmX.js";import"./YAxisTicks-B6dB2MYc.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DUQCp58O.js";import"./ChartDataLabel-DfSnf78_.js";import"./useOnClickInternal-DOLmoEA2.js";import"./react-content-loader.es-BcsLvO8G.js";import"./useIsRTL-BtNL1jcq.js";import"./useLongestYAxisLabel-C-c47WkD.js";import"./ComposedChart-D7jQad0I.js";import"./Line-CmZUHR7M.js";import"./Scatter-rViohfsA.js";import"./index-CRBXQvFO.js";import"./PieChart-FUb1kblR.js";import"./Placeholder-CrmyEGyU.js";import"./LineChart-UpqDdAGi.js";const $=`# @ui5/webcomponents-react-charts

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
