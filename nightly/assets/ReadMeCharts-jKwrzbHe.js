import{r as i,j as t,T as l}from"./iframe-BohNpW-0.js";import{useMDXComponents as p}from"./index-CNs9TfzQ.js";import{M as u,a as h,k as f}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import{F as d}from"./CommandsAndQueries-dvLT1dsP.js";import"./copy-CQ_htW6-.js";import{T as b}from"./TableOfContent-Dqpo1t13.js";import{C}from"./index-BgRGHkUq.js";import{D}from"./BarChart.stories-BJK1AT7n.js";import{D as y}from"./BulletChart.stories-BPv6sOe2.js";import{D as g}from"./ColumnChart.stories-0rB5wsZZ.js";import{D as v}from"./ColumnChartWithTrend.stories-CuPJtksk.js";import{D as x}from"./ComposedChart.stories-Bi-HCcpA.js";import{D as j}from"./DonutChart.stories-COAcQ3Ou.js";import{D as w}from"./LineChart.stories-BQ6Cis0g.js";import{D as S}from"./PieChart.stories-D3GCusfK.js";import{D as R}from"./RadarChart.stories-ComSuKUw.js";import{D as I}from"./RadialChart.stories-C7qQ1V85.js";import{D as T}from"./ScatterChart.stories-C-QhGh3G.js";import"./preload-helper-D9Z9MdNV.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./index-ByPlsUCp.js";import"./Carousel-7bXwmRgh.js";import"./ScrollEnablement-HAARTfJV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-q0T2jHbG.js";import"./slim-arrow-left-ChtEX6SD.js";import"./DemoProps-CHnTGdYX.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CiQX623A.js";import"./ChartContainer-CahGtjSY.js";import"./index-CjyJ5jjJ.js";import"./useCancelAnimationFallback-Bwh43Rxg.js";import"./YAxisTicks-KGwADwQj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B0ZPw7r7.js";import"./ChartDataLabel-BDMvREhC.js";import"./useOnClickInternal-CnyltVRr.js";import"./react-content-loader.es-DhsHSqgy.js";import"./useIsRTL-D6FosoIx.js";import"./useLongestYAxisLabel-D5hxKjEW.js";import"./ComposedChart-CIzu2eWd.js";import"./Line-CSs2kKzr.js";import"./Scatter-Bz74YIpc.js";import"./index-DRMW7c6z.js";import"./PieChart-D-xIF_sx.js";import"./Placeholder-BPicrMCV.js";import"./LineChart-f-CI3oHl.js";const $=`# @ui5/webcomponents-react-charts

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
