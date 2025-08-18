import{r as i,j as t,T as l}from"./iframe-D1CS9P6r.js";import{useMDXComponents as p}from"./index-DKS5TQ2O.js";import{M as u,a as h,k as f}from"./blocks-MP9p7uJf.js";import"./Tag-r4fVuSPw.js";import"./index-C59Ra6n3.js";import"./copy-BXLeuYzA.js";import{F as d}from"./CommandsAndQueries-D0Ldf7j-.js";import{T as b}from"./TableOfContent-BMLMtwCD.js";import{C}from"./index-DIPE7BcS.js";import{D}from"./BarChart.stories-DABf9xnc.js";import{D as y}from"./BulletChart.stories-Dj1Oljqx.js";import{D as g}from"./ColumnChart.stories-D2E-dqHw.js";import{D as v}from"./ColumnChartWithTrend.stories-1OAfpyoJ.js";import{D as x}from"./ComposedChart.stories-DzvDHTwl.js";import{D as j}from"./DonutChart.stories-BplKlMrt.js";import{D as w}from"./LineChart.stories-3TMhe0ob.js";import{D as S}from"./PieChart.stories-CdrVfQE8.js";import{D as R}from"./RadarChart.stories-DiASADOE.js";import{D as I}from"./RadialChart.stories-CoOvlFUl.js";import{D as T}from"./ScatterChart.stories-BeFtUZUt.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BCqqCqDW.js";import"./sys-enter-2-JjIQxhse.js";import"./alert-DkFxMsXD.js";import"./index-BYGl8AOq.js";import"./index-ChylkqIr.js";import"./index-DHqmSgZq.js";import"./Link-Q9DSvFtD.js";import"./addCustomCSSWithScoping-Djl5XvUO.js";import"./index--uuuPK6U.js";import"./index-B4Hl6Eco.js";import"./index-KmWwkr3l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CUZwPhW2.js";import"./index-CyljgwzW.js";import"./Carousel-1U1CQOGf.js";import"./ScrollEnablement-B8q0SaPn.js";import"./animate-JylhYHXj.js";import"./AnimationMode-BP06niUG.js";import"./slim-arrow-left-BlI9Ow-9.js";import"./DemoProps-JoqQtnsn.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-CJfbstaq.js";import"./ChartContainer-DVqWnXFw.js";import"./index-CkRW9lNl.js";import"./useCancelAnimationFallback-CG3Fs4cy.js";import"./YAxisTicks-CBb-o2cx.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-9W2Ko2WX.js";import"./ChartDataLabel-XyJ58U4Y.js";import"./useOnClickInternal-CNlMCvuM.js";import"./react-content-loader.es-Bpwng07w.js";import"./useIsRTL-DcXN3FqO.js";import"./useLongestYAxisLabel-BaGbnwPt.js";import"./ComposedChart-hHykt48W.js";import"./Line-DEnAUk5t.js";import"./Scatter-BqV6SsES.js";import"./index-D-TvuXO3.js";import"./PieChart-CROk2y1P.js";import"./Placeholder-CZQ8hAjh.js";import"./LineChart-DAirTag8.js";const $=`# @ui5/webcomponents-react-charts

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
