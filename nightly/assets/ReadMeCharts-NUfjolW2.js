import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./Title-B9IIhL1L.js";import{n as a,t as o}from"./Carousel-DM9JJSg9.js";import{i as s,r as c}from"./react-fLZJfuRT.js";import{_ as l,d as u,p as d,u as f}from"./blocks-MW67Qccu.js";import{g as p,t as m,u as h}from"./components-hdRKvnj4.js";import{h as g,n as _}from"./BarChart.stories-Bo3baY-f.js";import{c as v,n as y}from"./BulletChart.stories-BlHZnbAB.js";import{h as b,n as x}from"./ColumnChart.stories-BAtuIhRu.js";import{n as S,o as C}from"./ColumnChartWithTrend.stories-CY3KgtH4.js";import{m as w,n as T}from"./ComposedChart.stories-k-EN-ibQ.js";import{p as E,t as D}from"./DonutChart.stories-BqOIgoud.js";import{f as O,t as k}from"./LineChart.stories-D_a3NVMA.js";import{d as A,t as j}from"./PieChart.stories-BC-nq3aD.js";import{l as M,t as N}from"./RadarChart.stories--qV0biXQ.js";import{a as P,t as F}from"./RadialChart.stories-NpkFv_Qc.js";import{c as I,t as L}from"./ScatterChart.stories-DqJl2UlN.js";var R;function z(){return(z=e((()=>{R=`# @ui5/webcomponents-react-charts

Chart library built on top of [recharts](https://recharts.org/) for ui5-webcomponents-react.

## Deprecation Notice

\`@ui5/webcomponents-react-charts\` will be discontinued with v3 of \`@ui5/webcomponents-react\`. The package will not receive updates beyond v2 maintenance.

### Why

This package is not backed by SAP global design or accessibility specifications and does not meet the quality and governance standards of the UI5 Web Components ecosystem. Capturing every aspect of a chart for assistive technologies is inherently complex, and without clear specifications to implement against, comprehensive accessibility support cannot be ensured within current maintenance capacity.

New implementations should not depend on this package. Existing consumers should plan for migration before the v3 release.

If you have questions or concerns, please raise them in the [deprecation announcement](https://github.com/UI5/webcomponents-react/discussions/8528).

### SAP Inner-Source alternative

If you have access to SAP-internal systems, a drop-in replacement is available [\`here\`](https://url.sap/ldfa34).

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

If you’ve enabled \`staticCSSInjected\` on the \`ThemeProvider\` component ([learn more here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-server-side-rendering--docs#add-to-existing-project)), make sure to also import the \`charts\` stylesheet. Otherwise, charts won’t be rendered correctly.

\`\`\`ts
import '@ui5/webcomponents-react-charts/styles.css';
\`\`\`

## Documentation

You can find an interactive documentation in our [Storybook](https://ui5.github.io/webcomponents-react/).

## Contribute

Please check our [Contribution Guidelines](https://github.com/UI5/webcomponents-react/blob/main/CONTRIBUTING.md).

## License

Please see our [LICENSE](https://github.com/UI5/webcomponents-react/blob/main/LICENSE) for copyright and license information.
Detailed information including third-party components and their licensing/copyright information is available via the [REUSE tool](https://api.reuse.software/info/github.com/UI5/webcomponents-react).

<!-- Use the force -->
`})))()}function B(e){let{children:t}=e,n=(0,V.useRef)(null),r=(0,V.useRef)(0),i=(0,V.useRef)(null),a=()=>{i.current&&=(clearInterval(i.current),null)};return(0,V.useEffect)(()=>{let e=n.current;return e&&t.length&&(i.current=setInterval(()=>{r.current++,e.navigateTo(r.current%t.length)},5e3)),()=>{a()}},[t]),(0,H.jsx)(o,{style:{height:`500px`},arrowsPlacement:`Navigation`,cyclic:!0,ref:n,onNavigate:()=>{a()},...e})}var V,H;function U(){return(U=e((()=>{a(),V=t(),H=n()})))()}function W(e){let t={h2:`h2`,...s(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(u,{title:`Charts / Docs`}),`
`,(0,K.jsx)(p,{}),`
`,(0,K.jsx)(f,{children:R.split(`## Documentation`)[0].trim()}),`
`,(0,K.jsx)(t.h2,{id:`charts`,children:`Charts`}),`
`,(0,K.jsx)(B,{children:[{name:`BarChart`,component:_},{name:`BulletChart`,component:y},{name:`ColumnChart`,component:x},{name:`ColumnChartWithTrend`,component:S},{name:`ComposedChart`,component:T},{name:`DonutChart`,component:D},{name:`LineChart`,component:k},{name:`PieChart`,component:j},{name:`RadarChart`,component:N},{name:`RadialChart`,component:F},{name:`ScatterChart`,component:L}].map(e=>(0,K.jsxs)(`div`,{style:{width:`100%`},children:[(0,K.jsx)(i,{children:e.name}),(0,K.jsx)(d,{of:e.component})]},e.name))}),`
`,(0,K.jsx)(h,{})]})}function G(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;function q(){return(q=e((()=>{K=n(),c(),m(),l(),z(),U(),g(),v(),b(),C(),w(),E(),O(),A(),M(),P(),I(),r()})))()}q();export{G as default};