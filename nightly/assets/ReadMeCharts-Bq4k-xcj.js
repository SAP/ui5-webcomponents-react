import{r as i,j as t,T as l}from"./iframe-nPyk7Pli.js";import{useMDXComponents as p}from"./index-CtkrgsHZ.js";import{M as u,a as h,k as f}from"./blocks-kpZj3_CU.js";import"./Tag-DE1zjgne.js";import"./index-Db4ElCLi.js";import"./copy-YekArnCd.js";import{F as d}from"./CommandsAndQueries-BH3LWIrk.js";import{T as b}from"./TableOfContent-txTLOiW_.js";import{C}from"./index-DSBZst2t.js";import{D}from"./BarChart.stories-Crns4Tof.js";import{D as y}from"./BulletChart.stories-ByNwQ33p.js";import{D as g}from"./ColumnChart.stories-CEsDxOlq.js";import{D as v}from"./ColumnChartWithTrend.stories-tDvZxwFJ.js";import{D as x}from"./ComposedChart.stories-CxmqnPOO.js";import{D as j}from"./DonutChart.stories-CbfcA4Vl.js";import{D as w}from"./LineChart.stories-C8SN56A8.js";import{D as S}from"./PieChart.stories-B-bGW-QK.js";import{D as R}from"./RadarChart.stories-7_TB3rsE.js";import{D as I}from"./RadialChart.stories-A_8nNkWX.js";import{D as T}from"./ScatterChart.stories-DnC3npq-.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BO_mntst.js";import"./sys-enter-2-DaFu4CEs.js";import"./alert-UB53-VFT.js";import"./index-B-9nmnKT.js";import"./index-4UD2mlLT.js";import"./index-DuhaT3ww.js";import"./Link-DLcMVbxe.js";import"./addCustomCSSWithScoping-98xqr_q6.js";import"./index-BsO78O3m.js";import"./index-QcasdNWm.js";import"./index-CrWnOU7h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cqyy-sBZ.js";import"./index-Bf4gw30l.js";import"./Carousel-BGM8RC3W.js";import"./ScrollEnablement-u7JmO1XQ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CRiFY9sT.js";import"./slim-arrow-left-CCaecx-Y.js";import"./DemoProps-7gECJXuL.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CNloYQAY.js";import"./ChartContainer-oN42UNXP.js";import"./index-CZMRCvhw.js";import"./useCancelAnimationFallback-BJZa6QsV.js";import"./YAxisTicks-DWMOB1Hf.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DpHa1USN.js";import"./ChartDataLabel-Dvkdncsa.js";import"./useOnClickInternal-BYxyy4zC.js";import"./react-content-loader.es-BN6k-YqE.js";import"./useIsRTL-DgP77H3z.js";import"./useLongestYAxisLabel-Ckfa2LHv.js";import"./ComposedChart-CG3D73W0.js";import"./Line-CjjhMa2i.js";import"./Scatter-BMTD03f6.js";import"./index-ljfnxufZ.js";import"./PieChart-wb3f4crh.js";import"./Placeholder-Btanz0dh.js";import"./LineChart-Cv9u6WSC.js";const $=`# @ui5/webcomponents-react-charts

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
