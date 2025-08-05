import{r as i,j as t,T as l}from"./iframe-DofHecbS.js";import{useMDXComponents as p}from"./index-C8vGIvk8.js";import{M as u,a as h,k as f}from"./blocks-D1wzbhWf.js";import"./Tag-DPdR_js3.js";import"./index-DxedyFSH.js";import"./copy-7CDC0i6_.js";import{F as d}from"./CommandsAndQueries-B_nZVkrt.js";import{T as b}from"./TableOfContent-eAxnF9pp.js";import{C}from"./index-CEja1OLc.js";import{D}from"./BarChart.stories-bSdIXEmG.js";import{D as y}from"./BulletChart.stories-Cj3R9wNJ.js";import{D as g}from"./ColumnChart.stories-bws8noTc.js";import{D as v}from"./ColumnChartWithTrend.stories-CxDpfkWr.js";import{D as x}from"./ComposedChart.stories-Cv-6uchc.js";import{D as j}from"./DonutChart.stories-BfGVBtzG.js";import{D as w}from"./LineChart.stories-BEgw7XhV.js";import{D as S}from"./PieChart.stories-DiMwPIHl.js";import{D as R}from"./RadarChart.stories-2Ezary1E.js";import{D as I}from"./RadialChart.stories-CHgmzbKe.js";import{D as T}from"./ScatterChart.stories-CxKq9tJh.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CgIpVhAV.js";import"./sys-enter-2-BGLCbdRF.js";import"./alert-BfmE4lX_.js";import"./index-2GOtqWe8.js";import"./index-C1xP7ttJ.js";import"./index-JzBnNIyF.js";import"./Link-Cmqq4my9.js";import"./addCustomCSSWithScoping-D75UEBUU.js";import"./index-C1lTEPtW.js";import"./index-D3sPt_5B.js";import"./index-5wCFhmZT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckn3SEtT.js";import"./index-CrXv1RBx.js";import"./Carousel-U4gHCjbL.js";import"./ScrollEnablement-BHaRcurn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-YwzYew3R.js";import"./slim-arrow-left-DMaJEVxO.js";import"./DemoProps-1z0Gc4e5.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BaxY7ToW.js";import"./ChartContainer-OMOLcef1.js";import"./index-Dj8g3dXL.js";import"./useCancelAnimationFallback-Bi4rUda3.js";import"./YAxisTicks-BC7K7tb_.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-BYKJiu5o.js";import"./ChartDataLabel-Cs06p1ta.js";import"./useOnClickInternal-BlS41ej5.js";import"./react-content-loader.es-CM1DnG9V.js";import"./useIsRTL-Ce4m0dIR.js";import"./useLongestYAxisLabel-BtEtgXCK.js";import"./ComposedChart-Ck_BB5bZ.js";import"./Line-DubcnrVS.js";import"./Scatter-VVY-QcU1.js";import"./index-CqJ_I68B.js";import"./PieChart-Dglfhsrg.js";import"./Placeholder-3melwsHX.js";import"./LineChart-C-lX08Ig.js";const $=`# @ui5/webcomponents-react-charts

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
