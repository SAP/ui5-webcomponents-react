import{r as i,j as t,T as l}from"./iframe-Plj9L4DO.js";import{useMDXComponents as p}from"./index-uN80YAVR.js";import{M as u,a as h,k as f}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import"./copy-DLXELO5k.js";import{F as d}from"./CommandsAndQueries-BWyKkggu.js";import{T as b}from"./TableOfContent-awrCgv2Y.js";import{C}from"./index-fSyAtAa0.js";import{D}from"./BarChart.stories-CHQs0UdL.js";import{D as y}from"./BulletChart.stories-BvZ89rop.js";import{D as g}from"./ColumnChart.stories-Dy7mLpV3.js";import{D as v}from"./ColumnChartWithTrend.stories-CSbOOMBa.js";import{D as x}from"./ComposedChart.stories-BzKE65pm.js";import{D as j}from"./DonutChart.stories-ibB1x71U.js";import{D as w}from"./LineChart.stories-DCiTDxOK.js";import{D as S}from"./PieChart.stories-CA3DD8mw.js";import{D as R}from"./RadarChart.stories-CB2jbEpV.js";import{D as I}from"./RadialChart.stories-HpBTslQ5.js";import{D as T}from"./ScatterChart.stories-fzutnK8c.js";import"./preload-helper-Ct5FWWRu.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./index-B6F36pGT.js";import"./Carousel-BkpYNNQ6.js";import"./ScrollEnablement-C4mp0fCO.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CRUnhyt7.js";import"./slim-arrow-left-BeVobF94.js";import"./DemoProps-1iGXFgzo.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DkgcSXNg.js";import"./ChartContainer-DXtjPQpy.js";import"./index-BzZ4luee.js";import"./useCancelAnimationFallback-Bl0bmGz_.js";import"./YAxisTicks-jV6ulnmz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DNJqmUB8.js";import"./ChartDataLabel-Dapd867f.js";import"./useOnClickInternal-hSeZdSCS.js";import"./react-content-loader.es-D9Gq66Hb.js";import"./useIsRTL-_CpVncDg.js";import"./useLongestYAxisLabel-HPv5wLCy.js";import"./ComposedChart-t6DQaz8C.js";import"./Line-DttU6O4D.js";import"./Scatter-lmrNkGtP.js";import"./index-BuU2yxjn.js";import"./PieChart-BRjhzBCF.js";import"./Placeholder-BFaGBv6n.js";import"./LineChart-DGEwRo3U.js";const $=`# @ui5/webcomponents-react-charts

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
