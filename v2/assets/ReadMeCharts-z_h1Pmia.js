import{r as i,j as t,T as l}from"./iframe-DTnEqaXa.js";import{useMDXComponents as p}from"./index-Bzwj8IeJ.js";import{M as u,a as h,k as f}from"./blocks-DjoWO0N0.js";import"./Tag-B9YI4L6P.js";import"./index-X9x0GvvK.js";import"./copy-CVTh1Y4e.js";import{F as d}from"./CommandsAndQueries-o88EZ4zv.js";import{T as b}from"./TableOfContent-CnhdJ1_G.js";import{C}from"./index-DE8XXsXj.js";import{D}from"./BarChart.stories-lqSRrIqN.js";import{D as y}from"./BulletChart.stories-BWb62Asf.js";import{D as g}from"./ColumnChart.stories-qQvyDhk1.js";import{D as v}from"./ColumnChartWithTrend.stories-BF8bDvJ-.js";import{D as x}from"./ComposedChart.stories-Bd6qa1QU.js";import{D as j}from"./DonutChart.stories-Du_g2IP3.js";import{D as w}from"./LineChart.stories-DocKo0yM.js";import{D as S}from"./PieChart.stories-C9G9t7KT.js";import{D as R}from"./RadarChart.stories-DJcHrDmE.js";import{D as I}from"./RadialChart.stories-BpdtImh_.js";import{D as T}from"./ScatterChart.stories-DQEFZQJm.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Z43pYR60.js";import"./sys-enter-2-2LeoQRYT.js";import"./alert-no1g3tmv.js";import"./index-DCbmFI06.js";import"./index-L41gFWOj.js";import"./index-CPY0RkYC.js";import"./Link-DjplMcMT.js";import"./addCustomCSSWithScoping-Di76Mem5.js";import"./index-BLEhzZcH.js";import"./index-BtOoTda4.js";import"./index-Cbvl8GTm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvuY_C9E.js";import"./index-Bmfc8Eqw.js";import"./Carousel-D1mChMJ5.js";import"./ScrollEnablement-j28YNdtg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BgG5YerI.js";import"./slim-arrow-left-CtEF-x63.js";import"./DemoProps-oWXolPfQ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BawrTeZY.js";import"./ChartContainer-ba0kPRxz.js";import"./index-B7kRuZUV.js";import"./useCancelAnimationFallback-Blss-itU.js";import"./YAxisTicks-CH7vzXR2.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BAICYBrz.js";import"./ChartDataLabel-BZTWNJke.js";import"./useOnClickInternal-BpB10ICN.js";import"./react-content-loader.es-C68Ji_6n.js";import"./useIsRTL-SG3H97q3.js";import"./useLongestYAxisLabel-Cwft0hhq.js";import"./ComposedChart-CLxN4Ld7.js";import"./Line-D-rTjAJP.js";import"./Scatter-Dkb75RVZ.js";import"./index-Cmx40cnP.js";import"./PieChart-DM_GkJcb.js";import"./Placeholder-DXay7s0Z.js";import"./LineChart-BNoN80WQ.js";const $=`# @ui5/webcomponents-react-charts

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
