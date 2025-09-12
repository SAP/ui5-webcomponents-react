import{r as i,j as t,T as l}from"./iframe-caVmfS0N.js";import{useMDXComponents as p}from"./index-CXGNJi-m.js";import{M as u,a as h,k as f}from"./blocks-ZTuRQuXn.js";import"./Tag-D02fgpVR.js";import"./index-ChGg5Mmk.js";import{F as d}from"./CommandsAndQueries-DetWBOzr.js";import"./copy-DWhnNq-F.js";import{T as b}from"./TableOfContent-DyKT0XGl.js";import{C}from"./index-Bw9re4cH.js";import{D}from"./BarChart.stories-J6kDiOfB.js";import{D as y}from"./BulletChart.stories-Bx7HrQzp.js";import{D as g}from"./ColumnChart.stories-6Mi0sjfj.js";import{D as v}from"./ColumnChartWithTrend.stories-DEXUTFzL.js";import{D as x}from"./ComposedChart.stories-BuJOvinN.js";import{D as j}from"./DonutChart.stories-BD_E_6sh.js";import{D as w}from"./LineChart.stories-CwRiebSo.js";import{D as S}from"./PieChart.stories-C7ns0Wp7.js";import{D as R}from"./RadarChart.stories-Dmiv-GI9.js";import{D as I}from"./RadialChart.stories-Cq3lncAH.js";import{D as T}from"./ScatterChart.stories-Csr_CqYN.js";import"./preload-helper-D9Z9MdNV.js";import"./information-Dyf6S5us.js";import"./sys-enter-2-D5_eC5h3.js";import"./alert-BiCZhGMN.js";import"./index-BDC18DOY.js";import"./index-IhZ6wtTw.js";import"./index-Bs2xAB6r.js";import"./Link-CXOXdny5.js";import"./addCustomCSSWithScoping-QAXJ-c-T.js";import"./index-D2ylaH5D.js";import"./index-C-mTSqge.js";import"./index-CxKirG4i.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGaiMck6.js";import"./index-CIcgqU5O.js";import"./Carousel-BrwernSc.js";import"./ScrollEnablement-DgdQ7xkj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-n0wT5xWk.js";import"./slim-arrow-left-Dh_DR3zL.js";import"./DemoProps-CyUJ0vFj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BMZ1h79r.js";import"./ChartContainer-CuF54HR0.js";import"./index-BMPIp6h6.js";import"./useCancelAnimationFallback-Bkq0k23h.js";import"./YAxisTicks-D6szWckA.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CbxaycrH.js";import"./ChartDataLabel-DjQ7XzSd.js";import"./useOnClickInternal-CrLGkWsi.js";import"./react-content-loader.es-ChP5U9J3.js";import"./useIsRTL-DKqS38_i.js";import"./useLongestYAxisLabel-BJoBHx0R.js";import"./ComposedChart-DxdgdSND.js";import"./Line-C_CpirUo.js";import"./Scatter-3G9oJpXx.js";import"./index-BiReFw2I.js";import"./index-2zFaH9Ji.js";import"./Placeholder-CuhwEHnY.js";import"./index-CBJAGj2y.js";const $=`# @ui5/webcomponents-react-charts

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
