import{r as i,j as t,T as l}from"./iframe-DB1hZqAv.js";import{useMDXComponents as p}from"./index-C7G5dSmF.js";import{M as u,a as h,k as f}from"./blocks-cg9LC1rI.js";import"./Tag-BS7zj2yL.js";import"./index-C5JoWyXC.js";import"./copy-C9f0Ezzi.js";import{F as d}from"./CommandsAndQueries-Btb1kQnC.js";import{T as b}from"./TableOfContent-Bm8mkmjR.js";import{C}from"./index-B20mXqyw.js";import{D}from"./BarChart.stories-D3uF58ys.js";import{D as y}from"./BulletChart.stories-DBN8Qgc0.js";import{D as g}from"./ColumnChart.stories-BMPe_Zgg.js";import{D as v}from"./ColumnChartWithTrend.stories-DmbZjxpY.js";import{D as x}from"./ComposedChart.stories-BbsLm6mH.js";import{D as j}from"./DonutChart.stories-BFmeJ-Bf.js";import{D as w}from"./LineChart.stories-BUlgTbq7.js";import{D as S}from"./PieChart.stories-CcaE75Gk.js";import{D as R}from"./RadarChart.stories-C4FHdYH5.js";import{D as I}from"./RadialChart.stories-B5XQ2lCl.js";import{D as T}from"./ScatterChart.stories-1yllWjT0.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CQEWuKvd.js";import"./sys-enter-2-CKXMqpTE.js";import"./alert-ttvcaVxO.js";import"./index-BbxSTqwp.js";import"./index-DfpSA-Ue.js";import"./index-AyDKBAO2.js";import"./Link-CMn1MwX0.js";import"./addCustomCSSWithScoping-aeW1jsnX.js";import"./index-C0ik2STR.js";import"./index-CDotLVrR.js";import"./index-BvRvvaxi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMluZ7rf.js";import"./index-Dq64mUvA.js";import"./Carousel-BuhR-vql.js";import"./ScrollEnablement-DPTLFCJR.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CPnSNha5.js";import"./slim-arrow-left-CCqPejzm.js";import"./DemoProps-B_PDuPRN.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CNUCaW8b.js";import"./ChartContainer-C4P3Jfae.js";import"./index-B_yjfbdI.js";import"./useCancelAnimationFallback-DCsfvo5J.js";import"./YAxisTicks-Bl8hZB_Z.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-C9DPqLYA.js";import"./ChartDataLabel-DDgPXivo.js";import"./useOnClickInternal-BqXfIOvU.js";import"./react-content-loader.es-Cr2zl8xQ.js";import"./useIsRTL-C-GxNVoX.js";import"./useLongestYAxisLabel-DthWDl0t.js";import"./ComposedChart-EYAPUXN9.js";import"./Line-C2X2P_0F.js";import"./Scatter-BHgUrcSc.js";import"./index-DP5z897g.js";import"./PieChart-DaaxZddi.js";import"./Placeholder-DOLkh1Zx.js";import"./LineChart-1BH68XAa.js";const $=`# @ui5/webcomponents-react-charts

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
