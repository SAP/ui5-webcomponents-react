import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B5Ip8tK9.js";import"./CommandsAndQueries-lJy8dwpn.js";import{C as i}from"./index-hEShDqOH.js";function r(o){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{id:"with-custom-tooltip-config",children:"With Custom Tooltip Config"}),`
`,n.jsxs(e.p,{children:["Via the ",n.jsx(e.code,{children:"tooltipConfig"})," prop you can override the configuration object for the internally used ",n.jsx(e.code,{children:"recharts"}),` Tooltip popover that is displayed when hovering over data points.
You can find all possible configuration properties `,n.jsx(e.a,{href:"https://recharts.org/en-US/api/Tooltip",rel:"nofollow",children:"here"}),"."]}),`
`,n.jsx(i,{of:o.of}),`
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
`})})]})]})}function p(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{p as M};
