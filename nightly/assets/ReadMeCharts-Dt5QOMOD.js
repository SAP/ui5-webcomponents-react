import{r as i,j as t,T as l}from"./iframe-zpPFhmqz.js";import{useMDXComponents as p}from"./index-aGUGAxCn.js";import{M as u,a as h,k as f}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import{F as d}from"./CommandsAndQueries-DoDYgPNU.js";import"./i18n-DCXZOGva.js";import"./copy-CsdqLzsD.js";import{T as b}from"./TableOfContent-CoCY-HdJ.js";import{C}from"./index-D0RFblvJ.js";import{D}from"./BarChart.stories-eeBbK5Ww.js";import{D as y}from"./BulletChart.stories-BT3ewvbX.js";import{D as g}from"./ColumnChart.stories-CrmHjfSs.js";import{D as v}from"./ColumnChartWithTrend.stories-C8M1g_hR.js";import{D as x}from"./ComposedChart.stories-CrZ2QSSC.js";import{D as j}from"./DonutChart.stories-2q0pVCpe.js";import{D as w}from"./LineChart.stories-EwpMM8h0.js";import{D as S}from"./PieChart.stories-7t4Btnvw.js";import{D as R}from"./RadarChart.stories-C4U2ArYv.js";import{D as I}from"./RadialChart.stories-_8cS5rk6.js";import{D as T}from"./ScatterChart.stories-HjhxGHWc.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./index-C9UnmKjh.js";import"./Carousel-CFVyNpSr.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-DnZfBRTD.js";import"./DemoProps-DwKWl0IJ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CH5GsF6f.js";import"./ChartContainer-OLdZOBer.js";import"./index-B22sVMzR.js";import"./useCancelAnimationFallback-Cox9uG6-.js";import"./YAxisTicks-9wezsXQG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DHnvTWZH.js";import"./ChartDataLabel-DolTyL0d.js";import"./useOnClickInternal-DXwbtKZz.js";import"./react-content-loader.es-BFgjQDxJ.js";import"./useIsRTL-eXMfvMyV.js";import"./useLongestYAxisLabel-ehEc6Hlz.js";import"./ComposedChart-B93Y1L2m.js";import"./Line-DcqPFZD1.js";import"./Scatter-C_G0HmeG.js";import"./index-BC2aEQnK.js";import"./index-DSmeXgo_.js";import"./Placeholder-BM8yImjg.js";import"./index-DVoZXfDb.js";const $=`# @ui5/webcomponents-react-charts

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
