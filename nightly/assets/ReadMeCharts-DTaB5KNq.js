import{r as i,j as t,T as l}from"./iframe-BxEu-xci.js";import{useMDXComponents as p}from"./index-DIpNHUFd.js";import{M as u,a as h,k as f}from"./blocks-DPfoGqoC.js";import"./Tag-BNi2hR4G.js";import"./index-BorC4J59.js";import"./copy-byxAjSE6.js";import{F as d}from"./CommandsAndQueries-BL1k5Lab.js";import{T as b}from"./TableOfContent-B_Sk6ocw.js";import{C}from"./index-CAFuih_q.js";import{D}from"./BarChart.stories-COWntDkT.js";import{D as y}from"./BulletChart.stories-WshKMQ2c.js";import{D as g}from"./ColumnChart.stories-CzlmdRYl.js";import{D as v}from"./ColumnChartWithTrend.stories-C-zmNEb2.js";import{D as x}from"./ComposedChart.stories-CaDf-_P1.js";import{D as j}from"./DonutChart.stories-MlnTwDwu.js";import{D as w}from"./LineChart.stories-BqHakwWc.js";import{D as S}from"./PieChart.stories-m9VZu7AK.js";import{D as R}from"./RadarChart.stories-DoK_sXTe.js";import{D as I}from"./RadialChart.stories-QoNGdghU.js";import{D as T}from"./ScatterChart.stories-DCS2Hyhs.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BKw42Lxc.js";import"./sys-enter-2-BkwngAtf.js";import"./alert-DQ3naR-W.js";import"./index-CFj32LYi.js";import"./index-CL8FjSwM.js";import"./index-CnHUdtnF.js";import"./Link-CkCyRMbi.js";import"./addCustomCSSWithScoping-C3RRJQPN.js";import"./index-DSeLD822.js";import"./index-Dzht26Rp.js";import"./index-BV37wPbr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dYhLm2AL.js";import"./index-zhC6_est.js";import"./Carousel-Dvo-SWjC.js";import"./ScrollEnablement-B0qFQ7DX.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C4LBCdnZ.js";import"./slim-arrow-left-MD9grm-f.js";import"./DemoProps-DZtJgWZK.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BxPvVnNT.js";import"./ChartContainer-DWgogM34.js";import"./index-DSA_Eb7Y.js";import"./useCancelAnimationFallback-U_TtTcgh.js";import"./YAxisTicks-D3DUxG1K.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-tYphE1W4.js";import"./ChartDataLabel-B4gxgNc2.js";import"./useOnClickInternal-hkxJOnU5.js";import"./react-content-loader.es-DV85UdMK.js";import"./useIsRTL-BpqbY7M4.js";import"./useLongestYAxisLabel-DvxVkyFT.js";import"./ComposedChart-BaFH41hc.js";import"./Line-eiDDWK62.js";import"./Scatter-CBwalcsz.js";import"./index-XvlDdGdc.js";import"./PieChart-B3MoZhoH.js";import"./Placeholder-iX7izBZJ.js";import"./LineChart-1QuwX7pv.js";const $=`# @ui5/webcomponents-react-charts

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
