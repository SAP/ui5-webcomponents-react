import{r as i,j as t,T as l}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as p}from"./index-H-IHaXTw.js";import{M as u,a as h,k as f}from"./blocks-BF1agP19.js";import"./Tag-CPZT7-Kj.js";import"./index-CCQ7ngcv.js";import"./copy-CiclUpSF.js";import{F as d}from"./CommandsAndQueries-sjInqy8W.js";import{T as b}from"./TableOfContent-CNAJZVUt.js";import{C}from"./index-3fDwabc2.js";import{D}from"./BarChart.stories-C0z44Gn4.js";import{D as y}from"./BulletChart.stories-CaQm_E5D.js";import{D as g}from"./ColumnChart.stories-XPd_6rPC.js";import{D as v}from"./ColumnChartWithTrend.stories-CFf3gs-7.js";import{D as x}from"./ComposedChart.stories-CyurW-6p.js";import{D as j}from"./DonutChart.stories-MtSaOSBg.js";import{D as w}from"./LineChart.stories-BCXpSpQi.js";import{D as S}from"./PieChart.stories-CKgbJzcC.js";import{D as R}from"./RadarChart.stories-mR5Lwaet.js";import{D as I}from"./RadialChart.stories-Bng-yyyx.js";import{D as T}from"./ScatterChart.stories-Du8p2JyM.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./index-BveKVBSZ.js";import"./Carousel-BThSQdlH.js";import"./ScrollEnablement-C0SuwG25.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CT8tnGlK.js";import"./slim-arrow-left-BfAjGy9r.js";import"./DemoProps-CkBG-K-Z.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-x6o0A-Oh.js";import"./ChartContainer-h_GCOmhQ.js";import"./index-DNS596Mv.js";import"./useCancelAnimationFallback-D3e6D7U2.js";import"./YAxisTicks-UZSQGw03.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CkrcMeC8.js";import"./ChartDataLabel-sOE8P0Id.js";import"./useOnClickInternal-86pnGdrf.js";import"./react-content-loader.es-CVhEtPcS.js";import"./useIsRTL-Bze9sg1S.js";import"./useLongestYAxisLabel-RoXsm1dU.js";import"./ComposedChart-BsQN17P_.js";import"./Line-DsdNS-7n.js";import"./Scatter-BwExseVS.js";import"./index-V2djL-BZ.js";import"./PieChart-Z-gaaTTO.js";import"./Placeholder-gpPddulY.js";import"./LineChart-CkWg1i0Q.js";const $=`# @ui5/webcomponents-react-charts

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
