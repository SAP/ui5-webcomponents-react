import{r as i,j as t,T as l}from"./iframe-C6IJVCey.js";import{useMDXComponents as p}from"./index-Ds5KjzB0.js";import{M as u,a as h,k as f}from"./blocks-DeRnr9iF.js";import"./Tag-cnX1vvNU.js";import"./index-BUG7WGA1.js";import"./copy-CbqLCcHM.js";import{F as d}from"./CommandsAndQueries-Bd9H39B6.js";import{T as b}from"./TableOfContent-C68i5x5x.js";import{C}from"./index-B21mougw.js";import{D}from"./BarChart.stories-CApuu8R5.js";import{D as y}from"./BulletChart.stories-BLtxSplb.js";import{D as g}from"./ColumnChart.stories-BVVwu9cZ.js";import{D as v}from"./ColumnChartWithTrend.stories-BVto_Dm9.js";import{D as x}from"./ComposedChart.stories-DNLi5JRb.js";import{D as j}from"./DonutChart.stories-BxDdVXVS.js";import{D as w}from"./LineChart.stories-ZhgQP4BK.js";import{D as S}from"./PieChart.stories-Dyxptnm2.js";import{D as R}from"./RadarChart.stories-CkyycSdj.js";import{D as I}from"./RadialChart.stories-B3GsDTRE.js";import{D as T}from"./ScatterChart.stories-q5kvjPvC.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DqbvobJ3.js";import"./sys-enter-2-DTDb_XUo.js";import"./alert-1QQg-aMK.js";import"./index-BVcSPkXT.js";import"./index--LhHeSe7.js";import"./index-WUc2kbX8.js";import"./Link-B3ojWDNP.js";import"./addCustomCSSWithScoping-DU4SAdPD.js";import"./index-Bud7zdyR.js";import"./index-DlMuD-u3.js";import"./index-42vsznvH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DogAS-dB.js";import"./index-DmVW3kBm.js";import"./Carousel-ChfF9CEG.js";import"./ScrollEnablement-DfCxcIin.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BEpZKPtx.js";import"./slim-arrow-left-CvnWsh_w.js";import"./DemoProps-DZ-U1i7t.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CTi1UuNN.js";import"./ChartContainer-Du7ObTpz.js";import"./index-D_T8LUzH.js";import"./useCancelAnimationFallback-C-Yor-Tc.js";import"./YAxisTicks-DTXDWTsG.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DqoX-Z_p.js";import"./ChartDataLabel-DQzlzI76.js";import"./useOnClickInternal-CmlarYUW.js";import"./react-content-loader.es-BFII0Dk0.js";import"./useIsRTL-LYqCZWtn.js";import"./useLongestYAxisLabel-JCXzpqac.js";import"./ComposedChart-BHOiGpP8.js";import"./Line-DfQEckca.js";import"./Scatter-Dj4fOQgb.js";import"./index-BcFYJnoI.js";import"./PieChart-CvSWl21-.js";import"./Placeholder-BZXK1yOo.js";import"./LineChart-DZvqJppD.js";const $=`# @ui5/webcomponents-react-charts

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
