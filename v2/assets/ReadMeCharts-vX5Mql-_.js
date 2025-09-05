import{r as i,j as t,T as l}from"./iframe-wtGyowSu.js";import{useMDXComponents as p}from"./index-CZZ2_hDJ.js";import{M as u,a as h,k as f}from"./blocks-DOUzMh6P.js";import"./Tag-CF7bcptF.js";import"./index-DemLuH5_.js";import{F as d}from"./CommandsAndQueries-DQ0OWp_s.js";import"./i18n-DCXZOGva.js";import"./copy-fNgmErhy.js";import{T as b}from"./TableOfContent-BzO31W1S.js";import{C}from"./index-TFZ92Mxf.js";import{D}from"./BarChart.stories-BfSnr2ks.js";import{D as y}from"./BulletChart.stories-ECD25cXr.js";import{D as g}from"./ColumnChart.stories-LqDItRSj.js";import{D as v}from"./ColumnChartWithTrend.stories-kpNy2PGO.js";import{D as x}from"./ComposedChart.stories-BQVklOFT.js";import{D as j}from"./DonutChart.stories-CAOerm3n.js";import{D as w}from"./LineChart.stories-CQBmUscA.js";import{D as S}from"./PieChart.stories-B0s_K-P8.js";import{D as R}from"./RadarChart.stories-Cn1CzgaN.js";import{D as I}from"./RadialChart.stories-P0AOQvb-.js";import{D as T}from"./ScatterChart.stories-DO-1E9ms.js";import"./preload-helper-D9Z9MdNV.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./index-CR8pF6-t.js";import"./Carousel-C0E_KT51.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-jduiMT66.js";import"./DemoProps-TiT8K_vA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Cn6a7qqs.js";import"./ChartContainer-DfogEk9Q.js";import"./index-C0KYOG-T.js";import"./useCancelAnimationFallback-TdTOOZJE.js";import"./YAxisTicks-Ciry9aF9.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D9EAXzN4.js";import"./ChartDataLabel-BnoiboKh.js";import"./useOnClickInternal-CWV5pr6I.js";import"./react-content-loader.es-92BhFEvG.js";import"./useIsRTL-Qs2nxCti.js";import"./useLongestYAxisLabel-2CSm7R_y.js";import"./ComposedChart-Bkdj17f_.js";import"./Line-B_9KjtP_.js";import"./Scatter-CXipeBgi.js";import"./index-BrZ3P4x8.js";import"./index--VzXgXaN.js";import"./Placeholder-BtweAzua.js";import"./index-CWjNlHPn.js";const $=`# @ui5/webcomponents-react-charts

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
