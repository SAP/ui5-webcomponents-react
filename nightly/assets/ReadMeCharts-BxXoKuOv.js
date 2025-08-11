import{r as i,j as t,T as l}from"./iframe-BCRKbB-F.js";import{useMDXComponents as p}from"./index-BX-rGI6y.js";import{M as u,a as h,k as f}from"./blocks-7Z_E6jI9.js";import"./Tag-DS_H74jk.js";import"./index-D-3HueK4.js";import"./copy-B5cEq6fF.js";import{F as d}from"./CommandsAndQueries-B-6PqVJi.js";import{T as b}from"./TableOfContent-DlQOflHd.js";import{C}from"./index-Dv0wJqtQ.js";import{D}from"./BarChart.stories-CI7E3A-z.js";import{D as y}from"./BulletChart.stories-D0RhjG2F.js";import{D as g}from"./ColumnChart.stories-DDw5_So3.js";import{D as v}from"./ColumnChartWithTrend.stories-wd_JY9ZV.js";import{D as x}from"./ComposedChart.stories-D-wdlaO7.js";import{D as j}from"./DonutChart.stories-C8qwo9b5.js";import{D as w}from"./LineChart.stories-7CHsiFMN.js";import{D as S}from"./PieChart.stories-DYcgfIfD.js";import{D as R}from"./RadarChart.stories-Dz0eXhD6.js";import{D as I}from"./RadialChart.stories-UoDfosWL.js";import{D as T}from"./ScatterChart.stories-Bg9aY0lp.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DeBw_tQ-.js";import"./sys-enter-2-pSQieqxz.js";import"./alert-xw5ZZb5l.js";import"./index-BH2JzlMl.js";import"./index-eqaCtQgG.js";import"./index-DsSU62b9.js";import"./Link-DusYvz_E.js";import"./addCustomCSSWithScoping-DUsuu1QR.js";import"./index-Cfre80S4.js";import"./index-DNvh-56A.js";import"./index-K2GRSkK5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mh7-FWH-.js";import"./index-C9k5hi-S.js";import"./Carousel-Bxujx6tL.js";import"./ScrollEnablement-CeBEvB5k.js";import"./animate-JylhYHXj.js";import"./AnimationMode-madL63Zy.js";import"./slim-arrow-left-DG2BGsRA.js";import"./DemoProps-DpAHnTHz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CL5uldzL.js";import"./ChartContainer-C2dQXD77.js";import"./index-CatAJS7G.js";import"./useCancelAnimationFallback-D2t9o-S9.js";import"./YAxisTicks-cpjPKQk-.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-ChNLwMsD.js";import"./ChartDataLabel-eN6GoV2D.js";import"./useOnClickInternal-CIKyfteA.js";import"./react-content-loader.es-wJYJ4Zmw.js";import"./useIsRTL-CHXXP87C.js";import"./useLongestYAxisLabel-DoF59uZw.js";import"./ComposedChart-Bp-C4-rV.js";import"./Line-VvfwlVFN.js";import"./Scatter-XoDmjtY8.js";import"./index-BZrYf-vq.js";import"./PieChart-CAuSx8NJ.js";import"./Placeholder-BfTDY6eA.js";import"./LineChart-CNywdOYG.js";const $=`# @ui5/webcomponents-react-charts

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
