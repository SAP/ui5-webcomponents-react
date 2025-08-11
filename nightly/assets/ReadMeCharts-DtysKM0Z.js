import{r as i,j as t,T as l}from"./iframe-DvixYE7k.js";import{useMDXComponents as p}from"./index-DvcP8w-F.js";import{M as u,a as h,k as f}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import"./copy-CVzsP6l9.js";import{F as d}from"./CommandsAndQueries-BP59pkyc.js";import{T as b}from"./TableOfContent-gAqVWuC4.js";import{C}from"./index-LK5xlStn.js";import{D}from"./BarChart.stories-CIoWiVoJ.js";import{D as y}from"./BulletChart.stories-Cngbomff.js";import{D as g}from"./ColumnChart.stories-DsKEuEHX.js";import{D as v}from"./ColumnChartWithTrend.stories-oL8yAO8I.js";import{D as x}from"./ComposedChart.stories-AVASauMS.js";import{D as j}from"./DonutChart.stories-BI7S1Zsl.js";import{D as w}from"./LineChart.stories-CmTuolJW.js";import{D as S}from"./PieChart.stories-CrIKM7vt.js";import{D as R}from"./RadarChart.stories-u-kwLrNR.js";import{D as I}from"./RadialChart.stories-CbhDi5-m.js";import{D as T}from"./ScatterChart.stories-CoXsIyPD.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./index-BiNCRTue.js";import"./Carousel-E8At7NaL.js";import"./ScrollEnablement-C5NyvXGb.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CmGWDUpI.js";import"./slim-arrow-left-BRazJaa4.js";import"./DemoProps-B2p3Wk6C.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-83LgWYgO.js";import"./ChartContainer-CCQp-9zw.js";import"./index-TXUBpY7W.js";import"./useCancelAnimationFallback-BGCoCOO8.js";import"./YAxisTicks-CFQfwpLx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-XtR6frXz.js";import"./ChartDataLabel-BKbQOY35.js";import"./useOnClickInternal-CkMhNYje.js";import"./react-content-loader.es-LwLBFaCw.js";import"./useIsRTL-fdT0zKkd.js";import"./useLongestYAxisLabel-B5QSD8DR.js";import"./ComposedChart-Cxp_1SmO.js";import"./Line-DPY4s2fn.js";import"./Scatter-sYMKbWrM.js";import"./index-xrWamTxs.js";import"./PieChart-3Oo8KOEN.js";import"./Placeholder-D0EUx5G3.js";import"./LineChart-D9tZoyt1.js";const $=`# @ui5/webcomponents-react-charts

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
