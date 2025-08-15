import{r as i,j as t,T as l}from"./iframe-DXDeCCXH.js";import{useMDXComponents as p}from"./index-BVVJ9Xmn.js";import{M as u,a as h,k as f}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import"./copy-WTqS65ha.js";import{F as d}from"./CommandsAndQueries-Dq5DBaAz.js";import{T as b}from"./TableOfContent-Cw9to3Gb.js";import{C}from"./index-DpsVQX-R.js";import{D}from"./BarChart.stories-kjqxxOUP.js";import{D as y}from"./BulletChart.stories-CS67YRkz.js";import{D as g}from"./ColumnChart.stories-kdR1xA-x.js";import{D as v}from"./ColumnChartWithTrend.stories-93dkD3w9.js";import{D as x}from"./ComposedChart.stories-DkH5gb6s.js";import{D as j}from"./DonutChart.stories-CB0CZ1-H.js";import{D as w}from"./LineChart.stories-CkmUJo3n.js";import{D as S}from"./PieChart.stories-Ds9PqwKI.js";import{D as R}from"./RadarChart.stories-7jBh3ELH.js";import{D as I}from"./RadialChart.stories-C3-Xhc-_.js";import{D as T}from"./ScatterChart.stories-DX8zTYdp.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./index-CtGW4gqB.js";import"./Carousel-BYQDMO2Z.js";import"./ScrollEnablement-DAHWVod0.js";import"./animate-JylhYHXj.js";import"./AnimationMode-xL035pwH.js";import"./slim-arrow-left-CDsVvpKZ.js";import"./DemoProps-BuxFMMT0.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DbRQzNYm.js";import"./ChartContainer-KqaonayD.js";import"./index-aDIzQfUJ.js";import"./useCancelAnimationFallback-DbTbKRaJ.js";import"./YAxisTicks-BmAjcAPh.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-hnTyvLwW.js";import"./ChartDataLabel-BOoaUgds.js";import"./useOnClickInternal-DwrGQA2V.js";import"./react-content-loader.es-DwsiRCbp.js";import"./useIsRTL-BkUHaPCa.js";import"./useLongestYAxisLabel-CIues_9v.js";import"./ComposedChart-B4UY_SFv.js";import"./Line-N0oaZlwf.js";import"./Scatter-D2CopmpU.js";import"./index-B8vEVaha.js";import"./PieChart-C5ZT2foI.js";import"./Placeholder-Cn3fKKRQ.js";import"./LineChart-D9psMS_j.js";const $=`# @ui5/webcomponents-react-charts

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
