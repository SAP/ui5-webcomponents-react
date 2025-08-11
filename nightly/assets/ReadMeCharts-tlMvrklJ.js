import{r as i,j as t,T as l}from"./iframe-C5HYk_w9.js";import{useMDXComponents as p}from"./index-NAtY6U9A.js";import{M as u,a as h,k as f}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import"./index-DDk7xvH6.js";import"./copy-C5SWnutv.js";import{F as d}from"./CommandsAndQueries-D55ZIYIG.js";import{T as b}from"./TableOfContent-DsGDxpKI.js";import{C}from"./index-C10ZDR0b.js";import{D}from"./BarChart.stories-BMmYCJFl.js";import{D as y}from"./BulletChart.stories-BZwPRXR0.js";import{D as g}from"./ColumnChart.stories-Bg7KAmmE.js";import{D as v}from"./ColumnChartWithTrend.stories-DmSLJYc0.js";import{D as x}from"./ComposedChart.stories-DdAryGkI.js";import{D as j}from"./DonutChart.stories-De_6BU27.js";import{D as w}from"./LineChart.stories-BYLgrsbG.js";import{D as S}from"./PieChart.stories-BLomBI_k.js";import{D as R}from"./RadarChart.stories-DcBNm0le.js";import{D as I}from"./RadialChart.stories-B4yQg26-.js";import{D as T}from"./ScatterChart.stories-N1xbdful.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-BrZnxm7s.js";import"./Carousel-BWcSnU-V.js";import"./ScrollEnablement-BPWQH0lq.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DX0jJljZ.js";import"./slim-arrow-left-CJPMAZas.js";import"./DemoProps-BQZhxiIs.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BFt--AIg.js";import"./ChartContainer-BJO-TVn-.js";import"./index-CqHxCzDj.js";import"./useCancelAnimationFallback-4DKGapqS.js";import"./YAxisTicks-BV_rkqtT.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-TloAhqsf.js";import"./ChartDataLabel-Brz1lqIB.js";import"./useOnClickInternal-Cl9Afeak.js";import"./react-content-loader.es-DDaryDxz.js";import"./useIsRTL-BqnKZ734.js";import"./useLongestYAxisLabel-mPRb869t.js";import"./ComposedChart-B5F48oy2.js";import"./Line-CxtBk5V-.js";import"./Scatter-Cy9h885I.js";import"./index-C8x3P5Pb.js";import"./PieChart-DPyAnBo1.js";import"./Placeholder-DyhJnhjI.js";import"./LineChart-gQEifT9L.js";const $=`# @ui5/webcomponents-react-charts

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
