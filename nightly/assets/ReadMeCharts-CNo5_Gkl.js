import{r as i,j as t,T as l}from"./iframe-DwijkcSC.js";import{useMDXComponents as p}from"./index-dOTQ_8MY.js";import{M as u,a as h,k as f}from"./blocks-CUT7ZaGY.js";import"./Tag-Bj54Z3ZV.js";import"./index-Ksk45rXz.js";import"./copy-BSROPq_0.js";import{F as d}from"./CommandsAndQueries-v2kYi8f6.js";import{T as b}from"./TableOfContent-B_Zj5Anf.js";import{C}from"./index-CPGsMYfc.js";import{D}from"./BarChart.stories-8i4nyZ2m.js";import{D as y}from"./BulletChart.stories-kngKePb8.js";import{D as g}from"./ColumnChart.stories-CuLjvacJ.js";import{D as v}from"./ColumnChartWithTrend.stories-CVLHc3ia.js";import{D as x}from"./ComposedChart.stories-DxObBtsg.js";import{D as j}from"./DonutChart.stories-hCrXnTnG.js";import{D as w}from"./LineChart.stories-p-gRC00M.js";import{D as S}from"./PieChart.stories-oQ23Jf1d.js";import{D as R}from"./RadarChart.stories-DPWMtbmW.js";import{D as I}from"./RadialChart.stories-s0Xg7twj.js";import{D as T}from"./ScatterChart.stories-B3TLXYib.js";import"./preload-helper-Dp1pzeXC.js";import"./information-Cs7yxtQc.js";import"./sys-enter-2-DBwV2-51.js";import"./alert-CIuF-VCg.js";import"./index-ctat__wp.js";import"./index-DBJu9cre.js";import"./index-BFAcwmrh.js";import"./Link-Dpz_tLr_.js";import"./addCustomCSSWithScoping-ZjminMO8.js";import"./index-CKKCTLM1.js";import"./index-BMZXXiof.js";import"./index-g3CDhi_p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CMYwIgDk.js";import"./index-4CSwoMco.js";import"./Carousel-5bUN4et9.js";import"./ScrollEnablement-sczQYiMf.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DWyEnWl1.js";import"./slim-arrow-left-5Qsn3F1z.js";import"./DemoProps--83FNJXc.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DgQw4U3s.js";import"./ChartContainer-DtTRIRXW.js";import"./index-UHAME4Au.js";import"./useCancelAnimationFallback-Bhu8P_Tm.js";import"./YAxisTicks-cBsDAzF_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DwCDmGBb.js";import"./ChartDataLabel-HDNxSKd9.js";import"./useOnClickInternal-BoRLZfXZ.js";import"./react-content-loader.es-BuHsX-DD.js";import"./useIsRTL-Dl-PtuBT.js";import"./useLongestYAxisLabel-DTxUx-Ay.js";import"./ComposedChart-CY692tQB.js";import"./Line-D_AWvbr4.js";import"./Scatter-DjxwZYHX.js";import"./index-B1a0BHhG.js";import"./PieChart-D4vAUvT1.js";import"./Placeholder-ChByK_s6.js";import"./LineChart-DRY9L8J9.js";const $=`# @ui5/webcomponents-react-charts

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
