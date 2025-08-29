import{r as i,j as t,T as l}from"./iframe-CMv2_fr8.js";import{useMDXComponents as p}from"./index-BCZO-1se.js";import{M as u,a as h,k as f}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{F as d}from"./CommandsAndQueries-UgVWTBkO.js";import"./copy-Bp5geyDe.js";import{T as b}from"./TableOfContent-CaCWTgrs.js";import{C}from"./index-BnqrD1qR.js";import{D}from"./BarChart.stories-T7zVAIhL.js";import{D as y}from"./BulletChart.stories-B4nUtF74.js";import{D as g}from"./ColumnChart.stories-Bo0vfs0h.js";import{D as v}from"./ColumnChartWithTrend.stories-BufVgIX0.js";import{D as x}from"./ComposedChart.stories-C7m1PFpu.js";import{D as j}from"./DonutChart.stories-DxxGmWtO.js";import{D as w}from"./LineChart.stories-BXJ59irh.js";import{D as S}from"./PieChart.stories-fX-BWpNU.js";import{D as R}from"./RadarChart.stories-sm0X7JO5.js";import{D as I}from"./RadialChart.stories-DF94pF9R.js";import{D as T}from"./ScatterChart.stories-B1ZWOapQ.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./index-51EQIK1-.js";import"./Carousel-DKv4_WJd.js";import"./ScrollEnablement-T_D09lMU.js";import"./animate-JylhYHXj.js";import"./AnimationMode-esN5kU0O.js";import"./slim-arrow-left-Dmq4AoDt.js";import"./DemoProps-BexDb9sI.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Da-MIJGO.js";import"./ChartContainer-B53tYV2Q.js";import"./index-CJ5r_NfY.js";import"./useCancelAnimationFallback-Dc0gqlKX.js";import"./YAxisTicks-D6w1m-6z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BeaqqXL7.js";import"./ChartDataLabel-DgSguVcH.js";import"./useOnClickInternal-DWTeIv1s.js";import"./react-content-loader.es-lyq1Qvm7.js";import"./useIsRTL-CH3TFmG6.js";import"./useLongestYAxisLabel-BTpcwAVX.js";import"./ComposedChart-B3ZRKrgv.js";import"./Line-pHL4koU0.js";import"./Scatter-BC5BjsAd.js";import"./index-D7Xgviha.js";import"./PieChart-DQmyySib.js";import"./Placeholder-8edWGXzo.js";import"./LineChart-_GWqIHR7.js";const $=`# @ui5/webcomponents-react-charts

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
