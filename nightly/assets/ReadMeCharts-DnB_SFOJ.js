import{r as i,j as t,T as l}from"./iframe-Dk4p-NU5.js";import{useMDXComponents as p}from"./index-CHKRtcGE.js";import{M as u,a as h,k as f}from"./blocks-DM1TPhC8.js";import"./Tag-DIu9mUid.js";import"./index-Dy2aDYnH.js";import{F as d}from"./CommandsAndQueries-DyjrBS1R.js";import"./copy-9E4-O2oJ.js";import{T as b}from"./TableOfContent-Csi_o0XO.js";import{C}from"./index-Cw00zy_4.js";import{D}from"./BarChart.stories-BbDWAX9s.js";import{D as y}from"./BulletChart.stories-W9wP-ezr.js";import{D as g}from"./ColumnChart.stories-DBnQwmRY.js";import{D as v}from"./ColumnChartWithTrend.stories-DihuhZFz.js";import{D as x}from"./ComposedChart.stories-Bax5Fdm3.js";import{D as j}from"./DonutChart.stories-NsVBOpVh.js";import{D as w}from"./LineChart.stories-DQraMFY9.js";import{D as S}from"./PieChart.stories-BJAR2et5.js";import{D as R}from"./RadarChart.stories-Xf9YBjkv.js";import{D as I}from"./RadialChart.stories-DTn3Ph5M.js";import{D as T}from"./ScatterChart.stories-CxQ9Iykw.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BsAdT-Xc.js";import"./sys-enter-2-CC2F8dSm.js";import"./alert-r293I4gz.js";import"./index-CltNqpOu.js";import"./index-C0BhXx34.js";import"./index-BjoQdxqk.js";import"./Link-CnlylsPy.js";import"./addCustomCSSWithScoping-YkmUIPFl.js";import"./index-CWcAFKak.js";import"./index-DSYhAS_G.js";import"./index-oVL9Luq8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CcivO6eQ.js";import"./index-C9rB5uch.js";import"./Carousel-DTwJGNPA.js";import"./ScrollEnablement-BUDpADc-.js";import"./animate-JylhYHXj.js";import"./AnimationMode-JVcrzOQy.js";import"./slim-arrow-left-CZ5SuGbo.js";import"./DemoProps-D8iD4ZKv.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DoLkSqZa.js";import"./ChartContainer-BCmr4s1Z.js";import"./index-DvomD5A_.js";import"./useCancelAnimationFallback-DA54dK0j.js";import"./YAxisTicks-DM3s_r9s.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Df0qbWEq.js";import"./ChartDataLabel-WExQ4ioU.js";import"./useOnClickInternal-DnSqssP-.js";import"./react-content-loader.es-Bmvv7LYj.js";import"./useIsRTL-BuDy2riY.js";import"./useLongestYAxisLabel-BjjpYOI4.js";import"./ComposedChart-Cs2Fnx0t.js";import"./Line-wz0NN4WT.js";import"./Scatter-ILHTrhFT.js";import"./index-DVqN5JTC.js";import"./PieChart-EbC7B0Gt.js";import"./Placeholder-BhHDNs76.js";import"./LineChart-BwHRCayl.js";const $=`# @ui5/webcomponents-react-charts

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
