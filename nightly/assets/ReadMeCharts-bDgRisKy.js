import{r as i,j as t,T as l}from"./iframe-BwRZ6zH2.js";import{useMDXComponents as p}from"./index-Dha5O7fd.js";import{M as u,a as h,k as f}from"./blocks-DL1YgvN4.js";import"./Tag-jzGA4JLS.js";import"./index-Bn-_GOqM.js";import{F as d}from"./CommandsAndQueries-DnahCchN.js";import"./copy-14fAizTo.js";import{T as b}from"./TableOfContent-C1cLg550.js";import{C}from"./index-CQYiAQxp.js";import{D}from"./BarChart.stories-CeDIOkGu.js";import{D as y}from"./BulletChart.stories-B8QWrb5_.js";import{D as g}from"./ColumnChart.stories-B0OM3W-x.js";import{D as v}from"./ColumnChartWithTrend.stories-mWozgCzz.js";import{D as x}from"./ComposedChart.stories-DBEejo0g.js";import{D as j}from"./DonutChart.stories-QyBGI-dK.js";import{D as w}from"./LineChart.stories-D3e2NuFb.js";import{D as S}from"./PieChart.stories-CmZltf5q.js";import{D as R}from"./RadarChart.stories-BKDbG0La.js";import{D as I}from"./RadialChart.stories-XRB2e9U1.js";import{D as T}from"./ScatterChart.stories-Da33tSAx.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C-c_P7SM.js";import"./sys-enter-2-Csc9mkjG.js";import"./alert-OSu7g90-.js";import"./index-DC4jF85u.js";import"./index-BMXWdCHK.js";import"./index-B9mzJ7n3.js";import"./Link-CWmfxulK.js";import"./addCustomCSSWithScoping-C9ks6bKt.js";import"./index-CODnJVEI.js";import"./index-Dvv0G0ud.js";import"./index-daxMvW3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHObXTEz.js";import"./index-DNHSASGJ.js";import"./Carousel-UIg9dBWh.js";import"./ScrollEnablement-BFz36fKi.js";import"./animate-JylhYHXj.js";import"./AnimationMode-_z2KRsML.js";import"./slim-arrow-left-SSuHQzuM.js";import"./DemoProps-B-Q4PNg-.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CAJjEt95.js";import"./ChartContainer-BgU0dnyc.js";import"./index-Cagw2uuL.js";import"./useCancelAnimationFallback-TdW4T61P.js";import"./YAxisTicks-hCBye9hF.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DBOuwmYp.js";import"./ChartDataLabel-DW6jjAdC.js";import"./useOnClickInternal-IqmNhS84.js";import"./react-content-loader.es-BI6zsV7A.js";import"./useIsRTL-Bbn2uL0j.js";import"./useLongestYAxisLabel-DR2GhgsC.js";import"./ComposedChart-2mn7WhbA.js";import"./Line-DXrAz0jU.js";import"./Scatter-BPiYR0Sp.js";import"./index-PbekcXEd.js";import"./PieChart-DELEA2B_.js";import"./Placeholder-eA2tk1Sh.js";import"./LineChart-EhQfeDM3.js";const $=`# @ui5/webcomponents-react-charts

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
