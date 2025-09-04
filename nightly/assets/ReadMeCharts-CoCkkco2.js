import{r as i,j as t,T as l}from"./iframe-DOJWwQPM.js";import{useMDXComponents as p}from"./index-D4GYqxG5.js";import{M as u,a as h,k as f}from"./blocks-UH_Armuh.js";import"./Tag-C5qooBCQ.js";import"./index-BzlDTQAu.js";import{F as d}from"./CommandsAndQueries-DBgPcKIy.js";import"./i18n-DSpjDgSK.js";import"./copy-DtHn9BZF.js";import{T as b}from"./TableOfContent-Ckk6Hfr1.js";import{C}from"./index-CrN1R2f2.js";import{D}from"./BarChart.stories-73lw2vYA.js";import{D as y}from"./BulletChart.stories-NBG-GG5o.js";import{D as g}from"./ColumnChart.stories-Yj02ifd_.js";import{D as v}from"./ColumnChartWithTrend.stories-CrM60guE.js";import{D as x}from"./ComposedChart.stories-Ba-Har-L.js";import{D as j}from"./DonutChart.stories-Fc3CbNdZ.js";import{D as w}from"./LineChart.stories-C78c-dJ5.js";import{D as S}from"./PieChart.stories-BhnwfcKw.js";import{D as R}from"./RadarChart.stories-B9bmLmjM.js";import{D as I}from"./RadialChart.stories-DELb6Ajv.js";import{D as T}from"./ScatterChart.stories-Br9J9gLO.js";import"./preload-helper-D9Z9MdNV.js";import"./information-BiSRDS7B.js";import"./sys-enter-2-Ct0rvJ7Z.js";import"./alert-DJAqfmG4.js";import"./index-CKKp0V8L.js";import"./index-BE18fnIz.js";import"./index-CAij4Fwu.js";import"./Link-OhZHx2sI.js";import"./addCustomCSSWithScoping-7a5LAVf5.js";import"./index-IwfXz8bd.js";import"./index-DWcAbIiW.js";import"./index-CCV0Si6x.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-lKnjzqmd.js";import"./index-DKP6N4eU.js";import"./Carousel-DZzOQNvM.js";import"./ScrollEnablement-SdEABngw.js";import"./animate-JylhYHXj.js";import"./AnimationMode-Dlz1UuRL.js";import"./slim-arrow-left-DtlloRLL.js";import"./DemoProps-kRIBXudS.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Dz478Zy6.js";import"./ChartContainer-Dz3awqnc.js";import"./index-Ddj8LW1O.js";import"./useCancelAnimationFallback-BQVaUvQM.js";import"./YAxisTicks-CIMaAcTR.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-tAtCgawL.js";import"./ChartDataLabel-DmDCyhJW.js";import"./useOnClickInternal-zicctbkE.js";import"./react-content-loader.es-sl8TcaF6.js";import"./useIsRTL-B0ileuje.js";import"./useLongestYAxisLabel-Ckno5lCE.js";import"./ComposedChart-DF8sA9hP.js";import"./Line-D2fMC9oI.js";import"./Scatter-DTM65vk4.js";import"./index-Bi3bbFAl.js";import"./index-vz-1yd_I.js";import"./Placeholder-BH_ivZjj.js";import"./index-BXDsti4B.js";const $=`# @ui5/webcomponents-react-charts

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
