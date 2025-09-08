import{r as i,j as t,T as l}from"./iframe-Cmm295l6.js";import{useMDXComponents as p}from"./index-BXOSXmsP.js";import{M as u,a as h,k as f}from"./blocks-BannUWtC.js";import"./Tag-Dz2xCnCd.js";import"./index-DNlfqL0I.js";import{F as d}from"./CommandsAndQueries-BP_0RozZ.js";import"./copy-D4RoINZh.js";import{T as b}from"./TableOfContent-DN8nHa4m.js";import{C}from"./index-C1yBWSGQ.js";import{D}from"./BarChart.stories-CSKLVND6.js";import{D as y}from"./BulletChart.stories-C-x-JOwO.js";import{D as g}from"./ColumnChart.stories-Bay_GT0d.js";import{D as v}from"./ColumnChartWithTrend.stories-Bs-pXY5P.js";import{D as x}from"./ComposedChart.stories-C2m5NkQy.js";import{D as j}from"./DonutChart.stories-D3tv3gLS.js";import{D as w}from"./LineChart.stories-BQHntNCt.js";import{D as S}from"./PieChart.stories-r7DpsbRL.js";import{D as R}from"./RadarChart.stories-BQkW_enI.js";import{D as I}from"./RadialChart.stories-D_XZ2Me6.js";import{D as T}from"./ScatterChart.stories-TXUu1jdK.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CcrqmRhS.js";import"./sys-enter-2-hqDN1aaD.js";import"./alert-CIjWWYk9.js";import"./index-DjP2_XyX.js";import"./index-Ca8aNZdv.js";import"./index-CFxjX_iC.js";import"./Link-Dxfcpnmp.js";import"./addCustomCSSWithScoping-CT21Dj5u.js";import"./index-BCkLQQTq.js";import"./index-DcC0F_LL.js";import"./index-Bv1uLuLp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bxty8qUP.js";import"./index-B2P7pH2V.js";import"./Carousel-BHoj8aDa.js";import"./ScrollEnablement-BWqjOtqg.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DDSs-ASw.js";import"./slim-arrow-left-CLxMUNFq.js";import"./DemoProps-CnHkplGh.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-MnLvqS2U.js";import"./ChartContainer-wZXV8y1H.js";import"./index-BzcZFawy.js";import"./useCancelAnimationFallback-Cf-3GsH3.js";import"./YAxisTicks-BgkZejKv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-DcfB4zs3.js";import"./ChartDataLabel-UwMuSHlZ.js";import"./useOnClickInternal-yQgGBPwn.js";import"./react-content-loader.es-i3ZylZge.js";import"./useIsRTL-CEwtxJyB.js";import"./useLongestYAxisLabel-DP7l5Hwk.js";import"./ComposedChart-CbJJ4yEB.js";import"./Line-D8PKAVfJ.js";import"./Scatter-CETbvN2q.js";import"./index-HdaqhgIS.js";import"./index-KGtx9fZt.js";import"./Placeholder-DPmluSgk.js";import"./index-BDoO3KOE.js";const $=`# @ui5/webcomponents-react-charts

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
