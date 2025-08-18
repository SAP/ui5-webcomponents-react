import{r as i,j as t,T as l}from"./iframe-BZQDLaud.js";import{useMDXComponents as p}from"./index-C_GG0ZGD.js";import{M as u,a as h,k as f}from"./blocks-Cx9bcs1C.js";import"./Tag-D-gB3YeX.js";import"./index-DJN5YABY.js";import"./copy-BROMiSoG.js";import{F as d}from"./CommandsAndQueries-DWGWAVRo.js";import{T as b}from"./TableOfContent-BmdOjVK1.js";import{C}from"./index-bd16XN_e.js";import{D}from"./BarChart.stories-CeMCbKUJ.js";import{D as y}from"./BulletChart.stories-Br4_4smX.js";import{D as g}from"./ColumnChart.stories-BAbafxz_.js";import{D as v}from"./ColumnChartWithTrend.stories-BeWltTmd.js";import{D as x}from"./ComposedChart.stories-Yb0bzKwE.js";import{D as j}from"./DonutChart.stories-kHvbiWxM.js";import{D as w}from"./LineChart.stories-BYyUpCNr.js";import{D as S}from"./PieChart.stories-CyXGirlR.js";import{D as R}from"./RadarChart.stories-C1y-OPFW.js";import{D as I}from"./RadialChart.stories-D3Fm-dqf.js";import{D as T}from"./ScatterChart.stories-BZxso4M1.js";import"./preload-helper-Ct5FWWRu.js";import"./information-B9S0fYTB.js";import"./sys-enter-2-CBLZgJFq.js";import"./alert-BSsrq5HK.js";import"./index-8dfRRBIr.js";import"./index-D_nwxPuV.js";import"./index-AG4whyzM.js";import"./Link-CNK5l0fe.js";import"./addCustomCSSWithScoping-BvPnid_d.js";import"./index-Cfu_YQna.js";import"./index-CGfYsqbH.js";import"./index-CvEaTXbe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVHMP-qL.js";import"./index-CKSa3A9-.js";import"./Carousel-Kf0djfxa.js";import"./ScrollEnablement-r9acVsK1.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CXCiaUpj.js";import"./slim-arrow-left-Dl6dMVcL.js";import"./DemoProps-CHTl60z2.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-pzhWSSpJ.js";import"./ChartContainer-P5raShkX.js";import"./index-_38F1i9k.js";import"./useCancelAnimationFallback-BMxZCJcK.js";import"./YAxisTicks-Tpnu7OeF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DXt2gJx_.js";import"./ChartDataLabel-C6Fm6enh.js";import"./useOnClickInternal-CEm824Vd.js";import"./react-content-loader.es-BxQgL2Ql.js";import"./useIsRTL-DZvFLTA0.js";import"./useLongestYAxisLabel-CtG2T5b1.js";import"./ComposedChart-DWT3F3Zj.js";import"./Line-DEp_L-5C.js";import"./Scatter-B-Ytg4Oh.js";import"./index-ByPclrVP.js";import"./PieChart-C7kxFd3o.js";import"./Placeholder-uPruBDcN.js";import"./LineChart-C7mgVlsd.js";const $=`# @ui5/webcomponents-react-charts

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
