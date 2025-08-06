import{r as i,j as t,T as l}from"./iframe-yjMKSaW2.js";import{useMDXComponents as p}from"./index-DX8fpWzX.js";import{M as u,a as h,k as f}from"./blocks-qO1HNk-b.js";import"./Tag-BxGYemBH.js";import"./index-EVdkIx1d.js";import"./copy-Bx6gkJby.js";import{F as d}from"./CommandsAndQueries-ClO5_6SR.js";import{T as b}from"./TableOfContent-COrNlak9.js";import{C}from"./index-CRuu1WpA.js";import{D}from"./BarChart.stories-DPMTQHjJ.js";import{D as y}from"./BulletChart.stories-DfmPVVgY.js";import{D as g}from"./ColumnChart.stories-CnDbJkCe.js";import{D as v}from"./ColumnChartWithTrend.stories-DJLPkLwz.js";import{D as x}from"./ComposedChart.stories-C_a2bhun.js";import{D as j}from"./DonutChart.stories-CUObYNWM.js";import{D as w}from"./LineChart.stories-DN1rrgo3.js";import{D as S}from"./PieChart.stories-CF-FwiC2.js";import{D as R}from"./RadarChart.stories-Q_rzR5gK.js";import{D as I}from"./RadialChart.stories-DQ3oYggK.js";import{D as T}from"./ScatterChart.stories-D8dHBVOf.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./index-D2oaGTxE.js";import"./Carousel-WwW81Rlr.js";import"./ScrollEnablement-WnQFRWHc.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CuvszLMo.js";import"./slim-arrow-left-Dz1ahv0R.js";import"./DemoProps-ClbrIgSf.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CWGv4j-v.js";import"./ChartContainer-DgHCobnS.js";import"./index-BymYChZy.js";import"./useCancelAnimationFallback-tsdBduBc.js";import"./YAxisTicks-BpvMxfl0.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BJgwm4iD.js";import"./ChartDataLabel-CwTamRB0.js";import"./useOnClickInternal-CaDqcHzL.js";import"./react-content-loader.es-V2dmqyMY.js";import"./useIsRTL-MY_nF6I_.js";import"./useLongestYAxisLabel-CGe6u2X5.js";import"./ComposedChart-D3zGQxlc.js";import"./Line-CfBT7R8H.js";import"./Scatter-zGBCa2RM.js";import"./index-DMmC1309.js";import"./PieChart-ooVXrmuF.js";import"./Placeholder-B6TjEIyw.js";import"./LineChart-BTduRq3V.js";const $=`# @ui5/webcomponents-react-charts

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
