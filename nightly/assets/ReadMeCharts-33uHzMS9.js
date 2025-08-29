import{r as i,j as t,T as l}from"./iframe-Dyl3L-t5.js";import{useMDXComponents as p}from"./index-DBGwXOnP.js";import{M as u,a as h,k as f}from"./blocks-DynXzMxo.js";import"./Tag-CzQty8rY.js";import"./index-CqdKq5PF.js";import{F as d}from"./CommandsAndQueries-Cb3G3ka5.js";import"./copy-CWrvVeie.js";import{T as b}from"./TableOfContent-AMPzVTY_.js";import{C}from"./index-Ba8D9mMC.js";import{D}from"./BarChart.stories-DSF_ukla.js";import{D as y}from"./BulletChart.stories-B0EWOXu7.js";import{D as g}from"./ColumnChart.stories-Boagu7KQ.js";import{D as v}from"./ColumnChartWithTrend.stories-C0B9qkRf.js";import{D as x}from"./ComposedChart.stories-CYI7gmyN.js";import{D as j}from"./DonutChart.stories-B14K1dqJ.js";import{D as w}from"./LineChart.stories-7QZr9MSF.js";import{D as S}from"./PieChart.stories-Cs5FJpVd.js";import{D as R}from"./RadarChart.stories-BPW_QVum.js";import{D as I}from"./RadialChart.stories-2IvCPRS0.js";import{D as T}from"./ScatterChart.stories-D-K_kHBv.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B08y1s4G.js";import"./sys-enter-2-CX7GW53q.js";import"./alert-CBwUNVAj.js";import"./index-BJK3nZOd.js";import"./index-mdaYmaaO.js";import"./index-BDQQRyfA.js";import"./Link-BjutyjAG.js";import"./addCustomCSSWithScoping-B7LJv67X.js";import"./index-l7b9iK_5.js";import"./index-CON7qShv.js";import"./index-BzFXJVYV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmgV2bLI.js";import"./index-TINCTucQ.js";import"./Carousel-CM8A3mF4.js";import"./ScrollEnablement-D8tzMu5h.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BATijHIw.js";import"./slim-arrow-left-XztV4d8E.js";import"./DemoProps-CqoCyiNG.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DDaW2YXt.js";import"./ChartContainer-Dm82KeCg.js";import"./index-Ba2iaRbK.js";import"./useCancelAnimationFallback-CejUTeSL.js";import"./YAxisTicks-DGxziYUs.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B_m1Ozn4.js";import"./ChartDataLabel-Dkhh1jlg.js";import"./useOnClickInternal-DpUv4EyC.js";import"./react-content-loader.es-CytFZOYK.js";import"./useIsRTL-BPkFkuhq.js";import"./useLongestYAxisLabel-Dtl4DLni.js";import"./ComposedChart-CNxYx_zn.js";import"./Line-C9lGX2fB.js";import"./Scatter-dObqWAjc.js";import"./index-D_ZOm7Nf.js";import"./PieChart-DdVU9hu1.js";import"./Placeholder-tGSLV2eT.js";import"./LineChart-DKJ__sbJ.js";const $=`# @ui5/webcomponents-react-charts

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
