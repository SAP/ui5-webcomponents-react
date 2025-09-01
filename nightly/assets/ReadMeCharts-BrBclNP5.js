import{r as i,j as t,T as l}from"./iframe-Bb_MgE3Z.js";import{useMDXComponents as p}from"./index-DKEbDWFi.js";import{M as u,a as h,k as f}from"./blocks-C_ShsaTX.js";import"./Tag-B5i1kgB9.js";import"./index-DayVNiXE.js";import{F as d}from"./CommandsAndQueries-c2dxMxjd.js";import"./copy-BzQS_3Hx.js";import{T as b}from"./TableOfContent-Dyl8nPzW.js";import{C}from"./index-CqQbViID.js";import{D}from"./BarChart.stories-Dlx1uUgm.js";import{D as y}from"./BulletChart.stories-BwoAyACP.js";import{D as g}from"./ColumnChart.stories-CNvz3mt1.js";import{D as v}from"./ColumnChartWithTrend.stories-BPKE_X9W.js";import{D as x}from"./ComposedChart.stories-DJdNkNBc.js";import{D as j}from"./DonutChart.stories-BpLACHRF.js";import{D as w}from"./LineChart.stories-DGNw7u8d.js";import{D as S}from"./PieChart.stories-CXn_ViJk.js";import{D as R}from"./RadarChart.stories-DYk8uLtq.js";import{D as I}from"./RadialChart.stories-BeN3kswb.js";import{D as T}from"./ScatterChart.stories-FelOX3TC.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C6jJlQn9.js";import"./sys-enter-2-CM5wN5Wl.js";import"./alert-Y-36vIFj.js";import"./index-Cq06OFSr.js";import"./index-Na43IgM6.js";import"./index-Ck4df4kL.js";import"./Link-DNvb3KzX.js";import"./addCustomCSSWithScoping-Bc03fLSU.js";import"./index-Ci9Y4xV9.js";import"./index-BfQwzX8T.js";import"./index-j0v7UbS8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHOTzJyN.js";import"./index-DViW7Jtd.js";import"./Carousel-DnpeVSkU.js";import"./ScrollEnablement-Cg1kRRvV.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D1hsT7R6.js";import"./slim-arrow-left-n39v0KlK.js";import"./DemoProps-DmwHZFCO.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B6OeEftG.js";import"./ChartContainer-WOwjHqdF.js";import"./index-BqrSjPk3.js";import"./useCancelAnimationFallback-CuSJBe5K.js";import"./YAxisTicks-Dpa21PRt.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BCwTNG3L.js";import"./ChartDataLabel-ZkrqLxCB.js";import"./useOnClickInternal-CAcOer30.js";import"./react-content-loader.es-B02poVim.js";import"./useIsRTL-DzghZux-.js";import"./useLongestYAxisLabel-BlTxREgF.js";import"./ComposedChart-DrtCMKsS.js";import"./Line-gNIs3iiZ.js";import"./Scatter-QDosOnhU.js";import"./index-BUTzyZU6.js";import"./PieChart-Bkb7H8hM.js";import"./Placeholder-31QCBUxR.js";import"./LineChart-Bhor0fHr.js";const $=`# @ui5/webcomponents-react-charts

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
