import{r as i,j as t,T as l}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as p}from"./index-CniPTHSz.js";import{M as u,a as h,k as f}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import"./copy-BNU1F6ls.js";import{F as d}from"./CommandsAndQueries-CtCNZgsU.js";import{T as b}from"./TableOfContent-HhhNHGfL.js";import{C}from"./index-D_3uX2NG.js";import{D}from"./BarChart.stories-CR2M3lGf.js";import{D as y}from"./BulletChart.stories-nsev8ilz.js";import{D as g}from"./ColumnChart.stories-CAJ-SHiF.js";import{D as v}from"./ColumnChartWithTrend.stories-jctGfsyc.js";import{D as x}from"./ComposedChart.stories-COzZ8nU0.js";import{D as j}from"./DonutChart.stories-RlHq-25m.js";import{D as w}from"./LineChart.stories-BDdN2ddx.js";import{D as S}from"./PieChart.stories-D-0BluZ9.js";import{D as R}from"./RadarChart.stories-BPuZHdTY.js";import{D as I}from"./RadialChart.stories-BAH4kPY4.js";import{D as T}from"./ScatterChart.stories-Bz_xirzb.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./index--Vew3hXz.js";import"./Carousel-B4X25CcE.js";import"./ScrollEnablement-BN7kIMtj.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CWHb9_GM.js";import"./slim-arrow-left-BVel_PlL.js";import"./DemoProps-Do0MNMjP.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-WpUxV1km.js";import"./ChartContainer-tRROF9WV.js";import"./index-r-PAOf5B.js";import"./useCancelAnimationFallback-DHEuHiGj.js";import"./YAxisTicks-DYlbqSBy.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-uXPkiTz1.js";import"./ChartDataLabel-p4CLs3_h.js";import"./useOnClickInternal-D3djXDTD.js";import"./react-content-loader.es-DThkS0HJ.js";import"./useIsRTL-BMHeZ9la.js";import"./useLongestYAxisLabel-DcWA3bFq.js";import"./ComposedChart-BFg5aOUS.js";import"./Line-Cbu57Mot.js";import"./Scatter-CnP4OXTu.js";import"./index-CP4Bx6rc.js";import"./PieChart-BDv4IWSs.js";import"./Placeholder-BH2wctQB.js";import"./LineChart-DY-A21vv.js";const $=`# @ui5/webcomponents-react-charts

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
