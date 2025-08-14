import{r as i,j as t,T as l}from"./iframe-ecJTvqfE.js";import{useMDXComponents as p}from"./index-DboZxcYT.js";import{M as u,a as h,k as f}from"./blocks-qsqxfOd3.js";import"./Tag-ZKnVgoL_.js";import"./index-BC9DFcam.js";import"./copy-BgNjKRC7.js";import{F as d}from"./CommandsAndQueries-BpdU-ZQD.js";import{T as b}from"./TableOfContent-Ba58XBM3.js";import{C}from"./index-BdHVWSbh.js";import{D}from"./BarChart.stories-BN7s_WiN.js";import{D as y}from"./BulletChart.stories-C-paWovJ.js";import{D as g}from"./ColumnChart.stories-E0QH0Ona.js";import{D as v}from"./ColumnChartWithTrend.stories-CYsxMO2Z.js";import{D as x}from"./ComposedChart.stories-DjZVYMW4.js";import{D as j}from"./DonutChart.stories-DZX_vybb.js";import{D as w}from"./LineChart.stories-AHXiW8qf.js";import{D as S}from"./PieChart.stories-lrUPtVvx.js";import{D as R}from"./RadarChart.stories-BjZ1r4PO.js";import{D as I}from"./RadialChart.stories-DTDW2ya9.js";import{D as T}from"./ScatterChart.stories-Fi-ajf3E.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./index-F3eIUiL2.js";import"./Carousel-y_iULIZn.js";import"./ScrollEnablement-DP_2c2Zn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DCKsAMBy.js";import"./slim-arrow-left-CL3urqvQ.js";import"./DemoProps-Cmko-Qwt.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-fe28d9WH.js";import"./ChartContainer-CBs-jP79.js";import"./index-DEUO6Flh.js";import"./useCancelAnimationFallback-BYpvcwNg.js";import"./YAxisTicks-CSwR7cQz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C3ZFClft.js";import"./ChartDataLabel-B9oRtNzY.js";import"./useOnClickInternal-qXZnF1qr.js";import"./react-content-loader.es-t9nn7sSZ.js";import"./useIsRTL-BxnTzuIz.js";import"./useLongestYAxisLabel-BZENry-n.js";import"./ComposedChart-BlJFMokI.js";import"./Line-Ci3lAV8b.js";import"./Scatter-BTFSSaha.js";import"./index-BwCIlkWj.js";import"./PieChart-BeTZCeEA.js";import"./Placeholder-pb9hIC9z.js";import"./LineChart-CfIrh4Km.js";const $=`# @ui5/webcomponents-react-charts

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
