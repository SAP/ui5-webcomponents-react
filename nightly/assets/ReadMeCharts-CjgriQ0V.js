import{r as i,j as t,T as l}from"./iframe-BGSq42U4.js";import{useMDXComponents as p}from"./index-DdgODfaa.js";import{M as u,a as h,k as f}from"./blocks-DinJR8BJ.js";import"./Tag-DFLgZ7W6.js";import"./index-4G2XFF8s.js";import{F as d}from"./CommandsAndQueries-DmG8Z04y.js";import"./i18n-DCXZOGva.js";import"./copy-BkyD6IBJ.js";import{T as b}from"./TableOfContent-CeNmhJSM.js";import{C}from"./index-DyghrcRQ.js";import{D}from"./BarChart.stories-C53cnHDs.js";import{D as y}from"./BulletChart.stories-CNhVitYQ.js";import{D as g}from"./ColumnChart.stories-DnrfU5JR.js";import{D as v}from"./ColumnChartWithTrend.stories-DJyeRq8C.js";import{D as x}from"./ComposedChart.stories-D0GizesP.js";import{D as j}from"./DonutChart.stories-LjHXqqkh.js";import{D as w}from"./LineChart.stories-BfMbXtHE.js";import{D as S}from"./PieChart.stories-kDEB3MHl.js";import{D as R}from"./RadarChart.stories-CIjKsv8Z.js";import{D as I}from"./RadialChart.stories-B_zoYco1.js";import{D as T}from"./ScatterChart.stories-D4cvPW8y.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BYqUssqf.js";import"./sys-enter-2-dj_WkcIy.js";import"./alert-pmNi1f9N.js";import"./index-CFLPIYxg.js";import"./index-DeoM-MQY.js";import"./index-DBkY9uWW.js";import"./Link-YDiGCC73.js";import"./addCustomCSSWithScoping-BoN0_mzK.js";import"./index-81YUArEn.js";import"./index-DnKOFCSh.js";import"./index-D1i96R2Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJV2VOx9.js";import"./index-Dv5XzTWy.js";import"./Carousel--0n20SGM.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-gj2oC5tf.js";import"./DemoProps-RtlfG-Wc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D7jjRcTY.js";import"./ChartContainer-Wg2brOtS.js";import"./index-BDRoTd8f.js";import"./useCancelAnimationFallback-DV3LUbca.js";import"./YAxisTicks-CbZrdZbk.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BozP5tkJ.js";import"./ChartDataLabel-BTp1ZZjE.js";import"./useOnClickInternal-Dq9GeA-e.js";import"./react-content-loader.es-d2l4HyRV.js";import"./useIsRTL-UmUMTfkT.js";import"./useLongestYAxisLabel-Bg3_t61S.js";import"./ComposedChart-DnoPyB0s.js";import"./Line-DqdFYidE.js";import"./Scatter-DZLo6Z93.js";import"./index-Cbb3zis6.js";import"./index-CixP1oFG.js";import"./Placeholder-BqUZtVb5.js";import"./index-DwDEZ5rb.js";const $=`# @ui5/webcomponents-react-charts

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
