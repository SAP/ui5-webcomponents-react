import{r as i,j as t,T as l}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as p}from"./index-D0kyY75e.js";import{M as u,a as h,k as f}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import{F as d}from"./CommandsAndQueries-YFNvLEil.js";import"./i18n-DCXZOGva.js";import"./copy-DlGd5HR3.js";import{T as b}from"./TableOfContent-DG2LFSrm.js";import{C}from"./index-IksJgeTj.js";import{D}from"./BarChart.stories-BOwFTxDQ.js";import{D as y}from"./BulletChart.stories-DDEdSiDD.js";import{D as g}from"./ColumnChart.stories-ks9c3Mzf.js";import{D as v}from"./ColumnChartWithTrend.stories-DQSZErnJ.js";import{D as x}from"./ComposedChart.stories-BhDJoMz7.js";import{D as j}from"./DonutChart.stories-DNKUD9RZ.js";import{D as w}from"./LineChart.stories-HC0VGik5.js";import{D as S}from"./PieChart.stories-Bm3JvVnU.js";import{D as R}from"./RadarChart.stories--MAZ9zLI.js";import{D as I}from"./RadialChart.stories-D4ZSl-rC.js";import{D as T}from"./ScatterChart.stories-CtP1fVMN.js";import"./preload-helper-D9Z9MdNV.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./index-jqGKriQv.js";import"./Carousel-IHRQkcAY.js";import"./ScrollEnablement-BoXWsWli.js";import"./animate-JylhYHXj.js";import"./AnimationMode-CMNQ38zi.js";import"./slim-arrow-left-zzeEtHXq.js";import"./DemoProps-D2emB240.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-JDe2igTu.js";import"./ChartContainer-C3F4oFLu.js";import"./index-WkNiF2x7.js";import"./useCancelAnimationFallback-DmJaY5B3.js";import"./YAxisTicks-Q5VGYSoW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-CRYWJouq.js";import"./ChartDataLabel-D7_l2nbo.js";import"./useOnClickInternal-DN9K0vUj.js";import"./react-content-loader.es-BOuUbUBY.js";import"./useIsRTL-B82EOOfT.js";import"./useLongestYAxisLabel-Bbl55jGX.js";import"./ComposedChart-BD_zTYFL.js";import"./Line-CFKkjNid.js";import"./Scatter-DG1YsAC2.js";import"./index-CgiPGweg.js";import"./index-BO30SCKa.js";import"./Placeholder-BvOWVCEK.js";import"./index-BE-1dDXm.js";const $=`# @ui5/webcomponents-react-charts

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
