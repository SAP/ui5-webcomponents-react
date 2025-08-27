import{r as i,j as t,T as l}from"./iframe-BuT579UQ.js";import{useMDXComponents as p}from"./index-hwCnNpvR.js";import{M as u,a as h,k as f}from"./blocks-xCv3ALrs.js";import"./Tag-BfLQPV5Q.js";import"./index-BdhtxwT5.js";import{F as d}from"./CommandsAndQueries-bkB85Yh1.js";import"./copy-wEyzDN_W.js";import{T as b}from"./TableOfContent-38NG_1gx.js";import{C}from"./index-F0YU2Hln.js";import{D}from"./BarChart.stories-ClAUVQGX.js";import{D as y}from"./BulletChart.stories-3OHxHUgC.js";import{D as g}from"./ColumnChart.stories-BBXzAmjg.js";import{D as v}from"./ColumnChartWithTrend.stories-uj3xFb8E.js";import{D as x}from"./ComposedChart.stories-Bkr0VCts.js";import{D as j}from"./DonutChart.stories-CUPMWpfG.js";import{D as w}from"./LineChart.stories-RTX2sPh2.js";import{D as S}from"./PieChart.stories-o0VRNNtz.js";import{D as R}from"./RadarChart.stories-DZUaj-ir.js";import{D as I}from"./RadialChart.stories-DvPzHP4a.js";import{D as T}from"./ScatterChart.stories-s8GmZq-p.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BpdkAt88.js";import"./sys-enter-2-fNvpiTi4.js";import"./alert-Dvzv9mH1.js";import"./index-B5tYw3g0.js";import"./index-CKRjOfqg.js";import"./index-DcodLJdG.js";import"./Link-BRdwNtbO.js";import"./addCustomCSSWithScoping-BObqnoGh.js";import"./index-CSxL7VzK.js";import"./index-mwQcMkri.js";import"./index-t5BVUaSq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWHNxoJ6.js";import"./index-Sm3A70Iw.js";import"./Carousel-BId8Q3SQ.js";import"./ScrollEnablement-CcsddKsW.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BzwW4l4M.js";import"./slim-arrow-left-CLJgW7LQ.js";import"./DemoProps-q2P-nIAS.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CmP_BXxM.js";import"./ChartContainer-XEjc7b1U.js";import"./index-oe8Gqb1X.js";import"./useCancelAnimationFallback-Dz5x6SNZ.js";import"./YAxisTicks-BradKFld.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CAv7gHQf.js";import"./ChartDataLabel-_4nAdbqN.js";import"./useOnClickInternal-D6Pn0xgw.js";import"./react-content-loader.es-DNCv1y0U.js";import"./useIsRTL-5gvEDkWI.js";import"./useLongestYAxisLabel-BL_jF45l.js";import"./ComposedChart-D9EQab98.js";import"./Line-Ccm5xlJA.js";import"./Scatter-OqgrD2BC.js";import"./index-P0id4c6e.js";import"./PieChart-D7c6pX-2.js";import"./Placeholder-CEmlFzbz.js";import"./LineChart-C4k2-o1Y.js";const $=`# @ui5/webcomponents-react-charts

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
