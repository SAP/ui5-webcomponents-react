import{r as i,j as t,T as l}from"./iframe-CG2rGjbc.js";import{useMDXComponents as p}from"./index-DS69H-n6.js";import{M as u,a as h,k as f}from"./blocks-BOXfYYlZ.js";import"./Tag-B3NEGkkI.js";import"./index-BVmbnKNa.js";import"./copy-Cj_PeOWN.js";import{F as d}from"./CommandsAndQueries-DskZpT92.js";import{T as b}from"./TableOfContent-DgRpeg8V.js";import{C}from"./index-_lOemQ59.js";import{D}from"./BarChart.stories-C5rOtVc5.js";import{D as y}from"./BulletChart.stories-Ds-2PQk3.js";import{D as g}from"./ColumnChart.stories-DXrGO5UQ.js";import{D as v}from"./ColumnChartWithTrend.stories-8QjJRs7Y.js";import{D as x}from"./ComposedChart.stories-CAT95yqq.js";import{D as j}from"./DonutChart.stories-JGHVYYud.js";import{D as w}from"./LineChart.stories-Co3QJgmu.js";import{D as S}from"./PieChart.stories-CCnkUFZs.js";import{D as R}from"./RadarChart.stories-DQTdkeVj.js";import{D as I}from"./RadialChart.stories-J5DyzJZl.js";import{D as T}from"./ScatterChart.stories-Byd0tQGS.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CUctzDB0.js";import"./sys-enter-2-58dTwXpy.js";import"./alert-xERNdQ9e.js";import"./index-BEeaA3No.js";import"./index-Bm2fVwXT.js";import"./index-4ahbKnxX.js";import"./Link-BOSvSmJd.js";import"./addCustomCSSWithScoping-CQY8oQwD.js";import"./index-B3gloDnF.js";import"./index-DEr8Ja6X.js";import"./index-dno7x-xA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBxXpI3-.js";import"./index-vBa65tZZ.js";import"./Carousel-DGZkkEwj.js";import"./ScrollEnablement-D96l-16O.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dbwsx4z-.js";import"./slim-arrow-left-BDDQRLb0.js";import"./DemoProps-IEljXQ4_.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BOTG4ofS.js";import"./ChartContainer-DLaqbR7E.js";import"./index-4G4pslYn.js";import"./useCancelAnimationFallback-CZaLtAgC.js";import"./YAxisTicks-DAn6oHQC.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BX0Bbk3X.js";import"./ChartDataLabel-D5C_kBx9.js";import"./useOnClickInternal-Dqv3Wu07.js";import"./react-content-loader.es-QFz7CKqe.js";import"./useIsRTL-CMFeNktt.js";import"./useLongestYAxisLabel-ClOyaIfd.js";import"./ComposedChart-CrQdyTPQ.js";import"./Line-BjI-MGis.js";import"./Scatter-BGw6xL9k.js";import"./index-BFx4GjQG.js";import"./PieChart-COa27wLY.js";import"./Placeholder-DacKxwca.js";import"./LineChart-Ca-qITPX.js";const $=`# @ui5/webcomponents-react-charts

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
