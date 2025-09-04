import{r as i,j as t,T as l}from"./iframe-BGPLLWda.js";import{useMDXComponents as p}from"./index-CUo1Jk3b.js";import{M as u,a as h,k as f}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import{F as d}from"./CommandsAndQueries-CMwJiC-3.js";import"./i18n-DSpjDgSK.js";import"./copy-BU9AAITa.js";import{T as b}from"./TableOfContent-JH4ytLq7.js";import{C}from"./index-DvQ1ELEY.js";import{D}from"./BarChart.stories-DgHyb-Jb.js";import{D as y}from"./BulletChart.stories-DKgWYziP.js";import{D as g}from"./ColumnChart.stories-DE9wr6qb.js";import{D as v}from"./ColumnChartWithTrend.stories-DJkWKLu5.js";import{D as x}from"./ComposedChart.stories-B7njKlJR.js";import{D as j}from"./DonutChart.stories-rMJt7gqZ.js";import{D as w}from"./LineChart.stories-DQbdPsAS.js";import{D as S}from"./PieChart.stories-BdNEjXBn.js";import{D as R}from"./RadarChart.stories-Dpr7exbA.js";import{D as I}from"./RadialChart.stories-UEFLCsyB.js";import{D as T}from"./ScatterChart.stories-DD48QUIk.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-BUzvoCUF.js";import"./Carousel-BUM9Xxwr.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dlz1UuRL.js";import"./slim-arrow-left-DBgMhHNJ.js";import"./DemoProps-CTHghc0k.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DnwB3v1Y.js";import"./ChartContainer-C8iVYUTC.js";import"./index-B91ASvCc.js";import"./useCancelAnimationFallback-CKrEKDKJ.js";import"./YAxisTicks-BRyDG-sw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BuCwNUEa.js";import"./ChartDataLabel-w5d-Jehd.js";import"./useOnClickInternal-d8d9w7ez.js";import"./react-content-loader.es-B7GIlwMV.js";import"./useIsRTL-B1VPnJL4.js";import"./useLongestYAxisLabel-Bp2Q-BnT.js";import"./ComposedChart-CABbhi15.js";import"./Line-Cb79n9zv.js";import"./Scatter-BvGkBDV0.js";import"./index-Cdatv40P.js";import"./index-BaxJN-2l.js";import"./Placeholder-Dtxtnsse.js";import"./index-B5Y_GXT7.js";const $=`# @ui5/webcomponents-react-charts

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
`,t.jsx(d,{})]})}function Ft(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Ft as default};
