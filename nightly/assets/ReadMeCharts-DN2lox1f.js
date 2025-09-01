import{r as i,j as t,T as l}from"./iframe-Diowpvbi.js";import{useMDXComponents as p}from"./index-BQd2Q0Z3.js";import{M as u,a as h,k as f}from"./blocks-CoZBpVTI.js";import"./Tag-B0clkLGt.js";import"./index-D9YlVxTm.js";import{F as d}from"./CommandsAndQueries-COPBvCoL.js";import"./copy-Cax_mWEs.js";import{T as b}from"./TableOfContent-DfKTIt_V.js";import{C}from"./index-thJvhy1E.js";import{D}from"./BarChart.stories-BFXx7ib9.js";import{D as y}from"./BulletChart.stories-DA47KWLJ.js";import{D as g}from"./ColumnChart.stories-DCXPqip5.js";import{D as v}from"./ColumnChartWithTrend.stories-CraBmIy2.js";import{D as x}from"./ComposedChart.stories-CBkhhRGn.js";import{D as j}from"./DonutChart.stories-C3trjDSS.js";import{D as w}from"./LineChart.stories-BkWJ6Lhw.js";import{D as S}from"./PieChart.stories-CSLt4Nfz.js";import{D as R}from"./RadarChart.stories-C3EWA31v.js";import{D as I}from"./RadialChart.stories-CaP5rx1R.js";import{D as T}from"./ScatterChart.stories-Ce9gHrnP.js";import"./preload-helper-D9Z9MdNV.js";import"./information-CDgRW97e.js";import"./sys-enter-2-DY02qdHz.js";import"./alert-BaFyoXY8.js";import"./index-1wgmtjtJ.js";import"./index-D0g3RjgB.js";import"./index-CQR2h6vO.js";import"./Link-h6HOkbi0.js";import"./addCustomCSSWithScoping-BGpjw9gY.js";import"./index-B-dBAONH.js";import"./index-Ds6FKbjF.js";import"./index-xypPraOX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNWGtsu7.js";import"./index-B-BwEr1u.js";import"./Carousel-BdpIsCK8.js";import"./ScrollEnablement-zRS1AfRM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-zvyreBG3.js";import"./slim-arrow-left-BqE33YlQ.js";import"./DemoProps-yjAXNDba.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B3psJ6eg.js";import"./ChartContainer-DJfWzfza.js";import"./index-jY33nSV8.js";import"./useCancelAnimationFallback-CWapuQIv.js";import"./YAxisTicks-BDl2mrKi.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-_oQcaOyn.js";import"./ChartDataLabel-u3K0BcCJ.js";import"./useOnClickInternal-B-zKZTa1.js";import"./react-content-loader.es-C_cziYky.js";import"./useIsRTL-BHW67YEf.js";import"./useLongestYAxisLabel-D8l1gJV5.js";import"./ComposedChart-DQHfX-y8.js";import"./Line-LJkZMmnV.js";import"./Scatter-BZVEjnCq.js";import"./index-Bxt92bNa.js";import"./PieChart-Dpuipdsh.js";import"./Placeholder-vK9mTmEj.js";import"./LineChart-Cy2Tl1oY.js";const $=`# @ui5/webcomponents-react-charts

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
