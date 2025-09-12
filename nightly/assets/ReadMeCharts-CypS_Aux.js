import{r as i,j as t,T as l}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as p}from"./index-BXhipMBG.js";import{M as u,a as h,k as f}from"./blocks-B5a3gZGW.js";import"./Tag-BSiRJmHh.js";import"./index-DhT04Xs9.js";import{F as d}from"./CommandsAndQueries-CYuC6yI9.js";import"./copy-DA6pIWgW.js";import{T as b}from"./TableOfContent-JiosDGXF.js";import{C}from"./index-0WIvmwyQ.js";import{D}from"./BarChart.stories-DQf6cjzU.js";import{D as y}from"./BulletChart.stories-bqp8J0V5.js";import{D as g}from"./ColumnChart.stories-Cmbfte-C.js";import{D as v}from"./ColumnChartWithTrend.stories-CoqoN7Kx.js";import{D as x}from"./ComposedChart.stories-DP8LxhjS.js";import{D as j}from"./DonutChart.stories-BFYNpCwg.js";import{D as w}from"./LineChart.stories-Bv_qGNk2.js";import{D as R}from"./PieChart.stories-Bb5BOIBq.js";import{D as S}from"./RadarChart.stories-DURaIQ7K.js";import{D as I}from"./RadialChart.stories-DVZEHFJl.js";import{D as T}from"./ScatterChart.stories-bzA0_c9V.js";import"./preload-helper-D9Z9MdNV.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./index-DMuVL8ZX.js";import"./Carousel-Coe5Z1uD.js";import"./ScrollEnablement-6VGfabhp.js";import"./animate-JylhYHXj.js";import"./AnimationMode-D3xjKfhr.js";import"./slim-arrow-left-Bq7hRQq6.js";import"./DemoProps-umkgtMgY.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BI0aTwvx.js";import"./ChartContainer-JBOUyo9m.js";import"./index-sbxtCj2e.js";import"./useCancelAnimationFallback-BMC3Owlg.js";import"./YAxisTicks-D8eG5DIw.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CKGqSLzz.js";import"./ChartDataLabel-_Jqsk2aG.js";import"./useOnClickInternal-BNYOCFxN.js";import"./react-content-loader.es-CbHX-Clh.js";import"./useIsRTL-0JvlMTKu.js";import"./useLongestYAxisLabel-BWcxANfY.js";import"./ComposedChart-DliurYlI.js";import"./Line-Bwov7lof.js";import"./Scatter-lcvYfCea.js";import"./index-hZRzXr-I.js";import"./index-Dz5yayS7.js";import"./Placeholder-DuknBCAy.js";import"./index-Xci5Ku6B.js";const $=`# @ui5/webcomponents-react-charts

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
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`;function E(n){const{children:o}=n,e=i.useRef(null),a=i.useRef(0),r=i.useRef(null),s=()=>{r.current&&(clearInterval(r.current),r.current=null)};return i.useEffect(()=>{const m=e.current;return m&&o.length&&(r.current=setInterval(()=>{a.current++,m.navigateTo(a.current%o.length)},5e3)),()=>{s()}},[o]),t.jsx(C,{style:{height:"500px"},arrowsPlacement:"Navigation",cyclic:!0,ref:e,onNavigate:()=>{s()},...n})}function c(n){const o={h2:"h2",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"Charts / Docs"}),`
`,t.jsx(b,{}),`
`,t.jsx(h,{children:$.split("## Documentation")[0].trim()}),`
`,t.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,t.jsx(E,{children:[{name:"BarChart",component:D},{name:"BulletChart",component:y},{name:"ColumnChart",component:g},{name:"ColumnChartWithTrend",component:v},{name:"ComposedChart",component:x},{name:"DonutChart",component:j},{name:"LineChart",component:w},{name:"PieChart",component:R},{name:"RadarChart",component:S},{name:"RadialChart",component:I},{name:"ScatterChart",component:T}].map(e=>t.jsxs("div",{style:{width:"100%"},children:[t.jsx(l,{children:e.name}),t.jsx(f,{of:e.component})]},e.name))}),`
`,t.jsx(d,{})]})}function Bt(n={}){const{wrapper:o}={...p(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(c,{...n})}):c(n)}export{Bt as default};
