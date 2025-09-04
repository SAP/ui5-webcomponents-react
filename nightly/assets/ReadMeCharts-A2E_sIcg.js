import{r as i,j as t,T as l}from"./iframe-D3WSfxnn.js";import{useMDXComponents as p}from"./index-INJaxUMc.js";import{M as u,a as h,k as f}from"./blocks-BRQLHU1o.js";import"./Tag-tOepiG2u.js";import"./index-BVrxhT_e.js";import{F as d}from"./CommandsAndQueries-D0ehjJEo.js";import"./i18n-DSpjDgSK.js";import"./copy-B0_WxO9i.js";import{T as b}from"./TableOfContent-D7UH4733.js";import{C}from"./index-aMJOm6ay.js";import{D}from"./BarChart.stories-DQSus6pD.js";import{D as y}from"./BulletChart.stories-DphzQ4KU.js";import{D as g}from"./ColumnChart.stories-Cx_bdB5n.js";import{D as v}from"./ColumnChartWithTrend.stories--iTOOVl3.js";import{D as x}from"./ComposedChart.stories-CNmIF2fJ.js";import{D as j}from"./DonutChart.stories-Dzer4Mpo.js";import{D as w}from"./LineChart.stories-BPErA7TY.js";import{D as S}from"./PieChart.stories-bH1odrVp.js";import{D as R}from"./RadarChart.stories-BrQGWQgF.js";import{D as I}from"./RadialChart.stories-8j04ECHR.js";import{D as T}from"./ScatterChart.stories-Cqxo_FvY.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./index-BE0SODKX.js";import"./Carousel-CJpv3K3P.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dlz1UuRL.js";import"./slim-arrow-left-B8bTGriN.js";import"./DemoProps-CpmuPRqj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Oi-h_O9v.js";import"./ChartContainer-DTlQ8mFb.js";import"./index-BqBHLTfL.js";import"./useCancelAnimationFallback--pdLwTmU.js";import"./YAxisTicks-lMY5MhEN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CJ3MWp3j.js";import"./ChartDataLabel-ubmwbAF0.js";import"./useOnClickInternal-DDyUR267.js";import"./react-content-loader.es-BArgY1et.js";import"./useIsRTL--4BOzxXK.js";import"./useLongestYAxisLabel-CAhk9aJa.js";import"./ComposedChart-DA0iOUnG.js";import"./Line-BakZGz_c.js";import"./Scatter-D6B3pmYw.js";import"./index-CgS9zUP4.js";import"./PieChart-DRnw1K7R.js";import"./Placeholder-Dre-TEe2.js";import"./LineChart-DqP2C5nY.js";const $=`# @ui5/webcomponents-react-charts

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
