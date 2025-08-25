import{r as i,j as t,T as l}from"./iframe-Y9u60a80.js";import{useMDXComponents as p}from"./index-Bori-Nod.js";import{M as u,a as h,k as f}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import"./copy-DwFBIccM.js";import{F as d}from"./CommandsAndQueries-eYIoXNgT.js";import{T as b}from"./TableOfContent-C0xGCGUb.js";import{C}from"./index-gsCqDcWm.js";import{D}from"./BarChart.stories-ChulHcRi.js";import{D as y}from"./BulletChart.stories-Cjk1-HMv.js";import{D as g}from"./ColumnChart.stories-C1_GlUz0.js";import{D as v}from"./ColumnChartWithTrend.stories-vP7B12om.js";import{D as x}from"./ComposedChart.stories-CH2PRd4L.js";import{D as j}from"./DonutChart.stories-DELhrOH6.js";import{D as w}from"./LineChart.stories-xD9yHXgU.js";import{D as S}from"./PieChart.stories-DN6mC46c.js";import{D as R}from"./RadarChart.stories-CxnZgAHD.js";import{D as I}from"./RadialChart.stories-DZrX1Yn9.js";import{D as T}from"./ScatterChart.stories-DGxp50hq.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-BUCogs4k.js";import"./Carousel-CDTxKYQr.js";import"./ScrollEnablement-CsQtNunN.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Yce9W_8F.js";import"./slim-arrow-left-7aB9nvdL.js";import"./DemoProps-CtU2NxVA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B1fO6pb1.js";import"./ChartContainer-BoyV8iGL.js";import"./index-CItqJ0md.js";import"./useCancelAnimationFallback-2i5Isz3t.js";import"./YAxisTicks-S4M91NCU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-VK06SoKi.js";import"./ChartDataLabel-C6zKVqje.js";import"./useOnClickInternal-CONb643j.js";import"./react-content-loader.es-S4fQKv9D.js";import"./useIsRTL-CBPcn2dq.js";import"./useLongestYAxisLabel-CMdA5PbE.js";import"./ComposedChart-_wDA7w2H.js";import"./Line-BDdYB1N6.js";import"./Scatter-C3hk5DNP.js";import"./index-K2llUEcP.js";import"./PieChart-EDHrjcza.js";import"./Placeholder-wCb3lX_F.js";import"./LineChart-B3vH3hXw.js";const $=`# @ui5/webcomponents-react-charts

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
