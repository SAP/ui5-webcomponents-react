import{r as i,j as t,T as l}from"./iframe-CS0WNVf3.js";import{useMDXComponents as p}from"./index-DDJWQvBk.js";import{M as u,a as h,k as f}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import"./copy-BAUFdAAv.js";import{F as d}from"./CommandsAndQueries-DZ6pwvzq.js";import{T as b}from"./TableOfContent-CIMB7FlB.js";import"./WrappingType-BBpR8qCJ.js";import{C}from"./index-DUryLJgV.js";import{D}from"./BarChart.stories-CdE9Lhp7.js";import{D as y}from"./BulletChart.stories-CjFFSBd3.js";import{D as g}from"./ColumnChart.stories-CNnYQxf-.js";import{D as v}from"./ColumnChartWithTrend.stories-86JZwXtX.js";import{D as x}from"./ComposedChart.stories-CxbvIJVH.js";import{D as j}from"./DonutChart.stories-C3Wtl9BH.js";import{D as w}from"./LineChart.stories-DbvJMqEH.js";import{D as S}from"./PieChart.stories-DOIqGEkn.js";import{D as R}from"./RadarChart.stories-iiWv97ef.js";import{D as I}from"./RadialChart.stories-C7-aLkZ6.js";import{D as T}from"./ScatterChart.stories-CqIFI3bH.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./index-CvNKNR4d.js";import"./Carousel-C428yPAq.js";import"./ScrollEnablement-DtdqB5r7.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CcKgQHAc.js";import"./slim-arrow-left-CoO1gf2u.js";import"./DemoProps-PI_kvsf0.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dz1OIDJb.js";import"./ChartContainer-Cw3fBWDj.js";import"./index-DXGd-dVn.js";import"./useCancelAnimationFallback-CHXGJG6W.js";import"./YAxisTicks-DeBYVAIr.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BMGwaGXy.js";import"./ChartDataLabel-DLQcIjq-.js";import"./useOnClickInternal-CCuhRbUi.js";import"./react-content-loader.es-Bq8F2tM7.js";import"./useIsRTL-CrA39wlN.js";import"./useLongestYAxisLabel-ZagPSucY.js";import"./ComposedChart-CAvjnFRw.js";import"./Line-C2-OHVTn.js";import"./Scatter-wEmxirPd.js";import"./index-b263-TAA.js";import"./PieChart-CI6cSVQ-.js";import"./Placeholder-CdtJWh53.js";import"./LineChart-CMSyaA11.js";const $=`# @ui5/webcomponents-react-charts

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
