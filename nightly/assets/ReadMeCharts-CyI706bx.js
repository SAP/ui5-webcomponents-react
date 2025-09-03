import{r as i,j as t,T as l}from"./iframe-Ci8pj7yy.js";import{useMDXComponents as p}from"./index-DO7eBN2z.js";import{M as u,a as h,k as f}from"./blocks-BOIftN09.js";import"./Tag-CtmOHQqs.js";import"./index-XXTJ5qGa.js";import{F as d}from"./CommandsAndQueries-5z2JhX-x.js";import"./copy-DM6AHN8T.js";import{T as b}from"./TableOfContent-B6cN-CWA.js";import{C}from"./index-BpMJ_fgg.js";import{D}from"./BarChart.stories-DFtv6WSL.js";import{D as y}from"./BulletChart.stories-BSxjjv7m.js";import{D as g}from"./ColumnChart.stories-IYT2qdlG.js";import{D as v}from"./ColumnChartWithTrend.stories-CC7Wg06F.js";import{D as x}from"./ComposedChart.stories-Dt2TXD12.js";import{D as j}from"./DonutChart.stories-JvSQNyCy.js";import{D as w}from"./LineChart.stories-xq3e9FC1.js";import{D as S}from"./PieChart.stories-Cy9FmdGX.js";import{D as R}from"./RadarChart.stories-W2DD6j_N.js";import{D as I}from"./RadialChart.stories-Xdahwf4k.js";import{D as T}from"./ScatterChart.stories-DOOtPGBR.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DSfftGlH.js";import"./sys-enter-2-C76hk90F.js";import"./alert-DYFZMbbA.js";import"./index-D-FVVHHi.js";import"./index-B8N1oKPj.js";import"./index-DWr3iboX.js";import"./Link-CAZ1TUGZ.js";import"./addCustomCSSWithScoping-X0FVjaGM.js";import"./index-DNhpGeE9.js";import"./index-DX67Vy3i.js";import"./index-D32YSGyq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXlYEAwh.js";import"./index-C7Xj3GeW.js";import"./Carousel-Df_7l-3P.js";import"./ScrollEnablement-DMp5qR-R.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CQpAqcbh.js";import"./slim-arrow-left-YCoJDSuC.js";import"./DemoProps-DESLIWL3.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-2y7YQn1s.js";import"./ChartContainer-CdmivW5Q.js";import"./index-BX3qDpDF.js";import"./useCancelAnimationFallback-x5zcuG4e.js";import"./YAxisTicks-9jyHZd5-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dh8DilhE.js";import"./ChartDataLabel-Ckp3a858.js";import"./useOnClickInternal-DPpUhXZx.js";import"./react-content-loader.es-D6OB2vUY.js";import"./useIsRTL-C1trBNR6.js";import"./useLongestYAxisLabel-CFPKpj8Y.js";import"./ComposedChart-BQOMrfhb.js";import"./Line-D2nRrh06.js";import"./Scatter-C6VTZ0Ey.js";import"./index-BEUq1PGq.js";import"./PieChart-DFp_YCiI.js";import"./Placeholder-BdH2T0ty.js";import"./LineChart-C6wXoCMB.js";const $=`# @ui5/webcomponents-react-charts

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
