import{r as i,j as t,T as l}from"./iframe-D47IesGI.js";import{useMDXComponents as p}from"./index-B-Cjj5vb.js";import{M as u,a as h,k as f}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import"./copy-CpxPPhhd.js";import{F as d}from"./CommandsAndQueries-BUssvnnv.js";import{T as b}from"./TableOfContent-WE_h0rfY.js";import{C}from"./index-BwMaAQ8n.js";import{D}from"./BarChart.stories-VQqhjeZQ.js";import{D as y}from"./BulletChart.stories-i8jzqFVt.js";import{D as g}from"./ColumnChart.stories-CzF7_HJi.js";import{D as v}from"./ColumnChartWithTrend.stories-CHX-V7Ju.js";import{D as x}from"./ComposedChart.stories-CnYSTmFD.js";import{D as j}from"./DonutChart.stories-DK_mSybd.js";import{D as w}from"./LineChart.stories-Dgyn72tc.js";import{D as S}from"./PieChart.stories-mcRptQJ4.js";import{D as R}from"./RadarChart.stories-DhYB8wDK.js";import{D as I}from"./RadialChart.stories-BqOK-pIK.js";import{D as T}from"./ScatterChart.stories-DMquq-bC.js";import"./preload-helper-Ct5FWWRu.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BYtsHb6f.js";import"./Carousel-CiWGkkal.js";import"./ScrollEnablement-DwY0RoAs.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B-75Kfq4.js";import"./slim-arrow-left-CokxJa_b.js";import"./DemoProps-DkBoD4y4.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DIO26CE2.js";import"./ChartContainer-D4GosG41.js";import"./index-BMjRkiVz.js";import"./useCancelAnimationFallback-CS2JPRDs.js";import"./YAxisTicks-B-QsfiAi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CkERj0Dr.js";import"./ChartDataLabel-elqsQgd2.js";import"./useOnClickInternal-B1YJlqt1.js";import"./react-content-loader.es-CriUghDp.js";import"./useIsRTL-CTOFbx1K.js";import"./useLongestYAxisLabel-Bfutx8sm.js";import"./ComposedChart-DnqqY_c5.js";import"./Line-DIXVrC3O.js";import"./Scatter-59QkZYfm.js";import"./index-DGampXeJ.js";import"./PieChart-BjqBaFe3.js";import"./Placeholder-B16zXfHD.js";import"./LineChart-D2otkdyl.js";const $=`# @ui5/webcomponents-react-charts

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
