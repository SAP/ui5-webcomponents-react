import{r as i,j as t,T as l}from"./iframe-Brl1VNXv.js";import{useMDXComponents as p}from"./index-lkEyU_nt.js";import{M as u,a as h,k as f}from"./blocks-BAqV5WPc.js";import"./Tag-CPqPqrcS.js";import"./index-BqPTl_TF.js";import{F as d}from"./CommandsAndQueries-Dk6rSuK-.js";import"./copy-3T1gBUKn.js";import{T as b}from"./TableOfContent-Bh0kKCkd.js";import{C}from"./index-kfCn2xGz.js";import{D}from"./BarChart.stories-BWu7qEKr.js";import{D as y}from"./BulletChart.stories--N_t9S2M.js";import{D as g}from"./ColumnChart.stories-Cn-eHYQm.js";import{D as v}from"./ColumnChartWithTrend.stories-Brx-tq1L.js";import{D as x}from"./ComposedChart.stories-jYyLJvMj.js";import{D as j}from"./DonutChart.stories-C_fQYmMB.js";import{D as w}from"./LineChart.stories-DV3bc3ZC.js";import{D as S}from"./PieChart.stories-C5cL1ekF.js";import{D as R}from"./RadarChart.stories-qK53CJJW.js";import{D as I}from"./RadialChart.stories-A10JdZpP.js";import{D as T}from"./ScatterChart.stories-D6znhKOH.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BqiTraiu.js";import"./sys-enter-2-Br-uV94n.js";import"./alert-DWDpknyG.js";import"./index-cvNk3Ydm.js";import"./index-BAyaq3AZ.js";import"./index-665xf7Lj.js";import"./Link-R6QwvZvg.js";import"./addCustomCSSWithScoping-2pXmrNrJ.js";import"./index-CIiYxA_R.js";import"./index-CQN5QiqO.js";import"./index-BSJzWAI8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BAdmvlBz.js";import"./index-_G4y7meT.js";import"./Carousel-BHVS8QWC.js";import"./ScrollEnablement-vXxL4r_i.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DGrRtjGe.js";import"./slim-arrow-left-DvQQq7xL.js";import"./DemoProps-DBYd_yjC.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-V3EWPnVi.js";import"./ChartContainer-R7lWmjg_.js";import"./index-DJDgDtmd.js";import"./useCancelAnimationFallback-L7SrSuW-.js";import"./YAxisTicks-Cr4qrMDu.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-u7K-2-HE.js";import"./ChartDataLabel-C2Oar9OP.js";import"./useOnClickInternal-BygyAtef.js";import"./react-content-loader.es-B4MWc_Yp.js";import"./useIsRTL-BIUxlTgz.js";import"./useLongestYAxisLabel-QEfkYX8t.js";import"./ComposedChart-DNpAkg4u.js";import"./Line-BOGSUiFp.js";import"./Scatter-19p5AAKD.js";import"./index-ChXrE0pF.js";import"./PieChart-BdvGJDzr.js";import"./Placeholder-CYNtmfXB.js";import"./LineChart-BV0SKyr0.js";const $=`# @ui5/webcomponents-react-charts

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
