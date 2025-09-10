import{r as i,j as t,T as l}from"./iframe-113A6qfG.js";import{useMDXComponents as p}from"./index-PjC7U6K4.js";import{M as u,a as h,k as f}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import{F as d}from"./CommandsAndQueries-Bg85p3au.js";import"./copy-CcIFyCHE.js";import{T as b}from"./TableOfContent-DMFIwU4z.js";import{C}from"./index-BOk8qITV.js";import{D}from"./BarChart.stories-AeSnwnXU.js";import{D as y}from"./BulletChart.stories-BdBDy9mh.js";import{D as g}from"./ColumnChart.stories-CP2cs1Gb.js";import{D as v}from"./ColumnChartWithTrend.stories-C5wEnnyy.js";import{D as x}from"./ComposedChart.stories-BlQEm5gU.js";import{D as j}from"./DonutChart.stories-N1SkUmZm.js";import{D as w}from"./LineChart.stories-DAZb4jZ6.js";import{D as S}from"./PieChart.stories-DA9z8LAu.js";import{D as R}from"./RadarChart.stories-M0OttWPo.js";import{D as I}from"./RadialChart.stories-B5d6KN0E.js";import{D as T}from"./ScatterChart.stories-DAeTi3yw.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./index-CWWoZsv-.js";import"./Carousel-g3wKJQIa.js";import"./ScrollEnablement-CKBXjPwR.js";import"./animate-JylhYHXj.js";import"./AnimationMode-SChN99T_.js";import"./slim-arrow-left-CLw4ISU5.js";import"./DemoProps-T-KdCSDC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-JOkx9YXF.js";import"./ChartContainer-DnomnaFm.js";import"./index-CkQDp71V.js";import"./useCancelAnimationFallback-Due5v2Gj.js";import"./YAxisTicks-k1UaLcpo.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CgOymT9T.js";import"./ChartDataLabel-C5VoCJqC.js";import"./useOnClickInternal-CaAdaCWR.js";import"./react-content-loader.es-D99mBMuH.js";import"./useIsRTL-D16EWQ1V.js";import"./useLongestYAxisLabel-CPdedSvk.js";import"./ComposedChart-B_ht9IbR.js";import"./Line-BQ6hOK1g.js";import"./Scatter-C9b3rbeX.js";import"./index-DLz3d9fq.js";import"./index-BtujQGZo.js";import"./Placeholder-DmGV48IB.js";import"./index-Dwc7o8Ty.js";const $=`# @ui5/webcomponents-react-charts

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
