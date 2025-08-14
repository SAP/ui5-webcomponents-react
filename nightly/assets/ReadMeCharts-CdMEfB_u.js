import{r as i,j as t,T as l}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as p}from"./index-DE-5xG9A.js";import{M as u,a as h,k as f}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import"./copy-B7_DIIST.js";import{F as d}from"./CommandsAndQueries-DKucLITF.js";import{T as b}from"./TableOfContent-BEHGMBJ6.js";import{C}from"./index-C8_MwClA.js";import{D}from"./BarChart.stories-Cf4fjOtX.js";import{D as y}from"./BulletChart.stories-C-DODq7A.js";import{D as g}from"./ColumnChart.stories-DrXysgx_.js";import{D as v}from"./ColumnChartWithTrend.stories-OFVIsVOm.js";import{D as x}from"./ComposedChart.stories-BLtGdnP5.js";import{D as j}from"./DonutChart.stories-WSr8wwfl.js";import{D as w}from"./LineChart.stories-DqndFeOY.js";import{D as S}from"./PieChart.stories--MnbjKMs.js";import{D as R}from"./RadarChart.stories-D6Nb68mx.js";import{D as I}from"./RadialChart.stories-B3v-wQrP.js";import{D as T}from"./ScatterChart.stories-XAXSVaaE.js";import"./preload-helper-Ct5FWWRu.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./index-CuHvomlB.js";import"./Carousel-E0NwlLew.js";import"./ScrollEnablement-qE5XhDmK.js";import"./animate-JylhYHXj.js";import"./AnimationMode-B7QY32_6.js";import"./slim-arrow-left-D3wQ2sUZ.js";import"./DemoProps-Ck8HVVnR.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DoVkfF6d.js";import"./ChartContainer-CBYE2Vsg.js";import"./index-B7PUGGrO.js";import"./useCancelAnimationFallback-O9osuD3H.js";import"./YAxisTicks-DR5ytyJj.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-pqcsL-pp.js";import"./ChartDataLabel-DTqP7-LR.js";import"./useOnClickInternal-BdxJF8OD.js";import"./react-content-loader.es-CRNq1FHT.js";import"./useIsRTL-Bs-OA-9D.js";import"./useLongestYAxisLabel-CGrYNIBw.js";import"./ComposedChart-pfksoKso.js";import"./Line-BAaJY8yM.js";import"./Scatter-BYweSst-.js";import"./index-DLJ8eq9F.js";import"./PieChart-BOeo8K-c.js";import"./Placeholder-UFhI056P.js";import"./LineChart-CElFWLJ6.js";const $=`# @ui5/webcomponents-react-charts

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
