import{r as i,j as t,T as l}from"./iframe-CGUWa3l5.js";import{useMDXComponents as p}from"./index-Cg9cAKJC.js";import{M as u,a as h,k as f}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import{F as d}from"./CommandsAndQueries-D9MoTrLH.js";import"./copy-WtCMvp6x.js";import{T as b}from"./TableOfContent-BXgVIGFG.js";import{C}from"./index-DV_dTyyn.js";import{D}from"./BarChart.stories-CHMwj9O5.js";import{D as y}from"./BulletChart.stories-4i5uGjqa.js";import{D as g}from"./ColumnChart.stories-Bs2QrWh8.js";import{D as v}from"./ColumnChartWithTrend.stories-DdKPyCrk.js";import{D as x}from"./ComposedChart.stories-C2Cw6wH7.js";import{D as j}from"./DonutChart.stories-BKXap2GL.js";import{D as w}from"./LineChart.stories-BeV0S2eP.js";import{D as S}from"./PieChart.stories-BrFX3D4C.js";import{D as R}from"./RadarChart.stories-Csa1CbNX.js";import{D as I}from"./RadialChart.stories-DkgIAx9T.js";import{D as T}from"./ScatterChart.stories-DI42a0yh.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";import"./index-DVv4DYKP.js";import"./Carousel-nf4-iOaK.js";import"./ScrollEnablement-CQEkGSE4.js";import"./animate-JylhYHXj.js";import"./AnimationMode-GTD5CMgX.js";import"./slim-arrow-left-CdKI71SL.js";import"./DemoProps-LN2fOv_D.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DdvPzmsM.js";import"./ChartContainer-Bivel08W.js";import"./index-DxY5n6Uu.js";import"./useCancelAnimationFallback-C0q9iBiw.js";import"./YAxisTicks-BuigUAPX.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D35zk6jT.js";import"./ChartDataLabel-Bynj3vru.js";import"./useOnClickInternal-pTV9uYQ7.js";import"./react-content-loader.es-CToHGm2L.js";import"./useIsRTL-CiTgDNnq.js";import"./useLongestYAxisLabel-CK2WYMmN.js";import"./ComposedChart-BFRmxwM6.js";import"./Line-DtiNU4sf.js";import"./Scatter-Bc4wiZ__.js";import"./index-Bd9eM_1t.js";import"./index-oTTIiEU9.js";import"./Placeholder-BNZMdT0F.js";import"./index-TAN5A4JC.js";const $=`# @ui5/webcomponents-react-charts

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
