import{r as i,j as t,T as l}from"./iframe-DUFdGNZ-.js";import{useMDXComponents as p}from"./index-lDTLJk7j.js";import{M as u,a as h,k as f}from"./blocks-Cil-35LB.js";import"./Tag-BIgoED-u.js";import"./index-aevS7PA-.js";import{F as d}from"./CommandsAndQueries-BGpNLpHt.js";import"./copy-E4FhZn3x.js";import{T as b}from"./TableOfContent-ew4WB2x2.js";import{C}from"./index-B0QtIkrU.js";import{D}from"./BarChart.stories-Ddi9zM8O.js";import{D as y}from"./BulletChart.stories-CJgcda-G.js";import{D as g}from"./ColumnChart.stories-sSJ5MLVF.js";import{D as v}from"./ColumnChartWithTrend.stories-TfLaooTh.js";import{D as x}from"./ComposedChart.stories-DJoRPMZj.js";import{D as j}from"./DonutChart.stories-pjbRglpD.js";import{D as w}from"./LineChart.stories-mEyraJlx.js";import{D as S}from"./PieChart.stories-C5Cf4HJP.js";import{D as R}from"./RadarChart.stories-CaMWPPe3.js";import{D as I}from"./RadialChart.stories-D3vt7emI.js";import{D as T}from"./ScatterChart.stories-gZDsYaPw.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CgwzUTpr.js";import"./sys-enter-2-BnIfB17f.js";import"./alert-DGbf_sXK.js";import"./index-CGt5UzDi.js";import"./index-HLxWh4_j.js";import"./index-BnSYwVvS.js";import"./Link-CUBBmqoz.js";import"./addCustomCSSWithScoping-Brp1WNYE.js";import"./index-COMDMvYs.js";import"./index-BiGG8FGx.js";import"./index-B4gWJnff.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DqrZbdHQ.js";import"./index-DceE06Sq.js";import"./Carousel-DoxJwbjS.js";import"./ScrollEnablement-BzLICqgj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-VDheAoJb.js";import"./slim-arrow-left-lEfDohBp.js";import"./DemoProps-o5S3WB6i.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DlkeoXbB.js";import"./ChartContainer-CBAnlQnh.js";import"./index-CV8w4gWx.js";import"./useCancelAnimationFallback-qBiZ42gK.js";import"./YAxisTicks-CcQ0Rd_H.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dulx6yvr.js";import"./ChartDataLabel-BZ_pxbsW.js";import"./useOnClickInternal-WkENVUmm.js";import"./react-content-loader.es-BI89myhx.js";import"./useIsRTL-B5nPdRZ3.js";import"./useLongestYAxisLabel-DAVQz9BP.js";import"./ComposedChart-DAtSwtPb.js";import"./Line-BIrDFY1Y.js";import"./Scatter-D58sW4E_.js";import"./index-BwyfjTD3.js";import"./PieChart-w37OT2TH.js";import"./Placeholder-CYM28CgX.js";import"./LineChart-wS-LwS0M.js";const $=`# @ui5/webcomponents-react-charts

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
