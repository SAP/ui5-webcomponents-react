import{r as i,j as t,T as l}from"./iframe-L-onm66G.js";import{useMDXComponents as p}from"./index-B-8X1idt.js";import{M as u,a as h,k as f}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import{F as d}from"./CommandsAndQueries-CjMnaUpZ.js";import"./copy-CyGTlTXm.js";import{T as b}from"./TableOfContent-Cd4BpqKW.js";import{C}from"./index-BmcugK-n.js";import{D}from"./BarChart.stories-D0JhAC9s.js";import{D as y}from"./BulletChart.stories-BdnPdtPa.js";import{D as g}from"./ColumnChart.stories-AzIH45UH.js";import{D as v}from"./ColumnChartWithTrend.stories-DVtr_zxd.js";import{D as x}from"./ComposedChart.stories-3h1EYXb-.js";import{D as j}from"./DonutChart.stories-CIZhl01y.js";import{D as w}from"./LineChart.stories-DmooqkLj.js";import{D as S}from"./PieChart.stories-CnjtCpIg.js";import{D as R}from"./RadarChart.stories-Du2eWpQO.js";import{D as I}from"./RadialChart.stories-DjVkz7Ss.js";import{D as T}from"./ScatterChart.stories-BRPLZAgq.js";import"./preload-helper-D9Z9MdNV.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./index-8n5QiMPz.js";import"./Carousel-BSZ7xLyj.js";import"./ScrollEnablement-KL0tx3I1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C2XK04a7.js";import"./slim-arrow-left-BTa4AxFC.js";import"./DemoProps-DCBuFVoA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CR9njzaR.js";import"./ChartContainer-ByCWrkus.js";import"./index-DktfzuQk.js";import"./useCancelAnimationFallback-x_kMoeHB.js";import"./YAxisTicks-C76SfQ48.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BUo4Sa4H.js";import"./ChartDataLabel-BGrOJu3x.js";import"./useOnClickInternal-oklM9-A1.js";import"./react-content-loader.es-BUUBWALW.js";import"./useIsRTL-DCVW4Rtb.js";import"./useLongestYAxisLabel-XHvDca1Q.js";import"./ComposedChart-CplsUg32.js";import"./Line-Ce4ArOsc.js";import"./Scatter-D4MnN_vO.js";import"./index-DPvVp5tJ.js";import"./index-D8VXo0P2.js";import"./Placeholder-Bcl_xEC0.js";import"./index-ChKTnUvt.js";const $=`# @ui5/webcomponents-react-charts

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
