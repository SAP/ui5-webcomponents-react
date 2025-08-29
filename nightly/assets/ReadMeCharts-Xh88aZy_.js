import{r as i,j as t,T as l}from"./iframe-D7jNN5F7.js";import{useMDXComponents as p}from"./index-DKysAdcf.js";import{M as u,a as h,k as f}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import{F as d}from"./CommandsAndQueries-B3x-n25L.js";import"./copy-DjcHAfNd.js";import{T as b}from"./TableOfContent-DsCXo-br.js";import{C}from"./index-BRGbGAf_.js";import{D}from"./BarChart.stories-Bl4z-m_K.js";import{D as y}from"./BulletChart.stories-DQ_6bKpe.js";import{D as g}from"./ColumnChart.stories-BvUuBJEI.js";import{D as v}from"./ColumnChartWithTrend.stories-BhTkjcZ4.js";import{D as x}from"./ComposedChart.stories-BnKBeJ9w.js";import{D as j}from"./DonutChart.stories-C0I0IUAH.js";import{D as w}from"./LineChart.stories-D8gwUhg0.js";import{D as S}from"./PieChart.stories-CNHlnUqE.js";import{D as R}from"./RadarChart.stories-DWmdtfrR.js";import{D as I}from"./RadialChart.stories-DmHxua9b.js";import{D as T}from"./ScatterChart.stories-BejHlGN7.js";import"./preload-helper-Ct5FWWRu.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-C3oU0sTK.js";import"./Carousel-DCTsT2is.js";import"./ScrollEnablement-DtvSga-i.js";import"./animate-JylhYHXj.js";import"./AnimationMode-C6BTHkyo.js";import"./slim-arrow-left-Q6M6z00K.js";import"./DemoProps-BTahw_Rw.js";import"./ThemingParameters-pyhX3s39.js";import"./staticProps-DkhYhSLB.js";import"./ChartContainer-YB--FRlQ.js";import"./index-1d71x-Ip.js";import"./useCancelAnimationFallback-Jt2K-Vb1.js";import"./YAxisTicks-B5fDrXRI.js";import"./debounce-D7W5PopO.js";import"./useTooltipFormatter-Dkeb_YzJ.js";import"./ChartDataLabel-YlpZ453m.js";import"./useOnClickInternal-3RwTab4O.js";import"./react-content-loader.es-Dy-EAmgZ.js";import"./useIsRTL-pM8eUPi3.js";import"./useLongestYAxisLabel-B8aW39zE.js";import"./ComposedChart-CMb9PbtZ.js";import"./Line-gzGQxHu5.js";import"./Scatter-BvMDqSO7.js";import"./index-BdVCgJ4s.js";import"./PieChart-gtW8EnDH.js";import"./Placeholder-CEMiBDFF.js";import"./LineChart-CqWq-Svv.js";const $=`# @ui5/webcomponents-react-charts

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
