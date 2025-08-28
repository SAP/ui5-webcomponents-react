import{r as i,j as t,T as l}from"./iframe-ir6pYnmz.js";import{useMDXComponents as p}from"./index-41o0Td7A.js";import{M as u,a as h,k as f}from"./blocks-D_tGmZuN.js";import"./Tag-DRGeWEus.js";import"./index-e4AcpL9G.js";import{F as d}from"./CommandsAndQueries-b6zt1eWd.js";import"./copy-BlUsduAp.js";import{T as b}from"./TableOfContent-COGJEfC8.js";import{C}from"./index-CZfkohPh.js";import{D}from"./BarChart.stories-CDlWCYn0.js";import{D as y}from"./BulletChart.stories-BDLAXnCy.js";import{D as g}from"./ColumnChart.stories-Ca0qHbQ-.js";import{D as v}from"./ColumnChartWithTrend.stories-DF-aVZHb.js";import{D as x}from"./ComposedChart.stories-DvO7WinM.js";import{D as j}from"./DonutChart.stories-CroQ0HY5.js";import{D as w}from"./LineChart.stories-CWDvlPRP.js";import{D as S}from"./PieChart.stories-Bh_V-lu0.js";import{D as R}from"./RadarChart.stories-LujaMaEL.js";import{D as I}from"./RadialChart.stories-DicSv7P6.js";import{D as T}from"./ScatterChart.stories-C0e1j30o.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./index-BbtZuvgL.js";import"./Carousel-Dsc8pd8X.js";import"./ScrollEnablement-DaGY4Jm-.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Cd4KYyti.js";import"./slim-arrow-left-xanXJTib.js";import"./DemoProps-Cfb6CUb0.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-yUtamcFR.js";import"./ChartContainer-BJUa9k-Q.js";import"./index-DAsbl867.js";import"./useCancelAnimationFallback-DvHNIRkZ.js";import"./YAxisTicks-KCZv-coO.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DFGZQp8B.js";import"./ChartDataLabel-BY-ejCtD.js";import"./useOnClickInternal-D4LkWg9U.js";import"./react-content-loader.es-BRA_VIoW.js";import"./useIsRTL-Da2zSY1x.js";import"./useLongestYAxisLabel-B3KQHBP4.js";import"./ComposedChart-CPaoNWX8.js";import"./Line-BZXL4mqy.js";import"./Scatter-Dw15PQqo.js";import"./index-B3j3hz6n.js";import"./PieChart-BxTTqYPU.js";import"./Placeholder-DgJI4Pba.js";import"./LineChart-BFjvdo-P.js";const $=`# @ui5/webcomponents-react-charts

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
