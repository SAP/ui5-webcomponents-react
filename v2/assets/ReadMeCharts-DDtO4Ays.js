import{r as i,j as t,T as l}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as p}from"./index-DCsMWBUP.js";import{M as u,a as h,k as f}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import{F as d}from"./CommandsAndQueries-Bz3F9tKI.js";import"./copy-BvP7Hkk1.js";import{T as b}from"./TableOfContent-DBHLjhyw.js";import{C}from"./index-B2yisF0R.js";import{D}from"./BarChart.stories-C4MhHVVQ.js";import{D as y}from"./BulletChart.stories-DVal9T5O.js";import{D as g}from"./ColumnChart.stories-BNLQvDMW.js";import{D as v}from"./ColumnChartWithTrend.stories-MzMqdZbr.js";import{D as x}from"./ComposedChart.stories-CawyheFK.js";import{D as j}from"./DonutChart.stories-WSgwimMM.js";import{D as w}from"./LineChart.stories-B1e2IiZx.js";import{D as S}from"./PieChart.stories-x187r03_.js";import{D as R}from"./RadarChart.stories-vxNUkoQl.js";import{D as I}from"./RadialChart.stories-DQFBJGUC.js";import{D as T}from"./ScatterChart.stories-qsefh1AO.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./index-DCNonR1q.js";import"./Carousel-CrWrW1F6.js";import"./ScrollEnablement-B7k2YzpG.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B-ai7DKh.js";import"./slim-arrow-left-CExI_fe5.js";import"./DemoProps-f4Bczf74.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BT0X2q3i.js";import"./ChartContainer-Bq-yFABW.js";import"./index-DyEvwlhn.js";import"./useCancelAnimationFallback-yNgVuPsb.js";import"./YAxisTicks-oc3gc_Ao.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C62J5XOl.js";import"./ChartDataLabel-CS_5wN3a.js";import"./useOnClickInternal-J9zOm9mj.js";import"./react-content-loader.es-BMmKZHsK.js";import"./useIsRTL-CnnkiTdh.js";import"./useLongestYAxisLabel-rF9nee8N.js";import"./ComposedChart-B3BJKxEF.js";import"./Line-C0aXx2vy.js";import"./Scatter-GAoILpjq.js";import"./index-FHTK0q05.js";import"./index-CjjbVTD4.js";import"./Placeholder-B4UdFIAr.js";import"./index-DSf3_V8W.js";const $=`# @ui5/webcomponents-react-charts

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
