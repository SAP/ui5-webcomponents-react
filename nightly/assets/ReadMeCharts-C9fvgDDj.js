import{r as i,j as t,T as l}from"./iframe-BOVM1M_Q.js";import{useMDXComponents as p}from"./index-2SvYRCCw.js";import{M as u,a as h,k as f}from"./blocks-CrIALgP8.js";import"./Tag-66qvcRmY.js";import"./index-mxAgSE5r.js";import"./copy-DbyPBOXI.js";import{F as d}from"./CommandsAndQueries-B0E3P6p2.js";import{T as b}from"./TableOfContent-DUvysCa7.js";import{C}from"./index-DHe7RvPX.js";import{D}from"./BarChart.stories-n1G1wrsD.js";import{D as y}from"./BulletChart.stories-YDzYPokZ.js";import{D as g}from"./ColumnChart.stories-C_5WS7vq.js";import{D as v}from"./ColumnChartWithTrend.stories-BOStw76F.js";import{D as x}from"./ComposedChart.stories-BAUQ1zRL.js";import{D as j}from"./DonutChart.stories-BoIjl7_e.js";import{D as w}from"./LineChart.stories-DeuOIkYj.js";import{D as S}from"./PieChart.stories-SrMjDd_2.js";import{D as R}from"./RadarChart.stories-DuoFFltN.js";import{D as I}from"./RadialChart.stories-y4JEBtI2.js";import{D as T}from"./ScatterChart.stories-B4Bt1JwE.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZqrSqxM.js";import"./sys-enter-2-b3EDnzZS.js";import"./alert-sAHWg9Jt.js";import"./index-B2niMIbJ.js";import"./index-CmTbq6An.js";import"./index-6YOnZJx5.js";import"./Link-BXYAhhKR.js";import"./addCustomCSSWithScoping-BosPxWiT.js";import"./index-u_WTLBYa.js";import"./index-Dc7kwzo6.js";import"./index-BK7Il_hf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzZbr1e8.js";import"./index-qyBhFjGo.js";import"./Carousel-BqgjWp4S.js";import"./ScrollEnablement-B5ISBZej.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CzUkscR6.js";import"./slim-arrow-left-hw0fXSQS.js";import"./DemoProps-DuH6sITo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-EPScO5eg.js";import"./ChartContainer-BeIc5sdI.js";import"./index-CTy0VkN3.js";import"./useCancelAnimationFallback-Cb_NUL9W.js";import"./YAxisTicks-3EcTWCON.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BEIOLbUx.js";import"./ChartDataLabel-C0bIhZqs.js";import"./useOnClickInternal-B-N8fSiw.js";import"./react-content-loader.es-DPuHQjtA.js";import"./useIsRTL-DI3zrK8m.js";import"./useLongestYAxisLabel-M89oBasR.js";import"./ComposedChart-EDAA8CDU.js";import"./Line-B03FaZje.js";import"./Scatter-DIEeyppl.js";import"./index-BsytPKKG.js";import"./PieChart-VzT73F7q.js";import"./Placeholder-iH0gg7BV.js";import"./LineChart-cJm3sDoi.js";const $=`# @ui5/webcomponents-react-charts

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
