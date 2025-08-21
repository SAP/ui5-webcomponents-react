import{r as i,j as t,T as l}from"./iframe-D9TrNBgU.js";import{useMDXComponents as p}from"./index-DVnXt3Ou.js";import{M as u,a as h,k as f}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import"./copy-DLBvKbOK.js";import{F as d}from"./CommandsAndQueries-D4YJbg3c.js";import{T as b}from"./TableOfContent-Bm0N_0e1.js";import{C}from"./index-BL1y2-h_.js";import{D}from"./BarChart.stories-BfNfisOU.js";import{D as y}from"./BulletChart.stories-CimrmceF.js";import{D as g}from"./ColumnChart.stories-DtxtNnHe.js";import{D as v}from"./ColumnChartWithTrend.stories-weZe_IZg.js";import{D as x}from"./ComposedChart.stories-2nVZKxy7.js";import{D as j}from"./DonutChart.stories-D9t-RpEI.js";import{D as w}from"./LineChart.stories-B6Z_edt1.js";import{D as S}from"./PieChart.stories-PXqI5WxV.js";import{D as R}from"./RadarChart.stories-DBvqsxFu.js";import{D as I}from"./RadialChart.stories-_crQAH4d.js";import{D as T}from"./ScatterChart.stories-ClrCVZQi.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./index-CVrKfxdZ.js";import"./Carousel-D5xh3lBo.js";import"./ScrollEnablement-DyC328cf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B6qvXu8R.js";import"./slim-arrow-left-BE5Zy2xp.js";import"./DemoProps-eeGsiXID.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-KNMsBToN.js";import"./ChartContainer-Cn48YoqZ.js";import"./index-BxxqrhiV.js";import"./useCancelAnimationFallback-D-c_I_a0.js";import"./YAxisTicks-DAodSIAU.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C2CClpPR.js";import"./ChartDataLabel-CV2PzT4t.js";import"./useOnClickInternal-D6jA2reT.js";import"./react-content-loader.es-Dx66IOnv.js";import"./useIsRTL-CQal8GpR.js";import"./useLongestYAxisLabel-DFIKdmHZ.js";import"./ComposedChart-CV8eJQ9L.js";import"./Line-b4YFS1Wh.js";import"./Scatter-DajwUjB4.js";import"./index-N7vuimk9.js";import"./PieChart-DvI7hoFX.js";import"./Placeholder-bjKD27VA.js";import"./LineChart-Cj7M6SBD.js";const $=`# @ui5/webcomponents-react-charts

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
