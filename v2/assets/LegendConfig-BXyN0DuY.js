import{j as n}from"./iframe-DTnEqaXa.js";import{useMDXComponents as r}from"./index-Bzwj8IeJ.js";import{C as a}from"./blocks-DjoWO0N0.js";function t(o){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"with-custom-tooltip-config",children:"With Custom Tooltip Config"}),`
`,n.jsxs(e.p,{children:["Via the ",n.jsx(e.code,{children:"tooltipConfig"})," prop you can override the configuration object for the internally used ",n.jsx(e.code,{children:"recharts"}),` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties `,n.jsx(e.a,{href:"https://recharts.org/en-US/api/Tooltip",rel:"nofollow",children:"here"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": It is possible to override the internally used tooltip configurations. Use with caution!"]}),`
`,n.jsx("p",{children:o.additionalDescription}),`
`,n.jsx(a,{of:o.of}),`
`,n.jsxs("details",{children:[n.jsxs("summary",{children:["Show example ",n.jsx(e.code,{children:"tooltipConfig"})]}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`tooltipConfig: {
  wrapperStyle: {
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
    padding: '5px',
    borderRadius: '8px'
  },
  itemStyle: {
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '10px',
    marginBlockStart: '2px'
  },
  contentStyle: {
    background: 'black'
  },
  labelStyle: {
    fontFamily: 'var(--sapFontBoldFamily)',
    color: 'white'
  },
  cursor: { stroke: 'red', strokeWidth: 2, fill: 'transparent' },
  separator: ':~:',
  formatter: (value, name, props) => {
    if (name === 'Users') {
      return [\`\${value}👨‍💻\`, 'Custom Name in Tooltip!'];
    }
    return \`\${value}k\`;
  },
  labelFormatter: (label, payload) => {
    return \`\${label}🗓️\`;
  },
  itemSorter: (item) => {
    return -1;
  }
}
`})})]})]})}function c(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}function i(o){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"with-custom-legend-config",children:"With Custom Legend Config"}),`
`,n.jsxs(e.p,{children:["Via the ",n.jsx(e.code,{children:"chartConfig.legendConfig"})," property you can override the configuration object for the internally used ",n.jsx(e.code,{children:"recharts"}),` Legend component.
You can find all possible configuration properties `,n.jsx(e.a,{href:"https://recharts.org/en-US/api/Legend",rel:"nofollow",children:"here"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": It is possible to override the internally used Legend configurations. Use with caution!"]}),`
`,n.jsx(a,{of:o.of}),`
`,n.jsxs("details",{children:[n.jsxs("summary",{children:["Show example ",n.jsx(e.code,{children:"legendConfig"})]}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`legendConfig: {
  align: 'right',
  iconSize: 20,
  iconType: 'diamond',
  formatter: (value, entry, index) => {
    if (value === 'Users') {
      return <span>{value}🐱</span>;
    }
    return value;
  },
  wrapperStyle: {
    border: '5px solid',
    borderImage: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1',
    padding: '5px',
    borderRadius: '8px'
  }
}
`})})]})]})}function p(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{c as M,p as a};
