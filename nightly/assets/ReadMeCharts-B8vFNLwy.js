import{r as i,j as t,T as l}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as p}from"./index-EJQOh2Id.js";import{M as u,a as h,k as f}from"./blocks-CkgJFs4T.js";import"./Tag-D_p_BT-M.js";import"./index-ChA7roql.js";import"./copy-BQA3UKNo.js";import{F as d}from"./CommandsAndQueries-BwMOH1SZ.js";import{T as b}from"./TableOfContent-COtDOSzs.js";import{C}from"./index-DrcBh1Fw.js";import{D}from"./BarChart.stories-e-bXZQjq.js";import{D as y}from"./BulletChart.stories-CA1k6mol.js";import{D as g}from"./ColumnChart.stories-DQmNUblY.js";import{D as v}from"./ColumnChartWithTrend.stories-CzOLkxGj.js";import{D as x}from"./ComposedChart.stories-Dhzqm6dC.js";import{D as j}from"./DonutChart.stories-B8R6utQ3.js";import{D as w}from"./LineChart.stories-CM-srAGk.js";import{D as S}from"./PieChart.stories-o6xs_UIr.js";import{D as R}from"./RadarChart.stories-B4OKpFWT.js";import{D as I}from"./RadialChart.stories-BCzq5hT3.js";import{D as T}from"./ScatterChart.stories-BKR8kggm.js";import"./preload-helper-Ct5FWWRu.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./index-D9TUnkjB.js";import"./Carousel-C3az94c8.js";import"./ScrollEnablement-BDrNOFng.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B0QmV0Ko.js";import"./slim-arrow-left-CsR8a6_-.js";import"./DemoProps-ClI26to9.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CMLYEEF3.js";import"./ChartContainer-DCF_OTKT.js";import"./index-KjM22Mkn.js";import"./useCancelAnimationFallback-r8pMcEUw.js";import"./YAxisTicks-OVuZBHkf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CwDjqoSO.js";import"./ChartDataLabel-BwFljouD.js";import"./useOnClickInternal-Fg5EcI66.js";import"./react-content-loader.es-BU8G4_xP.js";import"./useIsRTL-iU-OFwyb.js";import"./useLongestYAxisLabel-CI8KHI67.js";import"./ComposedChart-BjkV9Vc9.js";import"./Line-WwdzfDKS.js";import"./Scatter-s6Gd1RfV.js";import"./index-D5nYQfRR.js";import"./PieChart-B_uG_f-X.js";import"./Placeholder-BJdJ7ALu.js";import"./LineChart-PE4uqtgQ.js";const $=`# @ui5/webcomponents-react-charts

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
