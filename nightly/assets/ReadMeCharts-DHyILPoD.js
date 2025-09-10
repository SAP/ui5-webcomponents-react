import{r as i,j as t,T as l}from"./iframe-W4A4TPxI.js";import{useMDXComponents as p}from"./index-DR9mRC8k.js";import{M as u,a as h,k as f}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import{F as d}from"./CommandsAndQueries-CqKi30YT.js";import"./copy-ieRXWhTl.js";import{T as b}from"./TableOfContent-C_C61g46.js";import{C}from"./index-W7Azug7r.js";import{D}from"./BarChart.stories-CwKwpUyZ.js";import{D as y}from"./BulletChart.stories-CQ-_jTV1.js";import{D as g}from"./ColumnChart.stories-B7OzzJBn.js";import{D as v}from"./ColumnChartWithTrend.stories-CLulzvE4.js";import{D as x}from"./ComposedChart.stories-Ckc3WiFn.js";import{D as j}from"./DonutChart.stories-Z2KYyVSE.js";import{D as w}from"./LineChart.stories-DZovIXEz.js";import{D as S}from"./PieChart.stories-M-eqL9g6.js";import{D as R}from"./RadarChart.stories-5f3zWwAy.js";import{D as I}from"./RadialChart.stories-4EdYlivL.js";import{D as T}from"./ScatterChart.stories-C-0o70ql.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./index-DKRTY3p_.js";import"./Carousel-Cj__1ia_.js";import"./ScrollEnablement-CshahWxZ.js";import"./animate-JylhYHXj.js";import"./AnimationMode-u2F--Zfr.js";import"./slim-arrow-left-DOoeU_MM.js";import"./DemoProps-ClZyO4MZ.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-B6jKSygB.js";import"./ChartContainer-BLS71XOL.js";import"./index-DcYUW_FQ.js";import"./useCancelAnimationFallback-UKzBpZrt.js";import"./YAxisTicks-fBNlA-bW.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-W-8d44rr.js";import"./ChartDataLabel-Dbp5W_nC.js";import"./useOnClickInternal-Bc0oXHXA.js";import"./react-content-loader.es-CkCYy2ML.js";import"./useIsRTL-B3zfNNQF.js";import"./useLongestYAxisLabel-DOYYi6JS.js";import"./ComposedChart-Bu8Sunm0.js";import"./Line-B0I4M9v8.js";import"./Scatter-BEDb3uPq.js";import"./index-Dnwp13ry.js";import"./index-xHaF0BUN.js";import"./Placeholder-CAUlsxGL.js";import"./index-DD6aCW3C.js";const $=`# @ui5/webcomponents-react-charts

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
