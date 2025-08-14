import{r as i,j as t,T as l}from"./iframe-DrWv7kqk.js";import{useMDXComponents as p}from"./index-COfklbz7.js";import{M as u,a as h,k as f}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import"./copy-CdjvYQrK.js";import{F as d}from"./CommandsAndQueries-ChjYN9hd.js";import{T as b}from"./TableOfContent-DXjPHaMB.js";import{C}from"./index-BlpoXpI9.js";import{D}from"./BarChart.stories-B_FMZ3gY.js";import{D as y}from"./BulletChart.stories-V_bihkq2.js";import{D as g}from"./ColumnChart.stories-B4fi3xNF.js";import{D as v}from"./ColumnChartWithTrend.stories-Bve_KLxA.js";import{D as x}from"./ComposedChart.stories-NE6qe1BB.js";import{D as j}from"./DonutChart.stories-6ZjFoQ_h.js";import{D as w}from"./LineChart.stories-CIGIcp9S.js";import{D as S}from"./PieChart.stories-D8FnXYK_.js";import{D as R}from"./RadarChart.stories-Cat5hHMp.js";import{D as I}from"./RadialChart.stories-B1XOEl0C.js";import{D as T}from"./ScatterChart.stories-B0Gck8lF.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./index-DJ9rRFX2.js";import"./Carousel-CNjNi6P_.js";import"./ScrollEnablement-yOUkUvJ6.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C3PYlwhV.js";import"./slim-arrow-left-CpocEW8Z.js";import"./DemoProps-CrTfmUPi.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BGFIaa79.js";import"./ChartContainer-DZt2mTnm.js";import"./index-3r57QoEB.js";import"./useCancelAnimationFallback-D1t9jNDa.js";import"./YAxisTicks-D9njGajz.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C7uATdt9.js";import"./ChartDataLabel-0hcZmwOH.js";import"./useOnClickInternal-B4ApQSB3.js";import"./react-content-loader.es-Dh0iVthy.js";import"./useIsRTL-XwDO1usx.js";import"./useLongestYAxisLabel-K8A3LePV.js";import"./ComposedChart-DeS88cm0.js";import"./Line-G0M6mI-1.js";import"./Scatter-Bkv9EPIW.js";import"./index-DOSPBt4x.js";import"./PieChart-ZQZ1aIBF.js";import"./Placeholder-BTSkgfiz.js";import"./LineChart-D65y9Z2x.js";const $=`# @ui5/webcomponents-react-charts

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
