import{r as i,j as t,T as l}from"./iframe-S1rR11cQ.js";import{useMDXComponents as p}from"./index-69KsrxW4.js";import{M as u,a as h,k as f}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import{F as d}from"./CommandsAndQueries-7fbj5dZq.js";import"./i18n-DSpjDgSK.js";import"./copy-DEUCxjzs.js";import{T as b}from"./TableOfContent-Ckuc7xPL.js";import{C}from"./index-nVL-VJNo.js";import{D}from"./BarChart.stories-BhQNEtv8.js";import{D as y}from"./BulletChart.stories-Bs8TfMyk.js";import{D as g}from"./ColumnChart.stories-BJrfrVvi.js";import{D as v}from"./ColumnChartWithTrend.stories-DC4UVXqe.js";import{D as x}from"./ComposedChart.stories-D-R2fCxf.js";import{D as j}from"./DonutChart.stories-Bi8-Jlqo.js";import{D as w}from"./LineChart.stories-D3pcdzgF.js";import{D as S}from"./PieChart.stories-4kJI6rqP.js";import{D as R}from"./RadarChart.stories-CTjlWLN7.js";import{D as I}from"./RadialChart.stories-BIItgefh.js";import{D as T}from"./ScatterChart.stories-D-CAA696.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./index-BO-Ud12y.js";import"./Carousel-Cogzaobz.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dlz1UuRL.js";import"./slim-arrow-left-B87j_liD.js";import"./DemoProps-Cnqo6Duc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D_KYOL2V.js";import"./ChartContainer-BYHkNWZz.js";import"./index-BE-KkdkZ.js";import"./useCancelAnimationFallback-DVToeARF.js";import"./YAxisTicks-CZu4_Xhm.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Y6UtDID4.js";import"./ChartDataLabel-C13B5Rzu.js";import"./useOnClickInternal--MJ0GwR-.js";import"./react-content-loader.es-Bef26Pxn.js";import"./useIsRTL-DdvIXurs.js";import"./useLongestYAxisLabel-Dg6gZobP.js";import"./ComposedChart-zazreeVD.js";import"./Line-B959L-5N.js";import"./Scatter-dd1EvTnB.js";import"./index-BanhPu0O.js";import"./PieChart-LJkBXSi7.js";import"./Placeholder-BNlHO5ZU.js";import"./LineChart-D9AY5QDE.js";const $=`# @ui5/webcomponents-react-charts

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
