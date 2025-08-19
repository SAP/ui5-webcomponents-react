import{r as i,j as t,T as l}from"./iframe-CvU-07By.js";import{useMDXComponents as p}from"./index-DIsCDPQO.js";import{M as u,a as h,k as f}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import"./copy-TKggWaTM.js";import{F as d}from"./CommandsAndQueries-DbBqwiyb.js";import{T as b}from"./TableOfContent-CxFbZHfF.js";import{C}from"./index-C_I4Tz-B.js";import{D}from"./BarChart.stories-DCO22gwm.js";import{D as y}from"./BulletChart.stories-_fi5PMOv.js";import{D as g}from"./ColumnChart.stories-CUY2RXGA.js";import{D as v}from"./ColumnChartWithTrend.stories-C29Z7VkJ.js";import{D as x}from"./ComposedChart.stories-CWhn3l3f.js";import{D as j}from"./DonutChart.stories-DkelTdfZ.js";import{D as w}from"./LineChart.stories-BktSmAzl.js";import{D as S}from"./PieChart.stories-3ukXa9qx.js";import{D as R}from"./RadarChart.stories-CUxXnMS_.js";import{D as I}from"./RadialChart.stories-DR-WY7bS.js";import{D as T}from"./ScatterChart.stories-Dji7wl7u.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./index-DyAIHHB4.js";import"./Carousel-DRHZALV-.js";import"./ScrollEnablement-Cuj5W76G.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dnmn8WQd.js";import"./slim-arrow-left-C9RNMrzi.js";import"./DemoProps-CCzgznfj.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B2hDLZs2.js";import"./ChartContainer-D6BLRej0.js";import"./index-CF9TteIz.js";import"./useCancelAnimationFallback-C2TGR3XJ.js";import"./YAxisTicks-DhHLnjXp.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CFBSYSET.js";import"./ChartDataLabel-BAhrZMx-.js";import"./useOnClickInternal-BaahWn1f.js";import"./react-content-loader.es-BLVynPke.js";import"./useIsRTL-CCAIfBkQ.js";import"./useLongestYAxisLabel-pIOlPKKh.js";import"./ComposedChart-De936w-J.js";import"./Line-r5VaNs6-.js";import"./Scatter-CL03WB5k.js";import"./index-BD2DEXlw.js";import"./PieChart-DOa0nS3l.js";import"./Placeholder-sfo3-tcQ.js";import"./LineChart-oaGh4KUa.js";const $=`# @ui5/webcomponents-react-charts

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
