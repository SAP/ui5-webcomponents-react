import{r as i,j as t,T as l}from"./iframe-4VeS9m_X.js";import{useMDXComponents as p}from"./index-DEI3eVkK.js";import{M as u,a as h,k as f}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import"./copy-jnb9sYPg.js";import{F as d}from"./CommandsAndQueries-7kzg9PVA.js";import{T as b}from"./TableOfContent-CuT-m9D7.js";import{C}from"./index-CJhh14I-.js";import{D}from"./BarChart.stories-BmGKATi0.js";import{D as y}from"./BulletChart.stories-BizqUjLJ.js";import{D as g}from"./ColumnChart.stories-CTyiKz6h.js";import{D as v}from"./ColumnChartWithTrend.stories-Bkgco9S3.js";import{D as x}from"./ComposedChart.stories-HygdarYv.js";import{D as j}from"./DonutChart.stories-Cjlbb73u.js";import{D as w}from"./LineChart.stories-5qihA-ia.js";import{D as S}from"./PieChart.stories-Cn9pD_oB.js";import{D as R}from"./RadarChart.stories-CtbSGbIv.js";import{D as I}from"./RadialChart.stories-DMky2FH1.js";import{D as T}from"./ScatterChart.stories-C-l6bOUg.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-CftSo41I.js";import"./Carousel-BdiaVwhk.js";import"./ScrollEnablement-BpLcSAvR.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CW0_yw74.js";import"./slim-arrow-left-BGdI4qko.js";import"./DemoProps-DahZVWVM.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-D-VAufvE.js";import"./ChartContainer-pgp1Nrri.js";import"./index-MVLgI-v_.js";import"./useCancelAnimationFallback-BQuAgLPb.js";import"./YAxisTicks-9EvkRDKN.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-D38UAntf.js";import"./ChartDataLabel-6P7B5gdW.js";import"./useOnClickInternal-CJWN__6l.js";import"./react-content-loader.es-CPy0ifz3.js";import"./useIsRTL-C2A7wRdc.js";import"./useLongestYAxisLabel-BLWx5s2T.js";import"./ComposedChart-kh9TOKlI.js";import"./Line-vV3O4WGH.js";import"./Scatter-B4s_Yokd.js";import"./index-BQoagdXW.js";import"./PieChart-B2fR83cm.js";import"./Placeholder-CYaPDCii.js";import"./LineChart-CQiAGKaj.js";const $=`# @ui5/webcomponents-react-charts

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
