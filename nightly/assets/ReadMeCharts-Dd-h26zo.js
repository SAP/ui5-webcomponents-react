import{r as i,j as t,T as l}from"./iframe-BbyAdBbD.js";import{useMDXComponents as p}from"./index-DMrgLDcS.js";import{M as u,a as h,k as f}from"./blocks-BmDzJ9zc.js";import"./Tag-DFDkNEbD.js";import"./index-BOJCW3Cn.js";import"./copy-BF7pXxeM.js";import{F as d}from"./CommandsAndQueries-DIG7kTa0.js";import{T as b}from"./TableOfContent-CIUFbz_I.js";import{C}from"./index-Dynv9_Vb.js";import{D}from"./BarChart.stories-Bx_I_ei-.js";import{D as y}from"./BulletChart.stories-Ce14Atkx.js";import{D as g}from"./ColumnChart.stories-BDnjOEgU.js";import{D as v}from"./ColumnChartWithTrend.stories-BwHzUX7s.js";import{D as x}from"./ComposedChart.stories-CbHgcQX7.js";import{D as j}from"./DonutChart.stories-CyPciB47.js";import{D as w}from"./LineChart.stories-J0pH_dX5.js";import{D as S}from"./PieChart.stories-BJM70I8N.js";import{D as R}from"./RadarChart.stories-CN2DVxx_.js";import{D as I}from"./RadialChart.stories-CPgnVtRo.js";import{D as T}from"./ScatterChart.stories-D-8uyVjS.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DKaoIqMf.js";import"./sys-enter-2-CKPkjpqY.js";import"./alert-D9XuLZDQ.js";import"./index-C8J3KSH2.js";import"./index-DoDw--JI.js";import"./index-B0_PQF5c.js";import"./Link-Dyaix8DR.js";import"./addCustomCSSWithScoping-C5eZLuHk.js";import"./index-CzGjDUib.js";import"./index-uwT0wEXF.js";import"./index-DOb7Y-7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPnL0edq.js";import"./index-B8lW2Kcg.js";import"./Carousel-CE5_Z-Ld.js";import"./ScrollEnablement-DpfeP5CM.js";import"./animate-JylhYHXj.js";import"./AnimationMode-DwoJJXCP.js";import"./slim-arrow-left-S_oFpex8.js";import"./DemoProps-sbdjBx1z.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-Gnf1pLkG.js";import"./ChartContainer-SpzVFOqa.js";import"./index-Ck_-4Rju.js";import"./useCancelAnimationFallback-z1aSCOOQ.js";import"./YAxisTicks-SCPu2pVv.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-B8n1j5FY.js";import"./ChartDataLabel-CzjQ5HAv.js";import"./useOnClickInternal-D29aqVFC.js";import"./react-content-loader.es-BjTMZFK5.js";import"./useIsRTL-9zlLmWw2.js";import"./useLongestYAxisLabel-DAOaHGdh.js";import"./ComposedChart-DulGlWyU.js";import"./Line-gpaskFcc.js";import"./Scatter-BldgrZou.js";import"./index-BQwJaY0C.js";import"./PieChart-CxLnz5KK.js";import"./Placeholder-C4Tff8t-.js";import"./LineChart-Btwvu36u.js";const $=`# @ui5/webcomponents-react-charts

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
