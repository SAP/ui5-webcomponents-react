import{r as i,j as t,T as l}from"./iframe-BaUS3k1G.js";import{useMDXComponents as p}from"./index-BI_MoYzx.js";import{M as u,a as h,k as f}from"./blocks-B0L69tD0.js";import"./Tag-DBf9vhPp.js";import"./index-DRxFqLKQ.js";import{F as d}from"./CommandsAndQueries-Br4DVRUh.js";import"./copy-DThSO1XV.js";import{T as b}from"./TableOfContent-BkQC1bnG.js";import{C}from"./index-3v0DHVVQ.js";import{D}from"./BarChart.stories-Dmbmp4He.js";import{D as y}from"./BulletChart.stories-CX7ACAvN.js";import{D as g}from"./ColumnChart.stories-BEAGwyn_.js";import{D as v}from"./ColumnChartWithTrend.stories-B9GUbtHQ.js";import{D as x}from"./ComposedChart.stories-emr-FgvT.js";import{D as j}from"./DonutChart.stories-BYRwWHC3.js";import{D as w}from"./LineChart.stories-DUhu0yhj.js";import{D as S}from"./PieChart.stories-Ds8ai87A.js";import{D as R}from"./RadarChart.stories-Dx7NHs4z.js";import{D as I}from"./RadialChart.stories-BciAtsdf.js";import{D as T}from"./ScatterChart.stories-DeJDLt95.js";import"./preload-helper-Ct5FWWRu.js";import"./information-7Y3gJKKP.js";import"./sys-enter-2-BfkJMWkZ.js";import"./alert-BAVxkr1j.js";import"./index-BYuYKtBV.js";import"./index-DCjJA-51.js";import"./index-DvySby2h.js";import"./Link-CWqnr4YP.js";import"./addCustomCSSWithScoping-CsHiQv5I.js";import"./index-Cf1dwhov.js";import"./index-C3F6-2iN.js";import"./index-BVDlh8LB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNEqbSr6.js";import"./index-BYW7BxIG.js";import"./Carousel-BTLMcAGW.js";import"./ScrollEnablement-2bJd9RZ5.js";import"./animate-JylhYHXj.js";import"./AnimationMode-COb6cINf.js";import"./slim-arrow-left-B_-BdxIr.js";import"./DemoProps-DZ06XJMA.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DG-wJ8Ga.js";import"./ChartContainer-ABxY9hON.js";import"./index-BWchkGL6.js";import"./useCancelAnimationFallback-DW4uzZKx.js";import"./YAxisTicks-C0nOj55-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-yMJQ5qwC.js";import"./ChartDataLabel-D8MXf5Ao.js";import"./useOnClickInternal-D4_jcW9K.js";import"./react-content-loader.es-BG-qhzIh.js";import"./useIsRTL-HDA9Bb1C.js";import"./useLongestYAxisLabel-Bez-mLnT.js";import"./ComposedChart-CrmTBFrJ.js";import"./Line-0O02Nj5j.js";import"./Scatter-CsAjugTt.js";import"./index-BqPrb5U4.js";import"./PieChart-DJDD_fVe.js";import"./Placeholder-zlY_HxXo.js";import"./LineChart-7SZdrauh.js";const $=`# @ui5/webcomponents-react-charts

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
