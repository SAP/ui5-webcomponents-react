import{r as i,j as t,T as l}from"./iframe-C-EBr6B5.js";import{useMDXComponents as p}from"./index-CsHoO3vp.js";import{M as u,a as h,k as f}from"./blocks-CW6WXKe3.js";import"./Tag-oA_76L9w.js";import"./index-w0Ow44Ci.js";import{F as d}from"./CommandsAndQueries-uIAr-det.js";import"./i18n-DCXZOGva.js";import"./copy-u5h8VvvF.js";import{T as b}from"./TableOfContent-CAVSmF6L.js";import{C}from"./index-D-5n34PC.js";import{D}from"./BarChart.stories-BEXGm_z-.js";import{D as y}from"./BulletChart.stories-Cd2y2wzy.js";import{D as g}from"./ColumnChart.stories-Cz0G8UUO.js";import{D as v}from"./ColumnChartWithTrend.stories-BPPyhiKo.js";import{D as x}from"./ComposedChart.stories-Cbs7Zh0L.js";import{D as j}from"./DonutChart.stories-D1bP8xiu.js";import{D as w}from"./LineChart.stories-Iweoh3KL.js";import{D as S}from"./PieChart.stories-t4jo-avr.js";import{D as R}from"./RadarChart.stories-BWaIPGt4.js";import{D as I}from"./RadialChart.stories-4bSP5UCQ.js";import{D as T}from"./ScatterChart.stories-BvX_XmkY.js";import"./preload-helper-D9Z9MdNV.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./index-DPNnv8Bc.js";import"./Carousel-jzUG65Hi.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-DfIrZR0T.js";import"./DemoProps-Dk4VVNNa.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BEwYMXaY.js";import"./ChartContainer-C4oVE50r.js";import"./index-BIxje1JV.js";import"./useCancelAnimationFallback-pVHs52fq.js";import"./YAxisTicks-BDdIEigm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CIw5PFb-.js";import"./ChartDataLabel-L2g6--M1.js";import"./useOnClickInternal-VaqwaSI8.js";import"./react-content-loader.es-C80MOHp2.js";import"./useIsRTL-DGcoN34w.js";import"./useLongestYAxisLabel--PkAhwUc.js";import"./ComposedChart-Dfo9vjvx.js";import"./Line-BBVB88k5.js";import"./Scatter-BYg3JH1U.js";import"./index-DG6QzF4L.js";import"./index-D1Y3jwuu.js";import"./Placeholder-DDMCLc-R.js";import"./index-CPPuRsno.js";const $=`# @ui5/webcomponents-react-charts

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
