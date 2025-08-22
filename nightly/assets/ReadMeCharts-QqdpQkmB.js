import{r as i,j as t,T as l}from"./iframe-B9d6tunA.js";import{useMDXComponents as p}from"./index-CHHTqEt5.js";import{M as u,a as h,k as f}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import"./copy-DBcroaPr.js";import{F as d}from"./CommandsAndQueries-Dbama0_5.js";import{T as b}from"./TableOfContent-BhxtiYa9.js";import{C}from"./index-omPhuGyR.js";import{D}from"./BarChart.stories-DvSZuRxE.js";import{D as y}from"./BulletChart.stories-Df5zgMAn.js";import{D as g}from"./ColumnChart.stories-D3vldu-v.js";import{D as v}from"./ColumnChartWithTrend.stories-BtbSzBjN.js";import{D as x}from"./ComposedChart.stories-DnKmShYy.js";import{D as j}from"./DonutChart.stories-BeSvE0Dy.js";import{D as w}from"./LineChart.stories-ByiXvY9l.js";import{D as S}from"./PieChart.stories-B83WAO4U.js";import{D as R}from"./RadarChart.stories-DChbZyqN.js";import{D as I}from"./RadialChart.stories-Cf7QgJ-X.js";import{D as T}from"./ScatterChart.stories-HnGXBLNC.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";import"./index-bjg2761A.js";import"./Carousel-BqKCb_sl.js";import"./ScrollEnablement-DMZ5Ege9.js";import"./animate-JylhYHXj.js";import"./AnimationMode-ulPeF3G_.js";import"./slim-arrow-left-gi6jWLsi.js";import"./DemoProps-D8ADxgfz.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-BUYyLimE.js";import"./ChartContainer-R10LR4qr.js";import"./index-DFOOm17j.js";import"./useCancelAnimationFallback-BmTXoAJn.js";import"./YAxisTicks-DJ8hl41q.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dt5uyXeB.js";import"./ChartDataLabel-Byexvtme.js";import"./useOnClickInternal-D629vJh9.js";import"./react-content-loader.es-DFhT-xLw.js";import"./useIsRTL-DOJ0Jr_3.js";import"./useLongestYAxisLabel-C4BOJTLa.js";import"./ComposedChart-CUbNZI9h.js";import"./Line-U03U1Uvm.js";import"./Scatter-DjUQcjBW.js";import"./index-B0fXa3oL.js";import"./PieChart-CTk3vEW3.js";import"./Placeholder-CCoENTYB.js";import"./LineChart-Dk1IIKSs.js";const $=`# @ui5/webcomponents-react-charts

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
